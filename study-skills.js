// Egna lättlästa introduktioner. Metoderna är stöd, inte löften om ett visst betyg.
export const STUDY_VIDEOS={
 notes:{title:'Anteckna smart',time:'1 min',url:'https://urplay.se/program/215469-orka-plugga-anteckna-smart',prompt:'Välj ett anteckningstips som du vill prova på nästa lektion.'},
 focus:{title:'Plugga effektivt',time:'4 min',url:'https://urplay.se/program/219574-orka-plugga-plugga-effektivt',prompt:'Vilken liten förändring kan göra ditt nästa pluggpass lättare?'},
 memory:{title:'Förbättra minnet med loci-metoden',time:'3 min',url:'https://urplay.se/program/217196-orka-plugga-forbattra-minnet-med-loci-metoden',prompt:'Välj tre platser du känner. Vilken sak vill du minnas på varje plats?'},
 reading:{title:'Orka plugga – Lässtrategier',time:'Flera korta filmer',url:'https://urplay.se/serie/201900-orka-plugga-lasstrategier',prompt:'Välj en film, pausa efteråt och berätta ett lästips med egna ord.'}
};
export const STUDY_LESSONS=[];
function studyChapter(id,topic,title,intro,paragraphs,steps,example,mistake,recall,answer,terms,video){
 STUDY_LESSONS.push({id:'study-'+id,subject:'Studieteknik',topics:[topic],title,intro,paragraphs,steps,example,mistake,recall,answer,terms,video,activity:'Välj en liten uppgift i ett annat skolämne. Prova metoden där och jämför sedan med boken vad du förstod och vad du behöver öva igen.'});
}
studyChapter('start','Komma igång','Börja litet – ett lugnt pluggpass',
 'Du behöver inte göra allt på en gång. Välj en liten sak att börja med.',[
 '”Plugga historia” är ett stort mål. ”Förklara skillnaden mellan republik och kejsardöme” är lättare att börja med. Ta fram rätt sida och bestäm vad du vill kunna efter passet.',
 'Prova till exempel tio minuter med en uppgift. Lägg undan sådant som stör. Ta en kort paus efteråt och bestäm om du vill fortsätta. Tiden är ett förslag, inte en regel för alla.',
 'Avsluta genom att säga vad du lärde dig och skriva nästa lilla steg. Om uppgiften är oklar: be läraren visa ett exempel. Du ska inte behöva gissa vad som förväntas.'],
 ['Välj en liten uppgift.','Ta fram materialet och lägg undan störningar.','Arbeta en kort stund och ta paus.','Säg vad du kan nu och välj nästa steg.'],
 'I stället för ”gör all kemi”: läs om grundämnen och förklara ett exempel utan att titta.',
 'Ett långt pass är inte automatiskt ett bra pass. Det viktiga är vad du gör och förstår.',
 'Hur kan du göra uppgiften ”plugga till historiaprovet” mindre?',
 'Jag kan börja med att förklara tre ord om romartiden. Sedan kontrollerar jag förklaringarna i boken.',
 [['Delmål','En liten och tydlig del av en större uppgift.'],['Fokus','Att rikta uppmärksamheten mot det du gör just nu.'],['Paus','Ett kort avbrott från arbetet.']], 'focus');
