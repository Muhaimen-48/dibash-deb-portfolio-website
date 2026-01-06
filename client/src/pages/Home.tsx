import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import PublicationList from "@/components/PublicationList";
import ResearchMap from "@/components/ResearchMap";
import PhotoGallery from "@/components/PhotoGallery";
import LeadershipCard from "@/components/LeadershipCard";
import TrainingCard from "@/components/TrainingCard";
import SkillsGrid from "@/components/SkillsGrid";
import AwardsSection from "@/components/AwardsSection";
import Footer from "@/components/Footer";
import { cvData } from "@/data/cv";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin } from "lucide-react";
import profilePic from "@assets/Deb_Photo_1767011188623.jpg";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navigation />
      
      <Hero />

      <Section id="about" title="About Me" subtitle="Professional Profile">
        <div className="max-w-4xl mx-auto text-center md:text-left md:flex items-start gap-12">
          {/* Profile Picture */}
          <div className="flex justify-center mb-8 md:mb-0 md:flex-shrink-0">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-primary/20 hover:border-primary transition-all duration-300 group">
              <img
                src={profilePic}
                alt="Dibash Deb"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {cvData.personal.summary}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center text-primary font-medium">
                <MapPin className="w-5 h-5 mr-2" />
                {cvData.personal.location}
              </div>
              <div className="flex items-center text-primary font-medium">
                <Mail className="w-5 h-5 mr-2" />
                {cvData.personal.email}
              </div>
            </div>
            <div className="pt-4">
              <h4 className="font-heading font-semibold mb-3">Core Skills</h4>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {cvData.skills.technical.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="px-3 py-1 text-sm font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="education" title="Education" variant="alt">
        <Timeline items={cvData.education} type="education" />
      </Section>

      <Section id="experience" title="Professional Experience">
        <Timeline items={cvData.experience} type="experience" />
      </Section>

      <Section id="research" title="Research & Publications" subtitle="Academic Contributions" variant="alt">
        <PublicationList publications={cvData.publications} />
      </Section>

      <Section id="trainings" title="Research Experiences & Trainings" subtitle="Professional Development & Workshops">
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Continuous learning and skill development through specialized workshops and field research programs.
        </p>
        <TrainingCard items={cvData.trainings} />
      </Section>

      <Section id="leadership" title="Leadership & Volunteering" subtitle="Community Engagement & Mentorship" variant="alt">
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Active involvement in marine education, research organizations, and community development initiatives.
        </p>
        <LeadershipCard items={cvData.leadership} />
      </Section>

      <Section id="skills" title="Skills & Tools Expertise" subtitle="Technical Competencies">
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Comprehensive skill set spanning oceanographic research, geospatial analysis, programming, and professional communication.
        </p>
        <SkillsGrid skillsData={cvData.skills} />
      </Section>

      <Section id="awards" title="Achievements & Awards" subtitle="Recognition & Honors" variant="alt">
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Academic achievements, research fellowships, and special recognitions for excellence in oceanographic research and community engagement.
        </p>
        <AwardsSection awards={cvData.awards} />
      </Section>

      <Section id="map" title="Global Footprint" subtitle="Research Activities & Studies">
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          Mapping my academic journey and research locations across Bangladesh and Europe.
        </p>
        <ResearchMap locations={cvData.mapLocations} />
      </Section>

      <Section id="gallery" title="Photo Gallery" subtitle="Field Work & Research Highlights" variant="alt">
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          A visual journey through my oceanographic research, field expeditions, and academic contributions.
        </p>
        <PhotoGallery images={cvData.gallery} />
      </Section>

      <Section id="contact" title="Get In Touch" variant="alt">
        <div className="max-w-xl mx-auto bg-card p-8 rounded-xl shadow-lg border border-border text-center">
          <p className="mb-6 text-muted-foreground">
            I am always open to discussing new research opportunities, collaborations, or oceanography projects.
          </p>
          <a 
            href={`mailto:${cvData.personal.email}`}
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto"
          >
            <Mail className="w-5 h-5 mr-2" />
            Send me an Email
          </a>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
