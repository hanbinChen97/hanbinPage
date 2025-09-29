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
      <div className="flex flex-wrap justify-center gap-2">
        {t.hero.keywords.map((keyword) => (
          <span
            className="rounded-full bg-gray-700/70 px-3 py-1 text-sm font-medium text-stone-100 sm:text-base"
            key={keyword}
          >
            {keyword}
          </span>
        ))}
      </div>
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
  const createKeywordContent = (keywords: string[]) => (
    <ul className="flex flex-wrap justify-center gap-2 text-sm font-medium text-neutral-700 md:justify-start">
      {keywords.map((keyword, index) => (
        <li
          className="rounded-full bg-white px-3 py-1 shadow-sm"
          key={`${keyword}-${index}`}
        >
          {keyword}
        </li>
      ))}
    </ul>
  );

  const resumeContent: Record<
    string,
    { education: TimelineItem[]; experience: TimelineItem[] }
  > = {
    en: {
      education: [
        {
          date: "2020 - 2025",
          location: "RWTH Aachen University",
          title: "M.Sc. Computer Science",
          content: createKeywordContent([
            "AI & Machine Learning Focus",
            "Medical LLM Research",
            "Knowledge Graph Construction",
            "Healthcare NLP",
          ]),
        },
        {
          date: "2017 - 2020",
          location: "University of Applied Sciences",
          title: "B.Sc. Computer Science",
          content: createKeywordContent([
            "Process Mining Thesis",
            "Healthcare Workflow Optimization",
            "Software Engineering Fundamentals",
            "Database Systems",
            "Algorithm Design",
          ]),
        },
      ],
      experience: [
        {
          date: "2024 - Present",
          location: "RWTH Aachen University",
          title: "Research Assistant",
          content: createKeywordContent([
            "Medical Knowledge Extraction",
            "LLM Reasoning",
            "Automated Knowledge Graphs",
            "Clinical NLP Pipelines",
          ]),
        },
        {
          date: "2023 - 2024",
          location: "Tech Startup",
          title: "Software Developer",
          content: createKeywordContent([
            "Java Spring Boot Services",
            "Kotlin Microservices",
            "Database Integration",
            "CI/CD Automation",
          ]),
        },
        {
          date: "2022 - 2023",
          location: "University Research Lab",
          title: "Student Research Assistant",
          content: createKeywordContent([
            "Process Mining Analysis",
            "Python Tooling",
            "Healthcare Data Insights",
            "Academic Publications",
          ]),
        },
      ],
    },
    de: {
      education: [
        {
          date: "2020 - 2025",
          location: "RWTH Aachen University",
          title: "M.Sc. Informatik",
          content: createKeywordContent([
            "Schwerpunkt KI & Machine Learning",
            "Forschung zu medizinischen LLMs",
            "Wissensgraph-Aufbau",
            "Healthcare NLP",
          ]),
        },
        {
          date: "2017 - 2020",
          location: "Fachhochschule",
          title: "B.Sc. Informatik",
          content: createKeywordContent([
            "Prozess-Mining Abschlussarbeit",
            "Optimierung klinischer Abläufe",
            "Software Engineering Grundlagen",
            "Datenbanksysteme",
            "Algorithmendesign",
          ]),
        },
      ],
      experience: [
        {
          date: "2024 - Heute",
          location: "RWTH Aachen University",
          title: "Wissenschaftlicher Mitarbeiter",
          content: createKeywordContent([
            "Medizinische Wissensextraktion",
            "LLM-Reasoning",
            "Automatisierte Wissensgraphen",
            "Klinische NLP-Pipelines",
          ]),
        },
        {
          date: "2023 - 2024",
          location: "Tech Startup",
          title: "Softwareentwickler",
          content: createKeywordContent([
            "Java Spring Boot Services",
            "Kotlin Microservices",
            "Datenbankintegration",
            "CI/CD Automatisierung",
          ]),
        },
        {
          date: "2022 - 2023",
          location: "Universitäts-Forschungslabor",
          title: "Studentische Hilfskraft",
          content: createKeywordContent([
            "Prozess-Mining Analysen",
            "Python Werkzeuge",
            "Gesundheitsdaten Insights",
            "Wissenschaftliche Publikationen",
          ]),
        },
      ],
    },
    zh: {
      education: [
        {
          date: "2020 - 2025",
          location: "亚琛工业大学",
          title: "计算机科学硕士",
          content: createKeywordContent([
            "人工智能与机器学习方向",
            "医疗大模型研究",
            "知识图谱构建",
            "医疗场景NLP",
          ]),
        },
        {
          date: "2017 - 2020",
          location: "应用科学大学",
          title: "计算机科学学士",
          content: createKeywordContent([
            "流程挖掘毕业课题",
            "医疗流程优化",
            "软件工程基础",
            "数据库系统",
            "算法设计",
          ]),
        },
      ],
      experience: [
        {
          date: "2024 - 至今",
          location: "亚琛工业大学",
          title: "科研助理",
          content: createKeywordContent([
            "医疗知识抽取",
            "大模型推理",
            "自动化知识图谱",
            "临床NLP流程",
          ]),
        },
        {
          date: "2023 - 2024",
          location: "科技初创公司",
          title: "软件开发工程师",
          content: createKeywordContent([
            "Java Spring Boot服务",
            "Kotlin微服务",
            "数据库集成",
            "CI/CD自动化",
          ]),
        },
        {
          date: "2022 - 2023",
          location: "大学研究实验室",
          title: "学生科研助理",
          content: createKeywordContent([
            "流程挖掘分析",
            "Python工具开发",
            "医疗数据洞察",
            "学术发表",
          ]),
        },
      ],
    },
  };

  const {education, experience} = resumeContent[locale] || resumeContent.en;

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
