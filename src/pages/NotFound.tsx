
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/context/ThemeContext";
import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <ParticleBackground />
        <Header />
        <main className="flex items-center justify-center min-h-screen">
          <div className="container max-w-md text-center px-4 py-16">
            <div className="glass-card p-8 animate-fade-in">
              <div className="badge badge-primary inline-block mb-4">404 Error</div>
              <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
              <p className="text-muted-foreground mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <Button
                onClick={() => window.location.href = '/'}
                className="rounded-full px-6 py-2 button-glow"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default NotFound;
