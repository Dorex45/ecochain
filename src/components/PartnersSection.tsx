
import { AspectRatio } from "@/components/ui/aspect-ratio";

const partners = [
  { name: "Nairobi Stock Exchange", logo: "https://placehold.co/200x80/e4e4e7/71717a?text=NSE&font=playfair" },
  { name: "Kenya Power", logo: "https://placehold.co/200x80/e4e4e7/71717a?text=Kenya+Power&font=playfair" },
  { name: "Virtual Assets Chamber", logo: "https://placehold.co/200x80/e4e4e7/71717a?text=VAC&font=playfair" },
  { name: "Hedera", logo: "https://placehold.co/200x80/e4e4e7/71717a?text=Hedera&font=playfair" },
  { name: "CMA Kenya", logo: "https://placehold.co/200x80/e4e4e7/71717a?text=CMA&font=playfair" },
];

const PartnersSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Strategic Partners
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Collaborating with key stakeholders to transform sustainable finance in Kenya.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-full max-w-[200px]">
                <AspectRatio ratio={5/2} className="bg-muted rounded-md overflow-hidden">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="object-contain w-full h-full p-4"
                  />
                </AspectRatio>
              </div>
              <p className="mt-3 text-sm font-medium text-center">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
