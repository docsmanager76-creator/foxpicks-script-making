# MEMORY — এটা আগে পড়ুন

> নতুন চ্যাটে কাজ শুরু করার আগে এই ফাইলটা পড়লেই পুরো context পাওয়া যাবে।
> শূন্য থেকে ফরম্যাট, নিয়ম বা niche নিয়ে আলোচনার দরকার নেই।

---

## কে, কীভাবে কাজ করে

- Amazon affiliate YouTube চ্যানেল — countdown ধরনের product review ভিডিও
- **Niche:** Home & Kitchen appliances (প্রধান), সাথে tools / tech / outdoor
- **ভাষা:** Banglish / বাংলা। উত্তরও সেভাবেই দিন
- **কাজ করে চ্যাটেই** — আলাদা টুল বা UI-তে নয়
- স্ক্রিপ্ট Descript-এ paste করে TTS দিয়ে ভয়েস বানায়

## ডেলিভারি — গুরুত্বপূর্ণ

**Artifact দেবেন না।** user স্পষ্ট বলেছে সে ওগুলো ব্যবহার করতে পারে না।

- কাজ দিন **সাধারণ ফাইল হিসেবে** Downloads ফোল্ডারে — `.txt` (Notepad-এ খোলে) বা `.docx` (Word)
- Word ফাইলের **উপরে সোর্স টেবিল**: `Sl | Name | Verified | Source link`
- তারপর **Additional sources** টেবিল → **Sourcing notes** → স্ক্রিপ্ট
- স্ক্রিপ্টের প্রতিটা block-এ হেডিং + word count
- ফাইল পাঠান, শুধু নাম বলে ছেড়ে দেবেন না

## ওয়ার্কফ্লো

```
user category-র নাম বলে
        ↓
আমি রিসার্চ করি  (01-RESEARCH-PROMPT.md)
        ↓
Amazon-এ তিনটা শর্ত লাইভ যাচাই  (RULES.md § 2)
        ↓
dossier দেখাই — approve না হলে এগোই না
        ↓
স্ক্রিপ্ট লিখি  (02-SCRIPT-PROMPT.md)
        ↓
নিজে মেপে QC  (04-QC-CHECKLIST.md)
        ↓
.docx পাঠাই
```

**dossier আগে দেখানো বাধ্যতামূলক।** পিক পছন্দ না হলে বদলানোর সুযোগ থাকতে হবে।

---

## তিনটা নিয়ম যা কখনো ভাঙবে না

### ১. কোথাও দাম নেই
script · title · thumbnail · description — কোনোটাতেই না। Amazon Associates-এর ঝুঁকি।
বদলে position: *"the most affordable pick on this list"* · *"three tiers above it"* · *"the flagship"*।

> রেফারেন্স হিসেবে পাওয়া কিছু স্ক্রিপ্টে দাম ভর্তি থাকে। **সেগুলো অন্য চ্যানেলের। আমাদের নিয়ম বদলায়নি। এই নিয়ে আবার প্রশ্ন করবেন না।**

### ২. প্রতিটা Amazon পিক তিনটা শর্ত পাস করবে
`N+ bought in past month` ব্যাজ · rating **4.0+** · আসল **buy box**
যাচাই করতে হবে **dossier দেখানোর আগে**, in-app browser দিয়ে।
যোগ্য পিক ছয়টা না পেলে **জানান** — জোর করে ভরাট করবেন না।

### ৩. প্রতিটা কাজে cross-check, না বললেও
- কমপক্ষে **৩টা স্বাধীন সোর্স**
- **কোনো আউটলেট ৬ বারের বেশি cite হলে লাল বাতি**
- সোর্স দ্বিমত হলে **সেটাই খবর** — চাপা দেবেন না
- যাচাই না হলে **UNVERIFIED**, অনুমান নয়
- পরস্পরবিরোধী সংখ্যা **বাদ**
- **নিজের আউটপুট মাপুন** প্রতিবার — word count, price-grep, hook-এ নাম আছে কিনা

বিস্তারিত: [RULES.md](RULES.md)

---

## ফরম্যাট এক নজরে

**Title:** `{N} Best {Category} 2026` — ডিফল্ট **৬**। head term + `2026`, long-tail নয়। YouTube "best X" query-তে freshness প্রাধান্য পায়, তাই high cadence (৪–৭/সপ্তাহ) দিয়ে "সবচেয়ে নতুন" স্লট দখল।

