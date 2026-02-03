interface LogoHeaderProps {
  nickname: string;
  realname: string;
}

function LogoHeader(props: LogoHeaderProps) {
  return (
    <header className='
      logo-header__container
      flex 
      flex-row 
      items-center 
      justify-center 
      gap-8 
      w-full 
      py-8
    '>
      
      <div className='logo-header__logo'>
        <img
          src='/vite.svg'
          alt='Vite Logo'
          className='
            h-24 
            w-24 
            p-6 
            transition-all 
            duration-300 
            hover:drop-shadow-[0_0_2em_#646cffaa]
          '
        />
      </div>

      <div className='
        logo-header__avatar-section 
        flex 
        flex-row 
        items-center 
        gap-6
      '>
        
        <div className='
          logo-header__avatar-photo
          bg-gradient-to-r 
          from-[#6EE7B7] 
          via-[#3B82F6] 
          to-[#9333EA] 
          p-[6px] 
          rounded-full 
          hover:scale-110 
          transition-transform 
          duration-300
        '>
          <div className='rounded-full overflow-hidden w-20 h-20 bg-gray-900'>
            <img
              src='./src/assets/photo.png'
              alt='User Avatar'
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        <div className='logo-header__texts flex flex-col justify-center'>
          <div className='text__title'>
            <h1 className='text-xl font-semibold'>{props.nickname}</h1>
          </div>
          
          <div className='text__name mt-2'>
            <h2 className='text-lg text-gray-300'>{props.realname}</h2>
          </div>
          
          <div className='text__follow'>
            <button className='w-full mt-3 px-6 py-2'>
              Follow
            </button>
          </div>
        </div>
      </div>
      
    </header>
  );
}

export default LogoHeader;
