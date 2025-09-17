import { TrendingUp, Target, Award } from "lucide-react";

const MotivationBanner = () => {
  const motivationalStats = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      text: "95% of our students see improvement within 2 weeks",
      color: "text-success"
    },
    {
      icon: <Target className="h-6 w-6" />,
      text: "Practice 30 minutes daily to boost scores by 60%",
      color: "text-electric"
    },
    {
      icon: <Award className="h-6 w-6" />,
      text: "Top performers practice 5x more than average students",
      color: "text-gold"
    }
  ];

  return (
    <section className="py-16 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-poppins">
            Transform Your Future with 
            <span className="block text-gold animate-pulse">Smart Practice!</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their dreams through consistent practice and analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {motivationalStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className={`${stat.color} mb-4 flex justify-center`}>
                {stat.icon}
              </div>
              <p className="text-white text-center font-medium leading-relaxed">
                {stat.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-6 py-3 rounded-full font-semibold text-lg border border-gold/30">
            🏆 Start your success story today - Your future self will thank you!
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivationBanner;