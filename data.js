import {subjects as additionalSubjects} from './questions.js';
import {extraContent} from './extra-content.js';
const SUBJECTS={
"Matematik":{desc:"Tal, algebra, geometri, procent, statistik, sannolikhet, samband och problemlösning.",topics:["Tal","Procent","Algebra","Geometri","Bråk","Sannolikhet","Samband"]},
"Svenska":{desc:"Läsförståelse, skrivande, grammatik, muntlig framställning och källkritik.",topics:["Grammatik","Läsförståelse","Källkritik","Texttyper","Språkbruk"]},
"Engelska":{desc:"Reading, listening, vocabulary, grammar, writing and communication.",topics:["Vocabulary","Grammar","Reading","Writing","Communication"]},
"Tyska":{desc:"Vardaglig kommunikation, glosor, verb, uttal, frågor och ordföljd.",topics:["Glosor","Verb","Frågor","Ordföljd","Kommunikation"]},
"Biologi":{desc:"Ekosystem, evolution, människokroppen, genetik och naturvetenskapliga arbetssätt.",topics:["Ekologi","Kroppen","Evolution","Genetik","Metod"]},
"Fysik":{desc:"Krafter, rörelse, energi, elektricitet, ljud, ljus och modeller.",topics:["Energi","Krafter","Hastighet","Elektricitet","Ljud och ljus"]},
"Kemi":{desc:"Materia, atomer, kemiska reaktioner, syror/baser och separationsmetoder.",topics:["Materia","Atomer","Reaktioner","Syror och baser","Separation"]},
"Historia":{desc:"Historiska förändringar, källor, orsaker och konsekvenser samt historiebruk.",topics:["Källor","Orsak och konsekvens","Förändring","Historiebruk"]},
"Geografi":{desc:"Kartor, klimat, naturresurser, befolkning och hållbar utveckling.",topics:["Kartor","Klimat","Befolkning","Naturresurser","Hållbarhet"]},
"Samhällskunskap":{desc:"Demokrati, ekonomi, lag och rätt, medier, rättigheter och samhällsstrukturer.",topics:["Demokrati","Ekonomi","Lag och rätt","Medier","Rättigheter"]},
"Religion":{desc:"Religioner, livsåskådningar, etik, identitet och samhälle.",topics:["Etik","Religioner","Livsåskådning","Identitet"]},
"Teknik":{desc:"Tekniska lösningar och system, konstruktion, material och utvecklingsarbete.",topics:["System","Konstruktion","Material","Utveckling"]},
"Idrott & hälsa":{desc:"Rörelse, träning, friluftsliv, hälsa och säkerhet.",topics:["Träning","Hälsa","Friluftsliv","Säkerhet"]},
"Hem- & konsumentkunskap":{desc:"Matlagning, privatekonomi, konsumtion och resurshushållning.",topics:["Matlagning","Privatekonomi","Konsumtion","Hållbarhet"]},
"Bild":{desc:"Bildframställning, bildanalys, tekniker och visuell kommunikation.",topics:["Bildanalys","Komposition","Tekniker","Kommunikation"]},
"Musik":{desc:"Musicerande, musikskapande, begrepp och musikens funktioner.",topics:["Begrepp","Instrument","Musikskapande","Musik i samhället"]}
};

