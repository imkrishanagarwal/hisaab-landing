import TripCityPageContent from '@/components/TripCityPageContent';

export default function ManaliTripPage() {
  return (
    <TripCityPageContent
      city="Manali"
      cityHeroSubtitle="Manali trips mean snow, hot momos, hostel evenings, and patchy mountain signal. Split paragliding, snow boots, hostel beds, and meals fairly — no signal needed for offline expense logging."
      sampleBudget={{ perPerson: '₹6,000–14,000', days: 4, groupSize: 6 }}
      categories={[
        {
          category: 'Stay (hostel / homestay)',
          estimate: '₹1,500–4,000 per person',
          notes: 'Hostels in Old Manali, Vashisht. Homestays in Solang. Splits cleanly equal.',
        },
        {
          category: 'Travel to/from Manali',
          estimate: '₹1,500–3,500 per person',
          notes: 'Volvo bus from Delhi or self-drive. Split fuel for road trip, individual for bus tickets.',
        },
        {
          category: 'Snow activities',
          estimate: '₹1,500–4,000 per person',
          notes: 'Paragliding (~₹2,500), snowboarding gear (~₹500), Solang taxi. Split per participant.',
        },
        {
          category: 'Food (cafes + dhaba)',
          estimate: '₹1,500–3,000 per person',
          notes: 'Café Drifter, Johnson&apos;s Café, dhabas. Item-wise split if vegetarian/non-veg matters.',
        },
        {
          category: 'Local taxis + scooters',
          estimate: '₹500–1,500 per person',
          notes: 'Manali to Solang, Manali to Vashisht, hill drives. Split among riders.',
        },
        {
          category: 'Snow gear rentals',
          estimate: '₹300–800 per person',
          notes: 'Boots, jackets, gloves. Often per-person, so log individually.',
        },
      ]}
      splittingTip="Manali trips have a unique problem: large equal-split items (hostel, cab to Rohtang) plus many per-person items (paragliding, scooter rentals, momos with 4 of 6 people). Use equal split for shared rooms and group cabs; use custom splits for activities and meals. Don't try to track per-person snacks — let small inequities go."
      cityVibe="Manali signal is famously patchy in winter — Solang Valley, Hadimba Temple area, Atal Tunnel side. The Hisaab works completely offline, so you log expenses on the trail and they sync when you're back at the hostel WiFi."
    />
  );
}
