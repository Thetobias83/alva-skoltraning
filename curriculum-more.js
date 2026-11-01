// Egna introduktioner till områden i Lgr22, åk 7–9. Praktiska moment kräver undervisning.
export const CURRICULUM_MORE=[];
function addCurriculum(id,subject,topic,title,intro,paragraphs,example,mistake,terms,activity){
 CURRICULUM_MORE.push({id:'curriculum-'+id,subject,topics:[topic],title,intro,paragraphs,example,mistake,terms,activity,recall:`Förklara ${terms[0][0].toLowerCase()} med egna ord och använd ett exempel.`,answer:`${terms[0][1]} I exemplet ser du detta: ${example}`});
}
addCurriculum('tech-digital','Teknik','Digitala system','Internet, sensorer och programmerad styrning',
 'Digitala system kopplar ihop information, program och fysiska komponenter.',[
 'När en sensor mäter exempelvis temperatur får ett system information om omgivningen. Ett program kan jämföra mätvärdet med ett villkor och styra en komponent, exempelvis en fläkt. Ett styrsystem reagerar efter givna regler. Med återkoppling mäts resultatet igen så att systemet kan anpassa sig.',
 'Internet består av sammankopplade nätverk där information överförs med gemensamma regler, protokoll. En webbsida kan kräva flera system som samverkar: nätanslutning, servrar och program. Digital teknik påverkar också integritet och säkerhet. Fråga vilka uppgifter som samlas in, vem som får tillgång och vad som händer om systemet slutar fungera.'],
 'En termostat mäter temperaturen, jämför med ett inställt värde och styr värmen. När temperaturen ändras mäter den igen.',
 'Ett system behöver inte ha AI för att reagera på en sensor eller följa ett program.',
 [['Sensor','En komponent som registrerar en egenskap i omgivningen.'],['Återkoppling','När information om resultatet används för att påverka systemets fortsatta funktion.'],['Protokoll','Gemensamma regler för hur information överförs mellan digitala system.']],
 'Rita sensor → program → komponent → ny mätning för en automatisk växtbevattning. Skriv pseudokod och beskriv vad som bör hända om sensorn ger ett orimligt värde.');
addCurriculum('pe-movement','Idrott & hälsa','Dans och rörelse','Rörelse, rytm, dans och anpassning',
 'Att utveckla rörelseförmåga handlar om att pröva, anpassa och sätta samman rörelser.',[
 'Balans, koordination, kraft och timing samverkar i många aktiviteter. En rörelse behöver anpassas till syfte och situation: en kontrollerad landning och ett snabbt riktningsbyte ställer olika krav. Att ge konkret respons på en del av rörelsen kan hjälpa mer än att bara säga att någon är bra eller dålig.',
 'I dans och rörelse till musik kan puls, rytm, tempo och uttryck styra hur en serie byggs upp. Du kan pröva variation i riktning, nivå och rörelsestorlek. Deltagande och utveckling kan se olika ut för olika personer. Uppgifter kan anpassas så att fler kan delta men ändå möta en meningsfull utmaning.'],
 'En rörelseserie med åtta pulsslag kan upprepas och förändras genom att en rörelse görs långsammare eller i en ny riktning.',
 'Utveckling i idrott kan inte beskrivas enbart med vem som springer snabbast eller vinner en match.',
 [['Koordination','Att samordna kroppens rörelser efter en uppgift.'],['Puls i musik','De regelbundet återkommande slagen som hjälper oss hålla takten.'],['Rörelseanpassning','Att förändra en rörelse efter situation, syfte eller förutsättningar.']],
 'Skapa en kort rörelseserie till musik på en trygg yta. Beskriv en anpassning som gör att fler kan delta och be om respons på rytm eller tydlighet.');
addCurriculum('pe-water','Idrott & hälsa','Simning och livräddning','Vattenvana, simning och nödsituationer',
 'Text kan förbereda dig, men simning och livräddning behöver tränas praktiskt med kunnig ledning.',[
 'Vattenvana, simteknik och förmågan att orientera sig i vatten utvecklas genom övning under säkra förhållanden. Väder, kyla, strömmar och trötthet påverkar förutsättningarna. Det är viktigt att kunna bedöma en situation och följa badplatsens och undervisningens säkerhetsrutiner.',
 'Livräddning och första hjälpen kräver praktisk undervisning. Vid en nödsituation behöver hjälp tillkallas och räddningsinsatsen ske utan att fler hamnar i fara. Hur man använder livboj, förlängd arm och hjärt-lungräddning ska övas med utbildad ledare och aktuella instruktioner. Den här texten ersätter inte sådan utbildning eller en bedömning av simförmåga.'],
 'Att känna till hur en livboj ser ut är en förberedelse. Att kunna använda den säkert behöver visas och övas i undervisningen.',
 'Lästa instruktioner eller rätt svar i ett quiz visar inte att man kan simma eller genomföra en livräddning.',
 [['Vattenvana','Trygghet och grundläggande förmåga att hantera kroppen i vatten.'],['Livräddning','Åtgärder för att hjälpa en människa i en livshotande situation.'],['Riskbedömning','Att undersöka vad som kan bli farligt och hur risken kan minskas.']],
 'Be idrottsläraren visa skolans plan för simning, livräddning och första hjälpen. Skriv vilka moment du behöver öva praktiskt och var du får säker handledning.');
addCurriculum('pe-norms','Idrott & hälsa','Kroppsideal och hälsa','Kroppsideal, normer och hållbar träning',
 'Hälsa påverkas av både levnadsvanor, livsvillkor och hur människor behandlar varandra.',[
 'Bilder och budskap om kroppar kan skapa snäva föreställningar om hur någon borde se ut eller prestera. Bilder kan vara utvalda och bearbetade. En kropps utseende räcker inte för att avgöra hur personen mår. Undersök vilka ideal en framställning visar och vilka kroppar och erfarenheter som saknas.',
 'Träning behöver balanseras med återhämtning och anpassas till individ och situation. Dopning och överdriven jakt på resultat kan skada hälsa och rättvisa villkor. Samtal om träning behöver därför också handla om motiv, gemenskap och möjligheter att delta. Vid frågor om den egna hälsan kan elevhälsan ge stöd.'],
 'Ett träningsinlägg kan sälja ett kosttillskott samtidigt som det visar en idealiserad kropp. Både bild och kommersiellt syfte behöver granskas.',
 'En bild före och efter är inte ensam ett tillförlitligt bevis för att en viss metod fungerar.',
 [['Kroppsideal','Föreställningar om hur kroppar bör se ut eller fungera.'],['Norm','En ofta outtalad förväntan om vad som anses vanligt eller önskvärt.'],['Återhämtning','Vila och andra förutsättningar som hjälper kroppen och psyket att återställa sig efter belastning.']],
 'Analysera ett påhittat träningsbudskap: vem är mottagaren, vad utlovas och vilka belägg saknas? Använd inte klasskamraters kroppar som exempel.');
