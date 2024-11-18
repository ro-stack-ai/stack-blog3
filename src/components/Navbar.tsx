import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-[#0a0a0a]/60 backdrop-blur-md rounded-[15px] border border-secondary">
          <div className="flex justify-between items-center h-16 px-6">
            <div className="flex items-center">
              <a href="/">
                <img 
                  src="https://storage.googleapis.com/msgsndr/jtuiI8nTYnHeufhSh7iZ/media/673a4057e921024daf4b677d.svg" 
                  alt="Stack Logo" 
                  className="h-8 w-auto"
                />
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="/blog" className={`text-white hover:text-[#baf463] transition-colors font-lato ${location.pathname === '/blog' ? 'text-[#baf463]' : ''}`}>
                blog
              </a>
              <a href="/#services" className="text-white hover:text-[#baf463] transition-colors font-lato">
                services
              </a>
              <a href="/#collaboration" className="text-white hover:text-[#baf463] transition-colors font-lato">
                collaboration
              </a>
              <a href="/#contact" className="px-6 py-2 bg-[#baf463] text-[#083110] rounded-[15px] font-lato font-bold hover:bg-[#a5e052] transition-colors">
                réservez un appel
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;