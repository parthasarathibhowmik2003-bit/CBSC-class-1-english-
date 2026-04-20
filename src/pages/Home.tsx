import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, FileText, Users, Bookmark, Trophy, Sparkles, Star, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { chapters } from '@/src/data/chapters';
import { cn } from '@/src/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const Home = () => {
  const vocabularyOfTheDay = { word: 'Diligent', meaning: 'Working hard and carefully.' };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-yellow-50 dark:from-slate-900 dark:via-slate-950 dark:to-sky-950">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 dark:opacity-40">
           <div className="absolute top-10 left-10 w-32 h-32 bg-sky-200 rounded-full blur-3xl animate-pulse"></div>
           <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-8 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-sky-100 dark:shadow-none inline-flex items-center gap-2 border border-sky-50 dark:border-slate-700"
          >
            <span className="px-3 py-1 bg-sky-500 text-white text-xs font-bold rounded-lg uppercase tracking-wider">New</span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Updated with 2026 Curriculum!</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight"
          >
            CBSE Class 1 <br/>
            <span className="text-sky-500">English Hub</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed"
          >
            The fun and interactive way for kids to master English. Detailed solutions, catchy grammar tips, and printable worksheets all in one place.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/chapters" className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-sky-200 dark:shadow-none transition-all hover:-translate-y-1">
              Start Learning <ArrowRight size={20} />
            </Link>
            <Link to="/worksheets" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-white rounded-2xl font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              Practice Worksheets
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Sections Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quick Access Card */}
          <div className="col-span-1 lg:col-span-2 bg-gradient-to-r from-blue-500 to-sky-500 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">
               <Trophy size={120} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Daily Challenge</h2>
            <p className="text-blue-50 mb-8 max-w-xs">Complete today's English quiz and earn exciting rewards for your dashboard!</p>
            <Link to="/quiz" className="inline-flex h-12 items-center px-6 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors">
              Enter Quiz Area
            </Link>
          </div>

          {/* Vocabulary Card */}
          <div className="bg-yellow-400 dark:bg-yellow-500 rounded-3xl p-8 text-slate-900 group">
            <div className="flex items-center gap-2 mb-4 font-bold uppercase tracking-wider text-sm opacity-80">
              <Sparkles size={18} />
              Word of the Day
            </div>
            <h3 className="text-4xl font-black mb-2">{vocabularyOfTheDay.word}</h3>
            <p className="text-slate-900/80 mb-6 font-medium italic">"{vocabularyOfTheDay.meaning}"</p>
            <div className="h-1 w-12 bg-slate-900/20 rounded-full mb-6"></div>
            <p className="text-sm font-medium">Example: "The student was very <span className="underline decoration-2">diligent</span> in his studies."</p>
          </div>
        </div>
      </section>

      {/* Featured Chapters */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold dark:text-white mb-2">Popular Chapters</h2>
              <p className="text-slate-600 dark:text-slate-400">Jump right into most loved stories</p>
            </div>
            <Link to="/chapters" className="text-sky-500 font-bold flex items-center gap-1 hover:underline">
              View All <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter) => (
              <motion.div
                key={chapter.id}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={chapter.imageUrl} alt={chapter.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 h-10 w-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur rounded-full flex items-center justify-center text-sky-500">
                     <Star size={20} fill="currentColor" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold dark:text-white mb-2">{chapter.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    {chapter.description}
                  </p>
                  <Link to={`/chapter/${chapter.id}`} className="w-full flex h-12 items-center justify-center bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 font-bold rounded-xl hover:bg-sky-500 hover:text-white transition-all gap-2 group">
                    Study Now <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Overview */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold dark:text-white mb-4">Everything You Need</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">From textbooks to test papers, we cover the entire curriculum with interactive resources.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: GraduationCap, title: 'Grammar Zone', color: 'orange', link: '/grammar' },
            { icon: FileText, title: 'Worksheets', color: 'green', link: '/worksheets' },
            { icon: Trophy, title: 'Test Papers', color: 'purple', link: '/tests' },
            { icon: Users, title: 'Parents Guide', color: 'sky', link: '/parents' },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-sky-200 dark:hover:border-sky-900 transition-all group flex flex-col items-center text-center shadow-sm hover:shadow-lg"
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
                item.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                item.color === 'green' ? 'bg-green-100 text-green-600' :
                item.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                'bg-sky-100 text-sky-600'
              )}>
                <item.icon size={32} />
              </div>
              <h3 className="font-bold text-lg dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Interactive learning materials and more.</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials (Simple) */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-3xl font-bold text-center dark:text-white mb-12">Loved by Families</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
               { name: "Anjali M.", role: "Parent", text: "My daughter loves the colorful interface and the AI bot that helps her with homework!" },
               { name: "Mrs. Sharma", role: "Class Teacher", text: "The worksheets are perfect for classroom activities. Very organized content." }
             ].map((t, i) => (
               <div key={i} className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm italic text-slate-600 dark:text-slate-300 relative">
                 <div className="absolute -top-4 -left-2 text-sky-500 opacity-20"><Trophy size={60} /></div>
                 "{t.text}"
                 <div className="not-italic mt-4 font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200" />
                    <div>
                      <div>{t.name}</div>
                      <div className="text-xs text-sky-500 uppercase">{t.role}</div>
                    </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};