const BANK=[
["Matematik","Procent",1,"Vad är 25 % av 200?",["25","40","50","75"],2,"25 % är en fjärdedel. 200 ÷ 4 = 50."],
["Matematik","Algebra",2,"Lös ekvationen: 3x + 5 = 20",["x = 3","x = 5","x = 7","x = 15"],1,"Subtrahera 5: 3x = 15. Dela sedan med 3."],
["Matematik","Geometri",2,"En rektangel är 8 cm lång och 5 cm bred. Vad är arean?",["13 cm²","26 cm²","40 cm²","80 cm²"],2,"Area = längd × bredd = 8 × 5."],
["Matematik","Bråk",2,"Vilket bråk är lika med 0,75?",["1/4","2/3","3/4","4/5"],2,"3 ÷ 4 = 0,75."],
["Matematik","Sannolikhet",3,"En vanlig tärning kastas. Sannolikheten att få ett jämnt tal är:",["1/6","1/3","1/2","2/3"],2,"Tre av sex möjliga utfall är jämna: 2, 4, 6."],
["Svenska","Grammatik",1,"Vilket ord är ett verb?",["springa","snabb","bord","hon"],0,"Verb beskriver handlingar eller tillstånd."],
["Svenska","Källkritik",2,"Vilken fråga är viktigast när du granskar en källa?",["Är sidan snygg?","Vem står bakom uppgiften?","Finns många bilder?","Är texten lång?"],1,"Avsändare, syfte, aktualitet och beroende är centrala källkritiska frågor."],
["Svenska","Texttyper",2,"Vad är huvudsyftet med en argumenterande text?",["Beskriva en plats","Övertyga om en ståndpunkt","Återberätta en saga","Lista fakta utan slutsats"],1,"Argumenterande text driver en tes med argument."],
["Svenska","Språkbruk",3,"Vilken formulering passar bäst i en formell text?",["Det här är fett bra.","Detta innebär en tydlig förbättring.","Det där blev najs.","Typ bättre på allt."],1,"Formellt språk undviker slang och vaga uttryck."],
["Engelska","Vocabulary",1,"What does 'although' mean?",["därför","fastän","alltid","eftersom"],1,"Although betyder ungefär fastän eller trots att."],
["Engelska","Grammar",1,"Choose the correct sentence.",["She go to school.","She goes to school.","She going to school.","She gone to school."],1,"In present simple, he/she/it normally takes -s."],
["Engelska","Grammar",2,"Yesterday, we ___ a film.",["watch","watched","watches","watching"],1,"Yesterday signals past tense."],
["Engelska","Communication",2,"'I couldn't agree more' means:",["I strongly disagree","I do not understand","I strongly agree","I want to leave"],2,"It is an idiom for very strong agreement."],
["Engelska","Writing",3,"Which connector best shows contrast?",["because","however","therefore","also"],1,"However introduces contrast."],
["Tyska","Glosor",1,"Vad betyder 'Guten Morgen'?",["God kväll","God morgon","God natt","Hej då"],1,"Guten Morgen betyder god morgon."],
["Tyska","Glosor",1,"Vad betyder 'Schule'?",["skola","syster","sko","stad"],0,"die Schule = skolan."],
["Tyska","Verb",2,"Vilken form är rätt? 'Ich ___ in Motala.'",["wohne","wohnst","wohnt","wohnen"],0,"Med ich används wohnen → ich wohne."],
["Tyska","Frågor",2,"Vad betyder 'Wie heißt du?'",["Var bor du?","Hur mår du?","Vad heter du?","Hur gammal är du?"],2,"Wie heißt du? betyder Vad heter du?"],
["Tyska","Ordföljd",3,"Vilken mening har korrekt ordföljd?",["Heute ich spiele Fußball.","Heute spiele ich Fußball.","Ich heute Fußball spiele.","Fußball heute ich spiele."],1,"Det böjda verbet står normalt på plats 2 i tysk huvudsats."],
["Biologi","Ekologi",1,"Vad är en producent i ett ekosystem?",["Ett rovdjur","En organism som producerar organiskt material, ofta genom fotosyntes","En nedbrytare","En parasit"],1,"Växter och alger är vanliga producenter."],
["Biologi","Kroppen",2,"Vilket organ pumpar blod genom kroppen?",["Lungan","Levern","Hjärtat","Njuren"],2,"Hjärtats sammandragningar driver blodcirkulationen."],
["Biologi","Evolution",2,"Vad menas med naturligt urval?",["Alla överlever lika bra","Gynnsamma ärftliga egenskaper kan bli vanligare över generationer","Arter förändras med vilja","Miljön påverkar aldrig arter"],1,"Skillnader i överlevnad och fortplantning påverkar vilka egenskaper som blir vanligare."],
["Biologi","Genetik",3,"Var finns huvuddelen av människans DNA?",["Cellmembranet","Cellkärnan","Blodplasman","Magsäcken"],1,"Huvuddelen av DNA finns i cellkärnans kromosomer."],
["Fysik","Energi",1,"Vilken energiform har ett föremål som rör sig?",["Rörelseenergi","Kemisk energi","Kärnenergi","Ingen energi"],0,"Rörelseenergi hör samman med ett föremåls rörelse."],
["Fysik","Elektricitet",2,"Vad krävs för att ström ska kunna gå i en enkel krets?",["En bruten krets","En sluten krets med spänningskälla","Bara en lampa","En öppen strömbrytare"],1,"Kretsen behöver vara sluten och ha en spänningsskillnad."],
["Fysik","Krafter",2,"Vilken enhet används för kraft?",["Watt","Volt","Newton","Joule"],2,"Kraft mäts i newton, N."],
["Fysik","Hastighet",3,"30 km på 2 timmar ger medelhastigheten:",["10 km/h","15 km/h","20 km/h","60 km/h"],1,"Hastighet = sträcka ÷ tid = 30 ÷ 2."],
["Kemi","Materia",1,"Vad består vattenmolekyler av?",["Bara syre","Väte och syre","Kol och syre","Kväve och väte"],1,"Vatten är H₂O."],
["Kemi","Atomer",2,"Vilken partikel har negativ laddning?",["Proton","Neutron","Elektron","Atomkärna"],2,"Elektronen har negativ laddning."],
["Kemi","Separation",2,"Vilken metod passar för att skilja sand från vatten?",["Filtrering","Förbränning","Elektrolys","Magnetism"],0,"Sand fastnar i filtret medan vatten passerar."],
["Kemi","Reaktioner",3,"Vilket kan tyda på att en kemisk reaktion skett?",["Ämnet flyttas","Nya ämnen bildas och temperaturen kan ändras","Ämnet delas i bitar","Man rör om"],1,"En kemisk reaktion innebär att nya ämnen bildas."],
["Historia","Källor",1,"Vad kan vara en historisk källa?",["Bara böcker","Texter, föremål, bilder, byggnader och vittnesmål","Bara arkeologiska fynd","Bara fotografier"],1,"Många typer av spår kan ge information om det förflutna."],
["Historia","Orsak och konsekvens",2,"Vad betyder konsekvens i historia?",["En källa","En följd av något som hänt","En person","En tidsperiod"],1,"Konsekvens betyder följd eller resultat."],
["Historia","Källor",3,"Varför kan två oberoende källor vara bättre än en?",["De är alltid sanna","Uppgifter kan jämföras","De är längre","De är äldre"],1,"Oberoende källor kan bekräfta eller motsäga varandra."],
["Geografi","Kartor",1,"Vad visar en kartas skala?",["Vädret","Förhållandet mellan kartavstånd och verkligt avstånd","Befolkningen","Bara höjden"],1,"Skalan visar hur mycket verkligheten förminskats."],
["Geografi","Klimat",2,"Vad skiljer väder från klimat?",["Inget","Väder är kortsiktigt, klimat beskriver längre tidsmönster","Klimat är bara temperatur","Väder är bara regn"],1,"Klimat beskriver typiska förhållanden över längre tid."],
["Geografi","Hållbarhet",3,"Vilken är en förnybar energikälla?",["Kol","Olja","Vind","Naturgas"],2,"Vindenergi förnyas genom naturliga processer."],
["Samhällskunskap","Demokrati",1,"Vad innebär allmän rösträtt?",["Bara politiker röstar","Rösträtten är inte knuten till till exempel inkomst eller klass","Alla röstar på samma parti","Bara personer med arbete röstar"],1,"Allmän rösträtt bygger på bred politisk jämlikhet bland röstberättigade."],
["Samhällskunskap","Ekonomi",2,"Vad är en budget?",["En plan för inkomster och utgifter","En skatt","Ett lån","En lön"],0,"En budget planerar ekonomins inkomster och utgifter."],
["Samhällskunskap","Medier",2,"Varför skilja nyheter från reklam?",["Reklam är alltid längre","De har ofta olika syften och avsändare","Nyheter saknar bilder","Reklam finns inte på internet"],1,"Syfte och avsändare påverkar hur information bör granskas."],
["Samhällskunskap","Lag och rätt",3,"Vad är en lag?",["Ett frivilligt råd","En bindande regel beslutad enligt lagstiftningsprocessen","En personlig åsikt","En skolregel"],1,"Lagar är bindande rättsregler."],
["Religion","Etik",1,"Vad är etik?",["Läran om kartor","Resonemang om rätt och fel","En byggnad","Ett ekonomiskt system"],1,"Etik behandlar frågor om rätt, fel, ansvar och värden."],
["Religion","Religioner",2,"Vad är en religiös högtid?",["En vanlig rutin","En särskilt betydelsefull dag eller period","En lag","En skolform"],1,"Högtider markerar ofta viktiga berättelser eller händelser."],
["Religion","Livsåskådning",3,"Vad menas med livsåskådning?",["Bara medlemskap i religion","Ett sätt att tolka livet, människan och världen","En lag","Ett experiment"],1,"Begreppet är bredare än religion och beskriver grundläggande synsätt på livet."],
["Teknik","System",1,"Vilket är ett tekniskt system?",["Ett elnät","En sten","Ett träd","Ett moln"],0,"Elnätet består av många samverkande tekniska delar."],
["Teknik","Konstruktion",2,"Varför används trianglar ofta i fackverk?",["De är alltid billigast","De ger geometrisk stabilitet","De väger alltid mest","De kräver inga fogar"],1,"Trianglar är svåra att deformera utan att sidornas längder ändras."],
["Teknik","Utveckling",3,"Vilken ordning passar ett tekniskt utvecklingsarbete?",["Behov → idé → konstruktion → test → förbättring","Bygg direkt utan krav","Undvik test","Dokumentera aldrig"],0,"Iterativ utveckling bygger på behov, lösning, test och förbättring."],
["Idrott & hälsa","Träning",1,"Vad är uppvärmningens viktigaste funktion inför aktivitet?",["Att göra dig trött","Att gradvis förbereda kroppen för belastning","Att ersätta träningen","Att sänka pulsen"],1,"Uppvärmning ökar gradvis cirkulation, temperatur och beredskap."],
["Idrott & hälsa","Hälsa",2,"Vilken faktor bidrar normalt till återhämtning?",["Tillräcklig sömn","Så lite sömn som möjligt","Ingen vätska efter aktivitet","Träning utan vila varje dag"],0,"Sömn är central för återhämtning."],
["Hem- & konsumentkunskap","Privatekonomi",1,"Vad betyder jämförpris?",["Priset på hela butiken","Pris per gemensam mängdenhet, till exempel kr/kg","Priset efter skatt","Det dyraste alternativet"],1,"Jämförpris gör varor med olika förpackningsstorlek lättare att jämföra."],
["Hem- & konsumentkunskap","Matlagning",2,"Varför är god handhygien viktig vid matlagning?",["För smaken","För att minska risken att sprida mikroorganismer","För att maten kokar snabbare","För att knivar blir vassare"],1,"Handhygien minskar risken för smittspridning och matförgiftning."],
["Bild","Komposition",1,"Vad betyder komposition i en bild?",["Hur bildens delar är placerade och samspelar","Vilket papper som används","Bara bildens färg","Bildens filnamn"],0,"Komposition handlar om hur visuella element organiseras."],
["Bild","Bildanalys",2,"Vilken fråga passar vid bildanalys?",["Vem är avsändaren och vilket budskap kan bilden ha?","Hur tung är bilden?","Vilken skärm används?","Hur snabbt laddar den?"],0,"Avsändare, syfte, uttryck och sammanhang är centrala i bildanalys."],
["Musik","Begrepp",1,"Vad beskriver tempo i musik?",["Hur snabbt musiken går","Hur stark tonen är","Vilket instrument som spelar","Textens längd"],0,"Tempo beskriver musikens hastighet."],
["Musik","Begrepp",2,"Vad betyder dynamik i musik?",["Skillnader i ljudstyrka och uttryck","Antal instrument","Låtens språk","Endast rytmens hastighet"],0,"Dynamik handlar bland annat om starkt och svagt samt förändringar i ljudstyrka."]
].map((x,i)=>({id:"b"+i,s:x[0],t:x[1],l:x[2],q:x[3],a:x[4],c:x[5],e:x[6]}));

