import TripCityPageContent from '@/components/TripCityPageContent';

export default function BangaloreTripPage() {
  return (
    <TripCityPageContent
      city="Bangalore"
      cityHeroSubtitle="Bangalore weekend trips and college reunions: Airbnb in Indiranagar, brewpub crawls, MTR breakfasts, Uber across town. Split fairly with item-wise meal splits and offline mode for sub-basement bars."
      sampleBudget={{ perPerson: '₹4,000–12,000', days: 3, groupSize: 6 }}
      categories={[
        {
          category: 'Stay (Airbnb / hotel)',
          estimate: '₹1,500–4,000 per person',
          notes: 'Airbnb in Indiranagar, Koramangala, or Whitefield. Hotel in central areas. Splits equal.',
        },
        {
          category: 'Food (brunches + restaurants)',
          estimate: '₹1,500–3,500 per person',
          notes: 'Bangalore café culture: Glen&apos;s Bakehouse, Truffles, MTR. Item-wise split for shared mains.',
        },
        {
          category: 'Brewpubs + bars',
          estimate: '₹1,000–3,000 per person',
          notes: 'Toit, Arbor, Byg Brewski. Split among drinkers only; non-drinkers excluded.',
        },
        {
          category: 'Local transport (Uber/Ola)',
          estimate: '₹500–1,500 per person',
          notes: 'BLR airport runs ~₹500–800; intra-city rides shared among riders.',
        },
        {
          category: 'Activities (Cubbon Park, MG Road, day trips)',
          estimate: '₹500–2,000 per person',
          notes: 'Mostly free or low-cost. Day trip to Nandi Hills or Mysore: split fuel + food.',
        },
        {
          category: 'Travel to/from Bangalore',
          estimate: '₹2,000–5,000 per person',
          notes: 'Flight from most cities ~₹4,000–6,000 one-way. Train cheaper but slower.',
        },
      ]}
      splittingTip="Bangalore weekend trips have a clear pattern: equal-split for stays and Ubers between meals; item-wise for restaurants (vegetarians, dietary preferences); drinker-only for bars. Use The Hisaab&apos;s 'split between selected members' for the bar nights — it cleanly handles 'only 4 of 6 went to Toit'."
      cityVibe="Bangalore has reliable cell signal in most areas, so offline mode matters less here than in hill stations. What matters more in Bangalore is speed of expense logging — when you're rolling between three brewpubs in an evening, you need to log bills in 10 seconds. The Hisaab opens fast and adds expenses with the 1k chip + smart split."
    />
  );
}
