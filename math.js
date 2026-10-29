import {shuffle} from './core.js';
const r=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pick=a=>a[r(0,a.length-1)];
const fmt=n=>Number(n.toFixed(2)).toLocaleString('sv-SE',{useGrouping:false,maximumFractionDigits:2});
let serial=0;
export function generateMath(level=2,requestedType){
 const types=level===1?['add','pct','mul']:level===2?['equ','area','frac','pct2','speed']:['equ2','prob','scale','change'];
 const type=requestedType||pick(types);let topic,prompt,answer,wrong,explanation,hint;
 const numeric=(n,unit='')=>fmt(n)+(unit?' '+unit:'');
 if(type==='add'||type==='mul'){
  const a=type==='add'?r(20,150):r(3,12),b=type==='add'?r(10,100):r(3,12),value=type==='add'?a+b:a*b;
  topic='Tal';prompt=`Vad är ${a} ${type==='add'?'+':'×'} ${b}?`;answer=numeric(value);wrong=[numeric(value+1),numeric(value+10),numeric(value-1)];explanation=`${a} ${type==='add'?'+':'×'} ${b} = ${value}.`;hint=type==='add'?'Dela upp talen i tiotal och ental.':'Multiplikation kan ses som upprepad addition.';
 }else if(type==='pct'||type==='pct2'){
  const base=type==='pct'?pick([100,200,300,400]):r(4,12)*50,p=pick([10,20,25,50]),value=base*p/100,unit=type==='pct2'?'kr':'';
  topic='Procent';prompt=type==='pct'?`Vad är ${p} % av ${base}?`:`En vara kostar ${base} kr och reas med ${p} %. Hur stor är rabatten?`;
  answer=numeric(value,unit);wrong=[numeric(value+10,unit),numeric(value+20,unit),numeric(value+30,unit)];explanation=`${base} × ${fmt(p/100)} = ${fmt(value)}${unit?' kr':''}.`;hint='Dela procentsatsen med 100 och multiplicera med hela värdet.';
 }else if(type==='equ'||type==='equ2'){
  const x=r(2,14),m=r(2,6),b=r(2,15),sign=type==='equ'?1:-1,sum=m*x+sign*b;
  topic='Algebra';prompt=`Lös: ${m}x ${sign===1?'+':'−'} ${b} = ${sum}`;answer=`x = ${x}`;wrong=[`x = ${x+1}`,`x = ${x+2}`,`x = ${x-1}`];explanation=`${sign===1?'Subtrahera':'Addera'} ${b} på båda sidor. Då får du ${m}x = ${m*x}. Dela med ${m}: x = ${x}.`;hint='Gör samma sak på båda sidor. Börja med att få termen med x ensam.';
 }else if(type==='area'){
  const a=r(4,14),b=r(3,10),value=a*b;topic='Geometri';prompt=`En rektangel är ${a} cm × ${b} cm. Vad är arean?`;answer=numeric(value,'cm²');wrong=[numeric(value+5,'cm²'),numeric(value+10,'cm²'),numeric(value*2,'cm²')];explanation=`Area = längd × bredd = ${a} × ${b} = ${value} cm².`;hint='Arean mäts i kvadratcentimeter. Multiplicera sidornas längder.';
 }else if(type==='frac'){
  const den=pick([4,5,10]),num=r(1,den-1),value=num/den;topic='Bråk';prompt=`Vilket decimaltal motsvarar ${num}/${den}?`;answer=fmt(value);wrong=[fmt(value+.1),fmt(value+.2),fmt(value+1)];explanation=`${num} ÷ ${den} = ${fmt(value)}.`;hint='Dividera täljaren med nämnaren.';
 }else if(type==='speed'){
  const hours=r(2,5),v=r(10,30),d=hours*v;topic='Samband';prompt=`Du färdas ${d} km på ${hours} timmar. Medelhastighet?`;answer=numeric(v,'km/h');wrong=[numeric(v+3,'km/h'),numeric(v+8,'km/h'),numeric(v*2,'km/h')];explanation=`Hastighet = sträcka ÷ tid = ${d} ÷ ${hours} = ${v} km/h.`;hint='Hur många kilometer färdas du på en timme?';
 }else if(type==='prob'){
  const red=r(2,7),blue=r(2,7),total=red+blue;topic='Sannolikhet';prompt=`En påse innehåller ${red} röda och ${blue} blå kulor. Vad är sannolikheten att dra en röd kula utan att titta?`;answer=`${red}/${total}`;wrong=[`0/${total}`,`${red-1}/${total}`,`${red+1}/${total}`];explanation=`Gynnsamma utfall / alla utfall = ${red}/${total}.`;hint='Täljaren är antalet röda kulor. Nämnaren är alla kulor tillsammans.';
 }else if(type==='scale'){
  const scale=pick([10,20,50]),cm=r(2,8),value=scale*cm;topic='Geometri';prompt=`Skala 1:${scale}. Vad motsvarar ${cm} cm på ritningen i verkligheten?`;answer=numeric(value,'cm');wrong=[numeric(value/10,'cm'),numeric(value+10,'cm'),numeric(value*2,'cm')];explanation=`${cm} × ${scale} = ${value} cm.`;hint='En centimeter på ritningen motsvarar '+scale+' centimeter i verkligheten.';
 }else{
  const old=r(200,700),p=pick([10,20,25]),value=old*(100+p)/100;topic='Procent';prompt=`Ett värde är ${old} och ökar med ${p} %. Vad är det nya värdet?`;answer=fmt(value);wrong=[fmt(value+10),fmt(value+20),fmt(value-10)];explanation=`Nytt värde = ${old} × ${fmt(1+p/100)} = ${fmt(value)}.`;hint='En ökning med '+p+' % betyder att du multiplicerar med '+fmt(1+p/100)+'.';
 }
 const options=shuffle([answer,...wrong]);return {id:'g'+Date.now()+'-'+serial++,s:'Matematik',t:topic,l:level,q:prompt,a:options,c:options.indexOf(answer),correct:answer,e:explanation,h:hint};
}

