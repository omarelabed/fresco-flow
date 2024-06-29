"use client";

export const ProgressBar = ({ percentage = 0 }: { percentage: number }) => {
  const percentageString = `${percentage}%`;
  console.log("progress:", percentageString);
  return (
    <div className="w-full bg-gray-200 rounded-full h-7.5 dark:bg-gray-700">
      <div
        className="bg-blue-600 h-7.5 rounded-full my-2"
        style={{ width: percentageString }}
      >
        <span className="px-2">{percentageString}</span>
      </div>
    </div>
  );
};
