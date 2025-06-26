import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Collaborators from "./pages/Collaborators";
import TestimonialsPage from "./pages/TestimonialsPage";
import QueriesPage from "./pages/QueriesPage";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import Moderators from "./pages/Moderators";
import CommunityManagers from "./pages/CommunityManagers";
import Internships from "./pages/Internships";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collaborators" element={<Collaborators />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/queries" element={<QueriesPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/moderators" element={<Moderators />} />
          <Route path="/community-managers" element={<CommunityManagers />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
