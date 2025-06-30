import Link from 'next/link';
import TemplateCard from '../components/TemplateCard';
import { topTemplates } from '../../data/templates';

export default function HomePage() {
  return (
    <main className="px-6 py-10">
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">AI Resume Generator</h1>
        <Link href="/builder"><a className="bg-blue-600 text-white px-5 py-3 rounded">Get Started</a></Link>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-6">Top Templates</h2>
        <div className="grid grid-cols-2 gap-6">
          {topTemplates.map(t => <TemplateCard key={t.id} template={t} />)}
        </div>
      </section>
    </main>
  );
}
