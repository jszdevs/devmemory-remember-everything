
import { Save, Brain, MessageSquare, Zap } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Save,
      title: "Saves your dev sessions",
      description: "Open files, terminal commands, git branch, task description — stored automatically.",
      delay: "delay-0"
    },
    {
      icon: Brain,
      title: "Smart context recall",
      description: "When you return, DevMemory reminds you what you were doing and reopens everything.",
      delay: "delay-300"
    },
    {
      icon: MessageSquare,
      title: "LLM Memory Integration",
      description: "Ask the LLM: \"Why did I add this?\" — and get an answer from your own past work.",
      badge: "Coming Soon",
      delay: "delay-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-black border-t border-gray-800 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.01)_0%,transparent_70%)]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
            <Zap className="h-8 w-8 text-black" />
          </div>
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
              className={`relative p-8 bg-black border border-gray-800 rounded-2xl hover:border-gray-600 transition-all duration-300 hover:scale-105 group ${step.delay} animate-fade-in`}
            >
              {step.badge && (
                <div className="absolute -top-3 right-4 bg-white text-black text-sm px-3 py-1 rounded-full font-medium animate-pulse">
                  {step.badge}
                </div>
              )}
              
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="h-8 w-8 text-black" />
              </div>
              
              <div className="absolute top-4 left-4 text-6xl font-bold text-gray-900 select-none">
                {index + 1}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                {step.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