addCurriculum('home-meals','Hem- & konsumentkunskap','Måltider och vardagsarbete','Planera måltider och dela arbetet hemma',
 'En måltid behöver planeras utifrån både behov, resurser och de människor som ska äta.',[
 'Mat ger energi och näringsämnen, men måltider handlar också om gemenskap och kultur. Varierade livsmedel kan komplettera varandra. När du planerar behöver du ta hänsyn till exempelvis tillgängliga råvaror, allergier, tid och kostnad. Traditioner kan förändras och se olika ut även inom samma familj eller kultur.',
 'Arbetet hemma består av både synliga uppgifter och planering: handla, laga mat, diska, städa och hålla reda på vad som behövs. Vem som gör arbetet påverkas av normer och förväntningar. Att fördela ansvar och utvärdera arbetsordningen kan göra vardagen mer jämställd och resurssnål. Hygien och rengöring behöver också anpassas till material och uppgift.'],
 'Att laga flera portioner kan spara tid och pengar om det finns en plan för säker förvaring och hur maten ska användas.',
 'Att en person hjälper till ibland betyder inte automatiskt att planering och ansvar är jämnt fördelade.',
 [['Arbetsordning','En plan för i vilken följd uppgifter ska genomföras.'],['Näringsämnen','Ämnen i maten som kroppen använder för energi, uppbyggnad och andra funktioner.'],['Resurshushållning','Att använda exempelvis råvaror, pengar, vatten och energi omsorgsfullt.']],
 'Planera en måltid med inköpslista, kostnadsjämförelse och arbetsordning. Beskriv hur städning och disk fördelas och hur onödigt svinn undviks.');
addCurriculum('home-rights','Hem- & konsumentkunskap','Konsumenträtt','Köp, abonnemang och konsumentens ansvar',
 'Innan du köper något behöver du förstå både erbjudandet och villkoren.',[
 'Jämför total kostnad, inte bara priset i den största texten. En prenumeration kan ge återkommande betalningar och ett kreditköp kan ha ränta och avgifter. Fråga vad avtalet innebär, hur länge det gäller och hur det avslutas. Reklam, sponsring och personliga rekommendationer kan blandas i digitala flöden.',
 'Öppet köp och bytesrätt är normalt frivilliga erbjudanden från butiken. Reklamation handlar om att klaga på ett fel i en vara eller tjänst och är en annan fråga. Vid distansköp kan lagstadgad ångerrätt finnas, men det finns undantag. Regler beror på situationen; kontrollera aktuella villkor och Konsumentverkets information i det konkreta fallet.'],
 'Ett lågt månadspris kan bli en hög total kostnad om avtalet löper länge och har tilläggsavgifter.',
 'Öppet köp, ångerrätt, garanti och reklamation betyder inte samma sak.',
 [['Reklamation','Att meddela säljaren att en vara eller tjänst är felaktig och begära en åtgärd.'],['Kredit','Att få betala senare, ofta med villkor om ränta eller avgifter.'],['Abonnemang','Ett avtal om återkommande tillgång till en tjänst eller leverans, ofta mot återkommande betalning.']],
 'Jämför två påhittade abonnemang över ett helt år. Markera startavgift, månadspris, bindningstid och sådant som inte framgår. Kontrollera skillnaden mellan ångerrätt och öppet köp hos Konsumentverket.');
addCurriculum('art-process','Bild','Digital bild och arbetsprocess','Foto, rörlig bild och en genomtänkt arbetsprocess',
 'Att skapa bilder innebär att pröva val och kunna förklara hur de påverkar budskapet.',[
 'Foto, film, teckning, tryck och tredimensionellt arbete ger olika möjligheter. I foto påverkar utsnitt, perspektiv och ljus vad vi ser. I film påverkar också klippning och ljud hur vi tolkar ett händelseförlopp. En bild kan vara dokumenterande men ändå bygga på medvetna urval.',
 'En arbetsprocess kan börja med idéer och skisser, fortsätta med prövning av material och avslutas med bearbetning och presentation. Dokumentera vad du ändrar och varför. När du använder andras bilder behöver du undersöka tillstånd, licens och hur upphovsperson ska anges. Tänk också på hur människor avbildas och hur publicering kan påverka dem.'],
 'En bild tagen underifrån kan få en person att verka mäktig. Samma person i ett annat utsnitt kan ge ett helt annat intryck.',
 'Att en bild går att hitta på nätet betyder inte automatiskt att den får återanvändas fritt.',
 [['Utsnitt','Den del av ett motiv som får vara med i bilden.'],['Storyboard','En bildplan som visar en följd av scener eller bildrutor.'],['Bearbetning','Att ändra och utveckla ett bildarbete efter prövning eller respons.']],
 'Gör tre skisser eller egna fotografier med samma motiv och olika budskap. Välj en version, bearbeta den och förklara dina val.');
addCurriculum('art-history','Bild','Konst och samhälle','Konst, arkitektur och bilder av identitet',
 'Bilder och byggnader berättar om de sammanhang där de skapas och används.',[
 'Konst kan ha religiösa, politiska, personliga och kommersiella funktioner. Material, teknik och beställare påverkar uttrycket. När du jämför bilder från olika tider behöver du undersöka både hur de ser ut och vad de användes till. En nutida tolkning är inte automatiskt samma som den ursprungliga avsikten.',
 'Arkitektur påverkar hur människor rör sig, möts och får tillgång till platser. Bilder kan samtidigt förstärka eller utmana föreställningar om identitet, kön och makt. Ställ frågor om vem som syns, hur personen framställs och vem som betraktar. Motivera din analys med detaljer som faktiskt finns i bilden.'],
 'Ett pampigt palats kan visa en härskares makt genom storlek, material och placering. En bostad behöver analyseras utifrån andra funktioner också.',
 'En bildanalys är mer än att säga om bilden är fin: du behöver peka på bildens uttryck och sammanhang.',
 [['Arkitektur','Utformning av byggnader och byggda miljöer.'],['Kontext','Det historiska, sociala eller kulturella sammanhanget.'],['Visuell analys','Att undersöka och tolka en bild med stöd av dess synliga uttryck.']],
 'Jämför ett äldre konstverk med en nutida reklambild. Undersök komposition, avsändare, mottagare och vilka ideal som uttrycks.');
