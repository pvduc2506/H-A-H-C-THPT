
import React, { useEffect } from 'react';
import { Topic, ContentSection, SubSection } from '../types';
import { SectionCard } from './SectionCard';
import { BookOpen, Info, ChevronRight, AlertCircle } from 'lucide-react';

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: () => Promise<void>;
      typesetClear?: () => void;
      startup?: {
        promise?: Promise<void>;
      }
    };
  }
}

interface TopicViewerProps {
  topic: Topic;
}

const TableRenderer: React.FC<{ table: NonNullable<ContentSection['table']> }> = ({ table }) => (
  <div className="mt-4 overflow-x-auto rounded-lg border border-emerald-200 bg-white shadow-sm">
    <table className="w-full text-sm text-left text-slate-700">
      <thead className="text-xs uppercase bg-emerald-50 text-wood-dark border-b border-emerald-200">
        <tr>
          {table.headers.map((h, i) => (
            <th key={i} className="px-6 py-3 whitespace-nowrap font-bold">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row, rIdx) => (
          <tr key={rIdx} className="bg-white border-b border-slate-100 hover:bg-emerald-50/50 transition-colors last:border-0">
            {row.map((cell, cIdx) => (
              <td key={cIdx} className="px-6 py-4 border-r border-slate-100 last:border-0 whitespace-normal text-slate-700" dangerouslySetInnerHTML={{ __html: cell }}></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SubSectionRenderer: React.FC<{ sub: SubSection }> = ({ sub }) => (
  <div className="mt-4 pl-4 border-l-4 border-emerald-100 hover:border-wood-primary transition-colors bg-slate-50/50 p-3 rounded-r-lg">
    {sub.subtitle && <h4 className="text-wood-dark font-bold mb-2 flex items-center text-base"><ChevronRight size={18} className="mr-1 text-wood-primary"/>{sub.subtitle}</h4>}
    {sub.content && (
      <div 
        className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700"
        dangerouslySetInnerHTML={{ __html: sub.content }}
      />
    )}
    {sub.table && <TableRenderer table={sub.table} />}
    {sub.note && (
        <div className="mt-3 p-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg flex gap-2 text-sm items-start shadow-sm">
            <AlertCircle size={16} className="mt-0.5 flex-shrink-0 text-amber-600"/>
            <span>{sub.note}</span>
        </div>
    )}
  </div>
);

export const TopicViewer: React.FC<TopicViewerProps> = ({ topic }) => {
  
  // Robust MathJax trigger
  useEffect(() => {
    let isMounted = true;
    let retryCount = 0;
    const maxRetries = 10;

    const renderMath = async () => {
      if (!isMounted) return;

      if (window.MathJax && window.MathJax.typesetPromise) {
        try {
          if(window.MathJax.typesetClear) {
             window.MathJax.typesetClear();
          }
          await window.MathJax.typesetPromise();
        } catch (err) {
          console.warn('MathJax typeset failed:', err);
        }
      } else if (retryCount < maxRetries) {
        retryCount++;
        setTimeout(renderMath, 300); 
      }
    };

    renderMath();

    return () => { isMounted = false; };
  }, [topic]);

  if (!topic) return null;

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="relative mb-8 p-8 rounded-3xl bg-gradient-to-br from-white to-emerald-50 border border-emerald-100 shadow-lg group overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10"></div>
        <div className="relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              Kiến thức trọng tâm
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-wood-dark mb-2 tracking-tight">
            {topic.title}
            </h1>
            <h2 className="text-lg md:text-xl text-wood-primary font-medium">
            {topic.subtitle}
            </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {topic.sections.map((section, idx) => (
          <SectionCard 
            key={idx} 
            title={section.title}
            icon={idx === 0 ? <Info size={24}/> : <BookOpen size={24}/>}
            delay={idx * 100}
          >
            {/* Render Main HTML Content */}
            {section.content && (
              <div 
                className="prose prose-slate max-w-none leading-relaxed text-slate-700"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            )}

            {/* Render Main Table */}
            {section.table && <TableRenderer table={section.table} />}

            {/* Render Section Note */}
            {section.note && (
                <div className="mt-3 p-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg flex gap-2 text-sm items-start">
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0 text-amber-600"/>
                    <span>{section.note}</span>
                </div>
            )}

            {/* Render Sub Sections */}
            {section.subSections && (
                <div className="space-y-4 mt-4">
                    {section.subSections.map((sub, sIdx) => (
                    <SubSectionRenderer key={sIdx} sub={sub} />
                    ))}
                </div>
            )}
            
            {section.tags && (
              <div className="flex gap-2 mt-6 flex-wrap pt-4 border-t border-slate-100">
                {section.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs rounded-md font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </SectionCard>
        ))}
      </div>
    </div>
  );
};
