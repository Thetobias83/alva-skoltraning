import {ADULT_SOURCES} from './adult-knowledge.js?v=20261102-adult1';
const adultEscape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function hypotheticalGrowth(start,rate,years){
 if(!Number.isFinite(start)||start<0||start>1000000||!Number.isFinite(rate)||rate< -100||rate>30||!Number.isInteger(years)||years<1||years>40)return null;
 return start*(1+rate/100)**years;
}
export function adultBudget(income,fixed,variable){
 if(![income,fixed,variable].every(n=>Number.isFinite(n)&&n>=0&&n<=1000000))return null;
 return income-fixed-variable;
}
export function renderAdultExtras(l){
 if(l.subject!=='Vuxenkunskap')return '';
 return `<section class="adult-guide"><span class="tag">${adultEscape(l.group)} · Sverige</span><p>Allmän undervisning med påhittade exempel. Inga köp, avtal, konton eller deklarationer görs här. Du kan lära dig begreppen utan att använda egna pengar eller personuppgifter.</p><h3>Prova i små steg</h3><ol>${l.steps.map(s=>`<li>${adultEscape(s)}</li>`).join('')}</ol><h3>Kontrollera hos källan</h3><p class="small">Faktauppgifter jämförda 2 november 2026. För ett riktigt beslut behöver du kontrollera aktuella regler och din egen situation. Skatt: välj rätt inkomstår.</p><ul>${l.sources.map(key=>{const s=ADULT_SOURCES[key];return `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${adultEscape(s.provider)} – ${adultEscape(s.title)} ↗</a></li>`;}).join('')}</ul></section>
 ${l.id==='adult-funds'?'<p class="lesson-example">▶ FI:s sida om fonder innehåller också en film. Öppna den via källänken ovan och förklara sedan skillnaden mellan fond och enskild aktie.</p>':''}
 ${l.id==='adult-budget'?`<section class="adult-guide"><h3>Budgetverkstad med låtsaspengar</h3><p>Räkna på påhittade månadsbelopp, inte din familjs ekonomi. Skrivytorna sparas inte eller skickas.</p><div class="controls"><label>Inkomster efter skatt (kr)<input type="number" id="adultIncome" min="0" max="1000000" value="12000"></label><label>Fasta utgifter (kr)<input type="number" id="adultFixed" min="0" max="1000000" value="7000"></label><label>Övriga utgifter (kr)<input type="number" id="adultVariable" min="0" max="1000000" value="3500"></label></div><p id="adultBudgetResult" role="status"></p><p>Prova en extra utgift på 2 000 kr. Vilken fråga behöver du ställa om planen inte går ihop?</p></section>`:''}
 ${l.id==='adult-compound'?`<section class="adult-guide"><h3>Ränta-på-ränta-labb</h3><p>En matematisk modell med jämn antagen förändring, utan insättningar, skatt, avgifter eller inflation. Modellen förutsäger inte börsen.</p><div class="controls"><label>Påhittat startbelopp (kr)<input id="adultStart" type="number" min="0" max="1000000" value="1000"></label><label>Antagen förändring varje år (%)<input id="adultRate" type="number" min="-100" max="30" value="5" step="0.5"></label><label>Antal år<input id="adultYears" type="number" min="1" max="40" value="2"></label></div><p id="adultGrowthResult" role="status"></p><p>Prova också negativ förändring. Ett positivt räkneexempel är inget löfte om avkastning.</p></section>`:''}`;
}
export function initAdultExtras(l){
 const format=n=>n.toLocaleString('sv-SE',{maximumFractionDigits:2,minimumFractionDigits:2});
 const read=id=>{const value=document.querySelector(id).value.trim();return value===''?NaN:Number(value);};
 if(l.id==='adult-budget'){
  const update=()=>{const result=adultBudget(read('#adultIncome'),read('#adultFixed'),read('#adultVariable'));document.querySelector('#adultBudgetResult').textContent=result===null?'Ange belopp mellan 0 och 1 000 000 kr.':`${result<0?'Underskott':'Kvar enligt planen'}: ${format(Math.abs(result))} kr. Detta är ett räkneexempel.`;};
  for(const id of ['#adultIncome','#adultFixed','#adultVariable'])document.querySelector(id).oninput=update;update();
 }
 if(l.id==='adult-compound'){
  const update=()=>{const result=hypotheticalGrowth(read('#adultStart'),read('#adultRate'),read('#adultYears'));document.querySelector('#adultGrowthResult').textContent=result===null?'Ange startbelopp 0–1 000 000, förändring −100 till 30 % och helt antal år 1–40.':`Modellens slutvärde: ${format(result)} kr. Antagen utveckling, inte prognos eller garanti.`;};
  for(const id of ['#adultStart','#adultRate','#adultYears'])document.querySelector(id).oninput=update;update();
 }
}
