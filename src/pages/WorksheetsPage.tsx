import React from 'react';
import { FileText, Download, Printer, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'react-hot-toast';

const worksheets = [
  { id: 1, title: "A Happy Child - Coloring Sheet", type: "Creative", size: "1.2 MB" },
  { id: 2, title: "Nouns & Pronouns Practice", type: "Grammar", size: "800 KB" },
  { id: 3, title: "Match the Following: Animals", type: "Vocabulary", size: "1.5 MB" },
  { id: 4, title: "Class 1 Revision Set - Unit 1", type: "Revision", size: "2.1 MB" },
  { id: 5, title: "Holiday Homework: English", type: "Homework", size: "3.4 MB" },
];

export const WorksheetsPage = () => {
  const handleDownload = (title: string) => {
    toast.success(`Downloading ${title}...`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <div className="bg-white dark:bg-slate-900 border-b border-sky-100 dark:border-slate-800 py-20 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-3xl flex items-center justify-center mx-auto mb-6 text-green-600">
            <FileText size={40} />
          </div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Printable Worksheets</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            Practice makes perfect! Download our colorful worksheets for home practice.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-4">
        {worksheets.map((ws, i) => (
          <motion.div
            key={ws.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-sky-300 transition-all hover:shadow-lg"
          >
            <div className="flex items-center gap-6 text-center sm:text-left">
               <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <FileText size={32} />
               </div>
               <div>
                  <h3 className="text-lg font-bold dark:text-white mb-1">{ws.title}</h3>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                     <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{ws.type}</span>
                     <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{ws.size}</span>
                  </div>
               </div>
            </div>
            <div className="flex gap-2">
               <button 
                onClick={() => handleDownload(ws.title)}
                className="w-12 h-12 bg-sky-50 dark:bg-sky-900/30 text-sky-500 rounded-xl flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all border border-sky-100 dark:border-sky-800"
               >
                 <Download size={20} />
               </button>
               <button 
                onClick={() => toast.success('Sending to printer...')}
                className="flex items-center gap-2 px-6 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
               >
                 <Printer size={18} /> Print
               </button>
            </div>
          </motion.div>
        ))}

        <div className="mt-16 p-12 bg-green-500 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
           <div className="absolute -bottom-10 -right-10 opacity-20 rotate-12">
              <Star size={240} fill="currentColor" />
           </div>
           <div className="flex-1 relative z-10">
              <h2 className="text-3xl font-black mb-4 uppercase">Teacher's Pack</h2>
              <p className="text-green-50 text-lg mb-8 leading-relaxed">
                Are you a teacher? Get our complete curriculum pack with teacher's notes, answer keys, and extra activities for the whole year.
              </p>
              <button className="px-8 py-4 bg-white text-green-600 font-bold rounded-2xl hover:bg-green-50 transition-all shadow-xl">
                 Request Full Pack
              </button>
           </div>
           <div className="w-full md:w-1/3 aspect-[4/3] bg-white/20 rounded-3xl flex items-center justify-center border-4 border-white/30 backdrop-blur-sm relative z-10">
              <FileText size={80} />
           </div>
        </div>
      </div>
    </div>
  );
};
