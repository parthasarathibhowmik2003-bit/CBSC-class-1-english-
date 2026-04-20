import React, { useState } from 'react';
import { Mail, MessageSquare, Send, User, HelpCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'react-hot-toast';

export const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Message sent! We will get back to you soon.');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <div className="max-w-6xl mx-auto px-4 py-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">Get in <span className="text-sky-500">Touch</span></h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                Have questions for our teachers? Want to suggest a new feature? We'd love to hear from you!
              </p>

              <div className="space-y-8">
                 <div className="flex gap-6 p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-lg transition-all">
                    <div className="w-14 h-14 bg-sky-100 dark:bg-sky-900/30 text-sky-500 rounded-2xl flex items-center justify-center shrink-0">
                       <Mail size={28} />
                    </div>
                    <div>
                       <h4 className="font-bold dark:text-white text-lg mb-1">Email Support</h4>
                       <p className="text-slate-500 dark:text-slate-400">support@englishhub.com</p>
                    </div>
                 </div>

                 <div className="flex gap-6 p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-lg transition-all">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-500 rounded-2xl flex items-center justify-center shrink-0">
                       <HelpCircle size={28} />
                    </div>
                    <div>
                       <h4 className="font-bold dark:text-white text-lg mb-1">Teacher Help</h4>
                       <p className="text-slate-500 dark:text-slate-400">Ask our expert teachers for guidance.</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
               <h3 className="text-2xl font-bold dark:text-white mb-8">Send us a Message</h3>
               <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
                     <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input required type="text" className="w-full h-14 pl-12 pr-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-sky-500 dark:text-white" placeholder="Child or Parent Name" />
                     </div>
                  </div>
                  
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                     <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input required type="email" className="w-full h-14 pl-12 pr-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-sky-500 dark:text-white" placeholder="you@example.com" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                     <div className="relative">
                        <MessageSquare className="absolute left-4 top-6 text-slate-400" size={18} />
                        <textarea required className="w-full min-h-[150px] pl-12 pr-4 pt-5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-sky-500 dark:text-white" placeholder="How can we help you?"></textarea>
                     </div>
                  </div>

                  <button 
                    disabled={loading}
                    className="w-full h-14 bg-sky-500 hover:bg-sky-600 disabled:opacity-70 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-200 dark:shadow-none"
                  >
                    {loading ? 'Sending...' : <>Send Message <Send size={20} /></>}
                  </button>
               </form>
            </div>
         </div>
      </div>
    </div>
  );
};
