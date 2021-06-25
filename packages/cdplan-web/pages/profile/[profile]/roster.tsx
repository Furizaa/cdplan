import React from "react";
import dynamic from "next/dynamic";

const NoSSRRosterView = dynamic(() => import("@BossAssignments/views/RosterView"), {
  ssr: false,
});

export default function Home() {
  return <NoSSRRosterView />;
}
