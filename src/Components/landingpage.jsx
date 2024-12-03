import * as React from "react";
import ImageCard from "./Image";
import Avatar  from "./avatar";
import Image1 from "../assets/image1.png"
import Image2 from "../assets/image2.png"
import Image3 from "../assets/image3.png"
import Image41 from "../assets/image41.png"
import Image42 from "../assets/image42.png"
import { motion } from 'framer-motion';
import { useState } from "react";



export function LandingPage() {
  const [isToggled, setIsToggled] = useState(false); 
  const handleToggle = () => { setIsToggled(!isToggled); };

  return (
    <main className="flex overflow-hidden relative flex-col items-start max-w-full min-h-[530px] w-[1513px] ">
      <header className="flex overflow-hidden z-0 flex-col items-center self-center w-full min-h-[696px]">
        <div className="flex overflow-hidden flex-col items-center w-full min-h-[643px]">
          <nav className="flex overflow-hidden flex-col justify-center items-start px-20 py-5 w-full bg-white max-md:px-5">
            <div className="flex flex-col justify-center w-40 max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/60ebb557eca7aba5ea3648ff0f711b08ea21efca5713b279a6326023e222867b?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
                alt="Company logo"
                className="object-contain flex-1 w-full aspect-[3.91]"
              />
            </div>
          </nav>
          
          <section className="flex relative flex-col items-center mt-24 max-w-full min-h-[399px] w-[1440px] max-md:mt-10">
            <div className="flex overflow-hidden z-0 flex-col justify-center px-6 py-1.5 max-w-full text-base font-medium leading-5 text-amber-300 bg-black rounded w-[280px] max-md:px-5">
              <p>FOR EARLY STAGE FOUNDERs</p>
            </div>

            <h1 className="flex overflow-hidden z-0 flex-col justify-center items-center mt-8 w-full text-center whitespace-nowrap text-6xl font-extralight text-black leading-[72px]">
              <div className="flex flex-col items-center px-20 w-full max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[787px] font-bold">
                  <div className="flex gap-5 justify-between self-center ml-3.5 max-w-full w-[622px]">
                    <span className="max-md:text-4xl">List</span>
                    <span className="max-md:text-4xl">your</span>
                    <span className="max-md:text-4xl">startup</span>
                    <span className="max-md:text-4xl">and</span>
                  </div>
                  <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
                    <span className="max-md:text-4xl">Raise</span>
                    <span className="max-md:text-4xl">funds</span>
                    <span className="max-md:text-4xl">from</span>
                    <span className="max-md:text-4xl">investors</span>
                  </div>
                </div>
                
              </div>
            </h1>
         <p className="text-xl font-normal"> Create Profile, list information, showcase startup, connect vc's, raise funds - for free.</p>
         <button onClick={() => window.location.href='https://tally.so/r/nGoYNe'}
            className="flex overflow-hidden text-center justify-center items-center flex-col text-xl leading-7 rounded-3xl bg-black text-white border border-white absolute right-[78px] top-[-169px] w-[180px] h-[60px] m-4 " >
               Join Beta
         </button>

           
         <button onClick={() => window.location.href='https://tally.so/r/nGoYNe'}
            className="flex overflow-hidden text-center justify-center items-center flex-col text-xl leading-7 rounded-3xl bg-black text-white border border-white mt-8 w-[200px] p-4 " >
               Raise Today
         </button>

            

            <Avatar />
          </section>
        </div>
      </header>

      <section className="flex z-0 flex-col justify-center self-center max-w-full min-h-[547px] w-[1042px]">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Oara6M_MHhQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen   className="object-contain flex-1 w-full rounded-3xl aspect-[1.9] max-md:max-w-full max-sm:max-w-[335px]" >
      </iframe>
      </section>
     
      


      <section className="flex justify-center self-center items-center text-center flex-col w-full my-24">

      <div className="flex overflow-hidden z-0 flex-col justify-center  py-1.5 max-w-full text-base font-medium leading-5 text-amber-300 bg-black rounded px-3 ">
              <p>SHOWCASE</p>
        </div>

        <h2 className="w-full text-4xl font-bold text-black leading-[50.4px] max-md:max-w-full">
        Struggling to raise funds for your startup?
        </h2>
        <p className="flex flex-col self-center mt-1.5 max-w-full text-base font-semibold leading-5 text-center text-zinc-800 ">
        Raising funds from investors or vc's is now simplified with MangoC. 
          <br />
          Create profile, list information, get verified and connect with investors globally.
        </p>
      </section>

      <img
        loading="lazy"
        src={`src/assets/listing.png`}
        alt="Before and after comparison"
        className="object-contain flex-1 justify-center  self-center w-2/3 aspect-[1.5] "
      />
      
      {/* Additional sections remain with same structure but using semantic HTML max-md:max-w-full  */}

      <div className="flex z-0 self-center max-w-full min-h-[51px] w-[631px]" />
      
     
      {/* <h2 className=" flex justify-center text-center m-4 p-4 text-xl md:text-2xl lg:text-3xl">
  One stop solution for all early stage founders. Need to submit the pitch deck? Or wanna know the score of your pitch deck? Or wanted to showcase your amazing startup for the investors?
</h2> */}
      <section className="flex justify-center self-center items-center text-center flex-col w-full">
        <h2 className="w-full text-4xl font-bold text-black leading-[50.4px] max-md:max-w-full">
          One stop solution for all early stage founders
        </h2>
        <p className="flex flex-col self-center mt-1.5 max-w-full text-base font-semibold leading-5 text-center text-zinc-800 ">
          Need to submit the pitch deck? or Wanna know the score of your pitch deck?
          <br />
          or wanted to showcase your amazing startup for the investors?
        </p>
      </section>


      <div class="relative flex justify-center self-center items-center text-center  w-full m-4 p-4">
    <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
    <section className="flex  left-80 z-0 flex-col justify-center max-w-full bottom-[1531px] h-[394px] min-h-[394px] w-[454px] border black">
        <ImageCard
          title="Points and Benefits"
          subtitle="Earn points, unlock tools, fuel your success."
          imageSrc={Image1}
        />
      </section>
      <section className="flex  left-80 z-0 flex-col justify-center max-w-full bottom-[1531px] h-[394px] min-h-[394px] w-[454px] border black">
        <ImageCard
          title="Points and Benefits"
          subtitle="Earn points, unlock tools, fuel your success."
          imageSrc={Image2}
        />
      </section>
      
      <section className="flex  left-80 z-0 flex-col justify-center max-w-full bottom-[1531px] h-[394px] min-h-[394px] w-[454px] border black">
        <ImageCard
          title="Points and Benefits"
          subtitle="Earn points, unlock tools, fuel your success."
          imageSrc={Image3}
        />
      </section>

      <section className="flex  left-80 z-0 flex-col justify-center max-w-full bottom-[1531px] h-[394px] min-h-[394px] w-[454px] border black">  
      <img
      loading="lazy"
      src={Image41}
      alt="Access Matchmaking"
      className=" object-contain w-full h-screen  "
    />
      </section>
      </div>
      </div>
      
     
  
  <div className="flex flex-col top-0 left-0 w-full h-full flex items-center justify-center ">
    <div className="flex flex-row md:flex-row md:items-center space-x-4 border border-2 border-black-500 bg-grey1 m-2 p-1 px-2 rounded-lg">
      <button onClick={handleToggle} className={`p-2 px-4 text-2xl font-bold rounded-md ${isToggled ? "bg-white1 border border-4" : "bg-grey1"}`}>Before</button>
      <button onClick={handleToggle} className={`p-2 px-4 text-2xl font-bold rounded-md ${isToggled ? "bg-grey1" : "bg-white1 border border-4"}`}>After</button>
    </div>

    <section className="flex flex-col justify-center max-w-full h-[720px] w-[771px] bottom-[701px] left-[371px] z-0">
  <div className="flex flex-col flex-1 px-5 py-10 w-full bg-white rounded-3xl md:px-20 md:max-w-full">
   
    <figure className="flex flex-col justify-center mt-5 max-w-full">
      <img
        loading="lazy"
        src={isToggled ? `src/assets/before.png` : `src/assets/after.png`}
        alt="Before and after comparison"
        className="object-contain flex-1 w-full aspect-[1.27] max-md:max-w-full"
      />
    </figure>
  {  isToggled ? <h2 className="mt-3 text-4xl font-extrabold leading-10 text-black w-full max-w-full">
      How to find the right <br />
      investor connections dude?
    </h2>  : <h2 className="mt-3 text-4xl font-extrabold leading-10 text-black w-full max-w-full">
    Woah! MangoC is a gamechanger 
    for early stage founders bro
    </h2> }
  </div>
</section>
  </div>

<section className="flex justify-center self-center items-center text-center flex-col w-full ">
        <h2 className="w-full text-5xl font-extralight text-black leading-[50.4px] max-md:max-w-full  p-2 mt-24">
        Get access to MangoC to raise funds
        <br />
        for your startup.
        </h2>
       


       <button className="flex overflow-hidden  z-0 flex-col max-w-full text-xl leading-7 text-white bg-black rounded-3xl m-4 px-8 py-4">
        Join Beta
      </button>

      <div className=" mb-24 left-[545px]">
        <Avatar />
      </div>
      <section className="w-full bg-white py-4 px-6 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex items-center">
        <div className="w-1/4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef3151962e1447ed3f2c784c56c208fba75c045528cc2f4b9dd2d076e2fc8522?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
            alt="Company logo"
            width={150}
            height={39}
            className="object-contain w-auto h-8"
          />
        </div>
        <p className="w-2/2 text-center text-base sm:text-xl font-semibold leading-6 text-black">
          built by second time founders for first time founders{' '}
          <a href="#community" className="underline decoration-auto decoration-solid underline-offset-4 hover:text-gray-600 transition-colors">
            Community
          </a>
        </p>
      </div>
    </section>
      </section>
    </main>
  );
}