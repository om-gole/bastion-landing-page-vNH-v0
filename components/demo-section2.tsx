"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Database, Bot, Workflow, HeadphonesIcon } from "lucide-react";

const features = [
  {
    id: "ai-llms",
    icon: Bot,
    label: "AI & LLMs",
    title: "Build agents, workflows, and apps with the power of AI",
    description:
      "BastionAI lets teams instantly search across all portfolio company data using natural language. Ask questions about performance, board updates, operational trends, or historical metrics and get answers grounded in both financial and qualitative data. Every response includes traceable sources and an audit trail so teams can quickly verify where the information came from.",
    cta: "Get any model",
    color: "text-emerald-400",
  },
  {
    id: "data-teams",
    icon: Database,
    label: "Data teams",
    title: "Transform raw data into actionable insights",
    description:
      "Go beyond business intelligence. Build apps that read and write from your data sources using SQL. Create interactive dashboards, admin panels, data quality monitoring systems, and experiment tracking.",
    cta: "Use your data",
    color: "text-blue-400",
  },
  {
    id: "operations",
    icon: Workflow,
    label: "Operations teams",
    title: "Streamline processes and reduce manual work",
    description:
      "Build software solutions that were previously out of reach. From HR calibration tools to inventory management systems and custom workflows, create purpose-built software for any need.",
    cta: "Bring your APIs",
    color: "text-amber-400",
  },
  {
    id: "support",
    icon: HeadphonesIcon,
    label: "Support teams",
    title: "Drive customer success with effective tools",
    description:
      "Build internal software to triage tickets, track common issues, and manage knowledge bases—all without engineering bottlenecks. Every action is automatically audited and secure.",
    cta: "Connect your apps",
    color: "text-rose-400",
  },
];

