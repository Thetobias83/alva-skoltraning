// Each question has a stable id for local progress. Add more questions to any subject.
const mc=(id,prompt,options,answer,hint,explanation)=>({id,type:'choice',prompt,options,answer,hint,explanation});
const txt=(id,prompt,answers,hint,explanation)=>({id,type:'text',prompt,answers,hint,explanation});
const tf=(id,prompt,answer,hint,explanation)=>mc(id,prompt,['Sant','Falskt'],answer?0:1,hint,explanation);
const match=(id,prompt,pairs,hint,explanation)=>({id,type:'match',prompt,pairs,hint,explanation});
export const subjects=[
{id:'sv',name:'Svenska',icon:'Aa',description:'Språk, läsning & berättande',questions:[
mc('sv1','Vilket ord är ett verb?',['Glädje','Springer','Snabb','Under'],1,'Vilket ord beskriver något man gör?','Springer är ett verb. Verb beskriver handlingar eller tillstånd.'),
txt('sv2','Vilken pluralform har ”en bok”?',['böcker'],'En bok, flera …','Bok får omljud i plural: böcker.'),
tf('sv3','En källa är alltid trovärdig om texten har många delningar.',false,'Fundera på om popularitet bevisar att något är sant.','Undersök avsändare, belägg, syfte och datum. Många delningar garanterar inte sanningshalt.'),
match('sv4','Para ihop ordklass och exempel.',[['Substantiv','skola'],['Adjektiv','nyfiken'],['Pronomen','hon']],'Substantiv namnger, adjektiv beskriver.','Skola är ett substantiv, nyfiken ett adjektiv och hon ett pronomen.'),
mc('sv5','Vad är en liknelse?',['Havet är en spegel.','Havet är blått.','Havet är som en spegel.'],2,'Leta efter ett jämförelseord.','En liknelse jämför med exempelvis ”som”. ”Havet är en spegel” är i stället en metafor.') ]},
{id:'ma',name:'Matematik',icon:'∑',description:'Tal, mönster & problemlösning',questions:[
txt('ma1','En tröja kostar 240 kr. Priset sänks med 25 %. Vad blir det nya priset i kronor?',['180','180 kr'],'25 % är en fjärdedel. Vad är 240 delat med 4?','Rabatten är 240 × 0,25 = 60 kr. Det nya priset är 240 − 60 = 180 kr.'),
mc('ma2','Vad är 3 + 4 × 2?',['14','11','10','9'],1,'Multiplikation räknas före addition.','Först 4 × 2 = 8. Sedan 3 + 8 = 11.'),
txt('ma3','Lös ekvationen: 3x + 5 = 20. Vad är x?',['5'],'Subtrahera 5 från båda sidor.','3x = 15. Dela båda sidor med 3: x = 5.'),
tf('ma4','0,4 är större än 0,35.',true,'Skriv 0,4 med två decimaler.','0,4 = 0,40. Fyrtio hundradelar är fler än trettiofem hundradelar.'),
txt('ma5','En rektangel är 8 cm lång och 3 cm bred. Vad är arean i cm²?',['24','24 cm²','24 cm2'],'Area = längd × bredd.','8 × 3 = 24 cm². Omkrets och area är olika storheter.') ]},
{id:'en',name:'Engelska',icon:'En',description:'Ord, grammatik & förståelse',questions:[
mc('en1','Choose the correct sentence.',['She have a bike.','She has a bike.','She having a bike.'],1,'Med he, she och it används en särskild form av have.','She has a bike är rätt. He/she/it följs av has i presens.'),
txt('en2','Skriv ”go” i preteritum (dåtid).',['went'],'Det är ett oregelbundet verb.','Go – went – gone. Exempel: Yesterday I went to school.'),
match('en3','Para ihop engelska och svenska.',[['Because','därför att'],['Although','fastän'],['However','dock']],'Orden hjälper dig koppla ihop tankar.','Because anger orsak, although inleder en medgivande bisats och however uttrycker kontrast.'),
tf('en4','”Their” betyder ”de är”.',false,'Jämför their med they’re.','Their betyder deras. They’re är en sammandragning av they are.'),
txt('en5','Complete: There ___ two books on the desk.',['are'],'Books är plural.','There are används för plural. There is används för singular.') ]},
{id:'de',name:'Tyska',icon:'De',description:'Ditt språkval · ord & samtal',questions:[
txt('de1','Hur säger du ”tack” på tyska?',['danke'],'Ordet börjar på d.','Danke betyder tack. Danke schön betyder ungefär tack så mycket.'),
mc('de2','Vilken mening betyder ”Jag heter Alva”?',['Ich heiße Alva.','Du heißt Alva.','Ich wohne in Alva.'],0,'Ich betyder jag.','Ich heiße Alva betyder Jag heter Alva. Wohnen betyder att bo.'),
match('de3','Para ihop hälsningarna.',[['Guten Morgen','god morgon'],['Guten Abend','god kväll'],['Auf Wiedersehen','adjö']],'Morgen är morgon och Abend är kväll.','Guten Morgen används på morgonen, Guten Abend på kvällen. Auf Wiedersehen är en avskedsfras.'),
tf('de4','Tyska substantiv skrivs med stor begynnelsebokstav.',true,'Titta på orden Schule och Buch.','Substantiv skrivs med stor bokstav på tyska, till exempel die Schule och das Buch.'),
txt('de5','Fyll i: Ich ___ dreizehn Jahre alt. (Jag är tretton år.)',['bin'],'Verbformen hör till sein, att vara.','Ich bin betyder jag är. Du bist betyder du är.') ]},
{id:'bi',name:'Biologi',icon:'♧',description:'Livet, kroppen & naturen',questions:[
mc('bi1','Vad behöver växter för fotosyntesen?',['Syre och socker','Ljus, vatten och koldioxid','Bara jord'],1,'Tänk på vad blad tar upp från luften.','Med ljusenergi omvandlar växten vatten och koldioxid till druvsocker och syre.'),
txt('bi2','Vad kallas cellens struktur som innehåller det mesta av DNA:t i en djurcell?',['cellkärnan','cellkärna'],'Den är en kärna i cellen.','Cellkärnan innehåller det mesta av cellens DNA, som bär genetisk information.'),
tf('bi3','Svampar är växter.',false,'Kan svampar själva utföra fotosyntes?','Svampar tillhör ett eget rike. De tar upp näring från organiskt material.'),
match('bi4','Para ihop organismer med deras roll.',[['Gräs','producent'],['Hare','konsument'],['Många svampar','nedbrytare']],'En producent tillverkar organiska ämnen.','Gräs producerar genom fotosyntes, haren äter växter och många svampar bryter ner dött material.'),
mc('bi5','Vad händer med energin längs en näringskedja?',['All energi förs vidare','En del övergår till värme vid varje steg','Energi skapas i varje djur'],1,'Organismer använder energi för att leva.','En stor del av energin används i livsprocesser och avges som värme. Mindre energi förs vidare till nästa steg.') ]},
{id:'fy',name:'Fysik',icon:'↗',description:'Krafter, energi & rörelse',questions:[
mc('fy1','Vilken enhet används för kraft?',['Kilogram','Newton','Liter'],1,'Enheten är uppkallad efter en fysiker.','Kraft mäts i newton (N). Massa mäts i kilogram.'),
txt('fy2','Du cyklar 12 km på 1 timme. Vad är medelhastigheten i km/h?',['12','12 km/h'],'Hastighet = sträcka delat med tid.','12 km / 1 h = 12 km/h.'),
tf('fy3','Ljud kan färdas genom ett fullständigt vakuum.',false,'Ljud är vibrationer i materia.','Ljud behöver ett medium, exempelvis luft eller vatten. I vakuum finns ingen materia som kan föra ljudet vidare.'),
match('fy4','Para ihop storhet och enhet.',[['Tid','sekund'],['Energi','joule'],['Elektrisk ström','ampere']],'Ström mäts med en amperemeter.','Tid mäts i sekunder (s), energi i joule (J) och ström i ampere (A).'),
mc('fy5','Vilken energi ökar när du lyfter en bok?',['Lägesenergi','Kärnenergi','Ingen energi'],0,'Boken får större höjd över golvet.','Bokens lägesenergi i jordens gravitationsfält ökar när den lyfts.') ]},
{id:'ke',name:'Kemi',icon:'⚗',description:'Ämnen, atomer & reaktioner',questions:[
mc('ke1','Vad består en vattenmolekyl, H₂O, av?',['Två syre och ett väte','Två väte och ett syre','Två kol och ett syre'],1,'Den lilla tvåan hör till H.','H står för väte och O för syre. H₂O har två väteatomer och en syreatom.'),
txt('ke2','Vad kallas övergången från fast form till flytande form?',['smältning','smälta'],'Tänk på en isbit i ett varmt rum.','Vid smältning övergår ett ämne från fast till flytande form.'),
tf('ke3','När socker löser sig i vatten försvinner sockrets materia.',false,'Går sockret att få tillbaka genom att låta vattnet avdunsta?','Sockret finns kvar, fördelat mellan vattenmolekylerna. Materian har inte försvunnit.'),
match('ke4','Para ihop aggregationstillstånd och exempel vid rumstemperatur.',[['Fast','järn'],['Flytande','vatten'],['Gas','syre']],'Tänk på formen och om ämnet fyller en behållare.','Vid vanlig rumstemperatur är järn fast, vatten flytande och syre en gas.'),
mc('ke5','Vad kännetecknar ett grundämne?',['Det består av en sorts atomer','Det måste vara en metall','Det innehåller alltid vatten'],0,'Jämför syre med vatten.','Ett grundämne består av atomer med samma antal protoner. En kemisk förening innehåller flera grundämnen.') ]},
{id:'ge',name:'Geografi',icon:'◎',description:'Platser, klimat & vår planet',questions:[
mc('ge1','Vad är skillnaden mellan väder och klimat?',['Det är samma sak','Klimat beskriver vädermönster över lång tid','Väder mäts bara på vintern'],1,'Jämför dagens regn med ett områdes vanliga förhållanden.','Väder är atmosfärens tillstånd vid en viss tidpunkt. Klimat beskriver mönster över längre perioder.'),
txt('ge2','Vad kallas den tänkta linjen vid 0° latitud?',['ekvatorn','ekvator'],'Den delar jorden i ett norra och ett södra halvklot.','Ekvatorn är 0° latitud. Latitud anger läge norr eller söder om ekvatorn.'),
tf('ge3','Jordens plattor rör sig mycket långsamt.',true,'Rörelsen mäts ofta i centimeter per år.','Plattektonik innebär att jordens litosfärplattor rör sig. Det kan bland annat orsaka jordbävningar.'),
match('ge4','Para ihop begrepp och betydelse.',[['Erosion','material nöts bort och transporteras'],['Urbanisering','större andel bor i städer'],['Migration','människor flyttar mellan platser']],'Urban betyder något som hör till staden.','Erosion formar landskap. Urbanisering och migration beskriver olika befolkningsförändringar.'),
txt('ge5','En karta har skala 1:100 000. Hur många kilometer motsvarar 1 cm på kartan?',['1','1 km'],'100 000 cm = 1 000 meter.','1 cm motsvarar 100 000 cm i verkligheten, alltså 1 kilometer.') ]},
{id:'hi',name:'Historia',icon:'⌛',description:'Spår, förändring & samband',questions:[
mc('hi1','Vad menas med en historisk primärkälla?',['En källa från tiden eller händelsen som undersöks','Den första sökträffen','Alltid en lärobok'],0,'Tänk på en dagbok skriven under en händelse.','En primärkälla kommer direkt från den tid eller händelse som undersöks. Även den behöver granskas källkritiskt.'),
txt('hi2','Vad kallas övergången från jakt och samlande till odling och djurhållning?',['jordbruksrevolutionen','den neolitiska revolutionen','neolitiska revolutionen'],'Ordet innehåller det man gör när man odlar marken.','Jordbruksrevolutionen förändrade människors försörjning och bidrog till mer bofasta samhällen.'),
tf('hi3','Två historiska källor kan beskriva samma händelse olika.',true,'Tänk på perspektiv och syfte.','Källor kan ha olika perspektiv, syften och tillgång till information. Jämför dem och undersök varför de skiljer sig.'),
match('hi4','Para ihop begreppen.',[['Kronologi','tidsordning'],['Orsak','varför något händer'],['Konsekvens','vad något leder till']],'Konsekvens handlar om följder.','Kronologi ordnar händelser i tid. Orsaker förklarar bakgrund och konsekvenser beskriver följder.'),
mc('hi5','Varför var floder viktiga för flera tidiga civilisationer?',['De gav vatten till odling och möjliggjorde transporter','De gjorde att mat inte behövdes','De stoppade all handel'],0,'Vad behöver en odling för att växa?','Floder gav vatten och bördig mark samt transportvägar, vilket underlättade odling, handel och större bosättningar.') ]},
{id:'sa',name:'Samhällskunskap',icon:'☷',description:'Demokrati, medier & samhälle',questions:[
mc('sa1','Vad är en viktig del av demokrati?',['Bara en person får bestämma','Fria val och möjlighet att uttrycka åsikter','Ingen får kritisera makten'],1,'Tänk på hur människor kan påverka.','Demokrati bygger bland annat på fria val, politiska rättigheter och möjligheten att granska makten.'),
txt('sa2','Vad kallas Sveriges folkvalda parlament?',['riksdagen','sveriges riksdag'],'Det har 349 ledamöter.','Riksdagen är Sveriges folkvalda parlament. Den beslutar bland annat om lagar och statens budget.'),
tf('sa3','En åsikt och ett kontrollerbart faktapåstående är samma sak.',false,'”Jag tycker” och ”Det finns” gör olika anspråk.','En åsikt uttrycker en värdering. Ett faktapåstående kan undersökas med belägg och kan visa sig sant eller falskt.'),
match('sa4','Para ihop begreppen.',[['Skatt','pengar till gemensamma utgifter'],['Budget','plan för inkomster och utgifter'],['Källkritik','granskning av information']],'En budget är en ekonomisk plan.','Skatt finansierar gemensamma verksamheter, en budget planerar ekonomin och källkritik hjälper oss bedöma information.'),
mc('sa5','Du ser en dramatisk nyhet från ett okänt konto. Vad gör du först?',['Delar direkt','Jämför med oberoende trovärdiga källor','Litar på antalet gilla-markeringar'],1,'Försök hitta ursprunget och belägg.','Granska avsändare, datum och belägg och jämför med andra oberoende källor innan du delar.') ]},
{id:'re',name:'Religion',icon:'✧',description:'Livsfrågor, tro & etik',questions:[
mc('re1','Vad handlar etik främst om?',['Tankar om rätt, fel och hur vi bör handla','Bara gamla byggnader','Hur vädret fungerar'],0,'Tänk på ett svårt val mellan olika handlingar.','Etik handlar om hur vi resonerar om rätt och fel och vad som gör en handling god.'),
txt('re2','Vad kallas tron på en enda gud?',['monoteism'],'Mono betyder en.','Monoteism betyder tro på en gud. Polyteism betyder tro på flera gudar.'),
tf('re3','Alla människor inom en religion tolkar och utövar den exakt likadant.',false,'Tänk på individ, tradition och plats.','Det finns stor variation inom religioner. Människors tolkningar och praktiker skiljer sig åt.'),
match('re4','Para ihop religion och helig text.',[['Kristendom','Bibeln'],['Islam','Koranen'],['Judendom','Tanakh']],'Tanakh är den hebreiska bibeln.','Bibeln är central inom kristendom, Koranen inom islam och Tanakh inom judendom. Traditionerna omfattar också andra texter.'),
mc('re5','Vad är ett exempel på en livsfråga?',['Hur många centimeter är en meter?','Vad gör livet meningsfullt?','Vilken buss går klockan åtta?'],1,'En livsfråga handlar om tillvaron och människans villkor.','Livsfrågor rör exempelvis mening, identitet, död och hur vi ska leva tillsammans.') ]},
{id:'te',name:'Teknik',icon:'⚙',description:'Idéer, konstruktion & lösningar',questions:[
mc('te1','Varför använder man ofta trianglar i fackverk?',['De ger stabila konstruktioner','De saknar hörn','De väger alltid ingenting'],0,'Kan en triangel ändra form utan att en sida ändrar längd?','En triangel är formstabil. Fackverk med trianglar kan fördela krafter och ge stabilitet med lite material.'),
txt('te2','Vad kallas en tidig testmodell av en produkt?',['prototyp','en prototyp'],'Ordet börjar med proto.','En prototyp används för att undersöka och förbättra en lösning innan den tillverkas färdigt.'),
tf('te3','En teknisk lösning kan både ha fördelar och skapa nya problem.',true,'Tänk på mobiltelefoners nytta och resursanvändning.','Teknik kan lösa behov men också påverka miljö, integritet och samhälle. Därför behöver lösningar värderas ur flera perspektiv.'),
match('te4','Para ihop delarna i ett styrsystem.',[['Sensor','mäter omgivningen'],['Styrenhet','bearbetar information'],['Motor','skapar rörelse']],'Tänk på en automatisk dörr.','En sensor upptäcker något, styrenheten behandlar signalen och motorn utför rörelsen.'),
mc('te5','Vad är ett bra första steg när du utvecklar en teknisk lösning?',['Förstå behovet och kraven','Välja färg direkt','Tillverka många exemplar direkt'],0,'Vilket problem ska lösas och för vem?','Genom att undersöka behov och krav kan du välja, testa och förbättra en lösning som fungerar för användaren.') ]}
];
