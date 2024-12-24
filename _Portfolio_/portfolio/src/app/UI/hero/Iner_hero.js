import React from 'react';
import Image from 'next/image';
function InerHero() {
  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col gap-0 ">
        {/* First Row */}
        <div className="font-bold h-fit w-64 my-6 rounded-3xl p-6 bg-black-gradient ">
          <Image className='w-60 rounded-2xl align-middle '
        src='/my.jpg' alt='my pic'
        width={1000}
        height={760}/>


        </div>
        <div className="font-bold col-start-2 col-span-2 ">
          <div className='grid grid-rows-2 grid-flow-col gap-0'>

            {/* row 1 with icons */}
          <div className="col-span-2 gap-0 ...">
            <div className='flex flex-row my-4 '>
             <Image className='w-10 h-fit mx-4 rounded-2xl opacity-55'src="/images 2.png" alt='icon'width={1000}
             height={760}/>
            <h5 className='text-6xl font-sans antialiased font-semibold '>SELF-SUMMARY</h5>
            <Image className='w-10 h-fit mx-4 rounded-2xl opacity-55'src="/images 2.png" alt='icon'width={1000}
            height={760}/>
            </div> 
            {/* container with summary */}
           <div className=" text-left 
           rounded-3xl mx-7 gap-0
           bg-black-gradient">
            <Image className='w-7 h-fit mx-5 rounded-2xl opacity-55'src="/icon.png" alt='icon'
            width={1000}
            height={760 }/>
            <article className='text-pretty p-5'>
              <h6 className=' text-3xl font-medium font-sans'>SahilPanwar</h6>
              <p className=' text-sm font-light font-sans opacity-80'>I’m Sahil, a passionate tech enthusiast pursuing BTech in Computer Science. Skilled in React, Flutter, and UI/UX, I’m a GDSC core member, hackathon winner, and former Semi Hyphen intern, focused on creating impactful digital solutions.
              </p>
            </article>
           </div>
          </div>
           
          </div>
        </div>
           
      </div>
    </>
  );
}
export default InerHero;
