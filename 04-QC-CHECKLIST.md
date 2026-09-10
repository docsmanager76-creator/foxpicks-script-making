# QC CHECKLIST

রেকর্ড করার আগে। একটাও ফেল করলে থামুন।

---

## দাম

- [ ] script-এ কোনো ডলারের অঙ্ক নেই
- [ ] title-এ নেই
- [ ] thumbnail-এ নেই
- [ ] recap দামের বদলে **পরিস্থিতি** দিয়ে বাঁধা
- [ ] segment opener-এ দাম বসানো নেই
- [ ] outro-র লাইনটা আছে: *"prices move fast, so check before you buy"*

## Amazon rating / badge — সবচেয়ে সহজে ফসকায়

```bash
grep -n -i -e amazon -e "best seller" -e "highest rated" -e "lowest rated" -e "least reviewed" \
  -e star -e ratings -e "out of 5" -e "bought in past month" -e "Amazon's Choice" -e "Overall Pick" script.txt
```

- [ ] কোনো **star rating** বলা হয়নি ("four point two stars")
- [ ] কোনো **review count** বলা হয়নি ("forty-five hundred ratings")
- [ ] **"N+ bought in past month"** বলা হয়নি
- [ ] **"Amazon's Choice"** / **"Overall Pick"** ব্যাজ বলা হয়নি
- [ ] **Best Sellers Rank** বলা হয়নি ("the fourth best seller in this category")
- [ ] **তুলনামূলক রেটিং ভাষা** নেই ("the highest rated", "the lowest rated of my picks", "the least reviewed")
- [ ] **stock অবস্থা** বলা হয়নি ("in stock", "it keeps selling out")
- [ ] Amazon customer review থেকে কিছু উদ্ধৃত হয়নি
- [ ] owner-report লাইনে কোনো সংখ্যা বা প্ল্যাটফর্মের নাম নেই
- [ ] rating ডেটা শুধু **ওয়ার্কিং ডকুমেন্টের `Verified — INTERNAL ONLY` কলামে** আছে, স্ক্রিপ্টে নয়
- [ ] তৃতীয় পক্ষের রায় (Bob Vila, Family Handyman…) দিয়ে জায়গাটা ভরা হয়েছে
- [ ] 🎯 **"Amazon" শব্দটার গণনা = ০** (ডিফল্ট লক্ষ্য)

## প্রোডাক্টের নাম — ব্র্যান্ড + মডেল (সংখ্যায়) + মাপ + টাইপ

user নিজে ঠিক করে দিয়েছে আর বলেছে সব ভিডিওতে এভাবেই হবে।

| ✗ | ✓ |
|---|---|
| the Cobra forty thousand thirty | **the Cobra 3/8-inch by 3-foot Home Toilet Auger** |
| the Klein Tools fifty three thousand eighteen | **the Klein Tools 53018 6-Foot Steel Toilet Auger** |
| the RIDGID K six D H | **the Ridgid 59802 K-6DH Hybrid Toilet Snake Auger** |
| the six foot, half inch cable auger | **the Ridgid 6-feet Closet Auger** |

- [ ] মডেল নম্বর **সংখ্যায়** (`53018`, `K-6DH`, `59787`) — বানান করে নয়
- [ ] **পুরো প্রোডাক্ট টাইপ** নামের ভেতরে ("Toilet Auger", "Closet Auger")
- [ ] **মূল মাপ** নামের ভেতরে ("3-foot", "6-Foot Steel")
- [ ] ব্র্যান্ড স্বাভাবিক বানানে — `Ridgid`, `RIDGID` নয়
- [ ] **সেগমেন্ট ওপেনার আর সোর্স টেবিল দুটোতেই একই নাম**
- [ ] RECAP-এ ছোট রূপ চলে, কিন্তু **সংখ্যায়ই** (`the Ridgid K-3`)
- [ ] ⚠️ **টাইটেলে ব্র্যান্ড না থাকলেই ব্র্যান্ডহীন নয়** — `#bylineInfo` আর spec টেবিলের `Manufacturer` দেখুন
      (B07DNJY4TW-র টাইটেলে ব্র্যান্ড নেই, কিন্তু byline বলে `Visit the RIDGID Store`)

## SPEC CROSS-MATCH — নতুন, এটাও সহজে বাদ পড়ে

রিভিউ আর্টিকেল থেকে স্পেক নেওয়া যথেষ্ট নয়। **যে লিংক দিচ্ছেন সেই লিস্টিং** খুলে মেলান।

