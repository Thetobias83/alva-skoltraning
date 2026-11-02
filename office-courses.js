// Egna övningar med progression. Utför uppgifterna i skolans tillåtna Office-version.
export const OFFICE_COURSES=[
 {id:'office-word',category:'office',subject:'Word',icon:'W',title:'Word – från första text till rapport',intro:'Nio steg: skriv och spara, bygg tydliga dokument och skapa en rapport med struktur och källor.',units:[]},
 {id:'office-excel',category:'office',subject:'Excel',icon:'X',title:'Excel – från celler till analys',intro:'Nio steg: tabeller och formler, diagram och villkor, sedan uppslag och pivottabeller.',units:[]},
 {id:'office-powerpoint',category:'office',subject:'PowerPoint',icon:'P',title:'PowerPoint – från bilder till tydlig presentation',intro:'Nio steg: skapa ett bildspel, förklara med bild och data och bygg en sammanhållen presentation.',units:[]}
];
export const OFFICE_LEVELS={1:'Grund',2:'Fortsättning',3:'Fördjupning'};
export const OFFICE_DATA=[
 ['Vara','Kategori','Antal','Styckpris'],
 ['Pennor','Skolmaterial',3,12],['Block','Skolmaterial',2,25],
 ['Äpplen','Frukt',4,6],['Päron','Frukt',3,8],
 ['Mappar','Skolmaterial',2,18],['Bananer','Frukt',5,5]
];
export function officeCsv(){return '\uFEFF'+OFFICE_DATA.map(row=>row.join(';')).join('\r\n');}
export function officeBudgetTotal(){return OFFICE_DATA.slice(1).reduce((sum,row)=>sum+row[2]*row[3],0);}
function officeUnit(course,id,level,title,text,steps,example,task,checks,question,correct,wrong,explanation,formula){
 const c=OFFICE_COURSES.find(c=>c.subject===course),options=[correct,...wrong],answer=c.units.length%3;
 [options[0],options[answer]]=[options[answer],options[0]];
 c.units.push({id,level,title:`${c.units.length+1}. ${title}`,text,steps,example,task,checks,question,options,answer,explanation,formula});
}
officeUnit('PowerPoint','first',1,'Skapa ditt första bildspel',
 'PowerPoint bygger en presentation av bilder, även kallade slides. Varje bild behöver en uppgift: väcka en fråga, förklara en idé eller visa ett resultat. Använd en inbyggd layout i stället för att placera all text på måfå. Spara presentationen och kontrollera att den går att öppna igen.',
 ['Skapa en tom presentation.','Välj ett enkelt tema och en titelbild.','Lägg till tre bilder med titel och innehåll.','Spara som .pptx och öppna filen igen.'],
 'Ett första bildspel om romartiden kan ha frågan ”Hur fick Rom rent vatten?”, en förklaring, ett exempel och en avslutning.',
 'Gör en presentation med fyra bilder om ett litet skolämnesområde. Skriv en huvudidé per bild.',
 ['Filnamn och plats är tydliga.','Varje bild har en egen uppgift.'],
 'Vad hjälper dig planera ett tydligt bildspel?','En huvudidé och ett syfte per bild.',['Så många bilder som möjligt utan ordning.','Att lägga hela rapporten på första bilden.'],'Bildspelet ska hjälpa åhöraren följa en förklaring.');
officeUnit('PowerPoint','readable',1,'Kort text och läsbar design',
 'En presentationsbild ska kunna läsas medan någon lyssnar. Skriv stödord i stället för hela talet. Använd tillräckligt stor text och tydlig kontrast. Ge bilderna konsekventa placeringar och lämna luft. Kontrollera på avstånd; text som fungerar på din egen skärm kan vara svår att se i ett klassrum.',
 ['Välj en bild med för mycket text.','Behåll huvudidén och några stödord.','Använd tydlig kontrast och pröva större text.','Visa bilden i bildspelsläge och läs den på avstånd.'],
 'I stället för ett långt stycke om akvedukter kan bilden säga ”Vatten → stad → bad och fontäner”. Sambandet förklarar du muntligt.',
 'Bearbeta två bilder så att innehållet går att uppfatta snabbt. Behåll den längre förklaringen i anteckningar.',
 ['Texten går att läsa på avstånd.','Jag behöver inte läsa upp en lång text från bilden.'],
 'Var bör det längre talstödet oftast ligga?','I talaranteckningar snarare än som ett långt textblock på bilden.',['I pytteliten text längst ned.','I slumpmässiga färger ovanpå bilden.'],'Bilden och det muntliga framförandet har olika uppgifter.');
