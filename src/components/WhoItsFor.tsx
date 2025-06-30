
import { Code, Cursor, Users } from "lucide-react";

export const WhoItsFor = () => {
  const audiences = [
    {
      icon: Code,
      title: "Developers tired of re-learning their own code"
    },
    {
      icon: Cursor,
      title: "Cursor/VS Code users who want real memory"
    },
    {
      icon: Users,
      title: "Teams that need smarter handoffs"
    }
  ];

  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Who It's For
        </h2>
        
        <div className="space-y-6">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="flex items-center justify-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
            >
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <audience.icon className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-lg font-medium text-gray-800">
                {audience.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
