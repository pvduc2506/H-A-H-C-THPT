import React from 'react';
import { SectionCard } from './SectionCard';
import { HISTORY_CONTENT } from '../constants';

export const HistorySection: React.FC = () => {
  return (
    <SectionCard 
      title="I. Lịch sử phát minh" 
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      }
      delay={100}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {HISTORY_CONTENT.map((item, idx) => (
          <div key={idx} className={`p-4 rounded-xl border ${item.isModern ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-slate-700/30 border-slate-600'}`}>
            <h4 className={`font-bold text-lg mb-2 ${item.isModern ? 'text-emerald-400' : 'text-slate-400'}`}>
              {item.title}
            </h4>
            <p className="text-sm md:text-base">{item.content}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
