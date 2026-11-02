# Alvas skolträning – Smart webb

Publicerad på https://thetobias83.github.io/alva-skoltraning/.

Uppdatering 30 oktober 2026: **Lär dig** innehåller 100 läsavsnitt i 16 skolämnen, med minst fem avsnitt per ämne. Längre förklaringar följs av exempel, ordlistor, vanliga missförstånd och egen återberättelse. Religion har nio avsnitt, däribland kristendom, islam, judendom, buddhism och hinduism, samt en jämförelsetabell. Matematikens och kemins tidigare texter har byggts ut. Romartidens sex avsnitt och särskilda övningsprov finns kvar. Uppläsning beror på enhetens röster. Ingen text i återberättelsefältet skickas eller sparas.

`lessons.js` innehåller texterna, `learning.js` hanterar läsvyn och kontext vid övningar. Se [RESEARCH.md](RESEARCH.md) för granskade projekt, inspirationskällor och förslag till nästa steg.

16 ämnen, 270 fasta frågor och genererade matteuppgifter. Tre nivåer, adaptiv repetition, Smart start, dagens pass, tiominutersträning, provläge, gloskort med uttal, egna glosor, elev-/föräldraöversikt, skolanteckningar, export/import och frågespecifika ChatGPT-handledarprompter. Ljust och mörkt tema.

Återställd från originalets synliga byggloggar i ChatGPT och förbättrad i Codex. Kompletterande övningsmaterial, inte en komplett kurs eller betygsbedömning. Ingen specifik läroboksserie är verifierad. Antalet frågor varierar mellan ämnen; prov har upp till tio unika frågor beroende på ämne och nivå.

## Arkitektur och frågor

Startfilen är `index.html`. `style.css` innehåller gränssnittet. `app.js` hanterar vyer och lokal progression. `core.js` innehåller rättning, provurval och importvalidering. `math.js` genererar nya matteuppgifter.

Frågebanken är separat: `data.js` innehåller originalfrågorna och ämnesindelningen, `questions.js` de tidigare text-, matchnings- och flervalsövningarna, och `extra-content.js` kompletterande frågor i idrott, HKK, bild och musik.

De nya lästexterna ligger i `knowledge.js` (religion), `subject-reading.js` (språk, NO och geografi), `more-reading.js` (samhällskunskap, teknik och historiska resonemang) och `practical-reading.js` (idrott, HKK, bild och musik). `enrichment.js` fördjupar tidigare texter. `lessons.js` samlar katalogen och kopplar frågor till rätt ämne och avsnitt. `study-navigation.js` ger varje ämne en lektionsöversikt. `knowledge-questions.js` innehåller religionsfrågor och `reading-questions.js` begreppsfrågor som stödjer lästexterna. Begreppsfrågor är inte en bedömning av elevens förmåga att utveckla resonemang.

Lägg till frågor med unika stabila id:n och tydliga förklaringar. I originalbanken används `s` (ämne), `t` (område), `l` (nivå 1–3), `q` (fråga), `a` (alternativ), `c` (nollbaserat rätt index), `e` (förklaring) och valfritt `h` (ledtråd). `questions.js` visar schemat för skrivsvar och matchning. Kör tester efter ändringar.

`logic.js` och `tests/logic.test.js` behåller den första versionens testade rättnings- och statistiklogik som referens; nuvarande webbgränssnitt använder `core.js`.

## Lokal utveckling och tester

Ingen npm-installation eller byggprocess behövs. Använd Python 3 och Node.js 18 eller senare:

```sh
python -m http.server 4174
node --test tests/*.test.js
```

Öppna http://localhost:4174/. JavaScript-moduler behöver HTTP-server vid lokal körning.

26 tester verifierar frågebank, facit, textnormalisering, statistik, importschema, provurval, rekommendationer och matematikgeneratorns samtliga grenar. Glosornas uttal beror på enhetens tillgängliga talsyntesröster. Fysisk iPhone och full tiominutersnedräkning har inte testats.

## Lokal progression

