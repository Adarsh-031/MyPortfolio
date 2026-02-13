import { Github, Linkedin, MailPlus, ChevronsDown, FileText } from "lucide-react";
import { SocialLink } from "@/components/ui/social-link";
import Image from "next/image";
export function Hero() {
  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center max-w-5xl mx-auto mt-20 md:mt-10 px-4">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12 mb-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-blue-500 font-medium tracking-wide">HELLO, WORLD</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
              I&apos;m <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600">Adarsha.E</span>
            </h1>
          </div>
          <p className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            A B.Tech student specializing in <span className="text-foreground font-semibold">Artificial Intelligence & Machine Learning</span>.
            Passionate about building scalable web applications and Competitive Programming.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <SocialLink href="https://github.com/Adarsh-031" icon={<Github className="w-5 h-5" />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/adarsha-e" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            <SocialLink href="mailto:adarsh.edurkala33@gmail.com" icon={<MailPlus className="w-5 h-5" />} label="Email" />
            <SocialLink href="https://drive.google.com/file/d/1BjQJtMbjtk89lq67cVfutm-MT_IF6O4c/view?usp=drive_link" icon={<FileText className="w-5 h-5" />} label="Resume" />
          </div>
        </div>
        <div className="shrink-0">
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <Image 
              className="relative rounded-full border-2 border-zinc-200 dark:border-zinc-800 object-cover hover:scale-105 transition duration-500 ease-in-out w-48 h-48 md:w-72 md:h-72"
              src="/Adarsh_image.png"
              width={300}
              height={300}
              alt="Adarsha.E"
              priority
            />
          </div>
        </div>
      </div>

      <div className="hidden md:flex pt-12 animate-bounce opacity-70 justify-center md:justify-start">
        <ChevronsDown className="w-8 h-8" />
      </div>
    </section>
  );
}
