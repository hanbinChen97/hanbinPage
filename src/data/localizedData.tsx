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
import {getTranslations, TimelineItemData} from "../i18n/translations";
import profilepic from "../images/chen.jpeg";
import heroImage from "../images/header-background.webp";
import {About, Hero, HomepageMeta, Social, TimelineItem} from "./dataDef";
import {portfolioItems as portfolioItemsData} from "./portfolio";

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Portfolio: "portfolio",
  Resume: "resume",
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
   * Portfolio section - using shared data from portfolio.ts
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

  const createTimelineItems = (items: TimelineItemData[]): TimelineItem[] => {
    return items.map((item) => ({
      date: item.date,
      location: item.location,
      title: item.title,
      content: createKeywordContent(item.keywords),
    }));
  };

  const education = createTimelineItems(t.resume.educationItems);
  const experience = createTimelineItems(t.resume.experienceItems);

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
    portfolioItems,
    education,
    experience,
    socialLinks,
  };
}
