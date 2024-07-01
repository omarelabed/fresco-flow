'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ChecklistEntry, ChecklistMap } from './datatypes';
import { getProgressColor } from './utils';
import { Actions } from './ActionItems';
import classNames from 'classnames';

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
    <li
      className={classNames(
        'my-2',
        'p-2',
        'rounded-md',
        { 'opacity-65': done },
        'bg-zinc-800'
      )}
    >
      <div className="flex justify-between">
        <h2 className="text-xl">{title}</h2>
        <button
          className={classNames(
            'w-6',
            'h-6',
            'rounded-full',
            'transition',
            getProgressColor(done)
          )}
          onClick={(event) => {
            event.preventDefault();
            toggleItem();
          }}
        >
          {done && '✓'}
        </button>
      </div>
      {description &&
        description.map((paragraph, index) => (
          <p className="text-sm" key={index}>
            {paragraph}
          </p>
        ))}
      {actions && <Actions actions={actions} />}
    </li>
  );
};
