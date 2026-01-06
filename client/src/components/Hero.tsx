import { cvData } from "@/data/cv";
import heroBg from "@assets/generated_images/calm_ocean_surface_background.png";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <div 
      id="hero" 
      className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Ocean Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-in fade-in zoom-in duration-1000">
        <h2 className="text-xl md:text-2xl font-light tracking-widest uppercase mb-4 opacity-90">
          Portfolio
        </h2>
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
          {cvData.personal.name}
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed opacity-90">
          {cvData.personal.title}
        </p>
        <div className="mt-12 flex justify-center gap-4">
          <a 
            href="#about" 
            className="px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-accent hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="w-8 h-8 opacity-70" />
      </div>
    </div>
  );
}
