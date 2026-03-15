interface HeaderProps {
  onSwitchToTenant?: () => void;
  onListYourSpace?: () => void;
  onSignUp?: () => void;
  onLogin?: () => void;
  onLanguageChange?: (lang: string) => void;
  currentLanguage?: string;
}

function Header(props: HeaderProps) {
  const {
    onSwitchToTenant,
    onListYourSpace,
    onSignUp,
    onLogin,
    onLanguageChange,
    currentLanguage = 'EN'
  } = props;

  return (
    <header className='
      header__container
      w-full
      bg-white
      border-b
      border-[#f4f4f4]
      flex
      flex-row
      items-center
      justify-between
      px-10
      py-4
      sticky
      top-0
      z-50
    '>
      {/* Logo Section */}
      <div className='header__logo'>
        <a href='/' className='flex flex-row items-center gap-2'>
          <svg className='w-8 h-8' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M3 3h18v18H3V3z' stroke='#000000' strokeWidth='1.5' strokeLinejoin='round' />
            <path d='M9 9l6 6m0-6l-6 6' stroke='#000000' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
          <span className='text-base font-semibold text-black tracking-wide'>SUDDENLYSPACES</span>
        </a>
      </div>

      {/* Navigation Actions */}
      <nav className='header__nav flex flex-row items-center gap-6'>
        {/* Switch to Tenant Button */}
        <button
          onClick={onSwitchToTenant}
          className='
            header__btn-switch
            text-black
            font-semibold
            text-sm
            font-montserrat
            leading-6
            hover:opacity-80
            transition-opacity
            duration-200
          '
        >
          Switch to Tenant
        </button>

        {/* List Your Space Button */}
        <button
          onClick={onListYourSpace}
          className='
            header__btn-primary
            bg-black
            text-white
            font-semibold
            text-sm
            font-montserrat
            leading-6
            px-6
            py-2
            rounded-full
            hover:opacity-90
            transition-opacity
            duration-200
          '
        >
          List Your Space
        </button>

        {/* Language Selector */}
        <div className='header__language flex flex-row items-center gap-2'>
          <svg className='w-4 h-4' viewBox='0 0 16 16' fill='none'>
            {/* Canadian Flag */}
            <rect width='16' height='16' fill='#BD3D44' rx='2' />
            <rect x='3' y='2' width='10' height='12' fill='white' />
            <path d='M8 4l1.2 3.6h3.8l-3 2.2 1.2 3.6-3-2.2-3 2.2 1.2-3.6-3-2.2h3.8L8 4z' fill='#000000' />
          </svg>
          <span
            onClick={() => onLanguageChange?.(currentLanguage)}
            className='
              text-black
              font-medium
              text-sm
              cursor-pointer
              border-b
              border-black
              pb-0.5
            '
          >
            {currentLanguage}
          </span>
        </div>

        {/* Sign Up Button */}
        <button
          onClick={onSignUp}
          className='
            header__btn-signup
            text-black
            font-semibold
            text-sm
            font-montserrat
            leading-6
            hover:opacity-80
            transition-opacity
            duration-200
          '
        >
          Sign Up
        </button>

        {/* Login Button */}
        <button
          onClick={onLogin}
          className='
            header__btn-login
            text-black
            font-semibold
            text-sm
            font-montserrat
            leading-6
            hover:opacity-80
            transition-opacity
            duration-200
          '
        >
          Login
        </button>
      </nav>
    </header>
  );
}

export default Header;
