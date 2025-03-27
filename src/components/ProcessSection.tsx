
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ProcessSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Green Bond Lifecycle Optimization
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform streamlines the entire process from issuance to impact reporting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-none shadow-sm lg:shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">A</span>
                Listing & Issuance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-medium">01.</span>
                  <div>
                    <p className="font-medium">Tokenized Bonds</p>
                    <p className="text-muted-foreground text-sm">Fractionalize bonds with Hedera Token Service</p>
                  </div>
                </li>
                <Separator />
                <li className="flex gap-3">
                  <span className="text-primary font-medium">02.</span>
                  <div>
                    <p className="font-medium">Automated Compliance</p>
                    <p className="text-muted-foreground text-sm">Smart contracts enforce ICMA Green Bond Principles</p>
                  </div>
                </li>
                <Separator />
                <li className="flex gap-3">
                  <span className="text-primary font-medium">03.</span>
                  <div>
                    <p className="font-medium">Regulatory Sandbox</p>
                    <p className="text-muted-foreground text-sm">Partner with CMA for on-chain bond approvals</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm lg:shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">B</span>
                Investing & Liquidity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-medium">01.</span>
                  <div>
                    <p className="font-medium">DeFi Integration</p>
                    <p className="text-muted-foreground text-sm">Build a Hedera-based DEX for bond trading</p>
                  </div>
                </li>
                <Separator />
                <li className="flex gap-3">
                  <span className="text-primary font-medium">02.</span>
                  <div>
                    <p className="font-medium">Cross-chain Bridges</p>
                    <p className="text-muted-foreground text-sm">Connect to Ethereum/Solana for global liquidity</p>
                  </div>
                </li>
                <Separator />
                <li className="flex gap-3">
                  <span className="text-primary font-medium">03.</span>
                  <div>
                    <p className="font-medium">Mobile-First Trading</p>
                    <p className="text-muted-foreground text-sm">M-Pesa integration via Hedera's payment rails</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm lg:shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">C</span>
                Global Mobilization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-medium">01.</span>
                  <div>
                    <p className="font-medium">Multi-Currency Settlement</p>
                    <p className="text-muted-foreground text-sm">KES-pegged stablecoins for global investors</p>
                  </div>
                </li>
                <Separator />
                <li className="flex gap-3">
                  <span className="text-primary font-medium">02.</span>
                  <div>
                    <p className="font-medium">Global ESG Standards</p>
                    <p className="text-muted-foreground text-sm">On-chain Oracle integration for impact verification</p>
                  </div>
                </li>
                <Separator />
                <li className="flex gap-3">
                  <span className="text-primary font-medium">03.</span>
                  <div>
                    <p className="font-medium">Automated Reporting</p>
                    <p className="text-muted-foreground text-sm">Transparent ESG metrics for investors and regulators</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
