import Link from "next/link";
import {
  Terminal,
  BookOpen,
  FolderTree,
  Shield,
  Users,
  Package,
  Activity,
  Code,
  Network,
  Server,
  ArrowLeft,
} from "lucide-react";

const roadmapSteps = [
  {
    icon: BookOpen,
    title: "Linux Basics",
    description:
      "Understand what Linux is, explore distributions, and learn the terminal and file system structure.",
    level: "Beginner",
  },
  {
    icon: Terminal,
    title: "Terminal Commands",
    description:
      "Master basic commands for navigation, file operations, and text viewing in the command line.",
    level: "Beginner",
  },
  {
    icon: FolderTree,
    title: "File System",
    description:
      "Navigate directories, manage files and folders, and use search tools like find and locate.",
    level: "Beginner",
  },
  {
    icon: Shield,
    title: "Permissions",
    description:
      "Learn chmod, chown, chgrp, and sudo to control access to files and directories.",
    level: "Intermediate",
  },
  {
    icon: Users,
    title: "Users and Groups",
    description:
      "Manage user accounts, groups, and understand how Linux handles multi-user environments.",
    level: "Intermediate",
  },
  {
    icon: Package,
    title: "Package Management",
    description:
      "Install, update, and remove software using apt, dnf, yum, and snap package managers.",
    level: "Intermediate",
  },
  {
    icon: Activity,
    title: "Processes and Services",
    description:
      "Monitor running processes, manage system services with systemctl, and analyze logs.",
    level: "Intermediate",
  },
  {
    icon: Code,
    title: "Shell Scripting",
    description:
      "Write bash scripts with variables, conditions, loops, and functions to automate tasks.",
    level: "Intermediate",
  },
  {
    icon: Network,
    title: "Networking",
    description:
      "Configure network interfaces, use SSH, manage firewalls, and troubleshoot connections.",
    level: "Advanced",
  },
  {
    icon: Server,
    title: "System Administration",
    description:
      "Manage cron jobs, disk usage, backups, and perform real-world server maintenance tasks.",
    level: "Advanced",
  },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-green-500/10 text-green-400 border-green-500/20",
  Intermediate: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Advanced: "bg-red-500/10 text-red-400 border-red-500/20",
};

const levelLineColors: Record<string, string> = {
  Beginner: "bg-green-500/30",
  Intermediate: "bg-yellow-500/30",
  Advanced: "bg-red-500/30",
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-green-400" />
          <span className="text-sm font-semibold text-zinc-100">
            Linux Academy
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/course"
            className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Course
          </Link>
          <Link
            href="/roadmap"
            className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Roadmap
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-3xl font-bold text-zinc-100 mb-3">
            Learning Roadmap
          </h1>
          <p className="text-sm text-zinc-500 max-w-2xl">
            Follow this structured path from Linux beginner to system
            administrator. Each step builds on the previous one, progressing
            through beginner, intermediate, and advanced topics.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />

          <div className="flex flex-col gap-8">
            {roadmapSteps.map((step, index) => (
              <div key={index} className="relative md:pl-16">
                <div className="hidden md:flex absolute left-4 top-6 -translate-x-1/2">
                  <div
                    className={`w-5 h-5 rounded-full border-2 border-zinc-800 bg-[#0a0a0a] flex items-center justify-center ${
                      index < 5 ? "border-green-500" : ""
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        index < 5 ? "bg-green-500" : "bg-zinc-600"
                      }`}
                    />
                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl border border-zinc-800 p-6 hover:border-green-500/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-semibold text-zinc-200">
                          {index + 1}. {step.title}
                        </h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded border flex-shrink-0 ${levelColors[step.level]}`}
                        >
                          {step.level}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-500 leading-relaxed mt-2">
                        {step.description}
                      </p>

                      {index < roadmapSteps.length - 1 && (
                        <div className="mt-4 flex items-center gap-2">
                          <div
                            className={`h-px flex-1 ${levelLineColors[step.level] || "bg-zinc-800"}`}
                          />
                          <svg
                            className={`w-4 h-4 ${step.level === "Advanced" ? "text-red-500/30" : step.level === "Intermediate" ? "text-yellow-500/30" : "text-green-500/30"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/course"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors font-medium text-sm"
          >
            Start Your First Lesson
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </main>
    </div>
  );
}
