
import StatsRow from "./StatsRow";
import FeatureGrid from "./FeatureGrid";

const HeroContent = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center brand-oxford text-white overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-secondary rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-4 animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-brand-cosmic to-primary bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                  Learning to Earning
                </span>
              </h1>
            </div>
            
            <div className="mb-4 animate-fade-in">
              <h2 className="text-base md:text-lg lg:text-xl font-bold text-primary mb-2">
                🚀 India's First FREE Career Transformation Platform
              </h2>
              <p className="text-sm md:text-base text-secondary font-medium">
                ⚡ First of Its Kind: A Free Community Built to Uplift Everyone
              </p>
            </div>

            <StatsRow />
          </div>
          
          <FeatureGrid />
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
