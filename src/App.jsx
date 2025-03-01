import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import AboutUsSection from "./Components/AboutPage"; // Import the AboutUsSection component

function App() {
  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0 transform -translate-y-60" // Shift video upwards more
      >
        <source src="/reflect bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <Header />
        <HeroSection />
      </div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center mt-10">
        <div className="w-full flex justify-center">
          <div className="w-3/4">
            <AboutUsSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
