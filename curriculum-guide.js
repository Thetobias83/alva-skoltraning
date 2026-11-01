// Egna sammanfattningar, inte återgivning av eller ersättning för kursplanerna.
export const CURRICULUM_GUIDE={
 'Matematik':['MAT','Tal och beräkningar; algebra och programmering; geometri; sannolikhet och statistik; samband och förändring; problemlösning, resonemang och redovisning.'],
 'Svenska':['SVE','Läsa och tolka skönlitteratur och sakprosa; skriva och bearbeta texter; tala, lyssna och samtala; språkets struktur och variation; informationssökning och källkritik.'],
 'Engelska':['ENG','Vardag, intressen, åsikter, erfarenheter och levnadsvillkor i engelskspråkiga sammanhang; förstå tal och texter; samtala, skriva och anpassa språk; strategier och källvärdering.'],
 'Tyska':['MSP','Språkval åk 7–9: vardag, intressen, aktiviteter och känslor; förstå tal och texter; delta i samtal och skriva; strategier, språklig bearbetning och levnadsvillkor där språket används.'],
 'Biologi':['BIO','Evolution, biologisk mångfald och ekosystem; kroppen, hälsa, sexualitet och relationer; arv och bioteknik; undersökningar, biologiska modeller och granskning av information.'],
 'Fysik':['FYS','Energi och miljö; rörelse, krafter och tryck; elektricitet och magnetism; ljud, ljus och strålning; universum; undersökningar, modeller och fysik i samhällsfrågor.'],
 'Kemi':['KEM','Partiklar, grundämnen, föreningar och reaktioner; vatten, luft och kretslopp; kol och livets kemi; material, energi, miljö och hälsa; säkra undersökningar och källgranskning.'],
 'Historia':['HIS','Tidiga samhällen som bakgrund och långa utvecklingslinjer; global handel, kolonialism och slavhandel; industrialisering och revolutioner; världskrig, folkmord och förtryck; demokratisering och efterkrigstid; källor och historiebruk.'],
 'Geografi':['GEO','Jordens processer och landskap; klimat, resurser och sårbara platser; befolkning och levnadsvillkor; hållbar utveckling; kartor, GIS, geografiska undersökningar och källor.'],
 'Samhällskunskap':['SAM','Individer, grupper och identitet; demokrati, ideologier och beslutsnivåer; rättigheter, nationella minoriteter och rättssystem; samhällsekonomi, arbetsliv och välfärd; medier och källkritik.'],
 'Religion':['REL','Kristendom, islam, judendom, hinduism och buddhism, med variation inom traditionerna; texter, symboler och praktik; religion och samhälle; identitet, livsfrågor, livsåskådningar och etiska resonemang.'],
 'Teknik':['TEK','Tekniska system och deras konsekvenser; mekanismer, material och konstruktion; elektronik, digitala system och programmering; utvecklingsarbete från behov till prövning, dokumentation och utvärdering.'],
 'Idrott & hälsa':['IDR','Sammansatta rörelser, idrott, dans och rörelse till musik; träning och hälsa; kroppsideal och normer; friluftsliv och orientering; säkerhet, simning, livräddning och första hjälpen.'],
 'Hem- & konsumentkunskap':['HKK','Planera, laga och värdera måltider; metoder, hygien, näring och mattraditioner; privatekonomi och konsumenträtt; reklam och digital handel; hållbar konsumtion, rengöring och arbetsfördelning hemma.'],
 'Bild':['BIL','Två- och tredimensionell bildframställning samt digital bild och film; material, teknik och komposition; arbetsprocess och presentation; bildanalys, konst och arkitektur; identitet, makt, integritet och användningsrätt.'],
 'Musik':['MUS','Sång och instrumentspel i grupp; gehör, improvisation, komposition och digitala verktyg; musikaliska begrepp och notation; instrument och klang; musikens historia, sammanhang, identitet och påverkan.']
};
export function curriculumUrl(subject){return `https://syllabuswebb.skolverket.se/compulsorycw/jsp/subject.htm?subjectCode=GRGR${CURRICULUM_GUIDE[subject][0]}01&tos=gr`;}
export function curriculumSummary(subject){
 const guide=CURRICULUM_GUIDE[subject];if(!guide)return '';
 return `<details class="curriculum-guide"><summary>Vad ska ämnet beröra enligt Lgr22? · åk 7–9</summary><p>${guide[1]}</p><p>Det här är en egen översikt över centralt innehåll för hela högstadiet. Läraren bestämmer fördelning och fördjupning i varje årskurs. Tyska avser språkval.</p><p>Lektionerna här är introduktion och repetition, inte en komplett lärobok eller bedömning av hela kursplanen. Du behöver också undervisning med samtal, undersökningar och praktiska moment. Exempelvis laborationer, simning, musicerande och matlagning kan inte ersättas av läsning eller quiz.</p><p><a href="${curriculumUrl(subject)}" target="_blank" rel="noopener noreferrer">Läs Skolverkets kursplan för ämnet</a> · jämförd 1 november 2026. Öppna centralt innehåll för årskurs 7–9.</p></details>`;
}
