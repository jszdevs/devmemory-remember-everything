
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [editor, setEditor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      setEmail("");
      setEditor("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Join the Early Access List
        </h2>
        
        <p className="text-xl text-gray-600 mb-12">
          We're launching DevMemory soon. Be the first to try it.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-12 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-lg"
              required
            />
          </div>
          
          <Select value={editor} onValueChange={setEditor}>
            <SelectTrigger className="py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-lg">
              <SelectValue placeholder="What editor do you use? (Optional)" />
            </SelectTrigger>
            <SelectContent className="bg-white border-2 border-gray-100 rounded-lg shadow-lg">
              <SelectItem value="vscode">VS Code</SelectItem>
              <SelectItem value="cursor">Cursor</SelectItem>
              <SelectItem value="webstorm">WebStorm</SelectItem>
              <SelectItem value="vim">Vim/Neovim</SelectItem>
              <SelectItem value="sublime">Sublime Text</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          
          <Button 
            type="submit" 
            disabled={isLoading}
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            {isLoading ? "Joining..." : "Join the Waitlist"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>
        
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <p className="text-lg font-medium text-gray-800 italic">
            "This is not another Copilot. This is Copilot with memory."
          </p>
        </div>
      </div>
    </section>
  );
};
