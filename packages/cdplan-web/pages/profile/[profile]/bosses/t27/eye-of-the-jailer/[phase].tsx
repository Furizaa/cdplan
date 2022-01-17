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
import { HStack } from "@chakra-ui/layout";
import BossTableMenuStage from "@BossAssignments/components/BossTableMenuStage";
import useBossStage from "@BossAssignments/hooks/useBossStage";
import useProfileInitialization from "@Core/hooks/useProfileInitialization";

const BOSS = BOSSES.T27.EYE_OF_THE_JAILER;

const DynamicBoss = dynamic(() => import("@BossAssignments/components/Boss"), { ssr: false });

export default function EyeOfTheJailer() {
  useProfileInitialization();
  const { bossStage, setBossStage } = useBossStage(BOSS);
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

  if (!bossStage) {
    return null;
  }

  return (
    <Layout
      heading={BOSS.name}
      gameIcon={BOSS.icon}
      menu={
        <HStack>
          <BossTableMenuStage value={bossStage.slug} onChange={setBossStage} boss={BOSS} />
          <BossTableMenuActions boss={BOSS} createErtNote={ertNote} />
        </HStack>
      }
    >
      <DynamicBoss boss={BOSS} stageKey={bossStage.key} />
    </Layout>
  );
}
