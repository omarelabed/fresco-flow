import { Checklist } from './Checklist';

export default function Home() {
	return (
		<main className="container mx-auto">
			<section className="mx-4 my-4">
				<h1 className="text-2xl">Checklist</h1>
				<p>Make sure you&apos;re on track with your personal finances with this simple tracking tool.</p>
				<Checklist />
			</section>
		</main>
	);
}
