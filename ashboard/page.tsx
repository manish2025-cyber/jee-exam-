import { mockQuestions } from '@/data/questions';
import QuestionCard from '@/components/QuestionCard';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">JEE Mock Practice</h1>
            <p className="text-slate-500">Solve the following questions to test your knowledge.</p>
          </div>
          <Link href="/" className="text-blue-600 font-medium hover:underline">
            Back to Home
          </Link>
        </header>

        <div className="grid gap-6">
          {mockQuestions.map((q) => (
            <QuestionCard key={q.id} question={q} />
          ))}
        </div>
      </div>
    </main>
  );
}
