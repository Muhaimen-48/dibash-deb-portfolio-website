import { cvData } from "@/data/cv";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-heading font-bold mb-4">{cvData.personal.name}</h2>
        <p className="opacity-80 mb-8 max-w-2xl mx-auto">
          Dedicated to understanding and protecting our marine environments through research and innovation.
        </p>
        
        <div className="flex justify-center space-x-6 mb-8">
          {Object.entries(cvData.personal.social).map(([platform, url]) => (
            <a 
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors capitalize"
            >
              {platform}
            </a>
          ))}
        </div>
        
        <div className="text-sm opacity-60">
          &copy; {new Date().getFullYear()} {cvData.personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
