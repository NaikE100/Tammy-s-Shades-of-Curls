import { useEffect, useState } from "react";
import { CreditCard, Package, MapPin, Shield, CheckCircle2, Trash2, Plus, Minus, ShoppingBag, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { useCart } from "../hooks/useCart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";

export function Checkout() {
  const { cart, getCartTotal, removeFromCart, updateQuantity } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    amount: "5.00",
    quantity: "1",
    line1: "",
    line2: "",
    city: "",
    region: "",
    country: "",
    code: "",
  });

  // Update amount when cart changes
  useEffect(() => {
    const total = getCartTotal();
    if (total > 0) {
      setFormData(prev => ({
        ...prev,
        amount: total.toFixed(2),
        quantity: "1"
      }));
    }
  }, [getCartTotal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountryChange = (value: string) => {
    setFormData({
      ...formData,
      country: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate cart
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    
    // Validate shipping fields
    const shippingFields = ['line1', 'city', 'region', 'country', 'code'];
    for (const field of shippingFields) {
      const value = formData[field as keyof typeof formData];
      if (!value || /^\s*$/.test(value)) {
        toast.error('Please complete all shipping address fields');
        setCurrentStep(2);
        return;
      }
    }
    
    // Validate amount
    const finalAmount = parseFloat(formData.amount || "0");
    if (finalAmount < 5) {
      toast.error('Minimum order amount is R5.00');
      return;
    }
    
    // Show loading state
    setIsSubmitting(true);
    toast.loading('Redirecting to secure payment...', { duration: 2000 });
    
    // Submit the form to PayFast after a short delay
    setTimeout(() => {
      const form = e.target as HTMLFormElement;
      const amountInput = form.querySelector('input[name="amount"]') as HTMLInputElement;
      if (amountInput) {
        amountInput.value = finalAmount.toFixed(2);
      }
      form.submit();
    }, 500);
  };

  const steps = [
    { number: 1, title: "Review Cart", icon: Package },
    { number: 2, title: "Shipping Details", icon: MapPin },
    { number: 3, title: "Payment", icon: CreditCard },
  ];

  const subtotal = getCartTotal();
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  // Generate gradient for cart items based on product name
  const getItemGradient = (index: number) => {
    const gradients = [
      "from-blue-400 to-blue-600",
      "from-purple-400 to-purple-600",
      "from-pink-400 to-pink-600",
      "from-amber-400 to-amber-600",
      "from-rose-400 to-rose-600",
      "from-teal-400 to-teal-600",
      "from-cyan-400 to-cyan-600",
      "from-violet-400 to-violet-600",
    ];
    return gradients[index % gradients.length];
  };

  const getInitials = (name: string) => {
    const words = name.split(" ").filter(w => w.length > 0);
    if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
    return words.slice(0, 2).map(w => w[0]).join("").toUpperCase();
  };

  if (cart.length === 0) {
    return (
      <section id="checkout" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-12 text-center shadow-orange-sm">
              <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 mx-auto">
                <ShoppingBag className="h-12 w-12 text-primary-orange" />
              </div>
              <h2 className="mb-4 text-text-dark">Your Cart is Empty</h2>
              <p className="text-muted-foreground mb-8">
                Add some amazing hair products to get started!
              </p>
              <Button
                size="lg"
                className="gradient-primary text-white shadow-orange-sm hover:shadow-orange hover:-translate-y-1 transition-all"
                onClick={() => {
                  const catalog = document.getElementById("catalog");
                  if (catalog) {
                    const y = catalog.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                Browse Products
              </Button>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="checkout" className="py-20 bg-gradient-to-br from-secondary/5 via-white to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="mb-4 text-text-dark">Secure Checkout</h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5 text-primary-orange" />
            <p>Your payment is secure and encrypted</p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;
              
              return (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all ${
                        isCompleted
                          ? "gradient-primary border-transparent text-white"
                          : isActive
                          ? "border-primary-orange bg-white text-primary-orange"
                          : "border-gray-300 bg-white text-gray-400"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="h-6 w-6" />
                      ) : (
                        <Icon className="h-6 w-6" />
                      )}
                    </div>
                    <p className={`mt-2 text-sm ${isActive ? "text-primary-orange" : "text-muted-foreground"}`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-0.5 flex-1 mx-2 ${isCompleted ? "gradient-primary" : "bg-gray-300"}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          name="PayFastPayNowForm"
          action="https://payment.payfast.io/eng/process"
          method="post"
          autoComplete="on"
          className="max-w-6xl mx-auto"
        >
          {/* Hidden PayFast Fields */}
          <input type="hidden" name="cmd" value="_paynow" />
          <input type="hidden" name="receiver" value="31555655" />
          <input
            type="hidden"
            name="item_name"
            value="Tammy's Shades of Curls - Hair Products"
          />
          <input
            type="hidden"
            name="return_url"
            value={`${window.location.origin}${window.location.pathname}?paid=1#thank-you`}
          />
          <input
            type="hidden"
            name="cancel_url"
            value={`${window.location.origin}${window.location.pathname}?cancel=1#checkout`}
          />
          <input
            type="hidden"
            name="notify_url"
            value={`${window.location.origin}/payfast_notify.php`}
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Step 1: Cart Items */}
              {currentStep === 1 && (
                <Card className="p-6 shadow-orange-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-white">
                        <Package className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-text-dark">Your Items</h3>
                        <p className="text-sm text-muted-foreground">{cart.length} {cart.length === 1 ? 'item' : 'items'} in cart</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary-orange/30 hover:shadow-sm transition-all"
                      >
                        <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.className = `flex h-20 w-20 items-center justify-center rounded-lg bg-gradient-to-br ${getItemGradient(index)} flex-shrink-0`;
                                  parent.innerHTML = `<span class="text-white text-xl">${getInitials(item.name)}</span>`;
                                }
                              }}
                            />
                          ) : (
                            <div className={`w-full h-full bg-gradient-to-br ${getItemGradient(index)} flex items-center justify-center`}>
                              <span className="text-white text-xl">{getInitials(item.name)}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-text-dark mb-1 truncate">{item.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{item.brand}</p>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 border border-gray-200 rounded-lg">
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                className="h-8 w-8 p-0"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center text-sm">{item.quantity}</span>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <span className="text-sm text-muted-foreground">R{item.price.toFixed(2)} each</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:text-destructive h-8 w-8 p-0"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <p className="text-primary-orange">
                            R{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="w-full gradient-primary text-white shadow-orange-sm hover:shadow-orange hover:-translate-y-1 transition-all"
                      size="lg"
                    >
                      Continue to Shipping
                    </Button>
                  </div>
                </Card>
              )}

              {/* Step 2: Shipping Address */}
              {currentStep === 2 && (
                <Card className="p-6 shadow-orange-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-text-dark">Shipping Address</h3>
                      <p className="text-sm text-muted-foreground">Where should we deliver?</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 text-sm">Street Address *</label>
                      <Input
                        type="text"
                        name="line1"
                        placeholder="123 Main Street"
                        value={formData.line1}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-primary-orange focus:ring-primary-orange"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">Apartment, Suite, etc. (optional)</label>
                      <Input
                        type="text"
                        name="line2"
                        placeholder="Apt 4B"
                        value={formData.line2}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-primary-orange focus:ring-primary-orange"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 text-sm">City *</label>
                        <Input
                          type="text"
                          name="city"
                          placeholder="George"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="border-gray-300 focus:border-primary-orange focus:ring-primary-orange"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm">Province *</label>
                        <Input
                          type="text"
                          name="region"
                          placeholder="Western Cape"
                          value={formData.region}
                          onChange={handleChange}
                          required
                          className="border-gray-300 focus:border-primary-orange focus:ring-primary-orange"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 text-sm">Country *</label>
                        <Select
                          value={formData.country}
                          onValueChange={handleCountryChange}
                          required
                        >
                          <SelectTrigger className="border-gray-300 focus:border-primary-orange focus:ring-primary-orange">
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="South Africa">South Africa</SelectItem>
                            <SelectItem value="Botswana">Botswana</SelectItem>
                            <SelectItem value="Lesotho">Lesotho</SelectItem>
                            <SelectItem value="Mauritius">Mauritius</SelectItem>
                            <SelectItem value="Mozambique">Mozambique</SelectItem>
                            <SelectItem value="Swaziland">Swaziland</SelectItem>
                            <SelectItem value="Zimbabwe">Zimbabwe</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm">Postal Code *</label>
                        <Input
                          type="number"
                          name="code"
                          placeholder="6529"
                          value={formData.code}
                          onChange={handleChange}
                          required
                          className="border-gray-300 focus:border-primary-orange focus:ring-primary-orange"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep(1)}
                      className="flex-1"
                    >
                      Back to Cart
                    </Button>
                    <Button
                      type="button"
                      onClick={() => {
                        const shippingFields = ['line1', 'city', 'region', 'country', 'code'];
                        const isValid = shippingFields.every(field => {
                          const value = formData[field as keyof typeof formData];
                          return value && !/^\s*$/.test(value);
                        });
                        
                        if (isValid) {
                          setCurrentStep(3);
                        } else {
                          toast.error('Please complete all required shipping fields');
                        }
                      }}
                      className="flex-1 gradient-primary text-white shadow-orange-sm hover:shadow-orange hover:-translate-y-1 transition-all"
                      size="lg"
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </Card>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <Card className="p-6 shadow-orange-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-white">
                      <Lock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-text-dark">Payment Information</h3>
                      <p className="text-sm text-muted-foreground">Secure payment via PayFast</p>
                    </div>
                  </div>

                  {/* Hidden PayFast amount field - will be set on submit */}
                  <input type="hidden" name="amount" value={formData.amount} />
                  <input type="hidden" name="custom_quantity" value={formData.quantity} />

                  {/* Hidden PayFast amount field - will be set on submit */}
                  <input type="hidden" name="amount" value={formData.amount} />
                  <input type="hidden" name="custom_quantity" value={formData.quantity} />

                  {/* Trust Badges */}
                  <div className="flex items-center justify-center gap-6 py-4 px-6 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4 text-primary-orange" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Lock className="h-4 w-4 text-primary-orange" />
                      <span>256-bit SSL</span>
                    </div>
                  </div>

                  {/* Completed Steps Summary */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <p className="text-sm font-medium">✓ Cart review completed</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <p className="text-sm font-medium">✓ Shipping to {formData.city}, {formData.country}</p>
                    </div>
                  </div>

                  {/* Order Summary Before Payment */}
                  <div className="mb-6 p-4 border-2 border-primary-orange/20 rounded-lg bg-white">
                    <h4 className="text-sm font-medium mb-3 text-text-dark">Order Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Items ({cart.length})</span>
                        <span>R{subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 text-xs">
                          FREE
                        </Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="font-medium">Total Amount</span>
                        <span className="font-medium text-primary-orange text-lg">R{total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep(2)}
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      Back to Shipping
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 gradient-primary text-white shadow-orange hover:shadow-orange-lg hover:-translate-y-1 transition-all text-lg py-6 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Lock className="mr-2 h-5 w-5" />
                          Pay R{total.toFixed(2)} Securely
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-20 shadow-orange-sm">
                <h3 className="mb-6 text-text-dark">Order Summary</h3>
                <Separator className="mb-4" />
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-text-dark">R{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      FREE
                    </Badge>
                  </div>
                </div>

                <Separator className="mb-4" />

                <div className="flex justify-between mb-6">
                  <span>Total</span>
                  <span className="text-2xl text-primary-orange">
                    R{total.toFixed(2)}
                  </span>
                </div>

                <div className="space-y-3 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <p>Fast delivery across Western Cape</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <p>100% secure payment processing</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <p>Premium quality guaranteed</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
