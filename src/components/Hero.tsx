
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container flex flex-col items-center text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,hsl(var(--primary)/0.1)_0%,rgba(255,255,255,0)_100%)]" />
        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1.5 text-sm font-medium mb-6">
          <span className="h-2 w-2 rounded-full bg-primary"></span>
          Kenya Green Bond Initiative
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Transforming Green Bonds <br />
          <span className="text-primary">with Hedera Technology</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10">
          Accelerating sustainable finance through blockchain innovation. 
          Unlocking the $500M green bond market with transparent, efficient, and accessible solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button size="lg" className="gap-2">
            Launch Platform
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Explore Use Cases
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
