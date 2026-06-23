export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link: string;
  linkLabel: string;
  image?: string;
  category: "mobile" | "web" | "ux" | "other";
};

export const projects: Project[] = [
  {
    id: "thesis",
    title: "Managing Ads & Paywalls",
    subtitle: "Bachelor's Thesis",
    description:
      "A reusable monetization solution for React Native apps implementing a freemium model. Free users see banner ads via Google AdMob, while subscribers get an ad-free experience managed through RevenueCat. Subscription logic, ad components, and paywall are separated into independent modules for easy maintenance.",
    tags: ["React Native", "Expo", "RevenueCat", "Google AdMob", "iOS"],
    link: "https://www.theseus.fi/handle/10024/915194",
    linkLabel: "Read Thesis",
    image: "/images/projects/thesis.jpg",
    category: "mobile",
  },
  {
    id: "financial-dashboard",
    title: "Financial Dashboard",
    subtitle: "Full Stack Web App",
    description:
      "A full-stack financial dashboard built during the Full Stack Development course using the Next.js App Router tutorial. Features user authentication, invoice management with CRUD operations, and protected dashboard views. Live demo available.",
    tags: ["Next.js", "React", "PostgreSQL", "Auth"],
    link: "https://nextjs-dashboard-red-nu-95.vercel.app/",
    linkLabel: "Live Demo",
    image: "/images/projects/financial-dashboard.jpg",
    category: "web",
  },
  {
    id: "pokegene",
    title: "PokéGene",
    subtitle: "Mobile App",
    description:
      "An interactive mobile app where users can generate random Pokémon from the original 150, search for specific ones, and save them to a personal collection. Built with Ionic React and Firebase for authentication and storage.",
    tags: ["Ionic React", "Firebase", "Capacitor", "REST API"],
    link: "https://github.com/roynykanen/Labwork-6",
    linkLabel: "View on GitHub",
    image: "/images/projects/pokegene.jpg",
    category: "mobile",
  },
  {
    id: "movie-app",
    title: "Movie App",
    subtitle: "Mobile App",
    description:
      "A mobile application that lets users search for movies, series, or episodes using the OMDb API. Features dynamic filtering by content type and a details view with comprehensive information about each result.",
    tags: ["Ionic React", "OMDb API", "TypeScript"],
    link: "https://github.com/roynykanen/movieApp",
    linkLabel: "View on GitHub",
    image: "/images/projects/movie-app.jpg",
    category: "mobile",
  },
  {
    id: "timekeeper",
    title: "TimeKeeper",
    subtitle: "UX/UI Prototype",
    description:
      "A time tracking app concept tailored for nursing homes to improve shift management and task tracking among care staff. Developed as a group project in the Defining and Designing a Software Product course, featuring a full interactive prototype.",
    tags: ["Figma", "UX Design", "Prototyping", "Healthcare"],
    link: "https://www.figma.com/proto/53Z2mVNso4c0YufNf8vDW2/App-Design-and-Prototyping?node-id=6025-793&p=f&t=DYFsWiAUIsd4mLY1-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6025%3A758",
    linkLabel: "View Prototype",
    image: "/images/projects/timekeeper.jpg",
    category: "ux",
  },
  {
    id: "fridgemate",
    title: "FridgeMate",
    subtitle: "UX/UI Prototype",
    description:
      "A food app prototype designed to help users reduce food waste and simplify meal planning. Created as a group project during the Modelling a Digital Service course, focused on practical everyday utility for students and households.",
    tags: ["Figma", "UX Design", "Prototyping", "Service Design"],
    link: "https://www.figma.com/proto/bOCF7dQQUQVk8S7xQyR9OZ/FridgeMateApp?node-id=0-1&t=uH7I72wcuANpplJr-1",
    linkLabel: "View Prototype",
    image: "/images/projects/fridgemate.jpg",
    category: "ux",
  },
  {
    id: "vaatepuu",
    title: "Vaatepuu",
    subtitle: "UX Research Project",
    description:
      "A UX design challenge for a clothing library's self-service borrowing system. As a group, we conducted user research to uncover real user needs and delivered genuinely new perspectives to the client through a structured UX project portfolio.",
    tags: ["UX Research", "Figma", "User-centered Design"],
    link: "https://www.figma.com/slides/H41BBq3xg0l60AlezhfApD/Vaatelainaamo-(Copy)?node-id=133-36&t=7N6TqUcbz3c5FcNy-1",
    linkLabel: "View Project",
    image: "/images/projects/vaatepuu.jpg",
    category: "ux",
  },
  {
    id: "weather-forecast",
    title: "Weather Forecast",
    subtitle: "Web App",
    description:
      "A weather app showing city name, weather description, temperature range, wind speed, humidity, and air pressure. Built with vanilla JavaScript and the OpenWeatherMap API, styled with Font Awesome icons and Google Fonts.",
    tags: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    link: "https://js-project-2a-weather-forecast-app.netlify.app/",
    linkLabel: "Live Demo",
    image: "/images/projects/weather-forecast.jpg",
    category: "web",
  },
  {
    id: "weather-forecast-jquery",
    title: "Weather Forecast jQuery",
    subtitle: "Web App",
    description:
      "A jQuery-based version of the weather forecast app built during the Dynamic Web Applications with JavaScript course. Uses Bootstrap for layout and Bootstrap Icons for visual elements.",
    tags: ["jQuery", "Bootstrap", "JavaScript", "OpenWeatherMap API"],
    link: "https://projekti-2b-jquery-sovellus.netlify.app/",
    linkLabel: "Live Demo",
    image: "/images/projects/weather-forecast-jquery.jpg",
    category: "web",
  },
  {
    id: "todo-list",
    title: "To-Do List",
    subtitle: "Web App",
    description:
      "A to-do list app where users can add tasks, mark them as complete, or delete them. Built with vanilla JavaScript using DOM scripting and forms.",
    tags: ["HTML", "CSS", "JavaScript", "DOM"],
    link: "https://js-project-1-to-do-list.netlify.app/",
    linkLabel: "Live Demo",
    image: "/images/projects/todo-list.jpg",
    category: "web",
  },
  {
    id: "travel-greece",
    title: "Travel Greece",
    subtitle: "Static Website",
    description:
      "My first ever web project — a travel-focused static website exploring the beauty of Greece. Features a Bootstrap responsive layout, image carousel, destination cards, and booking/contact forms.",
    tags: ["Bootstrap", "HTML", "CSS", "JavaScript"],
    link: "https://roynykanen.github.io/GitHub_harjoitus/WS12/",
    linkLabel: "Live Demo",
    image: "/images/projects/travel-greece.jpg",
    category: "web",
  },
  {
    id: "lammin",
    title: "Lammin Säästöpankki",
    subtitle: "Digital Marketing",
    description:
      "A digital marketing and sales plan for customer acquisition created as part of the Digital Marketing and Sales course. Includes two advertisements — an Instagram ad targeting young adults interested in saving/investing, and a Facebook ad directed at entrepreneurs.",
    tags: ["Digital Marketing", "Social Media Ads", "Campaign Design"],
    link: "#",
    linkLabel: "View Project",
    image: "/images/projects/lammin.jpg",
    category: "other",
  },
];
