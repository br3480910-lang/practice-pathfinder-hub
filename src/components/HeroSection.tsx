import { Button } from "@/components/ui/button";
import { Search, Filter, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero py-20 px-4 sm:px-6 lg:px-8 overflow-hidden hero-section">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Students studying" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Modern Circular Decorations */}
      <div className="circle-decoration circle-decoration-lg" style={{ top: '-100px', right: '-50px', background: 'var(--gradient-accent)' }}></div>
      <div className="circle-decoration circle-decoration-md" style={{ bottom: '20%', left: '-30px', background: 'var(--gradient-green)' }}></div>
      <div className="circle-decoration circle-decoration-sm" style={{ top: '30%', left: '10%', background: 'var(--gradient-purple)' }}></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero/90"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">
            Never Miss Practice
            <span className="block text-gold animate-pulse">Again!</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
            Master SSC, Banking, Railways, and State exams with our comprehensive mock test platform. 
            Track your progress, analyze your performance, and achieve your goals.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-2xl mx-auto border border-white/20">
            <p className="text-lg text-electric font-semibold mb-2">🚀 Boost Your Success Rate!</p>
            <p className="text-white/80">Students who practice with mock tests score 40% higher than those who don't. Start your journey to success today!</p>
          </div>
          
          {/* Search Section */}
          <div className="max-w-4xl mx-auto modern-card border-white/20 mb-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search for mock tests, subjects, or exam types..."
                  className="pl-10 bg-background/50 border-border/50 focus:bg-background/80 transition-all"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="lg" className="whitespace-nowrap bg-white/10 border-white/30 text-foreground hover:bg-white/20">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Button size="lg" className="bg-gradient-primary text-white hover:opacity-90 shadow-lg">
                  Search Tests
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white relative z-10">
            <div className="text-center modern-card bg-white/10 border-white/20">
              <div className="text-4xl font-bold mb-2 bg-gradient-accent bg-clip-text text-transparent">50,000+</div>
              <div className="text-white/90 font-medium">Active Students</div>
            </div>
            <div className="text-center modern-card bg-white/10 border-white/20">
              <div className="text-4xl font-bold mb-2 bg-gradient-green bg-clip-text text-transparent">1,200+</div>
              <div className="text-white/90 font-medium">Mock Tests</div>
            </div>
            <div className="text-center modern-card bg-white/10 border-white/20">
              <div className="text-4xl font-bold mb-2 bg-gradient-motivation bg-clip-text text-transparent">95%</div>
              <div className="text-white/90 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;