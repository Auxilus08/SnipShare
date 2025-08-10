"use client";

import {
  oneLight,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Header from "@/components/page/header";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Copy, Loader2, Play, Sparkles, ArrowLeft, Share } from "lucide-react";
import { toast } from "sonner";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { LANGUAGE_CONFIG } from "@/app/_constants/config";
import Footer from "@/components/page/footer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Static demo snippets - no Firebase required!
const demoSnippets = {
  "tFOrJEARI2SbxKQR92PF": {
    id: "tFOrJEARI2SbxKQR92PF",
    title: "Welcome to SnipShare! 🚀",
    desc: "A simple JavaScript example to get you started with SnipShare. Try running this code to see the magic happen!",
    language: "javascript",
    code: `// Welcome to SnipShare! 🚀
// This is a simple JavaScript example to showcase our platform

console.log("Hello from SnipShare! 👋");
console.log("This code runs in real-time using our secure execution environment.");

// Let's do some fun calculations
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

console.log("\\n📊 Number Analysis:");
console.log("Numbers:", numbers);
console.log("Sum:", sum);
console.log("Average:", average);

// Let's create a simple function
function greetUser(name) {
    return \`Hello, \${name}! Welcome to SnipShare! 🌟\`;
}

console.log("\\n👋 Greeting:");
console.log(greetUser("Developer"));

console.log("\\n✨ Ready to share your own code snippets?");
console.log("Sign up and start creating amazing snippets! 🎉");`,
    author: "demo"
  },
  "pythonDemo123": {
    id: "pythonDemo123",
    title: "Python Data Analysis 📈",
    desc: "A Python snippet demonstrating data manipulation and visualization concepts.",
    language: "python",
    code: `# Python Data Analysis Example 📈
# This snippet shows how to work with data in Python

import random

print("🐍 Welcome to Python on SnipShare!")
print("Let's analyze some sample data\\n")

# Generate sample data
data = [random.randint(1, 100) for _ in range(10)]
print(f"Sample data: {data}")

# Calculate statistics
total = sum(data)
average = total / len(data)
maximum = max(data)
minimum = min(data)

print(f"\\n📊 Statistics:")
print(f"Total: {total}")
print(f"Average: {average:.2f}")
print(f"Maximum: {maximum}")
print(f"Minimum: {minimum}")

# Find even and odd numbers
even_numbers = [x for x in data if x % 2 == 0]
odd_numbers = [x for x in data if x % 2 != 0]

print(f"\\n🔢 Number Analysis:")
print(f"Even numbers: {even_numbers}")
print(f"Odd numbers: {odd_numbers}")

# Simple sorting
sorted_data = sorted(data)
print(f"\\n📈 Sorted data: {sorted_data}")

print("\\n✨ Python is powerful for data analysis!")
print("Try creating your own Python snippets! 🚀")`,
    author: "demo"
  },
  "javaDemo456": {
    id: "javaDemo456",
    title: "Java Object-Oriented Programming 🏗️",
    desc: "A Java example showcasing OOP concepts with classes and inheritance.",
    language: "java",
    code: `// Java Object-Oriented Programming Example 🏗️
// This snippet demonstrates OOP concepts in Java

public class Main {
    public static void main(String[] args) {
        System.out.println("☕ Welcome to Java on SnipShare!");
        System.out.println("Let's explore Object-Oriented Programming\\n");
        
        // Create some shapes
        Shape circle = new Circle(5.0);
        Shape rectangle = new Rectangle(4.0, 6.0);
        
        // Display information
        System.out.println("📐 Shape Information:");
        System.out.println(circle.getInfo());
        System.out.println(rectangle.getInfo());
        
        // Calculate areas
        System.out.println("\\n📊 Area Calculations:");
        System.out.println("Circle area: " + circle.calculateArea());
        System.out.println("Rectangle area: " + rectangle.calculateArea());
        
        System.out.println("\\n✨ Java is excellent for building robust applications!");
        System.out.println("Start coding in Java today! 🚀");
    }
}

// Abstract base class
abstract class Shape {
    protected String name;
    
    public Shape(String name) {
        this.name = name;
    }
    
    public abstract double calculateArea();
    
    public String getInfo() {
        return name + " - Area: " + calculateArea();
    }
}

// Circle class
class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        super("Circle");
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

// Rectangle class
class Rectangle extends Shape {
    private double width;
    private double height;
    
    public Rectangle(double width, double height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double calculateArea() {
        return width * height;
    }
}`,
    author: "demo"
  },
  "cppDemo789": {
    id: "cppDemo789",
    title: "C++ Algorithm Implementation ⚡",
    desc: "A C++ snippet demonstrating algorithm implementation and performance.",
    language: "cpp",
    code: `// C++ Algorithm Implementation Example ⚡
// This snippet shows efficient C++ programming

#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;

// Function to demonstrate sorting and searching
void demonstrateAlgorithms() {
    cout << "⚡ Welcome to C++ on SnipShare!" << endl;
    cout << "Let's explore some algorithms\\n" << endl;
    
    // Create a vector of numbers
    vector<int> numbers = {64, 34, 25, 12, 22, 11, 90};
    cout << "Original array: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Sort the array
    sort(numbers.begin(), numbers.end());
    cout << "Sorted array: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Binary search
    int searchValue = 25;
    bool found = binary_search(numbers.begin(), numbers.end(), searchValue);
    cout << "\\n🔍 Searching for " << searchValue << ": ";
    cout << (found ? "Found! ✅" : "Not found ❌") << endl;
    
    // Find min and max
    auto minElement = min_element(numbers.begin(), numbers.end());
    auto maxElement = max_element(numbers.begin(), numbers.end());
    cout << "Minimum: " << *minElement << endl;
    cout << "Maximum: " << *maxElement << endl;
    
    // Calculate sum
    int sum = 0;
    for (int num : numbers) {
        sum += num;
    }
    cout << "Sum: " << sum << endl;
    cout << "Average: " << (double)sum / numbers.size() << endl;
}

// Main function
int main() {
    demonstrateAlgorithms();
    
    cout << "\\n✨ C++ is perfect for high-performance applications!" << endl;
    cout << "Start building efficient code with C++! 🚀" << endl;
    
    return 0;
}`,
    author: "demo"
  }
};

