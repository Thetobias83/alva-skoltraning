import {OFFICE_DATA,OFFICE_LEVELS,officeCsv} from './office-courses.js?v=20261102-adult1';
const officeEscape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const OFFICE_HELP={
 Word:{url:'https://support.microsoft.com/sv-se/word/',video:'https://support.microsoft.com/sv-se/word/add-a-heading-in-a-word-document',title:'Rubriker och formatmallar · guide med video'},
 Excel:{url:'https://support.microsoft.com/sv-se/excel/',video:'https://support.microsoft.com/sv-se/excel/accessibility/video-create-more-accessible-charts-in-excel',title:'Skapa mer tillgängliga diagram · video och text'},
 PowerPoint:{url:'https://support.microsoft.com/sv-se/powerpoint/',video:'https://support.microsoft.com/sv-se/office/video-stapla-figurer-bilder-och-objekt-fccf3cb2-cb5c-494f-b8bb-c2b85e1ba123',title:'Ordna bilder och objekt · video och text'}
};
export function renderOfficeExtras(course,u){
 if(course.category!=='office')return '';
 const help=OFFICE_HELP[course.subject];
 return `<section class="office-start"><span class="tag">Office · ${OFFICE_LEVELS[u.level]}</span><p>Gör uppgifterna i skolans eller hemmets ${course.subject}. Här får du instruktioner och kan testa begrepp; själva programmet körs inte på studiesidan. Menyer kan skilja sig mellan webb, Windows och Mac. Vissa fördjupningar kräver en version med rätt funktioner.</p><p>Ny här? Börja på Grund. Hoppa vidare när du kan göra uppgifterna själv. Kryssen visar din egen övning, inte ett intyg.</p></section>
 <section class="office-steps"><h3>Så gör du</h3><ol>${u.steps.map(s=>`<li>${officeEscape(s)}</li>`).join('')}</ol></section>
 ${u.formula?`<section class="code-example"><h3>Formel att prova i Excel</h3><pre><code>${officeEscape(u.formula)}</code></pre><p class="small">Svenska funktionsnamn och semikolon visas. Språk och regionala inställningar kan ändra namn och avgränsare. XLETAUPP finns inte i Excel 2016 eller 2019.</p></section>`:''}
 <section class="office-steps"><h3>Kontrollera ditt arbete</h3><ul>${u.checks.map(s=>`<li>${officeEscape(s)}</li>`).join('')}</ul><p class="small">Visa gärna resultatet för en lärare eller vuxen och förklara dina val.</p></section>
 <details class="office-resources"><summary>Microsofts guider och film att lära av</summary><p><a href="${help.url}" target="_blank" rel="noopener noreferrer">Hjälp och utbildning för ${course.subject} ↗</a></p><p><a href="${help.video}" target="_blank" rel="noopener noreferrer">▶ ${help.title} ↗</a></p><p>Välj ett tips och prova det i din fil. Filmens tal eller textning kan vara på ett annat språk. Textstöd finns hos Microsoft; spelare och tillgänglighet kan ändras.</p></details>
 ${course.subject==='Excel'?`<details class="office-resources"><summary>Övningsdata till Excel – öppna eller ladda ned</summary><p>Påhittade inköp för alla Excel-stegen. CSV innehåller enbart rubriker och värden. Formlerna bygger du själv i Excel. Spara sedan arbetsfilen som .xlsx för att behålla fler blad och diagram.</p><div class="study-table-scroll"><table><caption>Övning: inköp</caption><thead><tr>${OFFICE_DATA[0].map(v=>`<th scope="col">${v}</th>`).join('')}</tr></thead><tbody>${OFFICE_DATA.slice(1).map(row=>`<tr>${row.map(v=>`<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div><button class="secondary" id="downloadOfficeCsv">Ladda ned övningsdata (.csv)</button><p class="small">Semikolon används som avgränsare. Om allt hamnar i en kolumn, importera som text/CSV med semikolon.</p><details><summary>Visa kontrollvärden för originaldata</summary><p>Radsummor: 36, 50, 24, 24, 36 och 25. Totalt: 195 kr. Frukt: 73 kr. Skolmaterial: 122 kr. Efter 10 % rabatt: 175,50 kr.</p></details></details>`:''}`;
}
export function initOfficeExtras(){
 const button=document.querySelector('#downloadOfficeCsv');if(!button)return;
 button.onclick=()=>{
  const url=URL.createObjectURL(new Blob([officeCsv()],{type:'text/csv;charset=utf-8'}));
  const a=document.createElement('a');a.href=url;a.download='alva-office-inkop.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 };
}
