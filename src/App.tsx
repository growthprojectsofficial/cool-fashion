import LoadingScreen from './sections/LoadingScreen';
import Header from './sections/Header';
import Hero from './sections/Hero';
import ProductShowcase from './sections/ProductShowcase';
import FeaturedCollection from './sections/FeaturedCollection';
import VideoShowcase from './sections/VideoShowcase';
import WhyChooseUs from './sections/WhyChooseUs';
import AboutUs from './sections/AboutUs';
import Reviews from './sections/Reviews';
import FAQ from './sections/FAQ';
import FacebookSection from './sections/FacebookSection';
import Footer from './sections/Footer';
import WhatsAppButton from './sections/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <FeaturedCollection />
        <VideoShowcase />
        <WhyChooseUs />
        <AboutUs />
        <Reviews />
        <FAQ />
        <FacebookSection />
        <Footer />
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;
