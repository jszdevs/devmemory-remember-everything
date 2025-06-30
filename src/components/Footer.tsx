
import { Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-black border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-400 mb-4">
          Built by <span className="font-medium text-white">Your Name</span>
        </p>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};