studyChapter('recall','Minnas aktivt','Dölj texten och försök minnas',
 'Träna på att hämta fram kunskap ur minnet. Det kallas aktiv återkallning.',[
 'Läs en liten bit som du vill förstå. Dölj sedan texten. Säg eller skriv vad du minns, även om svaret inte blir perfekt. Du kan till exempel svara på ”Vad betyder ordet?” eller ”Varför hände detta?”.',
 'Öppna texten igen. Jämför och rätta det som saknas eller blev fel. Försök sedan en gång till. Kontrollen är viktig så att du inte tränar in ett felaktigt svar.',
 'Att ett stycke ser bekant ut är inte samma sak som att kunna förklara det. Om du inte minns: läs en mindre bit eller använd en ledtråd. Det är en övning, inte ett prov på hur duktig du är.'],
 ['Läs en kort bit.','Dölj texten.','Förklara utan att titta.','Kontrollera, rätta och prova igen.'],
 'Läs om ett grundämne. Dölj texten och säg: ”Ett grundämne innehåller bara en sorts atomer.” Kontrollera sedan förklaringen.',
 'Att läsa samma mening många gånger visar inte säkert att du kan använda kunskapen själv.',
 'Varför ska du öppna texten igen efter att du försökt minnas?',
 'För att kontrollera svaret och rätta missförstånd innan jag övar igen.',
 [['Aktiv återkallning','Att försöka hämta fram kunskap ur minnet utan att först titta på svaret.'],['Återkoppling','Information om vad som stämmer och vad som behöver ändras.'],['Ledtråd','Lite hjälp som kan få dig att komma vidare.']], 'focus');
studyChapter('spacing','Repetition','Repetera lite på flera dagar',
 'Återvänd till samma kunskap vid flera tillfällen, i stället för att göra allt sista kvällen.',[
 'Utspridd repetition betyder att du lämnar tid mellan övningarna. Du kan till exempel öva något i dag, prova igen i morgon och återkomma senare i veckan. Det är ett exempel på en plan, inte ett perfekt schema för alla.',
 'Börja nästa gång med att försöka minnas utan boken. Kontrollera sedan. Öva mer på sådant som ännu är svårt, men återkom ibland också till det du kan. Ett gloskort fungerar bäst när du försöker svara innan du vänder det.',
 'Om du har glömt något är planen inte förstörd. Läs förklaringen, pröva igen och gör nästa uppgift lagom liten. Be om hjälp om du kan orden men inte förstår sambandet.'],
 ['Välj några få frågor eller glosor.','Försök svara innan du tittar.','Kontrollera och rätta.','Skriv när du ska prova nästa gång.'],
 'Måndag: lär fem tyska glosor. Tisdag: testa dem utan svaren. Torsdag: testa igen och använd dem i meningar.',
 'Ett visst antal dagar passar inte alla uppgifter. Anpassa efter vad du minns och när kunskapen behövs.',
 'Hur kan du sprida ut pluggandet om provet är nästa vecka?',
 'Jag väljer flera korta tillfällen. Varje gång testar jag först vad jag minns, kontrollerar och väljer det som behöver mer övning.',
 [['Utspridd repetition','Att återkomma till samma innehåll vid flera tillfällen med tid emellan.'],['Gloskort','Ett kort med en fråga eller ett ord på ena sidan och svaret på den andra.'],['Repetera','Att återvända till sådant du redan har arbetat med.']], 'focus');
studyChapter('notes','Anteckna','Anteckna med stödord och egna ord',
 'Bra anteckningar hjälper dig att förstå. Du behöver inte skriva av allt.',[
 'Skriv ämne, datum och var informationen finns. Lyssna eller läs efter huvudidén, viktiga begrepp och ett exempel. Skriv korta stödord och visa samband med pilar. Sätt ett frågetecken vid något du behöver fråga om.',
 'Prova ett papper med två spalter. Till vänster skriver du en fråga, som ”Vad är en republik?”. Till höger skriver du din korta förklaring och ett exempel. Längst ned skriver du en eller två meningar om det viktigaste.',
 'Efter lektionen: kontrollera anteckningarna och fyll i luckor. Dölj sedan svarsspalten och använd frågorna för repetition. Du kan skriva på papper eller digitalt. Välj det som hjälper dig att hinna tänka.'],
 ['Skriv ämne, datum och källa.','Välj några viktiga ord och ett exempel.','Skriv en fråga till varje huvudidé.','Kontrollera och använd frågorna för att testa dig själv.'],
 'Fråga: Vad är en republik? Stödord: ingen ärftlig monark, politiska ämbeten. Exempel: den romerska republiken; alla invånare hade inte lika inflytande.',
 'Om allt blir avskrivet kan du missa själva förklaringen. Välj det som hjälper dig svara på uppgiften.',
 'Hur kan en anteckning bli en fråga att öva på?',
 'Jag skriver till exempel ”Vad betyder republik?” i vänsterspalten. Sedan döljer jag förklaringen och försöker svara.',
 [['Stödord','Ett kort ord eller uttryck som hjälper dig återge en större tanke.'],['Frågespalt','En del av anteckningen där du skriver frågor att öva på.'],['Sammanfattning','En kort återgivning av det viktigaste med egna ord.']], 'notes');
