// ============================================================================
// MAIN APP FILE
// ============================================================================
// This is the root component that sets up:
// - Routing (what pages exist)
// - Notification system (for alerts/toasts)
// - Data fetching setup (React Query)

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// Setup for fetching data from APIs (not currently used, but available)
const queryClient = new QueryClient();

// Main App component - wraps everything with necessary providers
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Notification systems - show alerts/messages to users */}
      <Toaster />
      <Sonner />
      
      {/* Router - handles page navigation */}
      <BrowserRouter>
        <Routes>
          {/* Main page - shows at root URL (/) */}
          <Route path="/" element={<Index />} />
          
          {/* 404 page - shown for any URL that doesn't exist */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
