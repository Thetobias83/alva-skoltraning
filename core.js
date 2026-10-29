export function shuffle(items){
 const out=[...items];for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;
}
export function dayKey(date=new Date()){
 return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}
export function buildExam(pool,count=10){
 const unique=[...new Map(pool.map(q=>[q.id,q])).values()];return shuffle(unique).slice(0,count);
}
const norm=v=>String(v).normalize('NFC').trim().toLocaleLowerCase('sv').replace(/\s+/g,' ').replace(/\.$/,'');
export function answerCorrect(q,value){
 if(q.kind==='text')return q.source.answers.some(a=>norm(a)===norm(value));
 if(q.kind==='match')return Array.isArray(value)&&value.length===q.source.pairs.length&&q.source.pairs.every((p,i)=>value[i]===p[1]);
 return value===q.c;
}
export function answerText(q){
 if(q.kind==='text')return q.source.answers[0];
 if(q.kind==='match')return q.source.pairs.map(p=>p.join(' → ')).join('; ');
 return q.a[q.c];
}
export function chooseRecommendation(topicStats){
 return Object.entries(topicStats).filter(([,v])=>v.a>=2).map(([k,v])=>{const [s,t]=k.split('||');return {s,t,p:Math.round(v.c/v.a*100),a:v.a};}).sort((a,b)=>a.p-b.p||b.a-a.a)[0]||null;
}
const plain=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);
const integer=x=>Number.isSafeInteger(x)&&x>=0;
export function validateState(raw,subjects){
 if(!plain(raw)||!subjects.includes(raw.subject)||!plain(raw.subjectStats)||!plain(raw.topicStats)||!plain(raw.days)||!Array.isArray(raw.customWords)||!Array.isArray(raw.history)||!plain(raw.wordStats)||!plain(raw.focus))throw new Error('Invalid progress schema');
 const out={subject:raw.subject,score:0,streak:0,history:[],topicStats:{},subjectStats:{},days:{},customWords:[],wordStats:{},focus:{math:'',german:'',other:''}};
 for(const field of ['score','streak']){if(!integer(raw[field]))throw new Error('Invalid counter');out[field]=raw[field];}
 for(const field of ['subjectStats','topicStats']){
  for(const [key,v] of Object.entries(raw[field])){
   const subject=field==='topicStats'?key.split('||')[0]:key;
   if(!subjects.includes(subject)||key.length>160||!plain(v)||!integer(v.a)||!integer(v.c)||v.c>v.a)throw new Error('Invalid statistic');
   out[field][key]={a:v.a,c:v.c};
  }
 }
 for(const [key,value] of Object.entries(raw.days)){
  if(!/^\d{4}-\d{2}-\d{2}$/.test(key)||!integer(value))throw new Error('Invalid day');out.days[key]=value;
 }
 if(raw.customWords.length>2000||raw.history.length>10000)throw new Error('Too much data');
 for(const w of raw.customWords){
  if(!plain(w)||!['en','de'].includes(w.lang)||typeof w.id!=='string'||!/^c[\w-]{1,80}$/.test(w.id)||typeof w.front!=='string'||typeof w.back!=='string'||!w.front.trim()||!w.back.trim()||w.front.length>200||w.back.length>200)throw new Error('Invalid vocabulary');
  out.customWords.push({id:w.id,lang:w.lang,front:w.front,back:w.back});
 }
 for(const [key,v] of Object.entries(raw.wordStats)){
  if(!/^(de|en|c)[\w-]{1,80}$/.test(key)||!plain(v)||!integer(v.seen)||!integer(v.easy)||v.easy>v.seen)throw new Error('Invalid word stats');out.wordStats[key]={seen:v.seen,easy:v.easy};
 }
 for(const entry of raw.history.slice(-600)){
  if(!plain(entry)||!Number.isFinite(entry.d)||!subjects.includes(entry.s)||typeof entry.t!=='string'||entry.t.length>160||typeof entry.ok!=='boolean'||!['train','daily','exam'].includes(entry.mode))throw new Error('Invalid history');
  out.history.push({d:entry.d,s:entry.s,t:entry.t,ok:entry.ok,mode:entry.mode});
 }
 for(const field of ['math','german','other']){
  if(typeof raw.focus[field]!=='string'||raw.focus[field].length>5000)throw new Error('Invalid school notes');out.focus[field]=raw.focus[field];
 }
 return out;
}
