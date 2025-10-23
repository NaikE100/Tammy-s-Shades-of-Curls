import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { ProductCatalog } from "./components/ProductCatalog";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Newsletter } from "./components/Newsletter";
import { Checkout } from "./components/Checkout";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import { useCart } from "./hooks/useCart";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { clearCart } = useCart();

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  // Handle PayFast redirects
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    
    if (params.get('cancel') === '1') {
      toast.error('Checkout cancelled. You can update your cart and try again.', {
        duration: 4000,
      });
      // Scroll to checkout section
      setTimeout(() => {
        const checkoutSection = document.getElementById('checkout');
        checkoutSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      // Clean URL
      window.history.replaceState(null, '', window.location.pathname + '#checkout');
    }
    
    if (params.get('paid') === '1') {
      toast.success('Thank you! Your payment has been received.', {
        duration: 5000,
      });
      // Clear the cart after successful payment
      clearCart();
      // Clean URL
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [clearCart]);

  return (
    <div className="min-h-screen">
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: 'linear-gradient(135deg, #ff8c00, #ffd700)',
            color: '#fff',
            border: 'none',
            boxShadow: '0 10px 30px rgba(255, 140, 0, 0.3)',
          },
        }}
      />
      <Header />
      <main>
        <Hero />
        <Categories onCategoryClick={handleCategoryClick} />
        <div id="catalog">
          <ProductCatalog initialCategory={selectedCategory} />
        </div>
        <About />
        <Contact />
        <Newsletter />
        <Checkout />
      </main>
      <Footer />
    </div>
  );
}
