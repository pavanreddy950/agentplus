import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import VideoSection from "@/components/video-section";
import CalendarSection from "@/components/calendar-section";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-foreground">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <CalendarSection />
      <Footer />
    </div>
  );
};

export default Index;
