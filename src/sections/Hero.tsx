import  memojiImage  from "../assets/images/memoji-computer.png"
import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg"
import grainImage from "../assets/images/grain.jpg"

export const HeroSection = () => {
  return (
  <div className="py-32 md:py-48 lg:py-60 relative z-0">
    <div className="absolute-inset-0 -z-30 opacity-5"
      style={
        {
          backgroundImage:`url(${grainImage.src})`,
        }
      }
    >
    </div>
    <div className="absolute-inset-0 size-[620px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
    <div className="container">
      <div className="flex flex-col items-center">
      <Image src={memojiImage} className="size-[100px]" alt="person picking behind a pc"/>
      <div className="bg-gray-950 border-gray-800 px-4 py-1.4 inline-flex gap-3.5 items-center rounded-lg">
        <div className="bg-green-500 size-2.5 rounded-full"></div>
        <div className="text-sm font-medium">Available for new projects</div>
      </div>
      </div>
      <div className="max-w-lg mx-auto">
      <h1 className="font-serif text-center text-3xl md:text-5xl  mt-8 tracking-wide">Building Exceptional User Experiences!</h1>
      <p className="mt-4 text-white/60 text-center md:text-lg ">
        This is a demo protfolio of Mine and I am very exited about it how it looks like after i finished this project!!
      </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 rounded-xl px-6 h-12">
          <span className="font-semibold">Explore My Work</span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex border border-white bg-white text-gray-900 h-12 text-center rounded-xl px-6 gap-2 items-center">
          <span>🙋🏻‍♂️</span>
          <span className="font-semibold">Lets Connect</span>
        </button>
      </div>    
    </div>
  </div>
  )
};
