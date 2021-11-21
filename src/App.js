import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import BgAnimation from "../src/components/BackgrooundAnimation/BackgroundAnimation";
import { Section } from '../src/styles/GlobalComponents';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Timeline from './components/TimeLine/TimeLine';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
        <Header/>
      <Section grid>
        <Hero/>
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline/> 
      <Footer/>
    </div>
  );
}

export default App;
