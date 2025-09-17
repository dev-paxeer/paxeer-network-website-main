import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-[#0A0B0E] text-white">
      <Header />
      
      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6">Get Started with Paxeer</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-[#1E1E2D] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">For Developers</h2>
            <Link 
              to="/developers" 
              className="mt-4 inline-block px-6 py-2 bg-[#35b7ff] text-white rounded hover:bg-[#2a9bda] transition-colors"
            >
              Developer Resources
            </Link>
          </div>
          
          <div className="bg-[#1E1E2D] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">For Traders</h2>
            <Link 
              to="/traders-guide" 
              className="mt-4 inline-block px-6 py-2 bg-[#35b7ff] text-white rounded hover:bg-[#2a9bda] transition-colors"
            >
              Trading Guide
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
