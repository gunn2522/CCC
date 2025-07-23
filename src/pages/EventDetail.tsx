import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

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

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/events/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!event) return <div>Event not found.</div>;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Hero hideHeroSection={true} />
      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="w-full aspect-video bg-gray-100 flex items-center justify-center overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
            <img
              src={event.event_banner}
              alt={event.event_title}
              className="w-full aspect-video object-cover rounded-lg mb-6"
              style={{ aspectRatio: '16 / 9' }}
            />
          </div>
          <h2 className="text-3xl font-bold text-brand-oxford mb-4">{event.event_title}</h2>
          <div className="mb-4 text-brand-jet">
            <strong>Date:</strong> {event.event_date} &nbsp; <strong>Time:</strong> {event.event_time}
          </div>
          <p className="mb-6 whitespace-pre-line ">{event.event_description}</p>
          <a
            href={event.register_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-brand-oxford text-white font-semibold rounded shadow hover:bg-primary transition"
          >
            Register Now
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail; 