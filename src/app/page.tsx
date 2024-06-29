"use client";

import { useEffect, useState } from "react";
import { Checklist } from "./Checklist";
import { useChecklistMap } from "./Checklist/hooks";
import { ProgressBar } from "./ProgressBar/ProgressBar";

export default function Home() {
  const [checklistMap, setChecklistMap] = useChecklistMap();
  return (
    <main className="container mx-auto">
      <section className="mx-4 my-4">
        <h1 className="text-xl">Checklist</h1>
        <Checklist
          checklistMap={checklistMap}
          setChecklistMap={setChecklistMap}
        />
      </section>
    </main>
  );
}
