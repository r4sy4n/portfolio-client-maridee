import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contacts from './components/Contact';
import Footer from './components/Footer';
import Mobile from './components/Mobile';
import ScrollUp from './components/ScrollUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <> 
      <motion.div
          className="progress-bar"
          style={{ scaleX }}
        />
      <div className='container'>
        <Navbar />
      </div>
      <main>
        <Hero />
      </main>
      <main  className='container'>
        <Mobile />
        <About />
        <Services />
        <Projects />
        <Contacts />
        <Footer />
      </main>
        <ScrollUp />
        <ToastContainer position='top-center' autoClose={3000} />
    </>
  );
}

export default App;
