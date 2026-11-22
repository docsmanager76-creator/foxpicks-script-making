# ধাপ ২ — স্ক্রিপ্ট

রিসার্চের উত্তর আসার পর এটা paste করুন। আগে `03-HOOK-PLAYBOOK.md` থেকে hook টাইপ বেছে নিন।

---

```
Now write the full script for "6 Best {CATEGORY} 2026" using only the research above.
Total 1,900–1,980 words. Follow this structure exactly.

THE RULES THAT OVERRIDE EVERYTHING

1. Never state a price, dollar figure, discount or price range. Anywhere.
   Express cheap and expensive only as position: "the most affordable pick on this
   list", "entry-level", "a step up", "three tiers above it", "the flagship".
   Never "under $300". Never "half the price of". Never "great value for the money".

2. Never speak an Amazon star rating, review count, "N+ bought in past month",
   "Amazon's Choice", "Overall Pick", or anything from Amazon customer reviews.
   Amazon's Participation Requirements forbid displaying OR OTHERWISE USING their
   customer reviews and star ratings without the Product Advertising API.
   You may use that data to CHOOSE the picks — never to fill a sentence.
   Instead use: named third-party verdicts, the manufacturer's own stated claim
   (attributed as theirs), or an owner-report pattern with no counts and no platform.

--- BLOCK 1: HOOK — 120 to 132 words ---
Use hook type {1 Collision / 2 Data Wall / 3 Reader's Pain / 4 Controlled
Contradiction / 5 Single Absurd Number / 6 Category Lie} from the playbook.
Zero product names. Zero brands. Zero prices.
Carry three promises: the countdown, the myth, the villain — plus the free upgrade.
End with: "All the product links are in the description."

--- BLOCK 2: THE SIX PRODUCTS — about 245 words each ---
(Five products instead of six? Then 280 words each, so the runtime still clears 10 minutes.)
GOLD STYLE: copy the shape of scripts/GOLD-6-best-3-plane-laser-levels-2026.md
(8.4k views in its first month). Read it before writing.
Each opens with exactly "Number {n}, the {Brand} {Model} {Product Type}." then:
  1. ROLE LINE, the first sentence after the name. Give the pick ONE job no other
     pick in the video has: "This is the runtime leader in this video." / "This is
     the pick with the most backup behind it." / "This is the only pick here you can
     run entirely from your phone." / "This is the only pick in this video that tells
     you your angle." / "This is the trusted-name pick in this video."
     The six roles must all be different, and the RECAP reuses them word for word.
     #1 can open on the outlet's verdict instead: "One outlet called this a clear
     top choice for professionals, and measured it themselves..."
  2. Prove the role right away with the maker's own number, attributed as theirs:
     "Fanttik rates the battery at fifteen hours..." / "the company says...".
  3. A spec paragraph: real listing/test specs, each tied to what it does on the
     job (drop rating, IP rating, range, charge time, what is in the box).
  4. THE HONEST LIMIT, its own paragraph, opening exactly "Now, the honest limit."
     (or "Now, the honest limit, and {brand/outlet} states it directly."). One real
     weakness, usually a gap in the listing or a trade-off of the role feature.
     Where it fits, tie it back to the hook ("and it's the number from the opening").
  5. One more short feature paragraph after the limit, so the block ends on a plus.
  6. Close on exactly "Buy it for {role}. Skip it if {the opposite need}."
     #1 instead closes "{why}, it's the one to start with. {Short punch line.}
     That's why it's number one."
No transitions between products. Stop, then start the next number.

PLANT AND PAY THE CALLBACKS
  In #6, after the C1 number: "Hold that number, because a {product} several tiers
  above it in this video is slower." Resolve it where that product sits.
  Deliver the L2 myth early — in #5 of six, or #4 of five. Not later.
  End it on a line the viewer can repeat: "You're buying a spec sheet, not a finished part."
  Voice the objection out loud at least once: "So why isn't it number one?"
  In #1, end with exactly: "That's why it's number one."

--- BLOCK 2b: THE VILLAIN — 120 words, before the top three ---
  1. (8w)  "Before the top three, the promise I made."
  2. (4w)  Name it.
  3. (45w) STEEL-MAN IT. Name the outlets that recommend it and the role each gives.
           Then say honestly why it is clever on paper. If this reads as sarcastic,
           the block fails.
  4. (25w) The kill shot. One specific sourced failure, outlet named, plus one
           concrete image the viewer can picture. No vague "users complain".
  5. (17w) One aphorism: "A {thing} that can't {do its core job} is a {lesser thing}
           with extra steps."
  6. (22w) Redirect to one of your own picks, then: buy it only for {narrow use},
           or don't buy it.
Never the villain from your own six. If the failure is not sourced, do not write the block.

--- BLOCK 3: THE FREE UPGRADE — 100 to 120 words, after #1 ---
The habit or check that helps whatever they buy, and costs nothing.
Name the enemy, explain the mechanism in one or two sentences, give the habit,
then close on what it is worth: "That habit costs nothing, and it decides whether
you replace one or keep one."
Do not claim a lifespan number unless a source measured it.

--- BLOCK 4: THE TAIL — about 190 words, four parts, in this order ---
  1. CLOSER (35w) "Before you pay, ask one question." The one portable question
     that separates good from bad here. End on why no product page answers it.
  2. WHERE TO BUY (60w) Which picks are easy to get, what to check on the listing,
     and anything NOT available on Amazon — that is the most useful sentence.
     No prices.
  3. RECAP (55w) "Quick recap." One line per pick, mapping a SITUATION to a product.
     Situations, never specs, never prices.
  4. CTA (35w) Links in the description; prices move fast, check before buying.
     Then two questions: which one they picked, AND one personal follow-up.

VOICE
Second person, present tense, spoken English. Short declarative sentences.
Banned: "in this video", "let's dive in", "without further ado", "stay tuned",
"in conclusion", "top 6".

WHEN DONE, print:
TOTAL: [n] | HOOK: [n] | VILLAIN: [n] | FREE UPGRADE: [n] |
PRICES: [must be 0] | AMAZON RATINGS OR BADGES SPOKEN: [must be 0] |
PRODUCT NAMES IN HOOK: [must be 0] | OUTLET CITED MOST: [name, count — flag if over 6]
If prices or Amazon ratings is not 0, or one outlet is behind more than half the
claims, fix it before showing me anything.
```

---

## লেখার পর নিজে মাপুন

স্ক্রিপ্টটা `##HOOK` / `##P6` / `##P5` … মার্কার দিয়ে একটা `.txt`-এ রেখে চালান:

```bash
awk '/^##/{s=substr($0,3);next}{c[s]+=NF}END{t=0;for(k in c){printf "%-9s %4d\n",k,c[k];t+=c[k]}printf "%-9s %4d\n","TOTAL",t}' script.txt
```

দাম আছে কিনা:

```bash
grep -n -i '\$[0-9]\|dollars\|cheapest\|cheaper than\|price tag' script.txt
```

Hook-এ ব্র্যান্ডের নাম আছে কিনা:

```bash
awk '/^##HOOK/{f=1;next}/^##/{f=0}f' script.txt | grep -o -i 'BRAND1\|BRAND2\|BRAND3'
```

Amazon rating / badge আছে কিনা (এটা সবচেয়ে সহজে ফসকে যায়):

```bash
grep -n -i "star\|ratings\|bought in past month\|Amazon's Choice\|Overall Pick\|reviewers say" script.txt
```
