import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden gradient-hero min-h-screen flex items-center pt-16">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='1' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
              Discover Your Perfect Hair Style
            </h1>
            <p className="text-white text-lg md:text-xl opacity-95 drop-shadow">
              Premium hair products for every curl, wave, and style. Professional tools for salon-quality results at home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-primary-orange hover:bg-gray-50 shadow-orange hover:shadow-orange-lg hover:-translate-y-1 transition-all uppercase tracking-wide"
                onClick={() => {
                  const catalog = document.getElementById("catalog");
                  catalog?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Shop Now
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1511929825537-516974a253df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwY3VybHklMjBoYWlyJTIwd29tYW58ZW58MXx8fHwxNzYwMjAwMDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Beautiful diverse curly hair textures"
              className="rounded-3xl shadow-orange-lg hover:shadow-orange-lg hover:scale-105 transition-all duration-500 w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