addCurriculum('music-notation','Musik','Notation och musikhistoria','Höra, beskriva och jämföra musik',
 'Musikens begrepp hjälper dig höra och beskriva hur ett stycke är uppbyggt.',[
 'Puls är den regelbundna grund som vi kan följa, medan rytm beskriver hur ljud och pauser ordnas i tiden. Melodi är en följd av toner och ackord flera toner som klingar tillsammans. Noter, ackordsymboler och andra grafiska tecken kan stödja musicerande på olika sätt.',
 'Musik utvecklas genom möten, traditioner, teknik och samhällsförändringar. Genrer har igenkännbara drag men fasta gränser är ofta svåra att dra. När du jämför musik från olika tider och platser kan du lyssna efter instrument, rytm, klang och funktion. Undersök också vilka människor och sammanhang en genrebeskrivning riskerar att osynliggöra.'],
 'Två låtar kan ha samma tempo men olika rytmiskt mönster och klang, så de upplevs ändå olika.',
 'Musik från en viss plats eller genre låter inte alltid på ett enda sätt.',
 [['Rytm','Hur ljud och pauser ordnas i tiden.'],['Klang','Ljudets karaktär, som hjälper oss skilja instrument och röster åt.'],['Notation','Tecken och system för att beskriva hur musik kan spelas eller sjungas.']],
 'Lyssna på två stycken från olika sammanhang. Beskriv tre hörbara drag och ta reda på när, var och för vilket syfte musiken används.');
addCurriculum('music-ensemble','Musik','Samspel och produktion','Spela tillsammans och skapa med digitala verktyg',
 'I ett musikaliskt samspel behöver deltagarna både utföra sin del och lyssna på helheten.',[
 'Sång och instrumentspel i grupp kräver gemensam puls, tydliga starter och anpassad ljudnivå. En enkel del kan vara viktig för helheten. När du övar kan du bryta ned en svår passage, sänka tempot och sätta ihop delarna igen. Improvisation innebär att skapa i stunden inom mer eller mindre bestämda ramar.',
 'Digitala verktyg kan användas för att spela in, arrangera och bearbeta musik. Ett arrangemang handlar om hur musikens delar fördelas och utvecklas. Prova att ändra instrument, form eller dynamik och lyssna på skillnaden. Anpassa ljudnivån och ta hänsyn till hörsel och andra människor. När du använder färdiga ljud behöver du kontrollera vilka användningsvillkor som gäller.'],
 'En enkel basstämma, en melodi och en rytm kan tillsammans skapa ett arrangemang där delarna lämnar utrymme åt varandra.',
 'Fler ljudspår gör inte automatiskt ett arrangemang tydligare eller mer uttrycksfullt.',
 [['Arrangemang','Hur musikens delar utformas och fördelas mellan röster eller instrument.'],['Improvisation','Att skapa musik i stunden inom valda ramar.'],['Dynamik','Variation i musikens ljudstyrka och intensitet.']],
 'Skapa en kort musikalisk idé med röst, instrument eller digitala ljud. Gör två arrangemang och förklara hur en ändring påverkar uttrycket. Öva samspelet praktiskt i musikundervisningen.');
addCurriculum('history-civilizations','Historia','Tidiga samhällen','Från jordbruk till städer och riken',
 'Människors sätt att leva förändrades när jordbruk och större bosättningar växte fram på olika platser.',[
 'Övergången till jordbruk var en lång process och skedde inte samtidigt överallt. Mer bofast liv kunde göra det möjligt att lagra mat och försörja fler människor. Samtidigt skapade beroendet av skördar nya sårbarheter. Människor fortsatte också att jaga, samla och flytta.',
 'I bland annat Mesopotamien och Egypten utvecklades större städer och riken. Arbetsdelning, handel, skrift och organiserad makt hängde ihop med hur resurser fördelades. Historiker undersöker både materiella lämningar och texter. De skriftliga spåren berättar ofta mer om makthavare än om människor som inte fick skriva sin egen historia.'],
 'En bevattningskanal kunde öka skörden men krävde arbete och beslut om vem som fick använda vattnet.',
 'Civilisation betyder inte att människor i andra samhällen var mindre värda eller saknade kunskap.',
 [['Arbetsdelning','Att människor utför olika uppgifter i ett samhälle.'],['Historisk källa','Ett spår från det förflutna som används för att undersöka en historisk fråga.'],['Överskott','Resurser som återstår efter att omedelbara behov har täckts.']],
 'Jämför ett tidigt flodrike med Rom. Undersök matförsörjning, makt och vilka människor källorna låter oss höra.');
addCurriculum('history-colonialism','Historia','Kolonialism och slavhandel','Kolonialism, handel och människors motstånd',
 'Från 1400-talet knöts världsdelar allt tätare samman genom handel, erövring och tvång.',[
 'Europeiska stater och handelsaktörer tog kontroll över områden och resurser i andra världsdelar. Kolonialism förändrade maktförhållanden och människors levnadsvillkor. Handel förde varor och idéer mellan platser, men erövring, sjukdomar och tvångsarbete fick katastrofala följder för många människor.',
 'I den transatlantiska slavhandeln förslavades människor i Afrika och transporterades med våld över Atlanten. Deras arbete utnyttjades bland annat på plantager. Förslavade människor gjorde motstånd på många sätt. Avskaffandet var en historisk process med flera aktörer, och koloniala maktförhållanden upphörde inte automatiskt när slavhandeln förbjöds.'],
 'Socker på en europeisk marknad kunde ingå i en ekonomisk kedja som byggde på tvångsarbete på andra sidan Atlanten.',
 'Handelsutbyte innebär inte att alla deltagare hade samma makt eller deltog frivilligt.',
 [['Kolonialism','När en stat eller dess aktörer tar kontroll över andra områden och deras resurser.'],['Förslavning','Att människor berövas frihet och behandlas som egendom.'],['Motstånd','Handlingar som utmanar makt eller förtryck.']],
 'Rita en handelsväg och skriv vid varje del vilka som tjänade på den och vilka som utsattes för tvång. Jämför två historiska perspektiv.');
addCurriculum('history-industry','Historia','Industrialisering','Revolutioner, fabriker och nya samhällen',
 'Industrialiseringen förändrade hur varor tillverkades och hur människor arbetade och bodde.',[
 'Maskiner, nya energikällor, transporter och investeringar gjorde det möjligt att tillverka mer i fabriker. Utvecklingen började på olika tider i olika länder. När människor flyttade till städer ökade behovet av bostäder, vatten och andra gemensamma system. Arbetet kunde ge nya möjligheter men också långa dagar, farliga miljöer och barnarbete.',
 'Politiska revolutioner och nya idéer om rättigheter utmanade äldre maktordningar. Liberalism, konservatism och socialism gav olika svar på hur samhället borde organiseras. Fackliga och politiska rörelser arbetade för förändring. Förklara historiska händelser med flera samverkande orsaker i stället för att leta efter en enda uppfinnare som förklarar allt.'],
 'En järnväg kunde göra transport billigare, knyta samman marknader och samtidigt förändra människors möjlighet att flytta.',
 'Teknisk utveckling förbättrar inte automatiskt arbetsvillkor för alla samtidigt.',
 [['Industrialisering','En omvandling där maskinell tillverkning och industri får större betydelse.'],['Urbanisering','Att en större andel av befolkningen bor i städer.'],['Ideologi','Idéer om hur samhället fungerar och hur det bör vara.']],
 'Gör en orsakskedja från energikälla till fabrik, stadsliv och politiska krav. Lägg till en återkoppling där förändringar påverkar varandra.');
