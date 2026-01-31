import { Link } from "react-router-dom";
import { Category } from "@/types/product";

interface CategorySectionProps {
  categories: Category[];
}

export function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Shop by Category
          </h2>
          <p className="text-muted-foreground">
            Browse our wide selection of products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group flex flex-col items-center p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-card-hover transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </span>
              <h3 className="font-medium text-card-foreground text-center group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {category.productCount} products
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
