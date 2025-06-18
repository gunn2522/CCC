
import { useState, useEffect } from "react";

const RotatingBanner = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  
  const eyeCatchingHeadlines = [
    "🚨 First Time in History: A Free Growth Community for All 🚀",
    "📢 Never Done Before: Learn. Grow. Rise — At Almost Zero Cost!",
    "💥 A Historic First: Career Growth & Mentorship Without the Price Tag",
    "⚡ First of Its Kind: A Free Community Built to Uplift Everyone",
    "🚀 India's First Free Skill-Building Community is HERE!",
    "🌟 For the First Time Ever: Growth is Free, and It's Loveable",
    "🛑 Stop Paying to Grow — Join the First Free Impact-Driven Community"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % eyeCatchingHeadlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-primary via-secondary to-primary py-3 shadow-lg">
      <div className="w-full max-w-none px-8 lg:px-16">
        <div className="text-center">
          <p className="text-white font-bold text-lg md:text-xl animate-pulse">
            {eyeCatchingHeadlines[currentHeadline]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RotatingBanner;
