import React from 'react';

function InerHero() {
  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col gap-0 ">
        {/* First Row */}
        <div className="font-bold h-fit w-60 border-2 border-sky-500 rounded-3xl p-2 ">
          <img className='w-50 rounded-2xl align-middle '
        src='src\Components\UI\hero\assets\my.jpg'/>

        </div>
        <div className="font-bold col-start-2 col-span-2 ">

          <div className='grid grid-rows-2 grid-flow-col gap-0'>

            {/* row 1 with icons */}
          <div className="col-span-2 gap-0 ...">
            <div className='flex flex-row'>
             <img className='w-10 h-fit mx-4 rounded-2xl opacity-55'src="src\Components\UI\hero\assets\images 2.png" alt='icon'/>
            <h5 className='text-6xl font-sans antialiased font-semibold '>SELF-SUMMARY</h5>
            <img className='w-10 h-fit mx-4 rounded-2xl opacity-55'src="src\Components\UI\hero\assets\images 2.png" alt='icon'/>
            
            </div>

           
          </div>
           {/* container with summary */}
           <div className="row-span-2 col-span-2 text-left absolute top-32
           rounded-3xl mx-8 gap-0
           bg-black-gradient">
  <img className='w-7 h-fit mx-5 rounded-2xl opacity-55'src="src\Components\UI\hero\assets\icon.png" alt='icon'/>
  <article className='text-pretty m-5'>
    <h6 className=' text-3xl font-medium font-sans'>SahilPanwar</h6>
    <p className=' text-sm font-light font-sans opacity-80'>I’m Sahil, a passionate tech enthusiast pursuing BTech in Computer Science. Skilled in React, Flutter, and UI/UX, I’m a GDSC core member, hackathon winner, and former Semi Hyphen intern, focused on creating impactful digital solutions.
    </p>
  </article>
</div>
          
          </div>
           </div>
           
      </div>
    </>
  );
}
export default InerHero;
