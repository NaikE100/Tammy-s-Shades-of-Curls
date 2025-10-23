import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }
    
    setIsSubmitting(true);

    // Simulate newsletter subscription
    setTimeout(() => {
      toast.success("Thank you for subscribing!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-white">Stay Updated</h2>
        <p className="text-white mb-8 max-w-2xl mx-auto opacity-95 text-lg">
          Subscribe to our newsletter for the latest products and styling tips!
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white border-0 rounded-full px-6 py-6 focus:ring-2 focus:ring-white/30 focus:-translate-y-0.5 transition-all"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-primary-orange hover:bg-gray-50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all uppercase tracking-wide px-6 rounded-full"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
}
