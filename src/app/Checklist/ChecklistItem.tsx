'use client';

import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { ChecklistEntry, ChecklistKey, ChecklistMap } from './datatypes';
import { getProgressColor } from './utils';
import { Actions } from './ActionItems';
import classNames from 'classnames';

type ChecklistItemProp = {
  initialItemData: ChecklistEntry;
  setDoneItems: Dispatch<SetStateAction<Set<string>>>;
};

export const ChecklistItem = ({
	initialItemData: { title, done, key, actions, description },
	setDoneItems,
}: ChecklistItemProp): JSX.Element => {
	const [isDone, setIsDone] = useState(done);
	const toggleItem = useCallback(() => {
		setDoneItems((previousDoneItems: Set<ChecklistKey>): Set<ChecklistKey> => {
			const currentDone = !isDone;
			setIsDone(currentDone);
			console.log('key', key);
			const doneKeys = new Set(previousDoneItems);
			console.log('currentDone', currentDone);
			if (currentDone) {
				doneKeys.add(key);
			} else {
				doneKeys.delete(key);
			}
			console.log('doneKeys', doneKeys);
			return doneKeys;
		});
	}, [isDone, key, setDoneItems]);
	return (
		<li
			className={classNames(
				'my-2',
				'p-2',
				'rounded-md',
				{ 'opacity-65': isDone },
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
						getProgressColor(isDone)
					)}
					onClick={(event) => {
						event.preventDefault();
						toggleItem();
					}}
				>
					{isDone && '✓'}
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
