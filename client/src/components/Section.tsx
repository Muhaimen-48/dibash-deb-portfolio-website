import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "alt";
}

export default function Section({ 
  id, 
  title, 
  subtitle, 
  className, 
  children, 
  variant = "default" 
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "py-20 px-6 md:px-12",
        variant === "alt" ? "bg-secondary/30" : "bg-background",
        className
      )}
    >
      <div className="container mx-auto max-w-5xl">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6"></div>
            )}
            {subtitle && (
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
