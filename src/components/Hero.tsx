
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black px-6 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-25 animate-pulse delay-500"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-20 animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 bg-white text-black text-sm font-medium rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            Coming Soon
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
          Your AI Coding Assistant
          <br />
          <span className="text-gray-300 relative">
            Finally Has Memory
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-30"></div>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          DevMemory remembers every feature you worked on — files, logs, terminal, and chat history — so you never lose context again.
        </p>
        
        <Button 
          onClick={scrollToWaitlist}
          size="lg" 
          className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 animate-fade-in group"
        >
          Join the Waitlist
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <div className="mt-12 flex items-center justify-center space-x-8 opacity-60 animate-fade-in">
          <div className="text-gray-500 text-sm">
            <span className="block font-semibold text-white text-2xl">1,247</span>
            Developers waiting
          </div>
          <div className="w-px h-8 bg-gray-700"></div>
          <div className="text-gray-500 text-sm">
            <span className="block font-semibold text-white text-2xl">Early 2025</span>
            Launch target
          </div>
        </div>
      </div>
    </section>
  );
};
