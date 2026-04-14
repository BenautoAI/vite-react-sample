interface HeaderProps {
  onLoginClick?: () => void;
  onSignUpClick?: () => void;
}

function Header(props: HeaderProps) {
  return (
    <header className='
      w-full
      h-auto
      bg-white
      flex
      flex-row
      items-center
      justify-between
      px-10
      py-4
      border-b
      border-gray-200
    '>
      {/* Logo and Brand */}
      <div className='
        flex
        flex-row
        items-center
        gap-2
      '>
        <div className='
          text-2xl
          font-bold
          tracking-wide
        '>
          SUDDENLYSPACES
        </div>
      </div>

      {/* Right Navigation */}
      <div className='
        flex
        flex-row
        items-center
        gap-6
      '>
        <button className='
          text-black
          font-semibold
          text-sm
          hover:opacity-75
        '>
          Switch to Tenant
        </button>

        <button className='
          bg-black
          text-white
          font-semibold
          text-sm
          px-6
          py-2
          rounded-full
          hover:opacity-90
        '>
          List Your Space
        </button>

        <div className='
          text-black
          font-medium
          text-sm
          border
          border-black
          px-2
          py-1
          rounded
        '>
          EN
        </div>

        <button className='
          text-black
          font-semibold
          text-sm
          hover:opacity-75
        '
        onClick={props.onSignUpClick}
        >
          Sign Up
        </button>

        <button className='
          text-black
          font-semibold
          text-sm
          hover:opacity-75
        '
        onClick={props.onLoginClick}
        >
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
