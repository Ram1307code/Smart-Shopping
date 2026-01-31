import { Sparkles, TrendingUp, Package, Users } from "lucide-react";
import { AdminLayout } from "./AdminDashboard";
import { Badge } from "@/components/ui/badge";

const bestSellingProducts = [
  { name: "Wireless Headphones", sales: 234, revenue: 70146, trend: "+15%" },
  { name: "Running Shoes Pro", sales: 189, revenue: 27405, trend: "+23%" },
  { name: "Natural Skincare Set", sales: 156, revenue: 14038, trend: "+8%" },
  { name: "Smart Home Speaker", sales: 142, revenue: 18458, trend: "+12%" },
  { name: "Minimalist Watch", sales: 128, revenue: 24192, trend: "+5%" },
];

const categorySales = [
  { name: "Electronics", percentage: 35, color: "bg-primary" },
  { name: "Accessories", percentage: 25, color: "bg-ai" },
  { name: "Clothing", percentage: 18, color: "bg-accent" },
  { name: "Home & Living", percentage: 12, color: "bg-success" },
  { name: "Beauty", percentage: 7, color: "bg-info" },
  { name: "Sports", percentage: 3, color: "bg-warning" },
];

const aiInsights = [
  {
    title: "Trending Products",
    description: "Wireless audio products are seeing a 45% increase in interest this week.",
    icon: TrendingUp,
  },
  {
    title: "Stock Prediction",
    description: "Running Shoes Pro likely to sell out in 5 days based on current demand.",
    icon: Package,
  },
  {
    title: "Customer Segments",
    description: "25-34 age group shows highest engagement with AI recommendations.",
    icon: Users,
  },
];

const AdminAnalytics = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Track your store performance and AI insights</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Best Selling Products */}
          <div className="rounded-xl border border-border bg-card">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-card-foreground">
                Best Selling Products
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {bestSellingProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center gap-4">
                    <span className="text-lg font-bold text-muted-foreground w-6">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-medium text-card-foreground">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {product.sales} units sold
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-card-foreground">
                        ${product.revenue.toLocaleString()}
                      </p>
                      <span className="text-sm text-success">{product.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Category Sales */}
          <div className="rounded-xl border border-border bg-card">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-card-foreground">
                Sales by Category
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {categorySales.map((category) => (
                  <div key={category.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-card-foreground">{category.name}</span>
                      <span className="text-muted-foreground">{category.percentage}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full ${category.color} transition-all duration-500`}
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="rounded-xl border border-ai/30 bg-ai-soft overflow-hidden">
          <div className="p-6 border-b border-ai/20 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-ai">
              <Sparkles className="h-5 w-5 text-ai-foreground" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                AI Recommendation Insights
              </h2>
              <p className="text-sm text-muted-foreground">
                Powered by machine learning analysis
              </p>
            </div>
            <Badge variant="ai" className="ml-auto">
              <Sparkles className="h-3 w-3" />
              AI Powered
            </Badge>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              {aiInsights.map((insight) => {
                const Icon = insight.icon;
                return (
                  <div
                    key={insight.title}
                    className="rounded-lg bg-background border border-border p-4"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ai/10">
                        <Icon className="h-4 w-4 text-ai" />
                      </div>
                      <h3 className="font-medium text-card-foreground">{insight.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Performance Metrics */}
            <div className="mt-6 pt-6 border-t border-ai/20">
              <h3 className="font-medium text-foreground mb-4">AI Performance Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-ai">89%</p>
                  <p className="text-sm text-muted-foreground">Recommendation Accuracy</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-ai">+34%</p>
                  <p className="text-sm text-muted-foreground">Conversion Lift</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-ai">2.4x</p>
                  <p className="text-sm text-muted-foreground">Engagement Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-ai">$12.5K</p>
                  <p className="text-sm text-muted-foreground">AI-Driven Revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;
