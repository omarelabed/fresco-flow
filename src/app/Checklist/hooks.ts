"use client";

import { useState } from "react";
import { initialChecklist } from "../data/initialChecklist";

export const useChecklist = () => {
  if (typeof window !== "undefined") {
    const storedChecklist = localStorage.getItem("checklist");
    if (storedChecklist) {
      // Mutation: update the initial checklist with stored data
      for (const initialItem of initialChecklist) {
      }
    }
  }
  return useState(initialChecklist);
};
