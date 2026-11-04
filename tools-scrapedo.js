// FoxPicks Amazon fetcher: ALL Amazon reads go through Scrape.do (geoCode=us). Never open amazon.com directly.
// Key file: F:/FoxPicks-Project/scrapedo_key.txt (one token per line; never print it). Usage: node tools-scrapedo.js <search words>
const fs = require('fs');
const KEYS = [__dirname + '/../scrapedo_key.txt', 'F:/VideoFactory/keys/scrapedo_key.txt'];
const keyFile = KEYS.find(f => fs.existsSync(f));
if (!keyFile) throw new Error('scrapedo_key.txt not found');
const tok = fs.readFileSync(keyFile, 'utf8').split(/\r?\n/).map(s => s.trim()).filter(s => s && !s.startsWith('#'))[0];
let credits = 0, pages = 0;
async function get(url) {
  const q = new URLSearchParams({ token: tok, url, super: 'true', geoCode: 'us' });
  const r = await fetch('https://api.scrape.do/?' + q);
  const cost = Number(r.headers.get('scrape.do-request-cost') || 0);
  const left = r.headers.get('scrape.do-remaining-credits');
  const html = await r.text();
  if (r.ok) { credits += cost; pages++; }
  return { status: r.status, html, cost, left };
}
const txt = s => s.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
function parseSearch(html) {
  const out = [];
  const re = /<div[^>]*data-asin="([A-Z0-9]{10})"[^>]*data-component-type="s-search-result"[^>]*>/g;
  const idx = []; let m;
  while ((m = re.exec(html))) idx.push([m.index, m[1]]);
  idx.forEach(([st, asin], k) => {
    const p = html.slice(st, k + 1 < idx.length ? idx[k + 1][0] : st + 30000);
    const h2 = (p.match(/<h2[^>]*>([\s\S]*?)<\/h2>/) || [])[1];
    const rating = (p.match(/([\d.]+) out of 5 stars/) || [])[1];
    const cnt = (p.match(/aria-label="([\d,.KM]+) ratings?"/) || [])[1];
    const badge = (p.match(/([\d.,K+]+) bought in past month/) || [])[1];
    out.push({ asin, title: h2 ? txt(h2).slice(0, 110) : '', rating, cnt, badge, sponsored: /AdHolder|Sponsored/.test(p.slice(0, 3000)) });
  });
  return out;
}
module.exports = { get, parseSearch, txt, stats: () => ({ pages, credits }) };
if (require.main === module) {
  (async () => {
    const q = process.argv.slice(2).join(' ');
    const r = await get('https://www.amazon.com/s?k=' + encodeURIComponent(q));
    console.log('status', r.status, 'cost', r.cost, 'left', r.left, 'len', r.html.length);
    parseSearch(r.html).forEach(i => console.log(i.asin, '|', i.title, '|', i.rating, '(' + i.cnt + ') |', i.badge || '-'));
  })();
}
