import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import SpacesSection from "./components/SpacesSection";
import WhatsAppSticky from "./components/WhatsAppSticky";

const App = () => {
  return (
    <div className="min-h-dvh bg-white text-zinc-900">
      <Hero />
      <main>
        <SpacesSection />
        <Gallery />
      </main>
      <Footer />
      <WhatsAppSticky />
    </div>
  );
};

export default App;