export default function DemoPage({ params }) {
  const [snip, setSnip] = useState(null);
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const [running, setRunning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notValid, setNotValid] = useState(false);
  const { theme } = useTheme();
  const outputElement = useRef(null);

  const getSnip = async () => {
    try {
      setLoading(true);
      
      // Get demo snippet from static data - no Firebase needed!
      const demoSnip = demoSnippets[params.id];
      
      if (demoSnip) {
        setSnip(demoSnip);
      } else {
        setNotValid(true);
      }
    } catch (error) {
      console.error('Error loading demo snippet:', error);
      setNotValid(true);
    } finally {
      setLoading(false);
    }
  };

  const executeCode = async (snipdata) => {
    setError(null);
    setOutput(null);
    const code = snipdata.code;
    try {
      setRunning(true);
      const runtime = LANGUAGE_CONFIG[snipdata.language].pistonRuntime;
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: runtime.language,
          version: runtime.version,
          files: [{ content: code }],
        }),
      });

      const data = await response.json();

      console.log("data back from piston:", data);

      // handle API-level errors
      if (data.message) {
        return setOutput({
          error: data.message,
          executionResult: { code, output: "", error: data.message },
        });
      }

      // handle compilation errors
      if (data.compile && data.compile.code !== 0) {
        const error = data.compile.stderr || data.compile.output;
        return setError({
          error,
          executionResult: {
            code,
            output: "",
            error,
          },
        });
      }

      if (data.run && data.run.code !== 0) {
        const error = data.run.stderr || data.run.output;
        return setError({
          error,
          executionResult: {
            code,
            output: "",
            error,
          },
        });
      }

      // if we get here, execution was successful
      const output = data.run.output;

      return setOutput({
        output: output.trim(),
        error: null,
        executionResult: {
          code,
          output: output.trim(),
          error: null,
        },
      });
    } catch (error) {
      console.log("Error running code:", error);
      return setError({
        error: "Error running code",
        executionResult: { code, output: "", error: "Error running code" },
      });
    } finally {
      setRunning(false);
      if (outputElement.current) {
        outputElement.current.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
  };

  useEffect(() => {
    getSnip();
  }, []);

  if (loading) {
    return (
      <div className="px-6 md:px-20 lg:px-32 mb-10">
        <div className="grid gap-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-52" />
        </div>
        <div className="flex mt-4 gap-2 items-center">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-24" />
        </div>
        <div className="mt-5 grid gap-4">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-40 w-full" />
        </div>
      </div>
    );
  }
  
  if (notValid) {
    return (
      <div className="px-6 md:px-20 lg:px-32 mt-32 h-[300px]">
        <div className="text-center grid place-items-center">
          <h1 className="text-3xl mb-2 font-medium">Demo not found</h1>
          <p className="text-sm -mt-0.5 text-foreground/80">
            The demo snippet you are looking for does not exist.
          </p>
          <p className="text-sm -mt-0.5 text-foreground/80">
            Please check the URL and try again.
          </p>
          <div className="mt-4 grid-cols-2 grid gap-2">
            <Button asChild>
              <Link href="/demo">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Demos
              </Link>
            </Button>
            <Button variant="outline" onClick={() => getSnip()}>
              Refresh
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="px-6 md:px-20 lg:px-32 py-4">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
              <Link href="/demo">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Demos
              </Link>
            </Button>
          </div>
          
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{snip?.title}</h1>
                <Badge variant="secondary" className="text-xs px-2 py-1">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Demo
                </Badge>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                {snip?.desc ? snip?.desc : "No description"}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mb-6 flex items-center gap-3">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              navigator.clipboard.writeText(snip?.code);
              toast.success("Code copied to clipboard!");
            }}
            className="flex items-center gap-2"
          >
            <Copy className="h-4 w-4" />
            Copy Code
          </Button>
          <Button
            size="sm"
            variant="outline"
            disabled={running}
            onClick={() => executeCode(snip)}
            className="flex items-center gap-2"
          >
            {running ? (
              <>
                <Loader2 className="animate-spin h-4 w-4" />
                Running...
              </>
            ) : (
              <>
                <Play className="h-4 w-4" />
                Run
              </>
            )}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              toast.success("Link copied to clipboard!");
            }}
            className="flex items-center gap-2"
          >
            <Share className="h-4 w-4" />
            Share
          </Button>
        </div>

        {/* Code and Output Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Code Editor Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Code Editor
              </h3>
              <Badge variant="outline" className="text-xs capitalize">
                {snip?.language}
              </Badge>
            </div>
            <div className="relative rounded-lg border bg-card overflow-hidden">
              <ScrollArea className="h-[400px] w-full">
                <SyntaxHighlighter
                  language={snip?.language}
                  style={theme !== "light" ? vscDarkPlus : oneLight}
                  customStyle={{
                    margin: 0,
                    padding: "16px",
                    borderRadius: "8px",
                    width: "100%",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    background: "transparent",
                  }}
                  showLineNumbers={true}
                  wrapLines={true}
                >
                  {snip?.code}
                </SyntaxHighlighter>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Output
              </h3>
              {output && (
                <Badge variant="outline" className="text-xs text-green-600 border-green-200">
                  ✓ Executed
                </Badge>
              )}
              {error && (
                <Badge variant="outline" className="text-xs text-red-600 border-red-200">
                  ✗ Error
                </Badge>
              )}
            </div>
            <div className="relative rounded-lg border bg-card overflow-hidden">
              <ScrollArea className="h-[400px] w-full">
                <div className="p-4">
                  {!error ? (
                    output?.error ? (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-red-600">
                          <span className="text-sm font-medium">Runtime Error:</span>
                        </div>
                        <pre className="text-sm font-mono text-red-600 bg-red-50 dark:bg-red-950/20 p-3 rounded border border-red-200 dark:border-red-800 overflow-x-auto">
                          {output.error}
                        </pre>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {output?.output && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-green-600">
                              <span className="text-sm font-medium">Output:</span>
                            </div>
                            <pre className="text-sm font-mono text-foreground bg-green-50 dark:bg-green-950/20 p-3 rounded border border-green-200 dark:border-green-800 overflow-x-auto whitespace-pre-wrap">
                              {output.output}
                            </pre>
                          </div>
                        )}
                      </div>
                    )
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-red-600">
                        <span className="text-sm font-medium">Execution Error:</span>
                      </div>
                      <pre className="text-sm font-mono text-red-600 bg-red-50 dark:bg-red-950/20 p-3 rounded border border-red-200 dark:border-red-800 overflow-x-auto">
                        {error.error}
                      </pre>
                    </div>
                  )}
                  
                  {!error && !output && (
                    <div className="h-full flex items-center justify-center">
                      {!running ? (
                        <div className="text-center space-y-2">
                          <div className="w-12 h-12 mx-auto rounded-full bg-muted flex items-center justify-center">
                            <Play className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Click "Run Code" to see the output
                          </p>
                        </div>
                      ) : (
                        <div className="text-center space-y-2">
                          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
                          <p className="text-sm text-muted-foreground">
                            Executing code...
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        </div>

        {/* Mobile Output Reference */}
        <div ref={outputElement} className="lg:hidden"></div>
      </div>

      <Footer />
    </div>
  );
} 