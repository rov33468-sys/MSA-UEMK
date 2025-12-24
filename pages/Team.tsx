import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Reveal from '../components/Reveal';
import { TEAM } from '../constants';
import { TeamMember } from '../types';

const getInitials = (name: string) => {
  return name
    .split(' ')
    .filter(part => part.length > 0)
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const MemberCard: React.FC<{ member: TeamMember, delay?: number }> = ({ member, delay = 0 }) => {
  const [imgError, setImgError] = React.useState(false);

  // Logic to determine if we show the photo or the initials.
  // We show the photo if it exists, isn't a generic placeholder, AND hasn't failed to load.
  const hasCustomImage = member.image && 
    !member.image.includes('placeholder') && 
    !member.image.includes('ui-avatars') && 
    !member.image.includes('picsum') &&
    !imgError;

  return (
    <Reveal delay={delay} direction="up">
      <GlassCard className="h-full group hover:-translate-y-2">
        <div className={`${member.imageAspect || 'aspect-square'} rounded-xl overflow-hidden mb-6 relative bg-gradient-to-br from-content/5 to-content/10 border border-content/5`}>
          
          {hasCustomImage ? (
            /* Render Image (Wallpaper Style) */
            <>
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                onError={() => setImgError(true)}
              />
            </>
          ) : (
            /* Render Initials */
            <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
               <span className="text-7xl font-display font-bold text-content/20 group-hover:text-primary/50 transition-colors duration-300 select-none">
                 {getInitials(member.name)}
               </span>
            </div>
          )}
          
          {/* Social Overlay */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8 gap-4">
            <a 
              href={member.linkedin || "#"} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full text-white hover:bg-[#0077b5] hover:shadow-[0_0_20px_rgba(0,119,181,0.6)] backdrop-blur-md transform translate-y-8 opacity-0 scale-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-100 hover:!scale-110 border border-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={member.instagram || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full text-white hover:bg-[#E1306C] hover:shadow-[0_0_20px_rgba(225,48,108,0.6)] backdrop-blur-md transform translate-y-8 opacity-0 scale-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-200 hover:!scale-110 border border-white/10"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <h3 className="text-xl font-bold text-content">{member.name}</h3>
        <p className="text-gray-500 text-sm">{member.role}</p>
      </GlassCard>
    </Reveal>
  );
};

const Team: React.FC = () => {
  const faculty = TEAM.filter(m => m.type === 'faculty');
  const core = TEAM.filter(m => m.type === 'core');
  const leads = TEAM.filter(m => m.type === 'lead');
  const alumni = TEAM.filter(m => m.type === 'alumni');

  return (
    <div className="pt-32 min-h-screen">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-content">The Minds Behind <span className="text-primary">MSA UEMK</span></h1>
            <p className="text-gray-500 dark:text-gray-400 text-xl max-w-2xl mx-auto">
              Driven by passion, united by code. Meet the architects of our community.
            </p>
          </div>
        </Reveal>

        {/* Faculty Coordinators - 2 Columns */}
        <section className="mb-24">
          <h2 className="text-2xl font-display font-bold mb-12 border-l-4 border-accent pl-4 text-content">Faculty Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faculty.map((member) => (
              <Reveal key={member.id} direction="up">
                <GlassCard className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full p-1 border-2 border-accent/30 mb-6 relative">
                    <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl animate-pulse-slow" />
                    <div className="w-full h-full rounded-full bg-surface border border-content/10 flex items-center justify-center relative z-10 overflow-hidden">
                       <span className="text-4xl font-display font-bold text-accent/80 select-none">
                         {getInitials(member.name)}
                       </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-content mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Core Members - 2 Columns */}
        <section className="mb-24">
          <h2 className="text-2xl font-display font-bold mb-12 border-l-4 border-primary pl-4 text-content">Core Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {core.map((member, idx) => (
              <MemberCard key={member.id} member={member} delay={idx * 0.1} />
            ))}
          </div>
        </section>

        {/* Leads - 3 Columns (9 items) */}
        <section className="mb-24">
          <h2 className="text-2xl font-display font-bold mb-12 border-l-4 border-accent pl-4 text-content">Leads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leads.map((member, idx) => (
              <MemberCard key={member.id} member={member} delay={idx * 0.1} />
            ))}
          </div>
        </section>

        {/* Honourable Alumnies */}
        <section className="mb-24">
          <h2 className="text-2xl font-display font-bold mb-12 border-l-4 border-secondary pl-4 text-content">Honourable Alumnies</h2>
          <div className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide">
            {alumni.map((member) => (
              <GlassCard key={member.id} className="min-w-[280px] flex items-center gap-4 border-secondary/20">
                 <div className="w-16 h-16 rounded-full bg-surface border border-secondary flex items-center justify-center shrink-0">
                    <span className="text-lg font-bold text-secondary select-none">
                      {getInitials(member.name)}
                    </span>
                 </div>
                 <div>
                   <h3 className="font-bold text-content">{member.name}</h3>
                   <p className="text-xs text-gray-500">{member.role}</p>
                 </div>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;