
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dom-blue text-white py-16 px-4 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <div className="mb-8">
            {/* Using white logo (inverted SVG) for the dark background */}
            <img 
              src="https://www.dom.edu/themes/custom/dominican/logo.svg" 
              alt="Dominican University" 
              className="h-16 w-auto brightness-0 invert" 
              style={{ minWidth: '180px' }}
            />
          </div>
          <address className="not-italic text-gray-300 text-sm leading-relaxed">
            7900 W. Division Street<br />
            River Forest, IL 60305<br />
            (708) 366-2490
          </address>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 text-dom-gold border-b border-dom-gold inline-block">Academics</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">Majors & Programs</a></li>
            <li><a href="#" className="hover:text-white transition">Graduate Studies</a></li>
            <li><a href="#" className="hover:text-white transition">Professional Education</a></li>
            <li><a href="#" className="hover:text-white transition">Registrar</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-dom-gold border-b border-dom-gold inline-block">Resources</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">Library</a></li>
            <li><a href="#" className="hover:text-white transition">Career Programs</a></li>
            <li><a href="#" className="hover:text-white transition">Accessibility Services</a></li>
            <li><a href="#" className="hover:text-white transition">Student Hub</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-dom-gold border-b border-dom-gold inline-block">Stay Connected</h4>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-xs text-gray-400 text-center">
        © 2024 Dominican University. All Rights Reserved. | Non-Discrimination Policy | Privacy Policy
      </div>
    </footer>
  );
};

export default Footer;
