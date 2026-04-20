import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, BookOpen, Star, Filter } from 'lucide-react';
import { motion } from 'motion/react';
import { chapters } from '@/src/data/chapters';

export const ChaptersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChapters = chapters.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-sky-100 dark:border-slate-800 py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold dark:text-white mb-4">Explore Chapters</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
            Find textbook solutions, summaries, and practice questions for every chapter in your Class 1 English book.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search for a chapter (e.g., 'Three Little Pigs')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-sky-500 transition-all dark:text-white"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {filteredChapters.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredChapters.map((chapter, i) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={chapter.imageUrl} alt={chapter.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-sky-600 dark:text-sky-400">
                    Unit {Math.floor(i / 2) + 1}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold dark:text-white">{chapter.title}</h3>
                    <Star size={18} className="text-yellow-400 fill-yellow-400" />
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                    {chapter.description}
                  </p>
                  <div className="flex gap-2">
                    <Link 
                      to={`/chapter/${chapter.id}`} 
                      className="flex-1 flex h-12 items-center justify-center bg-sky-500 text-white font-bold rounded-xl hover:bg-sky-600 transition-all gap-2"
                    >
                      Study Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
              <BookOpen size={40} />
            </div>
            <h3 className="text-xl font-bold dark:text-white mb-2">No chapters found</h3>
            <p className="text-slate-500">Try searching for something else!</p>
          </div>
        )}
      </div>
    </div>
  );
};
