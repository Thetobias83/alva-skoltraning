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

## Utbyggnad av alla skolämnen, 30 oktober 2026

66 nya självständigt skrivna lästexter har lagts till och tidigare översikter, kemi- och matematiktexter har fått förklarande stycken. Totalt 100 avsnitt och cirka 22 000 ord i lästexter, exempel och återberättelseövningar. Detta är ett utökat komplement, inte en fullständig eller externt granskad lärobok för hela högstadiet.

Religionsmaterialet skiljer traditionernas trosutsagor från historiska påståenden och betonar variation inom grupper. De namngivna religionerna har egna avsnitt och frågor. Jämförelsen använder samma slags frågor för alla fem religioner. Religionsfrihet, icke-religiösa livsåskådningar och etiska resonemang behandlas separat.

Fördjupningslänkarna i `references.js` kompletterades med [Svenska kyrkans förklaring av treenigheten](https://www.svenskakyrkan.se/kristentro/treenigheten), [dop](https://www.svenskakyrkan.se/kristentro/dopet) och [nattvard](https://www.svenskakyrkan.se/kristentro/nattvarden), [Islamiska Förbundets frågor och svar](https://www.islamiskaforbundet.se/fragor-och-svar/), [Judiska Församlingen i Göteborgs högtider](https://www.judiskaforsamlingen.se/judiska-helgdagar.php), [Sveriges buddhistiska samarbetsråds introduktion](https://buddhism-sbs.se/svenska/om-buddhism/) och [Harvard Divinity Schools hinduismprofil](https://rpl.hds.harvard.edu/resource/hinduism). Samfundskällorna märks som inifrånperspektiv, inte som företrädare för alla troende. [Skolverkets kommentarmaterial](https://www.skolverket.se/download/18.66960151804bed21fd13c5/1652442936651/pdf9799.pdf) lästes för orientering om jämförelse, tolkning och livsåskådningar; full överensstämmelse med en specifik klassplan har inte verifierats.

Hälsa och säkerhet hålls på en allmän undervisningsnivå. Länkar till Folkhälsomyndigheten, Naturvårdsverket, Brottsoffermyndigheten och Finlands svenskspråkiga livsmedelsverk ger fördjupning. Juridiska exempel är inte råd i enskilda ärenden. Matlagnings- och elektricitetsövningar hänvisar till lärarens anvisningar och godkänd utrustning.

26 automatiska tester kontrollerar bland annat att varje deklarerat ämnesområde har relevant lästext och fokuserad träning, att religionsfrågor länkar till rätt tradition och att ett avsnitt från fel ämne inte kan ta över frågans förklaring. Webbläsarkontroll genomfördes för alla 16 ämnens innehållsväljare och för religionens läsning, källor och övningar.

## Lgr22: jämförelse av alla 16 ämnen, 1 november 2026

Skolverkets originalkursplaner för samtliga ämnen lästes, med fokus på centralt innehåll åk 7–9. Ingång: https://syllabuswebb.skolverket.se/compulsorycw/jsp/curriculum.htm?cur=LGR22&tos=gr . Direktlänkar per ämne finns i curriculum-guide.js och Läs vidare. Moderna språk avser språkval. De egna översikterna sammanfattar bredden; de är inte en avprickning av fullgjord undervisning. Historia inkluderar tidiga samhällen som bakgrund, utöver högstadiets större tidsperioder.

44 nya lektioner (curriculum-lessons.js och curriculum-more.js) kompletterar luckor. Varje lektion har en praktisk eller undersökande uppgift, men ingen sådan uppgift markeras automatiskt som genomförd. En definitionsfråga prövar endast ett begrepp, inte hela området eller praktisk förmåga.

Särskild faktakontroll gjordes mot 1177 om antibiotika, UMO om frivillighet och skydd, Konsumentverket om öppet köp/bytesrätt, Isof om minoritetsspråk och Forum för levande historia om Förintelsen och Gulag. Länkar till lämpligt vidare material ligger i references.js. Primärkälla för rättighetsdefinitionen av folkmord: FN:s folkmordskonvention (kursplanens undervisningsområde). Ingen individuell medicinsk eller juridisk rådgivning ges i övningarna.

## Studieteknik, 2 november 2026

UR:s sida om Orka plugga och direkta programsidor kontrollerades: Anteckna smart (215469, 1 min), Plugga effektivt (219574, 4 min), Förbättra minnet med loci-metoden (217196, 3 min) samt Lässtrategier (serie 201900). UR anger högstadienivå och svensk textning för de kontrollerade antecknings- och minnesfilmerna. De egna filmfrågorna hjälper eleven omsätta ett tips i handling. Ingen fil laddas ned eller återpubliceras. Spelaråtkomst med elevens konto har inte verifierats; inloggning och rättigheter kan variera.

Örebro universitets Anteckna för att minnas och lära användes för kontroll av anteckningsmallar och vidare läsning. The Learning Scientists FAQ och deras forskningsförankrade material kontrollerades för aktiv återkallning och utspridd repetition: https://www.learningscientists.org/faq . Egna förenklade exempel används, utan påståenden om fasta lärstilar eller universellt optimala intervall. Förslagen om korta pass och repetitionsdagar är exempel som kan anpassas. Minnesknep skiljs från förståelse.

## Office-kurser, 2 november 2026

Microsoft Support kontrollerades för Word, Excel och PowerPoint: https://support.microsoft.com/sv-se/word/ , https://support.microsoft.com/sv-se/excel/ och https://support.microsoft.com/sv-se/powerpoint/ . Specifika primärkällor: /sv-se/word/add-a-heading-in-a-word-document (rubrikformat och video), /sv-se/excel/functions/sum-function (SUMMA), /sv-se/excel/switch-between-relative-and-absolute-references (kopierade referenser), /sv-se/excel/functions/xlookup-function (XLETAUPP och versionsbegränsning), /sv-se/excel/accessibility/video-create-more-accessible-charts-in-excel (diagram) och Microsofts video om att stapla bilder/objekt. Direktlänkar finns i references.js och office-ui.js.

Egna texter och uppgifter används, inte kopierade manualer. Svenska funktionsnamn och semikolon visas med förklaring om språk-/regioninställningar. Webb- och skrivbordsversionernas funktioner kan skilja sig. Ingen Office-inloggning, delning, uppladdning eller installation genomfördes. Filmer länkas hos Microsoft, inte inbäddade eller återpublicerade; spelaruppspelning på elevens enhet har inte verifierats.
