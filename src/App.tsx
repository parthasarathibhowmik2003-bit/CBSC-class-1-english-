import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { ChaptersPage } from './pages/ChaptersPage';
import { ChapterDetailsPage } from './pages/ChapterDetailsPage';
import { GrammarPage } from './pages/GrammarPage';
import { Dashboard } from './pages/Dashboard';
import { WorksheetsPage } from './pages/WorksheetsPage';
import { TestsPage } from './pages/TestsPage';
import { ParentsPage } from './pages/ParentsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans selection:bg-sky-200 selection:text-sky-900">
        <Toaster position="top-center" />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chapters" element={<ChaptersPage />} />
            <Route path="/chapter/:id" element={<ChapterDetailsPage />} />
            <Route path="/grammar" element={<GrammarPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/worksheets" element={<WorksheetsPage />} />
            <Route path="/tests" element={<TestsPage />} />
            <Route path="/parents" element={<ParentsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<div className="min-h-screen flex items-center justify-center font-bold text-2xl">404 - Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