studyChapter('text','Viktig information','Hitta det viktigaste i en faktatext',
 'Börja med frågan: Vad behöver jag få reda på?',[
 'Titta på rubriker, bilder och uppgiften innan du läser. De hjälper dig se vad texten handlar om. Läs sedan ett stycke i taget. Stanna vid ord som är viktiga men oklara och ta reda på vad de betyder.',
 'Fråga efter varje stycke: ”Vad vill författaren förklara här?”. Leta efter definitioner, orsaker, följder och jämförelser. Välj några nyckelord som hjälper dig svara på uppgiften. Ett exempel kan göra en idé tydlig, men alla detaljer behöver inte följa med.',
 'Skriv en kort mening om styckets viktigaste idé med egna ord. Kontrollera den mot texten. Första meningen kan vara viktig, men den är inte alltid huvudidén. Vad som är relevant beror också på frågan du arbetar med.'],
 ['Läs uppgiften och rubrikerna.','Läs ett kort stycke.','Välj huvudidé och några nyckelord.','Förklara och kontrollera mot texten.'],
 'Frågan är varför romarna byggde vägar. Då är transporter av soldater och varor viktigare än färgen på en viss vägsten.',
 'Om nästan hela texten är gulmarkerad har du ännu inte valt ut det viktigaste.',
 'Vilken fråga kan hjälpa dig välja nyckelord?',
 'Vilka ord behöver jag för att förklara huvudidén och svara på just min uppgift?',
 [['Huvudidé','Det viktigaste budskapet eller sambandet i ett stycke.'],['Nyckelord','Ord som bär viktig information för frågan du undersöker.'],['Detalj','En mindre uppgift som kan vara mer eller mindre viktig beroende på frågan.']], 'reading');
studyChapter('explain','Sammanfatta och förstå','Förklara enkelt – och upptäck luckorna',
 'Testa om du förstår genom att förklara för någon som ännu inte kan ämnet.',[
 'Välj en idé och förklara den med vanliga ord. Använd ett exempel och säg hur delarna hänger ihop. Om du bara radar upp ord kan det vara svårt att se om du förstått sambandet.',
 'När du fastnar har du hittat något att undersöka. Skriv en tydlig fråga och gå tillbaka till rätt del av boken. Du kan också fråga en lärare. Förklara sedan på nytt utan att läsa upp förklaringen.',
 'En tankekarta kan hjälpa dig se samband. Skriv ämnet i mitten och några grenar med begrepp runtom. Skriv ord på pilarna, som ”leder till” eller ”är ett exempel på”. Då visar kartan mer än bara en lista.'],
 ['Välj en idé.','Förklara enkelt och ge ett exempel.','Markera var du fastnar.','Ta reda på svaret och försök igen.'],
 '”Avdunstning är när flytande vatten blir vattenånga. En vattenpöl kan därför bli mindre utan att vattnet rinner bort.”',
 'Egna ord får inte ändra innebörden. Jämför din sammanfattning med källan.',
 'Vad gör du om du kan ett ord men inte kan förklara det?',
 'Jag tar reda på betydelsen, hittar ett exempel och försöker förklara igen med egna ord.',
 [['Samband','Hur saker hänger ihop, till exempel en orsak och en följd.'],['Tankekarta','En bild där begrepp ordnas runt ett ämne och kopplas ihop.'],['Kunskapslucka','Något du ännu inte förstår eller kan förklara.']], 'reading');