addCurriculum('history-wars','Historia','Världskrig och folkmord','Världskrig, diktatur och Förintelsen',
 '1900-talets krig och förtryck behöver förstås genom både samhällsförändringar och människors handlingar.',[
 'Första världskriget bröt ut 1914. Nationalism, imperialism, militära rustningar och allianser bidrog till spänningarna. Mordet i Sarajevo blev en utlösande händelse, men räcker inte ensamt som förklaring. Kriget och dess följder förändrade Europas gränser och maktförhållanden.',
 'Andra världskriget i Europa inleddes 1939 med Nazitysklands angrepp på Polen. Nazismen byggde på diktatur, rasism och antisemitism. Under Förintelsen mördades omkring sex miljoner judar. Romer utsattes också för folkmord, och nazisterna förföljde och mördade många andra grupper. Undersök hur lagar, propaganda, organisation och människors beslut gjorde förföljelsen möjlig.',
 'I Sovjetunionen användes bland annat lägersystemet Gulag, tvångsförflyttningar och terror för att kontrollera och förtrycka människor, särskilt under Stalin. Historiska brott måste undersökas i sina egna sammanhang. Vittnesmål, dokument och föremål behöver jämföras källkritiskt, samtidigt som människornas erfarenheter tas på allvar.'],
 'En propagandabild visar hur avsändaren ville påverka människor. Den är inte ett neutralt fotografi av vad alla tyckte.',
 'En utlösande händelse och långsiktiga orsaker är olika delar av en historisk förklaring.',
 [['Antisemitism','Fördomar, fientlighet och diskriminering riktad mot judar.'],['Folkmord','Handlingar med avsikt att helt eller delvis förinta en nationell, etnisk, rasmässigt bestämd eller religiös grupp.'],['Diktatur','Ett styre där makten inte kan bytas genom fria demokratiska val och politiska friheter är begränsade.']],
 'Använd Forum för levande historia och skilj på bakgrund, händelseförlopp och konsekvenser. Välj ett vittnesmål och förklara vad just den källan kan berätta.');
addCurriculum('history-democracy','Historia','Demokratisering och efterkrigstid','Sveriges demokratisering och världen efter 1945',
 'Demokratiska rättigheter har vuxit fram genom konflikter, beslut och människors organisering.',[
 'I Sverige förändrades rösträtten stegvis. År 1921 kunde kvinnor och män för första gången delta i samma riksdagsval på grundval av de nya rösträttsreglerna. Det betydde inte att alla vuxna omedelbart hade rösträtt; begränsningar försvann senare. Folkrörelser, opinionsbildning och politiska kompromisser bidrog till förändringen.',
 'Efter 1945 präglades världen av det kalla krigets motsättningar mellan framför allt USA och Sovjetunionen. Kärnvapen, upprustning och allianser påverkade politiken, samtidigt som kolonier blev självständiga. Sverige byggde ut välfärdssystem och förändrades genom migration, arbetsliv och nya sociala rörelser. Historia används i dag för att skapa identitet och argumentera om framtiden.'],
 'En jubileumsbild av rösträtten kan lyfta fram framsteg. En annan källa kan visa vilka som fortfarande utestängdes.',
 'Kalla kriget innebar inte fred överallt: flera väpnade krig och konflikter hörde till perioden.',
 [['Demokratisering','En process där fler får politiskt inflytande och demokratiska rättigheter stärks.'],['Kalla kriget','Maktkampen efter andra världskriget mellan block som dominerades av USA och Sovjetunionen.'],['Avkolonisering','Processer där kolonier blev självständiga.']],
 'Gör en tidslinje med svensk rösträtt, andra världskrigets slut och avkolonisering. Skriv både en förändring och något som fortsatte vara ojämnt fördelat.');
addCurriculum('geo-processes','Geografi','Jordens processer','Plattor, landskap och sårbara platser',
 'Jordens yta formas både av krafter inifrån och av processer vid ytan.',[
 'Jordskorpans plattor rör sig långsamt. Där de möts kan bergskedjor, jordbävningar och vulkaner uppstå. Vittring bryter ned berg och erosion flyttar material med exempelvis vatten, vind och is. Landskapets utseende är därför resultat av processer som verkar under olika lång tid.',
 'En naturhändelse får olika konsekvenser beroende på var människor bor, hur byggnader är konstruerade och vilka resurser som finns. Risk handlar både om en möjlig händelse och om hur utsatta människor och samhällen är. Kartor över befolkning, terräng och infrastruktur kan hjälpa oss att undersöka sårbarhet.'],
 'Samma regnmängd kan ge olika följder i en tätbebyggd dal och i ett område där vatten lätt kan rinna undan utan att hota bostäder.',
 'En naturkatastrofs följder förklaras inte enbart av naturens krafter.',
 [['Erosion','När material nöts bort och transporteras av till exempel vatten, vind eller is.'],['Sårbarhet','Hur känsliga människor och samhällen är för en påfrestning.'],['Plattektonik','Modellen som beskriver jordskorpans plattor och deras rörelser.']],
 'Välj en plats och kombinera terrängkarta, befolkningsuppgifter och information om en naturrisk. Föreslå en åtgärd och förklara vem den hjälper.');
addCurriculum('geo-development','Geografi','Levnadsvillkor och GIS','Kartor, GIS och ojämna levnadsvillkor',
 'Geografiska mönster blir tydligare när vi kopplar information till platser.',[
 'GIS, geografiska informationssystem, kan kombinera kartlager med information om exempelvis vägar, vatten och befolkning. Valet av skala och symboler påverkar vilka mönster som syns. Fråga var uppgifterna kommer från och hur gamla de är innan du drar slutsatser.',
 'Levnadsvillkor kan undersökas genom hälsa, utbildning, inkomster, säkerhet och tillgång till resurser. Ett lands medelvärde döljer ofta skillnader inom landet. Handel, kolonial historia, konflikter, naturförhållanden och politiska beslut kan samverka. Hållbar utveckling innebär att väga miljömässiga, sociala och ekonomiska konsekvenser även mellan platser och generationer.'],
 'Ett kartlager över skolor och ett över restider kan visa vilka områden som har långt till utbildning.',
 'Ett samband på en karta visar inte automatiskt vad som orsakar skillnaden.',
 [['GIS','Digitala system för att hantera och analysera information kopplad till platser.'],['Indikator','Ett mått som används för att undersöka ett förhållande.'],['Skala','Förhållandet mellan ett avstånd i en karta och motsvarande avstånd i verkligheten.']],
 'Jämför två mått på levnadsvillkor för samma platser. Beskriv vad måtten visar, vad de missar och en fråga du behöver mer information för att besvara.');
