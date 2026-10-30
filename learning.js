import {renderSubjectNavigation} from './study-navigation.js?v=20261030-reading1';
import {SUBJECTS} from './data.js?v=20261030-reading1';
import {ROME_TIMELINE} from './rome.js?v=20261030-reading1';
import {lessonReferences} from './references.js?v=20261030-reading1';
import {LESSONS,MOLECULES,lessonsFor,lessonForQuestion} from './lessons.js?v=20261030-reading1';
const html=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let activeLesson=null,onPractice=()=>{},onRomeExam=()=>{};
function openView(){document.querySelector('[data-view="learn"]').click();}
export function initLearning(options){
 onPractice=options.onPractice;onRomeExam=options.onRomeExam;
 const subjectSelect=document.querySelector('#learnSubject');
 for(const subject of [...new Set(LESSONS.map(l=>l.subject))]){const option=document.createElement('option');option.value=subject;option.textContent=subject;subjectSelect.append(option);}
 subjectSelect.value=options.subject||'Kemi';
 subjectSelect.onchange=()=>{options.onSubjectChange?.(subjectSelect.value);chooseSubject(subjectSelect.value);};
 document.querySelector('#lessonSelect').onchange=e=>renderLesson(LESSONS.find(l=>l.id===e.target.value));
 chooseSubject(subjectSelect.value);
}
function chooseSubject(subject,id){
 const lessons=lessonsFor(subject),select=document.querySelector('#lessonSelect');select.innerHTML='';
 for(const l of lessons){const option=document.createElement('option');option.value=l.id;option.textContent=l.title;select.append(option);}
 renderLesson(lessons.find(l=>l.id===id)||lessons[0]);
}
export function showLessonFor(q){
 const l=lessonForQuestion(q);if(!l)return;document.querySelector('#learnSubject').value=l.subject;chooseSubject(l.subject,l.id);openView();document.querySelector('#lessonTitle').focus();
}
export function renderQuestionIntro(q){
 const lesson=lessonForQuestion(q),box=document.querySelector('#questionIntro');
 box.replaceChildren();if(!lesson)return;
 const title=document.createElement('strong');title.textContent='Kort förklaring';const p=document.createElement('p');p.textContent=lesson.intro;
 const b=document.createElement('button');b.className='ghost';b.type='button';b.textContent='Förstå området →';b.onclick=()=>showLessonFor(q);box.append(title,p,b);
}
function renderLesson(l){
 if(!l)return;renderSubjectNavigation(l,lessonsFor(l.subject),SUBJECTS[l.subject].desc,id=>{chooseSubject(l.subject,id);document.querySelector('#lessonTitle').focus();});renderRomeSection(l);if('speechSynthesis' in window)speechSynthesis.cancel();activeLesson=l;document.querySelector('#lessonSelect').value=l.id;
 const box=document.querySelector('#lessonBody');
 box.innerHTML=`<article class="panel card lesson-article"><span class="tag">${html(l.subject)} · läs i din takt</span><h2 id="lessonTitle" tabindex="-1">${html(l.title)}</h2><div class="controls"><button class="ghost" id="readLesson">Läs upp förklaringen</button><button class="ghost" id="stopReading">Stoppa uppläsning</button></div><p class="lesson-lead">${html(l.intro)}</p><div id="lessonReading">${l.paragraphs.map(p=>`<p>${html(p)}</p>`).join('')}<div class="lesson-example"><h3>Ett enkelt exempel</h3><p>${html(l.example)}</p></div><div class="lesson-mistake"><h3>Lätt att blanda ihop</h3><p>${html(l.mistake)}</p></div></div><div class="term-list"><h3>Ord att förstå</h3><p class="small">Tryck på ett ord för att se vad det betyder.</p>${l.terms.map(([word,meaning])=>`<details><summary>${html(word)}</summary><p>${html(meaning)}</p></details>`).join('')}</div>${l.subject==='Kemi'&&['chem-elements','chem-molecules'].includes(l.id)?'<section class="molecule-lab" aria-labelledby="modelTitle"><h3 id="modelTitle">Se skillnaden med en partikelmodell</h3><p>Välj en molekyl. Räkna både antalet atomer och antalet olika grundämnen.</p><div class="controls" id="modelButtons"></div><div id="modelResult" role="status"></div><p class="small">Förenklad modell: kulornas färger och storlekar är symboler. Atomer ser inte ut som färgade bollar. Bindningarnas vinklar och avstånd visas inte exakt.</p></section>':''}<section class="recall-box"><h3>Kan du förklara med egna ord?</h3><p>${html(l.recall)}</p><button class="secondary" id="tryRecall">Dölj lästexten och försök själv</button><div id="recallAttempt" hidden><label for="recallText">Skriv några ord, eller säg svaret högt.</label><textarea id="recallText" maxlength="2000" placeholder="Jag tänker att …"></textarea><p class="small">Det här är en egen tankeövning. Texten skickas inte iväg, sparas inte och betygsätts inte.</p><button class="ghost" id="showRecall">Visa ett exempel på svar</button><div id="recallExample" class="lesson-example" hidden><p>${html(l.answer)}</p><p class="small">Du behöver inte använda exakt samma ord. Jämför om din förklaring uttrycker samma idé.</p></div></div></section><div class="actions"><button class="primary" id="practiceLesson">Öva på det här området →</button><span id="lessonStatus" class="small" role="status"></span></div>${lessonReferences(l.referenceSubject||(l.id.startsWith('rome-')?'Romartiden':l.subject))}</article>`;
 document.querySelector('#readLesson').onclick=()=>{
  const status=document.querySelector('#lessonStatus');if(!('speechSynthesis' in window)){status.textContent='Uppläsning stöds inte i den här webbläsaren.';return;}
  speechSynthesis.cancel();const speech=new SpeechSynthesisUtterance([l.title,l.intro,...l.paragraphs,'Ett exempel.',l.example,'Lätt att blanda ihop.',l.mistake].join(' '));speech.lang='sv-SE';speech.rate=.9;speech.onerror=()=>status.textContent='Uppläsningen kunde inte starta. Prova igen eller läs texten.';speechSynthesis.speak(speech);status.textContent='Läser upp. Vilken röst som används beror på enheten.';
 };
 document.querySelector('#stopReading').onclick=()=>{if('speechSynthesis' in window)speechSynthesis.cancel();document.querySelector('#lessonStatus').textContent='Uppläsningen är stoppad.';};
 document.querySelector('#tryRecall').onclick=e=>{const reading=document.querySelector('#lessonReading'),attempt=document.querySelector('#recallAttempt'),hide=!reading.hidden;document.querySelectorAll('.lesson-lead,#lessonReading,.term-list,.molecule-lab').forEach(el=>el.hidden=hide);attempt.hidden=!hide;e.target.textContent=hide?'Visa lästexten igen':'Dölj lästexten och försök själv';if('speechSynthesis' in window)speechSynthesis.cancel();if(!attempt.hidden)document.querySelector('#recallText').focus();};
 document.querySelector('#showRecall').onclick=()=>{document.querySelector('#recallExample').hidden=false;};
 document.querySelector('#practiceLesson').onclick=()=>onPractice(l.subject,l.topics[0]);
 if(document.querySelector('#modelButtons'))renderModel('H2O');
}
function renderModel(key){
 const buttons=document.querySelector('#modelButtons');buttons.innerHTML='';
 for(const [id,m] of Object.entries(MOLECULES)){const b=document.createElement('button');b.type='button';b.className='ghost';b.textContent=m.name+' '+m.formula;b.setAttribute('aria-pressed',String(id===key));b.onclick=()=>renderModel(id);buttons.append(b);}
 const m=MOLECULES[key],count=new Set(m.atoms).size;
 document.querySelector('#modelResult').innerHTML=`<div class="atom-row" aria-label="${html(m.formula)}: ${m.atoms.join(', ')}">${m.atoms.map(a=>`<span class="atom atom-${a}">${a}</span>`).join('<span class="bond" aria-hidden="true">—</span>')}</div><p><strong>${html(m.formula)}: ${m.atoms.length} atomer · ${count} ${count===1?'sorts':'sorters'} atomer · ${html(m.kind)}</strong></p><p>${html(m.explanation)}</p>`;
}


