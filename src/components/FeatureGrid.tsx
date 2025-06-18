
import { CheckCircle } from "lucide-react";

const FeatureGrid = () => {
  const features = [
    "LinkedIn Profile Optimization",
    "AI-Powered Growth Strategies", 
    "Job Preparation & Placement",
    "Career Guidance Support"
  ];

  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-2 gap-3">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex flex-col items-center justify-center space-y-2 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 min-h-[100px]"
          >
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="text-xs font-medium text-center leading-tight">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
