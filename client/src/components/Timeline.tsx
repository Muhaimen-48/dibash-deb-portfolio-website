import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  location?: string; // Optional if not always available
  icon: React.ReactNode;
  isLast?: boolean;
}

function TimelineItem({ title, subtitle, date, description, icon, isLast }: TimelineItemProps) {
  return (
    <div className="relative flex gap-8 group">
      {/* Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border group-hover:bg-primary/30 transition-colors"></div>
      )}
      
      {/* Icon Bubble */}
      <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center text-primary shadow-sm group-hover:border-primary group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>

      {/* Content */}
      <div className="pb-12 pt-1 flex-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground font-medium bg-secondary/50 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
            <Calendar className="w-3 h-3 mr-2" />
            {date}
          </div>
        </div>
        <div className="text-lg text-primary font-medium mb-3">{subtitle}</div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

interface TimelineProps {
  items: any[];
  type: "education" | "experience";
}

export default function Timeline({ items, type }: TimelineProps) {
  return (
    <div className="max-w-3xl mx-auto">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={type === "education" ? item.degree : item.role}
          subtitle={type === "education" ? item.institution : item.organization}
          date={item.year}
          description={item.description + (item.grade ? ` • ${item.grade}` : "")}
          icon={type === "education" ? <GraduationCap className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}
