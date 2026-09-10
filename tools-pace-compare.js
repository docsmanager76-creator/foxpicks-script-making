const fs=require('fs');
for(const f of process.argv.slice(2)){
 const t=fs.readFileSync(f,'utf8').replace(/\s+/g,' ').trim();
 const sents=t.split(/(?<=[.?!])\s+/).filter(x=>x.trim());
 const lens=sents.map(s=>(s.match(/\S+/g)||[]).length).filter(x=>x>0);
 const w=lens.reduce((a,b)=>a+b,0);
 const avg=w/lens.length;
 const sd=Math.sqrt(lens.reduce((a,b)=>a+Math.pow(b-avg,2),0)/lens.length);
 console.log(f.replace('ref_','').replace('.txt','').padEnd(22),
  'words',String(w).padStart(5),
  '| sents',String(lens.length).padStart(4),
  '| avg',avg.toFixed(1).padStart(5),
  '| stdev',sd.toFixed(1).padStart(4),
  '| <=6w',String(lens.filter(x=>x<=6).length).padStart(3),
  '('+((lens.filter(x=>x<=6).length/lens.length*100).toFixed(0))+'%)',
  '| >=30w',String(lens.filter(x=>x>=30).length).padStart(3));
}