officeUnit('PowerPoint','visuals',1,'Bild, källa och alternativtext',
 'Välj en bild som hjälper dig förklara. Den ska gå att använda med rätt tillstånd och ha källa där det behövs. Beskär för att visa det viktiga utan att förvränga betydelsen. Alternativtext beskriver vad en bild bidrar med. Förklara också viktiga bilder muntligt så att alla kan följa resonemanget.',
 ['Infoga en egen eller tillåten bild.','Beskär den och behåll rimliga proportioner.','Ange bildkälla och beskriv bildens betydelse.','Kontrollera att bild och text inte täcker varandra.'],
 'En enkel egen skiss av hur en akvedukt leder vatten kan förklara mer än ett vackert men otydligt foto.',
 'Lägg in en bild med källa och alternativtext. Skriv vad du ska säga när bilden visas.',
 ['Jag kan förklara varför bilden behövs.','Källa och alternativtext är genomtänkta.'],
 'Vilken bild är bäst för en förklaring?','En som tydligt visar det samband du vill berätta om.',['Den som har störst filstorlek.','En slumpmässig bild utan anknytning.'],'Bildvalet ska stödja budskapet och ta hänsyn till rättigheter och tillgänglighet.');
officeUnit('PowerPoint','structure',2,'Planera berättelsen före effekterna',
 'Ett bra bildspel har en röd tråd: en fråga, en förklaring och en slutsats. Gör en enkel storyboard innan du lägger tid på detaljer. Varje bild ska föra tanken vidare. En muntlig övergång förklarar varför nästa bild hör ihop med den förra.',
 ['Skriv huvudfrågan och slutsatsen på papper.','Planera en bild för varje del av förklaringen.','Ordna bilderna så att begrepp förklaras innan de används.','Skriv en kort övergång mellan två bilder.'],
 'Fråga: Hur kunde Rom styra ett stort rike? Förklara vägar, administration och militär och avsluta med både möjligheter och svårigheter.',
 'Ordna om ditt bildspel och ta bort en bild som inte hjälper huvudfrågan. Motivera valet.',
 ['Publiken får veta vilken fråga som besvaras.','Slutsatsen följer av förklaringen.'],
 'Vad är en röd tråd?','Ett begripligt samband mellan presentationens delar.',['Att varje ord skrivs med röd färg.','Att alla bilder har en animation.'],'Delarna ska bilda en förklaring som åhöraren kan följa.');
officeUnit('PowerPoint','data',2,'Visa data utan att vilseleda',
 'Ett diagram kan göra en jämförelse tydlig. Välj en fråga och visa bara de värden som behövs. Ange enheter och källa, och förklara vad siffrorna mäter. Undvik 3D-effekter som försvårar avläsning. Du kan föra in ett diagram från Excel, men kontrollera om det är en bild, inbäddat innehåll eller en länk som behöver andra filer.',
 ['Välj en enkel tabell från Excel-övningen.','Infoga eller kopiera ett läsbart diagram.','Skriv vad diagrammet visar och att övningsdata är påhittade.','Kontrollera slutfilen så att diagrammet fungerar även där.'],
 'Kategoriernas kostnader i originalövningen är Skolmaterial 122 och Frukt 73 kronor. De säger inget om en riktig klass inköp.',
 'Gör en bild med diagram, en huvudslutsats och en begränsning. Testa att förklara den på 30 sekunder.',
 ['Diagrammets skala, värden och enhet stämmer.','Jag skiljer data från min tolkning.'],
 'Vad behöver publiken veta för att tolka ett diagram?','Vad som mäts, enhet och var uppgifterna kommer från.',['Bara vilken färg staplarna har.','Hur många effekter filen innehåller.'],'Ett tydligt diagram behöver sammanhang, inte bara form.');
officeUnit('PowerPoint','present',2,'Talaranteckningar och repetition',
 'Talaranteckningar hjälper dig komma ihåg exempel och övergångar utan att fylla bilden med text. Föredragshållarvyn kan visa anteckningar och nästa bild för dig när visningsläget stöder det. Öva ändå utan att lita på att en extra skärm finns. Repetition visar var en förklaring är för lång eller otydlig.',
 ['Skriv korta talaranteckningar till varje bild.','Starta bildspelet och öva med tidtagning.','Prova föredragshållarvy om din version och skärm stöder den.','Be en lyssnare återge huvudidén och ge konkret respons.'],
 'En anteckning kan säga ”förklara vattenflödet med skissen – ge ett exempel” i stället för ett helt manus.',
 'Håll presentationen på två eller tre minuter. Kortare är ett övningsmål; anpassa efter lärarens uppgift.',
 ['Jag håller en begriplig ordning och rimlig tid.','Åhöraren kan återge huvudfrågan och slutsatsen.'],
 'Vad hjälper repetition dig upptäcka?','Otydliga övergångar och delar som tar för lång tid.',['Att alla publiker tycker exakt lika.','Att källkontroll inte längre behövs.'],'Praktisk övning ger information som du inte ser i redigeringsläget.');
