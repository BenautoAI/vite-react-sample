import { useState } from 'react';

interface HeaderProps {
  // Component can be extended with optional props in the future
}

function Header(_props: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header__container bg-white shadow-md'>
      <div className='header__content flex flex-row items-center justify-between w-full px-6 py-4 max-w-7xl mx-auto'>
        {/* Logo Section - Left */}
        <div className='header__logo flex flex-row items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity'>
          <div className='header__logo-icon w-10 h-10 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>
            <span className='text-white font-bold text-lg'>SS</span>
          </div>
          <span className='header__logo-text text-xl font-bold text-gray-900'>SUDDENLYSPACES</span>
        </div>

        {/* Desktop Navigation - Right */}
        <nav className='header__nav hidden md:flex flex-row items-center gap-8'>
          <button className='header__nav-item text-gray-700 hover:text-gray-900 font-medium transition-colors'>
            Switch to Tenant
          </button>
          <button className='header__cta-button bg-emerald-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors'>
            List Your Space
          </button>
          <button className='header__language-selector text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center gap-2'>
            <span>🇬🇧</span>
            <span>EN</span>
          </button>
          <button className='header__auth-button text-gray-700 hover:text-gray-900 font-medium transition-colors'>
            Sign Up
          </button>
          <button className='header__auth-button bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors'>
            Login
          </button>
        </nav>

        {/* Mobile Hamburger Menu - Right */}
        <button
          className='header__hamburger md:hidden flex flex-col gap-1.5 cursor-pointer'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          <span className={`header__hamburger-line w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`header__hamburger-line w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`header__hamburger-line w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className='header__mobile-nav md:hidden bg-gray-50 border-t border-gray-200 px-6 py-4'>
          <div className='flex flex-col gap-4'>
            <button className='header__mobile-nav-item text-left text-gray-700 hover:text-gray-900 font-medium transition-colors'>
              Switch to Tenant
            </button>
            <button className='header__cta-button bg-emerald-500 text-white w-full px-6 py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors'>
              List Your Space
            </button>
            <button className='header__mobile-nav-item text-left text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center gap-2'>
              <span>🇬🇧</span>
              <span>EN</span>
            </button>
            <div className='flex flex-col gap-2 pt-4 border-t border-gray-200'>
              <button className='header__auth-button text-left text-gray-700 hover:text-gray-900 font-medium transition-colors'>
                Sign Up
              </button>
              <button className='header__auth-button bg-gray-900 text-white w-full px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors'>
                Login
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
