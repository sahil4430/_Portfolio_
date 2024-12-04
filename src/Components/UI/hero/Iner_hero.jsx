import React from 'react';

function InerHero() {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-2 gap-y-8 ">
        {/* First Row */}
        <div className="font-bold h-fit w-fit border-2 border-sky-500 rounded-3xl"><img className='w-48 m-4 rounded-2xl'
        src='src\Components\UI\hero\assets\my.jpg'
        /></div>
        <div className="font-bold h-[12rem] col-start-2 border-2 border-sky-500">Hello in </div>
        
        <div className="font-bold h-[12rem] w-fit border-2 border-sky-500">Hello in Green</div>
        <div className="font-bold h-[12rem] w-5/6 border-2 border-sky-500">Hello in Green</div>
      </div>
    </>
  );
}

export default InerHero;
