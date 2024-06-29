"use client";

import { useState } from "react";
import { initialChecklist } from "../data/initialChecklist";
import { ChecklistMap } from "./dataDefinitions";

export const useChecklistMap = () => {
  const checklistMap: ChecklistMap = {};
  if (typeof window !== "undefined") {
    const storedChecklistMapString = localStorage.getItem("checklistMap");

    // convert to checklist map for efficient data management
    for (const initialItem of initialChecklist) {
      checklistMap[initialItem.key] = initialItem;
    }
    if (storedChecklistMapString) {
      const storedChecklistMap: ChecklistMap = JSON.parse(
        storedChecklistMapString
      );
      // Mutation: update the initial checklist with stored data
      const storedKeys = Object.keys(storedChecklistMap);
      for (const storedKey of storedKeys) {
        checklistMap[storedKey] = storedChecklistMap[storedKey];
      }
    }
  }
  return useState(checklistMap);
};
