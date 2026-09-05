# ধাপ ১ — রিসার্চ

`{CATEGORY}` জায়গায় নাম বসিয়ে পুরোটা copy করে paste করুন। উত্তর না আসা পর্যন্ত ধাপ ২-তে যাবেন না।

---

```
Use web search and a browser. I am making a YouTube video titled
"6 Best {CATEGORY} 2026". Do research only — do not write the script.

STEP 1 — EDITORIAL CONSENSUS
Find 3 to 5 independent roundups of {CATEGORY} published in the last 12 months.
Prefer outlets that BUY and TEST: Wirecutter, Consumer Reports, Pro Tool Reviews,
A Concord Carpenter, TechGearLab, RTINGS, Popular Mechanics, Bob Vila, CNET,
Tom's Hardware, Family Handyman, Reviewed, Good Housekeeping.
For each roundup list every product it recommends, the exact role it assigns
(best overall, best budget, best for small spaces...), and the URL.

For each source also tell me: did they actually buy and test the products, or are
they compiling specs? Say so plainly. A spec compiler is not a test.

STEP 2 — MARKET CHECK (must use a browser, not search)
Open Amazon search for {CATEGORY}. For the top 20 results give me:
  brand + model, ASIN, star rating, number of ratings,
  "N+ bought in past month" badge (or NONE),
  and whether there is a real buy box (flag "No featured offers available").

STEP 3 — APPLY THE THREE RULES
Drop any product that fails ANY of these:
  1. no "bought in past month" badge
  2. rating below 4.0
  3. no buy box
Show me what you dropped and why. If fewer than six distinct products survive,
SAY SO — do not pad the list with near-identical variants of one brand.

STEP 4 — ASSIGN THE SLOTS
One product per slot, one line of justification each. No two may be near-identical.
  #6 entry / first-timer      #5 value pick        #4 specialist
  #3 large or heavy-duty      #2 premium / pro     #1 best for most people

STEP 5 — PER-PRODUCT DOSSIER
  a. Who it is for, one sentence.
  b. Two named outlets and what each concluded, with URLs. If you cannot verify
     an outlet actually reviewed it, write UNVERIFIED instead of naming it.
  c. Four specs from the manufacturer, each with a one-line real-world consequence.
  d. The single most common real complaint, from 3-star reviews and owner forums.
  e. Ownership facts: warranty length, consumable availability, running cost.
  f. Price tier only — entry / mid / premium / flagship. Mark "INTERNAL, never spoken".
  g. Amazon: ASIN, rating, ratings count, past-month badge, buy box yes/no.

STEP 6 — THE THREE PROMISES
  L1 THE OPENER — see 03-HOOK-PLAYBOOK.md. Tell me which of the six hook types
     the evidence actually supports, and give me the raw material for it.
  L2 THE MYTH — one spec buyers shop by that does NOT predict real results.
     Prove it with measured numbers: the spec-sheet leader must lose to a cheaper
     product on a measured test. Give both numbers and both products.
  L3 THE VILLAIN — one well-known {CATEGORY} that reviewers still recommend but
     that testing or owner reports contradict. Name the outlets that recommend it
     AND the specific reproducible failure with a source. It must NOT be one of the six.

STEP 7 — TWO CALLBACKS
  C1 one measured figure from the #6 product that a more expensive pick LOSES on.
  C2 one cost or penalty of the #3 product that the #2 product fixes.

STEP 8 — THE FREE UPGRADE
One maintenance habit or buying check that helps regardless of which product they
buy, and costs nothing. Source it. This is a whole segment, not a throwaway line.

STEP 9 — CROSS-CHECK PASS
  - Count how many times each outlet is the source. If one outlet is behind more
    than half the claims, go find another independent test before continuing.
  - List every place two sources DISAGREE. Do not resolve them silently —
    disagreement is the most interesting material in the video.
  - List everything you could not verify.

OUTPUT RULES
Never invent a quote, rating, test result or URL. Never state a price anywhere
except the internal tier field. Note the publication date of everything you cite.
```

---

## দ্রুত সংস্করণ — চেনা category-র জন্য

```
QUICK RESEARCH — {CATEGORY}. No preamble.

1. Three roundups from the last 12 months, from outlets that actually test.
2. Every product appearing in 2+ of them = shortlist.
3. Browser: Amazon top 20. For each — ASIN, rating, ratings count,
   past-month badge, buy box. Drop anything failing the three rules.
4. Assign six slots: entry, value, specialist, large, premium, best-for-most.
   No two near-identical. If fewer than six survive, say so.
5. Return the dossier block for each survivor.
6. The villain: popular, still recommended, contradicted by testing. Not on the list.
7. The myth: one spec buyers shop by that does not predict measured results.
8. The free upgrade: one habit that helps whatever they buy.
9. Cross-check: outlet counts, source disagreements, unverified items.

No prices except the internal tier word. Mark anything unverifiable UNVERIFIED.
```

---

## ⚠️ রেটিং ডেটা internal-only

STEP 2/3-এ যে star rating, review count আর `N+ bought in past month` টানা হয়, সেগুলো **শুধু পিক বাছাই করার জন্য**। Amazon Associates এগুলো PA API ছাড়া প্রকাশ করতে দেয় না — **স্ক্রিপ্টে একটাও যাবে না**। ওয়ার্কিং ডকুমেন্টের `Verified` কলামে রাখুন, ওখানেই শেষ। বিস্তারিত [RULES.md § ১খ](RULES.md)।
