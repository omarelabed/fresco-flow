'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { initialDoneItems } from '../data';
import { ChecklistKey } from './datatypes';

enum LocalStorageKey {
  CHECKLIST_DONE_ITEMS = 'CHECKLIST_DONE_ITEMS',
}

export const useDoneItems = (): [Set<string>, Dispatch<SetStateAction<Set<string>>>] => {
	const [doneItems, setDoneItems] = useState(initialDoneItems);
	useEffect(() => {
		const storedDoneItemsString = window.localStorage.getItem(
			LocalStorageKey.CHECKLIST_DONE_ITEMS
		);
		const storedDoneItems = storedDoneItemsString && storedDoneItemsString !== 'undefined'
			? new Set<ChecklistKey>(JSON.parse(storedDoneItemsString))
			: new Set<ChecklistKey>();
		setDoneItems(storedDoneItems);
	}, []);

	useEffect(() => {
		window.localStorage.setItem(
			LocalStorageKey.CHECKLIST_DONE_ITEMS,
			JSON.stringify(Array.from(doneItems))
		)
	}, [doneItems]);

	return [doneItems, setDoneItems];
};
