# RULES

এগুলোর একটাও ভাঙলে স্ক্রিপ্ট আর ওই ফরম্যাটে শোনাবে না।

---

## ১. PRICE RULE — সবার উপরে

**কোথাও দাম বলা যাবে না।** script, title, thumbnail, description — কোনোটাতেই না।
কারণ: Amazon Associates শুধু তাদের অনুমোদিত dynamic source থেকে আসা দাম দেখানোর অনুমতি দেয়, "as of" timestamp আর disclaimer সহ। মুখে বলা দাম কখনো ওই শর্ত পূরণ করে না, আর কয়েকদিনেই বাসি হয়ে যায়।

| ✗ যা বলবেন না | ✓ যা বলবেন |
|---|---|
| "costs under $200" | "the most affordable pick on this list" |
| "$799, or $699 at some retailers" | "the flagship tier — check the link" |
| "half the price of number two" | "a clear step down from number two" |
| "great value for the money" | "the best capability-to-cost balance here" |
| "a printer costing four times more" | "a printer three tiers above it" |
| "if you want that price" | "if you want that tier" |
| "Under $300 and you want speed" | "The most affordable pick here, and you want speed" |
| "makes a $90 machine outlive a $250 one" | "makes the entry pick outlive the flagship" |

নিরাপদ বিকল্প যা প্রায়ই দামের চেয়ে বেশি কাজে দেয়: **running cost · warranty length · consumable availability · energy use**।

### ১খ. একই নিয়ম Amazon-এর STAR RATING আর REVIEW COUNT-এর জন্যও

এটা দামের চেয়ে কম পরিচিত, কিন্তু নিয়মটা **আরও স্পষ্ট**। Amazon Associates Participation Requirements-এ হুবহু:

> "You will not **display or otherwise use** any of our **customer reviews or star ratings**, in part or in whole, on your site unless you have obtained a link to that customer review or star rating **through the Product Advertising API** and you comply with the requirements set forth in the License Agreement."

`display or **otherwise use**` — মানে শুধু স্ক্রিনে দেখানো নয়, **ভিডিওতে মুখে বলাও** এর মধ্যে পড়ে।

| ✗ ভিডিওতে যা বলবেন না | কেন |
|---|---|
| "four point two stars across a thousand ratings" | star rating + review count |
| "it has forty-five hundred ratings" | review count |
| "four hundred plus bought in past month" | Amazon-এর নিজস্ব ডেটা |
| "it is an Amazon's Choice pick" | Amazon-এর ব্যাজ |
| "Amazon's Overall Pick" | Amazon-এর ব্যাজ |
| "Amazon reviewers say…" | customer review content |
| **"the fourth best seller in this category"** | **Best Sellers Rank-ও Amazon-এর ডেটা** |
| **"the highest rated machine here"** | **তুলনামূলক রেটিং ভাষা — সংখ্যা লুকানো, ডেটা একই** |
| **"the lowest rated of my picks" / "the least reviewed"** | **একই কারণ** |
| "currently in stock" / "it keeps selling out" | stock অবস্থাও Amazon ডেটা |

> ⚠️ **Best Sellers Rank আর তুলনামূলক ভাষা দুটোই একবার ফসকেছে।** core drill স্ক্রিপ্টের hook-এ লিখে ফেলেছিলাম *"the fourth best seller in this exact Amazon category"* — নিয়মটা নিজের লেখা হওয়া সত্ত্বেও। সরাতে গিয়ে আরও ৫টা পাওয়া গেছে।

**🎯 নিরাপদতম ডিফল্ট: স্ক্রিপ্টে "Amazon" শব্দটাই একবারও রাখবেন না।** শেষ দুইটা স্ক্রিপ্টে শব্দটা শূন্যবার আছে — লিংকের কথা বলুন *"All the product links are in the description"* দিয়ে, রিটেইলারের নাম না নিয়ে।

**✓ যা করা যাবে:** এই সব ডেটা **পিক বাছাই করতে** ব্যবহার করুন — সেটা internal research, ভিডিওর কনটেন্ট নয়। ওয়ার্কিং ডকুমেন্টের `Verified` কলামে থাকুক, স্ক্রিপ্টে নয়।

**বদলে ভিডিওতে বলুন:**
- নাম ধরে তৃতীয় পক্ষের রায় — *"Bob Vila named it their best bang for the buck"*
- নির্মাতার নিজের দাবি, সেটা বলে দিয়ে — *"Megahome states it is the top selling distiller in the world"*
- owner report-এর প্যাটার্ন, সংখ্যা বা প্ল্যাটফর্ম ছাড়া — *"Owner reports pile up around the same three things"*
- generic mental model — *"800 buyers finding the same fault is data. 50 buyers is a rumor."* (কোনো নির্দিষ্ট প্রোডাক্টের সংখ্যা নয়)

