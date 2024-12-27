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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-4 my-6 h-48'>
        <div className='text-left rounded-3xl gap-0 bg-black-gradient p-5'>
          <h6 className="text-sm">EXPERIENCE</h6>
          <div className='m-2'>
          </div>
        </div>
        <div className='text-left rounded-3xl gap-0 bg-black-gradient p-5'>
          <h6 className="text-sm">ACHIEVEMENTS</h6>
        </div>
      </div>
      {/* row 3 */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-4 my-8 h-40'>
        <div className='text-left rounded-3xl gap-0 bg-black-gradient p-5'>
          <h6 className="text-sm">EDUCATION</h6>
          <div className='m-2'>
          </div>
        </div>
        {/* lets work together */}
        <div className='text-left rounded-3xl gap-0 bg-black-gradient p-5'>hello</div>
        {/* want more to know ??? ( cv link) */}
        <div className='text-left rounded-3xl gap-0 bg-black-gradient p-5'>hello</div>
      </div>
    </>
  );
}

export default InerHero;
