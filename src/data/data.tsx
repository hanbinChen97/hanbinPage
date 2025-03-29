import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import GitLabIcon from '../components/Icon/GitLabIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import profilepic from '../images/chen.jpeg';
import heroImage from '../images/header-background.webp';
import medkgcImage from '../images/portfolio/medkgc.png';
import playingImage from '../images/portfolio/playing.png';
import sissiImage from '../images/portfolio/sissi.png';
import tradingBoardImage from '../images/portfolio/tradingBoard.png';
import vctEvaImage from '../images/portfolio/vctEva.png';
import {
  About,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Hanbin Chen - Personal Portfolio',
  description: "Hanbin Chen's personal portfolio and resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Hanbin Chen.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Computer Science Graduate</strong> and <strong className="text-stone-100">LLM Researcher</strong>, 
        passionate about exploring the intersection of data science, process mining, and AI technologies.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Master's student at <strong className="text-stone-100">RWTH Aachen</strong> with research focus on 
        <strong className="text-stone-100"> Large Language Models</strong> for medical applications.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1F77-z-uWKJuufsgtMDd8v-5hKq_nca44/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Master's student in Computer Science at RWTH Aachen with research focus on Large Language Models for medical applications. Skilled in software development using Java and Kotlin with hands-on experience in building production-ready applications.`,
  aboutItems: [
    {label: 'Location', text: 'Aachen, Germany', Icon: MapIcon},
    {label: 'Email', text: 'hanbin.9797@gmail.com', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'AI, Machine Learning, Medical Applications', Icon: SparklesIcon},
    {label: 'Study', text: 'RWTH Aachen University', Icon: AcademicCapIcon},
    {label: 'Languages', text: 'English, German, Chinese', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'German',
        level: 6,
      },
      {
        name: 'Chinese',
        level: 10,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'Kotlin',
        level: 8,
      },
    ],
  },
  {
    name: 'Technologies',
    skills: [
      {
        name: 'Large Language Models',
        level: 8,
      },
      {
        name: 'Machine Learning',
        level: 9,
      },
      {
        name: 'React',
        level: 7,
      },
    ],
  },
  {
    name: 'Tools & Frameworks',
    skills: [
      {
        name: 'Git',
        level: 9,
      },
      {
        name: 'Docker',
        level: 7,
      },
      {
        name: 'UMLS',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'MedKGC (Medical Knowledge Graph Construction)',
    description: 'Master thesis project leveraging LLMs for biomedical knowledge extraction with NER, Entity Normalization, and Relation Extraction.',
    url: 'https://huggingface.co/spaces/hanbinChen/medKGC',
    image: medkgcImage,
  },
  {
    title: 'Connect Four (Java game)',
    description: 'Connect Four game in Java featuring multiple AI difficulty levels using MinMax algorithm and MVC architecture.',
    url: 'https://gitlab.com/hanbin.9797/viergewinnt',
    image: playingImage,
  },
  {
    title: 'Trading Data Visualization Dashboard',
    description: 'Responsive React financial dashboard with real-time data visualization using lightweight-charts.',
    url: 'https://github.com/hanbinChen97/react-ranking-page',
    image: tradingBoardImage,
  },
  {
    title: 'VCTEVA (Esports Manager Challenge)',
    description: 'A chatbot system using LLMs and RAG for Valorant esports data analysis, player stats, and team building.',
    url: 'https://github.com/Kleinpenny/VCTEVA',
    image: vctEvaImage,
  },
  {
    title: 'Should I stay or should I go (Android App)',
    description: 'Android application in Kotlin that provides personalized pub recommendations using Google Maps API.',
    url: 'https://github.com/JohannHalley/SISSI',
    image: sissiImage,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'March 2025',
    location: 'RWTH Aachen University',
    title: 'Master of Science in Computer Science',
    content: <p>Specialized in Large Language Models and Medical Knowledge Extraction.</p>,
  },
  {
    date: 'September 2020',
    location: 'Fachhochschule Hannover (HsH)',
    title: 'Bachelor of Science in Applied Computer Science',
    content: <p>Strong foundation in Software Engineering and Computer Science.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2024 - March 2025',
    location: 'MedKGC (Medical Knowledge Graph Construction)',
    title: 'Research Assistant',
    content: (
      <p>
        Master thesis project focusing on leveraging Large Language Models (LLMs) for biomedical knowledge extraction.
        Developed an end-to-end pipeline for Named Entity Recognition (NER), Entity Normalization (NEN), and Relation Extraction.
      </p>
    ),
  },
  {
    date: 'March 2023 - Present',
    location: 'MedAgent',
    title: 'Frontend Developer (Student Assistant)',
    content: (
      <p>
        Developed the frontend using TypeScript, ensuring a robust and scalable codebase. Designed interactive
        chat components using React, enhancing user interaction. Integrated internationalization (i18n) to support
        multiple languages including English, Chinese, and German.
      </p>
    ),
  },
  {
    date: 'September 2021 - February 2023',
    location: 'KlimDim (Adaptation of dimensioning to climate change)',
    title: 'Student Assistant',
    content: (
      <p>
        Analyzed climate data with Python/Pandas and visualized results using Matplotlib/Seaborn. 
        Utilized Git for version control and Docker for containerized development environment.
      </p>
    ),
  },
];

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/hanbinChen97'},
  {label: 'GitLab', Icon: GitLabIcon, href: 'https://gitlab.com/hanbin.9797'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hanbin-chen/'},
];
