"use client";

import { ProgressBar } from "../ProgressBar/ProgressBar";
import { ChecklistItem } from "./ChecklistItem";
import { useChecklistMap } from "./hooks";

export const Checklist = (): JSX.Element => {
  const [checklistMap, setChecklistMap] = useChecklistMap();
  const keys = Object.keys(checklistMap);
  const doneCount = keys.filter((key) => checklistMap[key].done).length;
  const totalCount = keys.length;
  const percentageDone = (doneCount / totalCount) * 100;

  const checklistItems = checklistMap
    ? Object.keys(checklistMap).map((key) => checklistMap[key])
    : [];
  if (!checklistItems) {
    return (
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    );
  } else {
    return (
      <div>
        <ProgressBar percentage={percentageDone} />
        <ul>
          {checklistItems.map((entry) => (
            <ChecklistItem
              key={entry.key}
              initialItemData={entry}
              setChecklistMap={setChecklistMap}
            />
          ))}
        </ul>
      </div>
    );
  }
};
