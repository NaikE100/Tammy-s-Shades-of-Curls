import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, ShoppingCart as CartIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Badge } from "./ui/badge";
import { products, categories, brands, Product } from "../data/products";
import { useCart } from "../hooks/useCart";
import { toast } from "sonner";
import { ProductImage } from "./ProductImage";

// Generate gradient based on category
const getCategoryGradient = (category: string) => {
  const gradients: Record<string, string> = {
    "Shampoo": "from-blue-400 to-blue-600",
    "Conditioner": "from-purple-400 to-purple-600",
    "Treatment": "from-pink-400 to-pink-600",
    "Oil": "from-amber-400 to-amber-600",
    "Mask": "from-rose-400 to-rose-600",
    "Styling": "from-teal-400 to-teal-600",
    "Gel": "from-cyan-400 to-cyan-600",
    "Hair Color": "from-violet-400 to-violet-600",
    "Tools": "from-slate-400 to-slate-600",
    "Accessories": "from-fuchsia-400 to-fuchsia-600",
    "Body Care": "from-green-400 to-green-600",
    "Men's Care": "from-indigo-400 to-indigo-600",
    "Combo": "from-orange-400 to-orange-600",
    "Fragrance": "from-red-400 to-red-600",
  };
  return gradients[category] || "from-primary to-accent";
};

// Get initials from product name
const getInitials = (name: string) => {
  const words = name.split(" ").filter(w => w.length > 0);
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return words.slice(0, 2).map(w => w[0]).join("").toUpperCase();
};

interface ProductCatalogProps {
  initialCategory?: string;
}

export function ProductCatalog({ initialCategory }: ProductCatalogProps) {
  const { addToCart, cart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  
  const itemsPerPage = 24;

  // Update category when initialCategory changes
  useMemo(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesBrand = selectedBrand === "All" || product.brand === selectedBrand;
      
      return matchesSearch && matchesCategory && matchesBrand;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "brand":
          return a.brand.localeCompare(b.brand);
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedBrand, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedBrand]);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="mb-2 text-text-dark">Featured Products</h2>
              <p className="text-muted-foreground">
                Browse our collection of {products.length} premium hair care products
              </p>
            </div>
            <Button 
              size="lg"
              className="relative gradient-primary text-white shadow-orange-sm hover:shadow-orange hover:-translate-y-1 transition-all"
              onClick={() => {
                const checkoutSection = document.getElementById("checkout");
                checkoutSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <CartIcon className="mr-2 h-5 w-5" />
              View Cart
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-white text-primary-orange border-0">
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products or brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>

            <div className={`grid md:grid-cols-4 gap-4 ${showFilters ? 'block' : 'hidden md:grid'}`}>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger>
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Brands</SelectItem>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="brand">Brand (A-Z)</SelectItem>
                  <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                  <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedBrand("All");
                    setSortBy("name");
                  }}
                  className="w-full"
                >
                  Reset Filters
                </Button>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategory !== "All" || selectedBrand !== "All" || searchQuery) && (
              <div className="flex flex-wrap gap-2">
                {searchQuery && (
                  <Badge variant="secondary">Search: {searchQuery}</Badge>
                )}
                {selectedCategory !== "All" && (
                  <Badge variant="secondary">Category: {selectedCategory}</Badge>
                )}
                {selectedBrand !== "All" && (
                  <Badge variant="secondary">Brand: {selectedBrand}</Badge>
                )}
                <span className="text-muted-foreground ml-auto">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    onClick={() => setCurrentPage(pageNum)}
                    className={currentPage === pageNum ? "bg-gradient-to-r from-primary to-accent" : ""}
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>
            <Button
              variant="outline"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart: (product: Product) => void }) {
  const gradient = getCategoryGradient(product.category);
  const initials = getInitials(product.name);

  const handleAddToCart = () => {
    onAddToCart(product);
    toast.success(`${product.name} added to cart`, {
      duration: 2000,
    });
  };

  return (
    <Card className="overflow-hidden group shadow-orange-sm hover:shadow-orange transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary-orange card-shimmer">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <ProductImage
          src={product.image}
          alt={product.name}
          category={product.category}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Badge className="absolute top-2 right-2 bg-white/90 text-primary-orange border-white shadow-sm z-10">
          {product.category}
        </Badge>
      </div>
      <div className="p-6 space-y-3">
        <div>
          <p className="text-muted-foreground mb-1">{product.brand}</p>
          <h3 className="line-clamp-2 min-h-[3rem] text-text-dark">{product.name}</h3>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl text-primary-orange">
            R{product.price.toFixed(2)}
          </span>
          <Button
            size="sm"
            className="gradient-primary text-white shadow-orange-sm hover:shadow-orange hover:-translate-y-1 transition-all uppercase tracking-wide"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}
