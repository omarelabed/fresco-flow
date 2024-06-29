import { ChecklistEntry } from '.types';

type ChecklistItemProp = {
  data: ChecklistEntry;
};

export const ChecklistItem = ({
  data: { title, done },
}: ChecklistItemProp): JSX.Element => (
  <li className={`my-1`}>
    <span
      className={`cursor-pointer text-opacity-${
        done ? "10" : "100"
      } hover:text-opacity-45`}
    >
      {title}
    </span>
  </li>
);
