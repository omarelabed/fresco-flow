"use client";

import { getProgressColor } from "../Checklist/utils";

type ProgressBarProp = {
  itemsDone: number;
  totalItems: number;
};

export const ProgressBar = ({ itemsDone, totalItems }: ProgressBarProp) => {
  const percentage = (itemsDone / totalItems) * 100;
  const percentageString = `${percentage}%`;
  return (
    <div className="w-full bg-gray-200 rounded-full h-7.5 dark:bg-gray-700 sticky top-2 opacity-80">
      <div
        className={[
          "h-7.5",
          "rounded-full",
          "my-2",
          "transition-all",
          getProgressColor(percentage === 100),
        ].join(" ")}
        style={{ width: percentageString }}
      >
        <span className="px-2">
          {itemsDone}/{totalItems}
        </span>
      </div>
    </div>
  );
};