Resultat lagras enbart i webbläsaren under `alva-school-v2`. Tema lagras under `alva-smart-theme`. Inga resultat skickas till en server. Dagens aktivitet använder lokal kalenderdag. Räknaren ”i följd” avser korrekta svar i följd, inte antal dagar.

Export/import flyttar v2-progression manuellt mellan enheter eller webbplatsadresser. Import ersätter lokala data efter bekräftelse och schemavalidering. Exportera först för att behålla en säkerhetskopia. Pågående pass återupptas inte efter omladdning; redan rättade svar är sparade. Provsvar registreras först vid inlämning. Glosornas självskattning ingår inte i frågestatistiken.

Den första webbversionens data finns kvar under dess separata nyckel `alva-progress-v1`, men läses inte av v2 och kan inte direkt importeras som v2-data. Ingen äldre lagringsnyckel raderas vid uppdateringen.

## Kurser och fördjupning

Tre nybörjarkurser med sex steg vardera: C++, 3D-printning med filament och AI-verktyg. Varje steg har egen text, exempel, praktisk tankeövning och en kunskapsfråga med återkoppling. En lagerverkstad visar den förenklade relationen mellan höjd och lagerhöjd. En promptverkstad skapar redigerbar text lokalt utan AI-anrop. Utskrift sker med vuxens hjälp enligt aktuell maskinmanual; sidan styr ingen skrivare.

C++-kursen introducerar main, utskrift, variabler, villkor, loopar och funktioner. Sex kompletta C++17-exempel kan kopieras och har utfällbar förväntad utskrift. Koden visas som escaped text och körs inte i webbläsaren. Vidare läsning länkar till LearnCpp och cppreference. Ingen C++-kompilator fanns tillgänglig i utvecklingsmiljön, så exemplen är manuellt granskade men har inte kompilerats där.

Kurskryss sparas separat i `alva-courses-v1` och har egen export/import under Kurser. Import ersätter kurskryssen. Skolämnenas export och nollställning omfattar inte dessa kryss. Inga egna övningstexter sparas. 26 automatiska tester omfattar även kursimport, lagerberäkning och fördjupningslänkarnas ämnestäckning.

Alla 16 skolämnen och alla tre kurserna har fördjupningslänkar, både i innehållet och under Läs vidare. `references.js` innehåller avsändare, språk och kort vägledning. Källorganisationerna har inte granskat studiesidan. UR-länkarna går till ämneskataloger där eleven behöver välja nivå och program.

## Publicering

### Romartiden under Historia

Historia har en egen provförberedande undersektion med sex lektioner, nio hållpunkter i en utfällbar tidslinje och 24 frågor på tre nivåer. Den täcker överblick, republik och kejsardöme, expansion, samhällsgrupper/slaveri, religion och arv samt Västroms fall och källkritik. Varje fråga länkas tillbaka till sin relevanta förklaring via `lessonId`. Träna-knappen väljer bara ämnesområdet Romartiden. Övningsprov väljer tio olika Romfrågor och visar genomgång först efter inlämning; områdesväljaren finns även i Provläge. Resultaten använder befintlig historik under Historia / Romartiden.

Materialet är en bred introduktion för årskurs 7, inte en verifierad återgivning av en viss lärares prov. Muntliga och skriftliga resonemang övas separat; flervalsprovet ger inte skolbetyg. Totalt 26 automatiska tester samt ett genomfört lokalt provflöde kontrollerar bland annat urvalet och kopplingen till lektionerna.

GitHub Pages använder **Deploy from a branch → main → / (root)**. Alla egna resurser använder relativa sökvägar och fungerar under `/alva-skoltraning/`. `.nojekyll` finns i roten. Pusha ändringar till main för ny publicering.

Webbplatsen kan även publiceras på annan statisk webbhosting genom att använda rotens HTML-, CSS- och JavaScript-filer. Ingen backend, API-nyckel, betald API eller PWA-installation behövs. Sites kunde inte användas i publiceringssessionen eftersom verktyget svarade att det inte var tillgängligt.

## Läroplansutbyggnad, 1 november 2026

