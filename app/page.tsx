"use client";

import React, { useState, useMemo } from 'react';
// FIX: Removing lucide-react dependency and replacing with inline SVGs/Types below to resolve "Module not found" build error.

// --- Icon Type/Replacements ---
// Define a simple type for the replacement icon component
type IconComponent = React.FC<{ className?: string, title?: string }>;

// FIX: Inline SVG replacements for Lucide icons (Briefcase, GraduationCap, FolderGit2, Mail, Phone, MapPin, ExternalLink, User, Code, Globe, Palette)
const IconBriefcase: IconComponent = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);
const IconGraduationCap: IconComponent = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5"></path></svg>
);
const IconFolderGit2: IconComponent = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z"></path><path d="M12 18V8"></path><circle cx="12" cy="18" r="2"></circle><circle cx="12" cy="8" r="2"></circle></svg>
);
const IconMail: IconComponent = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M22 6l-10 7L2 6"></path></svg>
);
const IconPhone: IconComponent = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2 2h-3.9a2 2 0 0 1-2-1.78l-.3-3.14a2 2 0 0 1 .53-1.87l2.2-2.2a2 2 0 0 0 0-2.83l-2.2-2.2a2 2 0 0 0-1.87-.53l-3.14-.3a2 2 0 0 1-1.78-2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3.9a2 2 0 0 1 2 1.78l.3 3.14a2 2 0 0 1-.53 1.87l-2.2 2.2a2 2 0 0 0 0 2.83l2.2 2.2a2 2 0 0 0 1.87.53l3.14.3a2 2 0 0 1 1.78 2V16.92z"></path></svg>
);
const IconMapPin: IconComponent = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="3"></circle></svg>
);
const IconExternalLink: IconComponent = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path><path d="M10 14l-7 7"></path></svg>
);
const IconUser: IconComponent = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);
const IconCode: IconComponent = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
const IconGlobe: IconComponent = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);
const IconPalette: IconComponent = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22z"></path><path d="M12 2a10 10 0 0 1 10 10"></path><path d="M12 2a10 10 0 0 0-10 10"></path></svg>
);


// --- Theme Definitions and Types ---
const themeColors = {
  orange: { accent: 'orange', code: 'FF5722' },
  sky: { accent: 'sky', code: '0EA5E9' },
  emerald: { accent: 'emerald', code: '10B981' },
  rose: { accent: 'rose', code: 'F43F5E' },
};

// Define a type for the allowed theme keys (Fixes 7053)
type ThemeKey = keyof typeof themeColors;

// --- Data Interfaces ---
interface JobExperience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

interface ResumeData {
  name: string;
  title: string;
  imageUrl: string;
  about: string;
  contact: ContactInfo;
  skills: string[];
  experience: JobExperience[];
  education: Education[];
  projects: Project[];
}

// --- Component Props Interfaces (Fixes 7031) ---

interface ThemeSelectorProps {
  currentTheme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
}

// FIX: Updated icon type to use the local IconComponent interface
interface SectionHeaderProps {
  icon: IconComponent;
  title: string;
  theme: string;
}

interface CardEntryProps {
  title: string;
  subtitle: string;
  duration: string;
  description?: string; // Made optional to fix usage in Education section (Fixes 2741)
  theme: string;
}

// FIX: Updated icon type to use the local IconComponent interface
interface ContactItemProps {
  icon: IconComponent;
  label: string;
  value: string;
  link?: string; // Made optional to fix usage for Location (Fixes 2741)
  theme: string;
}

interface ProjectCardProps {
  project: Project;
  theme: string;
}


// --- Resume Data ---
const resumeData: ResumeData = {
  name: 'John Lloyd Racal',
  title: 'Full-Stack Developer & Designer',
  // NOTE: For local images in a Next.js project, place the file (e.g., j.jpg)
  // in the `/public` folder and reference it with a leading slash, e.g., '/j.jpg'
  imageUrl: '/j.jpg', 
  about:
    'A passionate storyteller and dedicated developer with 7+ years of experience crafting beautiful, responsive web applications. Focused on delivering high-performance, accessible, and scalable solutions using modern technologies. My work emphasizes clean architecture and user-centric design, transforming complex requirements into intuitive digital experiences.',
  contact: {
    email: 'b4staracaln1@gmail.com',
    phone: '09275101841',
    location: 'Cogon, Cordova Cebu',
  },
  skills: [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL',
  ],
  experience: [
    {
      id: 1,
      title: 'McDonalds',
      company: 'McDonalds Corporation',
      duration: '2024 — Present',
      description:
        'Greeting customers, taking orders, and providing friendly service to ensure a positive dining experience.',
    }
  ],
  education: [
    {
      id: 1,
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Cordova Public College',
      year: '2026 - 2027',
    }
  ],
  projects: [
    {
      id: 1,
      name: 'Ecommerce Shop',
      description: ' An online ecommerce shop',
      link: 'https://jake-finalproject.vercel.app/',
    },
    {
      id: 2,
      name: 'FCFS CPU SCHEDULING',
      description: 'Real Time CPU scheduling first come first serve',
      link: 'https://fcfsjracs.vercel.app/',
    }
  ],
};

