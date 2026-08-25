import type { ReactNode } from "react";
import Image from "next/image";
import { ReactIcon } from "@/public/icons";
import {
  AndroidIcon,
  AnalyticsIcon,
  AngularIcon,
  AwsIcon,
  AzureIcon,
  BraveIcon,
  CloudflareIcon,
  DjangoIcon,
  DockerIcon,
  DotNetIcon,
  FastApiIcon,
  FigmaIcon,
  FirebaseIcon,
  FlutterIcon,
  FramerIcon,
  GithubIcon,
  GitIcon,
  GitlabIcon,
  GoogleCloudIcon,
  HotjarIcon,
  HuggingFaceIcon,
  IosIcon,
  JavaScriptIcon,
  JenkinsIcon,
  KotlinIcon,
  LangChainIcon,
  LinuxIcon,
  MetaIcon,
  MongoDbIcon,
  MysqlIcon,
  NextJsIcon,
  NodeJsIcon,
  OllamaIcon,
  OpenAiIcon,
  PostgreSqlIcon,
  ReactNativeIcon,
  RestApiIcon,
  SqliteIcon,
  SupabaseIcon,
  SwiftIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  VercelIcon,
  WordPressIcon,
} from "@/public/icons";
export type TechnologyCategory =
  | "frontend"
  | "backend"
  | "devops"
  | "analytics"
  | "ai"
  | "mobile-app"
  | "cloud"
  | "design";

export type TechnologyFilter =
  | "all"
  | TechnologyCategory;

export type TechnologyPillItem = {
  label: string;
  icon: ReactNode;
  category: TechnologyCategory;
};

export type TechnologyOption = {
  label: string;
  value: TechnologyFilter;
};

export const technologyOptions: TechnologyOption[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Frontend",
    value: "frontend",
  },
  {
    label: "Backend",
    value: "backend",
  },
  {
    label: "Devops",
    value: "devops",
  },
  {
    label: "Analytics",
    value: "analytics",
  },
  {
    label: "AI",
    value: "ai",
  },
  {
    label: "Mobile App",
    value: "mobile-app",
  },
  {
    label: "Cloud",
    value: "cloud",
  },
  {
    label: "Design",
    value: "design",
  },
];

export const technologies: TechnologyPillItem[] = [
  // Frontend
  {
    label: "React",
    icon: <ReactIcon />,
    category: "frontend",
  },
  {
    label: "Next.js",
    icon: <NextJsIcon />,
    category: "frontend",
  },
  {
    label: "JavaScript",
    icon: <JavaScriptIcon />,
    category: "frontend",
  },
  {
    label: "TypeScript",
    icon: <TypeScriptIcon />,
    category: "frontend",
  },
  {
    label: "Tailwind CSS",
    icon: <TailwindCssIcon />,
    category: "frontend",
  },
  {
    label: "Angular",
    icon: <AngularIcon />,
    category: "frontend",
  },
  {
    label: "WordPress",
    icon: <WordPressIcon />,
    category: "frontend",
  },
  {
    label: "Brave",
    icon: <BraveIcon />,
    category: "frontend",
  },

  // Backend
  {
    label: "Node.js",
    icon: <NodeJsIcon />,
    category: "backend",
  },
  {
    label: ".NET",
    icon: <DotNetIcon />,
    category: "backend",
  },
  {
    label: "NestJS",
    icon: <NodeJsIcon />,
    category: "backend",
  },
  {
    label: "MongoDB",
    icon: <MongoDbIcon />,
    category: "backend",
  },
  {
    label: "SQLite",
    icon: <SqliteIcon />,
    category: "backend",
  },
  {
    label: "Supabase",
    icon: <SupabaseIcon />,
    category: "backend",
  },
  {
    label: "PostgreSQL",
    icon: <PostgreSqlIcon />,
    category: "backend",
  },
  {
    label: "MySQL",
    icon: <MysqlIcon />,
    category: "backend",
  },
  {
    label: "Django",
    icon: <DjangoIcon />,
    category: "backend",
  },
  {
    label: "FastAPI",
    icon: <FastApiIcon />,
    category: "backend",
  },
  {
    label: "REST API",
    icon: <RestApiIcon />,
    category: "backend",
  },
  {
    label: "Firebase",
    icon: <FirebaseIcon />,
    category: "backend",
  },

  // DevOps
  {
    label: "Git",
    icon: <GitIcon />,
    category: "devops",
  },
  {
    label: "GitHub",
    icon: <GithubIcon />,
    category: "devops",
  },
  {
    label: "GitLab",
    icon: <GitlabIcon />,
    category: "devops",
  },
  {
    label: "Docker",
    icon: <DockerIcon />,
    category: "devops",
  },
  {
    label: "Linux",
    icon: <LinuxIcon />,
    category: "devops",
  },
  {
    label: "Jenkins",
    icon: <JenkinsIcon />,
    category: "devops",
  },
  {
    label: "Vercel",
    icon: <VercelIcon />,
    category: "devops",
  },

  // Analytics
  {
    label: "Google Analytics",
    icon: <AnalyticsIcon />,
    category: "analytics",
  },
  {
    label: "Hotjar",
    icon: <HotjarIcon />,
    category: "analytics",
  },
  {
    label: "Meta",
    icon: <MetaIcon />,
    category: "analytics",
  },

  // AI
  {
    label: "OpenAI",
    icon: <OpenAiIcon />,
    category: "ai",
  },
  {
    label: "Ollama",
    icon: <OllamaIcon />,
    category: "ai",
  },
  {
    label: "LangChain",
    icon: <LangChainIcon />,
    category: "ai",
  },
  {
    label: "Hugging Face",
    icon: <HuggingFaceIcon />,
    category: "ai",
  },

  // Mobile App
  {
    label: "React Native",
    icon: <ReactNativeIcon />,
    category: "mobile-app",
  },
  {
    label: "Swift",
    icon: <SwiftIcon />,
    category: "mobile-app",
  },
  {
    label: "Kotlin",
    icon: <KotlinIcon />,
    category: "mobile-app",
  },
  {
    label: "iOS",
    icon: <IosIcon />,
    category: "mobile-app",
  },
  {
    label: "Flutter",
    icon: <FlutterIcon />,
    category: "mobile-app",
  },
  {
    label: "Android",
    icon: <AndroidIcon />,
    category: "mobile-app",
  },

  // Cloud
  {
    label: "AWS",
    icon: <AwsIcon />,
    category: "cloud",
  },
  {
    label: "Azure",
    icon: <AzureIcon />,
    category: "cloud",
  },
  {
    label: "Google Cloud",
    icon: <GoogleCloudIcon />,
    category: "cloud",
  },
  {
    label: "Cloudflare",
     icon: (
    <Image
      src="/images/cloudflarimage.svg"
      alt="Cloudflare"
      width={20}
      height={20}
      className="h-5 w-5 object-contain"
    />
  ),
    category: "cloud",
  },

  // Design
  {
    label: "Figma",
    icon: <FigmaIcon />,
    category: "design",
  },
  {
    label: "Framer",
    icon: <FramerIcon />,
    category: "design",
  },
];