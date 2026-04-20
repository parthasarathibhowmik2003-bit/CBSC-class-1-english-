import React from 'react';
import { Layout } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'react-hot-toast';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <div className="max-w-5xl mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-6">Learning Should Be Fun!</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We built the CBSE Class 1 English Hub to help young learners discover the joy of English through stories, poems, and interactive activities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
           <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 rotate-2">
              <img src="https://picsum.photos/seed/kids-learning/800/800" alt="Children learning" className="w-full h-full object-cover" />
           </div>
           <div className="space-y-6">
              <h2 className="text-3xl font-bold dark:text-white uppercase tracking-tight">Our Mission</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Traditional textbooks can sometimes be overwhelming for a 6-year-old. Our mission is to break down the curriculum into bite-sized, colorful, and engaging pieces that kids actually enjoy exploring.
              </p>
              <div className="space-y-4 pt-4">
                 {[
                   "Detailed Solutions for every chapter",
                   "Interactive Voice Reading support",
                   "AI-powered Study Buddy for Q&A",
                   "Curated Grammar exercises for juniors"
                 ].map((point, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0">✓</div>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{point}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 text-white text-center">
            <h2 className="text-3xl font-black mb-6">Created for Students & Parents</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you are a student looking for answers or a parent trying to guide your child, this hub is designed with both of you in mind. Accessible, safe, and educational.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl font-black text-sky-400 mb-1">100+</div>
                  <div className="text-xs uppercase font-bold tracking-widest text-white/50">Exercises</div>
               </div>
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl font-black text-sky-400 mb-1">20+</div>
                  <div className="text-xs uppercase font-bold tracking-widest text-white/50">Chapters</div>
               </div>
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl font-black text-sky-400 mb-1">Free</div>
                  <div className="text-xs uppercase font-bold tracking-widest text-white/50">Access</div>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};
