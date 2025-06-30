
import { Code, MousePointer, Users, Target } from "lucide-react";

export const WhoItsFor = () => {
  const audiences = [
    {
      icon: Code,
      title: "Developers tired of re-learning their own code",
      emoji: "🧑‍💻"
    },
    {
      icon: MousePointer,
      title: "Cursor/VS Code users who want real memory",
      emoji: "⚡"
    },
    {
      icon: Users,
      title: "Teams that need smarter handoffs",
      emoji: "🤝"
    }
  ];

  return (
    <section className="py-20 px-6 bg-black relative">
      {/* Creative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white opacity-[0.01] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white opacity-[0.01] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
          <Target className="h-8 w-8 text-black" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Who It's For
        </h2>
        
        <div className="space-y-6">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="group flex items-center justify-center bg-black border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-all duration-200 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                {audience.emoji}
              </div>
              <div className="bg-white p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                <audience.icon className="h-6 w-6 text-black" />
              </div>
              <p className="text-lg font-medium text-white flex-1 text-left">
                {audience.title}
              </p>
            </div>
          ))}
        </div>
        
        {/* Creative testimonial-style quote */}
        <div className="mt-16 p-8 border border-gray-800 rounded-2xl bg-black relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
          <p className="text-2xl font-light text-white italic leading-relaxed">
            "Finally, an AI that doesn't make me explain my own code to myself every Monday morning."
          </p>
          <p className="text-gray-400 mt-4">— Every developer ever</p>
        </div>
      </div>
    </section>
  );
};
