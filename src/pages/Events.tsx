import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Events = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Hero hideHeroSection={true} />
    <main className="flex-1 py-20 md:py-28">
      <div className="w-full max-w-3xl mx-auto px-4 md:px-8 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-oxford mb-8">Events</h2>
        <p className="text-xl md:text-2xl text-brand-jet mb-8">Stay tuned for our upcoming workshops, webinars, and community events!</p>
        <div className="bg-white rounded-xl p-8 border border-primary/20 shadow-md">
          <h3 className="text-2xl font-semibold text-primary mb-4">No events announced yet</h3>
          <p className="text-brand-jet">We are working on exciting events for our community. Check back soon or follow us on LinkedIn and WhatsApp for updates!</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Events; 