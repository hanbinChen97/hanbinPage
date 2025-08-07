import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import GitLabIcon from "../components/Icon/GitLabIcon";
import HuggingfaceIcon from "../components/Icon/HuggingfaceIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import {getTranslations} from "../i18n/translations";
import profilepic from "../images/chen.jpeg";
import heroImage from "../images/header-background.webp";
import {portfolioItems as portfolioItemsData} from "./data";
import {
  About,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TimelineItem,
} from "./dataDef";

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Get localized data based on locale
 */
export function getLocalizedData(locale: string) {
  const t = getTranslations(locale);

  /**
   * Page meta data
   */
  const homePageMeta: HomepageMeta = {
    title: t.meta.title,
    description: t.meta.description,
  };

  /**
   * Hero section
   */
  const heroData: Hero = {
    imageSrc: heroImage,
    name: t.hero.name,
    description: (
      <>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          {t.hero.description.intro
            .split("Computer Science Graduate")
            .map((part, index) =>
              index === 0 ? (
                <span key={index}>
                  {part}
                  <strong className="text-stone-100">
                    Computer Science Graduate
                  </strong>
                </span>
              ) : (
                <span key={index}>
                  {part.split("LLM Researcher").map((subpart, subindex) =>
                    subindex === 0 ? (
                      <span key={subindex}>
                        <strong className="text-stone-100">
                          LLM Researcher
                        </strong>
                        {subpart}
                      </span>
                    ) : (
                      <span key={subindex}>{subpart}</span>
                    ),
                  )}
                </span>
              ),
            )}
        </p>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          {t.hero.description.education
            .split("RWTH Aachen")
            .map((part, index) =>
              index === 0 ? (
                <span key={index}>
                  {part}
                  <strong className="text-stone-100">RWTH Aachen</strong>
                </span>
              ) : (
                <span key={index}>
                  {part
                    .split("Large Language Models")
                    .map((subpart, subindex) =>
                      subindex === 0 ? (
                        <span key={subindex}>
                          {subpart}
                          <strong className="text-stone-100">
                            Large Language Models
                          </strong>
                        </span>
                      ) : (
                        <span key={subindex}>{subpart}</span>
                      ),
                    )}
                </span>
              ),
            )}
        </p>
      </>
    ),
    actions: [
      {
        href: "https://github.com/hanbinChen97/hanbinChen97/raw/eaf42eb614134f799c9aee999d9885c1c5bbc438/resume.pdf",
        text: t.hero.resumeButton,
        primary: true,
        Icon: ArrowDownTrayIcon,
      },
    ],
  };

  /**
   * About section
   */
  const aboutData: About = {
    profileImageSrc: profilepic,
    description: t.about.description,
    aboutItems: [
      {label: t.about.location, text: "Aachen, Germany", Icon: MapIcon},
      {
        label: t.about.email,
        text: "hanbin.9797@gmail.com",
        Icon: CalendarIcon,
      },
      {label: t.about.nationality, text: "Chinese", Icon: FlagIcon},
      {
        label: t.about.interests,
        text: "AI, Machine Learning, Medical Applications",
        Icon: SparklesIcon,
      },
      {
        label: t.about.study,
        text: "RWTH Aachen University",
        Icon: AcademicCapIcon,
      },
      {
        label: t.about.languages,
        text: "English, German, Chinese",
        Icon: BuildingOffice2Icon,
      },
    ],
  };

  /**
   * Skills section
   */
  const skills: SkillGroup[] = [
    {
      name: t.skills.programmingLanguages,
      skills: [
        {
          name: "Java",
          level: 9,
        },
        {
          name: "Kotlin",
          level: 8,
        },
        {
          name: "Python",
          level: 7,
        },
        {
          name: "TypeScript",
          level: 6,
        },
        {
          name: "JavaScript",
          level: 6,
        },
        {
          name: "SQL",
          level: 7,
        },
      ],
    },
    {
      name: t.skills.frameworks,
      skills: [
        {
          name: "Spring Boot",
          level: 8,
        },
        {
          name: "React",
          level: 6,
        },
        {
          name: "Next.js",
          level: 5,
        },
        {
          name: "TensorFlow",
          level: 6,
        },
        {
          name: "PyTorch",
          level: 6,
        },
      ],
    },
    {
      name: t.skills.databases,
      skills: [
        {
          name: "PostgreSQL",
          level: 7,
        },
        {
          name: "MySQL",
          level: 7,
        },
        {
          name: "MongoDB",
          level: 6,
        },
        {
          name: "Redis",
          level: 5,
        },
      ],
    },
    {
      name: t.skills.tools,
      skills: [
        {
          name: "Docker",
          level: 7,
        },
        {
          name: "Git",
          level: 8,
        },
        {
          name: "AWS",
          level: 6,
        },
        {
          name: "IntelliJ IDEA",
          level: 9,
        },
      ],
    },
  ];

  /**
   * Portfolio section - using data from data.tsx
   */
  const portfolioItems = portfolioItemsData;

  /**
   * Resume section
   */
  const education: TimelineItem[] = [
    {
      date: "2023 - Present",
      location: "RWTH Aachen University",
      title: "M.Sc. Computer Science",
      content: (
        <p>
          Specialized in Artificial Intelligence and Machine Learning with focus
          on Large Language Models for medical applications. Current research
          involves developing knowledge graph construction techniques using
          state-of-the-art NLP models.
        </p>
      ),
    },
    {
      date: "2019 - 2023",
      location: "University of Applied Sciences",
      title: "B.Sc. Computer Science",
      content: (
        <p>
          Graduated with honors. Thesis focused on process mining techniques for
          healthcare workflow optimization. Strong foundation in software
          engineering, databases, and algorithm design.
        </p>
      ),
    },
  ];

  const experience: TimelineItem[] = [
    {
      date: "2024 - Present",
      location: "RWTH Aachen University",
      title: "Research Assistant",
      content: (
        <p>
          Leading research on Large Language Models for medical knowledge
          extraction and reasoning. Developing novel approaches for automated
          medical knowledge graph construction from unstructured clinical texts.
        </p>
      ),
    },
    {
      date: "2023 - 2024",
      location: "Tech Startup",
      title: "Software Developer",
      content: (
        <p>
          Developed and maintained production applications using Java Spring
          Boot and Kotlin. Implemented microservices architecture, worked with
          databases, and contributed to CI/CD pipelines.
        </p>
      ),
    },
    {
      date: "2022 - 2023",
      location: "University Research Lab",
      title: "Student Research Assistant",
      content: (
        <p>
          Conducted research on process mining applications in healthcare.
          Developed data analysis tools using Python and contributed to academic
          publications in the field of business process management.
        </p>
      ),
    },
  ];

  /**
   * Social items
   */
  const socialLinks: Social[] = [
    {
      label: "Github",
      Icon: GithubIcon,
      href: "https://github.com/hanbinChen97",
    },
    {
      label: "LinkedIn",
      Icon: LinkedInIcon,
      href: "https://www.linkedin.com/in/hanbin-chen-4a9b8b1b8/",
    },
    {
      label: "GitLab",
      Icon: GitLabIcon,
      href: "https://gitlab.com/hanbinChen97",
    },
    {
      label: "HuggingFace",
      Icon: HuggingfaceIcon,
      href: "https://huggingface.co/hanbinChen97",
    },
  ];

  return {
    homePageMeta,
    heroData,
    aboutData,
    skills,
    portfolioItems,
    education,
    experience,
    socialLinks,
  };
}
