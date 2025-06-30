
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
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to never lose context again
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-8 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {step.badge && (
                <div className="absolute -top-3 right-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                  {step.badge}
                </div>
              )}
              
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
