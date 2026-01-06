import { Card, CardContent } from "@/components/ui/card";
import { Award, TrendingUp, Camera } from "lucide-react";

interface AwardItem {
  title: string;
  description: string;
  year: string;
  issuer: string;
}

interface AwardsCategoryProps {
  category: string;
  items: AwardItem[];
  icon: React.ReactNode;
  color: string;
}

function AwardCategory({ category, items, icon, color }: AwardsCategoryProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 ${color} rounded-lg text-white`}>{icon}</div>
        <h3 className="text-2xl font-heading font-bold text-foreground">{category}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((award, idx) => (
          <Card
            key={idx}
            className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/0 hover:border-l-primary overflow-hidden"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h4 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors flex-1">
                  {award.title}
                </h4>
                <span className="text-xs font-bold text-white bg-primary px-3 py-1 rounded-full whitespace-nowrap">
                  {award.year}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {award.description}
              </p>

              <div className="text-xs font-medium text-primary border-t border-border pt-3">
                {award.issuer}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

interface AwardsSectionProps {
  awards: {
    academic: AwardItem[];
    research: AwardItem[];
    other: AwardItem[];
  };
}

export default function AwardsSection({ awards }: AwardsSectionProps) {
  return (
    <div className="w-full">
      <AwardCategory
        category="Academic Awards"
        items={awards.academic}
        icon={<Award className="w-6 h-6" />}
        color="bg-blue-500"
      />
      <AwardCategory
        category="Research Grants & Fellowships"
        items={awards.research}
        icon={<TrendingUp className="w-6 h-6" />}
        color="bg-emerald-500"
      />
      <AwardCategory
        category="Other Recognitions"
        items={awards.other}
        icon={<Camera className="w-6 h-6" />}
        color="bg-amber-500"
      />
    </div>
  );
}
