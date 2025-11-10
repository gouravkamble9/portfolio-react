import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  MapPin,
  Sun,
  Moon,
} from "lucide-react";
import { useState, useEffect, createContext, useContext } from "react";
import "./App.css";

// Theme Context
const ThemeContext = createContext();

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="p-2 h-9 w-9 rounded-full bg-background hover:bg-accent border border-border transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-foreground" />
      ) : (
        <Sun className="h-4 w-4 text-foreground" />
      )}
    </Button>
  );
};

function Portfolio() {

  const [experience, setExperience] = useState("");

  useEffect(() => {
    // 👉 Set your joining date here
    const joiningDate = new Date("2024-01-16"); // YYYY-MM-DD
    const today = new Date();

    let years = today.getFullYear() - joiningDate.getFullYear();
    let months = today.getMonth() - joiningDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    setExperience(`${years}.${months} years`);
  }, []);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-6">
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 auto-cols-min">
          {/* About Me - Tall Card (Top Left) */}
          <Card
            id="about"
            className="md:col-span-2 lg:col-span-2 md:row-span-1 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none transition-all duration-300"
          >
            <div className="flex flex-col h-full relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center">
                  {/* <span className="text-2xl font-bold text-primary font-sans">FM</span> */}
                  <img
                    src="https://res.cloudinary.com/dyhgopnii/image/upload/v1757646870/image_tyv5gt.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-card-foreground font-sans">
                    Gourav Kamble
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-4 h-4" />
                    <span className="font-sans">Pune</span>
                  </div>
                </div>
              </div>
              <p className="text-card-foreground leading-relaxed font-sans text-justify flex-1 text-sm">
                I’m a frontend developer with <b>{experience}</b> of
                professional experience building modern, dynamic, and scalable web
                applications. I specialize in <b>React, Angular, Tailwind CSS, and Strapi</b>,
                and I’ve worked on projects ranging from AI-powered products like chatbots,
                and trip planners,to custom websites for businesses and
                educational institutes. My focus is on creating clean, minimalist, and
                user-friendly interfaces while ensuring performance and scalability. I also
                enjoy exploring <b>Generative AI and UI component libraries</b>, constantly
                expanding my skill set to stay ahead in the fast-evolving tech landscape.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge
                  variant="secondary"
                  className="font-sans text-xs rounded-full"
                >
                  Frontend Developer
                </Badge>
                <Badge
                  variant="secondary"
                  className="font-sans text-xs rounded-full"
                >
                  AI Explorer
                </Badge>
              </div>
            </div>
          </Card>

          {/* Experience - Medium Card (Top Middle) */}
          <Card
            id="experience"
            className="md:col-span-2 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none transition-all duration-300"
          >
            <div className="relative z-10">
              <h3 className="font-bold text-card-foreground mb-4 font-sans">
                Experience
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary font-sans">
                      OIT
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-card-foreground font-sans text-sm">
                      Frontend Developer
                    </h4>
                    <p className="text-xs text-muted-foreground font-sans">
                      OIT Technology PVT LTD. Pune • 2024 - Present
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-card-foreground leading-relaxed font-sans text-justify flex-1 text-sm">
                In my current role at OIT Technology, I contribute to building
                dynamic web applications using React and Angular. I focus on creating
                responsive and user-friendly interfaces, collaborating closely with
                designers and backend developers to deliver high-quality products.
              </p>
            </div>
          </Card>

          <div className="flex flex-col gap-6">
          {/* Social Links - Square Card (Bottom Left) */}
          <Card
            id="contact"
            className="md:col-span-1 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none transition-all duration-300"
          >
            <div className="relative z-10">
              <h3 className="font-bold text-card-foreground mb-4 font-sans">
                Connect
              </h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/gouravkamble9"
                  target="_blank"
                  className="flex items-center gap-3 text-card-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-sans">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/gourav-kamble/"
                  target="_blank"
                  className="flex items-center gap-3 text-card-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-sans">LinkedIn</span>
                </a>
                <a
                  href="https://x.com/gouravkamble9"
                  target="_blank"
                  className="flex items-center gap-3 text-card-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                >
                  <Twitter className="w-4 h-4" />
                  <span className="text-sm font-sans">Twitter</span>
                </a>
                <a
                  href="mailto:gouravkamble9@gmail.com"
                  className="flex items-center gap-3 text-card-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-sans">Email</span>
                </a>
              </div>
            </div>
          </Card>

          
          {/* Status - Square Card (Top Right) */}
          <Card className="md:col-span-1 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none transition-all duration-300">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <h3 className="font-semibold text-card-foreground font-sans">
                  Available
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 font-sans">
                Open to new opportunities
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground font-sans">
                    Projects
                  </span>
                  <span className="font-semibold text-card-foreground font-sans">
                    10+
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground font-sans">
                    Experience
                  </span>
                  <span className="font-semibold text-card-foreground font-sans">
                    {experience}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          </div>

          {/* Selected Projects - Large Card (Bottom Right) */}
          <Card
            id="projects"
            className="md:col-span-2 lg:col-span-3 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none transition-all duration-300"
          >
            <div className="relative z-10">
              <h3 className="font-bold text-card-foreground mb-4 font-sans">
                Recent Projects
              </h3>
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-card-foreground font-sans">
                     Custom AI Chatbot Builder
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2 font-sans">
                      Designed and built a platform for generating AI-powered chatbots with user-defined personalities and behaviors, featuring easy website integration via embeddable scripts.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge
                        variant="outline"
                        className="text-xs font-sans rounded-full"
                      >
                        React
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs font-sans rounded-full"
                      >
                        Strapi
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs font-sans rounded-full"
                      >
                        PostgreSQL
                      </Badge>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="ml-3 font-sans bg-transparent hover:bg-primary/10 hover:scale-105 transition-all duration-200 rounded-full"
                  >
                    <a target="_blank" className="w-4 h-4"  href="https://botlynk.netlify.app">
                    <ExternalLink />
                    </a>
                  </Button>
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-card-foreground font-sans">
                      AI Trip Planner
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2 font-sans">
                      Developed a personalized trip planner using AI for itinerary generation, integrating React, Tailwind CSS, Google Gemini APIs.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge
                        variant="outline"
                        className="text-xs font-sans rounded-full"
                      >
                        React Js
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs font-sans rounded-full"
                      >
                        Strapi
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs font-sans rounded-full"
                      >
                        PostgreSQL
                      </Badge>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="ml-3 font-sans bg-transparent hover:bg-primary/10 hover:scale-105 transition-all duration-200 rounded-full"
                  >
                    <a href="https://lively-truffle-7b6621.netlify.app/" target="_blank">
                    <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-card-foreground font-sans">
                      Doctor Appointment System
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2 font-sans">
                      Built a user-friendly system for scheduling and managing doctor appointments, using React, Tailwind CSS, Strapi with real-time notifications
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge
                        variant="outline"
                        className="text-xs font-sans rounded-full"
                      >
                        React Js
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs font-sans rounded-full"
                      >
                        Strapi
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs font-sans rounded-full"
                      >
                        PostgreSQL
                      </Badge>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="ml-3 font-sans bg-transparent hover:bg-primary/10 hover:scale-105 transition-all duration-200 rounded-full"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Skills - Medium Card */}
          <Card
            id="skills"
            className="md:col-span-2 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none transition-all duration-300"
          >
            <div className="relative z-10">
              <h3 className="font-bold text-card-foreground mb-4 font-sans">
                Skills
              </h3>
              <div className="space-y-6">
                {/* Frontend */}
                <div>
                  <h4 className="text-sm font-semibold text-card-foreground mb-2 font-sans">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">HTML</Badge>
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">CSS</Badge>
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">JavaScript</Badge>
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">React.js</Badge>
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">Angular</Badge>
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">Tailwind CSS</Badge>
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">SCSS</Badge>
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h4 className="text-sm font-semibold text-card-foreground mb-2 font-sans">
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">Strapi</Badge>

                    <Badge variant="secondary" className="text-xs font-sans rounded-full">Node.js</Badge>
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">SQL</Badge>
                  </div>
                </div>

                {/* Programming Languages */}
                <div>
                  <h4 className="text-sm font-semibold text-card-foreground mb-2 font-sans">
                    Programming Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">C</Badge>
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">C++</Badge>
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">Python</Badge>
                  </div>
                </div>

                {/* Cloud & Deployment */}
                <div>
                  <h4 className="text-sm font-semibold text-card-foreground mb-2 font-sans">
                    Cloud & Deployment
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">Docker</Badge>
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">Hetzner</Badge>
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">Netlify</Badge>
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-sm font-semibold text-card-foreground mb-2 font-sans">
                    Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">VS Code</Badge>
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">Postman</Badge>
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">Figma</Badge>
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">Git</Badge>
                    <Badge variant="secondary" className="text-xs font-sans rounded-full">GitHub</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Education - Medium Card (Bottom Middle) */}
          <Card
            id="education"
            className="md:col-span-2 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none transition-all duration-300"
          >
            <div className="relative z-10">
              <h3 className="font-bold text-card-foreground mb-4 font-sans">
                Education
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary font-sans">
                      VIT
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-card-foreground font-sans text-sm">
                      B. Tech Computer Engineering
                    </h4>
                    <p className="text-xs text-muted-foreground font-sans">
                      Vishwakarma Institute of Technology, Pune
                      • 2019 - 2023
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary font-sans">
                      TMC
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-card-foreground font-sans text-sm">
                      12th Science
                    </h4>
                    <p className="text-xs text-muted-foreground font-sans">
                      Tatyasaheb Musale Junior College, Kolhapur • 2016 - 2018
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Resume Download - Square Card */}
          <Card
            id="resume"
            className="md:col-span-1 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none transition-all duration-300 flex flex-col items-center justify-start text-start"
          >
            <div className="relative z-10">
              <h3 className="font-bold text-card-foreground mb-4 font-sans">
                Resume
              </h3>{" "}
              <p className="text-sm text-muted-foreground mb-4 font-sans">
                Download my latest resume
              </p>
              <Button
                size="sm"
                variant="default"
                className="font-sans px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                asChild
              >
                <a href={import.meta.env.VITE_RESUME_LINK} target="_blank" rel="noopener noreferrer">
                  Download PDF
                </a>
              </Button>
            </div>
          </Card>

          {/* Publications - Medium Card */}
          <Card
            id="publications"
            className="md:col-span-2 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none transition-all duration-300"
          >
            <div className="relative z-10">
              <h3 className="font-bold text-card-foreground mb-4 font-sans">Publications</h3>
              <div className="space-y-4">

                {/* Publication 1 */}
                <div>
                  <h4 className="font-semibold text-card-foreground font-sans text-sm">
                    Smart Yoga Assistant :SVM based Real Time Pose detection and correction System.
                  </h4>
                  <p className="text-xs text-muted-foreground mb-1 font-sans">
                    IJRITCC  2023
                  </p>
                  <a
                    href="https://ijritcc.org/index.php/ijritcc/article/view/6997"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-sans text-primary hover:underline flex items-center gap-1"
                  >
                    Read More <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>
          </Card>


        </div>

        {/* Footer */}
        {/* <footer className="mt-12 text-center">
          <p className="text-muted-foreground text-sm font-sans">
             • © 2025 •
          </p>
        </footer> */}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
