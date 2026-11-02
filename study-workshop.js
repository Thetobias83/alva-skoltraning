import {STUDY_VIDEOS} from './study-skills.js?v=20261102-office1';
const studyHtml=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const STUDY_TEXT_PRACTICE={
 question:'Varför var vägarna viktiga i Romarriket?',
 sentences:[
  {text:'Romarna byggde vägar som band samman olika delar av riket.',important:true,why:'Det ger huvudidén: vägarna knöt ihop riket.'},
  {text:'På vägarna kunde soldater, meddelanden och varor transporteras.',important:true,why:'Det förklarar nyttan och svarar direkt på varför vägarna var viktiga.'},
  {text:'Vissa vägar hade flera lager av sten och grus.',important:false,why:'Det handlar om hur vägar byggdes. Det är intressant, men mindre viktigt för just frågan om deras betydelse.'},
  {text:'Vägarna gjorde det lättare att styra och bedriva handel över stora områden.',important:true,why:'Det visar följderna för styre och handel.'}
 ],
 summary:'Vägarna knöt ihop Romarriket. De underlättade transporter av soldater, meddelanden och varor och gjorde styre och handel lättare.'
};
export function studySelectionFeedback(indices){
 const chosen=new Set(indices);
 return STUDY_TEXT_PRACTICE.sentences.map((s,i)=>({text:s.text,why:s.why,chosen:chosen.has(i),appropriate:chosen.has(i)===s.important}));
}
export function renderStudyExtras(l){
 if(l.subject!=='Studieteknik')return '';
 const v=STUDY_VIDEOS[l.video];
 return `<section class="study-method"><h3>Gör så här – ett steg i taget</h3><ol>${l.steps.map(s=>`<li>${studyHtml(s)}</li>`).join('')}</ol></section>
 <section class="study-video"><span class="tag">Video · UR · svenska · ${studyHtml(v.time)}</span><h3>${studyHtml(v.title)}</h3><p><a class="secondary" href="${v.url}" target="_blank" rel="noopener noreferrer">▶ Öppna filmen hos UR ↗</a></p><p><strong>Efter filmen:</strong> ${studyHtml(v.prompt)}</p><p class="small">Öppnas i en ny flik. Välj svensk textning i spelaren när den finns. UR kan kräva inloggning för vissa program; tillgänglighet kan ändras. Lektionen och övningarna här fungerar utan filmen.</p></section>
 ${l.id==='study-text'?renderTextPractice():''}
 ${l.id==='study-notes'?`<section class="study-workshop"><h3>Prova din egen anteckning</h3><p>Skriv om ett litet avsnitt ur en skolbok. Du kan också använda papper.</p><label for="studySource">Ämne och källa</label><input type="text" id="studySource" maxlength="200" placeholder="Till exempel historia, bokens sida 24"><label for="studyQuestion">Min fråga</label><input type="text" id="studyQuestion" maxlength="300" placeholder="Vad behöver jag kunna förklara?"><label for="studyNotes">Mina stödord och ett exempel</label><textarea id="studyNotes" maxlength="2000" placeholder="Välj några ord. Visa hur de hänger ihop."></textarea><label for="studySummary">Det viktigaste med egna ord</label><textarea id="studySummary" maxlength="1000" placeholder="En eller två meningar …"></textarea><details><summary>Visa en enkel modell</summary><p><strong>Fråga:</strong> Vad är ett grundämne?</p><p><strong>Stödord:</strong> en sorts atomer → syre, järn.</p><p><strong>Min förklaring:</strong> Ett grundämne består av en sorts atomer. Rent järn är ett exempel.</p><p>Jämför sedan med din källa. Dölj förklaringen och svara på din fråga.</p></details><p class="small">Det du skriver skickas inte, sparas inte och betygsätts inte. Anteckningen försvinner när du byter avsnitt eller laddar om; kopiera den om du vill behålla den.</p></section>`:''}`;
}
function renderTextPractice(){
 return `<section class="study-workshop"><h3>Textverkstad: hitta viktig information</h3><p><strong>Din uppgift:</strong> ${STUDY_TEXT_PRACTICE.question}</p><p>Det här är en kort övningstext skriven för sidan. Läs alla meningar. Markera sedan de meningar som hjälper dig svara på frågan.</p><fieldset><legend>Vilka meningar vill du ta med?</legend>${STUDY_TEXT_PRACTICE.sentences.map((s,i)=>`<label class="study-sentence"><input type="checkbox" name="studySentence" value="${i}"><span>${s.text}</span></label>`).join('')}</fieldset><button class="secondary" id="checkStudyText">Jämför mina val</button><div id="studyTextFeedback" role="status" aria-live="polite"></div><label for="studyOwnSummary">Skriv svaret med egna ord</label><textarea id="studyOwnSummary" maxlength="1000" placeholder="Vägarna var viktiga eftersom …"></textarea><details><summary>Visa en möjlig sammanfattning</summary><p>${STUDY_TEXT_PRACTICE.summary}</p><p>Du kan formulera dig på flera sätt. Kontrollera att ditt svar förklarar varför vägarna var viktiga. Om frågan i stället gällde byggteknik skulle andra detaljer bli viktiga.</p></details><p class="small">Din text sparas inte eller skickas iväg. Den försvinner när du byter avsnitt. Ingen automatisk bedömning av sammanfattningen görs.</p></section>`;
}
export function initStudyExtras(l){
 if(l.id!=='study-text')return;
 document.querySelector('#checkStudyText').onclick=()=>{
  const checked=[...document.querySelectorAll('input[name="studySentence"]:checked')].map(e=>Number(e.value));
  const box=document.querySelector('#studyTextFeedback');
  if(!checked.length){box.textContent='Välj minst en mening först. Fråga dig: hjälper den mig förklara varför vägarna var viktiga?';return;}
  box.innerHTML=`<h4>Jämför med frågan</h4><ul>${studySelectionFeedback(checked).map(r=>`<li><strong>${r.chosen?'Du valde':'Du valde inte'}:</strong> ${r.text}<br>${r.why} ${r.appropriate?'Ditt val passar den här frågan.':'Fundera på om du vill ändra ditt val.'}</li>`).join('')}</ul><p>Pröva gärna igen. Vilken information som är viktig beror på vad du ska ta reda på.</p>`;
 };
}
