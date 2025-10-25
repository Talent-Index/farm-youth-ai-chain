import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Award, Globe } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "45%",
    label: "Increase in Farmer Income",
    description: "Average income boost after joining our platform",
  },
  {
    icon: Users,
    value: "20K+",
    label: "Active Community Members",
    description: "Farmers and students across Kenya",
  },
  {
    icon: Award,
    value: "95%",
    label: "Job Placement Rate",
    description: "Students finding agribusiness careers",
  },
  {
    icon: Globe,
    value: "35+",
    label: "Counties Covered",
    description: "Expanding across Kenya every month",
  },
];

const Impact = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
            Making Real Impact
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Numbers that tell the story of transformation in Kenya's agricultural sector
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-105 border-0 shadow-xl"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {metric.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
