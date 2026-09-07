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

- [ ] মোট **১,৯০০–১,৯৮০**
- [ ] প্রতি product ~২৪৫ (৫ পিক হলে ~২৮০)
- [ ] প্রতিটা segment target-এর ±২৫ শব্দের মধ্যে
- [ ] কোনো transition নেই, কোনো filler নেই

## ডেলিভারি

- [ ] `.docx` বা `.txt`, Downloads ফোল্ডারে
- [ ] উপরে সোর্স টেবিল: `Sl | Name | Verified | Source link`
- [ ] লিংকগুলো ক্লিকযোগ্য
- [ ] প্রতিটা block-এ হেডিং + word count
- [ ] Amazon affiliate disclosure description-এ আছে