addCurriculum('soc-levels','Samhällskunskap','Politik och samarbete','Politiska idéer, beslutsnivåer, EU och FN',
 'Samhällsbeslut fattas på flera nivåer och påverkas av olika idéer om ett gott samhälle.',[
 'Kommuner, regioner, riksdag och regering har olika uppgifter. För att påverka en fråga behöver du undersöka vem som faktiskt ansvarar för beslutet. Politiska ideologier ger olika syn på exempelvis frihet, jämlikhet, gemenskap och statens roll. Partier kan kombinera idéer och förändras över tid.',
 'EU är ett samarbete där medlemsländer har överlåtit beslutanderätt inom vissa områden till gemensamma institutioner. FN är en global organisation för samarbete bland annat om fred, rättigheter och utveckling. Organisationerna har olika mandat och beslutsformer. De är inte en världsregering som kan lösa varje konflikt på egen hand.'],
 'En fråga om skolans lokaler kan behöva ställas till kommunen, medan en ändring av skollagen hör till den nationella nivån.',
 'Att en fråga är viktig internationellt betyder inte att FN ensamt kan bestämma lösningen.',
 [['Ideologi','Sammanhängande idéer om hur samhället bör organiseras.'],['Beslutsnivå','Den nivå i samhällets organisation som ansvarar för en fråga.'],['Mandat','Ett uppdrag eller en befogenhet att fatta vissa beslut.']],
 'Välj en samhällsfråga och följ den från individ till kommun, stat och internationellt samarbete. Ange vilka nivåer som faktiskt kan påverka den.');
addCurriculum('soc-welfare','Samhällskunskap','Välfärd och arbetsliv','Arbete, välfärd och människors olika villkor',
 'Hushåll, företag och offentlig sektor är beroende av varandra.',[
 'Arbete ger inkomster och bidrar till varor, tjänster och skatteintäkter. Skatter finansierar bland annat gemensamma tjänster och sociala försäkringar. Välfärd handlar både om människors levnadsvillkor och om hur samhället organiserar stöd och tjänster. Beslut om finansiering och fördelning innebär politiska avvägningar.',
 'På arbetsmarknaden möts arbetsgivare och arbetstagare. Utbildning, teknik och konjunktur påverkar vilka arbeten som finns, medan diskriminering och andra hinder kan påverka möjligheterna. Migration kan ha många orsaker, som arbete, familj eller flykt. Undersök människors villkor med flera faktorer och undvik att göra en hel grupp till en enda berättelse.'],
 'Om fler blir arbetslösa kan hushållens inkomster minska samtidigt som behovet av samhällsstöd ökar.',
 'En persons inkomst förklaras inte enbart av hur hårt personen arbetar.',
 [['Välfärd','Människors levnadsvillkor och de system som ska bidra till trygghet och gemensamma tjänster.'],['Konjunktur','Det ekonomiska läget och variationer i produktion och efterfrågan.'],['Arbetsmarknad','De sammanhang där arbetsgivare söker arbetskraft och människor söker arbete.']],
 'Rita ekonomiska flöden mellan ett hushåll, ett företag och offentlig sektor. Förklara hur en förändring kan påverka alla tre.');
addCurriculum('soc-minorities','Samhällskunskap','Nationella minoriteter','Nationella minoriteter, samer och rättigheter',
 'Rättigheter behöver förstås både genom dagens regler och genom historiska erfarenheter.',[
 'Sveriges fem nationella minoriteter är judar, romer, samer, sverigefinnar och tornedalingar. De nationella minoritetsspråken är jiddisch, romani chib, samiska, finska och meänkieli. Samerna är också ett urfolk. Språk och identitet varierar inom grupperna, och alla personer använder inte samma språk eller traditioner.',
 'Minoriteter har utsatts för diskriminering och politik som begränsat språk och kultur. Skydd för språk, delaktighet och kultur behöver därför kopplas till historien. Urfolksfrågor kan också gälla mark, naturresurser och möjligheten att påverka beslut. Jämför olika aktörers argument och skilj mellan rättigheter, fakta och åsikter.'],
 'En fråga om att bevara ett språk handlar både om undervisning och om möjligheten att använda språket i vardagen.',
 'En minoritet är inte en grupp där alla tycker, tror eller lever likadant.',
 [['Nationell minoritet','En av de fem grupper som har särskilt erkännande som nationell minoritet i Sverige.'],['Urfolk','Ett folk med historisk förankring i ett område före dagens statsgränser och med en egen kulturell identitet.'],['Diskriminering','Missgynnande som har samband med en skyddad diskrimineringsgrund.']],
 'Välj ett material från Isof eller Sametinget. Beskriv en historisk erfarenhet, en nutida språkfråga och vem som kommer till tals.');
addCurriculum('rel-society','Religion','Religion och samhälle','Religion, sekularisering och Sverige',
 'Religion och samhälle påverkar varandra och förändras över tid.',[
 'Kristendomen har haft stor betydelse för Sveriges historia, bland annat genom lagar, högtider, utbildning och kyrkans organisation. Samtidigt har människor alltid haft olika sätt att tro, tvivla och leva. Migration, nya rörelser och förändrade rättigheter har bidragit till dagens mångfald av religioner och livsåskådningar.',
 'Sekularisering kan beskriva att religiösa institutioner får mindre inflytande inom vissa samhällsområden eller att människors religiösa praktiker förändras. Det betyder inte att religion helt försvinner. Religionsfrihet rymmer möjligheten att ha, byta och utöva en religion, liksom att avstå från religion. Identitet kan också formas av familj, språk, plats och egna erfarenheter.'],
 'En person kan fira jul som familjetradition utan att ha en kristen tro. En annan kan ge samma högtid en stark religiös betydelse.',
 'Religiös tillhörighet säger inte ensam vad en människa tänker i politiska eller etiska frågor.',
 [['Sekularisering','Förändringar där religion får mindre eller en annan roll i delar av samhället och människors liv.'],['Religionsfrihet','Friheten att ha, byta, utöva eller avstå från religion.'],['Livsåskådning','Tankar om livet, människan, verkligheten och vad som är värdefullt.']],
 'Undersök en högtid i Sverige ur historiskt, religiöst och vardagligt perspektiv. Ge utrymme för flera sätt att delta eller avstå.');
addCurriculum('rel-texts','Religion','Urkunder och symboler','Texter, symboler och religion i medier',
 'En religiös text eller symbol får betydelse genom hur människor tolkar och använder den.',[
 'Urkunder är texter som har särskild betydelse inom en tradition. De kan innehålla berättelser, regler, böner och poetiska uttryck. Människor kan läsa samma text på olika sätt och använda den i olika sammanhang. För att förstå en tolkning behöver man undersöka både texten och den tradition där den läses.',
 'Medier väljer vilka religiösa personer och händelser som får synas. Nyhetsrapportering om konflikter kan ge andra bilder än en vardagsskildring eller en troendes egen berättelse. Fråga vem som talar, vilket syfte framställningen har och vilka röster som saknas. Att jämföra religioner kräver samma frågor och respekt för variation inom varje tradition.'],
 'Ett kors kan användas i en gudstjänst, som personligt smycke eller som kulturhistorisk symbol. Sammanhanget påverkar betydelsen.',
 'En rubrik om en religiös grupp beskriver inte automatiskt alla människor i den gruppen.',
 [['Urkund','En text med särskild grundläggande betydelse inom en religiös tradition.'],['Tolkning','Ett sätt att förstå innebörden i exempelvis en text eller handling.'],['Symbol','Något som genom ett sammanhang representerar en betydelse utöver sig självt.']],
 'Jämför en religions egen informationssida med en nyhetsartikel om samma tradition. Undersök syfte, ordval och vilka personer som får tala.');