studyChapter('mnemonics','Minnesknep','Minnesknep – bilder, grupper och platser',
 'Ett minnesknep kan hjälpa dig komma ihåg en lista. Du behöver ändå förstå vad orden betyder.',[
 'Du kan gruppera sådant som hör ihop. Till exempel kan ord om romartiden sorteras under styre, vardag och religion. Förklara varför varje ord hör till gruppen. Det gör listan mer meningsfull.',
 'Du kan också koppla en tydlig inre bild till något du vill minnas. Med platsmetoden tänker du på en bekant väg, som hallen, köket och ditt rum. Lägg en påhittad bild på varje plats och gå sedan vägen i tanken.',
 'Använd knepet för att komma igång med minnet, inte för att ersätta förklaringar. Kontrollera alltid fakta. Vissa knep passar en viss uppgift bättre än en annan; du behöver inte ha en särskild ”lärstil”.'],
 ['Välj högst några få saker.','Gruppera dem eller välj bekanta platser.','Koppla ett ord till varje bild.','Testa minnet och förklara sedan varje ord.'],
 'I hallen tänker du på en senator, i köket på en soldat och i ditt rum på en akvedukt. Bilderna påminner om orden; betydelserna lär du separat.',
 'Att minnas en ordlista är inte samma sak som att förstå varför något hände.',
 'Vad behöver du göra utöver att minnas ordet akvedukt?',
 'Jag behöver kunna förklara att det är en anläggning som leder vatten och ge ett exempel på varför den behövdes.',
 [['Platsmetoden','Att koppla det du vill minnas till platser du kan föreställa dig i en viss ordning.'],['Association','En koppling i tanken mellan två saker.'],['Gruppering','Att ordna sådant som hör ihop i mindre grupper.']], 'memory');
studyChapter('exam','Inför prov','Plugga till prov utan att gissa vad du kan',
 'Ta reda på vad provet gäller. Gör sedan små frågor som visar vad du behöver öva.',[
 'Börja med lärarens provområden. Skriv några frågor där du behöver förklara, jämföra eller ge exempel. Ett ord kan behöva både en definition och en förklaring av hur det används.',
 'Försök svara utan stöd och kontrollera sedan med materialet. Sortera frågorna i ”kan förklara”, ”behöver öva” och ”behöver fråga om”. Det är en planeringshjälp, inte ett betyg. Lägg mer tid på det som är oklart.',
 'Om svaret blev fel, undersök varför. Missförstod du ett ord, glömde du ett steg eller svarade du på en annan fråga? Skriv en liten nästa uppgift. Om planen känns för stor kan du be en vuxen eller läraren hjälpa dig dela upp den.'],
 ['Ta fram lärarens områden.','Gör frågor som kräver förklaring.','Svara utan stöd och kontrollera.','Välj nästa lilla övning eller fråga om hjälp.'],
 '”Vad är en kejsare?” testar ett begrepp. ”Hur ändrades makten från republik till kejsardöme?” kräver också ett resonemang.',
 'Rätt svar i ett flervalsquiz visar inte ensamt att du kan utveckla ett resonemang på provet.',
 'Vad kan du göra med en fråga du svarat fel på?',
 'Jag tar reda på vad som blev fel, läser rätt förklaring och försöker svara igen utan stöd senare.',
 [['Självtest','En övning där du försöker svara och sedan kontrollerar vad du kan.'],['Provområde','Det innehåll läraren anger att provet handlar om.'],['Resonemang','En förklaring där du utvecklar hur saker hänger ihop och ger stöd för tankarna.']], 'focus');
