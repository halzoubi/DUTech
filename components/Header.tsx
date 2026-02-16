
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-dom-blue py-2 px-4 flex justify-between items-center text-white text-xs uppercase font-semibold">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-dom-gold transition">Apply</a>
          <a href="#" className="hover:text-dom-gold transition">Visit</a>
          <a href="#" className="hover:text-dom-gold transition">Give</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-dom-gold transition">MyDU</a>
          <a href="#" className="hover:text-dom-gold transition">Email</a>
          <a href="#" className="hover:text-dom-gold transition">Directory</a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            {/* Using the logo style provided in the screenshot */}
            <img 
              src="https://www.dom.edu/themes/custom/dominican/logo.svg" 
              alt="Dominican University Logo" 
              className="h-12 md:h-14 w-auto"
              style={{ minWidth: '150px' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-2xl font-bold text-dom-blue tracking-tighter">DOMINICAN <span class="font-light">UNIVERSITY</span></div>';
              }}
            />
          </a>
        </div>
        
        <div className="hidden lg:flex space-x-8 text-dom-blue font-bold uppercase text-sm">
          <a href="#" className="hover:text-dom-gold border-b-2 border-transparent hover:border-dom-gold transition">Academics</a>
          <a href="#" className="hover:text-dom-gold border-b-2 border-transparent hover:border-dom-gold transition">Admission</a>
          <a href="#" className="hover:text-dom-gold border-b-2 border-transparent hover:border-dom-gold transition">Student Life</a>
          <a href="#" className="hover:text-dom-gold border-b-2 border-transparent hover:border-dom-gold transition">About</a>
        </div>

        <button className="bg-dom-gold p-2 rounded-sm text-dom-blue hover:bg-yellow-500 transition shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