// Component for the floating theme selector
const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, setTheme }) => (
  <div className="fixed top-4 right-4 z-50">
    <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-full shadow-2xl border border-gray-700">
      <IconPalette className="w-5 h-5 text-gray-400" />
      {Object.entries(themeColors).map(([key, theme]) => (
        <button
          key={key}
          // The key is safely cast to ThemeKey as it comes from Object.entries(themeColors)
          onClick={() => setTheme(key as ThemeKey)}
          className={`w-8 h-8 rounded-full shadow-md transition transform hover:scale-110 border-2 ${
            currentTheme === key ? `border-white scale-110` : 'border-transparent'
          } focus:outline-none`}
          style={{ backgroundColor: `#${theme.code}` }}
          title={`${theme.accent.charAt(0).toUpperCase() + theme.accent.slice(1)} Theme`}
        ></button>
      ))}
    </div>
  </div>
);

// Component for a section header with an icon
const SectionHeader: React.FC<SectionHeaderProps> = ({ icon: Icon, title, theme }) => {
  // Explicit class map for dynamic classes
  const iconColor = `text-${theme}-600`;
  const borderColor = `border-${theme}-600/50`;
  return (
    // Dynamic border-color and text-color
    <div className={`flex items-center space-x-3 mb-6 border-b ${borderColor} pb-2`}>
      <Icon className={`w-6 h-6 ${iconColor}`} />
      <h2 className="text-3xl font-extrabold text-white uppercase tracking-wider">
        {title}
      </h2>
    </div>
  );
}

// Component for a work/education entry
const CardEntry: React.FC<CardEntryProps> = ({ title, subtitle, duration, description, theme }) => {
  // Explicit class maps for dynamic classes
  const borderClassMap: Record<string, string> = {
    orange: 'border-orange-600',
    sky: 'border-sky-600',
    emerald: 'border-emerald-600',
    rose: 'border-rose-600',
  };
  const titleColorMap: Record<string, string> = {
    orange: 'text-orange-400',
    sky: 'text-sky-400',
    emerald: 'text-emerald-400',
    rose: 'text-rose-400',
  };
  const hoverShadowClassMap: Record<string, string> = {
    orange: 'hover:shadow-orange-600/30',
    sky: 'hover:shadow-sky-600/30',
    emerald: 'hover:shadow-emerald-600/30',
    rose: 'hover:shadow-rose-600/30',
  };

  const borderClass = borderClassMap[theme] || borderClassMap.orange;
  const titleColorClass = titleColorMap[theme] || titleColorMap.orange;
  const hoverShadowClass = hoverShadowClassMap[theme] || hoverShadowClassMap.orange;

  return (
    // Dynamic border-left color and hover shadow
    <div className={`bg-gray-800 p-6 rounded-xl shadow-lg ${hoverShadowClass} transition duration-300 border-l-4 ${borderClass} mb-6`}>
      <div className="flex justify-between items-start mb-2">
        {/* Dynamic title color */}
        <h3 className={`text-xl font-bold ${titleColorClass}`}>{title}</h3>
        <span className="text-sm text-gray-400 font-medium bg-gray-700 px-3 py-1 rounded-full">{duration}</span>
      </div>
      <p className="text-gray-300 font-semibold mb-3">{subtitle}</p>
      {description && (
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      )}
    </div>
  );
}

// Helper component for Contact Info
const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, label, value, link, theme }) => {
  const iconColor = `text-${theme}-600`;
  const linkHoverColor = `hover:text-${theme}-400`;
  return (
    <div className="flex items-start">
      {/* Dynamic icon color */}
      <Icon className={`w-5 h-5 ${iconColor} mt-1 flex-shrink-0`} />
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-400">{label}</p>
        {link ? (
          // Dynamic link hover color
          <a href={link} target="_blank" rel="noopener noreferrer" className={`text-white ${linkHoverColor} transition break-all`}>
            {value}
          </a>
        ) : (
          <p className="text-white">{value}</p>
        )}
      </div>
    </div>
  );
}