- [ ] প্রতিটা পিকের **feature bullets + spec টেবিল + description** পড়া হয়েছে
- [ ] স্ক্রিপ্টের প্রতিটা **সংখ্যা** (ইঞ্চি · ফুট · ভোল্ট · পাউন্ড · মিনিট · ডিগ্রি) লিস্টিংয়ে মিলেছে
- [ ] প্রতিটা **ফিচারের দাবি** লিস্টিংয়ে আছে (নেই এমন কিছু দাবি করা হয়নি)
- [ ] ফিচারের **ধরন** ঠিক (continuous sweep বনাম preset positions — এক নয়)
- [ ] দুই পিকের তুলনা **একই এককে** (±৩০° মানে মোট ৬০° — ৬০°-র সাথে তুলনা করলে সেটা সমান, বেশি নয়)
- [ ] **ওয়ারেন্টি** ওই লিস্টিংয়েরই, সিবলিং মডেলের নয়
- [ ] রিভিউ আউটলেট **কোন মডেল** টেস্ট করেছে সেটা মিলিয়ে দেখা হয়েছে; আলাদা হলে স্ক্রিপ্টে বলা আছে ("the twelve inch version of this shovel")
- [ ] তিন সোর্সে তিনরকম সংখ্যা → **স্ক্রিপ্টে বাদ**
- [ ] লিস্টিংয়ে নেই এমন সংখ্যা **attributed** ("Pro Tool Reviews measured…", "the maker claims…")

## সোর্সিং

- [ ] কমপক্ষে **৩টা স্বাধীন সোর্স**
- [ ] **কোনো একটা আউটলেট ৬ বারের বেশি cite হয়নি** — হলে আরেকটা স্বাধীন টেস্ট খুঁজুন
- [ ] প্রতিটা সংখ্যা সোর্সে ফেরত মেলানো হয়েছে
- [ ] সোর্স যেখানে দ্বিমত, সেটা স্ক্রিপ্টে **বলা হয়েছে**, চাপা দেওয়া হয়নি
- [ ] যাচাই না হওয়া কিছু স্ক্রিপ্টে নেই (বা UNVERIFIED হিসেবে চিহ্নিত)
- [ ] পরস্পরবিরোধী সংখ্যা বাদ দেওয়া হয়েছে
- [ ] যে আউটলেট শুধু spec সংকলন করে, তাকে "tested" বলা হয়নি
- [ ] ডকুমেন্টে **Sourcing notes** সেকশন আছে

## Amazon

- [ ] 🥇 **যাচাইয়ের আগে US zip (10001) বসানো হয়েছে** — নাহলে buy box মিথ্যা ফেল দেখায়
- [ ] রিসার্চ **browse node** থেকে হয়েছে, শুধু কীওয়ার্ড সার্চ নয়
- [ ] নোড থেকে **ভুল-ক্যাটাগরির প্রোডাক্ট** ছেঁকে বাদ দেওয়া হয়েছে
- [ ] প্রতিটা পিকে `N+ bought in past month` ব্যাজ আছে
- [ ] প্রতিটা পিকের rating **4.0+**
- [ ] প্রতিটা পিকের **buy box** আছে — `add-to-cart-button` এলিমেন্ট দিয়ে যাচাই, টেক্সট grep দিয়ে নয়
- [ ] ASIN গুলো আসল, অনুমান করা নয়
- [ ] একই ব্র্যান্ডের **variation family** থেকে একটার বেশি পিক নেওয়া হয়নি (ওদের rating count একই দেখায়)
- [ ] যোগ্য পিক কম পড়লে **জানানো হয়েছে**, জোর করে ভরাট করা হয়নি
- [ ] testers-এর সুপারিশ যেগুলো নিয়মে বাদ পড়েছে, সেগুলো **Sourcing notes-এ লেখা আছে**
- [ ] Verified কলামের নাম **`Verified — INTERNAL ONLY`**

## গঠন

