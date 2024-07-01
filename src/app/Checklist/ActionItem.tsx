import { Action } from './datatypes';

type ActionItemProp = {
  action: Action;
};

export const ActionItem = ({ action: { text, url } }: ActionItemProp) => (
	<li className="list-disc list-inside ml-5">
		{url ? (
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				className="underline"
			>
				{text}
			</a>
		) : (
			text
		)}
	</li>
);
