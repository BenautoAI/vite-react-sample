import React from 'react';

export interface CatAvatarProps {
  nickname: string;
  realname: string;
}

export default function CatAvatar(props: CatAvatarProps) {
  return (
    <div className='
      catavatar__container 
      flex 
      flex-col
      items-center
      w-full
      gap-6
      '>

      <div className='catavatar__illustration relative w-64 h-64 flex items-center justify-center'>
        {/* Outer circle */}
        <div className='absolute inset-0 rounded-full border-4 border-purple-900 bg-[#E8DCC4]'></div>
        
        {/* Inner rectangle base */}
        <div className='absolute w-48 h-32 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 border-2 border-purple-900'></div>
        
        {/* Wizard hat */}
        <div className='catavatar__hat absolute top-4 left-1/2 -translate-x-1/2 z-20'>
          {/* Hat brim */}
          <div className='hat__brim relative'>
            <div className='w-40 h-8 bg-[#4A5F8C] rounded-full border-4 border-[#2D3E5C] shadow-lg'></div>
            {/* Hat cone */}
            <div className='
              hat__cone
              absolute -top-20 left-1/2 -translate-x-1/2 w-0 h-0 
              border-l-[45px] border-l-transparent 
              border-r-[45px] border-r-transparent 
              border-b-[80px] border-b-[#4A5F8C]
              '>
              {/* Stars and moons decoration */}
              <div className='hat__decorations absolute top-4 left-1/2 -translate-x-1/2 w-24 flex flex-col gap-2'>
                <div className='flex justify-around items-center'>
                  <span className='text-yellow-400 text-xs'>★</span>
                  <span className='text-yellow-400 text-lg'>☾</span>
                </div>
                <div className='flex justify-center'>
                  <span className='text-yellow-400 text-base'>★</span>
                </div>
              </div>
            </div>
            {/* Hat tip fold */}
            <div className='hat__tip absolute -top-24 -right-8 w-8 h-12 bg-[#5B7AAF] 
              transform rotate-45 rounded-br-full border-2 border-[#2D3E5C]'></div>
          </div>
        </div>

        {/* TV/Robot head */}
        <div className='catavatar__head relative z-10 w-32 h-32 bg-[#8B6F47] rounded-lg border-4 border-[#6B5537] shadow-xl mt-8'>
          {/* Screen */}
          <div className='
            head__screen
            absolute inset-3 bg-gradient-to-br from-green-400 via-green-300 to-green-200 
            rounded border-2 border-[#6B5537] overflow-hidden
            '>
            {/* Screen reflection effects */}
            <div className='absolute top-2 left-2 w-8 h-6 bg-white opacity-40 rounded-full blur-sm'></div>
            <div className='absolute bottom-3 right-3 w-12 h-8 bg-green-500 opacity-30 rounded-full blur-md'></div>
          </div>
          
          {/* Control button */}
          <div className='head__button absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 
            bg-[#D4A574] rounded-full border-2 border-[#6B5537]'></div>
        </div>

        {/* Arms (4 arms like in the image) */}
        <div className='catavatar__arms absolute top-1/2 -translate-y-1/4 z-5'>
          {/* Left arms */}
          <div className='arms__left absolute -left-24 top-4'>
            {/* Upper left arm */}
            <div className='arm__upper absolute -top-2'>
              <div className='w-16 h-3 bg-[#2D2D2D] rounded-full border border-gray-600 -rotate-12'></div>
              <div className='arm__hand absolute -right-4 -top-3 w-10 h-8 bg-white rounded-full border-2 border-gray-600'>
                <div className='absolute top-1 left-1 w-2 h-4 bg-white border-l-2 border-gray-600'></div>
                <div className='absolute top-1 right-1 w-2 h-4 bg-white border-r-2 border-gray-600'></div>
              </div>
            </div>
            {/* Lower left arm */}
            <div className='arm__lower absolute top-6'>
              <div className='w-16 h-3 bg-[#2D2D2D] rounded-full border border-gray-600 rotate-12'></div>
              <div className='arm__hand absolute -right-4 -top-1 w-10 h-8 bg-white rounded-full border-2 border-gray-600'>
                <div className='absolute top-1 left-1 w-2 h-4 bg-white border-l-2 border-gray-600'></div>
                <div className='absolute top-1 right-1 w-2 h-4 bg-white border-r-2 border-gray-600'></div>
              </div>
            </div>
          </div>
          
          {/* Right arms */}
          <div className='arms__right absolute -right-24 top-4'>
            {/* Upper right arm */}
            <div className='arm__upper absolute -top-2 right-0'>
              <div className='w-16 h-3 bg-[#2D2D2D] rounded-full border border-gray-600 rotate-12'></div>
              <div className='arm__hand absolute -left-4 -top-3 w-10 h-8 bg-white rounded-full border-2 border-gray-600'>
                <div className='absolute top-1 left-1 w-2 h-4 bg-white border-l-2 border-gray-600'></div>
                <div className='absolute top-1 right-1 w-2 h-4 bg-white border-r-2 border-gray-600'></div>
              </div>
            </div>
            {/* Lower right arm */}
            <div className='arm__lower absolute top-6 right-0'>
              <div className='w-16 h-3 bg-[#2D2D2D] rounded-full border border-gray-600 -rotate-12'></div>
              <div className='arm__hand absolute -left-4 -top-1 w-10 h-8 bg-white rounded-full border-2 border-gray-600'>
                <div className='absolute top-1 left-1 w-2 h-4 bg-white border-l-2 border-gray-600'></div>
                <div className='absolute top-1 right-1 w-2 h-4 bg-white border-r-2 border-gray-600'></div>
              </div>
            </div>
          </div>
        </div>

        {/* Legs */}
        <div className='catavatar__legs absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-5'>
          {/* Left leg */}
          <div className='leg__left flex flex-col items-center'>
            <div className='w-3 h-8 bg-[#2D2D2D] border border-gray-600'></div>
            <div className='w-6 h-5 bg-[#6B5537] rounded border-2 border-[#4A3A27]'></div>
          </div>
          {/* Right leg */}
          <div className='leg__right flex flex-col items-center'>
            <div className='w-3 h-8 bg-[#2D2D2D] border border-gray-600'></div>
            <div className='w-6 h-5 bg-[#6B5537] rounded border-2 border-[#4A3A27]'></div>
          </div>
        </div>

        {/* Decorative stars and moons on hat brim */}
        <div className='hat__decoration-brim absolute top-16 left-1/2 -translate-x-1/2 w-36 flex justify-around z-15 pointer-events-none'>
          <span className='text-yellow-400 text-sm'>☾</span>
          <span className='text-yellow-400 text-xs'>★</span>
          <span className='text-yellow-400 text-sm'>☾</span>
        </div>
      </div>

      <div className='catavatar__texts text-center'>
        <div className='text__title'>
          <h1 className='text-2xl font-bold text-gray-800'>{props.nickname}</h1>
        </div>

        <div className='text__name mt-2'>
          <h2 className='text-lg text-gray-600'>{props.realname}</h2>
        </div>

        <div className='text__follow mt-4'>
          <button className='px-8 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors'>
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
