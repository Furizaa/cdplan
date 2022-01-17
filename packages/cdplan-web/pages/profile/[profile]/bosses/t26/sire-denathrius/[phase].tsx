import React, { useCallback } from "react";
import { BOSSES, SPELLS } from "@cdplan/db";
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
import T26B10CleansingPain from "@BossAssignments/components/MechanicValidation/T26B10CleansingPain";
import useBossStage from "@BossAssignments/hooks/useBossStage";
import useProfileInitialization from "@Core/hooks/useProfileInitialization";

const BOSS = BOSSES.T26.SIRE_DENATHRIUS;

const DynamicBoss = dynamic(() => import("@BossAssignments/components/Boss"), { ssr: false });

export default function SireDenathrius() {
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
      <DynamicBoss
        boss={BOSS}
        stageKey={bossStage.key}
        renderMechanicValidation={(mechanic) => {
          if (mechanic.spell.id === SPELLS.T26.SIRE_DENATHRIUS.CLEANSING_PAIN.id) {
            if (mechanic.key === "T26/B10/CP1") {
              return <T26B10CleansingPain mechanicKey={mechanic.key} summaryMechanicKeys={["T26/B10/CP1"]} />;
            }
            if (mechanic.key === "T26/B10/CP2") {
              return (
                <T26B10CleansingPain mechanicKey={mechanic.key} summaryMechanicKeys={["T26/B10/CP1", "T26/B10/CP2"]} />
              );
            }
            if (mechanic.key === "T26/B10/CP3") {
              return (
                <T26B10CleansingPain
                  mechanicKey={mechanic.key}
                  summaryMechanicKeys={["T26/B10/CP1", "T26/B10/CP2", "T26/B10/CP3"]}
                />
              );
            }
            if (mechanic.key === "T26/B10/CP4") {
              return (
                <T26B10CleansingPain
                  mechanicKey={mechanic.key}
                  summaryMechanicKeys={["T26/B10/CP1", "T26/B10/CP2", "T26/B10/CP3", "T26/B10/CP4"]}
                />
              );
            }
            if (mechanic.key === "T26/B10/CP5") {
              return (
                <T26B10CleansingPain
                  mechanicKey={mechanic.key}
                  summaryMechanicKeys={["T26/B10/CP1", "T26/B10/CP2", "T26/B10/CP3", "T26/B10/CP4", "T26/B10/CP5"]}
                />
              );
            }
            if (mechanic.key === "T26/B10/CP6") {
              return (
                <T26B10CleansingPain
                  mechanicKey={mechanic.key}
                  summaryMechanicKeys={[
                    "T26/B10/CP1",
                    "T26/B10/CP2",
                    "T26/B10/CP3",
                    "T26/B10/CP4",
                    "T26/B10/CP5",
                    "T26/B10/CP6",
                  ]}
                />
              );
            }
          }
          return null;
        }}
      />
    </Layout>
  );
}
