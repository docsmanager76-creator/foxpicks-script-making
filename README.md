# FoxPicks Script Making

YouTube countdown review script system — research, write, fact-check, ship.
Everything here is meant to be read on a phone.

---

## কাজের ধারা

```
১. category বাছুন
        ↓
২. 01-RESEARCH-PROMPT.md  →  ছয়টা পিক + villain + loop
        ↓
৩. Amazon-এ তিনটা শর্ত যাচাই  (RULES.md § 2)
        ↓
৪. 03-HOOK-PLAYBOOK.md  →  এবার কোন hook টাইপ?
        ↓
৫. 02-SCRIPT-PROMPT.md  →  ~১,৯৫০ শব্দের স্ক্রিপ্ট
        ↓
৬. 04-QC-CHECKLIST.md  →  রেকর্ডের আগে
        ↓
৭. `.docx` বানিয়ে পাঠান  (RULES.md § 6)
```

> **শুধু একটা টপিক পাঠালেই পুরো ধারাটা চলবে।** "কী করব?" জিজ্ঞেস করার দরকার নেই —
> রিসার্চ → চ্যাটে dossier → **approve-এর জন্য থামা** → স্ক্রিপ্ট → QC → Word ফাইল।

---

## ⭐ PROFESSIONAL REVIEW-এর মতো কাজ — SPEC MATRIX (২০২৬-০৯-১৬)

শুধু Amazon ডেটা নয়। Wirecutter, America's Test Kitchen, TechGearLab, Bob Vila, Pro Tool Reviews-এর মতো professional সাইট যেভাবে প্রোডাক্ট বাছে ও মাপে, সেভাবে।

1. **আগে ক্যাটাগরির buyer-decision checklist** — একজন ক্রেতা কোন ৮–১২টা দিক দেখে কেনে (outlet-দের টেস্ট মাপকাঠি + buying guide + ownership: warranty, consumables, battery platform)।
2. **সব পিকে সব দিক** — spec matrix টেবিল। না পাওয়া গেলে লিখুন *"maker does not publish"* — সেটাও তথ্য।
3. **স্ক্রিপ্টে প্রতিটা সেগমেন্টে একই দিকগুলো একই ক্রমে**, spec-এর পরেই বাস্তব মানে।
4. **দাম কখনো নয়** — consumable "খরচ" মানে standard/availability/বক্সে কয়টা spare।

**উদাহরণ — Plasma Cutters-এ যা কম ছিল:** সব মেশিনের weight · duty cycle (তাপমাত্রাসহ) · cutting speed · consumable availability · air PSI/CFM · warranty · mild/stainless/aluminum পারফরম্যান্স।

---

## DEFINITION OF DONE

প্রতিটা আইটেম অন্তত একবার ফসকেছে। শেষ করার আগে মিলিয়ে নিন:

- [ ] US zip আগে, তারপর **browse node** (কীওয়ার্ড সার্চে থামা নয়)
- [ ] তিনটা নিয়ম, আর **কী বাদ দিলাম** সেটাও লেখা
- [ ] ৩+ স্বাধীন সোর্স, নাহলে **UNVERIFIED**
- [ ] **SPEC CROSS-MATCH** — লিংক করা লিস্টিংয়ের নিজের bullet ধরে
- [ ] Hook আর villain টাইপ **ঘোরানো** ([03-HOOK-PLAYBOOK.md](03-HOOK-PLAYBOOK.md) ledger)
- [ ] `tools-pace.js` দিয়ে **মাপা** — অনুমান নয়। avg ১৩–১৪ · stdev ৭–৯ · ছোট বাক্য ১৫–২২%
- [ ] Compliance grep: দাম · rating · count · badge · BSR · "Amazon" — সব শূন্য
- [ ] `.docx`-এ PRODUCT LINKS + **villain-এর `V` সারি** + sources + sourcing notes + প্রতি ব্লকে word count
- [ ] `scripts/`-এ কপি, hook ledger-এ নতুন লাইন

