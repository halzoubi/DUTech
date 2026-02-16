
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { MAJOR_DATA } from './constants';
import { getMajorAdvice } from './services/geminiService';
import { MajorInfo } from './types';

const App: React.FC = () => {
  const [adviceQuery, setAdviceQuery] = useState('');
  const [adviceResult, setAdviceResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAskGemini = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adviceQuery.trim()) return;
    
    setIsLoading(true);
    const result = await getMajorAdvice(adviceQuery);
    setAdviceResult(result);
    setIsLoading(false);
  };

  const renderMajorCard = (major: MajorInfo, colorClass: string, accentColor: string) => (
    <div className="flex flex-col group h-full">
      <div className="relative overflow-hidden rounded-t-lg">
        <div className={`${colorClass} p-10 transform transition-transform duration-500 group-hover:scale-[1.02]`}>
          <h2 className={`text-4xl font-bold uppercase tracking-tight mb-3`}>{major.name}</h2>
          <div className={`w-20 h-1 ${accentColor} mb-4`}></div>
          <p className="font-bold text-lg opacity-90">{major.tagline}</p>
        </div>
      </div>
      <div className="bg-white border-x border-b border-gray-200 p-8 space-y-8 flex-grow shadow-sm hover:shadow-md transition-shadow">
        <section>
          <h3 className="text-xs uppercase font-black text-gray-400 mb-4 tracking-widest">The Discipline</h3>
          <p className="text-gray-700 leading-relaxed text-base">{major.focus}</p>
        </section>

        <section>
          <h3 className="text-xs uppercase font-black text-gray-400 mb-4 tracking-widest">Key Required Courses</h3>
          <ul className="grid grid-cols-1 gap-y-1.5">
            {major.coreClasses.slice(0, 5).map((item, i) => (
              <li key={i} className="flex items-center text-gray-600 text-xs">
                <div className={`w-1.5 h-1.5 ${accentColor.replace('text-', 'bg-')} rounded-full mr-3 shrink-0`}></div>
                {item}
              </li>
            ))}
            <li className="text-gray-400 text-[10px] italic pt-1">+ and more in the official bulletin</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xs uppercase font-black text-gray-400 mb-4 tracking-widest">Potential Careers</h3>
          <div className="flex flex-wrap gap-2">
            {major.careers.map((career, i) => (
              <span key={i} className="bg-gray-100 border border-gray-200 px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                {career}
              </span>
            ))}
          </div>
        </section>

        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <a 
            href={major.url} 
            target="_blank" 
            className="flex-grow text-center bg-dom-blue text-white py-3 rounded text-sm font-bold hover:bg-opacity-90 transition-all shadow-sm"
          >
            Major Details
          </a>
          <a 
            href={major.bulletinUrl} 
            target="_blank" 
            className="flex-grow text-center border border-dom-blue text-dom-blue py-3 rounded text-sm font-bold hover:bg-dom-blue hover:text-white transition-all"
          >
            Bulletin
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[450px] overflow-hidden bg-dom-blue">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600" 
          alt="Technology at Dominican" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center px-4 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">
              Tech Pathways at<br />
              <span className="text-dom-gold italic">Dominican University</span>
            </h1>
            <p className="text-white text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
              Find your future in the digital world. Compare our six high-impact technology programs and discover the right fit for your career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Advisor Section */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-12 py-16">
        
        <section className="bg-dom-blue text-white p-10 rounded-lg shadow-xl mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-dom-gold opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Pathfinder Advisor: Find Your Fit</h2>
            <p className="text-blue-100 mb-8 max-w-2xl">
              Describe your interests, what you like doing with technology, or where you see yourself in five years. Our AI tool will suggest the best-aligned major for you.
            </p>
            
            <form onSubmit={handleAskGemini} className="flex flex-col md:flex-row gap-4">
              <input 
                type="text"
                value={adviceQuery}
                onChange={(e) => setAdviceQuery(e.target.value)}
                placeholder="e.g. I love working with data and using math to predict trends..."
                className="flex-grow p-4 bg-white text-dom-blue rounded focus:ring-4 focus:ring-dom-gold focus:outline-none transition-all placeholder:text-gray-400"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-dom-gold text-dom-blue px-10 py-4 rounded font-bold hover:bg-yellow-500 transition-all disabled:opacity-50 shadow-lg shrink-0"
              >
                {isLoading ? 'Consulting...' : 'Get Guidance'}
              </button>
            </form>

            {adviceResult && (
              <div className="mt-8 p-8 bg-white/10 backdrop-blur-sm rounded border border-white/20 text-white animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-dom-gold rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dom-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 15.657a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-dom-gold">Advisor Recommendation</h3>
                </div>
                <p className="text-lg font-light italic leading-relaxed">{adviceResult}</p>
              </div>
            )}
          </div>
        </section>

        {/* Multi-Major Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {renderMajorCard(MAJOR_DATA.cs, 'bg-dom-blue text-white', 'text-dom-gold')}
          {renderMajorCard(MAJOR_DATA.informatics, 'bg-dom-gold text-dom-blue', 'text-dom-blue')}
          {renderMajorCard(MAJOR_DATA.ds, 'bg-dom-gold text-dom-blue', 'text-yellow-200')}
          {renderMajorCard(MAJOR_DATA.cis, 'bg-dom-blue text-white', 'text-dom-gold')}
          {renderMajorCard(MAJOR_DATA.ba, 'bg-dom-blue text-white', 'text-dom-gold')}
          {renderMajorCard(MAJOR_DATA.mcs, 'bg-dom-gold text-dom-blue', 'text-yellow-200')}
        </div>

        {/* Expanded Comparison Table */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dom-blue mb-4">The Big Picture: At-A-Glance</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Compare the philosophical and practical differences between our technology degrees to ensure the right academic fit.</p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-xl">
            <table className="w-full border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-dom-blue">
                  <th className="p-6 text-left font-black uppercase text-[10px] tracking-widest text-gray-400 w-1/5">Key Feature</th>
                  <th className="p-6 text-left font-bold text-dom-blue">CS</th>
                  <th className="p-6 text-left font-bold text-dom-blue">Informatics</th>
                  <th className="p-6 text-left font-bold text-dom-blue">Data Science</th>
                  <th className="p-6 text-left font-bold text-dom-blue">CIS</th>
                  <th className="p-6 text-left font-bold text-dom-blue">Business Analytics</th>
                  <th className="p-6 text-left font-bold text-dom-blue">Math & CS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-bold bg-gray-50/50">Focus</td>
                  <td className="p-6 border-l italic">Software Engineering</td>
                  <td className="p-6 border-l italic">Human-Tech Interaction</td>
                  <td className="p-6 border-l italic">Advanced Data Analysis</td>
                  <td className="p-6 border-l italic">Business Technology</td>
                  <td className="p-6 border-l italic">Business Analysis</td>
                  <td className="p-6 border-l italic">Statistical Programming</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-bold bg-gray-50/50">Primary Goal</td>
                  <td className="p-6 border-l">Building systems</td>
                  <td className="p-6 border-l">User experience</td>
                  <td className="p-6 border-l">Predictive modeling</td>
                  <td className="p-6 border-l">Enterprise management</td>
                  <td className="p-6 border-l">Business Solutions</td>
                  <td className="p-6 border-l">Statistical Solutions</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-bold bg-gray-50/50">Math Level</td>
                  <td className="p-6 border-l">Moderate</td>
                  <td className="p-6 border-l">Moderate</td>
                  <td className="p-6 border-l">High</td>
                  <td className="p-6 border-l">Moderate</td>
                  <td className="p-6 border-l">Moderate</td>
                  <td className="p-6 border-l">High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-32 rounded-3xl overflow-hidden shadow-2xl bg-dom-blue">
           <div className="flex flex-col lg:flex-row items-stretch min-h-[450px]">
             <div className="lg:w-1/2 p-16 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-white mb-6">Find Your Pathway Today</h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Choosing a major is the first step in your career journey. Our tech faculty are here to mentor you, regardless of which path you choose. Both majors provide a rigorous Bachelor of Science (B.S.) degree.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-dom-gold text-dom-blue px-10 py-4 rounded-full font-bold hover:bg-white transition-all shadow-lg transform hover:-translate-y-1">
                    Start Application
                  </button>
                  <button className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all backdrop-blur-sm">
                    Talk to Faculty
                  </button>
                </div>
             </div>
             <div className="lg:w-1/2 relative hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" 
                  alt="Student Success" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dom-blue/20"></div>
             </div>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;
