import test from 'node:test';
import assert from 'node:assert/strict';
import {BANK,SUBJECTS} from '../data.js';
import {buildExam,answerCorrect,answerText,shuffle,validateState,chooseRecommendation,dayKey} from '../core.js';
import {generateMath} from '../math.js';
test('recovered and added question banks have valid unique ids and answers',()=>{
 const ids=new Set();assert.equal(Object.keys(SUBJECTS).length,16);assert.ok(BANK.length>100);
 for(const q of BANK){assert.ok(SUBJECTS[q.s],q.s);assert.ok(q.e&&q.q&&q.t);assert.ok(!ids.has(q.id));ids.add(q.id);
 const right=q.kind==='text'?q.source.answers[0]:q.kind==='match'?q.source.pairs.map(p=>p[1]):q.c;
 assert.ok(answerCorrect(q,right),q.id);assert.ok(answerText(q));if(!q.kind||q.kind==='choice'){assert.ok(q.c>=0&&q.c<q.a.length);assert.equal(new Set(q.a).size,q.a.length);}
 }
});
test('exam never exceeds its available unique questions at any subject or level',()=>{
 for(const subject of Object.keys(SUBJECTS))for(const level of [1,2,3]){
  let pool=BANK.filter(q=>q.s===subject&&q.l<=level);if(!pool.length)pool=BANK.filter(q=>q.s===subject);
  const qs=buildExam([...pool,...pool],10);assert.equal(qs.length,Math.min(pool.length,10));assert.equal(new Set(qs.map(q=>q.id)).size,qs.length);assert.ok(qs.every(q=>q.s===subject));
 }
});
test('all mathematical generator branches have four unique answers and valid keys',()=>{
 const types=['add','mul','pct','pct2','equ','equ2','area','frac','speed','prob','scale','change'];
 for(const type of types)for(let i=0;i<200;i++){const q=generateMath(3,type);assert.equal(q.a.length,4,type);assert.equal(new Set(q.a).size,4,type);assert.equal(q.a[q.c],q.correct);assert.ok(q.h&&q.e);assert.ok(!q.a.some(a=>/\d[.,]\d{3}/.test(a)),JSON.stringify(q));}
});
test('generated probability distractors cannot be equivalent to the correct fraction',()=>{
 for(let i=0;i<200;i++){const q=generateMath(3,'prob');const [n,d]=q.correct.split('/').map(Number);for(const x of q.a.filter(a=>a!==q.correct)){const [xn,xd]=x.split('/').map(Number);assert.notEqual(xn*d,n*xd);}}
});
const fixture=()=>({subject:'Matematik',score:10,streak:1,history:[{d:Date.now(),s:'Matematik',t:'Algebra',ok:true,mode:'train'}],subjectStats:{Matematik:{a:1,c:1}},topicStats:{'Matematik||Algebra':{a:1,c:1}},days:{'2026-10-29':1},customWords:[{id:'c123',lang:'de',front:'Schule',back:'skola'}],wordStats:{de0:{seen:1,easy:0}},focus:{math:'Algebra',german:'Familie',other:''}});
test('export/import round trip preserves valid learning data and rejects malformed data',()=>{
 const subjects=Object.keys(SUBJECTS),value=fixture();assert.deepEqual(validateState(JSON.parse(JSON.stringify(value)),subjects),value);
 for(const change of [x=>x.subjectStats=null,x=>x.customWords=[{front:'x'}],x=>x.subjectStats.Matematik.c=9,x=>x.days={'__proto__':5,'nonsense':-1},x=>x.history[0].mode='bad']){const bad=fixture();change(bad);assert.throws(()=>validateState(bad,subjects));}
 const malicious=fixture();malicious.extra='<script>bad</script>';assert.ok(!('extra' in validateState(malicious,subjects)));
});
test('recommendation waits for enough attempts and prioritizes the weakest topic',()=>{
 assert.equal(chooseRecommendation({'Matematik||Tal':{a:1,c:0}}),null);
 assert.equal(chooseRecommendation({'Matematik||Tal':{a:4,c:3},'Tyska||Verb':{a:3,c:0}}).t,'Verb');
});
test('shuffle retains repeated entries without mutating input; local dates use local calendar',()=>{
 const a=[1,1,2,3];assert.deepEqual(shuffle(a).sort(),[1,1,2,3]);assert.deepEqual(a,[1,1,2,3]);assert.equal(dayKey(new Date(2026,9,29,0,5)),'2026-10-29');
});

