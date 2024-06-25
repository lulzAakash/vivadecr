import React, { useRef, useState } from 'react';

export default function ServiceCard({ item }) {
  return (
    <>
      <div className='dabba flex justify-center md:px-20 flex-wrap mb-20 md:gap-20 gap-y-10 sm:gap-10 sm:mt-10 px-8'>
        {
          item.map((d) => (
            <div key={d.id} className="max-w-xs rounded-lg overflow-hidden shadow-lg">
              <img className="w-full h-60" src={d.imgUrl} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
               
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}
