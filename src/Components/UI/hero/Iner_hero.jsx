import React from 'react';

function InerHero() {
  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col gap-0 ">
        {/* First Row */}
        <div className="font-bold h-fit w-fit border-2 border-sky-500 rounded-3xl p-4 "><img className='w-50 rounded-2xl align-middle '
        src='src\Components\UI\hero\assets\my.jpg'
        /></div>
        <div className="font-bold col-start-2 border-2 border-sky-500 col-span-8 ">
          <div className='grid grid-rows-3 grid-flow-col gap-4'>

            {/* row 1 with icons */}
          <div className="col-span-2 ...">
            <div className='flex flex-row'>
             <img className='w-10 m-4 rounded-2xl opacity-55'src="src\Components\UI\hero\assets\images 2.png" alt='icon'/>
            <h5 className='text-7xl font-sans antialiased font-semibold '>SELF-SUMMARY</h5>
            <img className='w-10 m-4 rounded-2xl opacity-55'src="src\Components\UI\hero\assets\images 2.png" alt='icon'/>
            </div>
          </div>
          {/* container with summary */}
          <div className="row-span-2 col-span-2 h-fit w-fit border-2 border-sky-500 rounded-3xl mx-8 ">
          <img className='w-8 mx-8 rounded-2xl opacity-55'src="src\Components\UI\hero\assets\icon.png" alt='icon'/>
          <h6 className='mx-8 text-3xl font-medium font-sans'>SahilPanwar</h6>
          </div>
          </div>
           </div>
      </div>
    </>
  );
}
export default InerHero;
