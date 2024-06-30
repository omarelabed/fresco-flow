import { ActionItem } from "./ActionItem";
import { Action } from "./datatypes";

type ActionsProp = {
  actions: Action[];
};

export const Actions = ({ actions }: ActionsProp) => (
  <div>
    <ul>
      {actions.map((action) => (
        <ActionItem key={action.text} action={action} />
      ))}
    </ul>
  </div>
);
