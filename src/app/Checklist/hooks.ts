"use client";

import { useEffect, useState } from "react";
import {
  initialChecklist,
  initialChecklistMap,
} from "../data/initialChecklist";
import { ChecklistMap } from "./datatypes";

enum LocalStorageKey {
  CHECKLIST_MAP = "checklistMap",
}

export const useChecklistMap = () => {
  const [checklistMap, setChecklistMap] = useState(initialChecklistMap);

  // useEffect makes sure that the `window` is available
  useEffect(() => {
    const storedChecklistMapString = window.localStorage.getItem(
      LocalStorageKey.CHECKLIST_MAP
    );
    const storedChecklistMap = storedChecklistMapString
      ? JSON.parse(storedChecklistMapString)
      : {};
    setChecklistMap({ ...initialChecklistMap, ...storedChecklistMap });
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      LocalStorageKey.CHECKLIST_MAP,
      JSON.stringify(checklistMap)
    );
  }, [checklistMap]);

  return [checklistMap, setChecklistMap];
};
