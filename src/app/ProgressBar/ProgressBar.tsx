"use client";

import { getProgressColor } from "../Checklist/utils";

export const ProgressBar = ({ percentage = 0 }: { percentage: number }) => {
  const percentageString = `${percentage}%`;
  return (
    <div className="w-full bg-gray-200 rounded-full h-7.5 dark:bg-gray-700">
      <div
        className={[
          "h-7.5",
          "rounded-full",
          "my-2",
          getProgressColor(percentage === 100),
        ].join(" ")}
        style={{ width: percentageString }}
      >
        <span className="px-2">{percentageString}</span>
      </div>
    </div>
  );
};
