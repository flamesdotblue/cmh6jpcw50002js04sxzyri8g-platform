import React from 'react';
import { Star, MapPin, Home } from 'lucide-react';

const listings = [
  {
    id: 1,
    title: 'Modern Condo with Skyline Views',
    address: '2200 Market St, Unit 28A, Philadelphia, PA',
    price: '$1,150,000',
    beds: 2,
    baths: 2,
    sqft: 1450,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1505692794403-34cb4b9b0953?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Historic Brownstone Charm',
    address: '1706 Pine St, Philadelphia, PA',
    price: '$875,000',
    beds: 3,
    baths: 2,
    sqft: 1900,
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Family Home Near Fairmount Park',
    address: '4120 W Girard Ave, Philadelphia, PA',
    price: '$649,000',
    beds: 4,
    baths: 3,
    sqft: 2200,
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Contemporary Loft in Fishtown',
    address: '1234 Frankford Ave, Philadelphia, PA',
    price: '$725,000',
    beds: 2,
    baths: 2,
    sqft: 1320,
    rating: 4.5,
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop',
  },
];

function Rating({ value }) {
  const full = Math.floor(value);
  const stars = Array.from({ length: 5 });
  return (
    <div className="flex items-center gap-1">
      {stars.map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < full ? 'text-amber-500 fill-amber-500' : 'text-slate-300'}`} />
      ))}
      <span className="ml-1 text-xs text-slate-500">{value.toFixed(1)}</span>
    </div>
  );
}

export default function Listings() {
  return (
    <section id="listings" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Featured Listings</h2>
            <p className="mt-2 text-slate-600">Curated properties across Center City, Fishtown, Rittenhouse, and beyond.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white ring-1 ring-slate-300 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-100">
            <Home className="h-4 w-4" />
            List your property
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listings.map((l) => (
            <article key={l.id} className="group overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={l.img} alt={l.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute left-3 top-3 rounded-md bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-semibold text-slate-900 shadow">
                  {l.price}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-slate-900 line-clamp-1">{l.title}</h3>
                  <Rating value={l.rating} />
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  <span className="line-clamp-1">{l.address}</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-slate-600">
                  <div className="rounded-md bg-slate-50 ring-1 ring-slate-200 px-2 py-1 text-center">
                    <span className="font-semibold text-slate-900">{l.beds}</span> bd
                  </div>
                  <div className="rounded-md bg-slate-50 ring-1 ring-slate-200 px-2 py-1 text-center">
                    <span className="font-semibold text-slate-900">{l.baths}</span> ba
                  </div>
                  <div className="rounded-md bg-slate-50 ring-1 ring-slate-200 px-2 py-1 text-center">
                    <span className="font-semibold text-slate-900">{l.sqft.toLocaleString()}</span> sqft
                  </div>
                </div>
                <button className="mt-4 w-full rounded-md bg-slate-900 text-white py-2 text-sm font-semibold hover:bg-slate-800">
                  Request a tour
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Why buyers choose MIS Realty</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
              <li className="rounded-md bg-slate-50 p-4 ring-1 ring-slate-200">Local expertise across all Philadelphia neighborhoods</li>
              <li className="rounded-md bg-slate-50 p-4 ring-1 ring-slate-200">Data-driven pricing and negotiations</li>
              <li className="rounded-md bg-slate-50 p-4 ring-1 ring-slate-200">Private showings and virtual tours</li>
              <li className="rounded-md bg-slate-50 p-4 ring-1 ring-slate-200">End-to-end support from search to close</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Client satisfaction</h3>
            <div className="mt-3 flex items-center gap-2">
              <Rating value={4.9} />
              <span className="text-sm text-slate-600">Based on 250+ reviews</span>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <p>“They found us the perfect condo with a stunning skyline view. Seamless process!” — Ayesha R.</p>
              <p>“Knowledgeable and responsive. We felt supported at every step.” — Daniel P.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
