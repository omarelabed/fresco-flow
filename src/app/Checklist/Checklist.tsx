'use client';

import { ProgressBar } from '../ProgressBar/ProgressBar';
import { initialChecklistMap } from '../data';
import { ChecklistItem } from './ChecklistItem';
import { useDoneItems } from './hooks';

export const Checklist = () => {
	const checklistMap = { ...initialChecklistMap };
	const [doneItems, setDoneItems] = useDoneItems();
	const {size: doneCount} = doneItems;
	const { length: totalCount } = Object.keys(checklistMap);

	const checklistItems = Object.keys(checklistMap)
		.map((key) => checklistMap[key])
		.sort((item) => (doneItems.has(item.key) ? 1 : -1));
	return (
		<div>
			<ProgressBar itemsDone={doneCount} totalItems={totalCount} />
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
