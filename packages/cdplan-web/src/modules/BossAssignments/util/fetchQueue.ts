import { DBC } from "types";

interface Params<T> {
  body: any;
  onUpdate?: (entry: DBC.API.AsyncStore<T>) => void;
}

interface MultiParams<T> {
  payload: Params<T>[];
  onProgress?: (total: number, loaded: number) => void;
}

const QUEUE_GRACE_PERIOD_MS = 1250;
const QUEUE_RETRY_PERIOD_MS = 3000;
const QUEUE_RETRY_COUNT = 3;

export async function fetchQueue<T>(params: Params<T>) {
  const onUpdate = params.onUpdate || (() => null);

  const checkQueueStatus = async (token: string, tryCount: number) => {
    const result = await fetch(`/api/proxy/queue?token=${token}`);
    const json = (await result.json()) as DBC.API.QueuedLookupResult<DBC.API.Result<T>>;

    if (json.status === "DONE") {
      onUpdate({ status: "done", error: json.payload.error, data: json.payload.data });

      return;
    }
    if (json.status === "QUEUE" && tryCount <= QUEUE_RETRY_COUNT) {
      setTimeout(() => checkQueueStatus(json.token, tryCount + 1), QUEUE_RETRY_PERIOD_MS);
      return;
    }

    onUpdate({ status: "done", error: { code: 500, text: "Queue offline." }, data: null });
  };

  onUpdate({ data: null, status: "loading", error: null });

  const result = await fetch(`/api/proxy/queue`, {
    method: "POST",
    body: JSON.stringify(params.body),
  });
  const json = (await result.json()) as DBC.API.QueuedResult<T>;

  if ("cache" in json) {
    if (json.cache.data) {
      onUpdate({ status: "done", error: null, data: json.cache.data });
      return;
    }
    onUpdate({ status: "done", error: json.cache.error, data: null });
    return;
  }

  if ("token" in json) {
    onUpdate({ status: "queue", error: null, data: null });
    const queueTime = json.waitTimeSeconds * 1000 + QUEUE_GRACE_PERIOD_MS;
    setTimeout(() => checkQueueStatus(json.token, 0), queueTime);
  }
}

export async function fetchMultiQueue<T>(params: MultiParams<T>) {
  const total = params.payload.length;
  let loaded = 0;

  params.payload.forEach((body) => {
    const updateHook = (entry: DBC.API.AsyncStore<T>) => {
      if (entry.status === "done") {
        loaded += 1;
      }
      if (body.onUpdate) {
        body.onUpdate(entry);
      }
      if (params.onProgress) {
        params.onProgress(total, loaded);
      }
    };
    const hookedBody = {
      ...body,
      onUpdate: updateHook,
    };
    fetchQueue(hookedBody);
  });
}
