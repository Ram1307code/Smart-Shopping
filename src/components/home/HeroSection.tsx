import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ShoppingBag, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-ai/30 bg-ai-soft px-4 py-2 text-sm font-medium text-ai animate-fade-in">
              <Sparkles className="h-4 w-4" />
              Powered by AI Recommendations
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in-up">
              Smart Shopping
              <br />
              <span className="text-primary">with AI</span> Insights
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Discover products tailored just for you. Our AI learns your preferences 
              to deliver personalized recommendations that match your style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Link to="/products">
                <Button variant="hero" size="xl">
                  Explore Products
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/products?filter=ai-recommended">
                <Button variant="hero-outline" size="xl">
                  <Sparkles className="h-5 w-5 mr-2" />
                  AI Picks
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">10K+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 animate-scale-in">
              {/* Main Product Card */}
              <div className="relative bg-card rounded-2xl shadow-xl p-6 max-w-sm mx-auto border border-border">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
                  alt="Featured Product"
                  className="w-full aspect-square object-cover rounded-xl mb-4"
                />
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-ai-soft px-2 py-1 text-xs font-medium text-ai">
                    <Sparkles className="h-3 w-3" />
                    AI Recommended
                  </span>
                </div>
                <h3 className="font-semibold text-card-foreground">Premium Headphones</h3>
                <p className="text-lg font-bold text-primary mt-1">$299.99</p>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg p-3 border border-border animate-fade-in" style={{ animationDelay: "400ms" }}>
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-card-foreground">Fast Delivery</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-3 border border-border animate-fade-in" style={{ animationDelay: "500ms" }}>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-card-foreground">Smart Picks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