44 nya avsnitt ger totalt 144 lektioner och 314 fasta frågor. Alla 16 ämnen har en utfällbar översikt över centralt innehåll i Lgr22 åk 7–9 med direktlänk till Skolverkets ämneskursplan. Tyska avser språkval. Fördelningen mellan årskurser bestäms av skolan.

De nya avsnitten innehåller förklarande stycken, exempel, vanliga missförstånd, begrepp, återberättelse och en undersökande uppgift. Nya områden omfattar bland annat statistik, funktioner, litteratur, språkvariation, universum, strålning, bioteknik, världskrig, minoriteter, digitala system, konsumenträtt, bildprocesser och musikaliskt samspel. Detta är en fortsatt utbyggnad, inte ett påstående om fullständig läroplanstäckning. Praktiska färdigheter och muntliga resonemang behöver undervisning och kan inte bedömas genom quiz.

28 automatiska tester kontrollerar bland annat ämneskopplingar, källor, fokuserade frågor och att simning uttryckligen hänvisar till praktisk undervisning. Läroplanssammanfattningarna och lästexterna är självständigt skrivna; Skolverket har inte granskat webbplatsen.

## Studieteknik, 2 november 2026

Ett sjuttonde, kompletterande ämne med åtta lättlästa lektioner: komma igång, aktiv återkallning, utspridd repetition, anteckningar, viktig information i text, egna förklaringar, minnesknep och provplanering. Varje avsnitt har fyra konkreta steg, exempel, återberättelse och video hos UR. Studieteknik har ingen påhittad egen nationell ämneskursplan.

Textverkstaden låter eleven välja relevanta meningar i en egen övningstext om romerska vägar. Återkopplingen förklarar varje val i relation till frågan. Anteckningsverkstaden ger en enkel fråge-/stödords-/sammanfattningsmall. Skrivytorna sparas inte eller skickas och återställs vid byte av avsnitt. Ingen automatisk bedömning av elevens fria text görs. Videor öppnas hos UR utan inbäddad spelare eller automatisk uppspelning. UR kan kräva inloggning; lästexter och verkstäder fungerar utan filmen.

Totalt 152 lektioner och 338 fasta frågor. Studieteknik har 24 situationsfrågor på tre nivåer. 30 automatiska tester, inklusive ämneskoppling, nivåer, videolänkar och textverkstadens relevansåterkoppling.

## Office, 2 november 2026

En egen Office-knapp öppnar tre kurser i Word, Excel och PowerPoint. Varje kurs har nio steg fördelade på Grund, Fortsättning och Fördjupning. De 27 stegen innehåller fyra praktiska instruktioner, exempel, uppgift, två kontrollpunkter och en kunskapsfråga. Befintliga kurser i C++, 3D-printning och AI behålls; totalt sex kurser. Kurskryss använder samma lokala lagring och export/import som tidigare.

Word går från skrivande och sparande till rubrikformat, granskning, källor och rapport. Excel går från celler till formler, tabeller, diagram, absoluta referenser, OM, XLETAUPP och pivottabeller. PowerPoint går från enkla bilder till talarstöd, data, gemensamma layouter, tillgänglighet och slutprojekt. Fördjupningarna är fortsatta övningar, inte en fullständig expertcertifiering.

Excel-övningsdata skapas lokalt som UTF-8-CSV med BOM och semikolon. Sex påhittade inköpsrader ger 195 kr totalt, Frukt 73 kr och Skolmaterial 122 kr. CSV innehåller inga formler, makron eller personuppgifter. Eleven bygger formlerna själv och sparar arbetsfilen som .xlsx. Nedladdningsdialogen kunde inte verifieras eftersom webbläsarverktygets väntan hängde sig; filinnehåll och kontrollvärden är automatiskt testade. Alla 27 steg och sex kursval kontrollerades i webbläsaren.

Office-programmen körs inte här. Praktiken görs i en Office-version eleven har tillgång till; menyer och funktioner varierar. XLETAUPP är markerad som otillgänglig i Excel 2016/2019. Microsofts egna guider och filmartiklar länkas som fördjupning. 33 automatiska tester godkända.
