import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Terminal,
  BookOpen,
  Shield,
  Code,
  Network,
  Server,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Terminal,
    title: "Commands",
    description:
      "Master essential Linux commands from file operations to process management with real examples.",
  },
  {
    icon: Shield,
    title: "Permissions",
    description:
      "Understand users, groups, chmod, chown, and sudo to secure your Linux systems.",
  },
  {
    icon: Code,
    title: "Shell Scripting",
    description:
      "Automate tasks with bash scripts using variables, conditions, loops, and functions.",
  },
  {
    icon: Network,
    title: "Networking",
    description:
      "Configure networks, use SSH, manage firewalls, and troubleshoot connectivity issues.",
  },
  {
    icon: Server,
    title: "System Administration",
    description:
      "Manage services, cron jobs, disk usage, backups, and perform real admin tasks.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
          <Link
            href="/course"
            className="text-sm px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors font-medium"
          >
            Start Learning
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent" />
          <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                Complete Linux Administrator Course
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 leading-tight mb-6">
                Linux System Admin
                <span className="text-green-400"> Academy</span>
              </h1>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
                Master Linux from beginner commands to real system
                administration. Interactive lessons, hands-on practice, and
                quizzes designed to take you from zero to system administrator.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/course"
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors font-medium text-sm"
                >
                  Start Learning
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/roadmap"
                  className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition-colors font-medium text-sm"
                >
                  View Roadmap
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-zinc-100 mb-3">
              What You Will Learn
            </h2>
            <p className="text-sm text-zinc-500 max-w-xl mx-auto">
              A structured curriculum covering everything from the Linux command
              line to advanced system administration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature: Feature) => (
              <div
                key={feature.title}
                className="bg-[#1a1a1a] rounded-xl border border-zinc-800 p-6 hover:border-green-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-200 mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-[#1a1a1a] rounded-xl border border-zinc-800 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">
                Terminal Preview
              </h2>
              <div className="bg-[#0d0d0d] rounded-lg border border-zinc-800 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border-b border-zinc-800">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-zinc-500 ml-2">terminal</span>
                </div>
                <pre className="p-4 md:p-6 overflow-x-auto">
                  <code className="text-xs md:text-sm font-mono leading-relaxed text-green-400">
{`$ uname -a
Linux academy-server 6.8.0-45-generic #45-Ubuntu SMP PREEMPT_DYNAMIC x86_64 GNU/Linux

$ whoami
student

$ ls -la /home
total 24
drwxr-xr-x  4 root   root   4096 Jun 10 10:00 .
drwxr-xr-x 18 root   root   4096 Jun 10 10:00 ..
drwxr-xr-x  5 student student 4096 Jun 15 14:30 student

$ echo "Welcome to Linux Academy"
Welcome to Linux Academy`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-xs text-zinc-500">
              Linux System Admin Academy
            </span>
          </div>
          <p className="text-xs text-zinc-600">
            Learn Linux. Master Administration. Build Your Future.
          </p>
        </div>
      </footer>
    </div>
  );
}
