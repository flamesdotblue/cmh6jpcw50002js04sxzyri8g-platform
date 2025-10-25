import React from 'react';
import Spline from '@splinetool/react-spline';
import { Home, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative w-full">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold text-slate-900">
            <div className="h-9 w-9 rounded-md bg-slate-900 text-white grid place-items-center">
              <Home className="h-5 w-5" />
            </div>
            <span className="tracking-tight">MIS Realty</span>
            <span className="hidden sm:inline text-slate-500">· Philadelphia</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#listings" className="text-slate-700 hover:text-slate-900">Listings</a>
            <a href="#team" className="text-slate-700 hover:text-slate-900">Our Team</a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900">Contact</a>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">
            <Phone className="h-4 w-4" />
            Get in touch
          </a>
        </div>
      </nav>

      <section id="top" className="relative h-[92vh] min-h-[640px] w-full">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/40 via-white/30 to-white/90" />

        <div className="relative z-10 pt-28 sm:pt-32 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-slate-900/90 text-white px-3 py-1 text-xs tracking-wide shadow-sm">Philadelphia · Luxury · Modern</span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
                Find your next home with MIS Realty
              </h1>
              <p className="mt-4 text-lg text-slate-700 max-w-xl">
                A boutique real estate agency in the heart of Philadelphia. We specialize in modern living spaces, luxury condos, and family-friendly homes across the city and suburbs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#listings" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">
                  Browse Featured Listings
                </a>
                <a href="#team" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 ring-1 ring-slate-300 px-6 py-3 text-sm font-semibold shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400">
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