officeUnit('PowerPoint','master',3,'Teman, bakgrund och gemensam layout',
 'En gemensam layout gör ett längre bildspel enhetligt. Teman styr bland annat färger och teckensnitt. I skrivbordsprogram kan bildbakgrund och layoutmallar styra återkommande delar. Ändra en gemensam mall i en kopia och kontrollera vilka bilder som påverkas. Webbversionens möjligheter kan vara mer begränsade.',
 ['Spara en kopia att öva i.','Kontrollera att bilderna använder inbyggda layouter.','Om funktionen finns: ändra ett gemensamt element i bildbakgrunden.','Granska hela bildspelet och återställ sådant som inte blev bra.'],
 'En återkommande placering för rubrik och sidnummer är lättare att underhålla via en gemensam layout än genom många handflyttade textrutor.',
 'Skapa en enhetlig stil på minst fem bilder. Om bildbakgrund saknas, använd samma tema och lämpliga inbyggda layouter.',
 ['Rubriker och återkommande element ligger konsekvent.','Gemensamma ändringar har inte skadat enskilda bilder.'],
 'Varför använda en gemensam layout?','För att återkommande utformning ska vara lätt att hålla enhetlig.',['För att alla bilder måste ha samma innehåll.','För att slippa kontrollera bilderna efteråt.'],'En layout ger struktur men innehållet behöver fortfarande anpassas och granskas.');
officeUnit('PowerPoint','motion',3,'Animering, övergångar och läsordning',
 'En övergång sker mellan bilder. En animering gäller ett objekt på en bild. Använd rörelse bara när den hjälper förklaringen, till exempel för att visa ett steg i taget. För många effekter kan göra det svårare att följa. Kontrollera också läsordning och tillgänglighet; visuell placering berättar inte alltid i vilken ordning hjälpmedel läser innehållet.',
 ['Välj ett samband som behöver förklaras i steg.','Lägg till en enkel animering med tydlig ordning.','Kontrollera att viktig information inte försvinner för fort.','Granska läsordning och tillgänglighetskontroll där verktygen finns.'],
 'Tre pilar kan visas i ordning för att förklara en orsakskedja. Snurrande rubriker tillför däremot inte automatiskt någon förklaring.',
 'Skapa en stegvis förklaring på en bild. Testa den utan effekter också och välj den tydligaste versionen.',
 ['Effekten har ett förklarande syfte.','Innehållet går att följa även om effekten inte spelas.'],
 'Vad skiljer en övergång från en animering?','Övergången sker mellan bilder och animeringen gäller objekt på en bild.',['De betyder alltid exakt samma sak.','En animering är alltid en videofil.'],'Begreppen avser olika delar av bildspelet.');
officeUnit('PowerPoint','project',3,'Slutprojekt: rapport, analys och presentation',
 'Nu samlar du det du lärt dig i ett gemensamt projekt. Word-rapporten ger bakgrund, Excel visar kontrollerbara siffror och PowerPoint förklarar slutsatsen för en publik. En presentation är en bearbetning av materialet, inte bara kopierade rapportsidor. Kontrollera slutfilen i det visningsläge du ska använda.',
 ['Välj en fråga och planera fem till sju bilder.','Använd en källa eller rapport och ett kontrollerat diagram.','Skriv talarstöd, granska tillgänglighet och repetera.','Spara presentationen och en PDF-kopia och kontrollera båda.'],
 'Ett projekt kan vara en påhittad klassutställning: Word beskriver ämnet, Excel planerar budgeten och PowerPoint förklarar utställningens idé och kostnad.',
 'Bygg slutprojektet och håll en kort presentation. Be om respons på tydlighet, källor och vad diagrammet faktiskt visar. Förbättra en del efter responsen.',
 ['Filerna har tydliga namn och fungerar.','Jag kan förklara slutsatsen och svara på en följdfråga.'],
 'Varför räcker det inte att kopiera hela rapporten till presentationsbilder?','Publiken behöver ett urval som går att följa medan du berättar.',['PowerPoint tillåter aldrig vanlig text.','En rapport får inte innehålla källor.'],'Välj, förklara och anpassa innehållet till muntlig presentation.');
