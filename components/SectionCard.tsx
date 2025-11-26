
import React from 'react';
import { ContentCardProps } from '../types';

export const SectionCard: React.FC<ContentCardProps> = ({ title, children, className = "", icon }) => {
  return (
    <div className={`content-card rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${className}`}>
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
        {icon && <div className="text-wood-primary">{icon}</div>}
        <h3 className="text-lg md:text-xl font-bold text-text-heading uppercase tracking-wide flex-1">{title}</h3>
      </div>
      <div className="text-text-main leading-relaxed">
        {children}
      </div>
    </div>
  );
};
