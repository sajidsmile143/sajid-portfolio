import { useRef } from 'react';
import { CustomCursor } from './components/Cursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Loader } from './components/Loader';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Loader />
      <CustomCursor />
      <Navigation />
      <main ref={containerRef} className="bg-black text-white">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;