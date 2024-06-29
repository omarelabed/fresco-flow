import { Checklist } from "./Checklist";

export default function Home() {
  return (
    <main className="container mx-auto">
      <section className="mx-4 my-4">
        <h1 className="text-xl">Checklist</h1>
        <Checklist />
      </section>
    </main>
  );
}
