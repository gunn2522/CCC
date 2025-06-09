
import Hero from "@/components/Hero";
import CampaignCards from "@/components/CampaignCards";
import CommunityLinks from "@/components/CommunityLinks";
import CollaborationSection from "@/components/CollaborationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CampaignCards />
      <CommunityLinks />
      <CollaborationSection />
      <Footer />
    </div>
  );
};

export default Index;
