"use client";

import { useEffect, useState } from "react";
import { initialChecklist } from "../data/initialChecklist";
import { ChecklistMap } from "./dataDefinitions";

enum LocalStorageKey {
  CHECKLIST_MAP = "checklistMap",
}

export const useChecklistMap = () => {
  const [checklistMap, setChecklistMap] = useState(() => {
    const storedChecklistMapString = localStorage.getItem(
      LocalStorageKey.CHECKLIST_MAP
    );
    const storedChecklistMap = storedChecklistMapString
      ? JSON.parse(storedChecklistMapString)
      : {};

    // convert to checklist map for efficient data management
    const initialChecklistMap: ChecklistMap = {};
    for (const initialItem of initialChecklist) {
      initialChecklistMap[initialItem.key] = initialItem;
    }
    //
    return { ...initialChecklistMap, ...storedChecklistMap };
  });

  useEffect(() => {
    localStorage.setItem(
      LocalStorageKey.CHECKLIST_MAP,
      JSON.stringify(checklistMap)
    );
  }, [checklistMap]);

  return [checklistMap, setChecklistMap];
};
