import { ChecklistEntry, ChecklistKey, ChecklistMap } from '../Checklist/datatypes';

export const initialChecklist: ChecklistEntry[] = [
	{
		key: 'primary_emergency_fund',
		title: 'Primary Emergency Cushion',
		done: false,
		description: [
			"Don't forget to grab your first CHF 1,000 bill in cash and keep it safe in a secure location.",
		],
		actions: [
			{
				text: 'ATMs nearby',
				url: 'https://www.google.com/maps/search/ATMs',
			},
		],
	},
	{
		key: 'pillar2',
		title: 'Pension (2nd Pillar)',
		done: false,
		actions: [
			{
				text: 'Write email',
				url: 'mailto:?subject=My%20pension&body=Hello%0A%0AI%20want%20to%20ensure%20I%20contribute%20the%20maximum%20amount%20to%20my%20pension%20fund.%20Who%20can%20I%20get%20in%20touch%20with%20to%20ensure%20this%20is%20the%20case%3F%0A%0AThanks!%0A%0AKind%20regards%0A',
			},
		],
	},
	{
		key: 'pillar3a',
		title: 'Pillar 3a.',
		done: false,
		description: [
			'[-> Learn more about your Pillar 3a options.](https://www.mustachianpost.com/best-3rd-pillar-in-switzerland/)',
		],
		actions: [
			{
				text: 'Open VIAC 3a Account',
				url: 'https://viac.ch/',
			},
		],
	},
	{
		key: 'health_insurance_base',
		title: 'Basic Health Insurance',
		done: false,
		actions: [
			{
				text: 'Find cheapest option',
				url: 'https://www.priminfo.admin.ch/de/praemien',
			},
		],
	},
];

// convert to checklist map for efficient data management
export const initialChecklistMap: ChecklistMap = Object.fromEntries(
	new Map(initialChecklist.map((item) => [item.key, item]))
);

export const initialDoneItems = new Set<ChecklistKey>(Object.keys(initialChecklistMap).filter(
	(key) => initialChecklistMap[key].done
));
