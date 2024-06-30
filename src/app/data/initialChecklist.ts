import { ChecklistEntry, ChecklistMap } from "../Checklist/datatypes";

export const initialChecklist: ChecklistEntry[] = [
  {
    key: "primary_emergency_fund",
    title: "Primary Emergency Cushion",
    done: false,
    description: [
      'Set aside at least CHF 1 000.- on an account or in cash. Don\' ever touch them! Pro tip: you can frame one (or multiple) CHF 1 000.- bills and hang or keep them in a safe place.'
    ],
  },
  {
    key: "pillar2",
    title: "Pension (2nd Pillar)",
    done: false,
    actions: [
      {
        text: "Send email",
        url: "mailto:?subject=My%20pension&body=Hello%0A%0AI%20want%20to%20ensure%20I%20contribute%20the%20maximum%20amount%20to%20my%20pension%20fund.%20Who%20can%20I%20get%20in%20touch%20with%20to%20ensure%20this%20is%20the%20case%3F%0A%0AThanks!%0A%0AKind%20regards%0A",
      },
    ],
  },
  {
    key: "pillar3a",
    title: "Pillar 3a.",
    done: false,
    actions: [
      {
        text: "Open VIAC 3a Account",
        url: "https://viac.ch/",
      },
      {
        text: "-> learn more",
        url: "https://www.mustachianpost.com/best-3rd-pillar-in-switzerland/",
      },
    ],
  },
  {
    key: "health_insurance_base",
    title: "Basic Health Insurance",
    done: false,
    actions: [
      {
        text: "Find cheapest option",
        url: "https://www.priminfo.admin.ch/de/praemien",
      },
    ],
  },
];

// convert to checklist map for efficient data management
export const initialChecklistMap: ChecklistMap = (() => {
  const initialChecklistMap: ChecklistMap = {};
  for (const initialItem of initialChecklist) {
    initialChecklistMap[initialItem.key] = initialItem;
  }
  return initialChecklistMap;
})();
