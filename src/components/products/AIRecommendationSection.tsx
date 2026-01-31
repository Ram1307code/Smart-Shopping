import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";

interface AIRecommendationSectionProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export function AIRecommendationSection({
  products,
  title = "Recommended for You",
  subtitle = "Personalized picks powered by AI",
}: AIRecommendationSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-ai-soft/50">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-ai shrink-0">
              <Sparkles className="h-6 w-6 text-ai-foreground" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {title}
              </h2>
              <p className="text-muted-foreground">{subtitle}</p>
            </div>
          </div>
          <Link to="/products?filter=ai-recommended">
            <Button variant="ghost" className="text-ai hover:text-ai hover:bg-ai/10">
              View All AI Picks
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
