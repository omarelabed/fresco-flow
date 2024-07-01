import { Action } from './datatypes';

type ActionItemProp = {
  action: Action;
};

export const ActionItem = ({ action: { text, url } }: ActionItemProp) => (
	<li className="flex justify-between">
		<span>
			{text}
		</span>
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="underline"
		>
			Take Action
		</a>
	</li>
);
