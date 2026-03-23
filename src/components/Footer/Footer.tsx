import React from 'react';

/**
 * Footer component with company info, links, and social media icons
 */
export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-12 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black">SUDDENLYSPACES</h3>
            <p className="text-sm text-gray-600">
              Discover residential and commercial properties with ease.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-black">Company</h4>
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              About
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              Careers
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              Press
            </a>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-black">Legal</h4>
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              Contact Us
            </a>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-black">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="text-xl hover:opacity-70">
                f
              </a>
              <a href="#" className="text-xl hover:opacity-70">
                in
              </a>
              <a href="#" className="text-xl hover:opacity-70">
                📷
              </a>
              <a href="#" className="text-xl hover:opacity-70">
                ▶️
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            © 2024 SUDDENLYSPACES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
