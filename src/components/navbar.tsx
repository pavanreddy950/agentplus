import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import BookingModal from "./booking-modal";

const Navbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-4 left-8 right-8 md:left-16 md:right-16 lg:left-24 lg:right-24 z-50 transition-all duration-300 rounded-xl ${
        isScrolled 
          ? 'bg-brand-dark/60 backdrop-blur-lg border border-[rgba(255,136,0,0.25)] shadow-[0_0_16px_rgba(255,136,0,0.28)]' 
          : 'bg-transparent backdrop-blur-none border border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/Frame 13.png" 
                alt="AgentPlus" 
                className="h-8 w-auto"
              />
            </div>

            {/* Right side - About Us and CTA Button */}
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsAboutOpen(true)}
                className="text-foreground hover:text-brand-orange transition-colors duration-300"
              >
                About Us
              </button>
              {/* Direct link button to avoid embed loading issues */}
              <a
                href="https://cal.com/pavan-reddy/simplify-business-operations-with-automation-book-your-free-call"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="cta" size="lg">
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* About Us Modal */}
      {isAboutOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-brand-card rounded-2xl p-8 max-w-md w-full shadow-soft">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-foreground">About AgentPlus</h2>
                <button
                  onClick={() => setIsAboutOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  AgentPlus is a leading automation platform that helps businesses streamline their workflows and boost productivity through intelligent automation solutions.
                </p>
                <p>
                  Our team of experts specializes in creating custom integrations and automated processes that save time, reduce errors, and allow your team to focus on high-value activities.
                </p>
                <p>
                  Founded in 2024, we've helped over 50+ businesses transform their operations through smart automation.
                </p>
              </div>
              <div className="mt-6">
                <BookingModal>
                  <Button 
                    variant="cta" 
                    size="lg" 
                    className="w-full"
                    onClick={() => setIsAboutOpen(false)}
                  >
                    Get Started Today
                  </Button>
                </BookingModal>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;