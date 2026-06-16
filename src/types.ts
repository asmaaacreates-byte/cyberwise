export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  modules: string[];
  skillsGained: string[];
  careerPaths: string[];
  icon: string; // Lucide icon name
  image: string; // Path or query URL
  badge?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  accentColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course: string;
  feedback: string;
  rating: number;
  avatar: string; // Initials or public/generated URL
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}
