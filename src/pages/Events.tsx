import React, { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom';

type Event = {
  id: number;
  event_title: string;
  event_description: string;
  event_date: string;
  event_time: string;
  event_banner: string;
  register_link: string;
  created_at: string;
};

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/events/")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Hero hideHeroSection={true} />
      <main className="flex-1 py-20 md:py-28">
        <div className="w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-oxford mb-8">Events</h2>
          <p className="text-xl md:text-2xl text-brand-jet mb-8">
            Stay tuned for our upcoming workshops, webinars, and community events!
          </p>
          <div>
            {loading ? (
              <p>Loading events...</p>
            ) : events.length === 0 ? (
              <>
                <h3 className="text-2xl font-semibold text-primary mb-4">No events announced yet</h3>
                <p className="text-brand-jet">
                  We are working on exciting events for our community. Check back soon or follow us on LinkedIn and WhatsApp for updates!
                </p>
              </>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-4 md:px-12 lg:px-24">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex flex-col bg-white rounded-2xl shadow-lg border border-primary/20 overflow-hidden transition-transform hover:scale-[1.02] min-h-[420px]"
                  >
                    <div
                      className="w-full aspect-video bg-gray-100 flex items-center justify-center overflow-hidden"
                      style={{ aspectRatio: '16 / 9' }}
                    >
                      <img
                        src={event.event_banner}
                        alt={event.event_title}
                        className="w-full object-cover rounded-lg mb-0"
                        style={{ aspectRatio: '16 / 9' }}
                      />
                    </div>
                    <div className="flex-1 flex flex-col p-6 text-left">
                      <h4 className="text-xl font-extrabold text-brand-oxford mb-2">{event.event_title}</h4>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-3 py-1 rounded">
                          <strong>Date:</strong> {event.event_date}
                        </span>
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-3 py-1 rounded">
                          <strong>Time:</strong> {event.event_time}
                        </span>
                      </div>

                      <p
                        className="text-brand-jet text-sm text-gray-800 leading-relaxed mb-4 line-clamp-3 overflow-hidden"
                        dangerouslySetInnerHTML={{ __html: event.event_description }}
                      ></p>

                      <div className="mt-auto">
                        <Link
                          to={`/events/${event.id}`}
                          className="inline-block w-full text-center px-6 py-2 bg-brand-oxford text-white font-semibold rounded-lg shadow hover:bg-primary transition"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
