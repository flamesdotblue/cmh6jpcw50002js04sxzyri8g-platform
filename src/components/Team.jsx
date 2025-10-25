import React from 'react';
import { Users, Mail, Phone } from 'lucide-react';

const team = [
  {
    name: 'Mia Sanchez',
    role: 'Principal Broker',
    email: 'mia@misrealty.com',
    phone: '(215) 555-0112',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Ian Cooper',
    role: 'Senior Agent',
    email: 'ian@misrealty.com',
    phone: '(215) 555-0144',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Serena Patel',
    role: 'Buyer Specialist',
    email: 'serena@misrealty.com',
    phone: '(215) 555-0198',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Meet our team</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              MIS Realty is a Philadelphia-based agency focused on transparency, data, and delightful home-buying experiences. Our agents combine deep neighborhood knowledge with modern tools.
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Users className="h-4 w-4 text-slate-500" />
              <span>Licensed in Pennsylvania • Member, GPAR & NAR</span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.email} className="rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white shadow-sm">
              <img src={m.img} alt={m.name} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{m.name}</h3>
                <p className="text-sm text-slate-600">{m.role}</p>
                <div className="mt-3 flex flex-col gap-2 text-sm">
                  <a href={`mailto:${m.email}`} className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
                    <Mail className="h-4 w-4 text-slate-400" /> {m.email}
                  </a>
                  <a href={`tel:${m.phone}`} className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
                    <Phone className="h-4 w-4 text-slate-400" /> {m.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-6 lg:p-8">
          <h3 className="text-xl font-semibold text-slate-900">What our clients say</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              name: 'Evelyn M.',
              text: 'Our family found an amazing home near Fairmount Park. The team was patient and proactive.',
            }, {
              name: 'Carlos & Dana',
              text: 'Smooth selling experience. Great staging advice and sold above asking in 4 days.',
            }, {
              name: 'Noah K.',
              text: 'Professional, tech-forward, and trustworthy. Highly recommend MIS Realty.',
            }].map((t, i) => (
              <blockquote key={i} className="h-full rounded-xl bg-white ring-1 ring-slate-200 p-5 shadow-sm">
                <p className="text-slate-700">“{t.text}”</p>
                <footer className="mt-4 text-sm font-medium text-slate-900">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
