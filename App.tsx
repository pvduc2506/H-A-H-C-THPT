
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopicViewer } from './components/TopicViewer';
import { QuizBot } from './components/QuizBot';
import { TOPICS_DATA } from './constants';

const App: React.FC = () => {
  const [currentTopicId, setCurrentTopicId] = useState(TOPICS_DATA[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Safe fallback to first topic if id not found
  const currentTopic = TOPICS_DATA.find(t => t.id === currentTopicId) || TOPICS_DATA[0];

  return (
    <div className="min-h-screen bg-wood-soft text-text-main font-sans selection:bg-wood-primary selection:text-white overflow-x-hidden">
      
      {/* Background Ambience - Clean & Bright */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-40"></div>

      <Sidebar 
        currentTopicId={currentTopicId}
        onSelectTopic={setCurrentTopicId}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <main className="md:ml-72 min-h-screen relative z-10 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-4 py-8 md:py-10 md:px-8">
            <div className="mb-12">
                <TopicViewer topic={currentTopic} />
            </div>

            <div className="mb-12">
                <QuizBot currentTopic={currentTopic} />
            </div>

            <footer className="mt-12 text-center text-slate-500 text-sm pb-8 border-t border-emerald-200/50 pt-8">
                <p className="font-bold text-wood-primary">HÓA HỌC LỚP 10</p>
                <p>Cẩm nang kiến thức trọng tâm & Ôn tập</p>
                <p className="text-xs mt-2 text-slate-400">Hỗ trợ bởi AI Gemini</p>
            </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
