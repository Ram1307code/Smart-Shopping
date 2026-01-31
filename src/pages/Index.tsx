import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CategorySection } from "@/components/home/CategorySection";
import { AIRecommendationSection } from "@/components/products/AIRecommendationSection";
import { featuredProducts, aiRecommendedProducts, categories } from "@/data/products";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategorySection categories={categories} />
      <FeaturedProducts products={featuredProducts} />
      <AIRecommendationSection products={aiRecommendedProducts} />
    </Layout>
  );
};

export default Index;
