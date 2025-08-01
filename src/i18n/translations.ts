export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    name: string;
    description: {
      intro: string;
      education: string;
    };
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
    skills: string;
  };
  skills: {
    programmingLanguages: string;
    frameworks: string;
    databases: string;
    tools: string;
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
      description: {
        intro:
          "I'm a Computer Science Graduate and LLM Researcher, passionate about exploring the intersection of data science, process mining, and AI technologies.",
        education:
          "Master's student at RWTH Aachen with research focus on Large Language Models for medical applications.",
      },
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
      skills: "Skills",
    },
    skills: {
      programmingLanguages: "Programming Languages",
      frameworks: "Frameworks & Libraries",
      databases: "Databases",
      tools: "Tools & Technologies",
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
      description: {
        intro:
          "Ich bin ein Informatik-Absolvent und LLM-Forscher, leidenschaftlich daran interessiert, die Schnittstelle zwischen Datenwissenschaft, Process Mining und KI-Technologien zu erkunden.",
        education:
          "Masterstudent an der RWTH Aachen mit Forschungsschwerpunkt auf Large Language Models für medizinische Anwendungen.",
      },
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
      skills: "Fähigkeiten",
    },
    skills: {
      programmingLanguages: "Programmiersprachen",
      frameworks: "Frameworks & Bibliotheken",
      databases: "Datenbanken",
      tools: "Tools & Technologien",
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
      description: {
        intro:
          "我是一名计算机科学毕业生和大语言模型研究员，热衷于探索数据科学、流程挖掘和人工智能技术的交叉领域。",
        education: "亚琛工业大学硕士生，研究重点是医疗应用中的大语言模型。",
      },
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
      skills: "技能",
    },
    skills: {
      programmingLanguages: "编程语言",
      frameworks: "框架和库",
      databases: "数据库",
      tools: "工具和技术",
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