function renderRomeSection(selected){
 const box=document.querySelector('#romeSection');box.hidden=selected.subject!=='Historia';if(box.hidden)return;
 box.innerHTML=`<div class="panel card rome-hub"><span class="tag">Historia · inför provet</span><h2>Romartiden</h2><p>Börja med överblicken och arbeta vidare i sex avsnitt. Öva sedan på begrepp, händelser, orsaker och källor. Materialet är en bred repetition för sjuan; jämför med lärarens provområden och klassens bok.</p><nav class="controls" aria-label="Avsnitt om romartiden">${LESSONS.filter(l=>l.id.startsWith('rome-')).map((l,i)=>`<button class="ghost" data-rome-lesson="${l.id}" aria-pressed="${selected.id===l.id}">${i+1}. ${html(l.title.replace('Romartiden: ',''))}</button>`).join('')}</nav><div class="controls"><button class="secondary" id="practiceRome">Träna bara romartiden</button><button class="primary" id="examRome">Övningsprov om romartiden</button></div><details><summary>Tidslinje – håll ordning på händelserna</summary><p class="small">f.v.t. = före vår tideräkning (f.Kr.), e.v.t. = efter vår tideräknings början (e.Kr.).</p><ol class="rome-timeline">${ROME_TIMELINE.map(([date,event])=>`<li><strong>${date}</strong><span>${html(event)}</span></li>`).join('')}</ol></details><details><summary>Så kan du förbereda dig</summary><ol><li>Läs ett avsnitt och förklara orden högt.</li><li>Dölj lästexten och svara med egna ord.</li><li>Träna frågorna och läs varför svaret stämmer.</li><li>Gör övningsprovet. Det visar facit först när du lämnar in.</li><li>Öva muntligt: ge två orsaker till en förändring, koppla dem till följder och använd ett konkret exempel.</li></ol><p>Flervalsfrågorna kontrollerar delar av kunskapen. De kan inte bedöma hur väl du utvecklar ett eget resonemang, och övningsprovet ger inget skolbetyg.</p></details></div>`;
 box.querySelectorAll('[data-rome-lesson]').forEach(b=>b.onclick=()=>{chooseSubject('Historia',b.dataset.romeLesson);document.querySelector('#lessonTitle').focus();});
 box.querySelector('#practiceRome').onclick=()=>onPractice('Historia','Romartiden');box.querySelector('#examRome').onclick=()=>onRomeExam();
}
