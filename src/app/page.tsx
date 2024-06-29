"use client";

import { useState } from "react";
import { Checklist } from "./Checklist";
import { useChecklist } from "./Checklist/hooks";
import { ProgressBar } from "./ProgressBar/ProgressBar";

export default function Home() {
  const [checklist, setChecklist] = useChecklist();
  const initialPercentage =
    checklist &&
    (checklist.filter(({ done }) => done).length / checklist.length) * 100;
  const [percentageDone, setPercentageDone] = useState(initialPercentage);
  return (
    <main className="container mx-auto">
      <section className="mx-4 my-4">
        <h1 className="text-xl">Checklist</h1>
        <ProgressBar percentage={percentageDone} />
        <Checklist checklist={checklist} />
      </section>
    </main>
  );
}
