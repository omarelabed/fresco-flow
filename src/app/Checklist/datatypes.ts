export type ChecklistEntry = {
  title: string;
  done: boolean;
  key: ChecklistKey;
  description?: Paragraph[];
  actions?: Action[];
};

export type ChecklistKey = string;

export type ChecklistMap = {
  [key: ChecklistEntry['key']]: ChecklistEntry;
};

export type Action = {
  text: string;
  url: string;
};

export type Paragraph = string;
