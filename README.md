# Alvas skolträning

Statisk svensk träningssida för årskurs 7: 12 ämnen, 60 frågor, återkoppling, ledtrådar, blandad tiominutersträning och lokal progression. Fristående material, inte kopplat till en viss lärobok och inte en fullständig kurs eller betygsbedömning.

## Arkitektur

`index.html` är startsida vid publiceringsroten. `style.css` innehåller responsiv design och ljust/mörkt tema. `app.js` hanterar vyer, timer, tangentbordsanvändning och localStorage. `logic.js` innehåller rättning, statistik och datumlogik. `questions.js` är frågebanken, separat från gränssnittet. Inget byggsteg, konto, backend, API-nyckel eller betald tjänst krävs. Google Fonts är en valfri extern resurs; systemtypsnitt används om den inte går att hämta.

## Lägg till frågor

Lägg till ett objekt i ämnets `questions` i `questions.js`, gärna med hjälpfunktionerna `mc`, `txt`, `tf` och `match`. Ange ett unikt stabilt id, fråga, facit, ledtråd och förklaring. `mc` använder nollbaserat index för rätt svar. `txt` tar en lista med godkända svar och ignorerar versaler, extra blanksteg och avslutande punkt. Ange alternativa korrekta formuleringar uttryckligen. Fritextfrågor används för korta, kontrollerbara svar. `match` tar par av etikett och korrekt betydelse. Ändra inte id för en befintlig fråga utan anledning eftersom progression kopplas till id. Kör tester efter innehållsändringar.

## Lokal utveckling och tester

Installera Python 3 och Node.js (18 eller senare). Inga npm-paket behövs.

```sh
python -m http.server 4173
node --test tests/*.test.js
```

Öppna http://localhost:4173/. Moduler behöver en HTTP-server. Tester kontrollerar frågebankens struktur, facit, textsvar, statistik, blandning och dagssvit. Kontrollera även flöden i en webbläsare: ämnespass, ledtråd, fel/rätt svar, matchning, avslut, tema, omladdning och blandad träning.

## Progression och integritet

Statistik ligger i `localStorage` under `alva-progress-v1`, tema under `alva-theme`. Den synkas inte mellan enheter och raderas om webbläsardata tas bort. Rättprocent räknas över alla besvarade försök. Ämneskort visar antal unika frågor som provats, inte kunskapsnivå. Dagssvit använder enhetens lokala kalenderdag. Ett pågående pass återupptas inte efter omladdning; redan besvarade frågor är sparade. Vid blockerad lagring visas ett meddelande. Inga resultat skickas till någon server. ChatGPT-knappen kopierar en prompt; den skickar inga resultat eller uppgifter automatiskt.

## Publicering på GitHub Pages

Pusha filerna till `main` i `Thetobias83/alva-skoltraning`. Välj **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → Folder: / (root) → Save**.

Måladress: https://thetobias83.github.io/alva-skoltraning/

Alla egna resurser använder relativa sökvägar och fungerar under `/alva-skoltraning/`. `.nojekyll` markerar att ingen Jekyll-bearbetning behövs. Ingen Actions-konfiguration behövs vid publicering från branch.
