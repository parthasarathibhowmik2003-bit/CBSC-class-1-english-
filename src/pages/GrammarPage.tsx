import React, { useState } from 'react';
import { GraduationCap, Sparkles, Star, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { grammarTopics } from '@/src/data/grammar';
import { cn } from '@/src/lib/utils';
import { toast } from 'react-hot-toast';

export const GrammarPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(grammarTopics[0]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-sky-100 dark:border-slate-800 py-16 mb-8 text-center px-4">
        <div className="max-w-7xl mx-auto">
          <div className="w-20 h-20 bg-sky-100 dark:bg-sky-900/30 rounded-3xl flex items-center justify-center mx-auto mb-6 text-sky-500">
            <GraduationCap size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Grammar Zone</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg">
            Master the basics of English grammar with simple rules and interactive exercises.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest px-4 mb-4">Topics</h2>
            {grammarTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className={cn(
                  "w-full flex items-center justify-between p-4 rounded-2xl transition-all border",
                  selectedTopic.id === topic.id
                    ? "bg-sky-500 border-sky-400 text-white shadow-lg shadow-sky-200 dark:shadow-none translate-x-2"
                    : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center",
                    selectedTopic.id === topic.id ? "bg-white/20" : "bg-sky-50 dark:bg-sky-900/20 text-sky-500"
                  )}>
                    <Star size={18} fill={selectedTopic.id === topic.id ? "white" : "none"} />
                  </div>
                  <span className="font-bold">{topic.title}</span>
                </div>
                <ChevronRight size={18} className={cn(selectedTopic.id === topic.id ? "opacity-100" : "opacity-30")} />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTopic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 p-8 md:p-12 overflow-hidden relative"
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 p-8 text-sky-50 dark:text-sky-900/20 pointer-events-none">
                  <GraduationCap size={180} />
                </div>

                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 text-xs font-bold rounded-lg uppercase tracking-wider mb-6">Class 1 Grammar</span>
                  <h2 className="text-4xl font-black text-slate-800 dark:text-white mb-6 uppercase leading-tight">{selectedTopic.title}</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                    {selectedTopic.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <section className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl">
                      <h3 className="text-xl font-bold dark:text-white mb-6 flex items-center gap-2">
                        <Sparkles className="text-yellow-500" size={24} /> Learning Rules
                      </h3>
                      <ul className="space-y-4">
                        {selectedTopic.rules.map((rule, i) => (
                          <li key={i} className="flex gap-4 items-start group">
                            <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center shrink-0 text-sky-500 group-hover:scale-110 transition-transform">
                               <CheckCircle2 size={16} />
                            </div>
                            <span className="text-slate-700 dark:text-slate-300 font-medium">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="bg-sky-500 p-8 rounded-3xl text-white">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Star size={24} /> Let's See Examples
                      </h3>
                      <div className="space-y-4">
                        {selectedTopic.examples.map((ex, i) => (
                          <div key={i} className="p-4 bg-white/10 rounded-2xl font-bold tracking-wide">
                            {ex}
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  <section className="bg-slate-900 rounded-[2rem] p-8 md:p-10 text-white">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                       <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center"><ArrowRight size={24} /></div>
                       Quick Practice Task
                    </h3>
                    <div className="space-y-6">
                      {selectedTopic.exercises.map((ex, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                           <p className="text-lg font-medium mb-4">Q: {ex.question}</p>
                           <button 
                            onClick={() => toast.success(`Correct Answer: ${ex.answer}`, { icon: '👏' })}
                            className="text-sky-400 font-bold hover:text-sky-300 flex items-center gap-1"
                           >
                             See Answer <ChevronRight size={16} />
                           </button>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
