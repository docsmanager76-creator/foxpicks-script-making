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

**কীভাবে যাচাই:** WebSearch এই ডেটা দেয় না। in-app browser দিয়ে সরাসরি Amazon সার্চ ও প্রোডাক্ট পেজ পড়ুন।

```
mcp__Claude_Browser__navigate  →  https://www.amazon.com/s?k={category}
mcp__Claude_Browser__javascript_tool  →  data-asin থেকে ASIN + rating + badge টানুন
```

⚠️ ব্রাউজারের delivery address **Bangladesh**-এ সেট। তাই *"cannot be shipped to your selected delivery location"* মানে US-এ unavailable **নয়**। Rating আর past-month সংখ্যা US-wide — ওগুলো নির্ভরযোগ্য।

**যোগ্য পিক ছয়টা না পেলে জানান, জোর করে ভরাট করবেন না।**
উদাহরণ: countertop distiller-এ Amazon-এ যোগ্য আলাদা ব্র্যান্ড মাত্র চারটা (Megahome, H2o Labs, Kitchen Crop, VEVOR + villain হিসেবে CO-Z)। তাই ওই ভিডিও ৫ পিকে নেমেছে।

---

## ৩. FACT-CHECK — প্রতিটা কাজে, না বললেও

1. **কমপক্ষে ৩টা স্বাধীন সোর্স।** একটা আউটলেট **৬ বারের বেশি** cite হলে লাল বাতি।
2. **সোর্স একমত না হলে সেটাই খবর** — চেপে যাবেন না।
   > "One lab named it Editors' Choice and the fastest ever tested. Another put it fourth of five and wrote that it lacked cutting power."
3. **প্রতিটা সংখ্যা সোর্সে ফেরত মেলান।**
4. **যাচাই না হলে UNVERIFIED লিখুন**, অনুমান করে লিখবেন না।
5. **সোর্স পরস্পরবিরোধী হলে সংখ্যাটা বাদ দিন।** (CO-Z ওয়ারেন্টি: ১৪ দিন vs ১ বছর → স্ক্রিপ্টে যায়নি।)
6. **নিজের আউটপুট মাপুন** — segment ধরে word count, price-grep, hook-এ product name আছে কিনা। প্রতিবার।
7. **ডকুমেন্টে "Sourcing notes" সেকশন দিন** — কী যাচাই হয়নি, কোথায় দ্বিমত, কী ইচ্ছাকৃতভাবে বাদ।

**কেন:** প্রথম chainsaw স্ক্রিপ্টে প্রায় সবকিছু Pro Tool Reviews থেকে এসেছিল (১৫ বার)। ক্রস-চেক করে দেখা যায় আরেকটা স্বাধীন টেস্টে সেই #1 পিক **৫টার মধ্যে ৪র্থ**। পুরো লাইনআপ বদলাতে হয়েছিল।

---

## ৪. STRUCTURE

- **Hook-এ কোনো product name নেই।** একটাও না।
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
