
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
    <section id="waitlist" className="py-20 px-6 bg-black border-t border-gray-800 relative">
      {/* Creative background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]"></div>
      </div>
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
          <Rocket className="h-8 w-8 text-black" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Join the Early Access List
        </h2>
        
        <p className="text-xl text-gray-400 mb-12">
          We're launching DevMemory soon. Be the first to try it.
        </p>
        
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-white transition-colors" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 py-4 text-lg bg-black border-2 border-gray-800 focus:border-white text-white placeholder:text-gray-500 rounded-lg transition-all duration-300 hover:border-gray-600"
                required
              />
            </div>
            
            <Select value={editor} onValueChange={setEditor}>
              <SelectTrigger className="py-4 text-lg bg-black border-2 border-gray-800 focus:border-white text-white rounded-lg hover:border-gray-600 transition-all duration-300">
                <SelectValue placeholder="What editor do you use? (Optional)" />
              </SelectTrigger>
              <SelectContent className="bg-black border-2 border-gray-800 rounded-lg shadow-lg">
                <SelectItem value="vscode" className="text-white hover:bg-gray-800 focus:bg-gray-800">VS Code</SelectItem>
                <SelectItem value="cursor" className="text-white hover:bg-gray-800 focus:bg-gray-800">Cursor</SelectItem>
                <SelectItem value="webstorm" className="text-white hover:bg-gray-800 focus:bg-gray-800">WebStorm</SelectItem>
                <SelectItem value="vim" className="text-white hover:bg-gray-800 focus:bg-gray-800">Vim/Neovim</SelectItem>
                <SelectItem value="sublime" className="text-white hover:bg-gray-800 focus:bg-gray-800">Sublime Text</SelectItem>
                <SelectItem value="other" className="text-white hover:bg-gray-800 focus:bg-gray-800">Other</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              type="submit" 
              disabled={isLoading}
              size="lg"
              className="w-full bg-white hover:bg-gray-100 text-black py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 group"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2"></div>
                  Joining...
                </>
              ) : (
                <>
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        ) : (
          <div className="p-8 border border-gray-800 rounded-2xl bg-black animate-fade-in">
            <CheckCircle className="h-16 w-16 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">You're In!</h3>
            <p className="text-gray-400">We'll notify you as soon as DevMemory is ready.</p>
          </div>
        )}
        
        <div className="mt-12 p-6 bg-black border border-gray-800 rounded-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-[0.02] animate-pulse"></div>
          <p className="text-lg font-medium text-white italic relative z-10">
            "This is not another Copilot. This is Copilot with memory."
          </p>
        </div>
      </div>
    </section>
  );
};
