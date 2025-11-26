
import React from 'react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface TrueFalseStatement {
  text: string;
  isCorrect: boolean;
}

export interface TrueFalseQuestion {
  context: string; // The main scenario or leading statement
  statements: TrueFalseStatement[]; // Array of 4 statements
  explanation?: string;
}

export interface ExamAttempt {
  id: string;
  timestamp: number;
  topicId: string;
  topicTitle: string;
  type: 'MCQ' | 'TF'; // Distinguish between Multiple Choice and True/False
  score: number;
  totalQuestions: number;
  questions: QuizQuestion[] | TrueFalseQuestion[];
  userAnswers: number[] | boolean[][]; // Indices for MCQ, Array of booleans for TF
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface SubSection {
  subtitle?: string;
  content?: string;
  table?: TableData;
  note?: string; 
}

export interface ContentSection {
  title: string;
  content?: string; 
  table?: TableData;
  imageType?: 'atom' | 'table' | 'bond' | 'redox'; 
  tags?: string[];
  subSections?: SubSection[]; 
  note?: string;
}

export interface Topic {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  sections: ContentSection[];
  objectives?: string[];
}

export interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  delay?: number;
}