officeUnit('Excel','cells',1,'Celler, rader och rätt sorts värden',
 'En arbetsbok innehåller blad med celler. Kolumner har bokstäver och rader har nummer: B2 är cellen där kolumn B möter rad 2. Skriv en uppgift i varje cell. Rubriker förklarar vad kolumnerna betyder. Tal ska kunna räknas med; skriv därför 12 i en priscell och använd talformat för kronor i stället för att skriva ”tolv kronor”.',
 ['Skapa en tom arbetsbok.','Öppna övningsfilen nedan eller skriv av de fyra kolumnerna.','Kontrollera att Antal och Styckpris innehåller tal.','Spara som en Excel-arbetsbok, .xlsx, innan du fortsätter.'],
 'I övningsfilen är C2 antalet pennor: 3. D2 är styckpriset: 12. Kolumnerna har olika betydelser.',
 'Bygg eller importera övningstabellen. Om CSV-filen hamnar i en kolumn, använd import av text/CSV och välj semikolon som avgränsare.',
 ['Jag kan peka ut C2 och D2.','Tabellen har en rubrikrad och sex datarader.'],
 'Vilken cell ligger i kolumn C på rad 2?','C2',['2C','B3'],'Celladressen skrivs med kolumnens bokstav före radnumret.');
officeUnit('Excel','formula',1,'Räkna med en formel',
 'En formel börjar med likhetstecken. I stället för att skriva in ett färdigt svar kan du hänvisa till celler. Då räknas resultatet om när värdena ändras. Multiplikation skrivs med stjärna och ett område skrivs med kolon. Formlerna här använder svenska funktionsnamn; andra språkinställningar kan använda exempelvis SUM i stället för SUMMA.',
 ['Skriv Summa i E1.','Skriv =C2*D2 i E2 och tryck Retur.','Fyll ned samma slags formel till E7.','Skriv =SUMMA(E2:E7) i E8 och jämför med facit.'],
 'Tre pennor för 12 kronor styck ger 36 kronor. Hela övningstabellens summa blir 195 kronor.',
 'Beräkna varje rad och totalsumman. Ändra ett antal och kontrollera att både raden och totalen ändras; återställ sedan originalvärdet.',
 ['E2 är 36 med originaldata.','E8 är 195 med originaldata.'],
 'Vilken formel räknar antal i C2 gånger pris i D2?','=C2*D2',['=C2+D2','=C2:D2'],'Stjärnan betyder multiplikation. Cellreferenserna gör beräkningen ändringsbar.','=C2*D2\n=SUMMA(E2:E7)');
officeUnit('Excel','table',1,'Tabell, sortering och filter',
 'En riktig Excel-tabell samlar data med kolumnrubriker och kan underlätta sortering, filter och utökning. Sortera hela tabellen så att varor, antal och priser fortsätter höra ihop. Ett filter döljer tillfälligt rader som inte passar urvalet; det raderar inte uppgifterna.',
 ['Markera rubriker och alla datarader.','Skapa en tabell och ange att den har rubriker.','Sortera efter Vara och kontrollera att hela rader följer med.','Filtrera Kategori till Frukt och ta sedan bort filtret.'],
 'När Äpplen flyttas vid sortering ska också antalet 4 och styckpriset 6 flyttas med samma rad.',
 'Sortera och filtrera din övningstabell. Beskriv skillnaden mellan att dölja en rad med filter och att ta bort den.',
 ['Varje vara har kvar rätt antal och pris.','Alla sex datarader syns när filtret är borttaget.'],
 'Vad gör ett filter?','Visar ett urval utan att radera övriga rader.',['Tar alltid bort de rader som inte syns.','Gör alla priser lika stora.'],'Filtret styr vad som visas, inte vilka poster som finns kvar.');
officeUnit('Excel','references',2,'Relativa och absoluta referenser',
 'En relativ referens som C2 ändras när formeln kopieras till en ny rad. En absolut referens som $H$2 ligger kvar på samma cell vid kopiering. Det är användbart när alla rader ska använda samma procentsats. Sätt inte dollartecken överallt: välj vad som ska följa med och vad som ska vara fast.',
 ['Skriv Rabatt i H1 och 10 % i H2.','Skriv Efter rabatt i F1.','Skriv =E2*(1-$H$2) i F2 och fyll ned till F7.','Kontrollera både första och sista formeln.'],
 'Pennornas 36 kronor blir 32,40 efter 10 % rabatt. Hela tabellens 195 kronor blir 175,50.',
 'Ändra rabatten till 20 %. Förklara varför samma rabattcell ska användas i alla rader. Återställ till 10 %.',
 ['H2 är låst i varje kopierad formel.','Radhänvisningen till E ändras för varje rad.'],
 'Vilken referens håller både kolumn H och rad 2 fasta vid kopiering?','$H$2',['H2','H$3'],'Dollartecken före både kolumn och rad låser båda delarna.','=E2*(1-$H$2)');
