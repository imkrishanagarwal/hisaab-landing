import TripCityPageContent from '@/components/TripCityPageContent';

export default function GoaTripPage() {
  return (
    <TripCityPageContent
      city="Goa"
      cityHeroSubtitle="A 4-day Goa trip with 8 friends generates 25+ shared expenses — Airbnb, scooter rental, shacks, fuel, club covers. Split fairly with no daily caps and no signal-required sync."
      sampleBudget={{ perPerson: '₹8,000–18,000', days: 4, groupSize: 8 }}
      categories={[
        {
          category: 'Stay (Airbnb / hotel)',
          estimate: '₹2,500–5,000 per person',
          notes: 'Airbnb in North Goa or Anjuna for groups of 6–10 splits cleanly equal. Hotel for smaller groups.',
        },
        {
          category: 'Scooter rental + fuel',
          estimate: '₹400–600 per person',
          notes: 'Scooter at ₹400–500/day per pair, plus fuel. Split among riders.',
        },
        {
          category: 'Shack food + restaurants',
          estimate: '₹2,000–4,000 per person',
          notes: 'Item-wise split for non-veg vs veg. Drinks usually go on a separate split (only drinkers).',
        },
        {
          category: 'Clubs and bars',
          estimate: '₹1,500–4,000 per person',
          notes: 'Cover charges and drinks. Split only among people who went; non-drinkers excluded.',
        },
        {
          category: 'Activities (water sports, parasailing)',
          estimate: '₹500–2,000 per person',
          notes: 'Per-activity split among participants only.',
        },
        {
          category: 'Travel to/from Goa',
          estimate: '₹2,000–4,000 per person',
          notes: 'Train, flight, or road trip. Different per person; log individually.',
        },
      ]}
      splittingTip="For a Goa trip, the cleanest model is 'equal-by-default with exceptions': hotel and fuel split equally; restaurant bills split item-wise (or only among non-vegetarians for non-veg dishes); club nights split only among people who went; activities split per-participant. Don't try to mental-math during the trip — log every expense in the app the moment it happens."
      cityVibe="Goa has spotty network coverage in many areas — beach shacks, Anjuna lanes, parts of Palolem. Splitwise free struggles offline; The Hisaab is offline-first, so you can log every shack lunch and scooter petrol stop as it happens."
    />
  );
}