> ⚠️ আমি একবার এই ভুলটা করেছিলাম — distiller স্ক্রিপ্টে ৬ জায়গায় Amazon rating বসিয়েছিলাম। ধরা পড়ার পর সব সরানো হয়েছে। **প্রতিবার scan করুন।**

আরও: **prices and availability** নিয়েও একই কাঠামো — Amazon বলে ডেটা PA API থেকে আসতে হবে আর **২৪ ঘণ্টার বেশি পুরনো হতে পারবে না**। মুখে বলা দাম কখনো সেটা পূরণ করে না।

> ⚖️ আমি আইনজীবী নই। ক্লজগুলো Amazon-এর নিজের পেজ থেকে নেওয়া, কিন্তু চূড়ান্ত সিদ্ধান্তের আগে
> [Participation Requirements](https://affiliate-program.amazon.com/help/operating/participation/) আর
> [Operating Agreement](https://affiliate-program.amazon.com/help/operating/agreement) নিজে একবার পড়ে নেবেন।

Outro-তে এটা নিরাপদ: *"Every link and the current price is in the description, and these prices move fast, so check before you buy."*

> ⚠️ রেফারেন্স হিসেবে পাওয়া কিছু স্ক্রিপ্টে দাম ভর্তি থাকে (১৪–১৮টা dollar figure)। সেগুলো অন্য চ্যানেলের। **আমাদের নিয়ম বদলায়নি।** এই নিয়ে আবার প্রশ্ন করার দরকার নেই।

---

## ২. AMAZON PICK SELECTION — তিনটা শর্ত

প্রতিটা পিক **তিনটাই** পাস করতে হবে, dossier দেখানোর **আগে**:

1. **Past-month sell** — লিস্টিং-এ `N+ bought in past month` ব্যাজ আছে
2. **Rating 4.0+**
3. **Buy box আছে** — `No featured offers available` = ফেল, rating আর sales যত ভালোই হোক

### ধাপ ০ — সবার আগে US zip বসান

ব্রাউজারের delivery address **Bangladesh**-এ সেট থাকে, আর তাতে US-only প্রোডাক্ট মিথ্যা *"No featured offers available"* দেখায়। snow shovel রিসার্চে **৯টার মধ্যে ৭টা** পিক এভাবে ভুলভাবে ফেল করছিল।

সেশনটা লগ-ইন করা নয় (কারও অ্যাকাউন্ট সেটিং নয়, শুধু কুকি)। amazon.com পেজ থেকে চালান:

```js
const body = new URLSearchParams({locationType:'LOCATION_INPUT', zipCode:'10001',
  storeContext:'generic', deviceType:'web', pageType:'Detail', actionSource:'glow'});
await fetch('/gp/delivery/ajax/address-change.html', {method:'POST',
  headers:{'content-type':'application/x-www-form-urlencoded;charset=UTF-8'}, body});
```
সফল হলে ফেরত আসে `{"isValidAddress":1,"isAddressUpdated":1,…,"city":"NEW YORK"}`।
(নতুন `/portal-migration/hz/glow/address-change` endpoint 200 দেয় কিন্তু কাজ করে না। UI ক্লিকও কাজ করেনি।)

### ধাপ ১ — BROWSE NODE, কীওয়ার্ড সার্চ নয়

**কীওয়ার্ড সার্চে থামবেন না।** ওটা Amazon-এর র‍্যাঙ্কিং, বিজ্ঞাপন আর ভুল-ক্যাটাগরির প্রোডাক্ট মিশিয়ে দেয়। **browse node-ই আসল বিক্রির ছবি।**

1. ওই ক্যাটাগরির যেকোনো প্রোডাক্ট পেজ খুলুন
2. **"Best Sellers Rank"** থেকে ক্যাটাগরি লিংক নিন — `/gp/bestsellers/<dept>/<nodeid>`
3. নোড পেজে `div[id^="gridItemRoot"]` ধরে rank · ASIN · rating · count টানুন (`?pg=2` দিলে ৫১–১০০)

> ⚠️ **একবার এই ভুলটা হয়েছে:** "best diamond core drill"-এ কীওয়ার্ড সার্চ দেখে সিদ্ধান্ত নিয়েছিলাম মেশিনের মাঠ পাতলা, আর ভুল করে core **bit**-এ সরে গিয়েছিলাম। নোডে ২০টা আসল মেশিন ছিল, সার্চে যেগুলো আসেইনি সেগুলো নোডের টপ-১০-এ।

> নোডে **ভুল-ক্যাটাগরির প্রোডাক্টও** থাকে (Power Core Drills-এর #4 আসলে একটা right-angle attachment; Snow Shovels নোডের বেশিরভাগই ম্যানুয়াল শাভেল)। গুনতির আগে ছেঁকে নিন।

### ধাপ ২ — buy box এলিমেন্ট ধরে দেখুন, টেক্সট খুঁজে নয়

পেজের টেক্সটে `"Currently unavailable"` grep করলে ভুল ফল আসে (সাইডবারের অন্য প্রোডাক্টেও থাকে)। এলিমেন্ট দেখুন:

```js
cart:  !!d.getElementById('add-to-cart-button')
price: d.querySelector('#corePrice_feature_div .a-offscreen')?.textContent
```

### low-volume pro ক্যাটাগরিতে ছাড়

কিছু পেশাদার ক্যাটাগরিতে **কারোরই** past-month ব্যাজ থাকে না (Power Core Drills-এর ২০টার একটাতেও নেই)। সেক্ষেত্রে user-কে জানিয়ে বিকল্প সংকেত নিন: **rating count ৫০+ · buy box · একাধিক মডেলের ব্র্যান্ড**। নিয়মের উদ্দেশ্য (মৃত প্রোডাক্ট এড়ানো) তাতেই পূরণ হয়।

**যোগ্য পিক ছয়টা না পেলে জানান, জোর করে ভরাট করবেন না।**
- countertop distiller — যোগ্য আলাদা ব্র্যান্ড মাত্র চারটা → ভিডিও ৫ পিকে নেমেছে
- cordless snow shovel — স্বাধীন টেস্ট **এবং** লাইভ buy box দুটোই আছে এমন মাত্র ৫টা → ৫ পিক। testers-এর Best Overall (Greenworks 80V) rating নিয়মে ফেল করে বাদ, আর Snow Joe / WEN / Toro Amazon-এ কেনাই যায় না। **এই বাদ পড়াগুলো Sourcing notes-এ লিখুন** — পরের বার আবার খুঁজতে হবে না।

---

## ৩. FACT-CHECK — প্রতিটা কাজে, না বললেও

1. **কমপক্ষে ৩টা স্বাধীন সোর্স।** একটা আউটলেট **৬ বারের বেশি** cite হলে লাল বাতি।
2. **সোর্স একমত না হলে সেটাই খবর** — চেপে যাবেন না।
   > "One lab named it Editors' Choice and the fastest ever tested. Another put it fourth of five and wrote that it lacked cutting power."
3. **প্রতিটা সংখ্যা সোর্সে ফেরত মেলান।**
4. **যাচাই না হলে UNVERIFIED লিখুন**, অনুমান করে লিখবেন না।
5. **সোর্স পরস্পরবিরোধী হলে সংখ্যাটা বাদ দিন।** (CO-Z ওয়ারেন্টি: ১৪ দিন vs ১ বছর → স্ক্রিপ্টে যায়নি।)
6. **নিজের আউটপুট মাপুন** — segment ধরে word count, price-grep, hook-এ পিকের নাম আছে কিনা। প্রতিবার।
7. **ডকুমেন্টে "Sourcing notes" সেকশন দিন** — কী যাচাই হয়নি, কোথায় দ্বিমত, কী ইচ্ছাকৃতভাবে বাদ।
8. **SPEC CROSS-MATCH** — নিচে দেখুন। এটা আলাদা ধাপ, বাদ দেওয়া যাবে না।

### ৩ক. SPEC CROSS-MATCH — যে লিংক দিচ্ছেন সেই লিস্টিংয়ের সাথে মিলিয়ে দেখুন

রিভিউ আউটলেট থেকে স্পেক নেওয়া **যথেষ্ট নয়**। ওরা প্রায়ই **সিবলিং মডেল** টেস্ট করে, আর তাদের deal-widget স্বয়ংক্রিয় ও ভুল হয়।

**স্ক্রিপ্টে যাওয়া প্রতিটা স্পেক-সংখ্যা লিংক করা লিস্টিংয়ের নিজের bullet আর spec টেবিলে ফেরত মেলান:**

```js
// ⚠️ ট্যাব amazon.com-এ থাকতে হবে, নাহলে relative fetch অন্য অরিজিনে যাবে
const bullets = [...d.querySelectorAll('#feature-bullets li')].map(li => li.innerText)
const spec    = [...d.querySelectorAll('#productOverview_feature_div tr, #productDetails_techSpec_section_1 tr')].map(tr => tr.innerText)
const desc    = d.getElementById('productDescription')?.innerText
```

> ⚠️ snow shovel স্ক্রিপ্টে এই ধাপটা বাদ দিয়েছিলাম। user ধরিয়ে দেওয়ার পর মিলিয়ে **৬টা অমিল**, তার **২টা আসল ভুল**:
> - **উল্টো বুঝেছিলাম** — লিখেছিলাম clutch "মোটর ধীর করে চিবিয়ে পার হয়"; লিস্টিং বলে *"clutch **releases** auger rotation"* — জ্যামে ছেড়ে দেয়, জোর করে না
> - **আপেল-কমলা তুলনা** — "#1 দেয় ৬০°, #5 দেয় ৩০°"; কিন্তু #5-এর **±৩০ = মোট ৬০**, একই sweep
> - লিস্টিংয়ে **নেই** এমন ফিচার দাবি · ধরন ভুল (৩টা preset-কে "continuous" বলা) · **অন্য মডেলের** ওয়ারেন্টি ধার · "দুটোর ছোটটা" যেখানে কোম্পানি দুইয়ের বেশি বেচে

**তিন জায়গায় তিনরকম সংখ্যা পেলে সেটা বলবেনই না** — Wild Badger-এর ওজন widget ২৩ lb / spec টেবিল ১৫ lb / মার্কেটিং ~১২ lb → স্ক্রিপ্টে ওজন বাদ।

**লিস্টিং থেকে না-আসা সংখ্যা attributed রাখুন** — "৪৫ ডিগ্রি" ছিল Pro Tool Reviews-এর মাপ, "৪০ মিনিট" ছিল Tom's Guide কোম্পানিকে উদ্ধৃত করে। লিস্টিং spec হিসেবে চালানো যাবে না।

**বোনাস:** মেলালে **ভালো জিনিসও** পাওয়া যায় যা রিভিউতে নেই — carbon fibre shaft-এ **lifetime warranty**, **IPX4** সিলিং, আর কোম্পানির নিজের ভাষায় **"fixed forward"** throw (আমার সমালোচনাটাই তাদের মুখে)।

**কেন:** প্রথম chainsaw স্ক্রিপ্টে প্রায় সবকিছু Pro Tool Reviews থেকে এসেছিল (১৫ বার)। ক্রস-চেক করে দেখা যায় আরেকটা স্বাধীন টেস্টে সেই #1 পিক **৫টার মধ্যে ৪র্থ**। পুরো লাইনআপ বদলাতে হয়েছিল।

---

## ৪. STRUCTURE

- **Hook-এ আপনার পিকের কোনো নাম নেই** — একটাও না। **কিন্তু টেস্টিং আউটলেটের নাম থাকতে হবে।** রেফারেন্স hook বলে *"Gamers Nexus put one of these six on an Nvidia latency rig and clocked it at 19 ms"*, "একটা ল্যাব" নয়। বিস্তারিত [03-HOOK-PLAYBOOK.md](03-HOOK-PLAYBOOK.md)।
- **প্রতিটা পিকে ঠিক একটা সৎ দোষ** — "Now, the honest limits."
- **Villain পায় নিজের ~১২০ শব্দের block**, top three-এর ঠিক আগে। **কখনো আপনার পিকের একটা নয়।**
- **যারা villain-কে সুপারিশ করে তাদের নাম বলুন** — নাহলে strawman শোনায়।
- **প্রতিটা segment একটা অসম্পূর্ণ সংখ্যা রেখে যাবে** — "Hold that number, because…"
- **দর্শকের আপত্তি নিজে উচ্চারণ করুন** — "So why isn't it number one?"
- **প্রতি script-এ একটা mental-model লাইন** — "800 buyers finding the same fault is data. 50 buyers is a rumor."
- **Anti-sell** — honest limit-এর পরেই কাকে কিনতে হবে **না**।
- **#1 শেষ হয় হুবহু:** `That's why it's number one.`
- **Product-এর মাঝে কোনো transition নেই।** সরাসরি পরের নম্বর।
- **Link দুইবার** — hook-এ আর outro-তে।
- **Filler নিষিদ্ধ:** "in conclusion", "let's dive in", "without further ado", "stay tuned", "top 6"।

---

## ৫. VOICE

Second person, present tense, spoken English. ছোট declarative বাক্য। Spec-এর পরেই তার মানে দৈনন্দিন জীবনে। কোনো bullet, কোনো heading, কোনো stage direction।

---

## ৬. DELIVERY

- কাজ দিন **সাধারণ ফাইল হিসেবে** `C:\Users\DFIT\Downloads`-এ — `.txt` (Notepad) বা `.docx` (Word)। Artifact নয়।
- Word ফাইলের **উপরে সোর্স টেবিল**: `Sl | Name | Verified | Source link` — Verified কলামে `rating ⭐ (count) · N+/mo`।
- তার নিচে **Additional sources** টেবিল, তারপর **Sourcing notes**, তারপর স্ক্রিপ্ট।
- স্ক্রিপ্টের প্রতিটা block-এ হেডিং + word count।
