import { Card, CardContent } from "@/components/ui/card";
import { Code2, Zap, Wrench, Globe } from "lucide-react";

interface SkillsGridProps {
  skillsData: {
    technical: string[];
    languages: string[];
    tools: string[];
    softSkills: string[];
  };
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
}

export default function SkillsGrid({ skillsData }: SkillsGridProps) {
  const categories: SkillCategory[] = [
    {
      title: "Technical Skills",
      icon: <Code2 className="w-6 h-6" />,
      items: skillsData.technical,
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Tools & Software",
      icon: <Wrench className="w-6 h-6" />,
      items: skillsData.tools,
      color: "bg-teal-50 border-teal-200"
    },
    {
      title: "Soft Skills",
      icon: <Zap className="w-6 h-6" />,
      items: skillsData.softSkills,
      color: "bg-amber-50 border-amber-200"
    },
    {
      title: "Languages",
      icon: <Globe className="w-6 h-6" />,
      items: skillsData.languages,
      color: "bg-emerald-50 border-emerald-200"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {categories.map((category, idx) => (
        <Card key={idx} className={`border-2 ${category.color} hover:shadow-lg transition-all duration-300`}>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="text-primary">{category.icon}</div>
              <h3 className="font-heading font-bold text-lg text-foreground">
                {category.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="inline-block px-4 py-2 bg-white border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
