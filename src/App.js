import "./App.css";
import Chatbox from "./components/Chatbox";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import PartnersSection from "./components/PartnersSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <Chatbox/>
      <PartnersSection/>
      <ServicesSection/>
    </div>
  );
}

export default App;
