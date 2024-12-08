import "./App.css";
import Chatbox from "./components/Chatbox";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <Chatbox/>
    </div>
  );
}

export default App;
