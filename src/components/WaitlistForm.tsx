
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, ArrowRight, Rocket, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [editor, setEditor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thanks for joining! We'll be in touch soon.");
      setIsSuccess(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-20 px-6 bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Creative animated background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white opacity-[0.005] rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white opacity-[0.005] rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 animate-bounce-in">
          <Rocket className="h-8 w-8 text-black" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 opacity-0 animate-fade-in">
          Join the Early Access List
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 opacity-0 animate-fade-in-delay-1">
          We're launching DevMemory soon. Be the first to try it.
        </p>
        
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-6 opacity-0 animate-fade-in-delay-2">
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-white transition-all duration-300 group-focus-within:scale-110" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 py-4 text-lg bg-black border-2 border-gray-800 focus:border-white text-white placeholder:text-gray-500 rounded-lg transition-all duration-300 hover:border-gray-600 focus:scale-105 hover:shadow-lg"
                required
              />
            </div>
            
            <Select value={editor} onValueChange={setEditor}>
              <SelectTrigger className="py-4 text-lg bg-black border-2 border-gray-800 focus:border-white text-white rounded-lg hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <SelectValue placeholder="What editor do you use? (Optional)" />
              </SelectTrigger>
              <SelectContent className="bg-black border-2 border-gray-800 rounded-lg shadow-lg animate-scale-in">
                <SelectItem value="vscode" className="text-white hover:bg-gray-800 focus:bg-gray-800 transition-colors duration-200">VS Code</SelectItem>
                <SelectItem value="cursor" className="text-white hover:bg-gray-800 focus:bg-gray-800 transition-colors duration-200">Cursor</SelectItem>
                <SelectItem value="webstorm" className="text-white hover:bg-gray-800 focus:bg-gray-800 transition-colors duration-200">WebStorm</SelectItem>
                <SelectItem value="vim" className="text-white hover:bg-gray-800 focus:bg-gray-800 transition-colors duration-200">Vim/Neovim</SelectItem>
                <SelectItem value="sublime" className="text-white hover:bg-gray-800 focus:bg-gray-800 transition-colors duration-200">Sublime Text</SelectItem>
                <SelectItem value="other" className="text-white hover:bg-gray-800 focus:bg-gray-800 transition-colors duration-200">Other</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              type="submit" 
              disabled={isLoading}
              size="lg"
              className="w-full bg-white hover:bg-gray-100 text-black py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group animate-glow"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2"></div>
                  Joining...
                </>
              ) : (
                <>
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </>
              )}
            </Button>
          </form>
        ) : (
          <div className="p-8 border border-gray-800 rounded-2xl bg-black animate-bounce-in hover:scale-105 transition-transform duration-300">
            <CheckCircle className="h-16 w-16 text-white mx-auto mb-4 animate-bounce-in" />
            <h3 className="text-2xl font-bold text-white mb-2 animate-fade-in">You're In!</h3>
            <p className="text-gray-400 animate-fade-in-delay-1">We'll notify you as soon as DevMemory is ready.</p>
            
            {/* Celebration particles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-float"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        )}
        
        <div className="mt-12 p-6 bg-black border border-gray-800 rounded-lg relative overflow-hidden opacity-0 animate-slide-up hover:scale-105 transition-all duration-500 group" style={{ animationDelay: '1s' }}>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-[0.02] animate-pulse"></div>
          <p className="text-lg font-medium text-white italic relative z-10 group-hover:text-gray-200 transition-colors duration-300">
            "This is not another Copilot. This is Copilot with memory."
          </p>
        </div>
      </div>
    </section>
  );
};
