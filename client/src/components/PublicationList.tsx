import { Card, CardContent } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  journal: string;
  year: string;
  authors: string;
  link?: string;
}

interface PublicationListProps {
  publications: Publication[];
}

export default function PublicationList({ publications }: PublicationListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {publications.map((pub, index) => (
        <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/0 hover:border-l-primary overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="p-2 bg-secondary/50 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-muted-foreground border border-border px-2 py-1 rounded">
                {pub.year}
              </span>
            </div>
            
            <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-primary transition-colors">
              {pub.title}
            </h3>
            
            <div className="text-sm font-medium text-accent-foreground mb-3">
              {pub.journal}
            </div>
            
            <p className="text-xs text-muted-foreground italic mb-4">
              {pub.authors}
            </p>

            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                data-testid={`link-article-${index}`}
              >
                Read Article
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
