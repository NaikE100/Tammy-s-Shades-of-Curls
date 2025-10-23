import { Droplet, Leaf, Wind, Brush, Circle } from "lucide-react";
import { Card } from "./ui/card";

const categories = [
  {
    icon: Droplet,
    name: "Hair Oils",
    description: "Premium natural oils for hair growth",
    filter: "Oil",
  },
  {
    icon: Leaf,
    name: "Hair Treatments",
    description: "Professional repair treatments",
    filter: "Treatment",
  },
  {
    icon: Wind,
    name: "Hair Dryers",
    description: "Professional dryers for perfect styling",
    filter: "Tools",
  },
  {
    icon: Brush,
    name: "Brushes & Combs",
    description: "Gentle detangling and styling",
    filter: "Tools",
  },
  {
    icon: Circle,
    name: "Curlers & Rollers",
    description: "Create beautiful curls and waves",
    filter: "Tools",
  },
];

export function Categories({ onCategoryClick }: { onCategoryClick: (category: string) => void }) {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12 text-text-dark">Shop by Category</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center shadow-orange-sm hover:shadow-orange transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 border-transparent hover:border-primary-orange card-shimmer"
                onClick={() => {
                  onCategoryClick(category.filter);
                  const catalogSection = document.getElementById("catalog");
                  catalogSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center">
                  <Icon className="h-12 w-12 text-primary-orange group-hover:scale-125 transition-transform" />
                </div>
                <h3 className="mb-2 text-text-dark">{category.name}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
