import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageTransition } from "@/components/PageTransition";
import { ScrollToTop } from "@/components/ScrollToTop";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import Startups from "@/pages/Startups";
import Events from "@/pages/Events";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Switch key={location}>
        <Route path="/">
          <PageTransition><Home /></PageTransition>
        </Route>
        <Route path="/about">
          <PageTransition><About /></PageTransition>
        </Route>
        <Route path="/programs">
          <PageTransition><Programs /></PageTransition>
        </Route>
        <Route path="/startups">
          <PageTransition><Startups /></PageTransition>
        </Route>
        <Route path="/events">
          <PageTransition><Events /></PageTransition>
        </Route>
        <Route path="/team">
          <PageTransition><Team /></PageTransition>
        </Route>
        <Route path="/contact">
          <PageTransition><Contact /></PageTransition>
        </Route>
        <Route>
          <PageTransition><NotFound /></PageTransition>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <AnimatedRoutes />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
