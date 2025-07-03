
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About";
import FullArchImplants from "./pages/FullArchImplants";
import CompositeBonding from "./pages/CompositeBonding";
import InvisalignBraces from "./pages/InvisalignBraces";
import TeethWhitening from "./pages/TeethWhitening";
import Veneers from "./pages/Veneers";
import DentalImplants from "./pages/DentalImplants";
import Dentures from "./pages/Dentures";
import WhiteFillings from "./pages/WhiteFillings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/full-arch-implants" element={<FullArchImplants />} />
          <Route path="/composite-bonding" element={<CompositeBonding />} />
          <Route path="/invisalign-braces" element={<InvisalignBraces />} />
          <Route path="/teeth-whitening" element={<TeethWhitening />} />
          <Route path="/veneers" element={<Veneers />} />
          <Route path="/dental-implants" element={<DentalImplants />} />
          <Route path="/dentures" element={<Dentures />} />
          <Route path="/white-fillings" element={<WhiteFillings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
