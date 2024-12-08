
import Chatbox from "../components/Chatbox";
import HeroSection from "../components/Herosection";
import PartnersSection from "../components/PartnersSection";
import ServicesSection from "../components/ServicesSection";

const Home = () => {
  return (
    <div className="flex flex-col">
    <HeroSection />
    <Chatbox/>
    <PartnersSection/>
    <ServicesSection/>
  </div>
  )
}

export default Home


