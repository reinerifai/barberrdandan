import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import About from "./pages/About";

import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import HairServices from "./pages/services/Hair";
import BeardServices from "./pages/services/Beard";
import FacialServices from "./pages/services/Facial";
import SpecialtyServices from "./pages/services/Specialty";
import ColoringServices from "./pages/services/Coloring";
import VIPService from "./pages/services/VIP";

function Router() {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/booking"} component={Booking} />
      <Route path={"/about"} component={About} />

      <Route path={"/contact"} component={Contact} />
      <Route path={"/feedback"} component={Feedback} />
      <Route path={"/services/hair"} component={HairServices} />
      <Route path={"/services/beard"} component={BeardServices} />
      <Route path={"/services/facial"} component={FacialServices} />
      <Route path={"/services/specialty"} component={SpecialtyServices} />
      <Route path={"/services/coloring"} component={ColoringServices} />
      <Route path={"/services/vip"} component={VIPService} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