**সবচেয়ে বেশি যা ফসকায়:** villain-এর লিংক বাদ পড়া · budget-এ কাটতে গিয়ে সব বাক্য ছোট হয়ে staccato (**লম্বা বাক্য থেকে কাটুন, ছোট বাক্য মুছে নয়**) · আউটলেট villain-এর অন্য মডেল রিভিউ করেছে।

---

## ফাইলগুলো

| ফাইল | কী আছে |
|---|---|
| **[MEMORY.md](MEMORY.md)** | 👈 **নতুন চ্যাটে এটা আগে পড়ুন** — কে, কীভাবে কাজ করে, সব context |
| **[RULES.md](RULES.md)** | সব hard rule — না মানলে স্ক্রিপ্ট কাজ করবে না |
| **[01-RESEARCH-PROMPT.md](01-RESEARCH-PROMPT.md)** | ধাপ ১ — পিক, villain, loop বের করা |
| **[02-SCRIPT-PROMPT.md](02-SCRIPT-PROMPT.md)** | ধাপ ২ — পুরো স্ক্রিপ্ট |
| **[03-HOOK-PLAYBOOK.md](03-HOOK-PLAYBOOK.md)** | ৬টা hook · ৪টা villain · ২টা beat · rotation |
| **[04-QC-CHECKLIST.md](04-QC-CHECKLIST.md)** | রেকর্ডের আগে ২০টা চেক |
| **[scripts/](scripts/)** | সম্পূর্ণ স্ক্রিপ্ট, উদাহরণ হিসেবে |

---

## তিনটা নিয়ম যা সবচেয়ে বেশি ভাঙা পড়ে

**১. কোথাও দাম নেই।** script, title, thumbnail — কোনোটাতেই না। Amazon Associates-এর ঝুঁকি। বদলে position: *"the most affordable pick on this list"*, *"three tiers above it"*, *"the flagship"*।

**২. প্রতিটা পিক তিনটা শর্ত পাস করবে।** past-month sell আছে · rating 4.0+ · Amazon-এ buy box আছে। যাচাই না করে dossier দেখাবেন না।

**৩. কমপক্ষে ৩টা স্বাধীন সোর্স।** একটা আউটলেট ৬ বারের বেশি cite হলে সেটা লাল বাতি। সোর্স একমত না হলে সেটাই খবর — চেপে যাবেন না।

---

## Word budget — ~১,৯৫০ মোট

মাপা রেফারেন্স স্ক্রিপ্ট: ১,৮৯১ · ১,৯৫১ · ১,৯৬০ · ২,০৩৩

| Block | ৬ পিকে | ৫ পিকে |
|---|---|---|
| Hook | ১২০–১৩২ | ১২০–১৩২ |
| প্রতি product | ~২৪৫ | ~২৮০ |
| Villain block | ~১২০ | ~১৩০ |
| Free Upgrade | ~১১০ | ~১২০ |
| Closer | ~৩৫ | ~৩৫ |
| Where to buy | ~৬০ | ~৬৫ |
| Recap | ~৫৫ | ~৫৫ |
| CTA | ~৩৫ | ~৩৫ |

Hook-এ **কোনো product name নেই**। #1 শেষ হয় হুবহু: `That's why it's number one.`

---

## Title

সবসময় `{N} Best {Category} 2026` — ডিফল্ট **৬**, কারণ ভিডিও ১০ মিনিট পার করে (mid-roll) আর ভিড়ে আলাদা দেখায়। যোগ্য পিক ছয়টা না পাওয়া গেলে ৫-এ নামুন, কিন্তু তখন প্রতি সেগমেন্ট ~২৮০ শব্দে তুলুন যাতে রানটাইম না কমে।

## View reality

Day-1 view ১–২K স্বাভাবিক। আসল ভিউ আসে **২–৩ সপ্তাহ পরে** search জমলে।
**২১ দিনের আগে কোনো ভিডিও বিচার করবেন না।**
কোনো category হিট করলে ৪৮ ঘণ্টার মধ্যে তার Budget / Portable / Compact variant ছাড়ুন।