// Helper component for Project Card
const ProjectCard: React.FC<ProjectCardProps> = ({ project, theme }) => {
  // Explicit class maps for dynamic classes
  const iconColor = `text-${theme}-600`;
  const linkColor = `text-${theme}-400`;
  const linkHoverColor = `hover:text-${theme}-600`;
  const hoverShadowClassMap: Record<string, string> = {
    orange: 'hover:shadow-orange-600/30',
    sky: 'hover:shadow-sky-600/30',
    emerald: 'hover:shadow-emerald-600/30',
    rose: 'hover:shadow-rose-600/30',
  };
  const hoverShadowClass = hoverShadowClassMap[theme] || hoverShadowClassMap.orange;

  return (
    <div className={`bg-gray-800 p-6 rounded-xl shadow-lg ${hoverShadowClass} transition duration-300 flex flex-col justify-between h-full`}>
      <div>
        <div className="flex items-center mb-3">
          {/* Dynamic icon color */}
          <IconGlobe className={`w-5 h-5 ${iconColor} mr-2`} />
          <h4 className="text-xl font-bold text-white">{project.name}</h4>
        </div>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        // Dynamic text and hover color
        className={`inline-flex items-center ${linkColor} ${linkHoverColor} font-medium transition group mt-4`}
      >
        View Project
        <IconExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-200" />
      </a>
    </div>
  );
}