- [ ] Hook **১২০–১৩২ শব্দ**, **আপনার পিকের কোনো নাম নেই**
- [ ] Hook-এ **টেস্টিং আউটলেটের নাম আছে** — "three testing teams" নয়, "Bob Vila, Family Handyman and Reviewed"
- [ ] Hook টাইপ গতবারেরটা নয় ([03-HOOK-PLAYBOOK.md](03-HOOK-PLAYBOOK.md)-এর ব্যবহারের খাতা দেখুন, আর নতুন লাইন যোগ করুন)
- [ ] Villain টাইপ গতবারেরটা নয়
- [ ] তিনটা promise: countdown · myth · villain
- [ ] Free Upgrade-এর প্রতিশ্রুতি hook-এ আছে, শেষে শোধ হয়েছে
- [ ] Myth শোধ হয়েছে **তাড়াতাড়ি** (৬-এর মধ্যে #5, ৫-এর মধ্যে #4)
- [ ] কমপক্ষে **২টা callback** পোঁতা ও শোধ হয়েছে
- [ ] প্রতিটা পোঁতা সংখ্যা প্রথমবার **অসম্পূর্ণ** রাখা হয়েছে
- [ ] Villain-এর নিজের **~১২০ শব্দের block**, top three-এর আগে
- [ ] Villain আপনার পিকের একটা **নয়**
- [ ] Villain block-এ **২+ আউটলেটের নাম** আছে যারা একে সুপারিশ করে
- [ ] Villain-এর ব্যর্থতা **সোর্সড**, গুজব নয়
- [ ] প্রতিটা পিকে **honest limit** আছে
- [ ] প্রতিটা পিকে **ownership fact** আছে (warranty / consumable / running cost)
- [ ] অন্তত একবার দর্শকের আপত্তি উচ্চারিত: *"So why isn't it number one?"*
- [ ] অন্তত একটা **mental-model লাইন**
- [ ] প্রতিটা পিকে **anti-sell** — কার কেনা উচিত নয়
- [ ] সবচেয়ে লম্বা segment সেটাই যেখানে সবচেয়ে বড় promise শোধ হয়
- [ ] #1 শেষ হয় হুবহু: `That's why it's number one.`
- [ ] Tail চার অংশে: closer · where to buy · recap · CTA
- [ ] CTA দুই ভাগের প্রশ্ন

## শব্দ

- [ ] মোট **১,৯০০–১,৯৮০** (user ছোট চাইলে ১,৭০০ বা ১,৮০০–১,৯০০ — যা বলে)
- [ ] প্রতি product ~২৪৫ (৫ পিক হলে ~২৮০)
- [ ] প্রতিটা segment target-এর ±২৫ শব্দের মধ্যে
- [ ] কোনো transition নেই, কোনো filler নেই

## PACING — বাইরের স্কোরে এটাই সবচেয়ে কম পায়

একটা স্ক্রিপ্ট বাইরে স্কোর হয়েছে **৮.৮/১০**, তার মধ্যে **Pacing ৮.২** — সবচেয়ে নিচু।
মেপে দেখা গেছে **বাক্যের ছন্দ ঠিকই ছিল**; সমস্যা ছিল **ব্লকের দৈর্ঘ্যে**।

```bash
node tools-pace.js script.txt                    # segment ধরে
node tools-pace-compare.js ref_*.txt mine.txt     # রেফারেন্সের সাথে
```

- [ ] **HOOK ১২০–১৩৫** (১৫৫ হলে শুরুটাই ভারী)
- [ ] **VILLAIN ১২০–১৪০** (রেফারেন্স ১২১)
- [ ] **FREE UPGRADE ১১৫–১৪০, গড় বাক্যদৈর্ঘ্য ≤ ১২** ← **এখানেই sag হয়**
      একবার ৮ বাক্যে গড় ১৮.৮ আর একটাও ছোট বাক্য ছিল না — শেষের আগে গদ্যের দেয়াল
- [ ] **CTA ৩–৪ বাক্য**, একটা punch, আর ভিডিও-নির্দিষ্ট কাজ
- [ ] পুরো স্ক্রিপ্টে **avg ১৩–১৪ · stdev ৭–৯ · ছোট বাক্য (≤৬ শব্দ) ১৫–২২%**

> ⚠️ **অতিরিক্ত কাটবেন না।** একবার ঠিক করতে গিয়ে avg ১১.০ / stdev ৬.৩ / ছোট বাক্য ৩০% করে ফেলেছিলাম — সেটা staccato। রেফারেন্সের ছন্দ আসে **তারতম্য** থেকে: লম্বা বাক্যের মেরুদণ্ড, মাঝে ২–৩টা punch।

মাপা রেফারেন্স: Air Fryer 13.8/8.7/22% · Controller 13.4/6.8/15% · 3D Printer 14.8/8.3/13%

## CTA আর COMPARISON — স্কোরের বাকি দুই দুর্বল জায়গা

- [ ] CTA **প্রতিবার আলাদা** — একই formulaic লাইন নয়
- [ ] CTA-তে **উত্তর দেওয়ার কারণ** আছে (*"If enough of you post, we will find out what a normal garage actually reads"*)
- [ ] প্রতিটা segment-এ অন্তত একটা **সরাসরি A-vs-B লাইন** (*"Number two pulls three times that"*), শুধু নিজের স্পেক নয়

## ডেলিভারি

- [ ] `.docx` বা `.txt`, Downloads ফোল্ডারে
- [ ] উপরে সোর্স টেবিল: `Sl | Name | Verified | Source link`
- [ ] লিংকগুলো ক্লিকযোগ্য
- [ ] প্রতিটা block-এ হেডিং + word count
- [ ] Amazon affiliate disclosure description-এ আছে
