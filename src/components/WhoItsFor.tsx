
import { Code, MousePointer, Users } from "lucide-react";

export const WhoItsFor = () => {
  const audiences = [
    {
      icon: Code,
      title: "Developers tired of re-learning their own code"
    },
    {
      icon: MousePointer,
      title: "Cursor/VS Code users who want real memory"
    },
    {
      icon: Users,
      title: "Teams that need smarter handoffs"
    }
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Who It's For
        </h2>
        
        <div className="space-y-6">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="flex items-center justify-center bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-gray-700 transition-all duration-200 hover:scale-105"
            >
              <div className="bg-white p-3 rounded-lg mr-4">
                <audience.icon className="h-6 w-6 text-black" />
              </div>
              <p className="text-lg font-medium text-white">
                {audience.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
