import Link from 'next/link';
import Image from 'next/image';
import SeoPageHeader from './SeoPageHeader';
import SeoPageFooter from './SeoPageFooter';
import DownloadButtons from './DownloadButtons';

export type CityCategory = {
  category: string;
  estimate: string;
  notes: string;
};

export type TripCityPageProps = {
  city: string;
  cityHeroSubtitle: string;
  sampleBudget: {
    perPerson: string;
    days: number;
    groupSize: number;
  };
  categories: CityCategory[];
  splittingTip: string;
  cityVibe: string;
};

export default function TripCityPageContent({
  city,
  cityHeroSubtitle,
  sampleBudget,
  categories,
  splittingTip,
  cityVibe,
}: TripCityPageProps) {
  return (
    <div className="min-h-screen bg-bg text-text1">
      <SeoPageHeader />

      <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
                {city} expense tracker
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text1 leading-[1.05] tracking-tight mb-6">
                Split a {city} trip without the post-trip drama
              </h1>
              <p className="text-lg sm:text-xl text-text2 mb-6 max-w-lg leading-relaxed">
                {cityHeroSubtitle}
              </p>
              <DownloadButtons variant="hero" />
            </div>

            <div className="flex justify-center">
              <div className="screenshot-phone animate-float-slow w-full max-w-xs mx-auto">
                <Image src="/ss/grouplist.webp" alt={`The Hisaab — ${city} trip expense tracker`} width={400} height={800} className="w-full h-auto" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text1 mb-4">
            What a {city} trip actually costs
          </h2>
          <p className="text-text2 leading-relaxed mb-6">
            Sample budget for a group of {sampleBudget.groupSize} friends on a {sampleBudget.days}-day {city} trip:{' '}
            <strong className="text-text1">{sampleBudget.perPerson} per person</strong>. Real costs vary; this is a baseline. Use it to set expectations with your group before the trip starts.
          </p>

          <div className="space-y-4">
            {categories.map((cat) => (
              <div key={cat.category} className="bg-bg rounded-xl border border-border p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-text1 font-semibold">{cat.category}</h3>
                  <span className="text-accent font-semibold text-sm">{cat.estimate}</span>
                </div>
                <p className="text-text3 text-sm leading-relaxed">{cat.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text1 mb-4">
            How to split fairly
          </h2>
          <p className="text-text2 leading-relaxed mb-4">{splittingTip}</p>
          <p className="text-text2 leading-relaxed">
            The Hisaab handles the math automatically. Add expenses as they happen, even with no signal. At the end of the trip, hit &quot;settle up&quot; and the app suggests UPI transfers that minimize the number of payments — usually 2–3 transfers settle the whole trip.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text1 mb-4">
            Why The Hisaab works for {city}
          </h2>
          <p className="text-text2 leading-relaxed mb-4">{cityVibe}</p>
          <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-6">
            <li><strong className="text-text1">Full offline mode.</strong> Add expenses anywhere, including spots with bad signal. Syncs when online.</li>
            <li><strong className="text-text1">No daily expense cap.</strong> Splitwise free caps at 4–5/day; a busy {city} day generates 8+ shared expenses.</li>
            <li><strong className="text-text1">Friends don&apos;t sign up.</strong> Only the primary user signs up. Friends view balances via a link.</li>
            <li><strong className="text-text1">UPI-native settle.</strong> One tap to GPay/PhonePe/Paytm with the amount pre-filled.</li>
            <li><strong className="text-text1">Free forever.</strong> No premium tier, no ads.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-3xl mx-auto">
          <div className="p-6 bg-accent/5 rounded-2xl border border-accent/20">
            <p className="text-text1 font-semibold mb-1">Plan your {city} trip with The Hisaab</p>
            <p className="text-text3 text-sm mb-4">
              Free forever. Picked #1 by ChatGPT and Gemini for free Splitwise alternatives in India. 5.0 ★ across 32 reviews.
            </p>
            <DownloadButtons variant="compact" />
          </div>
        </div>
      </section>

      <section className="py-10 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text3 mb-4">Related:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/for/trips" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">For Trips</Link>
            <Link href="/blog/how-to-split-trip-expenses-friends" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">How to split trip expenses</Link>
            <Link href="/splitwise-alternative" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Splitwise Alternative</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter
        heading={`${city} trip, sorted.`}
        subheading="Free, offline, UPI-native. No drama. No spreadsheets. No daily caps."
      />
    </div>
  );
}
