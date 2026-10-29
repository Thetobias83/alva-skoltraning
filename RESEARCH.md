# Lärfunktioner – undersökning och införda förbättringar

Undersökt 2026-10-29. Idéerna nedan är vår bedömning av vad som passar den här sidan; jämförelsen betyder inte att projekten har granskat eller rekommenderar vår implementation. All ny elevtext och den enkla partikelmodellen är skapade för den här webbplatsen, inte kopierade läromedel.

| Projekt | Vad vi undersökte | Vad som passar här |
|---|---|---|
| [Khan Academy: stöd under övning](https://blog.khanacademy.org/how-should-people-practice-on-khan-academy/) | Ledtrådar, lösta exempel, förklaringar och att återge resonemanget med egna ord. | Korta ämnesförklaringar före övning, exempel, vanliga missförstånd och en egen förklaringsövning. |
| [Anki: active recall och spaced repetition](https://docs.ankiweb.net/manual/background) | Aktiv framplockning ur minnet och repetition utspridd över tid. | Infört: dölj lästexten, försök formulera en egen förklaring, jämför med ett exempel. Framtida idé: särskilda repetitionsdatum för glosor. |
| [PhET: Build a Molecule](https://phet.colorado.edu/en/simulations/build-a-molecule) och [aktivitetsdesign](https://phet.colorado.edu/el/teaching-resources/virtual-workshop/science-activity-design) | Utforskande partikelmodeller och vanliga sammanblandningar av atom, molekyl och grundämne. | En liten egen modell som jämför H₂, O₂, H₂O och CO₂ med antal atomer och olika grundämnen. |
| [ChemCollective](https://chemcollective.org/) | Virtuella laborationer, handledningar och begreppstester. | Framtida idé: förutsäg först, prova en avgränsad digital modell och förklara vad som hände. Många av deras laborationer ligger på högre nivå än denna grundintroduktion. |

## Infört i denna uppdatering

- Fliken **Lär dig** är första vyn, med 28 egna korta texter i 16 ämnen.
- Kemi har sju texter: grundämnen; atomer/molekyler/föreningar; aggregationstillstånd; rena ämnen/blandningar; reaktioner; separation; pH.
- Matematik har sju texter: procent, algebra, geometri, räkneordning, bråk, sannolikhet och hastighet.
- Övriga ämnen har varsin grundintroduktion. Det är inte fullständiga läroböcker eller täckning av varje delområde.
- Exempel, vanliga missförstånd och klickbara orddefinitioner.
- Uppläsning med enhetens talsyntes, om den är tillgänglig. Ingen betald rösttjänst används.
- En egen förklaringsövning där lästext, ordlista och modell döljs. Elevens text sparas eller skickas inte och rättas inte automatiskt.
- Kort kontext vid träningsfrågor och länk till en förklaring efter fel svar.
- Länk från förklaring till träning som prioriterar samma område.

## Vad som vore klokt härnäst

1. **Repetera vid ett senare datum.** Använd resultat för att planera när en glosa behöver visas igen. Dagens adaptiva urval är inte samma sak som en full algoritm för spaced repetition.
2. **Förutsäg – prova – förklara.** Fler små, avgränsade modeller för exempelvis fasövergångar eller en balansvåg i algebra, med tydliga begränsningar för modellen.
3. **Flera ledtrådssteg per fråga.** Först begrepp, sedan metod och sist ett löst exempel. Detta kräver egen innehållsgranskning per uppgift; generiska texter bör inte låtsas vara personligt anpassade förklaringar.
4. **Min säkerhet i svaret.** Låt eleven välja säker/osäker och jämföra det med resultatet. Ett rätt gissat svar ska inte automatiskt tolkas som förståelse.
5. **Ett nytt exempel efter ett misstag.** Kontrollera om samma idé går att använda på en liknande uppgift, i stället för att bara återvisa identiskt facit.

## Sakgranskning av kemins grundbegrepp

## Fördjupningslänkar och nya kurser (29 oktober 2026)

Utvalda länkar finns i `references.js`. Sökning och läsning av originalkällor omfattade Mattecentrum, British Council, Naturhistoriska riksmuseet, Historiska museet, SMHI, Sveriges riksdag och UR:s ämneskataloger. UR:s kataloger är breda och instruktionen är att välja Grundskola 7–9 samt aktuellt område; alla program är inte nybörjarmaterial.

3D-kursen är självständigt formulerad för filamentutskrift. Vidare läsning: [Autodesks Tinkercad-övningar](https://www.tinkercad.com/learn/designs) och [Prusa Researchs introduktion](https://www.prusa3d.com/page/basics-of-3d-printing-with-josef-prusa_464/). Profil, temperatur, ventilation och handhavande ska kontrolleras mot den faktiska maskinens och materialets anvisningar. Ingen universell temperatur eller färdig G-code ges.

AI-kursens vidare läsning: [Internetstiftelsens källkritiska AI-sökning](https://internetkunskap.se/artiklar/grundkurs-i-ai/sa-soker-du-kallkritiskt-med-ai/) och [OpenAI:s officiella promptingguide](https://learn.chatgpt.com/docs/prompting). Kursen övar tydliga instruktioner, eget försök, källkontroll, integritet och redovisning av hjälp. Den lovar inte faktakorrekthet hos AI och kräver ingen specifik tjänst eller prenumeration.

### Kemibegrepp

Grundämnesbegreppet kontrollerades mot [IUPAC Gold Book: chemical element](https://goldbook.iupac.org/terms/view/C01022). Elevernas förklaring är förenklad och självständigt formulerad: samma antal protoner innebär samma grundämne. Molekyl och kemisk förening skiljs tydligt åt. O₂ består av en sorts atomer; H₂O innehåller två olika grundämnen. Texten nämner att alla föreningar inte består av separata molekyler, exempelvis koksalt.

Partikelmodellen är symbolisk: färger, storlekar, vinklar och avstånd visar inte en exakt fysikalisk bild. Den visar färdiga exempel och kan inte användas för att avgöra vilka nya molekyler som faktiskt kan bildas.
