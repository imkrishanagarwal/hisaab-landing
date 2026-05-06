'use client';

import { motion } from 'framer-motion';

type Testimonial = {
  quote: string;
  author: string;
  source: 'Play Store' | 'App Store' | 'r/developersIndia';
};

const testimonials: Testimonial[] = [
  {
    quote:
      'I have deleted Splitwise and have been The Hisaab for over 15 days now. Kudos!',
    author: 'IamNavv',
    source: 'App Store',
  },
  {
    quote:
      "Unlike Splitwise it's not that complicated to use. Must-have app for the ones who stay in PGs!",
    author: 'Harshit Gupta',
    source: 'Play Store',
  },
  {
    quote: 'No ads, no nonsense. Easy to use.',
    author: 'Shresht Pratap Singh Thakur',
    source: 'Play Store',
  },
  {
    quote: 'Really very helpful, specially when in a trip with friends.',
    author: 'Aadarsh11',
    source: 'App Store',
  },
  {
    quote:
      'Clean design and simple interface. Works smoothly. Great app to manage personal finances without confusion.',
    author: 'Ahana@Anu',
    source: 'App Store',
  },
  {
    quote: 'It helped me so much in keeping my hisab records.',
    author: 'Krishna Kedia',
    source: 'Play Store',
  },
];

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="shrink-0 w-[300px] sm:w-[360px] mx-3 bg-bg border border-border rounded-2xl p-5">
      <div className="text-accent text-sm mb-2">★★★★★</div>
      <blockquote className="text-text2 text-sm leading-relaxed mb-4">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="text-xs text-text3">
        <span className="text-text1 font-medium">{t.author}</span>
        <span className="opacity-60"> · </span>
        <span>{t.source}</span>
      </figcaption>
    </figure>
  );
}

export default function TestimonialMarquee() {
  // Duplicate the list so the loop is seamless.
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="py-16 sm:py-20 bg-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
            Real users. Real reviews.
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text1 mb-3 tracking-tight leading-[1.05]">
            5.0 ★ across <span className="text-accent">32 reviews</span>.
          </h2>
          <p className="text-text2 text-base max-w-xl mx-auto">
            Names and platforms unedited. Pulled straight from Play Store and
            App Store.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-bg to-transparent z-10" />

        <motion.div
          className="flex"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
        >
          {loop.map((t, i) => (
            <Card key={`${t.author}-${i}`} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
