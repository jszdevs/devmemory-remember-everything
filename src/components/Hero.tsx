
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-white text-black text-sm font-medium rounded-full mb-8">
            Coming Soon
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your AI Coding Assistant
          <br />
          <span className="text-gray-300">Finally Has Memory</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          DevMemory remembers every feature you worked on — files, logs, terminal, and chat history — so you never lose context again.
        </p>
        
        <Button 
          onClick={scrollToWaitlist}
          size="lg" 
          className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
        >
          Join the Waitlist
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        
        <div className="mt-12 flex items-center justify-center space-x-8 opacity-60">
          <div className="text-gray-500 text-sm">
            <span className="block font-semibold text-white">1,247</span>
            Developers waiting
          </div>
          <div className="w-px h-8 bg-gray-700"></div>
          <div className="text-gray-500 text-sm">
            <span className="block font-semibold text-white">Early 2025</span>
            Launch target
          </div>
        </div>
      </div>
    </section>
  );
};
