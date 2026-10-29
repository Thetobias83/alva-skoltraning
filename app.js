import {initCourses} from './courses.js?v=20261029-rome1';
import {initReferences} from './references.js?v=20261029-rome1';
import {generateMath} from './math.js';
import {initLearning,showLessonFor,renderQuestionIntro} from './learning.js?v=20261029-rome1';
import {SUBJECTS,BANK,WORDS} from './data.js?v=20261029-rome1';
import {shuffle,dayKey,validateState,buildExam,answerCorrect,answerText,chooseRecommendation} from './core.js';
const KEY="alva-school-v2";
const today=()=>dayKey();
let state={
 subject:"Matematik",score:0,streak:0,history:[],topicStats:{},subjectStats:{},days:{},
 customWords:[],wordStats:{},focus:{math:"",german:"",other:""}
};
let preferredTopic=null;
let current=null,locked=false,daily={active:false,pos:0,correct:0,q:null},exam={active:false,qs:[],pos:0,answers:[]};
let wordState={lang:"de",index:0,flipped:false};
let dailyTimer=null;

function load(){
 try{const raw=JSON.parse(localStorage.getItem(KEY)||'null');if(raw)state=validateState(raw,Object.keys(SUBJECTS));}
 catch{notice('Sparade data kunde inte läsas. Du kan fortsätta träna och importera en säkerhetskopia.');}
 try{document.documentElement.dataset.theme=localStorage.getItem('alva-smart-theme')|| (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');}catch{}
}
function save(){
 try{localStorage.setItem(KEY,JSON.stringify(state));return true;}
 catch{notice('Webbläsaren kunde inte spara. Exportera dina resultat innan du stänger sidan.');return false;}
}
function notice(message){document.querySelector('#storageNotice').textContent=message;}

function statKey(s,t){return s+"||"+t}
function ensureStats(q){
 if(!state.subjectStats[q.s])state.subjectStats[q.s]={a:0,c:0};
 const k=statKey(q.s,q.t); if(!state.topicStats[k])state.topicStats[k]={a:0,c:0};
}
function pct(x){return !x||!x.a?0:Math.round(x.c/x.a*100)}
function record(q,ok,mode="train"){
 ensureStats(q);state.subjectStats[q.s].a++;state.topicStats[statKey(q.s,q.t)].a++;
 if(ok){state.subjectStats[q.s].c++;state.topicStats[statKey(q.s,q.t)].c++;state.score+=10;state.streak++}else state.streak=0;
 state.days[today()]=(state.days[today()]||0)+1;
 state.history.push({d:Date.now(),s:q.s,t:q.t,ok,mode});if(state.history.length>600)state.history=state.history.slice(-600);
 save();renderStats();renderSubjects();
}
function mathGenerated(level=2){return generateMath(level);}
function normalize(q){return q.correct!==undefined?{...q,c:q.a.indexOf(q.correct)}:q;}
function pool(subject,level){
 let p=BANK.filter(q=>q.s===subject&&q.l<=level);if(!p.length)p=BANK.filter(q=>q.s===subject);
 if(subject==="Matematik")for(let i=0;i<8;i++)p.push(normalize(mathGenerated(level)));
 return p;
}
function weightedPick(subject,level,preferredTopic=null){
 let p=pool(subject,level);if(preferredTopic){const focused=p.filter(q=>q.t===preferredTopic);if(focused.length)p=focused;}
 if(p.length>1&&current){const other=p.filter(q=>q.id!==current.id);if(other.length)p=other;}
 let weights=p.map(q=>{const st=state.topicStats[statKey(q.s,q.t)];const miss=!st?.a?2.4:Math.max(.7,2.5-(st.c/st.a)*1.8);return miss;});
 let r=Math.random()*weights.reduce((a,b)=>a+b,0);for(let i=0;i<p.length;i++){r-=weights[i];if(r<=0)return p[i];}return p.at(-1);
}
function levelName(n){return n===1?"Grund":n===2?"Normal":"Utmaning"}
function renderSubjects(){
 const box=document.querySelector("#subjects");box.innerHTML="";
 Object.keys(SUBJECTS).forEach(s=>{
  const b=document.createElement("button");b.className="subject"+(state.subject===s?" active":"");b.type="button";
  b.innerHTML=`<span>${s}</span><small>${pct(state.subjectStats[s])}%</small>`;
  b.addEventListener("click",()=>{state.subject=s;preferredTopic=null;save();renderSubjects();if(document.querySelector('#view-learn').classList.contains('active'))showLessonFor({s,t:'',q:''});else{document.querySelector('[data-view="train"]').click();newTrainQuestion();}});
  box.appendChild(b);
 });
}
function newTrainQuestion(generated=false){
 locked=false;const level=Number(document.querySelector("#level").value);current=normalize(generated===true?generateMath(level):weightedPick(state.subject,level,preferredTopic));
 document.querySelector("#subjectTitle").textContent=current.s;
 document.querySelector("#subjectDesc").textContent=SUBJECTS[current.s].desc;
 document.querySelector("#topicTag").textContent=current.t;document.querySelector("#levelTag").textContent=levelName(current.l);
 document.querySelector("#question").textContent=current.q;renderAnswers("#answers",current,trainAnswer);
 renderQuestionIntro(current);
 document.querySelector("#feedback").className="feedback";document.querySelector("#feedback").textContent="";
 document.querySelector("#nextBtn").disabled=true;document.querySelector("#hintText").textContent="";renderStats();
}
function renderAnswers(sel,q,handler){
 const box=document.querySelector(sel);box.innerHTML='';
 if(q.kind==='text'||q.kind==='match'){
  const form=document.createElement('form');form.className='answer-form';
  if(q.kind==='text'){
   const label=document.createElement('label');label.textContent='Ditt svar';const input=document.createElement('input');input.type='text';input.setAttribute('aria-label','Ditt svar');input.maxLength=200;input.required=true;input.autocomplete='off';label.append(input);form.append(label);
  }else{const values=shuffle(q.source.pairs.map(p=>p[1]));for(const pair of q.source.pairs){const label=document.createElement('label');label.textContent=pair[0];const select=document.createElement('select');select.setAttribute('aria-label',pair[0]);select.required=true;const placeholder=document.createElement('option');placeholder.value='';placeholder.textContent='Välj betydelse';select.append(placeholder);for(const v of values){const opt=document.createElement('option');opt.value=v;opt.textContent=v;select.append(opt);}label.append(select);form.append(label);}}
  const submit=document.createElement('button');submit.type='submit';submit.className='secondary';submit.textContent=sel==='#examAnswers'?'Spara svar':'Kontrollera svar';form.append(submit);
  form.onsubmit=e=>{e.preventDefault();if(!form.reportValidity())return;const value=q.kind==='text'?form.querySelector('input').value:[...form.querySelectorAll('select')].map(s=>s.value);handler(value,submit);};box.append(form);return;
 }
 q.a.forEach((x,i)=>{const b=document.createElement('button');b.type='button';b.className='answer';b.textContent=x;b.onclick=()=>handler(i,b);box.append(b);});
}
function lockAnswers(selector){document.querySelectorAll(selector+' button,'+selector+' input,'+selector+' select').forEach(b=>b.disabled=true);}
function markAnswers(selector,q,ok,button){
 if(!q.kind||q.kind==='choice')document.querySelectorAll(selector+' .answer')[q.c]?.classList.add('correct');
 if(!ok)button.classList.add('wrong');lockAnswers(selector);
}

function trainAnswer(value,b){
 if(locked)return;locked=true;const ok=answerCorrect(current,value);markAnswers('#answers',current,ok,b);record(current,ok);
 const f=document.querySelector('#feedback');f.className='feedback '+(ok?'good':'bad');f.textContent=(ok?'Rätt. ':'Inte riktigt. Rätt svar: '+answerText(current)+'. ')+current.e;
 if(!ok){const read=document.createElement('button');read.type='button';read.className='ghost';read.textContent='Läs en enkel förklaring →';read.onclick=()=>showLessonFor(current);f.append(document.createElement('br'),read);}
 document.querySelector('#nextBtn').disabled=false;
}
function renderStats(){
 document.querySelector("#score").textContent=state.score;document.querySelector("#streak").textContent=state.streak;
 document.querySelector("#todayCount").textContent=state.days[today()]||0;
 const ta=Object.values(state.subjectStats).reduce((s,x)=>s+x.a,0),tc=Object.values(state.subjectStats).reduce((s,x)=>s+x.c,0);
 document.querySelector("#totalAnswered").textContent=ta;document.querySelector("#overallPct").textContent=ta?Math.round(tc/ta*100)+"%":"0%";
 document.querySelector("#activeDays").textContent=Object.keys(state.days).length;
 renderProgress();updateSmartStart();
}
function startDaily(timed=false){
 clearInterval(dailyTimer);daily={active:true,pos:0,answered:0,correct:0,q:null,subjects:shuffle(Object.keys(SUBJECTS)),deadline:timed===true?Date.now()+600000:null};document.querySelector("#dailyNextBtn").textContent="Nästa";nextDaily();
 const clock=document.querySelector('#dailyClock');clock.textContent=timed===true?'10:00 kvar':'';
 if(daily.deadline)dailyTimer=setInterval(()=>{if(!daily.active){clearInterval(dailyTimer);return;}const seconds=Math.max(0,Math.ceil((daily.deadline-Date.now())/1000));clock.textContent=`${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')} kvar`;if(!seconds)finishDaily();},1000);
}
function dailyPick(){return normalize(weightedPick(daily.subjects[(daily.pos||0)%daily.subjects.length],2));}
function nextDaily(){
 if(!daily.active){startDaily();return}
 if((daily.deadline&&Date.now()>=daily.deadline)||(!daily.deadline&&daily.pos>=10)){finishDaily();return}
 daily.q=dailyPick();daily.pos++;daily.locked=false;
 document.querySelector("#dailyPos").textContent=daily.deadline?`${daily.answered} svar`:`${daily.pos}/10`;document.querySelector("#dailyCorrect").textContent=daily.correct;
 document.querySelector("#dailySubjectTag").textContent=daily.q.s;document.querySelector("#dailyTopicTag").textContent=daily.q.t;
 document.querySelector("#dailyQuestion").textContent=daily.q.q;renderAnswers("#dailyAnswers",daily.q,dailyAnswer);
 document.querySelector("#dailyFeedback").className="feedback";document.querySelector("#dailyFeedback").textContent="";
 document.querySelector("#dailyNextBtn").disabled=true;document.querySelector("#dailyBar").style.width=(daily.deadline?Math.min(100,(600000-(daily.deadline-Date.now()))/6000):(daily.pos-1)*10)+"%";
}
function dailyAnswer(value,b){
 if(daily.locked||!daily.active)return;if(daily.deadline&&Date.now()>=daily.deadline){finishDaily();return;}daily.locked=true;daily.answered++;const ok=answerCorrect(daily.q,value);if(ok)daily.correct++;markAnswers('#dailyAnswers',daily.q,ok,b);
 record(daily.q,ok,'daily');const f=document.querySelector('#dailyFeedback');f.className='feedback '+(ok?'good':'bad');f.textContent=(ok?'Rätt. ':'Inte riktigt. Rätt svar: '+answerText(daily.q)+'. ')+daily.q.e;
 document.querySelector('#dailyCorrect').textContent=daily.correct;document.querySelector('#dailyNextBtn').disabled=false;document.querySelector('#dailyBar').style.width=(daily.deadline?Math.min(100,(600000-(daily.deadline-Date.now()))/6000):daily.pos*10)+'%';
 if(daily.deadline)document.querySelector('#dailyPos').textContent=daily.answered+' svar';
 if(!daily.deadline&&daily.pos===10)document.querySelector('#dailyNextBtn').textContent='Visa resultat';
}
function finishDaily(){
 clearInterval(dailyTimer);document.querySelector('#dailyClock').textContent='Passet är avslutat';
 document.querySelector("#dailyQuestion").textContent=`Klart: ${daily.correct} av ${daily.answered} rätt (${daily.answered?Math.round(daily.correct/daily.answered*100):0} %).`;
 document.querySelector("#dailyAnswers").innerHTML="";const f=document.querySelector("#dailyFeedback");f.className="feedback neutral";
 const accuracy=daily.answered?daily.correct/daily.answered:0;f.textContent=!daily.answered?'Inga frågor besvarades i det här passet. Välj ett nytt pass när du vill.':accuracy>=.8?'Starkt pass. Fortsätt med de områden som systemet väljer ut.':accuracy>=.5?'Bra grund. Repetera de frågor du missade.':'Ta ett lugnt repetitionspass i ett ämne i taget innan nästa blandade pass.';
 document.querySelector("#dailyBar").style.width="100%";document.querySelector("#dailyNextBtn").textContent="Nytt pass";document.querySelector("#dailyNextBtn").disabled=false;daily.active=false;
}
function setupExam(){
 const s=document.querySelector("#examSubject");s.innerHTML=Object.keys(SUBJECTS).filter(x=>BANK.some(q=>q.s===x)).map(x=>`<option>${x}</option>`).join("");
}
function startExam(){
 const s=document.querySelector("#examSubject").value,l=Number(document.querySelector("#examLevel").value);
 const candidates=pool(s,l);const p=buildExam(s==='Historia'&&document.querySelector('#examScope').value==='rome'?candidates.filter(q=>q.t==='Romartiden'):candidates,10).map(normalize);
 exam={active:true,qs:p,pos:0,answers:[]};document.querySelector("#examSummary").classList.add("hidden");document.querySelector("#examArea").classList.remove("hidden");showExamQ();
}
function showExamQ(){
 const q=exam.qs[exam.pos];document.querySelector("#examMeta").textContent=`${q.s} · ${q.t}`;
 document.querySelector("#examQuestion").textContent=q.q;renderAnswers("#examAnswers",q,(i,b)=>{
  [...document.querySelectorAll("#examAnswers .answer")].forEach(x=>{x.classList.remove("selected");x.setAttribute('aria-pressed','false');});b.classList.add("selected");b.setAttribute('aria-pressed','true');
  exam.answers[exam.pos]=i;document.querySelector("#examNextBtn").disabled=false;
 });
 document.querySelector("#examCounter").textContent=`Fråga ${exam.pos+1} av ${exam.qs.length}`;document.querySelector("#examNextBtn").textContent=exam.pos===exam.qs.length-1?"Lämna in":"Nästa";document.querySelector("#examNextBtn").disabled=exam.answers[exam.pos]===undefined;
}
function examNext(){
 if(exam.answers[exam.pos]===undefined)return;
 if(exam.pos<exam.qs.length-1){exam.pos++;showExamQ();return}
 let correct=0,details=[];exam.qs.forEach((q,i)=>{const ok=answerCorrect(q,exam.answers[i]);if(ok)correct++;record(q,ok,"exam");details.push({q,ok,chosen:exam.answers[i]})});
 document.querySelector("#examArea").classList.add("hidden");const box=document.querySelector("#examSummary");box.classList.remove("hidden");
 box.innerHTML=`<div class="exam-result">${correct} av ${exam.qs.length} rätt (${Math.round(correct/exam.qs.length*100)} %)</div><div class="list">${details.map(d=>`<div class="list-item"><strong>${d.ok?"✓":"✗"} ${escapeHtml(d.q.t)}: ${escapeHtml(d.q.q)}</strong><span>Ditt svar: ${escapeHtml(typeof d.chosen==='number'?d.q.a[d.chosen]:Array.isArray(d.chosen)?d.chosen.join(', '):d.chosen)}. Rätt svar: ${escapeHtml(answerText(d.q))}. ${escapeHtml(d.q.e)}</span></div>`).join("")}</div>`;
 exam.active=false;
}
function allWords(){
 const lang=wordState.lang,custom=state.customWords.filter(x=>x.lang===lang).map(x=>[x.front,x.back,true,x.id]);
 return WORDS[lang].map((x,i)=>[...x,false,lang+i]).concat(custom);
}
function showWord(){
 const list=allWords();if(!list.length)return;wordState.index=((wordState.index%list.length)+list.length)%list.length;wordState.flipped=false;
 const w=list[wordState.index];document.querySelector("#wordFront").textContent=w[0];document.querySelector("#wordHint").textContent="Tryck på kortet för att vända";
 renderCustomWords();
}
function flipWord(){
 const list=allWords(),w=list[wordState.index];wordState.flipped=!wordState.flipped;
 document.querySelector("#wordFront").textContent=wordState.flipped?w[1]:w[0];document.querySelector("#wordHint").textContent=wordState.flipped?w[0]:"Tryck på kortet för att vända";
}
function rateWord(easy){
 const list=allWords(),w=list[wordState.index],id=w[3];if(!state.wordStats[id])state.wordStats[id]={seen:0,easy:0};
 state.wordStats[id].seen++;if(easy)state.wordStats[id].easy++;save();
 if(easy)wordState.index=(wordState.index+1)%list.length;
 else {const hard=list.map((x,i)=>({i,st:state.wordStats[x[3]]||{seen:0,easy:0}})).sort((a,b)=>(a.st.easy/(a.st.seen||1))-(b.st.easy/(b.st.seen||1)));wordState.index=hard[0]?.i??((wordState.index+1)%list.length)}
 showWord();
}
function speakWord(){
 const list=allWords(),w=list[wordState.index];if(!("speechSynthesis" in window)){notice("Uppläsning stöds inte i den här webbläsaren.");return;}
 speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(w[0]);u.lang=wordState.lang==="de"?"de-DE":"en-GB";u.rate=.85;speechSynthesis.speak(u);
}
function renderCustomWords(){
 const box=document.querySelector("#customWords"),list=state.customWords.filter(x=>x.lang===wordState.lang);box.innerHTML=list.length?list.map(x=>`<div class="list-item"><strong>${escapeHtml(x.front)} → ${escapeHtml(x.back)}</strong><span>Egen glosa</span></div>`).join(""):'<div class="small">Inga egna glosor ännu.</div>';
}
function addCustomWord(){
 const front=document.querySelector("#customFront").value.trim().slice(0,200),back=document.querySelector("#customBack").value.trim().slice(0,200);if(!front||!back)return;
 state.customWords.push({id:"c"+Date.now(),lang:wordState.lang,front,back});save();document.querySelector("#customFront").value="";document.querySelector("#customBack").value="";showWord();
}
function renderProgress(){
 const bars=document.querySelector("#subjectBars");bars.innerHTML="";
 const subjects=Object.keys(SUBJECTS).filter(s=>state.subjectStats[s]?.a);
 if(!subjects.length)bars.innerHTML='<div class="small">Ingen statistik ännu.</div>';
 subjects.forEach(s=>{let p=pct(state.subjectStats[s]);bars.innerHTML+=`<div class="bar-row"><span>${escapeHtml(s)}</span><div class="bar"><i style="width:${p}%"></i></div><strong>${p}%</strong></div>`});
 const rec=document.querySelector("#recommendations");let topics=Object.entries(state.topicStats).filter(([k,v])=>v.a>=1).map(([k,v])=>{const [s,t]=k.split("||");return {s,t,p:pct(v),a:v.a}}).sort((a,b)=>a.p-b.p||b.a-a.a).slice(0,5);
 rec.innerHTML=topics.length?topics.map(x=>`<div class="list-item"><strong>${escapeHtml(x.s)} · ${escapeHtml(x.t)}</strong><span>${x.p}% rätt på ${x.a} försök. ${x.p<60?"Prioritera repetition.":x.p<80?"Repetera några gånger till.":"Bra nivå."}</span></div>`).join(""):'<div class="small">Efter några frågor visas rekommendationer här.</div>';
 const week=document.querySelector("#week");week.innerHTML="";for(let i=6;i>=0;i--){let d=new Date();d.setDate(d.getDate()-i);let k=dayKey(d),n=state.days[k]||0,day=d.toLocaleDateString("sv-SE",{weekday:"short"});week.innerHTML+=`<div class="day ${n?"done":""}"><strong>${day}</strong><span>${n?n+" frågor":"—"}</span></div>`}
}
function currentAIContext(){
 if(current)return {s:current.s,text:current.q};
 return {s:state.subject,text:""};
}
function tutorPrompt(subject,problem){
 const focus=subject==="Matematik"&&state.focus.math?`\nI skolan arbetar jag just nu med: ${state.focus.math}.`:subject==="Tyska"&&state.focus.german?`\nI skolan arbetar jag just nu med: ${state.focus.german}.`:"";
 return `Du är min studiehandledare för årskurs 7 i Sverige. Jag behöver hjälp i ${subject}.${focus}

Uppgift eller fråga:
${problem || "Hjälp mig repetera ett lämpligt område."}

Regler för hur du ska hjälpa mig:
1. Ge inte facit direkt.
2. Börja med en kort kontrollfråga för att se vad jag redan förstår.
3. Ge sedan en ledtråd i taget.
4. Använd enkelt språk men rätt ämnesbegrepp.
5. Om jag svarar fel, förklara varför och låt mig försöka igen.
6. När jag klarat uppgiften, ge en liknande uppgift för repetition.
7. Om det är ett faktapåstående som kan vara osäkert eller aktuellt, säg att jag bör kontrollera mot läroboken eller lärarens material.`;
}
function makePrompt(subject,problem){
 document.querySelector("#aiSubject").value=subject;document.querySelector("#aiProblem").value=problem||"";
 document.querySelector("#aiPrompt").value=tutorPrompt(subject,problem||"");
 document.querySelector('[data-view="ai"]').click();
}
async function copyPrompt(){
 const text=document.querySelector("#aiPrompt").value,st=document.querySelector("#copyStatus");
 try{await navigator.clipboard.writeText(text);st.textContent="Kopierat."}catch(e){document.querySelector("#aiPrompt").select();st.textContent="Markera texten och kopiera manuellt."}
}
function saveFocus(){
 state.focus={math:document.querySelector("#currentMath").value.trim(),german:document.querySelector("#currentGerman").value.trim(),other:document.querySelector("#currentOther").value.trim()};save();document.querySelector("#focusStatus").textContent="Sparat på den här enheten.";
}
function loadFocus(){
 document.querySelector("#currentMath").value=state.focus.math||"";document.querySelector("#currentGerman").value=state.focus.german||"";document.querySelector("#currentOther").value=state.focus.other||"";
}
function exportData(){
 const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="alva-skoltraning-progress.json";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
function importData(file){
 if(file.size>2000000){notice('Filen är för stor. Välj en exporterad progressfil under 2 MB.');return;}
 const r=new FileReader();r.onerror=()=>notice('Filen kunde inte läsas.');r.onload=()=>{try{const next=validateState(JSON.parse(r.result),Object.keys(SUBJECTS));if(!confirm('Ersätta lokala resultat och egna glosor med innehållet i filen? Exportera först om du vill behålla en säkerhetskopia.'))return;state=next;save();daily.active=false;clearInterval(dailyTimer);exam.active=false;document.querySelector('#examArea').classList.add('hidden');document.querySelector('#examSummary').classList.add('hidden');renderAll();notice('Progress importerad.');}catch{notice('Ogiltig progressfil. Dina nuvarande resultat är kvar.');}};r.readAsText(file);
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function renderAll(){renderSubjects();renderStats();renderProgress();loadFocus();showWord();newTrainQuestion()}
function initSelectors(){
 const opts=Object.keys(SUBJECTS).filter(s=>BANK.some(q=>q.s===s)).map(s=>`<option>${s}</option>`).join("");
 document.querySelector("#aiSubject").innerHTML=opts;setupExam();
}
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>{
 document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===b));
 document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id==="view-"+b.dataset.view));
 b.setAttribute('aria-current','page');document.querySelectorAll('.tab').forEach(x=>{if(x!==b)x.removeAttribute('aria-current');});
 if(b.dataset.view==='progress')renderProgress();
 if(b.dataset.view==='daily'&&!daily.active)startDaily();
}));
document.querySelector("#level").addEventListener("change",newTrainQuestion);
document.querySelector("#skipBtn").addEventListener("click",newTrainQuestion);
document.querySelector("#nextBtn").addEventListener("click",newTrainQuestion);
document.querySelector("#helpCurrentBtn").addEventListener("click",()=>makePrompt(current.s,current.q));
document.querySelector("#dailyNextBtn").addEventListener("click",nextDaily);
document.querySelector("#dailyHelpBtn").addEventListener("click",()=>daily.q&&makePrompt(daily.q.s,daily.q.q));
document.querySelector("#startExamBtn").addEventListener("click",startExam);
document.querySelector("#examNextBtn").addEventListener("click",examNext);
document.querySelector("#wordLang").addEventListener("change",e=>{wordState.lang=e.target.value;wordState.index=0;showWord()});
document.querySelector("#flashcard").addEventListener("click",flipWord);document.querySelector("#wordFlip").addEventListener("click",flipWord);
document.querySelector("#speakBtn").addEventListener("click",speakWord);document.querySelector("#wordEasy").addEventListener("click",()=>rateWord(true));document.querySelector("#wordHard").addEventListener("click",()=>rateWord(false));
document.querySelector("#addWordBtn").addEventListener("click",addCustomWord);
document.querySelector("#makePromptBtn").addEventListener("click",()=>document.querySelector("#aiPrompt").value=tutorPrompt(document.querySelector("#aiSubject").value,document.querySelector("#aiProblem").value.trim()));
document.querySelector("#copyPromptBtn").addEventListener("click",copyPrompt);
document.querySelector("#saveFocusBtn").addEventListener("click",saveFocus);
document.querySelector("#exportBtn").addEventListener("click",exportData);
document.querySelector("#importFile").addEventListener("change",e=>e.target.files[0]&&importData(e.target.files[0]));
document.querySelector("#resetBtn").addEventListener("click",()=>{if(confirm("Nollställa all statistik och alla egna glosor?")){localStorage.removeItem(KEY);location.reload()}});

