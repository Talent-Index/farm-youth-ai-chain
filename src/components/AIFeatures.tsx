import { Card } from "@/components/ui/card";
import { Bot, Cloud, LineChart, MessageSquare, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Chatbot Assistant",
    description: "Get instant answers about farming, weather, prices, and best practices in Swahili or English",
    color: "text-primary",
  },
  {
    icon: Cloud,
    title: "Weather Predictions",
    description: "Hyperlocal weather forecasts powered by AI to plan your farming activities",
    color: "text-accent",
  },
  {
    icon: LineChart,
    title: "Market Analytics",
    description: "Track price trends, demand patterns, and optimal selling times for your crops",
    color: "text-primary",
  },
  {
    icon: MessageSquare,
    title: "Community Forum",
    description: "Share knowledge, ask questions, and connect with farmers and experts nationwide",
    color: "text-accent",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Access all features on any device, even with limited internet connectivity",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Real-Time Alerts",
    description: "Get notified about market opportunities, weather changes, and important updates",
    color: "text-accent",
  },
];

const AIFeatures = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-accent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Bot className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by Artificial Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Smart Features for Modern Agriculture
          </h2>
          <p className="text-xl text-muted-foreground">
            Leverage cutting-edge AI technology to make informed decisions and maximize your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border hover:border-primary/30 bg-card/50 backdrop-blur-sm group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
