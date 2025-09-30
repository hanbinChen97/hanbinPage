import emailxImage from "../images/portfolio/emailx.png";
import medkgcImage from "../images/portfolio/medkgc.png";
import n8nImage from "../images/portfolio/n8n.png";
import playingImage from "../images/portfolio/playing.png";
import sissiImage from "../images/portfolio/sissi.png";
import supaCImage from "../images/portfolio/supaC.png";
import tradingBoardImage from "../images/portfolio/tradingBoard.png";
import vctEvaImage from "../images/portfolio/vctEva.png";
import {PortfolioItem} from "./dataDef";

export const portfolioItems: PortfolioItem[] = [
  {
    title: "EmailX",
    description:
      "A modern intelligent email management SaaS platform built with Next.js, integrating Azure OpenAI technology to provide users with an AI smart assistant services.",
    url: "https://github.com/hanbinChen97/emailx",
    image: emailxImage,
  },
  {
    title: "SupaC",
    description: "SaaS platform for appointment scheduling system.",
    url: "https://github.com/hanbinChen97/saas-starter/tree/main/app/superc",
    image: supaCImage,
  },
  {
    title: "n8n Job Application Tracker",
    description:
      "After applying for a job, you usually receive a confirmation email. This workflow will help you to trace your job application in Notion database from that email.",
    url: "https://github.com/hanbinChen97/n8n-workflow/tree/main",
    image: n8nImage,
  },
  {
    title: "MedKGC (Medical Knowledge Graph Construction)",
    description:
      "Master thesis project leveraging LLMs for biomedical knowledge extraction with NER, Entity Normalization, and Relation Extraction.",
    url: "https://huggingface.co/spaces/hanbinChen/medKGC",
    image: medkgcImage,
  },
  {
    title: "Connect Four (Java game)",
    description:
      "Connect Four game in Java featuring multiple AI difficulty levels using MinMax algorithm and MVC architecture.",
    url: "https://gitlab.com/hanbin.9797/viergewinnt",
    image: playingImage,
  },
  {
    title: "Trading Data Visualization Dashboard",
    description:
      "Responsive React financial dashboard with real-time data visualization using lightweight-charts.",
    url: "https://github.com/hanbinChen97/react-ranking-page",
    image: tradingBoardImage,
  },
  {
    title: "VCTEVA (Esports Manager Challenge)",
    description:
      "A chatbot system using LLMs and RAG for Valorant esports data analysis, player stats, and team building.",
    url: "https://github.com/Kleinpenny/VCTEVA",
    image: vctEvaImage,
  },
  {
    title: "Should I stay or should I go (Android App)",
    description:
      "Android application in Kotlin that provides personalized pub recommendations using Google Maps API.",
    url: "https://github.com/JohannHalley/SISSI",
    image: sissiImage,
  },
];