addCurriculum('en-listening','Engelska','Listening','Lyssna, läsa och förstå sammanhang',
 'Du behöver inte förstå varje ord för att förstå ett engelskt budskap.',[
 'Börja med att ta reda på situationen: vem talar, till vem och varför? Lyssna först efter helheten. Lyssna sedan efter detaljer som tid, plats och vad någon vill. Tonfall kan visa osäkerhet eller ironi, men din tolkning behöver stöd i sammanhanget.',
 'När du läser en berättelse följer du både händelser och personer. Lägg märke till vad berättaren säger och vad du själv drar för slutsats. Gissa ett obekant ord med hjälp av meningen och kontrollera viktiga ord. Sammanfatta sedan på enkel engelska i stället för att översätta varje mening.'],
 '“The train is delayed, so we will meet at half past three.” Huvudbudskapet är en ändrad mötestid; delayed betyder här försenat.',
 'En gissning om ett ord är en hypotes som kan behöva kontrolleras.',
 [['Context','Sammanhanget som hjälper dig förstå ett uttryck.'],['Main idea','Textens eller samtalets viktigaste budskap.'],['Inference','En slutsats som du drar med stöd av ledtrådar.']],
 'Lyssna på ett kort engelskt inslag två gånger. Skriv först huvudbudskapet och sedan tre detaljer. Berätta innehållet med egna ord på engelska.');
addCurriculum('en-world','Engelska','English in the world','Engelska i världen och i olika situationer',
 'Engelska används av människor med många olika modersmål och erfarenheter.',[
 'Uttal, ord och uttryck varierar mellan och inom länder. Engelska fungerar också som kontaktspråk mellan personer som inte har engelska som modersmål. Att förstå olika röster och kunna be om förtydligande är därför viktigare än att härma en enda accent perfekt.',
 'Anpassa hur du uttrycker dig efter mottagare och syfte. Ett meddelande till en kompis kan se annorlunda ut än en fråga till ett museum. När du jämför levnadsvillkor och kultur behöver du konkreta källor och flera perspektiv. Ett land har inte bara en livsstil och en person representerar inte alla.'],
 '“Could you explain what you mean?” hjälper samtalet vidare när något är oklart.',
 'Skillnader i uttal betyder inte att den ena personen talar sämre engelska.',
 [['Register','Språkets anpassning till situation och mottagare.'],['Variety','En variant av ett språk, till exempel med vissa uttalsdrag.'],['Clarification','Ett förtydligande som gör budskapet lättare att förstå.']],
 'Jämför två engelskspråkiga intervjuer från olika miljöer. Beskriv ämne och språkliga skillnader utan att generalisera om alla i ett land.');
addCurriculum('de-reading','Tyska','Läsa och lyssna','Förstå tyska skyltar, meddelanden och berättelser',
 'Använd situationen och det du redan kan för att hitta textens mening.',[
 'En tidtabell, ett chattmeddelande och en kort berättelse läses på olika sätt. I en tidtabell letar du efter tider och platser. I en berättelse behöver du förstå vilka personerna är och vad som händer. Rubriker, bilder och bekanta ord ger ledtrådar, men kontrollera att ledtråden passar hela meningen.',
 'Lyssna först efter huvudbudskapet och därefter efter detaljer. Du kan fråga “Kannst du das bitte wiederholen?” om du behöver höra igen. Träna också på att själv berätta kort, ställa följdfrågor och ändra det du säger när lyssnaren inte förstår. Kommunikation är ett samarbete.'],
 '“Der Zug fährt um acht Uhr ab.” betyder att tåget avgår klockan åtta. “abfahren” är ett verb där delen ab kan hamna sist.',
 'Liknande stavning på svenska och tyska garanterar inte samma betydelse.',
 [['Hauptaussage','Det viktigaste budskapet i en text eller ett samtal.'],['Wiederholen','Att upprepa något.'],['Fahrplan','En tidtabell för resor.']],
 'Skriv en tysk resefråga, ett svar med en tid och en följdfråga. Läs dialogen med någon och byt sedan tid och plats.');
addCurriculum('de-culture','Tyska','Tyskspråkiga områden','Vardagsliv i tyskspråkiga områden',
 'Tyska används i flera länder och vardagen varierar mellan människor och platser.',[
 'Tyskland, Österrike och delar av Schweiz är exempel på områden där tyska används. Det finns regionala språkvarianter och olika traditioner. En skolvardag i en storstad behöver inte likna den på en mindre ort. Beskriv därför vilken plats och vilken källa du undersöker.',
 'Du kan jämföra fritid, mat, skola eller högtider med din egen vardag. Jämförelsen blir bättre när du beskriver både likheter och skillnader och frågar varför de kan finnas. Använd tyska uttryck för att berätta om dina intressen och för att fråga andra, i stället för att bara lära in en lista med landsfakta.'],
 '“In meiner Freizeit spiele ich …” betyder “På min fritid spelar jag …”. Följ upp med “Und du?” för att bjuda in den andre.',
 'En tradition som förekommer i ett område följs inte av alla som bor där.',
 [['Alltag','Vardagsliv och sådant man gör regelbundet.'],['Freizeit','Fritid utanför till exempel skola och arbete.'],['Vergleichen','Att undersöka likheter och skillnader.']],
 'Välj en tyskspråkig ort och en källa om ungdomars vardag där. Skriv fem enkla tyska meningar och markera vilka uppgifter källan faktiskt stödjer.');
addCurriculum('bio-infection','Biologi','Smitta och immunförsvar','Smitta, immunförsvar och antibiotika',
 'Smittämnen kan orsaka infektioner, men bakterier och virus fungerar på olika sätt.',[
 'Kroppens försvar börjar bland annat med hud och slemhinnor. Immunförsvaret kan känna igen och bekämpa smittämnen. Efter vissa infektioner eller vaccinationer finns ett immunologiskt minne som kan göra försvaret snabbare vid ett senare möte. Skyddets styrka och varaktighet varierar.',
 'Antibiotika används mot vissa bakterieinfektioner och fungerar inte mot virus. Resistens betyder att bakterier kan överleva ett läkemedel som tidigare hämmade dem. Det är bakterierna som blir resistenta, inte människan. Bakterier med sådana egenskaper kan spridas, vilket gör antibiotikaresistens till en gemensam samhällsfråga.'],
 'En förkylning orsakas vanligen av virus. Antibiotika hjälper därför inte mot själva förkylningsviruset.',
 'Vaccinationer och antibiotika är olika slags åtgärder med olika funktioner.',
 [['Resistens','En egenskap som gör att bakterier kan överleva en viss antibiotika.'],['Immunförsvar','Kroppens system för att upptäcka och bekämpa bland annat smittämnen.'],['Virus','Smittämne som behöver levande celler för att föröka sig.']],
 'Gör en jämförelse mellan bakterier, virus, vaccin och antibiotika. Använd 1177 och Folkhälsomyndigheten för att kontrollera dina förklaringar.');
