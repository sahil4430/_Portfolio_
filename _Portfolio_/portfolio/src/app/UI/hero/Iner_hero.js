// import React from 'react';
// import Image from 'next/image';
// function InerHero() {
//   return (
//     <>
//       <div className="grid grid-rows-1
//        grid-flow-col gap-0 ">
//         {/* First Row */}
//         <div className="font-bold h-fit w-64 my-8 rounded-3xl p-5 bg-black-gradient ">
//           <Image className='w-60 rounded-2xl align-middle '
//         src='/my.jpg' alt='my pic'
//         width={1000}
//         height={760}/>


//         </div>
//         <div className="font-bold col-start-2 col-span-2 ">
//           <div className='grid grid-rows-0 grid-flow-col gap-0'>
//             {/* row 1 with icons */}
//           <div className="col-span-2 gap-0 ...">
//             <div className='flex flex-row my-4 '>
//              <Image className='w-10 h-fit mx-4 rounded-2xl opacity-55'src="/images 2.png" alt='icon'width={1000}
//              height={760}/>
//             <h5 className='text-6xl font-sans antialiased font-semibold '>SELF-SUMMARY</h5>
//             <Image className='w-10 h-fit mx-4 rounded-2xl opacity-55'src="/images 2.png" alt='icon'width={1000}
//             height={760}/>
//             </div> 

//             {/* container with summary */}
//            <div className=" text-left 
//            rounded-3xl mx-7 gap-0
//            bg-black-gradient">
//             <Image className='w-7 h-fit mx-5 rounded-2xl opacity-55'src="/icon.png" alt='icon'
//             width={1000}
//             height={760 }/>
//             <article className='text-pretty p-5'>
//               <h6 className=' text-3xl font-medium font-sans'>SahilPanwar</h6>
//               <p className=' text-sm font-light font-sans opacity-80'>I’m Sahil, a passionate tech enthusiast pursuing BTech in Computer Science. Skilled in React, Flutter, and UI/UX, I’m a GDSC core member, hackathon winner, and former Semi Hyphen intern, focused on creating impactful digital solutions.
//               </p>
//             </article>
//            </div>
//           </div>
//           </div>
//         </div>
//       </div>
//        {/* row 2  */}
//        <div className='grid grid-cols-2 gap-5 px-4 my-1 h-48'>
//             <div className='text-left 
//            rounded-3xl  gap-0
//            bg-black-gradient p-5'>
//               <h6 className="text-sm">EXPERINCE</h6>
//               <div className='m-2'>

//               </div>
//             </div>
//             <div className='text-left 
//            rounded-3xl  gap-0
//            bg-black-gradient p-5' ><h6 className="text-sm">ACHIVMENTS</h6></div>
//           </div>
//           {/* row 3  */}
//        <div className='grid grid-cols-3 gap-5 px-4 my-8 h-40'>
//             <div className='text-left 
//            rounded-3xl  gap-0
//            bg-black-gradient p-5'>
//               <h6 className="text-sm">EDUCATION</h6>
//               <div className='m-2'>

//               </div>
//             </div>
//              {/* lets work together */}
//             <div className='text-left 
//            rounded-3xl  gap-0
//            bg-black-gradient p-5' >hello</div>
          
//           {/* want more to know ??? ( cv link) */}
//            <div className='text-left 
//            rounded-3xl  gap-0
//            bg-black-gradient p-5' >hello</div>
//           </div>
//     </>
//   );
// }
// export default InerHero;

import React from 'react';
import Image from 'next/image';

