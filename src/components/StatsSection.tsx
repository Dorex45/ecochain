
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const stats = [
  {
    value: "10,000+",
    label: "TPS with ~1s finality",
    description: "Ideal for high-volume bond settlements",
    progress: 85
  },
  {
    value: "0.0002",
    label: "kWh per transaction",
    description: "Energy-efficient consensus mechanism",
    progress: 95
  },
  {
    value: "$500M",
    label: "Kenya Green Bond Target",
    description: "By 2026 with Hedera integration",
    progress: 40
  },
  {
    value: "3-5%",
    label: "Transaction Cost Savings",
    description: "Compared to traditional bond issuance",
    progress: 75
  }
];

const StatsSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Hedera Advantages for Green Bonds
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leveraging blockchain technology to optimize sustainability finance in Kenya.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Card key={i} className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm font-medium mb-2">{stat.label}</div>
                <Progress value={stat.progress} className="h-1.5 mb-2" />
                <p className="text-muted-foreground text-xs">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
