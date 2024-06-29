import { Dispatch, SetStateAction } from "react";
import { ChecklistItem } from "./ChecklistItem";
import { ChecklistEntry } from "./types";

type Props = {
  checklist: undefined | ChecklistEntry[];
  setChecklist?: Dispatch<SetStateAction<ChecklistEntry[]>>;
};

export const Checklist = ({
  checklist,
}: Props): JSX.Element => {
  if (!checklist) {
    return (
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    );
  } else {
    return (
      <ul>
        {checklist.map((entry) => (
          <ChecklistItem
            key={entry.key}
            data={entry}
          />
        ))}
      </ul>
    );
  }
};
