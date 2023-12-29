import React from 'react';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};