officeUnit('Excel','if',2,'Villkor med OM och tydlig återkoppling',
 'Funktionen OM väljer ett resultat när ett villkor är sant och ett annat när det är falskt. Det hjälper dig märka upp data. I svenska exempel skiljs argument ofta med semikolon och text skrivs inom citattecken. Men separatorn kan bero på regioninställningar. Talformat visar belopp eller procent; det ändrar inte i sig den bakomliggande beräkningen.',
 ['Använd originalkolumnen Summa i E.','Skriv Bedömning i G1.','Skriv =OM(E2>=30;"Minst 30";"Under 30") i G2.','Fyll ned och kontrollera en rad på varje sida om gränsen.'],
 '36 ger ”Minst 30”. 24 ger ”Under 30”. Även exakt 30 skulle ge ”Minst 30” eftersom villkoret innehåller lika med.',
 'Prova ett värde under, exakt på och över gränsen. Förklara varför det räcker med två svar trots tre testfall.',
 ['Gränsvärdet testas.','Jag kan förklara vad sant och falskt ger.'],
 'Vad ger villkoret E2>=30 när E2 är exakt 30?','Sant.',['Falskt.','Det går aldrig att jämföra lika stora tal.'],'Tecknen >= betyder större än eller lika med.','=OM(E2>=30;"Minst 30";"Under 30")');
officeUnit('Excel','chart',2,'Diagram som svarar på en fråga',
 'Välj diagram efter vad du vill jämföra. Ett stapeldiagram kan visa kostnad per vara, medan ett linjediagram ofta passar utveckling över tid. Ta med rätt data och undvik att räkna med totalsumman som om den vore en extra vara. En tydlig rubrik, enheter och läsbara axlar är viktigare än effekter.',
 ['Välj varunamn och radsummor utan totalraden.','Infoga ett stapel- eller kolumndiagram.','Skriv en titel som berättar vad som jämförs och ange kronor.','Jämför staplarna med tabellens värden.'],
 '”Kostnad per vara, kronor” berättar mer än rubriken ”Diagram 1”. Block ska ha högst kostnad i originaldata: 50 kronor.',
 'Gör ett diagram och skriv två meningar om vad det visar. Nämn något som det inte säger, till exempel varför varorna köptes.',
 ['Diagrammet har rätt värden och inga dubbla totaler.','Rubrik och enheter gör det begripligt utan muntlig hjälp.'],
 'Varför bör totalraden inte visas som ännu en vara?','Den innehåller redan de andra varornas kostnader.',['Den är alltid mindre än varje vara.','Diagram kan inte innehålla text.'],'Annars blandas delar och helhet och jämförelsen blir missvisande.');
officeUnit('Excel','lookup',3,'Slå upp en uppgift med XLETAUPP',
 'Ett uppslag söker en nyckel i en kolumn och returnerar en uppgift från en annan. Nyckeln bör identifiera rätt post. XLETAUPP heter XLOOKUP på engelska och finns i bland annat nyare Microsoft 365-versioner, men inte Excel 2016 eller 2019. Om din version saknar funktionen kan du först göra samma sökning manuellt och läsa om andra uppslagsmetoder hos Microsoft.',
 ['Skriv en vara, till exempel Pennor, i J2.','Använd A2:A7 som sökområde och D2:D7 som resultat för styckpris.','Skriv formeln i K2 och kontrollera mot tabellen.','Prova också ett namn som inte finns.'],
 'Pennor ska ge 12. Ett okänt namn ger texten ”Saknas” i exemplet. Flera lika nycklar kräver att du bestämmer vilken post som avses.',
 'Slå upp pris för två varor och prova ett saknat värde. Ändra en varas pris och kontrollera att resultatet följer med.',
 ['Sök- och resultatområde hör ihop rad för rad.','Saknat värde hanteras tydligt.'],
 'Vad är viktigt för ett tillförlitligt uppslag?','Att söknyckeln och områdena pekar på rätt poster.',['Att alla kolumner har samma färg.','Att sortera en enda kolumn utan resten av tabellen.'],'Uppslaget behöver korrekt struktur och en begriplig nyckel.','=XLETAUPP(J2;A2:A7;D2:D7;"Saknas")');
