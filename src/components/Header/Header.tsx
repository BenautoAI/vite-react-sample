import React from 'react';

/**
 * Header component for the landing page
 * Displays logo, navigation links, language selector, and authentication buttons
 */
export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 md:px-12">
      {/* Logo */}
      <div className="text-2xl font-bold text-black">SUDDENLYSPACES</div>

      {/* Navigation and Auth */}
      <div className="flex items-center gap-8">
        {/* Navigation Links */}
        <nav className="hidden gap-6 md:flex">
          <button className="text-sm font-medium text-gray-700 hover:text-black">
            Switch to Tenant
          </button>
          <button className="text-sm font-medium text-gray-700 hover:text-black">
            List Your Space
          </button>
        </nav>

        {/* Language Selector */}
        <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black">
          <span>EN</span>
          <span>🌐</span>
        </button>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <button className="rounded-sm border border-gray-300 px-4 py-2 text-sm font-medium text-black hover:bg-gray-50">
            Sign Up
          </button>
          <button className="rounded-sm bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};
