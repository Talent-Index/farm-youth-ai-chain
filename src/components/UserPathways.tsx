import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, GraduationCap, TrendingUp, BookOpen, Users, BarChart3 } from "lucide-react";
import farmerIcon from "@/assets/farmer-icon.png";
import studentIcon from "@/assets/student-icon.png";

const UserPathways = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Who We Serve
          </h2>
          <p className="text-xl text-muted-foreground">
            Tailored solutions for farmers and students in Kenya's agribusiness ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Farmers Card */}
          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-card">
            <div className="flex justify-center mb-6">
              <img 
                src={farmerIcon} 
                alt="Farmer solutions icon" 
                className="w-32 h-32 object-contain animate-float"
              />
            </div>
            
            <div className="text-center mb-6">
              <Sprout className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">For Farmers</h3>
              <p className="text-muted-foreground">
                Access markets, get fair prices, and grow your business with AI-powered tools
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Real-Time Market Prices</p>
                  <p className="text-sm text-muted-foreground">Know the best prices before you sell</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">AI Crop Advisor</p>
                  <p className="text-sm text-muted-foreground">Get personalized farming recommendations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Direct Market Access</p>
                  <p className="text-sm text-muted-foreground">Connect with buyers and cooperatives</p>
                </div>
              </div>
            </div>

            <Button variant="default" size="lg" className="w-full">
              Join as Farmer
            </Button>
          </Card>

          {/* Students Card */}
          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50 bg-gradient-card">
            <div className="flex justify-center mb-6">
              <img 
                src={studentIcon} 
                alt="Student learning icon" 
                className="w-32 h-32 object-contain animate-float"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
            
            <div className="text-center mb-6">
              <GraduationCap className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">For Students</h3>
              <p className="text-muted-foreground">
                Learn agribusiness, gain practical skills, and launch your career in agriculture
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Practical Courses</p>
                  <p className="text-sm text-muted-foreground">From basics to advanced agribusiness</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Mentorship Program</p>
                  <p className="text-sm text-muted-foreground">Connect with industry experts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Career Opportunities</p>
                  <p className="text-sm text-muted-foreground">Internships and job placements</p>
                </div>
              </div>
            </div>

            <Button variant="accent" size="lg" className="w-full">
              Join as Student
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UserPathways;
