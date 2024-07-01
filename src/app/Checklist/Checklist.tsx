'use client';

import { ProgressBar } from '../ProgressBar/ProgressBar';
import { initialChecklistItems } from '../data';
import { ChecklistItem } from './ChecklistItem';
import { useDoneItems } from './hooks';

export const Checklist = () => {
	const [doneItems, setDoneItems] = useDoneItems();

	const checklistItems = [...initialChecklistItems]
		.map((item) => ({ ...item, done: doneItems.has(item.key) }))
		.sort(({ done }) => (done ? 1 : -1));

	return (
		<div>
			<ProgressBar
				itemsDone={doneItems.size}
				totalItems={checklistItems.length}
			/>
			<ul>
				{checklistItems.map((entry) => (
					<ChecklistItem
						key={entry.key}
						initialItemData={entry}
						setDoneItems={setDoneItems}
					/>
				))}
			</ul>
		</div>
	);
};
