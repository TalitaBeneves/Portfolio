import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import BgAnimation from "../src/components/BackgrooundAnimation/BackgroundAnimation";
import { Section } from '../src/styles/GlobalComponents';
import { Container } from './components/Header/HeaderStyles';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Container>
        <Header/>
      <Section grid>
        <Hero/>
        <BgAnimation />
      </Section>
      <Projects />
    </Container>
  );
}

export default App;
