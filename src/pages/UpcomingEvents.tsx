'use client';

import * as React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { cn } from '@/src/lib/utils';
import { Button } from '@/src/components/ui/Button';

const EVENTS = [
  {
    id: 1,
    type: 'conference',
    slug: 'icas-2026',
    title: 'ICASD 2026 — International Research Conference',
    desc: 'Submit your research paper and join a leading international conference in Kuala Lumpur with global scholars and publication opportunities.',
    date: { day: '21', month: 'May' },
    time: '09:00 AM',
    location: 'Kuala Lumpur, Malaysia',
    image: '/assets/Image/conference.jpeg',
    tags: ['Sustainability', 'Innovation']
  },
  {
    id: 2,
    type: 'conference',
    slug: 'icgsd-2025',
    title: 'ICGSD 2025 — Global Academic Conference',
    desc: 'Attend a global academic conference with expert speakers, networking, and indexed research publication opportunities.',
    date: { day: '22', month: 'Jul' },
    time: '10:00 AM',
    location: 'Dubai, UAE',
    image: '/assets/Image/conference1.jpeg',
    tags: ['Global', 'Research']
  },
  {
    id: 3,
    type: 'award',
    slug: 'awards-2025',
    title: 'Academic Excellence Awards 2025',
    desc: 'Recognizing outstanding researchers and institutions through global awards and academic recognition programs.',
    date: { day: '15', month: 'Sep' },
    time: '06:00 PM',
    location: 'New Delhi, India',
    image: '/assets/Image/confrence2.jpeg',
    tags: ['Awards', 'Recognition']
  },
  {
    id: 4,
    type: 'workshop',
    slug: 'workshop-2026',
    title: 'Research Methodology Workshop',
    desc: 'Join an advanced workshop on research methodology, academic writing, and publication skills for researchers.',
    date: { day: '10', month: 'Aug' },
    time: '09:00 AM',
    location: 'Online / India',
    image: '/assets/Image/conference3.jpeg',
    tags: ['FDP', 'Online']
  }
];

const FILTERS = [
  { id: 'all', label: 'All Events' },
  { id: 'conference', label: 'Conferences' },
  { id: 'award', label: 'Awards' },
  { id: 'workshop', label: 'Workshops' }
];

export const UpcomingEvents = () => {
  const [filter, setFilter] = React.useState('all');
  const filteredEvents = EVENTS.filter(ev => filter === 'all' || ev.type === filter);

  return (
    <div className="bg-app-bg">
      {/* --- DARK HERO SECTION (Original Content) --- */}
      {/* --- PREMIUM DARK HERO SECTION (Image 2 Design with Original Content) --- */}
      <section data-annotate-id="international-conferences-hero-section" className="relative py-20 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Background Image - Events theme ke liye relevant seed use kiya hai */}
          <img src="/assets/Image/event3.png" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-b from-navy via-navy/80 to-navy" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            {/* Tag Update */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-[10px] font-bold tracking-[2px] uppercase text-gold mb-6">
              Upcoming Academic Events
            </div>

            {/* Title Update */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              International Research <span className="text-gold italic font-serif">Events & Conferences</span>
            </h1>

            {/* Description Update */}
            <p className="text-lg text-white/70 leading-relaxed mb-10">
              Explore global conferences, workshops, and academic awards connecting researchers and institutions worldwide to foster innovation and scholarly collaboration.
            </p>

            {/* Buttons Update */}
            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg">Submit Abstract</Button>
              <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10">View Calendar</Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- EVENTS LIST SECTION (Original Layout) --- */}
      <section className="py-24 bg-app-bg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-navy) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Filters remain the same */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  'px-6 py-2 rounded-full text-sm font-bold border-1.5 transition-all duration-300',
                  filter === f.id
                    ? 'bg-navy text-white border-navy shadow-sh-md'
                    : 'bg-app-bg border-border-light text-text-muted hover:border-navy hover:text-navy'
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredEvents.map((ev) => (
                  <motion.div
                    key={ev.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-app-bg rounded-[2rem] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 shadow-sm border border-black/[0.03]"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img src={ev.image} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-5 left-6 bg-[#F05C26] rounded-2xl p-3.5 text-center min-w-[64px] shadow-md z-10">
                        <div className="text-2xl font-black text-navy leading-none mb-1">{ev.date.day}</div>
                        <div className="text-[11px] font-bold tracking-widest uppercase text-navy/90">{ev.date.month}</div>
                      </div>
                      <div className="absolute bottom-5 left-6 px-4 py-1.5 rounded-full bg-[#2A3342]/95 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-white shadow-sm z-10">
                        {ev.type}
                      </div>
                    </div>
                    <div className="p-7 bg-[#f2f4f7] group-hover:bg-white transition-colors duration-500">
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          <Clock size={15} className="text-[#F05C26]" /> {ev.time}
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          <MapPin size={15} className="text-[#F05C26]" /> {ev.location}
                        </div>
                      </div>
                      <h3 className="text-xl font-extrabold text-navy leading-snug group-hover:text-[#F05C26] transition-colors duration-300">
                        {ev.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;