import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingDown, BookX, Network, Clock } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Unfair Market Prices",
    description: "Farmers often sell at low prices due to lack of market information and middlemen exploitation",
    solution: "Real-time price tracking and direct buyer connections",
  },
  {
    icon: Network,
    title: "Limited Market Access",
    description: "Difficulty connecting with buyers and accessing wider markets beyond local areas",
    solution: "Digital marketplace connecting farmers nationwide",
  },
  {
    icon: BookX,
    title: "Knowledge Gap",
    description: "Students lack practical agribusiness skills and real-world farming experience",
    solution: "Hands-on courses and mentorship programs",
  },
  {
    icon: Clock,
    title: "Delayed Information",
    description: "Critical farming information like weather and pest alerts arrive too late",
    solution: "AI-powered real-time alerts and predictions",
  },
];

const Problems = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Challenges We're Solving</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Understanding the Problems
          </h2>
          <p className="text-xl text-muted-foreground">
            Kenyan farmers and students face unique challenges. We're here to solve them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card 
                key={index}
                className="p-6 border-l-4 border-l-destructive/50 hover:border-l-primary transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground mb-3">{problem.description}</p>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-primary font-medium">Our Solution: {problem.solution}</p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problems;
