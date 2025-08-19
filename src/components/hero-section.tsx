import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Creative geometric line patterns */}
        <div className="absolute inset-0">
          {/* Diagonal accent lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 -left-20 w-96 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 blur-sm"></div>
            <div className="absolute top-40 -left-10 w-72 h-0.5 bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-45"></div>
            <div className="absolute bottom-32 -right-20 w-80 h-0.5 bg-gradient-to-r from-transparent via-white/25 to-transparent -rotate-45 blur-sm"></div>
            <div className="absolute bottom-48 -right-10 w-64 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45"></div>
          </div>
          
          {/* Curved flowing lines */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="whiteGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="whiteGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path d="M-100,200 Q300,100 600,300 T1300,250" stroke="url(#whiteGradient1)" strokeWidth="2" fill="none" />
            <path d="M-100,400 Q400,300 800,500 T1300,450" stroke="url(#whiteGradient2)" strokeWidth="1.5" fill="none" />
            <path d="M-100,600 Q200,500 500,700 T1300,650" stroke="url(#whiteGradient1)" strokeWidth="1" fill="none" />
          </svg>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          {/* Animated floating elements */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/6 right-1/4 w-1 h-1 bg-white/35 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-brand-orange mr-2" />
              Save 20+ hours per week
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-brand-orange mr-2" />
              Reduce manual errors by 90%
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-brand-orange mr-2" />
              Scale without hiring
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Streamline Your Business with{" "}
            <span className="text-transparent bg-gradient-to-r from-brand-orange to-orange-400 bg-clip-text">
              Smart Automation
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Automate your workflows with AgentPlus — and focus on what truly matters: growing your business.
          </p>

          {/* CTA Button (centered) */}
          <div className="flex justify-center items-center">
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => {
                document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group"
            >
              Book a Free Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;