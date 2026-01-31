import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  BarChart3,
  Users,
  ShoppingCart,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
];

const stats = [
  {
    label: "Total Sales",
    value: "$24,780",
    change: "+12.5%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    label: "Total Users",
    value: "1,429",
    change: "+8.2%",
    trend: "up",
    icon: Users,
  },
  {
    label: "Total Orders",
    value: "892",
    change: "+23.1%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    label: "Low Stock Items",
    value: "12",
    change: "-3",
    trend: "down",
    icon: AlertTriangle,
  },
];

const recentOrders = [
  { id: "ORD-001", customer: "John Doe", total: 299.99, status: "Processing" },
  { id: "ORD-002", customer: "Jane Smith", total: 189.00, status: "Shipped" },
  { id: "ORD-003", customer: "Bob Wilson", total: 459.99, status: "Delivered" },
  { id: "ORD-004", customer: "Alice Brown", total: 89.99, status: "Processing" },
];

const lowStockProducts = [
  { name: "Wireless Headphones", stock: 5, category: "Electronics" },
  { name: "Leather Watch", stock: 3, category: "Accessories" },
  { name: "Linen Blanket", stock: 8, category: "Home" },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">SmartShop</span>
            </Link>
            <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
              Admin
            </span>
          </div>
          <Link to="/">
            <Button variant="outline" size="sm">
              View Store
            </Button>
          </Link>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 border-r border-border bg-card p-4">
          <nav className="space-y-1">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your store overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span
                    className={cn(
                      "flex items-center text-sm font-medium",
                      stat.trend === "up" ? "text-success" : "text-destructive"
                    )}
                  >
                    {stat.change}
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="h-4 w-4 ml-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 ml-1" />
                    )}
                  </span>
                </div>
                <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <div className="rounded-xl border border-border bg-card">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-card-foreground">Recent Orders</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium text-card-foreground">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-card-foreground">
                        ${order.total.toFixed(2)}
                      </p>
                      <span
                        className={cn(
                          "text-xs font-medium px-2 py-1 rounded-full",
                          order.status === "Delivered"
                            ? "bg-success/10 text-success"
                            : order.status === "Shipped"
                            ? "bg-info/10 text-info"
                            : "bg-warning/10 text-warning"
                        )}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Low Stock Alert */}
          <div className="rounded-xl border border-border bg-card">
            <div className="p-6 border-b border-border flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <h2 className="text-lg font-semibold text-card-foreground">Low Stock Alerts</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {lowStockProducts.map((product) => (
                  <div
                    key={product.name}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium text-card-foreground">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <span className="text-sm font-medium text-destructive">
                      {product.stock} left
                    </span>
                  </div>
                ))}
              </div>
              <Link to="/admin/products">
                <Button variant="outline" className="w-full mt-4">
                  Manage Inventory
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* AI Insights Panel */}
        <div className="rounded-xl border border-ai/30 bg-ai-soft p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-ai shrink-0">
              <Sparkles className="h-6 w-6 text-ai-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                AI Recommendation Insights
              </h3>
              <p className="text-muted-foreground mb-4">
                Our AI has analyzed customer behavior and product performance.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-lg bg-background p-4 border border-border">
                  <p className="text-2xl font-bold text-ai">89%</p>
                  <p className="text-sm text-muted-foreground">AI recommendation accuracy</p>
                </div>
                <div className="rounded-lg bg-background p-4 border border-border">
                  <p className="text-2xl font-bold text-ai">+34%</p>
                  <p className="text-sm text-muted-foreground">Conversion from AI picks</p>
                </div>
                <div className="rounded-lg bg-background p-4 border border-border">
                  <p className="text-2xl font-bold text-ai">2.4x</p>
                  <p className="text-sm text-muted-foreground">Higher engagement rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
