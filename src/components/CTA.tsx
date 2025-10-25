import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import patternBg from "@/assets/pattern-bg.png";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={patternBg} 
          alt="Agricultural pattern background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Agricultural Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of farmers and students already benefiting from our AI-powered platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              <Mail className="w-5 h-5" />
              Contact Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-border/50">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">Free</div>
              <div className="text-sm text-muted-foreground">To Get Started</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">Secure</div>
              <div className="text-sm text-muted-foreground">Data Protection</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">Mobile</div>
              <div className="text-sm text-muted-foreground">Friendly Platform</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
