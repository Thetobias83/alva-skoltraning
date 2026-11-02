# Granskningslogg, 2 november 2026

Detta är en redovisning av utförd granskning, inte ett intyg om att allt material är felfritt. Länkade organisationer har inte granskat studiesidan. Innehållet är ett komplement till undervisning.

## Ny Vuxenkunskap

Alla 17 avsnitt har jämförts med relevanta källor. Direkta källor och kontrolldatum visas i varje avsnitt. Viktiga avgränsningar:

| Område | Kontroll och resultat | Källa |
| --- | --- | --- |
| Deklaration | Inkomstår skiljs från deklarationsår. Förifyllda uppgifter behöver kontrolleras. Inga permanenta sista datum anges. | [Skatteverket](https://www.skatteverket.se/privat/deklaration/) |
| Lön och slutlig skatt | Preliminärt avdrag skiljs från slutlig skatt. Löneexemplet är påhittat, ingen skattetabell. | [Skatteverket](https://www.skatteverket.se/servicelankar/teckensprak/deklaration/sahardeklarerardu.4.2fb39afe18dabf1e4d21038.html) |
| ISK | Schablonbeskattning är inte samma sak som skatt på varje försäljning. Grundnivåer och inkomstår behöver beaktas. Ingen fast skattesats lärs ut som tidlös. | [Skatteverket](https://www.skatteverket.se/investeringssparkonto) |
| Lån | Amortering skiljs från räntekostnad. Effektiv ränta omfattar relevanta avgifter. Ett enkelt kostnadsexempel kallas inte en full beräkning av effektiv ränta. | [Konsumentverket](https://www.konsumentverket.se/ekonomi/lana-pengar/) |
| Fakturor | Felaktigt krav skiljs från oförmåga att betala. Att ignorera är inte att bestrida. | [Konsumentverket](https://www.konsumentverket.se/ekonomi/regler-fakturor/) |
| Köp | Ångerrätt, reklamation, garanti och öppet köp skiljs åt. Undantag och skillnaden mellan företagsköp och privatköp framgår. | [Konsumentverket](https://www.konsumentverket.se/konsumentratt/oppet-kop-och-bytesratt/), [EU:s konsumentinformation](https://europa.eu/youreurope/citizens/consumers/shopping/returns/index_sv.htm) |
| Sparande | Risk, avgifter, tidshorisont och riskspridning skiljs från garantier. Inga enskilda värdepapper rekommenderas. | [FI: aktier](https://www.fi.se/sv/for-konsumenter/spara/investera-i-aktier/), [FI: fonder](https://www.fi.se/sv/for-konsumenter/spara/fakta-om-fonder/), [FI: avgifter](https://www.fi.se/sv/for-konsumenter/spara/jamforelsetal-for-fondavgifter/) |
| Insättningsgaranti | Ordinarie maxbelopp i svensk garanti från 1 januari 2026 är 1 150 000 kr per person och institut för omfattade insättningar. Inte en garanti mot börsfall. | [Riksgälden](https://www.riksgalden.se/om-riksgalden/fragor-och-svar/) |
| Försäkring | Premie, självrisk och ersättning skiljs åt; villkor och undantag betonas. | [Konsumenternas Försäkringsbyrå](https://www.konsumenternas.se/forsakringar/boendeforsakringar/hemforsakringar/vad-ingar/) |
| Jobb och pension | Villkor behöver jämföras; tjänstepension finns inte automatiskt i alla jobb. Prognoser är inte löften. | [Arbetsförmedlingen](https://arbetsformedlingen.se/for-arbetssokande/arbeta-i-sverige/rattigheter-och-skyldigheter.html), [Pensionsmyndigheten](https://www.pensionsmyndigheten.se/forsta-din-pension/sa-fungerar-pensionen/eget-sparande-till-din-pension) |
| Bedrägerier | Oväntad kontakt och uppmaning att signera kan vara bedrägeri. Kontrollera kontaktväg själv. | [FI](https://www.fi.se/sv/publicerat/nyheter/2025/bedragare-pastar-sig-arbeta-for-finansinspektionen/), [BankID](https://www.bankid.com/privat/tank-pa-sakerheten/id-kapning) |

## Office och befintligt skolmaterial

- Alla 27 Office-steg har kontrollerats för nivå, uppgift, kontrollfråga och visning i den lokala webbläsaren. Excel-underlaget ger 195 kr totalt, 73 kr Frukt och 122 kr Skolmaterial. Formler, referenser och versionsförbehåll har jämförts med Microsoft Support. XLETAUPP anges uttryckligen som otillgänglig i Excel 2016/2019. En högre nivå är fördjupning, inte en expertcertifiering.
- Tidigare kontroll av Lgr22 för 16 skolämnen, religionernas variation, studieteknik och hälsotexter redovisas i RESEARCH.md. Vid denna genomgång granskades särskilt numeriska exempel, kategoriska formuleringar och faktafrågor inom historia, religion, biologi, kemi, samhällskunskap och hemkunskap. Det är inte en ny oberoende källverifiering av varje mening i samtliga 169 läsavsnitt.
- Romavsnittets förenkling om Konstantinopel har förtydligats: staden erövrades 1204, och bysantinskt styre återupprättades 1261. 1453 beskrivs som den vanliga slutpunkten. Även kontrollfrågans förklaring är uppdaterad. [The Metropolitan Museum of Art](https://www.metmuseum.org/ja/essays/constantinople-after-1261).
- Antibiotikatextens skillnad mellan bakterier, virus och resistens återkontrollerades mot [1177](https://www.1177.se/Stockholm/undersokning-behandling/behandling-med-lakemedel/om-lakemedel/fragor-och-svar-om-antibiotika/). Rösträttstextens förbehåll om kvarvarande begränsningar efter 1921 stämmer med riksdagens historiska material.

## Teknisk kontroll och kvarvarande begränsningar

37 automatiska tester passerar. De kontrollerar bland annat ämneskopplingar, unika frågor, matematikgeneratorns alternativ, sparad progression, kursimport, ekonomimodellernas gränsfall och Office-exemplets kontrollsummor. JavaScript för fristående version är syntaxkontrollerat.

Automatiska tester visar inte att alla historiska, medicinska eller juridiska formuleringar är riktiga. Inga personliga ekonomiska beslut, deklarationer eller investeringar har genomförts.

Nedladdningsdialogen för Office-CSV kunde inte färdigverifieras: webbläsarverktygets väntan hängde sig. CSV-innehållet är separat testat. Senare webbläsaråtkomst nekades av automatisk granskning på grund av verktygets användningsgräns. Därför saknas slutlig visuell kontroll av den nya Vuxenkunskap-delen. Ingen alternativ webbläsarstyrning användes för att kringgå spärren.

Externa länkar och videospelare kan ändras. Inloggningskrav, skollicenser och Office-versioner varierar. C++-exemplen har syntaxmässigt lästs men inte kompilerats i en C++-miljö här. Källor och regler behöver kontrolleras på nytt inför verklig användning.
