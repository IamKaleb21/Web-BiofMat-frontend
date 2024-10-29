// src/pages/Home.jsx
import Footer from "../components/Footer"
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import PopularSection from '../components/PopularSection'
import DocumentHead from '../components/DocumentHead'

function Home() {
  return (
    <>
    <DocumentHead title="BiofMat - Home" />
    <div>
      <Header />
      <HeroSection />
      <PopularSection />
      <InfoSection />
      <div className="mx-3">
        <div className="border-1.5 border-primary bg-radial-custom place-self-center w-full h-48">
        </div>
      </div>
      
      <Footer />
    </div>
    </>
  );
}

export default Home;
