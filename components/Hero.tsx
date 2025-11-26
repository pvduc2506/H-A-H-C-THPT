import React from 'react';
import { APP_TITLE, APP_SUBTITLE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 to-slate-900 p-8 md:p-12 mb-8 shadow-2xl border border-blue-500/30 text-center">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      {/* Decorative Atom Circles */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-chem-accent rounded-full blur-[80px] opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-[80px] opacity-20 animate-pulse delay-700"></div>

      <div className="relative z-10">
        <div className="inline-block p-2 px-4 rounded-full bg-yellow-500/20 text-yellow-300 font-semibold text-sm mb-4 border border-yellow-500/40">
           📚 {APP_SUBTITLE}
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
          {APP_TITLE}
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          Khám phá bí mật sắp xếp của các nguyên tố hóa học một cách khoa học, trực quan và dễ nhớ nhất.
        </p>
      </div>
    </div>
  );
};