function InerHero() {
  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-0 md:grid-cols-2 lg:grid-cols-3">
        {/* First Row */}
               <div className="font-bold h-fit w-full sm:w-60 md:w-74 lg:w-80 rounded-3xl p-5 bg-black-gradient">
          <Image className='w-full sm:w-60 md:w-74 lg:w-80 rounded-2xl align-middle'
            src='/my.jpg' alt='my pic'
            width={1000}
            height={760} />
        </div>
        <div className="font-bold col-start-2 col-span-2">
          <div className='grid grid-rows-0 grid-flow-col gap-0'>
            {/* row 1 with icons */}
            <div className="col-span-2 gap-0">
              <div className='flex flex-row my-4'>
                <Image className='w-10 h-fit mx-4 rounded-2xl opacity-55' src="/images 2.png" alt='icon' width={1000}
                  height={760} />
                <h5 className='text-xl md:text-3xl lg:text-5xl font-sans antialiased font-semibold'>SELF-SUMMARY</h5>
                <Image className='w-10 h-fit mx-4 rounded-2xl opacity-55' src="/images 2.png" alt='icon' width={1000}
                  height={760} />
              </div>

              {/* container with summary */}
              <div className="text-left rounded-3xl mx-2 md:mx-7 gap-0 bg-black-gradient">
                <Image className='w-7 h-fit mx-5 rounded-2xl opacity-55' src="/icon.png" alt='icon'
                  width={1000}
                  height={760} />
                <article className='text-pretty p-2 md:p-5'>
                  <h6 className='text-xl md:text-2xl lg:text-3xl font-medium font-sans'>Sahil Panwar</h6>
                  <p className='text-xs md:text-sm lg:text-base font-light font-sans opacity-80'>I’m Sahil, a passionate tech enthusiast pursuing BTech in Computer Science. Skilled in React, Flutter, and UI/UX, I’m a GDSC core member, hackathon winner, and former Semi Hyphen intern, focused on creating impactful digital solutions.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-4 my-6'>
        {/* Experience Section */}
        <div className='text-left rounded-3xl bg-black-gradient p-5'>
          <h6 className="text-sm text-white font-semibold">EXPERIENCE</h6>
          <div className='mt-4 text-white text-sm space-y-4'>
            <div>
              <p className="text-gray-400 opacity-60 text-xs">2023 - 2024</p>
              <p className="font-semibold">Semi Hyphen</p>
              <p className="text-gray-400 opacity-60 text-xs">UI/UX Designer</p>
            </div>
            <div>
              <p className="text-gray-400 opacity-60 text-xs">2022 - 2025</p>
              <p className="font-semibold">Front-End Developer / Social Lead</p>
              <p className="text-gray-400 opacity-60 text-xs">Google Developer Group of Student</p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className='text-left rounded-3xl bg-black-gradient p-5'>
          <h6 className="text-sm text-white font-semibold">ACHIEVEMENTS</h6>
          <div className='mt-4 text-white text-sm space-y-4'>
            <div>
              <p className="text-gray-400 text-xs opacity-60">2023</p>
              <p className="font-semibold">First Runner-Up - Smart India Hackathon</p>
              <p className="text-gray-400 text-xs opacity-60">National-Level Innovation Challenge</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs opacity-60">2023</p>
              <p className="font-semibold">Finalist - UHackathon</p>
              <p className="text-gray-400 text-xs opacity-60">Recognized for Creative Problem Solving</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs opacity-60">2024</p>
              <p className="font-semibold">Top 5 - Ideathon Hackathon</p>
              <p className="text-gray-400 text-xs opacity-60">Presented an AI-powered Community App</p>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 px-4 my-8'>
  {/* Left: Profiles */}
  <div className='rounded-3xl bg-black-gradient p-5 text-white flex flex-col justify-between col-span-1'>
   <div className='mt-4 text-white text-sm space-y-4'>
    <h6 className="text-sm text-white font-semibold">EDUCATION</h6>
            <div>
              <p className="text-gray-400text-xs opacity-60">2007 - 2022</p>
              <p className="font-semibold">M.R.R sen sec School</p>
              <p className="text-gray-400 text-xs opacity-60">upto 12th</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs opacity-60">2022 - Present</p>
              <p className="font-semibold">MM(DU)</p>
              <p className="text-gray-400 text-xs opacity-60">B.Tech C.S.E</p>
            </div>
          </div>
  </div>

  {/* Middle: Let's Work Together (wider) */}
  <div className="rounded-3xl bg-black-gradient pl-5 text-white relative overflow-hidden col-span-2">
    {/* Top-left sparkle */}
    <Image className='w-7 h-fit mx-5  rounded-2xl opacity-55' src="/icon.png" alt='icon'
                  width={1000}
                  height={760} />
    <p className="text-4xl font-semibold leading-snug mt-4">
      Let&apos;s<br />
      work <span className="text-blue-500 dark:text-blue-400">together.</span>
    </p>
    {/* Bottom-right arrow */}
    <div className="absolute bottom-2 right-2 m-8 opacity-40">
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </div>

  {/* Right: Credentials */}
  <div className='rounded-3xl bg-black-gradient p-5 text-white flex flex-col justify-between col-span-1' onClick={() => window.open('https://drive.google.com/file/d/1v9CRMPFf3KwhODuyR1jxPIMzqGeOcfru/view?usp=drive_link', '_blank')}>
    
    <div className="text-gray-400 text-xs mt-28">MORE ABOUT ME</div>
    <div className="text-lg font-semibold">Credentials</div>
  </div>
</div>

    </>
  );
}

export default InerHero;