addCurriculum('bio-reproduction','Biologi','Sexualitet och relationer','Kropp, relationer, samtycke och skydd',
 'Kunskap om kroppen hör ihop med respekt, rättigheter och möjlighet att göra informerade val.',[
 'Vid människans fortplantning kan en spermie befrukta ett ägg och ett embryo börja utvecklas. Puberteten förändrar bland annat hormonproduktion och könsorgan, men utvecklingen sker i olika takt. Identitet, relationer och sexualitet handlar också om känslor och hur människor vill leva, inte bara om kroppens fortplantning.',
 'Sex ska vara frivilligt för alla som deltar. Frivillighet kan förändras och man får alltid ändra sig. Ingen behöver ställa upp på något för att behålla en relation. Olika preventivmedel har olika funktioner: kondom kan minska risken för både graviditet och sexuellt överförbara infektioner, medan flera andra metoder främst skyddar mot graviditet. UMO och elevhälsan ger fördjupning och stöd.'],
 'Att först säga ja till närhet innebär inte att man har sagt ja till allt som kan följa.',
 'Det går inte att avgöra någons gränser utifrån kläder, kön eller vad personen tidigare velat.',
 [['Befruktning','När en spermie och ett ägg förenas.'],['Samtycke','Frivilligt deltagande där varje person kan ändra sig.'],['Preventivmedel','Metoder eller medel som används för att förebygga graviditet.']],
 'Undersök två faktasidor på UMO. Förklara skillnaden mellan skydd mot graviditet och skydd mot infektioner utan att lämna ut egna erfarenheter.');
addCurriculum('bio-biotech','Biologi','Bioteknik','Bioteknik och biologiska frågor i samhället',
 'Bioteknik använder levande organismer, celler eller deras beståndsdelar för att göra något användbart.',[
 'När jäst får deg att jäsa används en organism i en tillverkningsprocess. Modern bioteknik kan också undersöka DNA eller förändra arvsanlag. En gen är en del av arvsmassan som kan bidra till hur en egenskap utvecklas. Många egenskaper påverkas av flera gener och av miljön.',
 'En biologisk möjlighet är inte automatiskt ett självklart samhällsbeslut. Frågor om genteknik kan handla om hälsa, miljö, ägande och vem som får nytta eller risker. Skilj mellan vad en metod kan göra, hur säker kunskapen är och vilka värderingar som används när någon tar ställning.'],
 'Att tillverka ett läkemedel med hjälp av förändrade celler och att undersöka en persons DNA är två olika användningar av bioteknik.',
 'En enda gen förklarar sällan en komplicerad mänsklig egenskap.',
 [['Bioteknik','Användning av organismer eller biologiska delar för ett praktiskt syfte.'],['DNA','Molekylen som bär genetisk information.'],['Etisk avvägning','Att väga olika värden och konsekvenser mot varandra.']],
 'Välj en bioteknisk användning. Beskriv en möjlig nytta, en möjlig risk och en fråga som kräver mer kunskap.');
addCurriculum('phy-space','Fysik','Universum','Universum, stjärnor och hur vi får kunskap',
 'Astronomi undersöker sådant som ofta är för långt bort för att besöka.',[
 'Jorden kretsar kring solen, som är en stjärna i galaxen Vintergatan. Galaxer innehåller stora mängder stjärnor, gas och stoft. Ljus från avlägsna objekt har färdats länge innan det når oss. När vi studerar rymden ser vi därför också tillbaka i tiden.',
 'Big bang-modellen beskriver hur universum har utvecklats från ett tidigt, mycket varmt och tätt tillstånd och därefter expanderat. Modellen bygger på observationer och kan utvecklas när ny kunskap tillkommer. Stjärnor bildas ur gasmoln och omvandlar energi genom kärnreaktioner. De är alltså inte eldklot som brinner med syre som en vedbrasa.'],
 'Ett ljusår är den sträcka ljuset färdas på ett år. Det är ett avstånd, trots att ordet innehåller år.',
 'Solsystem, galax och universum beskriver olika storleksnivåer.',
 [['Ljusår','Den sträcka som ljuset färdas på ett år.'],['Galax','En stor samling stjärnor, gas och annan materia som hålls samman av gravitation.'],['Modell','En förenklad beskrivning som hjälper oss förklara och undersöka verkligheten.']],
 'Rita storleksnivåerna jorden, solsystemet, Vintergatan och universum. Skriv vid varje nivå hur den ingår i nästa.');
addCurriculum('phy-matter','Fysik','Tryck och värme','Partiklar, densitet, tryck och temperatur',
 'En partikelmodell hjälper oss att förklara vad som händer med ämnen när de värms och pressas.',[
 'I en gas rör sig partiklar mellan kollisioner med varandra och behållarens väggar. Kollisionerna mot väggarna ger tryck. Om samma mängd gas stängs in i mindre volym kan trycket öka. Temperatur hänger ihop med partiklarnas rörelse; när temperaturen ökar rör de sig i genomsnitt mer intensivt.',
 'Densitet beskriver massa per volym. Ett litet föremål kan därför ha högre densitet än ett stort. Värme överförs från högre till lägre temperatur, exempelvis genom ledning, strömning och strålning. En isolering bromsar energiöverföring; den tillverkar inte värme.'],
 'En metallsked i varm soppa blir varm genom värmeledning. Luft som värms och börjar röra sig är ett exempel på strömning.',
 'Temperatur och total mängd termisk energi är inte samma sak: mängden materia spelar också roll.',
 [['Densitet','Massa per volymenhet.'],['Tryck','Kraft fördelad på en yta.'],['Värmeledning','Energiöverföring genom ett material utan att materialet som helhet flyttar sig.']],
 'Jämför två vardagsföremåls massa och volym med hjälp av givna mätdata. Förklara varför tyngst inte alltid betyder högst densitet.');
