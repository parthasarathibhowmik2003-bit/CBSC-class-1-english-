import React from 'react';
import { Trophy, Star, ArrowRight, ShieldCheck, Gamepad2, Award, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'react-hot-toast';

export const TestsPage = () => {
  const tests = [
    { title: "Unit 1 Mock Test", time: "20 mins", questions: 10, difficulty: "Easy" },
    { title: "Half-Yearly Mock Exam", time: "45 mins", questions: 25, difficulty: "Medium" },
    { title: "Final Exam Preparation", time: "60 mins", questions: 40, difficulty: "Hard" },
    { title: "Vocabulary Challenge", time: "10 mins", questions: 15, difficulty: "Fun" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <div className="bg-gradient-to-br from-indigo-600 to-blue-700 py-24 px-4 text-center text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <Trophy className="absolute top-10 left-10 rotate-12" size={120} />
            <Star className="absolute bottom-10 right-10 -rotate-12" size={100} />
         </div>
         <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-5xl font-black mb-4 uppercase tracking-tight">Test Preparation</h1>
            <p className="text-blue-100 text-lg max-w-xl mx-auto font-medium">
              Challenge yourself and earn badges! Our tests help you prepare for school exams in a fun way.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {tests.map((test, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center group hover:-translate-y-2 transition-all"
             >
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:rotate-6 transition-transform">
                   <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold dark:text-white mb-2">{test.title}</h3>
                <div className="flex gap-3 mb-8">
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{test.time}</span>
                   <span className="text-[10px] font-black uppercase tracking-widest text-sky-500">{test.difficulty}</span>
                </div>
                <button 
                  onClick={() => toast.success('Test starting... Good luck!')}
                  className="w-full h-12 bg-slate-900 text-white font-bold rounded-xl hover:bg-sky-500 transition-colors flex items-center justify-center gap-2"
                >
                   Start Test <ArrowRight size={18} />
                </button>
             </motion.div>
           ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-sm border border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-bold dark:text-white mb-8 flex items-center gap-3">
                 <Award className="text-yellow-500" /> Recent Accomplishments
              </h2>
              <div className="space-y-4">
                 <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl flex items-center gap-6 border border-slate-100 dark:border-slate-700">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white"><CheckCircle size={24} /></div>
                    <div>
                       <div className="font-bold dark:text-white">Unit 1 Vocabulary Star</div>
                       <div className="text-sm text-slate-500 uppercase tracking-widest font-black">Earned 2 days ago</div>
                    </div>
                 </div>
                 <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl flex items-center gap-6 opacity-50 grayscale border border-slate-100 dark:border-slate-700">
                    <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center text-white">?</div>
                    <div>
                       <div className="font-bold dark:text-white">Grammar Master</div>
                       <div className="text-sm text-slate-500 uppercase tracking-widest font-black">Complete Nouns test to unlock</div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-yellow-400 rounded-[2.5rem] p-10 text-slate-900 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black mb-4 flex items-center gap-2"><Gamepad2 /> Game Mode</h3>
                <p className="font-medium opacity-80 leading-relaxed">
                  Bored of normal tests? Try our game mode where you can battle friends in spelling and grammar!
                </p>
              </div>
              <button 
                onClick={() => toast.error('Multiplayer coming soon!')}
                className="mt-8 h-14 bg-slate-900 text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-xl"
              >
                Launch Game
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
