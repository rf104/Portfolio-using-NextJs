import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Link from "next/link";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg'

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
  <div className="pb-16 lg:py-24">
    <div className="container">
        <div className="flex justify-center">
        <p className="uppercase tracking-widest font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">Real-Worlds Results</p>
        </div>
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h1>
        <p className="text-white/60 text-center mt-4 max-w-md md:text-lg lg:text-xl mx-auto">See how I transform concepts into enagaging digital experiences</p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map(project =>(
            <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none ">
                <div className="flex">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex  tracking-widest text-sm uppercase gap-2 text-transparent bg-clip-text font-bold ">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4" />
                <ul className="flex flex-col mt-2 gap-2 md:mt-5">
                  {project.results.map(result=>(
                      <li className="flex  gap-2 text-sm md:text-base  text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6"/>
                      <span>{result.title}</span>.
                      </li>
                  ))}
                </ul>
                <Link href={project.link}>
                  <button className="bg-white text-gray-800 h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center mt-8 gap-2 px-6">
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4"/>
                  </button>
                </Link>
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0"/>
            </div>
          ))}
        </div>
    </div>
  </div>
  );
};
