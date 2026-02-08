function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#242424] text-white py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Multi-column layout */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-8">
          
          {/* Column 1 - Branding */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-xl font-bold">React TikTok</h3>
            <p className="text-sm text-gray-400">Share moments, connect with friends</p>
          </div>

          {/* Column 2 - Navigation Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-sm font-semibold mb-1">Company</h4>
            <a 
              href="#" 
              className="text-sm text-gray-400 hover:text-[#646cff] transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-400 hover:text-[#646cff] transition-colors duration-200"
            >
              Contact
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-400 hover:text-[#646cff] transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-400 hover:text-[#646cff] transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>

          {/* Column 3 - Social Media */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-sm font-semibold mb-1">Follow Us</h4>
            <a 
              href="#" 
              className="text-sm text-gray-400 hover:text-[#646cff] transition-colors duration-200"
              aria-label="Follow us on Twitter"
            >
              🐦 Twitter
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-400 hover:text-[#646cff] transition-colors duration-200"
              aria-label="Follow us on Instagram"
            >
              📷 Instagram
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-400 hover:text-[#646cff] transition-colors duration-200"
              aria-label="Follow us on GitHub"
            >
              💻 GitHub
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-400 hover:text-[#646cff] transition-colors duration-200"
              aria-label="Follow us on LinkedIn"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} React TikTok. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
