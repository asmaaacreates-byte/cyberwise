import { Course, Feature, Testimonial, Stat } from './types';

export const COURSES: Course[] = [
  {
    id: "digital-marketing",
    title: "AI-Driven Digital Marketing",
    shortDescription: "Learn SEO, social media marketing, performance marketing, content strategy, branding, analytics, and AI-powered marketing tools.",
    fullDescription: "Become an elite marketer ready to deploy automated marketing systems. Master advanced SEO frameworks, predictive content analytics, viral social campaign mechanics, meta & Google paid algorithm navigation, and next-gen AI tools for hyper-personalized consumer engagement.",
    duration: "6 Months",
    badge: "Most Popular",
    modules: [
      "AI Copywriting & Prompt Engineering",
      "Search Engine Optimization (SEO) Masterclass",
      "Performance & Programmatic Advertising (Meta, Google, TikTok)",
      "Social Media Architecture & Community Building",
      "Analytics, Attribution modeling & Bi-dashboards"
    ],
    skillsGained: ["AI Copywriting", "SEO Audit", "Meta Ads", "Google Analytics 4", "Growth Hacking"],
    careerPaths: ["Digital Marketing Specialist", "Performance Marketer", "SEO Manager", "AI Marketing Architect"],
    icon: "Megaphone",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "videography",
    title: "Professional Videography",
    shortDescription: "Master camera techniques, cinematic storytelling, video editing, color grading, and professional production workflows.",
    fullDescription: "From visual design theory to broadcast-ready output. This comprehensive program gives you direct physical custody of premium cinema gears, high-end editing desks, sound design consoles, and DaVinci Resolve color suites to craft immersive, commercial-grade reels.",
    duration: "6 Months",
    badge: "Practical Focus",
    modules: [
      "Cinema Camera Operation & Lighting Mechanics",
      "The Art of Visual Storytelling & Storyboarding",
      "Post-Production Suite: Adobe Premiere Pro",
      "Colorist Workflows in DaVinci Resolve",
      "Audio Capture, Sound Design & Cinematic Foley"
    ],
    skillsGained: ["Camera Rig Setup", "Studio Lighting", "Premiere Pro", "DaVinci Resolve", "Cinematic Composition"],
    careerPaths: ["Cinematographer", "Video Editor", "Creative Director", "YouTube Production Consultant"],
    icon: "Camera",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Business Growth",
    shortDescription: "Learn online store management, product marketing, customer engagement, and strategies for building successful digital businesses.",
    fullDescription: "Construct and scale a high-converting global digital marketplace from scratch. Learn technical store architectures, logistics fulfillment automation, localized payment gateways, hyper-targeted social ad spent, and automated customer lifetime value loops.",
    duration: "4 Months",
    badge: "Entrepreneurship",
    modules: [
      "E-Commerce Architectures (Shopify, WooCommerce)",
      "Dropshipping Logistics & Supply Chain Automation",
      "Product Positioning Strategy & Conversion Optimization",
      "Customer Lifetime Value (CLV) & Email Automation",
      "Payment Gateway Architectures & Cross-Border Compliance"
    ],
    skillsGained: ["Shopify Development", "Dropshipping", "Conversion Rate Optimization", "KLAVIYO Marketing", "Unit Economics"],
    careerPaths: ["E-Commerce Founder", "Shopify Store Architect", "D2C Brand Manager", "Growth Lead"],
    icon: "ShoppingBag",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "spoken-english",
    title: "Spoken English & Communication",
    shortDescription: "Develop fluent English speaking, professional communication, confidence, presentation, and interview skills.",
    fullDescription: "Unlock dynamic career mobility and global market access. Elevate your vocal delivery, standard accents, body vocabulary, boardroom narrative mechanics, live elevator pitch techniques, and mock interview composure.",
    duration: "3 Months",
    badge: "Essential Skill",
    modules: [
      "Phonetics, Accent Neutralization & Intonation",
      "Impulse Communication & Creative Expression",
      "Executive Presentation Strategies",
      "The Boardroom Narrative: CV & LinkedIn Optimization",
      "Simulated High-Stress Interview Conditioning"
    ],
    skillsGained: ["Public Speaking", "Corporate English", "Interview Delivery", "LinkedIn Branding", "Executive Presence"],
    careerPaths: ["International Client Relations", "Public Relations Executive", "Corporate Trainer", "Global Project Coordinator"],
    icon: "MessageSquare",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600"
  }
];