officeUnit('Excel','pivot',3,'Sammanfatta med pivottabell',
 'En pivottabell grupperar och sammanfattar data utan att du skriver en separat formel för varje grupp. Först behövs en ren tabell med en rubrik per kolumn och en post per rad. Välj om värden ska summeras eller räknas; om tal har importerats som text kan du få en räkning när du väntar dig en summa. Uppdatera sammanställningen när källdata ändras.',
 ['Utgå från tabellen med Summa per rad.','Infoga en pivottabell på ett nytt blad där funktionen finns.','Lägg Kategori som rader och Summa som värden med summering.','Kontrollera delsummer och uppdatera efter en ändring i källan.'],
 'Med originaldata blir Frukt 73 kronor och Skolmaterial 122 kronor. Totalt är det 195 kronor.',
 'Skapa sammanställningen per kategori. Om verktyget saknas, gruppera på papper och förklara vad en pivottabell automatiserar.',
 ['Värdefältet summerar kostnad, inte antal rader.','Delsummorna stämmer med totalen.'],
 'Pivottabellen visar antal poster men du vill ha total kostnad. Vad kontrollerar du?','Värdefältets beräkning och om kostnaderna är numeriska.',['Att bladet har ett långt namn.','Att alla rader blivit bilder.'],'Summa och antal besvarar olika frågor, och datatypen påverkar resultatet.');
officeUnit('Excel','project',3,'Slutprojekt: en kontrollerbar klassbudget',
 'En bra analys går att granska. Separera indata, beräkningar och presentation. Dokumentera vad priser och antaganden kommer ifrån. Använd påhittade klassdata och inga personuppgifter. Kontrollera både enskilda rader och totalsumman; ett snyggt diagram visar inte att beräkningarna är korrekta.',
 ['Skapa en egen budget med minst sex poster och två kategorier.','Beräkna radsummor och använd en gemensam procentsats med låst referens.','Skapa ett diagram och en sammanställning per kategori.','Ändra ett indatafält och följ hur resultatet påverkas.'],
 'En budget kan ha blad för inköp och ett blad för sammanställning. Skriv vilka uppgifter som är påhittade och vilken fråga diagrammet besvarar.',
 'Bygg budgeten med egna övningstal. Lägg till en OM-formel och, om versionen stöder det, ett uppslag. Förklara två kontroller du gjort.',
 ['Jag kan följa varje resultat tillbaka till indata.','Jag har testat ändrade värden och kontrollerat totalerna.'],
 'Hur visar du bäst att budgeten går att lita på?','Redovisa antaganden och testa beräkningarna mot enkla kontrollfall.',['Dölj alla indata och visa bara en bild.','Välj många färger i stället för att kontrollera tal.'],'Granskbar struktur och kontroller gör analysen tydligare.');
officeUnit('Word','first',1,'Skriv, spara och hitta din fil',
 'Word används för textdokument. Börja med en kort text som du kan hitta igen. Dokumentets namn och lagringsplats är lika viktiga som själva skrivandet. I en webbversion kan filen sparas i molnet; kontrollera var den finns och att ändringarna är sparade. En lokal fil och en delad länk är olika saker.',
 ['Skapa ett tomt dokument i Word.','Skriv en titel och två korta stycken om ett skolämne.','Ge filen namnet Romarriket-ovning och välj en plats du känner igen.','Stäng och öppna filen igen för att kontrollera att texten finns kvar.'],
 'Romarriket-ovning.docx är ett redigerbart dokument. En PDF är i första hand en version för att läsa och dela med bibehållen layout.',
 'Skapa din första fil med en titel och ungefär fem meningar om romartiden. Använd bara påhittade eller offentliga uppgifter.',
 ['Jag kan hitta och öppna filen igen.','Jag kan förklara var filen är sparad.'],
 'Vad bör du kontrollera efter att du sparat en ny fil?','Att du kan hitta och öppna rätt fil igen.',['Att alla ord är fetstilta.','Att filnamnet är så långt som möjligt.'],'Ett tydligt namn och en känd lagringsplats hjälper dig hitta rätt version.');
officeUnit('Word','format',1,'Gör texten lätt att läsa',
 'Formatering ändrar hur texten ser ut. Markera bara den del du vill ändra. Använd stycken för olika tankar och listor för sådant som hör ihop. Radavstånd och styckeavstånd ger luft. Undvik att bygga layout med många mellanslag eller tomrader; sådant flyttar sig lätt när texten ändras.',
 ['Markera titeln och välj en tydlig storlek.','Dela brödtexten i stycken och prova styckeavstånd.','Gör en riktig punktlista med tre romerska uppfinningar.','Använd Ångra för att ta tillbaka en ändring du inte vill behålla.'],
 'En punktlista om vägar, akvedukter och betong är lättare att överblicka än en lång rad med egna streck och mellanslag.',
 'Gör din första text mer lättläst utan att byta teckensnitt i varje mening.',
 ['Styckena går att urskilja.','Listan fungerar även om jag lägger till en punkt.'],
 'Hur skapar du en stabil punktlista?','Med Words funktion för punktlista.',['Med ett stort antal mellanslag.','Genom att lägga varje bokstav på en egen rad.'],'Riktiga listor hanterar indrag och nya punkter åt dig.');