addCurriculum('phy-radiation','Fysik','Strålning','Strålning, kärnor och användning i samhället',
 'Ordet strålning rymmer flera fenomen som har olika egenskaper.',[
 'Synligt ljus, radiovågor, infraröd strålning och röntgenstrålning hör till elektromagnetisk strålning. De skiljer sig bland annat i våglängd och energi. Joniserande strålning kan slå loss elektroner från atomer. All elektromagnetisk strålning är inte joniserande.',
 'Instabila atomkärnor kan sönderfalla och avge strålning. Halveringstid beskriver hur lång tid det tar innan hälften av kärnorna i en stor mängd av ett radioaktivt ämne har sönderfallit. Kärnenergi kan användas för elproduktion, och strålning används inom vården. Användning behöver bedömas med hänsyn till både nytta, exponering och hur material hanteras.'],
 'Om ett prov innehåller 800 instabila kärnor återstår i genomsnitt ungefär 400 efter en halveringstid och 200 efter två.',
 'Halveringstid betyder inte att hela provet är borta efter två halveringstider.',
 [['Halveringstid','Tiden tills hälften av en stor mängd instabila kärnor har sönderfallit.'],['Jonisering','När elektroner avlägsnas från eller tillförs en atom eller molekyl.'],['Atomkärna','Atomens centrala del som innehåller protoner och vanligen neutroner.']],
 'Rita en halveringsserie med 64, 32, 16 och 8 markeringar. Förklara varför serien är en modell för många kärnor, inte en klocka för varje enskild kärna.');
addCurriculum('phy-magnetism','Fysik','Magnetism','Från elektrisk ström till generator',
 'Elektricitet och magnetism hör ihop och gör både motorer och generatorer möjliga.',[
 'En elektrisk ström ger upphov till ett magnetfält. Om en ledning lindas till en spole kan magnetiska effekter samverka. En elektromagnet kan därför styras genom att strömmen ändras. I en elmotor används krafter mellan magnetfält för att skapa rörelse.',
 'En generator fungerar åt andra hållet: rörelse som förändrar magnetfältet genom en spole kan ge elektrisk spänning. Vind- och vattenkraftverk använder rörelse för att driva generatorer. Energi skapas inte ur ingenting, utan omvandlas. När vi jämför energikällor behöver vi också undersöka klimatpåverkan, naturpåverkan och möjligheten att få el när den behövs.'],
 'En cykeldynamo omvandlar en del av cykelns rörelseenergi till elektrisk energi och värme.',
 'En generator är en energiomvandlare, inte en källa till obegränsad energi.',
 [['Elektromagnet','En magnet vars magnetfält skapas av elektrisk ström.'],['Generator','En anordning som omvandlar rörelseenergi till elektrisk energi.'],['Induktion','När ett förändrat magnetfält ger upphov till elektrisk spänning.']],
 'Rita energikedjan i ett vattenkraftverk och jämför med ett vindkraftverk. Följ både energiomvandlingarna och påverkan på omgivningen.');
addCurriculum('chem-carbon','Kemi','Kolets kemi','Kol, näringsämnen och kemisk energi',
 'Kolatomer kan bindas i kedjor och ringar och ingår i många av livets ämnen.',[
 'Organisk kemi handlar om kolföreningar. Kolväten innehåller kol och väte, medan exempelvis alkoholer också innehåller syre. Olika uppbyggnad ger olika egenskaper. Plaster består av stora molekyler, polymerer, vars struktur påverkar hur materialet kan användas och återvinnas.',
 'Kolhydrater, fetter och proteiner innehåller kol men har olika uppbyggnad och funktioner i kroppen. Vid cellandningen omvandlas ämnen och kemisk energi blir tillgänglig för kroppens arbete. Vid fullständig förbränning av ett kolväte med tillräckligt med syre bildas koldioxid och vatten. Atomerna ordnas om; de försvinner inte.'],
 'Metan består av kol och väte. Etanol innehåller dessutom syre. Det räcker därför inte att säga att alla kolföreningar är kolväten.',
 'Organisk är en kemisk ämnesindelning och betyder inte automatiskt miljövänlig eller ekologiskt odlad.',
 [['Kolväte','En kemisk förening som bara innehåller kol och väte.'],['Polymer','En stor molekyl uppbyggd av många återkommande mindre delar.'],['Förbränning','En reaktion där ett bränsle reagerar med exempelvis syre och energi överförs.']],
 'Jämför kolhydrat, fett, protein och plast: vilka grundämnen och funktioner kan du beskriva? Markera vad som är kemisk uppbyggnad och vad som är användning.');
addCurriculum('chem-water','Kemi','Vatten och miljö','Vatten, kretslopp och ämnens väg genom miljön',
 'Vatten kan transportera ämnen utan att de alltid syns.',[
 'Vattenmolekyler kan samspela med många andra ämnen så att de löses. I en lösning är ämnet fortfarande kvar även om det inte syns. När vatten avdunstar stannar många lösta ämnen kvar. Därför kan ett vattenprov vara klart men ändå innehålla ämnen som behöver undersökas.',
 'I naturens kretslopp flyttas grundämnen mellan luft, vatten, mark och organismer. Övergödning kan uppstå när för mycket växtnäring når vatten och driver ökad tillväxt. När organiskt material bryts ned kan syre förbrukas. Vattenrening kombinerar flera metoder eftersom en enda metod inte tar bort alla slags föroreningar.'],
 'Filtrering kan skilja bort sand från vatten men tar inte automatiskt bort salt som är löst i vattnet.',
 'Klart vatten är inte ett bevis på rent eller drickbart vatten.',
 [['Lösning','En jämn blandning där ett ämne är fördelat i ett annat på partikelnivå.'],['Övergödning','Ökad tillförsel av näringsämnen som kan förändra ett ekosystem.'],['Kretslopp','Hur ämnen återkommer och flyttas mellan olika delar av ett system.']],
 'Följ vattnets väg från en sjö till kranen och vidare till reningsverket. Beskriv vilka slags ämnen olika reningssteg försöker avskilja.');
addCurriculum('chem-investigate','Kemi','Undersökningar och material','Undersöka kemiska frågor och följa ett material',
 'En kemisk undersökning behöver en tydlig fråga, jämförbara villkor och dokumenterade resultat.',[
 'Om du vill undersöka hur temperaturen påverkar hur fort något löses behöver andra viktiga villkor hållas lika. Mängd ämne, vattenvolym och omrörning kan annars påverka jämförelsen. Upprepade mätningar och en redovisning av osäkerhet gör resultatet lättare att bedöma.',
 'Material behöver också undersökas genom hela sin livscykel: råvara, tillverkning, transport, användning och hantering efteråt. Ett material som håller länge kan spara resurser, men bedömningen beror på användningen och hur det samlas in. Kemiska risker bedöms med information om ämnets egenskaper och hur människor eller miljö kan utsättas. Laborationer görs enligt lärarens instruktioner.'],
 'Två koppar med olika temperatur men också olika mängd vatten ger en osäker jämförelse av upplösningshastighet.',
 'Ett försök som ger önskat resultat en gång bevisar inte en allmän regel.',
 [['Variabel','En faktor som kan ändras eller mätas i en undersökning.'],['Livscykel','Ett materials väg från råvara till återbruk, återvinning eller avfall.'],['Felkällor','Omständigheter som kan påverka hur tillförlitligt resultatet är.']],
 'Planera ett försök på papper: fråga, vad som ändras, vad som hålls lika och vad som mäts. Låt läraren bedöma metod och säkerhet före ett praktiskt genomförande.');
