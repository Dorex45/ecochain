
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Tokenized Green Bonds",
    description: "Fractionalize bonds into $100 parcels, expanding retail access through Hedera Token Service (HTS).",
    icon: "🔄"
  },
  {
    title: "ESG Compliance",
    description: "Smart contracts enforce ICMA Green Bond Principles with immutable ESG audit trails via Hedera Consensus Service.",
    icon: "✅"
  },
  {
    title: "DeFi Integration",
    description: "Hedera-based DEX for bond trading with cross-chain bridges to Ethereum/Solana for global liquidity.",
    icon: "🔗"
  },
  {
    title: "Mobile-First Trading",
    description: "Integrate M-Pesa via Hedera's payment rails for instant settlement and micro-investments from $5.",
    icon: "📱"
  },
  {
    title: "Multi-Currency Settlement",
    description: "KES-pegged stablecoins and cross-border atomic swaps via Hedera's Smart Contract Service.",
    icon: "💱"
  },
  {
    title: "Energy Efficient",
    description: "0.0002 kWh per transaction vs. Bitcoin's 707 kWh, aligning with green bond principles.",
    icon: "🌱"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Revolutionizing Bond Lifecycle
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform addresses key challenges in green bond issuance, investing, and global mobilization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-3">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