**মোট ~১,৯৫০ শব্দ** (মাপা রেফারেন্স: ১,৮৯১ · ১,৯৫১ · ১,৯৬০ · ২,০৩৩)

| Block | ৬ পিকে | ৫ পিকে |
|---|---|---|
| Hook | ১২০–১৩২ | ১২০–১৩২ |
| প্রতি product | ~২৪৫ | ~২৮০ |
| Villain block | ~১২০ | ~১৩০ |
| Free Upgrade | ~১১০ | ~১২০ |
| Closer / Where / Recap / CTA | ~১৮৫ | ~১৯০ |

**Hook-এ কোনো product name নেই।** #1 শেষ হয় হুবহু `That's why it's number one.`

**Hook আর villain টাইপ ঘোরাতে হবে** — পরপর দুইটায় একই নয়। [03-HOOK-PLAYBOOK.md](03-HOOK-PLAYBOOK.md) দেখুন, শেষ কোনটা ব্যবহার হয়েছে সেটা ওখানে লেখা আছে।

**যে beat গুলো সহজে বাদ পড়ে:** Free Upgrade (যেটাই কিনুক কাজে লাগে, দাম শূন্য) আর Fear Reversal (ভয়ের জিনিস নিজে তুলে নিভিয়ে দেওয়া)।

---

## View reality — এটা না জানলে ভুল সিদ্ধান্ত হবে

Day-1 view **১–২K স্বাভাবিক**। আসল ভিউ আসে **২–৩ সপ্তাহ পরে**, search জমলে।

> **২১ দিনের আগে কোনো ভিডিও বিচার করবেন না।**

আগে অভিযোগ ছিল "upload দিলে view কম আসে" — কারণ দিন ১–২ তে বিচার করা হচ্ছিল, আর cadence/packaging-এ ধারাবাহিকতা ছিল না।

কোনো category হিট করলে **৪৮ ঘণ্টার মধ্যে** তার Budget / Portable / Compact variant ছাড়ুন।

Winner হয় hobby/tech ধরনের category। সরু home-appliance (range hood, bread maker, RO system) কম পায়।

---

## পাশের ওয়ার্কফ্লো

**Keyword pipeline** — একটা Google Sheet-এ ভিডিও প্রোডাকশন ট্র্যাক হয় (Apps Script দিয়ে Archive + Dashboard অটোমেশন করা আছে)। নিয়ম: **Video Maker কলামে নাম থাকা মানেই Completed**। নতুন keyword সবসময় শিটের শেষে যোগ হয় — **ওই ক্রম কখনো নাড়বেন না, auto-sort সাজেস্ট করবেন না।**

**Keyword vault** — Home & Kitchen-এর জন্য ৩,৪০০+ keyword, ২৪৮ micro-node taxonomy, সব CSV আকারে Downloads-এ। নতুন keyword চাইলে আগে taxonomy দেখে ডুপ্লিকেট এড়ান। Volume/competition **অনুমান করে ভরবেন না** — vidIQ/Ahrefs থেকে verify করতে হয়।

Keyword modifier বের করার মূল কৌশল: **Amazon-এর left sidebar filter + product-title spec**। পাঁচটা প্যাটার্ন —
`best {facet} {product}` · `best {product} with {feature}` · `best {product} for {audience}` · `best {product} under {price}` · `{facet a} vs {facet b} {product}`

**Product image prompt** — কোনো প্রোডাক্টের ব্যবহারযোগ্য ছবি না থাকলে user একটা reference ছবি দেয় এবং **Nano Banana Pro-র জন্য ৮/১০/১২টা prompt** চায়। প্রতিটা prompt শুরু হবে identity-lock বাক্য দিয়ে ("Using the attached reference image as the exact source, recreate the same X with identical shape, proportions, colors, materials, branding unchanged — only camera angle, lighting and environment change"), পুরো সেটে **একই grade**, ১৬:৯, শেষে একটা bonus THUMBNAIL prompt যাতে হেডলাইনের জন্য ফাঁকা অর্ধেক থাকে।

---

## এই ফাইলে ইচ্ছাকৃতভাবে যা নেই

রিপোটা **public**, তাই এগুলো এখানে রাখা হয়নি: spreadsheet ID · email · GCP প্রজেক্ট ও API key সেটআপ · কোন চ্যানেল reverse-engineer করা হয়েছে · তাদের ভিউ ডেটা · video maker-দের নাম · লোকাল ফাইল পাথ · প্রাইভেট artifact লিংক।

**রিপো private করলে বলুন — বাকি অংশটাও যোগ করে দেব।**
