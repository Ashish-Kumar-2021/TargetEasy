import Hero from '../components/Hero';
import FeaturesBar from '../components/FeaturesBar';
import Courses from '../components/Courses';
import About from '../components/About';
import Advantages from '../components/Advantages';
import Gallery from '../components/Gallery';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <FeaturesBar />

      <div id="courses" className="scroll-mt-20">
        <Courses />
      </div>

      <div id="about" className="scroll-mt-20">
        <About />
      </div>

      <div id="results" className="scroll-mt-20">
        <Advantages />
      </div>

      <div id="gallery" className="scroll-mt-20">
        <Gallery />
      </div>

      <CTA />
    </>
  );
};

export default Home;
