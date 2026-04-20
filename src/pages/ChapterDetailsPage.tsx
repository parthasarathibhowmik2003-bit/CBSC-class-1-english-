import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, BookOpen, MessageCircle, HelpCircle, List, 
  FileText, Star, Bookmark, CheckCircle, ArrowRight, Download, Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { chapters } from '@/src/data/chapters';
import { VoiceReader } from '@/src/components/VoiceReader';
import { AIChatbot } from '@/src/components/AIChatbot';
import { useBookmarks, useProgress } from '@/src/hooks/usePersistence';
import { cn } from '@/src/lib/utils';
import { toast } from 'react-hot-toast';

export const ChapterDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const chapter = chapters.find(c => c.id === id);
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const { markAsComplete, isCompleted } = useProgress();
  const [activeTab, setActiveTab] = useState<'content' | 'qa' | 'exercises' | 'notes'>('content');

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Chapter not found</h2>
          <Link to="/chapters" className="text-sky-500 hover:underline">Back to Chapters</Link>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    toast.success('Downloading notes... (Mock)');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      {/* Header Area */}
      <div className="bg-white dark:bg-slate-900 border-b border-sky-100 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Link to="/chapters" className="inline-flex items-center gap-2 text-slate-500 hover:text-sky-500 mb-6 transition-colors">
            <ChevronLeft size={20} /> Back to Chapters
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  {chapter.title}
                </h1>
                {isCompleted(chapter.id) && (
                  <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <CheckCircle size={14} /> Completed
                  </div>
                )}
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed max-w-2xl">
                {chapter.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <VoiceReader text={chapter.summary} />
                <button
                  onClick={() => toggleBookmark(chapter.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all border",
                    isBookmarked(chapter.id)
                      ? "bg-yellow-50 border-yellow-200 text-yellow-600 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-400"
                      : "bg-white border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 hover:border-sky-200"
                  )}
                >
                  <Bookmark size={18} fill={isBookmarked(chapter.id) ? "currentColor" : "none"} />
                  {isBookmarked(chapter.id) ? 'Bookmarked' : 'Bookmark'}
                </button>
                <button onClick={handleShare} className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-200 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            <div className="w-full md:w-64 aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800">
               <img src={chapter.imageUrl} alt={chapter.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="sticky top-16 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-sky-100 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-8 py-4 whitespace-nowrap">
            {[
              { id: 'content', label: 'Summary & Words', icon: BookOpen },
              { id: 'qa', label: 'Questions & Answers', icon: HelpCircle },
              { id: 'exercises', label: 'Exercises', icon: List },
              { id: 'notes', label: 'Important Notes', icon: FileText }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex items-center gap-2 font-bold text-sm transition-all pb-4 -mb-4 border-b-2",
                  activeTab === tab.id
                    ? "text-sky-500 border-sky-500"
                    : "text-slate-500 border-transparent hover:text-slate-800 dark:hover:text-slate-200"
                )}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'content' && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-bold dark:text-white mb-6 flex items-center gap-2">
                    <BookOpen className="text-sky-500" /> Story Summary
                  </h2>
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 leading-relaxed text-slate-700 dark:text-slate-300">
                    {chapter.summary}
                  </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <section>
                    <h2 className="text-2xl font-bold dark:text-white mb-6 flex items-center gap-2">
                      <Star className="text-yellow-400" /> New Vocabulary
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {chapter.vocabulary.map((word, i) => (
                        <div key={i} className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 px-4 py-2 rounded-xl text-sm font-bold border border-yellow-100 dark:border-yellow-800/50">
                          {word}
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold dark:text-white mb-6 flex items-center gap-2">
                      <List className="text-sky-500" /> Word Meanings
                    </h2>
                    <div className="space-y-3">
                      {chapter.wordMeanings.map((wm, i) => (
                        <div key={i} className="flex justify-between items-center p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                          <span className="font-bold text-slate-900 dark:text-white">{wm.word}</span>
                          <span className="text-slate-500 dark:text-slate-400 text-sm">{wm.meaning}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            )}

            {activeTab === 'qa' && (
              <div className="space-y-8">
                {chapter.questions.map((q, i) => (
                  <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-4">
                       <span className="bg-sky-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Question {i + 1}</span>
                       {q.type === 'long' && <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Long Answer</span>}
                    </div>
                    <h3 className="text-xl font-bold dark:text-white mb-4 leading-snug">Q: {q.question}</h3>
                    <div className="h-px w-full bg-slate-100 dark:bg-slate-800 mb-6" />
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      <span className="font-bold text-sky-500 mr-2 uppercase text-sm">Answer:</span> {q.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'exercises' && (
              <div className="space-y-12">
                 <section>
                    <h2 className="text-2xl font-bold dark:text-white mb-6">Fill in the Blanks</h2>
                    <div className="grid grid-cols-1 gap-4">
                      {chapter.fillInTheBlanks.map((item, i) => (
                        <div key={i} className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row justify-between gap-4">
                           <p className="dark:text-slate-300 text-lg font-medium">
                              {item.sentence.split('____').map((part, index, array) => (
                                <React.Fragment key={index}>
                                  {part}
                                  {index < array.length - 1 && <span className="inline-block w-24 h-8 bg-slate-50 dark:bg-slate-800 border-b-2 border-sky-400 mx-2 rounded-t transition-colors hover:bg-sky-50 dark:hover:bg-sky-900/30" />}
                                </React.Fragment>
                              ))}
                           </p>
                           <button 
                            onClick={() => toast.success(`The answer is: ${item.answer}`)}
                            className="bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 px-4 py-2 rounded-xl text-sm font-bold border border-sky-100 dark:border-sky-800 transition-colors hover:bg-sky-500 hover:text-white"
                           >
                             Check Answer
                           </button>
                        </div>
                      ))}
                    </div>
                 </section>

                 <section>
                    <h2 className="text-2xl font-bold dark:text-white mb-6">Extra Practice</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {chapter.extraPractice.map((item: any, i) => (
                        <div key={i} className="p-6 bg-slate-900 dark:bg-slate-800 text-white rounded-3xl flex items-start gap-4">
                           <div className="bg-white/20 p-2 rounded-xl"><Star size={20} /></div>
                           <p className="font-medium text-slate-100">{item.description || item}</p>
                        </div>
                      ))}
                    </div>
                 </section>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                   <h2 className="text-2xl font-bold dark:text-white">Exam Helper Notes</h2>
                   <button onClick={handleDownload} className="flex items-center gap-2 text-sky-500 font-bold hover:underline">
                      <Download size={18} /> Download as PDF
                   </button>
                </div>
                <div className="space-y-6">
                  {chapter.importantNotes.map((note, i) => (
                    <div key={i} className="flex gap-4 items-start bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl">
                      <div className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 text-xs font-bold">{i + 1}</div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Progress Action */}
        {!isCompleted(chapter.id) && (
          <div className="mt-16 p-8 bg-sky-500 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-sky-200 dark:shadow-none">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to move on?</h3>
              <p className="text-sky-50">Mark this chapter as complete to track your progress.</p>
            </div>
            <button 
              onClick={() => {
                markAsComplete(chapter.id);
                toast.success('Chapter marked as complete!');
              }}
              className="px-8 py-4 bg-white text-sky-500 font-bold rounded-2xl hover:bg-sky-50 transition-colors shadow-lg"
            >
              Mark as Finished
            </button>
          </div>
        )}
      </main>

      <AIChatbot chapterTitle={chapter.title} />
    </div>
  );
};