const demoScreens = {
  "ai-llms": (
    <div className="w-full h-full bg-card rounded-xl border border-border p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-muted-foreground text-sm">AI Agent Builder</span>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-4">
        <div className="col-span-1 space-y-3">
          <div className="bg-secondary rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-2">Models</div>
            <div className="space-y-2">
              {["GPT-4", "Claude 3", "Gemini"].map((model) => (
                <div key={model} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-foreground">{model}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-secondary rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-2">Tools</div>
            <div className="space-y-2">
              {["Web Search", "Calculator", "Code Exec"].map((tool) => (
                <div key={tool} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-foreground">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-secondary rounded-lg p-4 flex flex-col">
          <div className="text-xs text-muted-foreground mb-3">Agent Workflow</div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1 h-1 bg-emerald-500/30 rounded" />
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Database className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1 h-1 bg-blue-500/30 rounded" />
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Workflow className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div className="mt-4 p-3 bg-background/50 rounded border border-border">
              <div className="text-xs text-emerald-400 font-mono">{">"} Processing request...</div>
              <div className="text-xs text-muted-foreground font-mono mt-1">Analyzing sentiment with GPT-4</div>
              <div className="text-xs text-muted-foreground font-mono">Fetching customer data...</div>
              <div className="text-xs text-emerald-400 font-mono mt-1">✓ Response generated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  "data-teams": (
    <div className="w-full h-full bg-card rounded-xl border border-border p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-muted-foreground text-sm">Data Dashboard</span>
      </div>
      <div className="flex-1 grid grid-cols-4 gap-4">
        <div className="col-span-2 bg-secondary rounded-lg p-4">
          <div className="text-xs text-muted-foreground mb-3">Revenue Trends</div>
          <div className="flex items-end gap-1 h-24">
            {[40, 65, 45, 80, 55, 90, 70, 95, 85, 100, 88, 92].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-blue-500/60 rounded-t transition-all hover:bg-blue-400"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>Jan</span>
            <span>Dec</span>
          </div>
        </div>
        <div className="col-span-2 space-y-3">
          <div className="bg-secondary rounded-lg p-3">
            <div className="text-xs text-muted-foreground">Total Users</div>
            <div className="text-2xl font-bold text-foreground">24,589</div>
            <div className="text-xs text-emerald-400">+12.5% vs last month</div>
          </div>
          <div className="bg-secondary rounded-lg p-3">
            <div className="text-xs text-muted-foreground">Active Sessions</div>
            <div className="text-2xl font-bold text-foreground">1,847</div>
            <div className="text-xs text-emerald-400">+8.2% vs last month</div>
          </div>
        </div>
        <div className="col-span-4 bg-secondary rounded-lg p-4">
          <div className="text-xs text-muted-foreground mb-3">SQL Query</div>
          <div className="font-mono text-sm text-foreground bg-background/50 p-3 rounded border border-border">
            <span className="text-blue-400">SELECT</span> customer_id, <span className="text-emerald-400">SUM</span>(revenue)
            <br />
            <span className="text-blue-400">FROM</span> transactions
            <br />
            <span className="text-blue-400">GROUP BY</span> customer_id <span className="text-blue-400">ORDER BY</span> 2 <span className="text-blue-400">DESC</span>
          </div>
        </div>
      </div>
    </div>
  ),
  operations: (
    <div className="w-full h-full bg-card rounded-xl border border-border p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-muted-foreground text-sm">Inventory Manager</span>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex gap-3">
          <div className="flex-1 bg-secondary rounded-lg p-3">
            <div className="text-xs text-muted-foreground">Total SKUs</div>
            <div className="text-xl font-bold text-foreground">2,847</div>
          </div>
          <div className="flex-1 bg-secondary rounded-lg p-3">
            <div className="text-xs text-muted-foreground">Low Stock</div>
            <div className="text-xl font-bold text-amber-400">48</div>
          </div>
          <div className="flex-1 bg-secondary rounded-lg p-3">
            <div className="text-xs text-muted-foreground">Pending Orders</div>
            <div className="text-xl font-bold text-foreground">156</div>
          </div>
        </div>
        <div className="flex-1 bg-secondary rounded-lg p-4">
          <div className="text-xs text-muted-foreground mb-3">Recent Activity</div>
          <div className="space-y-3">
            {[
              { action: "Order #4521 shipped", status: "success", time: "2m ago" },
              { action: "Low stock alert: Widget-X", status: "warning", time: "15m ago" },
              { action: "Inventory sync completed", status: "success", time: "1h ago" },
              { action: "New PO created: #8842", status: "info", time: "2h ago" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full",
                      item.status === "success" && "bg-emerald-400",
                      item.status === "warning" && "bg-amber-400",
                      item.status === "info" && "bg-blue-400"
                    )}
                  />
                  <span className="text-foreground">{item.action}</span>
                </div>
                <span className="text-muted-foreground text-xs">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  support: (
    <div className="w-full h-full bg-card rounded-xl border border-border p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-muted-foreground text-sm">Support Dashboard</span>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-4">
        <div className="col-span-1 space-y-3">
          <div className="bg-secondary rounded-lg p-3">
            <div className="text-xs text-muted-foreground">Open Tickets</div>
            <div className="text-2xl font-bold text-foreground">127</div>
          </div>
          <div className="bg-secondary rounded-lg p-3">
            <div className="text-xs text-muted-foreground">Avg Response</div>
            <div className="text-2xl font-bold text-emerald-400">4.2m</div>
          </div>
          <div className="bg-secondary rounded-lg p-3">
            <div className="text-xs text-muted-foreground">CSAT Score</div>
            <div className="text-2xl font-bold text-foreground">94%</div>
          </div>
        </div>
        <div className="col-span-2 bg-secondary rounded-lg p-4 flex flex-col">
          <div className="text-xs text-muted-foreground mb-3">Active Tickets</div>
          <div className="flex-1 space-y-2 overflow-hidden">
            {[
              { id: "#4521", subject: "Login issues", priority: "high", customer: "Acme Inc" },
              { id: "#4520", subject: "Billing question", priority: "medium", customer: "TechCorp" },
              { id: "#4519", subject: "Feature request", priority: "low", customer: "StartupXYZ" },
              { id: "#4518", subject: "API integration", priority: "high", customer: "BigCo" },
            ].map((ticket) => (
              <div key={ticket.id} className="flex items-center justify-between p-2 bg-background/50 rounded border border-border text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground font-mono">{ticket.id}</span>
                  <span className="text-foreground">{ticket.subject}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-xs px-2 py-0.5 rounded",
                      ticket.priority === "high" && "bg-rose-500/20 text-rose-400",
                      ticket.priority === "medium" && "bg-amber-500/20 text-amber-400",
                      ticket.priority === "low" && "bg-blue-500/20 text-blue-400"
                    )}
                  >
                    {ticket.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

export function ScrollFeatureSection() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const viewportHeight = window.innerHeight;

      // Calculate which feature should be active based on scroll position
      const scrollProgress = Math.max(
        0,
        Math.min(1, (viewportHeight * 0.4 - sectionTop) / (sectionHeight - viewportHeight * 0.6))
      );

      const featureIndex = Math.min(
        features.length - 1,
        Math.floor(scrollProgress * features.length)
      );

      setActiveFeature(features[featureIndex].id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left side - Feature list */}
          <div className="space-y-8 lg:space-y-12">
            {features.map((feature, index) => {
              const isActive = activeFeature === feature.id;
              const Icon = feature.icon;

              return (
                <div
                  key={feature.id}
                  ref={(el) => {
                    featureRefs.current[index] = el;
                  }}
                  className={cn(
                    "relative pl-6 border-l-2 transition-all duration-500 cursor-pointer",
                    isActive ? "border-primary opacity-100" : "border-border opacity-50 hover:opacity-75"
                  )}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <div className={cn("flex items-center gap-2 mb-2", feature.color)}>
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{feature.label}</span>
                  </div>
                  <h3
                    className={cn(
                      "text-xl lg:text-2xl font-semibold mb-3 transition-colors",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={cn(
                      "text-sm lg:text-base transition-colors leading-relaxed",
                      isActive ? "text-muted-foreground" : "text-muted-foreground/60"
                    )}
                  >
                    {feature.description}
                  </p>
                  <button
                    className={cn(
                      "mt-4 text-sm font-medium transition-colors inline-flex items-center gap-1",
                      isActive ? feature.color : "text-muted-foreground"
                    )}
                  >
                    {feature.cta}
                    <span className="ml-1">→</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right side - Demo screen (sticky) */}
          <div className="hidden lg:block sticky top-24 h-[500px]">
            <div className="relative w-full h-full">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-500",
                    activeFeature === feature.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  )}
                >
                  {demoScreens[feature.id as keyof typeof demoScreens]}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile - Show active demo */}
          <div className="lg:hidden mt-8">
            <div className="w-full h-[400px]">
              {demoScreens[activeFeature as keyof typeof demoScreens]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
