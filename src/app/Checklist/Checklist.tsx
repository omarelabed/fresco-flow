'use client';

import { ProgressBar } from '../ProgressBar/ProgressBar';
import { ChecklistItem } from './ChecklistItem';
import { useChecklistMap } from './hooks';

export const Checklist = () => {
	const [checklistMap, setChecklistMap] = useChecklistMap();
	const keys = Object.keys(checklistMap);
	const doneCount = keys.filter((key) => checklistMap[key].done).length;
	const totalCount = keys.length;

	const checklistItems = Object.keys(checklistMap)
		.map((key) => checklistMap[key])
		.sort((item) => (item.done ? 1 : -1));
	return (
		<div>
			<ProgressBar itemsDone={doneCount} totalItems={totalCount} />
			<ul>
				{checklistItems.map((entry) => (
					<ChecklistItem
						key={entry.key}
						initialItemData={entry}
						setChecklistMap={setChecklistMap}
					/>
				))}
			</ul>
		</div>
	);
};
