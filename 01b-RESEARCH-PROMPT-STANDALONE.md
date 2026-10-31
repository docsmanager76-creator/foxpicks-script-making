# রিসার্চ প্রম্পট — যেকোনো চ্যাটে paste করার জন্য (স্বয়ংসম্পূর্ণ)

`{TOPIC}`-এর জায়গায় কীওয়ার্ড বসিয়ে নিচের পুরো ব্লকটা নতুন চ্যাটে paste করুন। ওই চ্যাটের web search আর browser থাকতে হবে (Amazon পেজ খুলতে হবে)। এই রিপো বা memory-র কিছু ওই চ্যাটের লাগবে না — সব নিয়ম ব্লকের ভেতরেই আছে।

শেষ আপডেট: ২০২৬-১০-৩০ (snow blower স্ক্রিপ্ট পর্যন্ত যা শেখা হয়েছে সব যোগ করা)।

---

```
You are researching a FoxPicks YouTube countdown video: "6 Best {TOPIC} 2026".
Do RESEARCH ONLY. Do not write the script. Use web search AND a real browser.
At the end, give me one research dossier (format at the bottom) and STOP.

=== HARD RULES (apply everywhere) ===
- Never invent a quote, test result, spec, rating or URL. If you cannot confirm
  something, write UNVERIFIED next to it.
- Every claim needs 3+ independent sources where possible. When sources disagree,
  list the conflict openly instead of picking one silently.
- Amazon data (price, star rating, review count, "bought in past month",
  best-seller rank, stock status) is INTERNAL ONLY. It decides the picks but
  never appears in the spoken material. Price = a tier word only
  (entry / mid / premium / flagship), marked INTERNAL.
- Note the publication date of everything you cite.

=== STEP 0 — SET A US ZIP BEFORE ANY AMAZON CHECK ===
My browser defaults to Bangladesh, which makes US-only products falsely show
"No featured offers available". From any amazon.com page, run in the console:
  const body = new URLSearchParams({locationType:'LOCATION_INPUT', zipCode:'10001',
    storeContext:'generic', deviceType:'web', pageType:'Detail', actionSource:'glow'});
  await fetch('/gp/delivery/ajax/address-change.html', {method:'POST',
    headers:{'content-type':'application/x-www-form-urlencoded;charset=UTF-8'}, body});
Success returns {"isValidAddress":1,"isAddressUpdated":1,...,"city":"NEW YORK"}.
Confirm the header shows New York 10001 before continuing.

=== STEP 1 — BUYER-DECISION CHECKLIST (do this first) ===
Research like a pro review site, not like an Amazon shopper. Write the 8-12
things a real buyer of {TOPIC} must compare (e.g. power/battery, runtime,
capacity, size/width, weight, noise dB, modes, filter type and washable?,
what is in the box, warranty, consumables, maintenance). This checklist becomes
the columns of the spec matrix in Step 5.

=== STEP 2 — EDITORIAL REALITY (wide outlet coverage) ===
Find every big outlet that covers this keyword, not just one or two. Check:
Consumer Reports, Wirecutter, Popular Mechanics, Car and Driver, Bob Vila,
Pro Tool Reviews, This Old House, Family Handyman, Good Housekeeping, CNET,
TechGearLab, RTINGS, Reviewed, The Spruce, Serious Eats, Tom's Guide,
Field & Stream, Outdoor Life, AutoGuide, The Drive — whichever match the topic.
- If a Hearst site (Popular Mechanics, Car and Driver, Good Housekeeping)
  blocks you, try the Wayback Machine or Yahoo/MSN syndication.
- For each source: URL, date, every product it recommends and the role
  (best overall, budget...), and whether they BOUGHT AND TESTED or only compiled
  specs. Say it plainly — a spec compiler is not a test.
- Ignore affiliate content farms.
- Write down which candidate products NO outlet tested. Those will be described
  as "the maker claims" in the script.

=== STEP 3 — MARKET CHECK FROM THE BROWSE NODE ===
Do NOT rely on keyword search (ads + wrong-category products).
Open any product in the category, follow its "Best Sellers Rank" link to the
browse node (/gp/bestsellers/<dept>/<nodeid>), and read the top 50-100
(selector div[id^="gridItemRoot"]; ?pg=2 gives 51-100). Filter out strays
that are not really this product class.
For each candidate record: brand + model, ASIN, rating, ratings count,
"N+ bought in past month" badge or NONE, buy box yes/no (check the element
#add-to-cart-button, not page text), and the buy-box seller name.
Flag ASINs that are variations of one parent (shared ratings).

=== STEP 4 — THE THREE PICK RULES ===
Every pick must pass ALL three:
  1. "bought in past month" badge
  2. rating 4.0 or higher
  3. live buy box
Low-volume pro categories where NOBODY has a badge: tell me, and use
ratings count 50+ + buy box + multi-model brand instead.
List every dropped product and the reason (goes into Sourcing notes).
If fewer than six DISTINCT products survive, SAY SO and propose 5 (or fewer).
Never pad with near-identical variants of one brand.
Slots: #6 entry/first-timer, #5 value, #4 specialist, #3 large/heavy-duty,
#2 premium/pro, #1 best for most people.

=== STEP 5 — SPEC MATRIX FOR EVERY PICK ===
One table: rows = picks, columns = the Step 1 checklist. Fill EVERY cell from
the listing that will be linked (bullets, spec table, description) and from the
maker's site. If the maker does not publish it, write "not published".
Each pick will get a 230-240 word segment, so I need enough real features and
specs per pick: battery/voltage, runtime, charge time, weight, capacity,
size or width, noise dB, modes/speeds, filter type, in-the-box, warranty,
recommended uses. Ignore obvious junk values in listing tables and list them.

=== STEP 6 — PER-PICK DOSSIER ===
For each pick:
  a. Full searchable name: brand + model number in digits + size + product type
     (check the listing byline for the true brand). Example:
     "EGO Power+ SNT2400 24-Inch Two-Stage Snow Blower".
  b. Who it is for, one sentence.
  c. What each outlet concluded, with URL. If the outlet tested a DIFFERENT
     model in the family, say which.
  d. Most common real complaint (3-star reviews, owner forums).
  e. One honest limit, one ownership fact (warranty, consumables, what's not
     in the box), one comparison against another pick.
  f. INTERNAL: ASIN, rating, count, badge, buy box, seller, price tier.

=== STEP 7 — HOOK, MYTH, VILLAIN, CALLBACKS, FREE UPGRADE ===
HOOK — six types: 1 Collision, 2 Data Wall, 3 Reader's Pain,
  4 Contradiction, 5 Absurd Number, 6 Category Lie.
  The last video used hook 4, so do NOT use 4. Tell me which type the evidence
  supports and give the raw material. The hook names testing outlets but no picks.
MYTH — one spec buyers shop by that does not predict measured results. Prove it
  with real numbers from two named products.
VILLAIN — types: A Discontinued/unbuyable darling, B Hype/viral, C Overpriced
  premium or famous name, D Functional failure. The last video used B, so do
  NOT use B. A well-known product reviewers recommend, contradicted by a sourced,
  specific failure. Must NOT be one of the picks. Give a link for it too
  (listing, or the maker's page if it has no buy box). It will sit after #4.
CALLBACKS — C1: a figure from #6 (or #5) that returns at #1. C2: a cost or
  penalty of #3 that #2 fixes.
FREE UPGRADE — one free maintenance habit or buying check that helps whatever
  they buy, from a named source (e.g. Consumer Reports care guide).

=== STEP 8 — CROSS-CHECK PASS ===
- Count named sources per outlet. If one outlet is behind most claims, find
  another independent test. (The script may name one outlet only ~4-5 times.)
- Spec cross-match: for every number you want spoken, a table
  claim | linked listing says | match / mismatch. If three sources give three
  figures, drop the figure. A number not on the listing stays attributed
  ("Bob Vila measured...", "the maker claims...").
- Watch "with vs without battery" weights, kit vs tool-only model numbers,
  and +/- angle ranges (+/-30 = 60 degrees total).
- List all conflicts and all UNVERIFIED items.

=== OUTPUT: THE DOSSIER, THEN STOP ===
Sections, in this order:
 1. Badge table (slot, full name, ASIN, rating, count, badge, buy box/seller)
    plus a V row for the villain. Then the dropped list with reasons.
 2. Editorial reality (each outlet: date, tested or compiled, what it said).
 3. Buyer checklist.
 4. Spec matrix (every cell filled or "not published"); junk values ignored.
 5. Hook (type + material).
 6. Myth.
 7. Villain (type + sources + link).
 8. Callbacks.
 9. Free upgrade.
10. Conflicts / UNVERIFIED.
11. Sources (title, outlet, date, URL).
Save it as "{topic}-RESEARCH.md" if you can write files. Then wait for my
approval. Do not write the script.
```

---

## মনে রাখবেন
- **Hook/villain rotation:** প্রতিবার ব্যবহারের আগে `03-HOOK-PLAYBOOK.md`-এর শেষ লাইন দেখে প্রম্পটের "last video used hook 4 / villain B" লাইন দুটো বদলে দিন।
- রিসার্চ চ্যাট থেকে dossier এলে এই প্রজেক্টে এনে স্ক্রিপ্ট লেখান (`02-SCRIPT-PROMPT.md`)।
