export type ChecklistEntry = {
  title: string;
  done: boolean;
  key: string;
};

export type ChecklistMap = {
  [key: ChecklistEntry['key']]: ChecklistEntry;
};
