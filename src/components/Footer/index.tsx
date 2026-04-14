function Footer() {
  return (
    <footer className='
      w-full
      h-auto
      bg-white
      flex
      flex-row
      items-start
      justify-between
      px-20
      py-6
      border-t
      border-gray-200
    '>
      {/* Copyright */}
      <div className='
        text-black
        font-normal
        text-sm
      '>
        © SuddenlySpaces, 2024
      </div>

      {/* Company Links */}
      <div className='
        flex
        flex-row
        items-center
        gap-8
      '>
        <div className='
          text-black
          font-bold
          text-base
        '>
          Company
        </div>

        <button className='
          text-black
          font-semibold
          text-sm
          hover:opacity-75
        '>
          About
        </button>

        <button className='
          text-black
          font-semibold
          text-sm
          hover:opacity-75
        '>
          Careers
        </button>

        <button className='
          text-black
          font-semibold
          text-sm
          hover:opacity-75
        '>
          Press
        </button>

        <button className='
          text-black
          font-semibold
          text-sm
          hover:opacity-75
        '>
          Contact Us
        </button>
      </div>

      {/* Social Media Icons */}
      <div className='
        flex
        flex-row
        items-center
        gap-4
      '>
        <button className='
          w-6
          h-6
          text-black
          hover:opacity-75
        '>
          f
        </button>
        <button className='
          w-6
          h-6
          text-black
          hover:opacity-75
        '>
          in
        </button>
        <button className='
          w-6
          h-6
          text-black
          hover:opacity-75
        '>
          📷
        </button>
        <button className='
          w-6
          h-6
          text-black
          hover:opacity-75
        '>
          ▶️
        </button>
      </div>

      {/* Legal Links */}
      <div className='
        flex
        flex-row
        items-center
        gap-8
      '>
        <button className='
          text-black
          font-normal
          text-sm
          hover:opacity-75
        '>
          Terms of Use
        </button>

        <button className='
          text-black
          font-normal
          text-sm
          hover:opacity-75
        '>
          Privacy Policy
        </button>
      </div>
    </footer>
  );
}

export default Footer;
