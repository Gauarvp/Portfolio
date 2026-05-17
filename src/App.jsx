import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import PMSkills from "./components/PMSkills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import PMThinking from "./components/PMThinking";
import WhyMe from "./components/WhyMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-cream text-ink overflow-x-hidden">
      <Navbar />
      <Hero />
      <Story />
      <PMSkills />
      <Experience />
      <Projects />
      <PMThinking />
      <WhyMe />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
