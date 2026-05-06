import TripCityPageContent from '@/components/TripCityPageContent';

export default function LehTripPage() {
  return (
    <TripCityPageContent
      city="Leh-Ladakh"
      cityHeroSubtitle="Leh-Ladakh bike trips run 7–14 days, with fuel costs, inner-line permits, homestay nights, and zero signal across most of the route. Log every expense offline; settle via UPI when you're back in cell range."
      sampleBudget={{ perPerson: '₹25,000–55,000', days: 10, groupSize: 5 }}
      categories={[
        {
          category: 'Bike rental + fuel',
          estimate: '₹8,000–15,000 per person',
          notes: 'Royal Enfield rental ~₹1,200/day; fuel ₹6,000+ for the loop. Fuel splits among riders.',
        },
        {
          category: 'Stay (homestays + camps)',
          estimate: '₹5,000–10,000 per person',
          notes: 'Homestays in Leh, Nubra, Pangong. Tent camps at Pangong/Tso Moriri. Splits equal.',
        },
        {
          category: 'Food (dhabas + maggi points)',
          estimate: '₹3,000–6,000 per person',
          notes: 'Dhaba meals, mountain Maggi, Leh restaurants. Item-wise split for non-veg vs veg.',
        },
        {
          category: 'Inner-line permits + entry fees',
          estimate: '₹500–1,500 per person',
          notes: 'Nubra, Pangong, Tso Moriri permits. Often per-person, log individually.',
        },
        {
          category: 'Travel to Leh',
          estimate: '₹5,000–18,000 per person',
          notes: 'Flight to Leh ~₹8,000–15,000 one-way; bike from Manali for the loop riders.',
        },
        {
          category: 'Oxygen + altitude prep',
          estimate: '₹500–1,500 per person',
          notes: 'Diamox, oxygen cylinders for high passes. Per-person.',
        },
      ]}
      splittingTip="Leh trips have many per-person costs (flights, permits, oxygen) and many group costs (bike fuel, homestays, dhaba meals). Use equal split for stays and group meals; per-person for individual items. Don't try to settle daily — wait until back in Leh or Manali where signal is reliable, then settle the entire trip via UPI in 2–3 transfers."
      cityVibe="Leh-Ladakh is the worst-network region in India for an expense app to work in. There are full days with zero connectivity — Pangong night, Khardung La crossing, Nubra dunes, much of the road from Manali. The Hisaab is fully offline-first; log every dhaba dal-rice and fuel stop without signal, sync when you're back at the homestay WiFi."
    />
  );
}