const WORDS={
de:[
["Hallo","hej"],["Guten Morgen","god morgon"],["Danke","tack"],["Bitte","varsågod / snälla"],["die Schule","skolan"],["der Freund","vännen"],["die Familie","familjen"],["das Haus","huset"],["wohnen","bo"],["lernen","lära sig / studera"],["spielen","spela / leka"],["essen","äta"],["trinken","dricka"],["heute","idag"],["morgen","imorgon"],["gestern","igår"],["Wie geht's?","Hur mår du?"],["Ich heiße...","Jag heter..."],["Wo wohnst du?","Var bor du?"],["Wie alt bist du?","Hur gammal är du?"]
],
en:[
["although","fastän / trots att"],["however","dock / emellertid"],["therefore","därför"],["experience","erfarenhet / upplevelse"],["environment","miljö"],["opinion","åsikt"],["future","framtid"],["improve","förbättra"],["explain","förklara"],["compare","jämföra"],["evidence","bevis / belägg"],["source","källa"],["probably","troligen"],["actually","faktiskt"],["instead","i stället"]
]};


// Keep the recovered bank and add the exercises from the first published version.
const extraTopics={sv:['Grammatik','Grammatik','Källkritik','Grammatik','Språkbruk'],ma:['Procent','Tal','Algebra','Tal','Geometri'],en:['Grammar','Grammar','Vocabulary','Grammar','Grammar'],de:['Glosor','Kommunikation','Glosor','Ordföljd','Verb'],bi:['Ekologi','Genetik','Ekologi','Ekologi','Ekologi'],fy:['Krafter','Hastighet','Ljud och ljus','Energi','Energi'],ke:['Atomer','Materia','Materia','Materia','Atomer'],ge:['Klimat','Kartor','Naturresurser','Befolkning','Kartor'],hi:['Källor','Förändring','Källor','Orsak och konsekvens','Förändring'],sa:['Demokrati','Demokrati','Medier','Ekonomi','Medier'],re:['Etik','Religioner','Religioner','Religioner','Livsåskådning'],te:['Konstruktion','Utveckling','Utveckling','System','Utveckling']};
for(const subject of additionalSubjects){
 for(const [index,q] of subject.questions.entries()){
  BANK.push({id:'extra-'+q.id,s:subject.name,t:extraTopics[subject.id][index],l:2,q:q.prompt,
    a:q.options||[],c:q.answer,e:q.explanation,h:q.hint,kind:q.type,source:q});
 }
}
export {SUBJECTS,BANK,WORDS};
BANK.push(...extraContent);
