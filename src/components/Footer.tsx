
import { Github, Twitter, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-black border-t border-gray-800 relative">
      <div className="absolute inset-0 bg-black">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center mb-4">
          <span className="text-gray-400">Built with</span>
          <Heart className="h-4 w-4 text-white mx-2 animate-pulse" />
          <span className="text-gray-400">by</span>
          <span className="font-medium text-white ml-2">Your Name</span>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 group"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6 group-hover:animate-pulse" />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 group"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 group-hover:animate-pulse" />
          </a>
        </div>
        
        <div className="mt-8 text-xs text-gray-600">
          © 2024 DevMemory. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
