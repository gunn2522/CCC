
import Hero from "@/components/Hero";
import CampaignCards from "@/components/CampaignCards";
import CommunityLinks from "@/components/CommunityLinks";
import CollaborationSection from "@/components/CollaborationSection";
import Testimonials from "@/components/Testimonials";
import QueriesSection from "@/components/QueriesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CampaignCards />
      <CommunityLinks />
      <CollaborationSection />
      <Testimonials />
      <QueriesSection />
      <Footer />
    </div>
  );
};

export default Index;