const App = () => {
  // State is now correctly typed as ThemeKey
  const [currentTheme, setTheme] = useState<ThemeKey>('orange');

  // Utility to grab the theme's accent color name (Type safe indexing)
  const themeAccent = useMemo(() => themeColors[currentTheme].accent, [currentTheme]);


  // Utility to build image URL with dynamic accent color (Type safe indexing)
  const dynamicImageUrl = useMemo(() => {
    // Check if the user has provided a custom URL.
    // If resumeData.imageUrl is provided (not empty) AND it's not the generic placeholder path, use it.
    if (resumeData.imageUrl) {
      return resumeData.imageUrl; 
    }

    // Otherwise, generate the theme-specific placeholder URL
    const code = themeColors[currentTheme].code;
    return `https://placehold.co/400x400/${code}/ffffff?text=Your+Photo`;
  }, [currentTheme]);


  // Explicit class maps for complex/failing dynamic classes (Fixes Tailwind JIT issues)
  const themeClasses = useMemo(() => {
    // Mapping for complex classes that need explicit definition
    const profileShadowMap: Record<ThemeKey, string> = {
        orange: 'shadow-orange-900/50',
        sky: 'shadow-sky-900/50',
        emerald: 'shadow-emerald-900/50',
        rose: 'shadow-rose-900/50',
    };
    const footerBgMap: Record<ThemeKey, string> = {
        orange: 'bg-orange-800',
        sky: 'bg-sky-800',
        emerald: 'bg-emerald-800',
        rose: 'bg-rose-800',
    };
    const ctaTextColorMap: Record<ThemeKey, string> = {
        orange: 'text-orange-800',
        sky: 'text-sky-800',
        emerald: 'text-emerald-800',
        rose: 'text-rose-800',
    };
    const imageBorderMap: Record<ThemeKey, string> = {
      orange: 'border-orange-600',
      sky: 'border-sky-600',
      emerald: 'border-emerald-600',
      rose: 'border-rose-600',
    };
    
    return {
        profileShadow: profileShadowMap[currentTheme] || profileShadowMap.orange,
        footerBg: footerBgMap[currentTheme] || footerBgMap.orange,
        ctaTextColor: ctaTextColorMap[currentTheme] || ctaTextColorMap.orange,
        imageBorder: imageBorderMap[currentTheme] || imageBorderMap.orange,
        // Simple classes are fine with interpolation if the shades are fixed (e.g., -700, -400)
        topBannerBg: `bg-${themeAccent}-700`,
        profileTitleColor: `text-${themeAccent}-400`,
    };
  }, [currentTheme, themeAccent]);


  // Handler to fix the onError property access (Fixes 2339)
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // Remove the error handler to prevent an infinite loop if the fallback also fails
    target.onerror = null; 
    // Set a fallback placeholder image
    target.src = 'https://placehold.co/400x400/FF5722/ffffff?text=Image+Error';
  };


  return (
    <div className="min-h-screen bg-gray-900 font-sans antialiased text-white">
      
      {/* Theme Selector UI */}
      <ThemeSelector currentTheme={currentTheme} setTheme={setTheme} />

      {/* Top Banner (Dynamic background color) */}
      <div className={`${themeClasses.topBannerBg} py-3 text-center shadow-lg`}>
        <p className="text-sm font-semibold tracking-widest uppercase">
          {resumeData.name}: ONLINE RESUME
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* --- 1. PROFILE / ABOUT ME SECTION --- */}
        {/* Using explicit shadow class */}
        <div className={`flex flex-col md:flex-row items-center md:items-start bg-gray-800 p-8 rounded-2xl shadow-2xl ${themeClasses.profileShadow} mb-16`}>
          <div className="md:w-3/4 order-2 md:order-1 pt-6 md:pt-0 md:pr-10">
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-2">
              {resumeData.name}
            </h1>
            {/* Dynamic text color */}
            <p className={`text-2xl font-light ${themeClasses.profileTitleColor} mb-6`}>
              {resumeData.title}
            </p>

            <SectionHeader icon={IconUser} title="About Me" theme={themeAccent} />
            <p className="text-gray-300 leading-relaxed text-lg">
              {resumeData.about}
            </p>
          </div>

          {/* Image/Picture Area - Using explicit border class */}
          <div className="md:w-1/4 order-1 md:order-2 flex justify-center flex-shrink-0">
            <div className={`w-52 h-52 sm:w-64 sm:h-64 rounded-full border-4 ${themeClasses.imageBorder} p-1 bg-gray-900 overflow-hidden shadow-2xl`}>
              <img
                src={dynamicImageUrl}
                alt="Profile Picture Placeholder"
                className="w-full h-full object-cover rounded-full transition duration-500 hover:scale-105"
                // Using the typed handler
                onError={handleImageError} 
              />
            </div>
          </div>
        </div>

        {/* --- MAIN CONTENT GRID (Skills, Experience, Education) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {/* LEFT COLUMN: Skills and Contact */}
          <div className="lg:col-span-1 space-y-10">
            {/* Skills Card */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <SectionHeader icon={IconCode} title="Top Skills" theme={themeAccent} />
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill) => (
                  <span
                    key={skill}
                    // Dynamic background color (uses simple interpolation which should be fine)
                    className={`px-4 py-1.5 bg-${themeAccent}-600 text-white text-sm font-medium rounded-full hover:bg-${themeAccent}-700 transition`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <SectionHeader icon={IconPhone} title="Contact Info" theme={themeAccent} />
              <div className="space-y-4">
                {/* Email and Phone have links */}
                <ContactItem icon={IconMail} label="Email" value={resumeData.contact.email} link={`mailto:${resumeData.contact.email}`} theme={themeAccent} />
                <ContactItem icon={IconPhone} label="Phone" value={resumeData.contact.phone} link={`tel:${resumeData.contact.phone.replace(/\s+/g, '')}`} theme={themeAccent} />
                {/* Location does not need a link, relies on optional prop */}
                <ContactItem icon={IconMapPin} label="Location" value={resumeData.contact.location} theme={themeAccent} />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Experience and Education */}
          <div className="lg:col-span-2 space-y-10">
            {/* Work Experience */}
            <div>
              <SectionHeader icon={IconBriefcase} title="Work Experience" theme={themeAccent} />
              {resumeData.experience.map((job) => (
                <CardEntry
                  key={job.id}
                  title={job.title}
                  subtitle={job.company}
                  duration={job.duration}
                  description={job.description}
                  theme={themeAccent}
                />
              ))}
            </div>

            {/* Education Background */}
            <div>
              <SectionHeader icon={IconGraduationCap} title="Education Background" theme={themeAccent} />
              {resumeData.education.map((edu) => (
                <CardEntry
                  key={edu.id}
                  title={edu.degree}
                  subtitle={edu.institution}
                  duration={edu.year}
                  // description is omitted here, relying on the optional prop definition
                  theme={themeAccent}
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- PROJECTS SECTION (Grid Layout) --- */}
        <div className="mb-16">
          <SectionHeader icon={IconFolderGit2} title="Recent Projects" theme={themeAccent} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumeData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} theme={themeAccent} />
            ))}
          </div>
        </div>
      </div>

      {/* --- Footer/Bottom CTA (Dynamic background and button colors) --- */}
      {/* Using explicit background class */}
      <footer className={`${themeClasses.footerBg} py-10 text-center text-white`}>
        <h3 className="text-2xl font-semibold mb-2">Ready to discuss your project?</h3>
        <p className="text-gray-200 mb-6">I am currently available for challenging full-stack roles and consulting opportunities.</p>
        <a
          href={`mailto:${resumeData.contact.email}`}
          // Using explicit text color class
          className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full ${themeClasses.ctaTextColor} bg-white hover:bg-gray-100 shadow-xl transition transform hover:scale-105`}
        >
          <IconMail className="w-5 h-5 mr-2" />
          Contact Me Now
        </a>
      </footer>
    </div>
  );
};

export default App;
