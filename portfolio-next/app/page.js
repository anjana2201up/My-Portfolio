import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Malaysia from '../components/Malaysia';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Background3D from '../components/Background3D';

export default function Home() {
  return (
    <>
      <Background3D />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Malaysia />
        <Skills />
        <Projects />
        <Certificates />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
