"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  role: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "ThesISKO - CCIS Institutional Repository System",
    role: "UI/UX Designer/Backend Developer",
    image: "/project1.jpg",
    link: "https://thesisko.online/home"
  },
  {
    title: "Mooditude - Mood-Based Attendance Checker",
    role: "UI/UX Designer",
    image: "/project2.jpg",
    link: "https://www.figma.com/proto/EO1tXjrgViqQNYa3nUjHf6/Mooditude-UI?node-id=5-34&p=f&t=I98763AxqvwtIEkg-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A34"
  }
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-16 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Card key={idx} className="flex flex-col">
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </a>

              <CardContent className="flex-1">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.role}</p>
              </CardContent>

              <CardFooter>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <Button className="transition-transform duration-200 hover:scale-105 hover:bg-red-800">View Project</Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}