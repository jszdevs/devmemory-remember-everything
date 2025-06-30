
import { Save, Brain, MessageSquare } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Save,
      title: "Saves your dev sessions",
      description: "Open files, terminal commands, git branch, task description — stored automatically."
    },
    {
      icon: Brain,
      title: "Smart context recall",
      description: "When you return, DevMemory reminds you what you were doing and reopens everything."
    },
    {
      icon: MessageSquare,
      title: "LLM Memory Integration",
      description: "Ask the LLM: \"Why did I add this?\" — and get an answer from your own past work.",
      badge: "Coming Soon"
    }
  ];

  return (
    <section className="py-20 px-6 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400">
            Three simple steps to never lose context again
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300 hover:scale-105"
            >
              {step.badge && (
                <div className="absolute -top-3 right-4 bg-white text-black text-sm px-3 py-1 rounded-full font-medium">
                  {step.badge}
                </div>
              )}
              
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <step.icon className="h-8 w-8 text-black" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
