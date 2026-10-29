# Alvas skolträning – Smart webb 2.1

Publicerad på https://thetobias83.github.io/alva-skoltraning/.

16 ämnen, 139 fasta frågor och genererade matteuppgifter. Tre nivåer, adaptiv repetition, Smart start, dagens pass, tiominutersträning, provläge, gloskort med uttal, egna glosor, elev-/föräldraöversikt, skolanteckningar, export/import och frågespecifika ChatGPT-handledarprompter. Ljust och mörkt tema.

Återställd från originalets synliga byggloggar i ChatGPT och förbättrad i Codex. Kompletterande övningsmaterial, inte en komplett kurs eller betygsbedömning. Ingen specifik läroboksserie är verifierad. Antalet frågor varierar mellan ämnen; prov har upp till tio unika frågor beroende på ämne och nivå.

## Arkitektur och frågor

Startfilen är `index.html`. `style.css` innehåller gränssnittet. `app.js` hanterar vyer och lokal progression. `core.js` innehåller rättning, provurval och importvalidering. `math.js` genererar nya matteuppgifter.

Frågebanken är separat: `data.js` innehåller originalfrågorna och ämnesindelningen, `questions.js` de tidigare text-, matchnings- och flervalsövningarna, och `extra-content.js` kompletterande frågor i idrott, HKK, bild och musik.

Lägg till frågor med unika stabila id:n och tydliga förklaringar. I originalbanken används `s` (ämne), `t` (område), `l` (nivå 1–3), `q` (fråga), `a` (alternativ), `c` (nollbaserat rätt index), `e` (förklaring) och valfritt `h` (ledtråd). `questions.js` visar schemat för skrivsvar och matchning. Kör tester efter ändringar.

`logic.js` och `tests/logic.test.js` behåller den första versionens testade rättnings- och statistiklogik som referens; nuvarande webbgränssnitt använder `core.js`.

## Lokal utveckling och tester

Ingen npm-installation eller byggprocess behövs. Använd Python 3 och Node.js 18 eller senare:

```sh
python -m http.server 4174
node --test tests/*.test.js
```

Öppna http://localhost:4174/. JavaScript-moduler behöver HTTP-server vid lokal körning.

Tolv tester verifierar frågebank, facit, textnormalisering, statistik, importschema, provurval, rekommendationer och matematikgeneratorns samtliga grenar. Glosornas uttal beror på enhetens tillgängliga talsyntesröster. Fysisk iPhone och full tiominutersnedräkning har inte testats.

## Lokal progression

Resultat lagras enbart i webbläsaren under `alva-school-v2`. Tema lagras under `alva-smart-theme`. Inga resultat skickas till en server. Dagens aktivitet använder lokal kalenderdag. Räknaren ”i följd” avser korrekta svar i följd, inte antal dagar.

Export/import flyttar v2-progression manuellt mellan enheter eller webbplatsadresser. Import ersätter lokala data efter bekräftelse och schemavalidering. Exportera först för att behålla en säkerhetskopia. Pågående pass återupptas inte efter omladdning; redan rättade svar är sparade. Provsvar registreras först vid inlämning. Glosornas självskattning ingår inte i frågestatistiken.

Den första webbversionens data finns kvar under dess separata nyckel `alva-progress-v1`, men läses inte av v2 och kan inte direkt importeras som v2-data. Ingen äldre lagringsnyckel raderas vid uppdateringen.

## Publicering

GitHub Pages använder **Deploy from a branch → main → / (root)**. Alla egna resurser använder relativa sökvägar och fungerar under `/alva-skoltraning/`. `.nojekyll` finns i roten. Pusha ändringar till main för ny publicering.

Webbplatsen kan även publiceras på annan statisk webbhosting genom att använda rotens HTML-, CSS- och JavaScript-filer. Ingen backend, API-nyckel, betald API eller PWA-installation behövs. Sites kunde inte användas i publiceringssessionen eftersom verktyget svarade att det inte var tillgängligt.
