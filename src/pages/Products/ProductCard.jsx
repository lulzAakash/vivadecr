import React, { useRef, useState } from 'react';

export default function ProductCard({ item }) {
  return (
    <>
      <div className='dabba flex justify-center  flex-col sm:mt-10'>
        {
          item[0].map((d) => (
            <div key={d.id} className='mb-10  bg-slate-50 flex flex-col justify-center items-center'>
              <h2 className='md:text-5xl text-3xl mb-10 mt-5 text-orange-600 font-semibold'>{d.title}</h2>
              <p className='md:px-60 px-8 md:text-center text-left mb-10 md:text-lg'>{d.des}</p>
            </div>
          ))
        }
        <div className='dabba flex justify-center md:px-20 flex-col items-center mb-20 md:gap-20 gap-y-10 sm:gap-10 sm:mt-10 '>
          {
            item[1].map((d) => (
              <div key={d.id} className="flex w-full flex-col items-center px-4">
                <div className='px-4'>
                  <img className="sm:max-w-sm  sm:h-[400px] h-[350px] rounded-lg mb-10" src={d.imgUrl} alt="Sunset in the mountains" />
                </div>
                <div className="py-2 text-center">
                  <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                  <p className="text-gray-700 text-base md:px-60 px-3">
                    {d.des}
                  </p>
                  <p className='pt-2'>Rs {d.rs}</p>
                </div>
                
                <div className='border-b-2 w-full sm:w-2/3 mt-5 border-slate-400 '></div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
