
import React from 'react';
import { Topic } from '../types';
import { TOPICS_DATA } from '../constants';
import { Atom, Zap, Timer, Table2, Flame, Orbit, Link, Beaker, Menu, X } from 'lucide-react';

interface SidebarProps {
  currentTopicId: string;
  onSelectTopic: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const IconMap: Record<string, any> = {
  Atom, Zap, Timer, Table2, Flame, Orbit, Link, Beaker
};

export const Sidebar: React.FC<SidebarProps> = ({ currentTopicId, onSelectTopic, isOpen, setIsOpen }) => {
  
  // Split topics into Grades based on specific indices
  // Grade 10: Topics 1-8 (Indices 0-7)
  const grade10Topics = TOPICS_DATA.slice(0, 8);
  
  // Grade 11: Topics 9-15 (Indices 8-14)
  const grade11Topics = TOPICS_DATA.slice(8, 15);
  
  // Grade 12: Topics 16+ (Indices 15+)
  const grade12Topics = TOPICS_DATA.slice(15);

  const renderTopicItem = (topic: Topic) => {
    const Icon = IconMap[topic.icon] || Atom;
    const isActive = currentTopicId === topic.id;
    
    return (
      <button
        key={topic.id}
        onClick={() => {
            onSelectTopic(topic.id);
            if (window.innerWidth < 768) setIsOpen(false);
        }}
        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group text-left mb-2
            ${isActive 
                ? 'bg-white text-wood-dark font-bold shadow-lg' 
                : 'text-emerald-100 hover:bg-emerald-800/50'
            }`}
      >
        <div className={`${isActive ? 'text-wood-primary' : 'text-emerald-300 group-hover:text-white'}`}>
            <Icon size={20} />
        </div>
        <div className="flex-1">
            <p className="text-sm">{topic.title}</p>
            <p className={`text-xs truncate w-40 ${isActive ? 'text-emerald-700' : 'text-emerald-400/70'}`}>{topic.subtitle}</p>
        </div>
      </button>
    );
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-wood-dark text-white rounded-lg md:hidden shadow-lg border border-white/10"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Container */}
      <div className={`fixed inset-y-0 left-0 z-40 w-72 sidebar-panel transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col`}>
        <div className="h-full flex flex-col p-6">
            <div className="mb-6 flex items-center gap-3 pb-6 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold shadow-inner">
                    H+
                </div>
                <div>
                    <h1 className="font-bold text-white leading-tight text-lg">Cẩm Nang Hóa</h1>
                    <p className="text-xs text-emerald-200">THPT - 2025</p>
                </div>
            </div>

            <nav className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {/* Grade 10 Section */}
                <div className="mb-6">
                    <h3 className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-3 px-2 opacity-80 border-b border-white/10 pb-1">
                        Lớp 10
                    </h3>
                    <div className="mt-2">
                        {grade10Topics.map(renderTopicItem)}
                    </div>
                </div>

                {/* Grade 11 Section */}
                {grade11Topics.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-3 px-2 opacity-80 border-b border-white/10 pb-1">
                            Lớp 11
                        </h3>
                        <div className="mt-2">
                            {grade11Topics.map(renderTopicItem)}
                        </div>
                    </div>
                )}

                {/* Grade 12 Section */}
                {grade12Topics.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-3 px-2 opacity-80 border-b border-white/10 pb-1">
                            Lớp 12
                        </h3>
                        <div className="mt-2">
                            {grade12Topics.map(renderTopicItem)}
                        </div>
                    </div>
                )}
            </nav>

            <div className="mt-2 pt-4 border-t border-white/10">
                <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                    <p className="text-xs text-emerald-200 mb-2 font-medium">Tiến độ học tập</p>
                    <div className="w-full h-2 bg-emerald-900/50 rounded-full overflow-hidden">
                        <div className="h-full w-[80%] bg-emerald-400 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};
