'use client';
import { useState } from 'react';
import { Question } from '@/data/questions';

export default function QuestionCard({ question }: { question: Question }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-2 py-1 rounded">
          {question.subject}
        </span>
      </div>
      
      <p className="text-lg font-medium text-slate-800 mb-6">{question.text}</p>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          let buttonStyle = "border-slate-200 hover:border-blue-400 bg-white";
          
          if (selected !== null) {
            if (index === question.correctAnswer) {
              buttonStyle = "bg-green-100 border-green-500 text-green-700 font-semibold";
            } else if (selected === index) {
              buttonStyle = "bg-red-100 border-red-500 text-red-700";
            } else {
              buttonStyle = "opacity-50 border-slate-100";
            }
          }

          return (
            <button
              key={index}
              disabled={selected !== null}
              onClick={() => setSelected(index)}
              className={`w-full text-left p-4 border-2 rounded-xl transition-all flex justify-between items-center ${buttonStyle}`}
            >
              <span>{option}</span>
              {selected !== null && index === question.correctAnswer && <span>✓</span>}
            </button>
          );
        })}
      </div>
      
      {selected !== null && (
        <p className="mt-4 text-sm font-medium animate-in fade-in slide-in-from-top-1">
          {selected === question.correctAnswer ? 
            <span className="text-green-600">Correct! Great job.</span> : 
            <span className="text-red-600">Incorrect. The correct answer is option {question.correctAnswer + 1}.</span>
          }
        </p>
      )}
    </div>
  );
}
