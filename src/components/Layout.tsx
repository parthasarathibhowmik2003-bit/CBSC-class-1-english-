import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, BookOpen, GraduationCap, Home, Info, Mail, LayoutDashboard, MessageSquare } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Chapters', path: '/chapters', icon: BookOpen },
  { name: 'Grammar', path: '/grammar', icon: GraduationCap },
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'About', path: '/about', icon: Info },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-sky-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-200 group-hover:rotate-6 transition-transform">
              <BookOpen size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white hidden sm:block">
              English Hub
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                  location.pathname === item.path
                    ? "bg-sky-50 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400"
                    : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
                )}
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-sky-100 dark:border-slate-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium",
                    location.pathname === item.path
                      ? "bg-sky-50 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                  )}
                >
                  <item.icon size={20} />
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => (
  <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white">
              <BookOpen size={18} />
            </div>
            <span className="font-bold text-lg dark:text-white">CBSE Class 1 English</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-sm">
            Making learning fun and easy for first graders. Your companion for textbook solutions, grammar, and more!
          </p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/chapters" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors">Chapters</Link></li>
            <li><Link to="/grammar" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors">Grammar</Link></li>
            <li><Link to="/worksheets" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors">Worksheets</Link></li>
            <li><Link to="/tests" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors">Test Papers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Support</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors">Contact</Link></li>
            <li><Link to="/privacy" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-sm text-slate-500">
        <p>© 2026 CBSE Class 1 English Reference Hub. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="#" className="hover:text-sky-500">Twitter</Link>
          <Link to="#" className="hover:text-sky-500">Facebook</Link>
          <Link to="#" className="hover:text-sky-500">Instagram</Link>
        </div>
      </div>
    </div>
  </footer>
);
