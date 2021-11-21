import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { Section } from '../src/styles/GlobalComponents';

function App() {
  return (
    <div>
        <Header/>
      <Section grid>
        <Hero/>
      </Section>
    </div>
  );
}

export default App;
