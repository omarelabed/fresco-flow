'use client';

import {
	Dispatch,
	SetStateAction,
	useCallback,
	useState,
} from 'react';
import { ChecklistEntry, ChecklistKey } from './datatypes';
import { getProgressColor } from './utils';
import { Actions } from './ActionItems';
import classNames from 'classnames';
import Markdown from 'react-markdown';

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
				'rounded-lg',
				{ 'opacity-65': isDone },
				'bg-zinc-800'
			)}
		>
			<div className="flex justify-between">
				<h2 className={classNames('text-xl', { 'line-through': isDone })}>
					{title}
				</h2>
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
			{!isDone &&
        description &&
        description.map((paragraph, index) => (
        	<div className="text-sm" key={index}>
        		<Markdown>{paragraph}</Markdown>
        	</div>
        ))}
			{!isDone && actions && <Actions actions={actions} />}
		</li>
	);
};
