export declare type QueuePayloadInCharacter = {
    type: "character";
    params: {
        realm: string;
        region: "us" | "eu";
        name: string;
    };
};
export declare type QueuePayloadInGuild = {
    type: "guild";
    params: {
        realm: string;
        region: "us" | "eu";
        name: string;
    };
};
export declare type QueuePayloadInSpell = {
    type: "spell";
    params: {
        region: "us" | "eu";
        spellId: number;
    };
};
export declare type QueuePayloadInItem = {
    type: "item";
    params: {
        region: "us" | "eu";
        itemId: number;
    };
};
export declare type QueuePayloadIn = QueuePayloadInCharacter | QueuePayloadInSpell | QueuePayloadInItem;
export declare type QueueInsertEventBody<T> = {
    body: T;
};
export declare type QueueInsertEvent = QueueInsertEventBody<QueuePayloadIn>;
export declare type QueueInsertCachedResponse<T = any> = {
    cache: T;
};
export declare type QueueInsertResponse = {
    token: string;
    waitTimeSeconds: number;
};
export declare type QueueLookupEvent = {
    queryStringParameters: {
        token: string;
    };
};
export declare type QueueLookupResponse<T = any> = {
    token: string;
    status: "QUEUE" | "DONE";
    payload: T;
};
export declare type QueueWorkerEvent = {
    input: string;
};
export declare type QueueWorkerInput = {
    token: string;
    wait_time: number;
};
