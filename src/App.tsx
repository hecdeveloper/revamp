import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import ClientExamples from './components/ClientExamples';
import Methodology from './components/Methodology';
import Locations from './components/Locations';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Technologies />
      <ClientExamples />
      <Methodology />
      <Locations />
      <Contact />
    </div>
  );
}

export default App;