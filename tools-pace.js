const fs=require('fs');
const f=process.argv[2];
const raw=fs.readFileSync(f,'utf8');
const parts={};let cur=null;
for(const line of raw.split(/\r?\n/)){const m=line.match(/^##([A-Z0-9]+)\s*$/);if(m){cur=m[1];parts[cur]=[];continue;}if(cur)parts[cur].push(line);}
let all=[];
console.log('SEG      words  sents  avg  max  <=6w  longest');
for(const k of Object.keys(parts)){
  const t=parts[k].join(' ').replace(/\s+/g,' ').trim();
  const sents=t.split(/(?<=[.?!])\s+/).filter(x=>x.trim());
  const lens=sents.map(s=>(s.match(/\S+/g)||[]).length);
  all=all.concat(lens);
  const w=lens.reduce((a,b)=>a+b,0);
  const avg=(w/lens.length).toFixed(1);
  const short=lens.filter(x=>x<=6).length;
  console.log(k.padEnd(8),String(w).padStart(5),String(lens.length).padStart(6),String(avg).padStart(5),String(Math.max(...lens)).padStart(4),String(short).padStart(5),'  ',sents[lens.indexOf(Math.max(...lens))].slice(0,70));
}
const avgAll=(all.reduce((a,b)=>a+b,0)/all.length).toFixed(1);
const sd=Math.sqrt(all.reduce((a,b)=>a+Math.pow(b-avgAll,2),0)/all.length).toFixed(1);
console.log('\nTOTAL sentences',all.length,'| avg',avgAll,'| stdev',sd,'| short(<=6w)',all.filter(x=>x<=6).length,'| long(>=30w)',all.filter(x=>x>=30).length);
