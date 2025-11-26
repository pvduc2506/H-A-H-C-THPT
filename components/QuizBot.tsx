
import React, { useState, useEffect } from 'react';
import { generateChemistryQuiz, generateTrueFalseQuiz } from '../services/geminiService';
import { QuizQuestion, Topic, ExamAttempt, TrueFalseQuestion } from '../types';
import { SectionCard } from './SectionCard';
import { BrainCircuit, Clock, History, CheckCircle, XCircle, ChevronRight, RotateCcw, Trophy, ArrowLeft, Share2, CheckSquare, PlayCircle } from 'lucide-react';

interface QuizBotProps {
    currentTopic: Topic;
}

type QuizMode = 'intro' | 'loading' | 'taking_mcq' | 'taking_tf' | 'result_mcq' | 'result_tf' | 'history_list' | 'history_review_mcq' | 'history_review_tf';

export const QuizBot: React.FC<QuizBotProps> = ({ currentTopic }) => {
  const [mode, setMode] = useState<QuizMode>('intro');
  
  // MCQ State
  const [mcqQuestions, setMcqQuestions] = useState<QuizQuestion[]>([]);
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  
  // True/False State
  const [tfQuestions, setTfQuestions] = useState<TrueFalseQuestion[]>([]);
  const [tfUserAnswers, setTfUserAnswers] = useState<boolean[][]>([]); 

  // History State
  const [history, setHistory] = useState<ExamAttempt[]>([]);
  const [reviewAttempt, setReviewAttempt] = useState<ExamAttempt | null>(null);

  useEffect(() => {
    setMode('intro');
    setMcqQuestions([]);
    setTfQuestions([]);
  }, [currentTopic.id]);

  useEffect(() => {
    const saved = localStorage.getItem('chem_quiz_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse history", e);
      }
    }
  }, []);

  // Trigger MathJax when quiz content changes
  useEffect(() => {
    const triggerMathJax = async () => {
        if (window.MathJax) {
            try {
                if (window.MathJax.typesetClear) { window.MathJax.typesetClear(); }
                if (window.MathJax.typesetPromise) { await window.MathJax.typesetPromise(); }
            } catch (e) { console.warn("MathJax error:", e); }
        }
    };
    const timer = setTimeout(triggerMathJax, 50);
    return () => clearTimeout(timer);
  }, [mode, currentQIdx, mcqQuestions, tfQuestions, reviewAttempt]);

  const saveToHistory = (newAttempt: ExamAttempt) => {
    const updated = [newAttempt, ...history];
    setHistory(updated);
    localStorage.setItem('chem_quiz_history', JSON.stringify(updated));
  };

  // --- MCQ LOGIC (Always Fresh AI Generation) ---
  const startMcqQuiz = async () => {
    setMode('loading');
    try {
        // Directly request 40 fresh questions from AI
        const newQuestions = await generateChemistryQuiz(currentTopic);
        
        if (newQuestions && newQuestions.length > 0) {
            setMcqQuestions(newQuestions);
            setUserAnswers(new Array(newQuestions.length).fill(-1));
            setCurrentQIdx(0);
            setMode('taking_mcq');
        } else {
            setMode('intro');
            alert("Không thể tạo câu hỏi lúc này (Lỗi kết nối hoặc API). Vui lòng thử lại.");
        }
    } catch (error) {
        console.error("Failed to start quiz:", error);
        setMode('intro');
        alert("Đã xảy ra lỗi kết nối. Vui lòng kiểm tra mạng.");
    }
  };

  const handleMcqAnswer = (optionIdx: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQIdx] = optionIdx;
    setUserAnswers(newAnswers);
  };

  const submitMcqQuiz = () => {
    let correctCount = 0;
    mcqQuestions.forEach((q, i) => {
      if (q.correctAnswerIndex === userAnswers[i]) correctCount++;
    });
    const score = Math.round((correctCount / mcqQuestions.length) * 10);
    
    const attempt: ExamAttempt = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      topicId: currentTopic.id,
      topicTitle: currentTopic.title,
      type: 'MCQ',
      score,
      totalQuestions: mcqQuestions.length,
      questions: mcqQuestions,
      userAnswers: userAnswers
    };

    saveToHistory(attempt);
    setReviewAttempt(attempt); 
    setMode('result_mcq');
  };

  // --- TRUE/FALSE LOGIC ---
  const startTfQuiz = async () => {
    setMode('loading');
    try {
      const newQuestions = await generateTrueFalseQuiz(currentTopic);
      
      if (newQuestions && newQuestions.length > 0) {
        setTfQuestions(newQuestions);
        setTfUserAnswers(newQuestions.map(() => [false, false, false, false])); 
        setCurrentQIdx(0);
        setMode('taking_tf');
      } else {
        setMode('intro');
        alert("Không thể tạo câu hỏi. Vui lòng thử lại.");
      }
    } catch (e) {
      setMode('intro');
      alert("Lỗi kết nối.");
    }
  };

  const handleTfAnswer = (statementIdx: number, value: boolean) => {
    const newAnswers = [...tfUserAnswers];
    if (!newAnswers[currentQIdx]) newAnswers[currentQIdx] = [false, false, false, false];
    newAnswers[currentQIdx][statementIdx] = value;
    setTfUserAnswers(newAnswers);
  };

  const submitTfQuiz = () => {
    let correctStatements = 0;
    let totalStatements = 0;

    tfQuestions.forEach((q, qIdx) => {
        q.statements.forEach((s, sIdx) => {
            totalStatements++;
            if (tfUserAnswers[qIdx] && tfUserAnswers[qIdx][sIdx] === s.isCorrect) {
                correctStatements++;
            }
        });
    });

    const score = totalStatements > 0 ? Math.round((correctStatements / totalStatements) * 10) : 0;

    const attempt: ExamAttempt = {
        id: Date.now().toString(),
        timestamp: Date.now(),
        topicId: currentTopic.id,
        topicTitle: currentTopic.title,
        type: 'TF',
        score,
        totalQuestions: tfQuestions.length, 
        questions: tfQuestions,
        userAnswers: tfUserAnswers
    };

    saveToHistory(attempt);
    setReviewAttempt(attempt);
    setMode('result_tf');
  };

  // --- SHARED ---
  const handleShare = async () => {
    if (!reviewAttempt) return;
    const text = `Tôi đạt ${reviewAttempt.score}/10 điểm bài thi "${reviewAttempt.topicTitle}"!`;
    if (navigator.share) {
        try { await navigator.share({ title: 'Kết quả thi Hóa Học', text }); } catch (e) {}
    } else {
        navigator.clipboard.writeText(text);
        alert('Đã sao chép kết quả!');
    }
  };

  // --- RENDERS ---

  const renderIntro = () => (
    <div className="text-center py-12">
      <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-md">
        <BrainCircuit size={48} className="text-wood-primary" />
      </div>
      <h3 className="text-2xl font-bold text-wood-dark mb-2">Ngân Hàng Đề Thi</h3>
      <p className="text-slate-500 mb-8 max-w-md mx-auto">
        Chuyên đề: <span className="font-bold text-wood-primary">{currentTopic.title}</span>
        <br/>
        <span className="text-xs">{currentTopic.subtitle}</span>
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
        <button 
          onClick={startMcqQuiz}
          className="group relative p-6 bg-white border-2 border-emerald-100 hover:border-wood-primary hover:bg-emerald-50/50 rounded-2xl transition-all shadow-sm hover:shadow-md text-left"
        >
            <div className="absolute top-4 right-4 bg-emerald-100 text-wood-dark text-xs font-bold px-2 py-1 rounded">40 Câu</div>
            <div className="mb-3 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-wood-primary group-hover:bg-wood-primary group-hover:text-white transition-colors">
                <CheckCircle size={24} />
            </div>
            <h4 className="font-bold text-wood-dark text-lg mb-1">Trắc Nghiệm (MCQ)</h4>
            <p className="text-sm text-slate-500">Tạo mới 40 câu trắc nghiệm từ AI tương ứng với chuyên đề này.</p>
        </button>

        <button 
          onClick={startTfQuiz}
          className="group relative p-6 bg-white border-2 border-emerald-100 hover:border-wood-primary hover:bg-emerald-50/50 rounded-2xl transition-all shadow-sm hover:shadow-md text-left"
        >
            <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">15 Câu</div>
            <div className="mb-3 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <CheckSquare size={24} />
            </div>
            <h4 className="font-bold text-wood-dark text-lg mb-1">Đúng / Sai</h4>
            <p className="text-sm text-slate-500">Tạo mới 15 câu hỏi dạng Đúng/Sai có bối cảnh.</p>
        </button>
      </div>

      <button 
        onClick={() => setMode('history_list')}
        className="px-6 py-2 text-slate-500 hover:text-wood-primary font-medium flex items-center justify-center gap-2 mx-auto transition-colors"
      >
        <History size={18} />
        Xem lịch sử làm bài ({history.length})
      </button>
    </div>
  );

  const renderLoading = () => (
    <div className="py-24 flex flex-col items-center justify-center space-y-6">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-emerald-100 border-t-wood-primary rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <BrainCircuit size={24} className="text-wood-primary animate-pulse" />
        </div>
      </div>
      <div className="text-center">
        <p className="text-wood-dark font-bold text-lg mb-1">Đang khởi tạo đề thi...</p>
        <p className="text-slate-500 text-sm">AI đang soạn thảo câu hỏi mới cho bạn...</p>
      </div>
    </div>
  );

  const renderMcqTaking = () => {
    const question = mcqQuestions[currentQIdx];
    const progress = ((currentQIdx + 1) / mcqQuestions.length) * 100;

    return (
      <div className="animate-fade-in-up">
        <div className="mb-8">
          <div className="flex justify-between text-xs text-slate-500 mb-2 font-bold uppercase tracking-wider">
            <span>Câu {currentQIdx + 1}/{mcqQuestions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-wood-primary transition-all duration-300 ease-out rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="bg-white p-0 mb-8">
          <h4 className="text-lg md:text-xl font-bold text-wood-dark mb-6 leading-relaxed">
            <span className="text-wood-primary mr-2">Câu {currentQIdx + 1}:</span>
            <span dangerouslySetInnerHTML={{__html: question.question}}></span>
          </h4>
          <div className="space-y-3">
            {question.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleMcqAnswer(i)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4
                  ${userAnswers[currentQIdx] === i 
                    ? 'bg-emerald-50 border-wood-primary text-wood-dark font-medium' 
                    : 'bg-white border-slate-100 text-slate-600 hover:border-emerald-200 hover:bg-slate-50'
                  }`}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 transition-colors
                  ${userAnswers[currentQIdx] === i ? 'bg-wood-primary text-white' : 'bg-slate-100 text-slate-500'}
                `}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1" dangerouslySetInnerHTML={{__html: opt}}></span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-6 border-t border-slate-100">
          <button
            onClick={() => setCurrentQIdx(Math.max(0, currentQIdx - 1))}
            disabled={currentQIdx === 0}
            className="px-6 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 disabled:opacity-30 font-medium transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={18} /> Quay lại
          </button>
          
          {currentQIdx < mcqQuestions.length - 1 ? (
            <button
              onClick={() => setCurrentQIdx(currentQIdx + 1)}
              className="px-8 py-2.5 bg-wood-dark hover:bg-emerald-800 text-white rounded-lg font-bold transition-all flex items-center gap-2 shadow-md"
            >
              Câu tiếp <ChevronRight size={18} />
            </button>
          ) : (
            <button
              onClick={submitMcqQuiz}
              className="px-10 py-2.5 bg-wood-primary hover:bg-emerald-600 text-white rounded-lg font-bold shadow-lg shadow-emerald-200 transition-all"
            >
              Nộp bài
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderTfTaking = () => {
    const question = tfQuestions[currentQIdx];
    const progress = ((currentQIdx + 1) / tfQuestions.length) * 100;
    const currentAnswers = tfUserAnswers[currentQIdx] || [false, false, false, false];

    return (
        <div className="animate-fade-in-up">
            <div className="mb-6">
                <div className="flex justify-between text-xs text-slate-500 mb-2 font-bold uppercase tracking-wider">
                    <span>Câu {currentQIdx + 1}/{tfQuestions.length}</span>
                    <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 transition-all duration-300 ease-out rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <div className="bg-white mb-8">
                <div className="mb-6">
                    <h4 className="text-lg font-bold text-wood-dark mb-2">Bối cảnh:</h4>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 italic leading-relaxed">
                        <span dangerouslySetInnerHTML={{__html: question.context}}></span>
                    </div>
                </div>

                <h4 className="font-bold text-wood-dark mb-4">Các phát biểu:</h4>
                <div className="space-y-4">
                    {question.statements.map((stmt, idx) => (
                        <div key={idx} className="p-4 border border-slate-200 rounded-xl flex flex-col md:flex-row md:items-center gap-4 justify-between bg-white hover:border-blue-200 transition-colors">
                            <div className="flex-1 flex gap-3">
                                <span className="font-bold text-slate-400">{String.fromCharCode(97+idx)}.</span>
                                <span className="text-slate-700" dangerouslySetInnerHTML={{__html: stmt.text}}></span>
                            </div>
                            <div className="flex gap-2 shrink-0">
                                <button 
                                    onClick={() => handleTfAnswer(idx, true)}
                                    className={`px-4 py-2 rounded-lg font-bold text-sm border transition-all ${currentAnswers[idx] === true ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-blue-50'}`}
                                >
                                    ĐÚNG
                                </button>
                                <button 
                                    onClick={() => handleTfAnswer(idx, false)}
                                    className={`px-4 py-2 rounded-lg font-bold text-sm border transition-all ${currentAnswers[idx] === false ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-blue-50'}`}
                                >
                                    SAI
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between pt-6 border-t border-slate-100">
                <button
                    onClick={() => setCurrentQIdx(Math.max(0, currentQIdx - 1))}
                    disabled={currentQIdx === 0}
                    className="px-6 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 disabled:opacity-30 font-medium transition-colors flex items-center gap-2"
                >
                    <ArrowLeft size={18} /> Quay lại
                </button>
                
                {currentQIdx < tfQuestions.length - 1 ? (
                    <button
                    onClick={() => setCurrentQIdx(currentQIdx + 1)}
                    className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all flex items-center gap-2 shadow-md"
                    >
                    Câu tiếp <ChevronRight size={18} />
                    </button>
                ) : (
                    <button
                    onClick={submitTfQuiz}
                    className="px-10 py-2.5 bg-wood-primary hover:bg-emerald-600 text-white rounded-lg font-bold shadow-lg shadow-emerald-200 transition-all"
                    >
                    Nộp bài
                    </button>
                )}
            </div>
        </div>
    );
  };

  const renderReview = () => {
    if (!reviewAttempt) return null;
    
    const isMCQ = reviewAttempt.type === 'MCQ';

    return (
      <div className="animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMode('history_list')} 
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <ArrowLeft size={24} className="text-slate-600" />
            </button>
            <div>
              <h3 className="text-xl font-bold text-wood-dark">Kết quả chi tiết {isMCQ ? "(MCQ)" : "(Đúng/Sai)"}</h3>
              <p className="text-xs text-slate-500">{new Date(reviewAttempt.timestamp).toLocaleString('vi-VN')}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={handleShare} className="p-2 bg-slate-100 text-slate-600 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Share2 size={20}/>
            </button>
            <div className="text-center bg-slate-50 px-5 py-2 rounded-xl border border-slate-200">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Điểm số</p>
                <p className={`text-2xl font-black ${reviewAttempt.score >= 8 ? 'text-wood-primary' : 'text-yellow-600'}`}>
                {reviewAttempt.score}<span className="text-sm text-slate-400 font-normal">/10</span>
                </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        {['result_mcq', 'result_tf'].includes(mode) && (
          <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl mb-10 text-center border border-emerald-100 shadow-sm">
            <Trophy size={56} className={`mx-auto mb-4 ${reviewAttempt.score >= 8 ? 'text-yellow-400 drop-shadow-md' : 'text-emerald-300'}`} />
            <h2 className="text-3xl font-bold text-wood-dark mb-3">
              {reviewAttempt.score >= 9 ? "Xuất sắc! 🌟" : 
               reviewAttempt.score >= 7 ? "Làm tốt lắm! 💪" : 
               reviewAttempt.score >= 5 ? "Cần cố gắng hơn 📚" : "Hãy ôn tập lại nhé 😅"}
            </h2>
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                <button 
                  onClick={() => setMode('intro')}
                  className="px-6 py-3 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-600 font-bold rounded-xl inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <ArrowLeft size={18} /> Menu chính
                </button>
                <button 
                  onClick={isMCQ ? startMcqQuiz : startTfQuiz}
                  className="px-8 py-3 bg-wood-primary hover:bg-emerald-700 text-white font-bold rounded-xl inline-flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-200"
                >
                  <PlayCircle size={18} /> 
                  {isMCQ ? "Tạo 40 câu khác" : "Tạo 15 câu khác"}
                </button>
            </div>
          </div>
        )}

        {/* Questions Review */}
        <div className="space-y-8">
          {isMCQ ? (
             (reviewAttempt.questions as QuizQuestion[]).map((q, qIdx) => {
                const userAnswer = (reviewAttempt.userAnswers as number[])[qIdx];
                const isCorrect = userAnswer === q.correctAnswerIndex;
                return (
                  <div key={qIdx} className={`p-6 rounded-2xl border-2 ${isCorrect ? 'bg-emerald-50/30 border-emerald-100' : 'bg-red-50/30 border-red-50'}`}>
                    <div className="flex gap-4 mb-4">
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${isCorrect ? 'bg-wood-primary text-white' : 'bg-red-500 text-white'}`}>
                        {qIdx + 1}
                      </span>
                      <h4 className="font-semibold text-slate-800 leading-relaxed pt-1" dangerouslySetInnerHTML={{__html: q.question}}></h4>
                    </div>
    
                    <div className="space-y-3 ml-12 mb-5">
                      {q.options.map((opt, oIdx) => {
                        let optionClass = "p-3 rounded-xl border text-sm flex justify-between items-center transition-colors ";
                        const isKey = q.correctAnswerIndex === oIdx;
                        const isSelected = userAnswer === oIdx;
                        let bubbleClass = "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 border flex-shrink-0 ";
    
                        if (isKey) {
                          optionClass += "bg-emerald-100 border-emerald-300 text-wood-dark font-bold";
                          bubbleClass += "bg-wood-primary text-white border-wood-primary";
                        } else if (isSelected && !isCorrect) {
                          optionClass += "bg-red-50 border-red-200 text-red-800";
                          bubbleClass += "bg-red-500 text-white border-red-500";
                        } else {
                          optionClass += "bg-white border-transparent text-slate-500";
                          bubbleClass += "bg-slate-100 border-slate-200 text-slate-400";
                        }
    
                        return (
                          <div key={oIdx} className={optionClass}>
                            <div className="flex items-center">
                                <span className={bubbleClass}>{String.fromCharCode(65 + oIdx)}</span>
                                <span dangerouslySetInnerHTML={{__html: opt}}></span>
                            </div>
                            <div className="flex items-center gap-2">
                                {isKey && <div className="flex items-center gap-1 text-wood-primary text-xs font-bold"><CheckCircle size={16} /> ĐÁP ÁN</div>}
                                {isSelected && !isCorrect && <div className="flex items-center gap-1 text-red-500 text-xs font-bold"><XCircle size={16} /> BẠN CHỌN</div>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="ml-12 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                        <p className="text-xs text-wood-primary font-bold uppercase mb-2 flex items-center gap-1"><BrainCircuit size={14} /> Giải thích:</p>
                        <p className="text-sm text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{__html: q.explanation}}></p>
                    </div>
                  </div>
                );
             })
          ) : (
             (reviewAttempt.questions as TrueFalseQuestion[]).map((q, qIdx) => (
                <div key={qIdx} className="p-6 rounded-2xl border border-slate-200 bg-white">
                    <h4 className="font-bold text-wood-dark mb-2 flex gap-2">
                        <span className="text-blue-600">Câu {qIdx+1}:</span>
                        <span dangerouslySetInnerHTML={{__html: q.context}}></span>
                    </h4>
                    <div className="space-y-2 mt-4">
                        {q.statements.map((stmt, sIdx) => {
                            const userAns = (reviewAttempt.userAnswers as boolean[][])[qIdx][sIdx];
                            const isCorrect = userAns === stmt.isCorrect;
                            
                            return (
                                <div key={sIdx} className={`p-3 rounded-lg border flex items-center justify-between ${isCorrect ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'}`}>
                                    <div className="flex gap-2 flex-1">
                                        <span className="font-bold text-slate-400">{String.fromCharCode(97+sIdx)}.</span>
                                        <span className="text-sm text-slate-700" dangerouslySetInnerHTML={{__html: stmt.text}}></span>
                                    </div>
                                    <div className="flex items-center gap-4 shrink-0">
                                        <div className="text-xs text-right">
                                            <div className="text-slate-400">Đáp án: <span className="font-bold text-slate-700">{stmt.isCorrect ? 'ĐÚNG' : 'SAI'}</span></div>
                                            <div className={`${isCorrect ? 'text-emerald-600' : 'text-red-500'}`}>Bạn chọn: <b>{userAns === true ? 'ĐÚNG' : userAns === false ? 'SAI' : 'Trống'}</b></div>
                                        </div>
                                        {isCorrect ? <CheckCircle size={20} className="text-emerald-500" /> : <XCircle size={20} className="text-red-500" />}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
             ))
          )}
        </div>
      </div>
    );
  };

  const renderHistoryList = () => (
    <div className="animate-fade-in-up">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => setMode('intro')} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <ArrowLeft size={24} className="text-slate-500" />
        </button>
        <h3 className="text-xl font-bold text-wood-dark">Lịch sử làm bài</h3>
      </div>

      {history.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <History size={64} className="mx-auto mb-4 opacity-20" />
          <p>Chưa có bài làm nào được ghi lại.</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {history.map((attempt) => (
            <button
              key={attempt.id}
              onClick={() => {
                setReviewAttempt(attempt);
                setMode(attempt.type === 'TF' ? 'history_review_tf' : 'history_review_mcq');
              }}
              className="w-full p-4 bg-white border border-slate-200 rounded-xl hover:border-wood-primary hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${attempt.type === 'TF' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'}`}>
                        {attempt.type === 'TF' ? 'Đúng/Sai' : 'MCQ'}
                    </span>
                    <p className="font-bold text-slate-700 group-hover:text-wood-primary transition-colors truncate max-w-[200px]">{attempt.topicTitle}</p>
                </div>
                <p className="text-xs text-slate-400 flex items-center gap-2">
                  <Clock size={12} />
                  {new Date(attempt.timestamp).toLocaleString('vi-VN')}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className={`text-lg font-bold ${attempt.score >= 8 ? 'text-wood-primary' : attempt.score >= 5 ? 'text-yellow-600' : 'text-red-500'}`}>
                    {attempt.score}
                  </span>
                  <span className="text-xs text-slate-400">/10</span>
                </div>
                <ChevronRight size={20} className="text-slate-300 group-hover:text-wood-primary" />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <SectionCard 
      title="Góc Luyện Tập" 
      className="bg-white min-h-[600px]"
      icon={<BrainCircuit size={24} />}
    >
      {mode === 'intro' && renderIntro()}
      {mode === 'loading' && renderLoading()}
      {mode === 'taking_mcq' && renderMcqTaking()}
      {mode === 'taking_tf' && renderTfTaking()}
      {(mode === 'result_mcq' || mode === 'result_tf' || mode === 'history_review_mcq' || mode === 'history_review_tf') && renderReview()}
      {mode === 'history_list' && renderHistoryList()}
    </SectionCard>
  );
};
