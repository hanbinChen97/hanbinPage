export interface TimelineItemData {
  date: string;
  location: string;
  title: string;
  keywords: string[];
}

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    name: string;
    keywords: string[];
    resumeButton: string;
  };
  about: {
    description: string;
    location: string;
    email: string;
    nationality: string;
    interests: string;
    study: string;
    languages: string;
  };
  portfolio: {
    title: string;
  };
  resume: {
    education: string;
    experience: string;
    educationItems: TimelineItemData[];
    experienceItems: TimelineItemData[];
  };

  footer: {
    copyright: string;
  };
  languages: {
    english: string;
    german: string;
    chinese: string;
  };
}

export const translations: Record<string, Translations> = {
  en: {
    meta: {
      title: "Hanbin Chen - Personal Portfolio",
      description: "Hanbin Chen's personal portfolio and resume",
    },
    hero: {
      name: "I'm Hanbin Chen.",
      keywords: [
        "Computer Science Graduate",
        "LLM Researcher",
        "Data Science",
        "Process Mining",
        "AI Technologies",
        "RWTH Aachen",
        "Medical LLMs",
      ],
      resumeButton: "Resume",
    },
    about: {
      description:
        "Master's student in Computer Science at RWTH Aachen with research focus on Large Language Models for medical applications. Skilled in software development using Java and Kotlin with hands-on experience in building production-ready applications.",
      location: "Location",
      email: "Email",
      nationality: "Nationality",
      interests: "Interests",
      study: "Study",
      languages: "Languages",
    },
    portfolio: {
      title: "Check out some of my work",
    },
    resume: {
      education: "Education",
      experience: "Experience",
      educationItems: [
        {
          date: "2020 - 2025",
          location: "RWTH Aachen University",
          title: "M.Sc. Computer Science",
          keywords: [
            "AI & Machine Learning Focus",
            "Medical LLM Research",
            "Knowledge Graph Construction",
            "Healthcare NLP",
          ],
        },
        {
          date: "2017 - 2020",
          location: "University of Applied Sciences",
          title: "B.Sc. Computer Science",
          keywords: [
            "Process Mining Thesis",
            "Healthcare Workflow Optimization",
            "Software Engineering Fundamentals",
            "Database Systems",
            "Algorithm Design",
          ],
        },
      ],
      experienceItems: [
        {
          date: "2024 - Present",
          location: "RWTH Aachen University",
          title: "Research Assistant",
          keywords: [
            "Medical Knowledge Extraction",
            "LLM Reasoning",
            "Automated Knowledge Graphs",
            "Clinical NLP Pipelines",
          ],
        },
        {
          date: "2023 - 2024",
          location: "Tech Startup",
          title: "Software Developer",
          keywords: [
            "Java Spring Boot Services",
            "Kotlin Microservices",
            "Database Integration",
            "CI/CD Automation",
          ],
        },
        {
          date: "2022 - 2023",
          location: "University Research Lab",
          title: "Student Research Assistant",
          keywords: [
            "Process Mining Analysis",
            "Python Tooling",
            "Healthcare Data Insights",
            "Academic Publications",
          ],
        },
      ],
    },
    footer: {
      copyright: "All rights reserved.",
    },
    languages: {
      english: "English",
      german: "Deutsch",
      chinese: "中文",
    },
  },
  de: {
    meta: {
      title: "Hanbin Chen - Persönliches Portfolio",
      description: "Hanbin Chens persönliches Portfolio und Lebenslauf",
    },
    hero: {
      name: "Ich bin Hanbin Chen.",
      keywords: [
        "Informatik-Absolvent",
        "LLM-Forscher",
        "Data Science",
        "Process Mining",
        "KI-Technologien",
        "RWTH Aachen",
        "Medizinische LLMs",
      ],
      resumeButton: "Lebenslauf",
    },
    about: {
      description:
        "Masterstudent der Informatik an der RWTH Aachen mit Forschungsschwerpunkt auf Large Language Models für medizinische Anwendungen. Erfahren in der Softwareentwicklung mit Java und Kotlin mit praktischer Erfahrung im Bau produktionsbereiter Anwendungen.",
      location: "Standort",
      email: "E-Mail",
      nationality: "Nationalität",
      interests: "Interessen",
      study: "Studium",
      languages: "Sprachen",
    },
    portfolio: {
      title: "Schauen Sie sich einige meiner Arbeiten an",
    },
    resume: {
      education: "Bildung",
      experience: "Erfahrung",
      educationItems: [
        {
          date: "2020 - 2025",
          location: "RWTH Aachen University",
          title: "M.Sc. Informatik",
          keywords: [
            "Schwerpunkt KI & Machine Learning",
            "Forschung zu medizinischen LLMs",
            "Wissensgraph-Aufbau",
            "Healthcare NLP",
          ],
        },
        {
          date: "2017 - 2020",
          location: "Fachhochschule",
          title: "B.Sc. Informatik",
          keywords: [
            "Prozess-Mining Abschlussarbeit",
            "Optimierung klinischer Abläufe",
            "Software Engineering Grundlagen",
            "Datenbanksysteme",
            "Algorithmendesign",
          ],
        },
      ],
      experienceItems: [
        {
          date: "2024 - Heute",
          location: "RWTH Aachen University",
          title: "Wissenschaftlicher Mitarbeiter",
          keywords: [
            "Medizinische Wissensextraktion",
            "LLM-Reasoning",
            "Automatisierte Wissensgraphen",
            "Klinische NLP-Pipelines",
          ],
        },
        {
          date: "2023 - 2024",
          location: "Tech Startup",
          title: "Softwareentwickler",
          keywords: [
            "Java Spring Boot Services",
            "Kotlin Microservices",
            "Datenbankintegration",
            "CI/CD Automatisierung",
          ],
        },
        {
          date: "2022 - 2023",
          location: "Universitäts-Forschungslabor",
          title: "Studentische Hilfskraft",
          keywords: [
            "Prozess-Mining Analysen",
            "Python Werkzeuge",
            "Gesundheitsdaten Insights",
            "Wissenschaftliche Publikationen",
          ],
        },
      ],
    },
    footer: {
      copyright: "Alle Rechte vorbehalten.",
    },
    languages: {
      english: "English",
      german: "Deutsch",
      chinese: "中文",
    },
  },
  zh: {
    meta: {
      title: "陈汉镔 - 个人作品集",
      description: "陈瀚斌的个人作品集和简历",
    },
    hero: {
      name: "我是陈汉镔。",
      keywords: [
        "计算机科学",
        "大语言模型研究",
        "数据科学",
        "流程挖掘",
        "人工智能",
        "亚琛工业大学",
        "医疗场景",
      ],
      resumeButton: "简历",
    },
    about: {
      description:
        "亚琛工业大学计算机科学硕士生，研究重点是医疗应用中的大语言模型。熟练掌握Java和Kotlin软件开发，具有构建生产就绪应用程序的实践经验。",
      location: "位置",
      email: "邮箱",
      nationality: "国籍",
      interests: "兴趣",
      study: "学习",
      languages: "语言",
    },
    portfolio: {
      title: "查看我的一些作品",
    },
    resume: {
      education: "教育",
      experience: "经验",
      educationItems: [
        {
          date: "2020 - 2025",
          location: "亚琛工业大学",
          title: "计算机科学硕士",
          keywords: [
            "人工智能与机器学习方向",
            "医疗大模型研究",
            "知识图谱构建",
            "医疗场景NLP",
          ],
        },
        {
          date: "2017 - 2020",
          location: "应用科学大学",
          title: "计算机科学学士",
          keywords: [
            "流程挖掘毕业课题",
            "医疗流程优化",
            "软件工程基础",
            "数据库系统",
            "算法设计",
          ],
        },
      ],
      experienceItems: [
        {
          date: "2024 - 至今",
          location: "亚琛工业大学",
          title: "科研助理",
          keywords: [
            "医疗知识抽取",
            "大模型推理",
            "自动化知识图谱",
            "临床NLP流程",
          ],
        },
        {
          date: "2023 - 2024",
          location: "科技初创公司",
          title: "软件开发工程师",
          keywords: [
            "Java Spring Boot服务",
            "Kotlin微服务",
            "数据库集成",
            "CI/CD自动化",
          ],
        },
        {
          date: "2022 - 2023",
          location: "大学研究实验室",
          title: "学生科研助理",
          keywords: [
            "流程挖掘分析",
            "Python工具开发",
            "医疗数据洞察",
            "学术发表",
          ],
        },
      ],
    },
    footer: {
      copyright: "版权所有。",
    },
    languages: {
      english: "English",
      german: "Deutsch",
      chinese: "中文",
    },
  },
};

export function getTranslations(locale: string): Translations {
  return translations[locale] || translations.en;
}
