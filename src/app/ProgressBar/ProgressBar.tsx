'use client';

import classNames from 'classnames';

type ProgressBarProp = {
  itemsDone: number;
  totalItems: number;
};

export const ProgressBar = ({ itemsDone, totalItems }: ProgressBarProp) => {
  const percentage = (itemsDone / totalItems) * 100;
  const percentageString = `${percentage}%`;
  return (
    <div className="w-full bg-blue-200 rounded-full h-7.5 dark:bg-blue-800 sticky top-0">
      <div
        className={classNames(
          'h-7.5',
          'rounded-full',
          'my-2',
          'transition-all',
          'bg-green-200',
          'dark:bg-green-800',
        )}
        style={{ width: percentageString }}
      >
        <span className="px-2">
          {itemsDone}/{totalItems}
        </span>
      </div>
    </div>
  );
};
