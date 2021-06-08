import React, { useCallback } from "react";
import { BOSSES } from "@cdplan/db";
import ReactDOMServer from "react-dom/server";
import dynamic from "next/dynamic";
import Layout from "@BossAssignments/components/Layout";
import BossTableMenuActions from "@BossAssignments/components/BossTableMenuActions";
import { decode } from "html-entities";
import ERTRoot from "@BossAssignments/components/ERT/ERTRoot";
import useBossStore from "@BossAssignments/store/useBossStore";
import useRosterStore from "@BossAssignments/store/useRosterStore";

const BOSS = BOSSES.T26.SIRE_DENATHRIUS;

const DynamicBoss = dynamic(() => import("@BossAssignments/components/Boss"), { ssr: false });

export default function BossPage() {
  const [roster, cooldowns] = useRosterStore(
    useCallback((store) => [store.getAllGroupCharacters(), store.getCooldowns()], [])
  );
  const [mitigations, soaks] = useBossStore(useCallback((store) => [store.mitigations, store.getSoaks()], []));

  const ertNote = useCallback(
    () =>
      decode(
        ReactDOMServer.renderToString(
          <ERTRoot boss={BOSS} raidCooldowns={cooldowns} mitigations={mitigations} roster={roster} soaks={soaks} />
        )
          .replaceAll("<!-- -->", "\n")
          .replace(/(\r\n|\n|\r)/gm, "")
          .replaceAll("\\n", "\n")
      ),
    [cooldowns, mitigations, roster, soaks]
  );

  return (
    <Layout
      heading={BOSS.name}
      gameIcon={BOSS.icon}
      menu={<BossTableMenuActions boss={BOSS} createErtNote={ertNote} />}
    >
      <DynamicBoss boss={BOSS} />
    </Layout>
  );
}
