export type ChecklistEntry = {
  title: string;
  done: boolean;
  key: string;
  actions?: Action[];
};

export type ChecklistMap = {
  [key: ChecklistEntry['key']]: ChecklistEntry;
};

export type Action = {
  text: string;
  url?: string;
};
