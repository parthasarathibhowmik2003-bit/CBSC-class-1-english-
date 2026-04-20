import React from 'react';
import { LayoutDashboard, BookOpen, Clock, Trophy, Star, CheckCircle, TrendingUp, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { chapters } from '@/src/data/chapters';
import { useProgress, useBookmarks } from '@/src/hooks/usePersistence';
import { cn } from '@/src/lib/utils';

export const Dashboard = () => {
  const { totalCompleted, progress } = useProgress();
  const { bookmarks } = useBookmarks();
  
  const bookmarkedChapters = chapters.filter(c => bookmarks.includes(c.id));
  const progressPercentage = (totalCompleted / chapters.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-sky-100 dark:border-slate-800 py-12 mb-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
             <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 border-4 border-white dark:border-slate-800 shadow-xl flex items-center justify-center text-white">
                <span className="text-4xl font-black">JS</span>
             </div>
             <div>
                <h1 className="text-3xl font-black text-slate-900 dark:text-white">Hi, Junior Learner!</h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Ready for some English fun today?</p>
             </div>
          </div>
          <div className="flex gap-4">
             <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-yellow-100 dark:shadow-none">
                   <Trophy size={20} />
                </div>
                <div>
                   <div className="text-xs font-bold text-yellow-600 dark:text-yellow-500 uppercase tracking-wider">Level</div>
                   <div className="text-slate-900 dark:text-white font-black">Beginner Star</div>
                </div>
             </div>
             <div className="bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-100 dark:shadow-none">
                   <Star size={20} fill="currentColor" />
                </div>
                <div>
                   <div className="text-xs font-bold text-sky-600 dark:text-sky-500 uppercase tracking-wider">Points</div>
                   <div className="text-slate-900 dark:text-white font-black">{totalCompleted * 50}</div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            {/* Progress Card */}
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-800">
               <div className="flex justify-between items-end mb-6">
                 <div>
                    <h2 className="text-2xl font-bold dark:text-white mb-1">Learning Progress</h2>
                    <p className="text-slate-500 text-sm">You have finished {totalCompleted} out of {chapters.length} chapters!</p>
                 </div>
                 <span className="text-3xl font-black text-sky-500">{Math.round(progressPercentage)}%</span>
               </div>
               <div className="h-6 w-full bg-slate-100 dark:bg-slate-800 rounded-full p-1 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    className="h-full bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-end px-2"
                  >
                    <div className="w-1 h-1 bg-white/50 rounded-full" />
                  </motion.div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Daily Planner */}
               <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3 mb-6">
                     <Calendar className="text-sky-500" />
                     <h2 className="text-xl font-bold dark:text-white">Today's Goals</h2>
                  </div>
                  <div className="space-y-4">
                     {[
                       { task: "Read One Story", done: totalCompleted > 0 },
                       { task: "Learn 5 New Words", done: true },
                       { task: "Answer 3 Questions", done: false },
                       { task: "Practice Grammar", done: false },
                     ].map((t, i) => (
                       <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                          <div className={cn("w-6 h-6 rounded-md flex items-center justify-center border-2", t.done ? "bg-green-500 border-green-500 text-white" : "border-slate-200 dark:border-slate-700")}>
                             {t.done && <CheckCircle size={14} />}
                          </div>
                          <span className={cn("font-medium", t.done ? "text-slate-400 line-through" : "text-slate-700 dark:text-slate-300")}>{t.task}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Stats Overview */}
               <div className="bg-slate-900 rounded-[2rem] p-8 text-white">
                  <div className="flex items-center gap-3 mb-8">
                     <TrendingUp className="text-sky-400" />
                     <h2 className="text-xl font-bold">Quick Stats</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white/10 p-4 rounded-2xl">
                        <div className="text-sky-400 text-3xl font-black mb-1">{totalCompleted}</div>
                        <div className="text-xs uppercase font-bold text-white/50">Chapters</div>
                     </div>
                     <div className="bg-white/10 p-4 rounded-2xl">
                        <div className="text-sky-400 text-3xl font-black mb-1">0</div>
                        <div className="text-xs uppercase font-bold text-white/50">Quizzes</div>
                     </div>
                     <div className="bg-white/10 p-4 rounded-2xl">
                        <div className="text-sky-400 text-3xl font-black mb-1">{bookmarks.length}</div>
                        <div className="text-xs uppercase font-bold text-white/50">Bookmarks</div>
                     </div>
                     <div className="bg-white/10 p-4 rounded-2xl">
                        <div className="text-sky-400 text-3xl font-black mb-1">Star</div>
                        <div className="text-xs uppercase font-bold text-white/50">Status</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-8">
             {/* Bookmarks Section */}
             <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-6">
                   <Star className="text-yellow-400" fill="currentColor" />
                   <h2 className="text-xl font-bold dark:text-white">Your Favorites</h2>
                </div>
                <div className="space-y-3">
                   {bookmarkedChapters.length > 0 ? (
                     bookmarkedChapters.map(c => (
                       <Link key={c.id} to={`/chapter/${c.id}`} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-sky-50 dark:hover:bg-sky-900/30 transition-all border border-transparent hover:border-sky-200">
                          <span className="font-bold text-slate-800 dark:text-slate-200">{c.title}</span>
                          <ArrowRight size={16} className="text-sky-500" />
                       </Link>
                     ))
                   ) : (
                     <div className="text-center py-6 text-slate-400">
                        <p className="text-sm">No bookmarks yet. Save chapters you love!</p>
                     </div>
                   )}
                </div>
             </div>

             {/* Study Tip */}
             <div className="bg-sky-500 rounded-[2rem] p-8 text-white relative overflow-hidden">
                <div className="absolute -top-4 -right-4 opacity-10">
                   <Clock size={120} />
                </div>
                <h3 className="text-xl font-bold mb-4">Study Tip</h3>
                <p className="text-sky-50 text-sm leading-relaxed mb-6">
                   Try to read at least one chapter every day before bedtime. It helps you remember the story better and improves your English!
                </p>
                <div className="p-3 bg-white/20 rounded-xl flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                   <Clock size={16} /> 10 mins a day is enough!
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