export const FEATURES: Feature[] = [
  {
    id: "curriculum",
    title: "Industry-Relevant Curriculum",
    description: "Engineered specifically to solve real challenges of modern agencies, design studios, and corporations.",
    icon: "BookOpen",
    accentColor: "from-purple-500 to-indigo-500"
  },
  {
    id: "ai-learning",
    title: "AI-Powered Learning",
    description: "Learn to use next-gen language, generative art, and marketing tools ahead of the industry curve.",
    icon: "Cpu",
    accentColor: "from-pink-500 to-rose-500"
  },
  {
    id: "practical",
    title: "Hands-on Practical Training",
    description: "No blank-screen fatigue. Over 85% of your classroom learning is spent working on live screens and equipment.",
    icon: "Hammer",
    accentColor: "from-blue-500 to-cyan-500"
  },
  {
    id: "mentors",
    title: "Expert Trainers & Mentors",
    description: "Learn directly from active digital marketers, certified videographers, and executive coaches.",
    icon: "Users",
    accentColor: "from-violet-500 to-purple-600"
  },
  {
    id: "ugc",
    title: "UGC Accredited Degree Pathways",
    description: "Graduate with globally recognized academic credentials alongside highly robust visual and digital portfolios.",
    icon: "Award",
    accentColor: "from-amber-400 to-orange-600"
  },
  {
    id: "career",
    title: "Career-Oriented Learning",
    description: "Dedicated resume clinics, intensive interview drills, and strategic presentation programs.",
    icon: "TrendingUp",
    accentColor: "from-emerald-500 to-teal-600"
  },
  {
    id: "portfolio",
    title: "Portfolio Development",
    description: "Build an exquisite personal showcase featuring actual commercial-grade campaigns and cinematic videos.",
    icon: "Briefcase",
    accentColor: "from-fuchsia-500 to-purple-600"
  },
  {
    id: "projects",
    title: "Real-World Projects",
    description: "Work with real local and global clients, managing live budgets and premium studio equipment.",
    icon: "Globe",
    accentColor: "from-sky-500 to-indigo-600"
  }
];

export const STATS: Stat[] = [
  { value: "100", label: "Practical Oriented Training", suffix: "%" },
  { value: "15", label: "Global Accreditations", suffix: "+" },
  { value: "25", label: "Expert Boardroom Mentors", suffix: "+" },
  { value: "100", label: "Placement Integration Scheme", suffix: "%" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Akarsh S. Pillai",
    role: "Lead Performance Marketer",
    course: "AI-Driven Digital Marketing",
    feedback: "CyberWise transformed my passion into a professional career. The hands-on, practical training and expert guidance gave me the absolute absolute confidence to enter the digital industry.",
    rating: 5,
    avatar: "AP"
  },
  {
    id: "2",
    name: "Nida Fathima",
    role: "Freelance Cinematic Editor",
    course: "Professional Videography",
    feedback: "The access to premium cinema cameras and Adobe/DaVinci Resolve workshops at CyberWise is exceptional. I went from knowing basic camera tricks to shooting broadcast-ready commercials.",
    rating: 5,
    avatar: "NF"
  },
  {
    id: "3",
    name: "Mohammed Shibil",
    role: "E-Commerce Founder",
    course: "E-Commerce & Business Growth",
    feedback: "They helped me architect my first Shopify storefront and automated dropshipping cycle. I managed to scale to profitable daily runs within just 3 months of graduation!",
    rating: 5,
    avatar: "MS"
  },
  {
    id: "4",
    name: "Riya Susan",
    role: "PR Specialist",
    course: "Spoken English & Communication",
    feedback: "The mock interview drills and accent synchronization training completely stripped away my public speaking anxiety. I successfully cleared my tech PR interview with pristine confidence.",
    rating: 5,
    avatar: "RS"
  }
];

export const FAQS = [
  {
    question: "How do UGC accredited degree pathways work?",
    answer: "Our specialized academy integrates professional vocational skills with recognized university curricula. That means you get to complete actual practical tasks alongside examinations that qualify you for globally credit-approved degrees."
  },
  {
    question: "Do I need prior technical knowledge to enroll?",
    answer: "No. All academic and vocational tracks are engineered from foundation level 0 onwards. Our mentors guide you step-by-step to professional deployment competence."
  },
  {
    question: "What equipment do I need for videography?",
    answer: "We provide all high-end production cameras, physical light grids, and state-of-the-art DaVinci Resolve color panels at our main studio in Perinthalmanna. You only need a laptop for portable work."
  },
  {
    question: "Are there flexible batches for working professionals?",
    answer: "Yes, we offer flexible hybrid, weekend, and evening batches specifically arranged to accommodate busy work routines."
  }
];
