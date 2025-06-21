"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Analytics } from "@vercel/analytics/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  Home,
  User,
  FileText,
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Calendar,
  MapPin,
  Phone,
  Send,
  ChevronDown,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualizations.",
      tech: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for structuring and scaling React applications for production environments.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["React", "JavaScript", "Architecture"],
    },
    {
      title: "Modern CSS Techniques for Responsive Design",
      excerpt: "Explore the latest CSS features and techniques for creating responsive, mobile-first web designs.",
      date: "2024-01-10",
      readTime: "7 min read",
      tags: ["CSS", "Responsive Design", "Web Development"],
    },
    {
      title: "Getting Started with TypeScript",
      excerpt:
        "A comprehensive guide to TypeScript fundamentals and how it can improve your JavaScript development workflow.",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["TypeScript", "JavaScript", "Development"],
    },
  ]

  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Git",
    "Tailwind CSS",
    "Next.js",
  ]

  const renderHome = () => (
    <div
      className={`space-y-12 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Hero Section */}
      <div className="text-center space-y-6 animate-fade-in-up">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-3 animate-bounce-in">
          <User className="w-16 h-16 text-white" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold mb-2 animate-slide-in-left">John Doe</h1>
          <p className="text-xl text-muted-foreground mb-4 animate-slide-in-right">Full Stack Developer</p>
          <p className="text-lg max-w-2xl mx-auto animate-fade-in-delayed">
            Passionate developer with 5+ years of experience creating modern web applications. I love turning complex
            problems into simple, beautiful solutions.
          </p>
        </div>
        <div className="flex justify-center space-x-4 animate-fade-in-up-delayed">
          <Button
            variant="outline"
            size="icon"
            className="hover:scale-110 transition-transform duration-200 hover:bg-primary hover:text-primary-foreground"
          >
            <Github className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:scale-110 transition-transform duration-200 hover:bg-primary hover:text-primary-foreground"
          >
            <Linkedin className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:scale-110 transition-transform duration-200 hover:bg-primary hover:text-primary-foreground"
          >
            <Twitter className="w-4 h-4" />
          </Button>
        </div>
        <div className="animate-bounce mt-8">
          <ChevronDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>

      {/* About Section */}
      <Card className="transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1 animate-slide-in-left">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>About Me</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="animate-fade-in">
            I'm a passionate full-stack developer with a strong background in modern web technologies. I enjoy creating
            efficient, scalable, and user-friendly applications that solve real-world problems.
          </p>
          <p className="animate-fade-in-delayed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            sharing my knowledge through blog posts and community involvement.
          </p>
          <div className="animate-slide-in-up">
            <h4 className="font-semibold mb-3">Skills & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="hover:scale-105 transition-transform duration-200 hover:bg-primary hover:text-primary-foreground cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card className="transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1 animate-slide-in-right">
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-l-2 border-muted pl-4 space-y-6">
            <div className="transform transition-all duration-300 hover:translate-x-2 animate-fade-in">
              <h4 className="font-semibold">Senior Full Stack Developer</h4>
              <p className="text-sm text-muted-foreground">Tech Company • 2022 - Present</p>
              <p className="mt-2">
                Lead development of multiple web applications using React, Node.js, and cloud technologies. Mentored
                junior developers and improved team productivity by 30%.
              </p>
            </div>
            <div className="transform transition-all duration-300 hover:translate-x-2 animate-fade-in-delayed">
              <h4 className="font-semibold">Frontend Developer</h4>
              <p className="text-sm text-muted-foreground">Startup Inc • 2020 - 2022</p>
              <p className="mt-2">
                Developed responsive web applications and improved user experience. Collaborated with design team to
                implement pixel-perfect interfaces.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderProjects = () => (
    <div
      className={`space-y-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="text-muted-foreground">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:rotate-1 animate-slide-in-up group"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="aspect-video bg-muted overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                {project.title}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech, techIndex) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs hover:scale-105 transition-transform duration-200"
                    style={{ animationDelay: `${techIndex * 50}ms` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 hover:scale-105 transition-transform duration-200"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" className="flex-1 hover:scale-105 transition-transform duration-200">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderBlog = () => (
    <div
      className={`space-y-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4">Blog Posts</h2>
        <p className="text-muted-foreground">Thoughts, tutorials, and insights about web development and technology.</p>
      </div>
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-in-left group cursor-pointer"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <CardTitle className="text-xl hover:text-primary cursor-pointer transition-colors duration-300 group-hover:translate-x-2">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              <CardDescription className="text-base group-hover:text-foreground transition-colors duration-300">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="hover:scale-105 transition-transform duration-200"
                    style={{ animationDelay: `${tagIndex * 50}ms` }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderContact = () => (
    <div
      className={`space-y-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground">
          Have a project in mind? Let's work together to bring your ideas to life.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1 animate-slide-in-left">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300 animate-fade-in">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300 animate-fade-in-delayed">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300 animate-fade-in">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span>San Francisco, CA</span>
            </div>
            <Separator />
            <div className="flex space-x-4 animate-fade-in-up-delayed">
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 transition-transform duration-200 hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 transition-transform duration-200 hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 transition-transform duration-200 hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1 animate-slide-in-right">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="animate-slide-in-up">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>
              <div className="animate-slide-in-up" style={{ animationDelay: "100ms" }}>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>
              <div className="animate-slide-in-up" style={{ animationDelay: "200ms" }}>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>
              <Button
                type="submit"
                className="w-full hover:scale-105 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: "300ms" }}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Analytics />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl hover:scale-105 transition-transform duration-200 cursor-pointer">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => setActiveSection("home")}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 hover:scale-105 ${
                  activeSection === "home"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "hover:bg-muted hover:-translate-y-1"
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => setActiveSection("projects")}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 hover:scale-105 ${
                  activeSection === "projects"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "hover:bg-muted hover:-translate-y-1"
                }`}
              >
                <FolderOpen className="w-4 h-4" />
                <span>Projects</span>
              </button>
              <button
                onClick={() => setActiveSection("blog")}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 hover:scale-105 ${
                  activeSection === "blog"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "hover:bg-muted hover:-translate-y-1"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Blog</span>
              </button>
              <button
                onClick={() => setActiveSection("contact")}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 hover:scale-105 ${
                  activeSection === "contact"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "hover:bg-muted hover:-translate-y-1"
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <select
                value={activeSection}
                onChange={(e) => setActiveSection(e.target.value)}
                className="bg-background border rounded-md px-3 py-1 transition-all duration-300 hover:scale-105"
              >
                <option value="home">Home</option>
                <option value="projects">Projects</option>
                <option value="blog">Blog</option>
                <option value="contact">Contact</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="transition-all duration-500 ease-in-out">
          {activeSection === "home" && renderHome()}
          {activeSection === "projects" && renderProjects()}
          {activeSection === "blog" && renderBlog()}
          {activeSection === "contact" && renderContact()}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 animate-fade-in">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="hover:text-foreground transition-colors duration-300">
              &copy; {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
            <p className="mt-2 hover:text-foreground transition-colors duration-300">
              Built with React, Vite, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
