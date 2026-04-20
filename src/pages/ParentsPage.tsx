import React from 'react';
import { Users, Heart, Lightbulb, TrendingUp, BookCheck, ShieldAlert, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export const ParentsPage = () => {
  const tips = [
    { title: "Read Together", description: "Spending 15 minutes reading with your child every night can significantly improve their vocabulary." },
    { title: "Phonics First", description: "Encourage them to sound out new words rather than just memorizing them." },
    { title: "Make it a Game", description: "Use our 'Vocabulary of the Day' as a fun dinner table conversation starter." },
    { title: "Positive Reinforcement", description: "Celebrate small wins when they finish a chapter or learn a difficult rule." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <div className="bg-white dark:bg-slate-900 border-b border-sky-100 dark:border-slate-800 py-20 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="w-20 h-20 bg-rose-100 dark:bg-rose-900/30 rounded-3xl flex items-center justify-center mx-auto mb-6 text-rose-500">
            <Users size={40} />
          </div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Parent & Teacher Guidance</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            Resources and tips for adults to help young learners succeed in their early English education.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {tips.map((tip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-rose-50 dark:bg-rose-900/20 text-rose-500 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-bold dark:text-white mb-4">{tip.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {tip.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                 <TrendingUp className="text-sky-400" /> Tracking Progress
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Use our Student Dashboard to track which chapters your child has completed. Consistency is key for Class 1 students.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-sky-400 bg-white/5 p-4 rounded-2xl">
                    <BookCheck size={20} /> 1. Check Completed Chapters
                 </div>
                 <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-sky-400 bg-white/5 p-4 rounded-2xl">
                    <ShieldAlert size={20} /> 2. Identify Difficult Areas
                 </div>
              </div>
           </div>

           <div className="bg-sky-500 rounded-[2.5rem] p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black mb-4 flex items-center gap-2"><GraduationCap /> Teacher Hub</h3>
                <p className="font-medium opacity-90 leading-relaxed">
                  Join our community of Class 1 teachers to share lesson plans and activity sheets.
                </p>
              </div>
              <button className="mt-8 h-12 bg-white text-sky-500 font-bold rounded-xl hover:bg-sky-50 transition-all">
                Request Access
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
