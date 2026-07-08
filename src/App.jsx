import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import ParticlesBackground from './components/ParticlesBackground.jsx';

import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import GithubSection from './sections/GithubSection.jsx';
import Achievements from './sections/Achievements.jsx';
import Certifications from './sections/Certifications.jsx';
import Education from './sections/Education.jsx';
import Resume from './sections/Resume.jsx';
import Contact from './sections/Contact.jsx';

function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <GithubSection />
      <Achievements />
      <Certifications />
      <Education />
      <Resume />
      <Contact />
    </main>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // The site is dark-mode only.
    document.documentElement.classList.add('dark');
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="relative min-h-screen overflow-x-clip">
        <ParticlesBackground />
        <CursorGlow />
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <ScrollToTop />
        <ToastContainer position="bottom-right" theme="dark" autoClose={4000} />
      </div>
    </>
  );
}
