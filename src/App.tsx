import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { MusicPortfolio } from "./components/MusicPortfolio";
import { Contact } from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MusicPortfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
