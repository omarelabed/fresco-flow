"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ChecklistEntry, ChecklistMap } from "./datatypes";
import { getProgressColor } from "./utils";
import { Actions } from "./ActionItems";

type ChecklistItemProp = {
  initialItemData: ChecklistEntry;
  setChecklistMap: Dispatch<SetStateAction<ChecklistMap>>;
};

export const ChecklistItem = ({
  initialItemData: { title, done, key, actions, description },
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
    <li className="my-1 p-2 rounded">
      <div className="flex justify-between">
        <h2 className="text-xl">{title}</h2>
        <button
          className={[
            "w-6",
            "h-6",
            "rounded-full",
            'text-xl',
            getProgressColor(done),
          ].join(" ")}
          onClick={(event) => {
            event.preventDefault();
            toggleItem();
          }}
        >
          {done && "✓"}
        </button>
      </div>
      {description && description.map((paragraph, index) => <p className="text-sm" key={index}>{paragraph}</p>)}
      {actions && <Actions actions={actions} />}
    </li>
  );
};
