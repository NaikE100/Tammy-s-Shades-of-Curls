import { Leaf, Truck, Headphones } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "Premium natural oils and treatments",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick delivery across Western Cape",
  },
  {
    icon: Headphones,
    title: "Expert Advice",
    description: "Professional hair care guidance",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-6 text-text-dark">About Tammy's Shades of Curls</h2>
          <div className="space-y-4 mb-12 text-center">
            <p className="text-muted-foreground text-lg">
              We're passionate about helping you achieve your perfect hair style with premium natural products. 
              Our carefully curated selection of professional hair oils, treatments, and styling tools ensures 
              you get salon-quality results at home.
            </p>
            <p className="text-muted-foreground text-lg">
              From nourishing hair oils to professional styling tools, we offer everything you need to create 
              stunning looks for any occasion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-10 text-center shadow-orange-sm hover:shadow-orange transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-4 inline-flex">
                    <Icon className="h-10 w-10 text-primary-orange group-hover:scale-125 transition-transform" />
                  </div>
                  <h3 className="mb-2 text-text-dark">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
