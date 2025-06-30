
import { Github, Twitter, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-black border-t border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
        {/* Animated background elements */}
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white opacity-[0.005] rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white opacity-[0.005] rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center mb-4 opacity-0 animate-fade-in">
          <span className="text-gray-400">Built with</span>
          <Heart className="h-4 w-4 text-white mx-2 animate-pulse hover:scale-125 transition-transform duration-300" />
          <span className="text-gray-400">by</span>
          <span className="font-medium text-white ml-2 hover:text-gray-200 transition-colors duration-300">Your Name</span>
        </div>
        
        <div className="flex justify-center space-x-6 opacity-0 animate-fade-in-delay-1">
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 group"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6 group-hover:animate-bounce" />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 group"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 group-hover:animate-bounce" style={{ animationDelay: '0.1s' }} />
          </a>
        </div>
        
        <div className="mt-8 text-xs text-gray-600 opacity-0 animate-fade-in-delay-2 hover:text-gray-400 transition-colors duration-300">
          © 2024 DevMemory. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
