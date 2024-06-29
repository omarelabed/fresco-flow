"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ChecklistEntry, ChecklistMap } from "./dataDefinitions";

type ChecklistItemProp = {
  initialItemData: ChecklistEntry;
  setChecklistMap: Function;
};

export const ChecklistItem = ({
  initialItemData,
  initialItemData: { title, done, key },
  setChecklistMap,
}: ChecklistItemProp): JSX.Element => {
  const itemId = `checklist_item_checkbox_${key}`;
  const toggleItem = () => {
    setChecklistMap((previousChecklistMap: ChecklistMap) => {
      const previousItemData = { ...previousChecklistMap[key] };
      return {
        ...previousChecklistMap,
        [key]: { ...previousItemData, done: !previousItemData.done },
      };
    });
  };
  return (
    <li
      className={`my-1`}
      onClick={(event) => {
        event.preventDefault();
        toggleItem();
      }}
    >
      <label
        className={`cursor-pointer text-opacity-${
          done ? "10" : "100"
        } hover:text-opacity-45`}
      >
        <input type="checkbox" name={itemId} id={itemId} checked={done} />{" "}
        {title}
      </label>
    </li>
  );
};
