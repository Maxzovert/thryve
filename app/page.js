"use client";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Github from "../public/github.png";
import Linkedin from "../public/linkedin.png";
import SourceCode from "../public/srccode.png";
import Projects from "../public/project.png";
import Link from "next/link";

export default function Home() {
  const ImageAndName = [
    {
      image: Github,
      name: "Github",
      path: "https://github.com/Maxzovert",
    },
    {
      image: Linkedin,
      name: "Linkedin",
      path: "https://www.linkedin.com/in/95abdullah99/",
    },
    {
      image: SourceCode,
      name: "Source-Code",
      path: "https://github.com/Maxzovert/thryve.git",
    },
    {
      image: Projects,
      name: "More Projects",
      path: "https://github.com/Maxzovert?tab=repositories",
    },
  ];

  const router = useRouter();
  const handleClick = () => {
    router.replace("/dashboard");
  };
  return (
    <div>
      {/*Navbarr*/}
      <div className="relative p-5 shadow-md flex justify-between rounded-lg backdrop-blur-lg bg-white/50">
        <div className="flex gap-2 items-center">
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
          <h2 className="font-bold text-2xl">Thryve</h2>
        </div>
        <div>
          <Button onClick={handleClick}>Dashboard</Button>
        </div>
        <div className="absolute bottom-[-10px] left-0 w-full h-10 bg-white/40 blur-lg"></div>
      </div>

      {/*Text div*/}
      <div className="relative flex size-full items-center justify-center flex-col">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
        <div>
          <Image src={"/logo.svg"} alt="logo" width={130} height={130} />
        </div>

        <div className="text-center mt-18 flex flex-col items-center mt-5">
          <div>
            <SparklesText
              className="text-7xl font-bold text-black"
              text="Ai Powred"
            />
            <WordRotate
              className="text-primary text-7xl font-bold "
              words={[
                "Exam preparation",
                "Coding preparation",
                "Interview preparation",
              ]}
              duration={1500}
            />
          </div>
          <h1 className="text-7xl font-bold text-black">
            & Meterial Generator
          </h1>
          <h2 className="text-2xl text-slate-500 mt-5">
            Instant Notes & Flashcards—Master Any Subject with Ease!
          </h2>

          <div className="mt-5">
            <InteractiveHoverButton onClick={handleClick}>
              Go to Dashboards
            </InteractiveHoverButton>
          </div>
        </div>
      </div>

      {/* Social */}
      {/* Social Links Section */}
      <div className="flex justify-center items-center flex-wrap gap-6 m-20">
        {ImageAndName.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row border border-slate-300 transition-all duration-300 rounded-lg p-6 cursor-pointer shadow-md hover:shadow-2xl">
              <Image
                src={item.image}
                width={40}
                height={40}
                alt={item.name}
                className="mr-5"
              />
              <h1 className="text-2xl text-slate-800 text-center font-semibold">
                {item.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
