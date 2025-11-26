import React from 'react';
import { SectionCard } from './SectionCard';
import { STRUCTURE_DEFINITIONS, PRINCIPLES_CONTENT, ELECTRON_VALENCE_NOTE } from '../constants';

export const StructureSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <SectionCard 
        title="II. Nguyên tắc sắp xếp" 
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
          </svg>
        }
        delay={200}
      >
        <ul className="space-y-3">
          {PRINCIPLES_CONTENT.map((rule, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-chem-accent text-slate-900 flex items-center justify-center font-bold text-xs mt-0.5">{idx + 1}</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 p-3 bg-yellow-500/10 border-l-4 border-yellow-500 text-yellow-200 text-sm italic rounded-r-lg">
          💡 {ELECTRON_VALENCE_NOTE}
        </div>
      </SectionCard>

      <SectionCard 
        title="III. Cấu tạo chi tiết" 
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
          </svg>
        }
        delay={300}
      >
        <div className="grid gap-4">
          {STRUCTURE_DEFINITIONS.map((def, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg overflow-hidden flex flex-col md:flex-row border border-slate-700">
              <div className={`${def.color} p-4 md:w-40 flex items-center justify-center md:justify-start`}>
                <h4 className="font-bold text-white text-lg text-center md:text-left">{def.term}</h4>
              </div>
              <div className="p-4 flex items-center text-slate-300">
                {def.desc}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
};
