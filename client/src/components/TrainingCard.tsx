import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ExternalLink } from "lucide-react";

interface TrainingItem {
  title: string;
  organization: string;
  year: string;
  description: string;
  website?: string;
}

interface TrainingCardProps {
  items: TrainingItem[];
}

export default function TrainingCard({ items }: TrainingCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="p-2 bg-secondary/50 rounded-lg text-primary group-hover:bg-accent group-hover:text-primary-foreground transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-muted-foreground border border-border px-2 py-1 rounded whitespace-nowrap">
                {item.year}
              </span>
            </div>
            
            <h3 className="font-heading font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <div className="text-sm font-medium text-accent-foreground mb-3">
              {item.organization}
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {item.description}
            </p>

            {item.website && (
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                data-testid={`link-training-${index}`}
              >
                Learn More
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