officeUnit('Word','images',1,'Lägg in bild och enkel tabell',
 'En bild ska hjälpa läsaren förstå något. Använd en egen bild eller en bild som du får återanvända. Lägg till en bildtext med källa när det behövs och alternativtext som beskriver bildens betydelse. En tabell passar uppgifter som ska jämföras i rader och kolumner; den ska inte bara vara dekoration.',
 ['Infoga en egen teckning eller tillåten bild.','Ändra storlek från ett hörn så att proportionerna behålls.','Lägg till en kort beskrivande alternativtext och källa.','Skapa en tabell med rubrikerna Uppfinning och Användning.'],
 'En bild av en akvedukt kan visa hur vatten leds. Alternativtexten berättar vad bilden förklarar, inte bara ”bild”.',
 'Lägg en bild och en tabell med tre rader i dokumentet. Kontrollera att texten inte täcker bilden.',
 ['Bilden har ett syfte och är inte utdragen.','Tabellens kolumnrubriker förklarar innehållet.'],
 'Varför skriver du alternativtext?','För att bildens viktiga innehåll också ska kunna förstås utan att se den.',['För att automatiskt få rätt att använda bilden.','För att filen ska bli större.'],'Alternativtext hjälper tillgängligheten men ersätter inte tillstånd eller källangivelse.');
officeUnit('Word','headings',2,'Bygg struktur med rubrikformat',
 'En rubrik är mer än stor eller fet text. Formatmallar som Rubrik 1 och Rubrik 2 visar dokumentets struktur. De kan användas för navigering och en automatisk innehållsförteckning. Välj nivå efter innehållets ordning: ett huvudavsnitt kan ha underavsnitt. Förändra formatmallen om alla rubriker av samma slag ska se annorlunda ut.',
 ['Skapa tre avsnitt: Styre, Vardag och Arv.','Ge huvudavsnitten formatmallen Rubrik 1.','Lägg till ett underavsnitt med Rubrik 2.','Öppna navigeringsfönstret om det finns och kontrollera ordningen.'],
 'Styre är Rubrik 1. Republik och Kejsardöme kan vara två Rubrik 2 under Styre.',
 'Gör en strukturerad rapport med minst två rubriknivåer. Ändra en rubrik och kontrollera navigeringen.',
 ['Rubrikerna har rätt nivå, inte bara större text.','Underavsnitten hör till rätt huvudavsnitt.'],
 'Vad gör en rubrikformatmall som bara fetstil inte gör?','Den markerar en strukturell nivå i dokumentet.',['Den kontrollerar alla historiska fakta.','Den gör dokumentet omöjligt att ändra.'],'Rubriknivåer används av bland annat navigering och innehållsförteckning.');
officeUnit('Word','pages',2,'Sidbrytning, sidnummer och PDF',
 'En sidbrytning startar nästa del på en ny sida utan att du behöver trycka Enter många gånger. Sidhuvud och sidfot kan innehålla återkommande information som sidnummer. Förhandsgranska alltid innan du lämnar in. En PDF kan bevara sidlayout, men du ska behålla Word-filen om du vill kunna redigera vidare.',
 ['Infoga en sidbrytning före ett nytt avsnitt.','Lägg till sidnummer med Words funktion.','Kontrollera marginaler och förhandsgranskning.','Exportera eller ladda ned som PDF och öppna resultatet.'],
 'När du lägger till text före en sidbrytning flyttas innehållet naturligt utan att en stapel tomrader blir kvar.',
 'Skapa en tvåsidig rapport och en PDF-kopia. Kontrollera båda sidorna i PDF-filen.',
 ['Det finns inga tomma sidor som jag inte avsett.','PDF-filen har rätt text, bilder och sidnummer.'],
 'Vad använder du för att säkert börja ett avsnitt på ny sida?','En sidbrytning.',['Tjugo tomrader.','Extra mellanslag framför första ordet.'],'Sidbrytningen beskriver avsikten och är stabilare än tomrader.');
officeUnit('Word','review',2,'Kommentarer och gemensam granskning',
 'En kommentar ställer en fråga eller föreslår en ändring utan att ersätta texten direkt. Spåra ändringar visar redigeringar som kan granskas när funktionen finns. Skilj mellan att ge läsrätt och redigeringsrätt. Gör övningen i din egen kopia; du behöver inte dela dokument eller skicka inbjudningar för att träna.',
 ['Spara en arbetskopia av dokumentet.','Markera en mening och lägg en konkret kommentar.','Om Spåra ändringar finns: slå på det och ändra meningen.','Granska förslaget och acceptera eller avvisa medvetet.'],
 '”Vilken källa stödjer årtalet?” är en tydligare kommentar än ”gör bättre”.',
 'Granska din egen text med två kommentarer och en synlig ändring. Beskriv hur du skulle välja behörighet vid ett riktigt samarbete.',
 ['Kommentarerna går att koppla till rätt text.','Jag skiljer på att läsa, kommentera och redigera.'],
 'Vad är en bra användning av en kommentar?','Ställa en tydlig fråga om en viss del av texten.',['Dölja att fakta är osäkra.','Ge alla på internet redigeringsrätt utan att kontrollera det.'],'Kommentarer hjälper granskning och behörigheter behöver väljas efter situationen.');
