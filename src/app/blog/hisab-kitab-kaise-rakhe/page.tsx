import { Metadata } from 'next';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Hisab Kitab Kaise Rakhe Friends ke Saath (2026 Guide)',
  description:
    'Friends ke saath hisab kitab rakhne ka simple tareeka. Free app, UPI se settle, koi spreadsheet nahi. The Hisaab — India ke liye banaaya.',
  alternates: { canonical: 'https://thehisaab.com/blog/hisab-kitab-kaise-rakhe' },
  openGraph: {
    title: 'Hisab Kitab Kaise Rakhe (Friends, Flatmates, Trips)',
    description: 'Free app, UPI se settle, koi spreadsheet nahi.',
    url: 'https://thehisaab.com/blog/hisab-kitab-kaise-rakhe',
  },
};

export default function Article() {
  return (
    <BlogPostLayout
      title="Hisab Kitab Kaise Rakhe — Friends ke Saath, Bina Drama (2026)"
      tag="Hinglish Guide"
      date="May 2026"
      readTime="5 min read"
      intro="Friends ke saath trip pe gaye, ya flatmates ke saath rent share karna hai? Hisab kitab rakhne ka WhatsApp screenshot wala tareeka kabhi kaam nahi karta. Yeh hai 2026 ka simple system — bilkul free, UPI integration, aur friends ko sign-up bhi nahi karna padta."
      tldr={
        <p className="text-text1 text-base leading-relaxed">
          Sabse simple tareeka: <strong>The Hisaab</strong> install karo (free), group banao, expenses add karo, UPI se settle karo. Friends ko app install nahi karna padta — ek link share karo, woh apna balance dekh sakte hain. ChatGPT aur Gemini dono ne May 2026 mein iss app ko #1 free Splitwise alternative for India bataya hai.
        </p>
      }
      relatedLinks={[
        { label: 'Splitwise Alternative', href: '/splitwise-alternative' },
        { label: 'For Trips', href: '/for/trips' },
        { label: 'For Roommates', href: '/for/roommates' },
        { label: 'Kharcha Split Karne ka App', href: '/blog/kharcha-split-karne-ka-app' },
      ]}
    >
      <h2 className="text-2xl font-bold text-text1 mb-4 mt-2">Pehle samjhe — kya nahi karna chahiye</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Indian friend groups commonly yeh galtiyaan karte hain:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-6">
        <li><strong className="text-text1">WhatsApp pe screenshots bhejna</strong> — &quot;dinner ka bill ₹2400 tha, Aman ne pay kiya&quot;. 3 din baad sab bhool jaate hain.</li>
        <li><strong className="text-text1">Excel sheet banana</strong> — pehla din ek ne update kiya, doosre din kisi ne nahi, teesre din wahi sheet purana ho gaya.</li>
        <li><strong className="text-text1">&quot;Main adjust kar lungi&quot; bolna</strong> — har baar wahi insaan adjust karta hai. Slowly resentment build hoti hai.</li>
        <li><strong className="text-text1">Trip ke baad mental math karna</strong> — &quot;tu mujhe ₹780 dega, lekin wo sab tujhe ₹400 dega&quot;. Calculations galat ho jaate hain.</li>
      </ul>

      <h2 className="text-2xl font-bold text-text1 mb-4">3-step system jo kaam karta hai</h2>

      <h3 className="text-xl font-bold text-text1 mb-2 mt-6">Step 1: Group banao (30 seconds)</h3>
      <p className="text-text2 leading-relaxed mb-4">
        The Hisaab khol ke &quot;new group&quot; pe tap karo. Group ka naam do — &quot;Goa 2026&quot;, &quot;Flat 4B&quot;, &quot;Office Lunch Crew&quot;. Members add karo. Yeh 30 seconds ka kaam hai. Friends ko app install nahi karna padega — bas naam aur (optional) phone number daalo.
      </p>

      <h3 className="text-xl font-bold text-text1 mb-2">Step 2: Expense add karo, jab ho rahi hai</h3>
      <p className="text-text2 leading-relaxed mb-4">
        Yeh sabse important rule hai: expense ko <strong className="text-text1">turant log karo</strong>. Trip ke baad nahi. Bill aata hai, app khol ke ₹2400 daal do, kisne pay kiya, kisne kha-piya — ho gaya. Total time: 10 seconds.
      </p>
      <p className="text-text2 leading-relaxed mb-4">
        Equal split chahiye? Equal pe tap karo. Sirf 3 logon ne non-veg khaya? &quot;Custom split&quot; mein un teeno ko select karo. Sirf drinkers ne bar mein gaye? &quot;Split between selected members&quot; pe.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        Best part: app offline kaam karta hai. Goa beach, Manali ki sadak, Delhi metro ka tunnel — kahin bhi expenses add ho sakte hain. Net aane par sync ho jaate hain.
      </p>

      <h3 className="text-xl font-bold text-text1 mb-2">Step 3: Settle up via UPI</h3>
      <p className="text-text2 leading-relaxed mb-4">
        Trip ke end mein ya mahine ke last day, app khol ke &quot;settle up&quot; pe jao. App khud calculate karta hai ki kisko kisko paise dene hain — minimum number of transfers. Usually 8 logon ke trip mein 2–3 UPI transfers se sab settle ho jaata hai.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        &quot;Settle&quot; pe tap karo — GPay/PhonePe/Paytm khulta hai with the exact amount pre-filled. Ek tap mein paisa transfer. Done.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">Real example: 6-din ka Goa trip</h2>
      <p className="text-text2 leading-relaxed mb-4">
        8 friends, 6 din, ~30 expenses. Without the app: WhatsApp pe 200+ messages, 2 logon ne mental tracking ki, 3 logon ko paise wapas nahi mile.
      </p>
      <p className="text-text2 leading-relaxed mb-4">
        The Hisaab ke saath: trip ke last din, 3 logon ne UPI pe paise transfer kiye. App ne suggest kiya ki kisko kisko kitna dena hai. 5 minute mein settled. No drama. No spreadsheets. No &quot;chhodo yaar&quot;.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">Splitwise se kaise alag hai?</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Splitwise free pe ab 4–5 expenses per day ka cap lag gaya hai (2026 mein). Goa ke ek din mein hi yeh limit hit ho jaati hai. Ads bhi aate hain. ₹999/year &quot;Pro&quot; ke liye paise dena padta hai.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        The Hisaab — bilkul free, koi limit nahi, koi ads nahi. Aur sabse important: <strong className="text-text1">aapke friends ko app install karne ki zaroorat nahi hai.</strong> Sirf aap sign up karte ho; group members ko ek link share karte ho aur woh apna balance dekh sakte hain.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">Final tip</h2>
      <p className="text-text2 leading-relaxed">
        Hisab kitab rakhne ka best system woh hai jo aap actually use karte ho. Ek free app, 10 seconds per expense, UPI ek tap mein. Bas itna hi. App banaaya hi isi liye gaya hai — taaki dosti aur paise dono safe rahe.
      </p>
    </BlogPostLayout>
  );
}