function updateSmartStart(){
 const x=chooseRecommendation(state.topicStats);const el=document.querySelector('#smartStartText'),btn=document.querySelector('#smartStartBtn');
 if(x){el.textContent=`Rekommenderat nu: ${x.s} – ${x.t}. Du har ${x.p}% rätt på ${x.a} försök. Vi prioriterar det området.`;btn.textContent=`Träna ${x.t}`;btn.onclick=()=>{state.subject=x.s;preferredTopic=x.t;document.querySelector('#level').value='3';save();renderSubjects();document.querySelector('[data-view="train"]').click();newTrainQuestion();};}
 else{el.textContent='Börja med ett kort blandat pass. Efter några svar rekommenderar sidan vad du kan repetera.';btn.textContent='Starta dagens pass';btn.onclick=()=>{document.querySelector('[data-view="daily"]').click();if(!daily.active)startDaily();};}
}
load();initSelectors();initLearning({subject:state.subject,onSubjectChange:subject=>{state.subject=subject;preferredTopic=null;save();renderSubjects();newTrainQuestion();},onRomeExam:()=>{document.querySelector('#examSubject').value='Historia';document.querySelector('#examScope').disabled=false;document.querySelector('#examScope').value='rome';document.querySelector('#examLevel').value='3';document.querySelector('[data-view="exam"]').click();startExam();},onPractice:(subject,topic)=>{state.subject=subject;preferredTopic=topic;document.querySelector('#level').value='3';save();renderSubjects();document.querySelector('[data-view="train"]').click();newTrainQuestion();}});renderAll();
updateSmartStart();

document.querySelector('#themeBtn').onclick=()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;try{localStorage.setItem('alva-smart-theme',next);}catch{}};
document.querySelector('#hintBtn').onclick=()=>{document.querySelector('#hintText').textContent=current.h||('Fundera på området '+current.t+'. Försök förklara begreppen i frågan innan du väljer svar.');};
document.querySelector('#flashcard').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flipWord();}};
document.querySelector('#generatorBtn').onclick=()=>{state.subject='Matematik';preferredTopic=null;renderSubjects();document.querySelector('[data-view="train"]').click();newTrainQuestion(true);};
document.querySelector('#timedStartBtn').onclick=()=>startDaily(true);
document.querySelector('#endDailyBtn').onclick=()=>{if(daily.active)finishDaily();};


initCourses();initReferences();

document.querySelector('#examSubject').addEventListener('change',()=>{document.querySelector('#examScope').disabled=document.querySelector('#examSubject').value!=='Historia';document.querySelector('#examScope').value='all';});
document.querySelector('#examScope').disabled=document.querySelector('#examSubject').value!=='Historia';