officeUnit('Word','contents',3,'Automatisk innehållsförteckning',
 'En längre rapport behöver en karta över innehållet. Words automatiska innehållsförteckning bygger på rubrikformat, inte på att rubriker bara ser stora ut. När du ändrar rubriker eller sidordning behöver du uppdatera förteckningen. Meny och funktioner kan skilja sig mellan webb- och skrivbordsversion.',
 ['Kontrollera Rubrik 1 och Rubrik 2 i hela rapporten.','Infoga en automatisk innehållsförteckning där funktionen finns.','Ändra en rubrik och lägg till ett stycke.','Uppdatera förteckningen och kontrollera både rubriktext och sidnummer.'],
 'Om Vardag byts till Vardagsliv ska även förteckningen visa Vardagsliv efter uppdatering.',
 'Skapa en rapport med minst tre huvudavsnitt och uppdaterbar innehållsförteckning. Om funktionen saknas, planera strukturen och jämför med Microsofts guide.',
 ['Rubrikerna kommer med på rätt nivå.','Förteckningen stämmer efter ändringar.'],
 'Vad behöver en automatisk innehållsförteckning normalt bygga på?','Dokumentets rubrikformat och nivåer.',['Bara textens färger.','Antalet bilder i dokumentet.'],'Rubrikstrukturen gör det möjligt att sammanställa och uppdatera förteckningen.');
officeUnit('Word','sources',3,'Källor, bildtexter och konsekvent rapport',
 'En trovärdig rapport skiljer egna resonemang från uppgifter som kommer från andra. Skriv avsändare, titel och uppgifter som behövs för att hitta källan. Fotnoter och källförteckning kan ordna hänvisningar, men de gör inte en källa sann. Använd samma princip genom hela dokumentet och följ lärarens krav.',
 ['Markera en faktauppgift som behöver källa.','Lägg en tydlig hänvisning enligt lärarens modell.','Samla källorna i en förteckning.','Kontrollera att bilder och citat också har nödvändiga uppgifter.'],
 'En fotnot kan visa var uppgiften om en akvedukt hämtats. Läsaren behöver ändå kunna bedöma källans tillförlitlighet.',
 'Lägg till minst två kontrollerbara källor i din rapport. Granska att varje hänvisning går att koppla till rätt uppgift.',
 ['Jag kan hitta tillbaka till varje källa.','Jag har inte blandat ihop källans uppgift och min slutsats.'],
 'Vad visar en källhänvisning?','Var läsaren kan kontrollera den återgivna uppgiften.',['Att uppgiften automatiskt är sann.','Att inga andra källor behöver jämföras.'],'Källhänvisning gör granskning möjlig men ersätter inte källkritik.');
officeUnit('Word','project',3,'Slutprojekt: en rapport som håller ihop',
 'Nu kombinerar du skrivande, struktur och granskning. En rapport ska vara lätt att följa både på skärmen och som färdig fil. Arbeta med rubriker och sammanhang innan du lägger tid på små utseendedetaljer. Använd programmets tillgänglighetskontroll när den finns, men granska också själv hur dokumentet fungerar.',
 ['Planera en rapport om romartiden med tydlig fråga.','Använd rubrikformat, bild med alternativtext och tabell.','Lägg till källor, sidnummer och uppdaterad innehållsförteckning.','Granska språk och tillgänglighet och öppna den exporterade PDF-filen.'],
 'En rapport på tre eller fyra sidor kan ha en inledning, två förklarande avsnitt, slutsats och källor. Längden är ett övningsförslag.',
 'Färdigställ rapporten. Be någon hitta ett avsnitt och en källa utan hjälp. Förbättra det som var svårt att hitta.',
 ['Struktur och källor går att följa.','Originalfil och slutlig PDF finns och är kontrollerade.'],
 'Vad gör du sist före inlämning?','Öppnar slutfilen och kontrollerar innehåll, layout och att det är rätt version.',['Byter filnamn utan att öppna filen.','Tar bort originalet så att ingen ändring längre kan göras.'],'Kontrollera resultatet i den fil som mottagaren faktiskt kommer att läsa.');
