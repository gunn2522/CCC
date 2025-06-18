
import { Users, Target, Zap, CheckCircle } from "lucide-react";

const StatsRow = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-4 animate-fade-in">
      <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary/20">
        <Users className="h-4 w-4 text-primary" />
        <span className="text-sm font-bold text-primary">100%</span>
        <span className="text-xs text-secondary">Non-Profit</span>
      </div>
      
      <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary/20">
        <Target className="h-4 w-4 text-primary" />
        <span className="text-sm font-bold text-primary">∞</span>
        <span className="text-xs text-secondary">Opportunities</span>
      </div>
      
      <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary/20">
        <Zap className="h-4 w-4 text-primary" />
        <span className="text-sm font-bold text-primary">0₹</span>
        <span className="text-xs text-secondary">Cost</span>
      </div>
      
      <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary/20">
        <CheckCircle className="h-4 w-4 text-primary" />
        <span className="text-sm font-bold text-primary">50K</span>
        <span className="text-xs text-secondary">Goal 2025</span>
      </div>
    </div>
  );
};

export default StatsRow;
