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
import NOTESSS from "../public/FeatureSS/NOTESSS.png";
import FLasgCard1 from "../public/FeatureSS/FLASHCARDSS1.png";
import QuizSS from "../public/FeatureSS/QUIZSS.png";
import QASS from "../public/FeatureSS/QASS.png";
import Frontend from "../public/Technologies/Frontend.png";
import Backend from "../public/Technologies/Backend.png";
import Database from "../public/Technologies/Database.png";
import Auth from "../public/Technologies/Auth.png";
import Payment from "../public/Technologies/Payment.png";
import AiIntigration from "../public/Technologies/AiIntigration.png";
import Link from "next/link";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { BoxReveal } from "@/components/magicui/box-reveal";

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
          <Button onClick={handleClick}>Get Started</Button>
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

      {/* Demo Video Section */}
      <div className="text-center mt-15">
        <h1 className="text-3xl font-bold text-black mb-5 p-10">Demo Video</h1>

        <div className="flex justify-center mt-10 bg-blue-600 rounded-lg">
          <div className="max-w-[1200px] w-full px-4">
            <HeroVideoDialog
              className="block dark:hidden rounded-2xl mt-10 mb-10"
              animationStyle="from-center"
              videoSrc="/thryve.mp4"
              thumbnailSrc="/vidThumbnail.png"
              thumbnailAlt="Light Mode Demo"
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="/thryve.mp4"
              thumbnailSrc="/vidThumbnail.png"
              thumbnailAlt="Dark Mode Demo"
            />
          </div>
        </div>
      </div>

      {/* Tech Used */}

      <div >
        <div>
          <h2 className="text-3xl font-bold text-black mb-5 p-10 text-center">
            Features
          </h2>
        </div>

        <div className="shadow-lg rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex flex-col ml-10">
              <BoxReveal>
                <h1 className="text-4xl font-bold text-black ml-20">
                  📝 AI-Generated Notes
                </h1>
              </BoxReveal>
              <BoxReveal>
                <p className="text-xl text-slate-500 p-5 ml-24">
                  {" "}
                  Forget hours of manual note-taking.
                  <br /> Our AI instantly creates clear, <br />
                  structured, and concise notes <br /> tailored to any topic or
                  subject. <br />
                  Perfect for quick reviews and <br />
                  deep dives alike.
                </p>
              </BoxReveal>
            </div>
            <Image
              src={NOTESSS}
              width={500}
              height={800}
              className="border-slate-900 shadow-xl rounded-lg mr-24"
            />
          </div>

          <div className="flex justify-between items-center mt-20">
            <Image
              src={FLasgCard1}
              width={500}
              height={800}
              className="border-slate-900 shadow-xl rounded-lg ml-24"
            />
            <div className="flex flex-col mr-14">
              <BoxReveal>
                <h1 className="text-4xl font-bold text-black mr-20">
                  🔁 Smart Flashcards
                </h1>
              </BoxReveal>
              <BoxReveal>
                <p className="text-xl text-slate-500 p-5 mr-24">
                  {" "}
                  Master subjects with AI-crafted flashcards <br /> that
                  highlight the most important terms, <br /> definitions, and
                  key ideas. Ideal for <br />
                  spaced repetition and fast recall.
                </p>
              </BoxReveal>
            </div>
          </div>

          <div className="flex justify-between items-center mt-20">
            <div className="flex flex-col ml-16">
              <BoxReveal>
                <h1 className="text-4xl font-bold text-black ml-20">
                  ❓ Adaptive Quizzes
                </h1>
              </BoxReveal>
              <BoxReveal>
                <p className="text-xl text-slate-500 p-5 ml-24">
                  Challenge yourself with AI-generated quizzes <br />
                  that adapt to your skill level. <br />
                  Each question is designed to reinforce learning <br />
                  and track your progress in real time.
                </p>
              </BoxReveal>
            </div>
            <Image
              src={QuizSS}
              width={500}
              height={800}
              className="border-slate-900 shadow-xl rounded-lg mr-24"
            />
          </div>

          <div className="flex justify-between items-center mt-20 mb-10">
            <Image
              src={QASS}
              width={500}
              height={800}
              className="border-slate-900 shadow-xl rounded-lg ml-24"
            />
            <div className="flex flex-col mr-12">
              <BoxReveal>
                <h1 className="text-4xl font-bold text-black mr-20">
                  💬 AI-Generated Q&A Bank
                </h1>
              </BoxReveal>
              <BoxReveal>
                <p className="text-xl text-slate-500 p-5 mr-24">
                  No need to ask — we’ve already answered it.
                  <br />
                  Access a comprehensive bank of AI-generated
                  <br /> questions and answers, designed to simulate
                  <br />
                  real-world exams and test your understanding.
                </p>
              </BoxReveal>
            </div>
          </div>
        <div className="text-center">
          <h1 className="font-bold text-3xl text-white">-</h1>
        </div>
        </div>
      </div>

      {/* Technologies used */}
      <div className="shadow-lg rounded-2xl">
        <div>
          <h1 className="text-3xl font-bold text-primary mb-5 p-10 text-center mt-20">
            Tech used
          </h1>
        </div>

        <div className="flex flex-row items-center justify-evenly  mt-20">
          <div className="mr-20">
            <h1 className="font-bold text-2xl text-center">Frontend</h1>
            <Image src={Frontend} width={250} height={250} />
          </div>
          <div className="ml-32 max-w-xl">
            <h2 className="font-semibold text-2xl text-primary">
              React.js, Next.js, Tailwind CSS, ShadCN
            </h2>
            <p className="ml-2 mt-5 text-2xl text-justify">
              Our platform is powered by a cutting-edge tech stack to ensure
              speed, security, and seamless AI integration — all while
              delivering a smooth experience for learners and educators.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-evenly mt-20">
          <div className="mr-20">
            <h1 className="font-bold text-2xl text-center">Backend</h1>
            <Image src={Backend} width={250} height={250} />
          </div>
          <div className="ml-32 max-w-xl">
            <h2 className="font-semibold text-2xl text-primary">
            Next.js + Inngest
            </h2>
            <p className="ml-2 mt-5 text-2xl text-justify">
            Our backend is powered by Next.js for full-stack flexibility and Inngest for background jobs and workflows. This combo enables fast API responses, server-side rendering, and efficient handling of AI tasks and user events, ensuring a smooth, scalable experience for every learner.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-evenly mt-20">
          <div className="mr-20">
            <h1 className="font-bold text-2xl text-center">Database</h1>
            <Image src={Database} width={250} height={250} />
          </div>
          <div className="ml-32 max-w-xl">
            <h2 className="font-semibold text-2xl text-primary">
            Neon PostgreSQL
            </h2>
            <p className="ml-2 mt-5 text-2xl text-justify">
            We combine NoSQL flexibility for AI-generated content and user interactions with relational data accuracy via PostgreSQL, ensuring every part of the system is optimized for speed and structure.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-evenly mt-20">
          <div className="mr-20">
            <h1 className="font-bold text-2xl text-center">Authentication</h1>
            <Image src={Auth} width={250} height={250} />
          </div>
          <div className="ml-32 max-w-xl">
            <h2 className="font-semibold text-2xl text-primary">
            Clerk
            </h2>
            <p className="ml-2 mt-5 text-2xl text-justify">
            Secure and simple. Clerk handles user authentication and account management with modern UI components and strong security standards — including social logins, 2FA, and role management.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-evenly mt-20">
          <div className="mr-20">
            <h1 className="font-bold text-2xl text-center">AI Integration</h1>
            <Image src={AiIntigration} width={250} height={250} />
          </div>
          <div className="ml-32 max-w-xl">
            <h2 className="font-semibold text-2xl text-primary">
            Google Gemini
            </h2>
            <p className="ml-2 mt-5 text-2xl text-justify">
            The brain behind the platform. Google Gemini enables AI-generated notes, quizzes, flashcards, and Q&As, adapting to learner needs and automating content creation with precision.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-evenly mt-20">
          <div className="mr-20">
            <h1 className="font-bold text-2xl text-center">Subscription</h1>
            <Image src={Payment} width={250} height={250} />
          </div>
          <div className="ml-32 max-w-xl">
            <h2 className="font-semibold text-2xl text-primary">
            Stripe
            </h2>
            <p className="ml-2 mt-5 text-2xl text-justify">
            Monetization made easy. Stripe powers secure subscription billing and payments, so learners can upgrade and access premium features with confidence.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
}
