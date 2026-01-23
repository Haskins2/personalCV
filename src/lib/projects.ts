export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  secondImage?: string;
  category: string;
  date: string;
  githubUrl?: string;
  link?: string;
  slug?: string;
  projectDescription?: string;
  additionalImage?: string;
  secondDescription?: string;
  presentationPath?: string;
  technicalDetails?: {
    technologies: string[];
    challenges: string[];
    results: string[];
    overview?: string;
    architecture?: string;
  };
}
