export type ChecklistEntry = {
  title: string;
  done: boolean;
  key: string;
  description?: Paragraph[];
  actions?: Action[];
};

export type ChecklistMap = {
  [key: ChecklistEntry['key']]: ChecklistEntry;
};

export type Action = {
  text: string;
  url?: string;
};

export type Paragraph = string;
