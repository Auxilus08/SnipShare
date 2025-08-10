"use client";

import { useState } from "react";
import Header from "@/components/page/header";
import Footer from "@/components/page/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  ExternalLink, 
  Code, 
  Zap, 
  Star, 
  Users, 
  Sparkles,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import Link from "next/link";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { MagicCard } from "@/components/magicui/magic-card";

const demoSnippets = [
  {
    id: "tFOrJEARI2SbxKQR92PF",
    title: "Welcome to SnipShare! 🚀",
    desc: "A simple JavaScript example to get you started with SnipShare. Try running this code to see the magic happen!",
    language: "javascript",
    icon: <IoLogoJavascript className="h-5 w-5" />,
    color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    features: ["Real-time execution", "Syntax highlighting", "Code sharing"]
  },
  {
    id: "pythonDemo123",
    title: "Python Data Analysis 📈",
    desc: "A Python snippet demonstrating data manipulation and visualization concepts.",
    language: "python",
    icon: <IoLogoPython className="h-5 w-5" />,
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    features: ["Data processing", "Statistics", "Random generation"]
  },
  {
    id: "javaDemo456",
    title: "Java OOP Concepts 🏗️",
    desc: "A Java example showcasing Object-Oriented Programming with classes and inheritance.",
    language: "java",
    icon: <FaJava className="h-5 w-5" />,
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    features: ["Classes & Objects", "Inheritance", "Abstraction"]
  },
  {
    id: "cppDemo789",
    title: "C++ Algorithms ⚡",
    desc: "A C++ snippet demonstrating algorithm implementation and performance.",
    language: "cpp",
    icon: <TbBrandCpp className="h-5 w-5" />,
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    features: ["STL algorithms", "Sorting", "Binary search"]
  }
];

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Syntax Highlighting",
    description: "Beautiful code display with language-specific syntax highlighting"
  },
  {
    icon: <Play className="h-6 w-6" />,
    title: "Real-time Execution",
    description: "Run your code instantly with secure, sandboxed execution"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast & Secure",
    description: "Lightning-fast execution with secure sandboxed environments"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Easy Sharing",
    description: "Share your code snippets with anyone using simple links"
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Multiple Languages",
    description: "Support for JavaScript, Python, Java, and C++"
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Modern UI",
    description: "Beautiful, responsive interface with dark/light mode"
  }
];

export default function DemoPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src="/bg_gradient.avif"
        alt="background gradient"
        className="absolute top-0 left-0 w-full h-96 z-[-1]"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="px-6 md:px-20 lg:px-32 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge variant="secondary" className="text-sm">
              <Sparkles className="h-3 w-3 mr-1" />
              Demo Gallery
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="font-geist text-4xl font-medium tracking-tighter bg-gradient-to-r from-zinc-800 via-stone-800/80 to-purple-800/70 dark:from-zinc-100 dark:via-stone-200/50 dark:to-purple-200/70 bg-clip-text text-transparent sm:text-5xl md:text-6xl">
              Explore
            </span>{" "}
            <span className="font-geist text-4xl font-medium tracking-tighter bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-600 bg-clip-text text-transparent sm:text-5xl md:text-6xl">
              SnipShare
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover the power of SnipShare through these interactive demos. 
            Each snippet showcases different features and programming languages.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="p-0 border-0 bg-transparent shadow-none">
              <Link href="/auth">
                <RainbowButton className="w-full h-full px-8 py-3 text-lg">
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2" />
                </RainbowButton>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/">
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Demo Snippets Grid */}
      <div className="px-6 md:px-20 lg:px-32 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Interactive Demos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click on any demo below to see SnipShare in action. Each snippet is fully interactive 
            and demonstrates different aspects of our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {demoSnippets.map((snippet, index) => (
            <MagicCard
              key={snippet.id}
              className={`rounded-xl border border-border transition-all duration-300 cursor-pointer ${hoveredCard === index ? 'scale-105 shadow-lg' : 'hover:scale-102'}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${snippet.color}`}>
                      {snippet.icon}
                    </div>
                    <Badge variant="outline" className="capitalize">
                      {snippet.language}
                    </Badge>
                  </div>
                  <Link href={`/demo-snippets/${snippet.id}`} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </Link>
                </div>
                <CardTitle className="text-xl">{snippet.title}</CardTitle>
                <CardDescription className="text-base">
                  {snippet.desc}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {snippet.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button asChild className="flex-1">
                      <Link href={`/demo-snippets/${snippet.id}`}>
                        <Play className="h-4 w-4 mr-2" />
                        View Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </MagicCard>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 md:px-20 lg:px-32 py-16 bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose SnipShare?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform combines powerful features with a beautiful, intuitive interface 
            to make code sharing effortless and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 md:px-20 lg:px-32 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Sharing?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of developers who are already using SnipShare to share their code 
            with syntax highlighting and real-time execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="p-0 border-0 bg-transparent shadow-none">
              <Link href="/auth">
                <RainbowButton className="w-full h-full px-8 py-3 text-lg">
                  Create Your First Snippet
                  <ArrowRight className="h-4 w-4 ml-2" />
                </RainbowButton>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/me">
                View Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 