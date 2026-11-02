// Svensk vardagskunskap. Egna exempel; inga köp, konton eller deklarationer utförs här.
export const ADULT_CHECKED='2026-11-02';
export const ADULT_SOURCES={
 declaration:{provider:'Skatteverket',title:'Deklaration – välj rätt inkomstår',url:'https://www.skatteverket.se/privat/deklaration/'},
 tax:{provider:'Skatteverket',title:'Så här deklarerar du',url:'https://www.skatteverket.se/servicelankar/teckensprak/deklaration/sahardeklarerardu.4.2fb39afe18dabf1e4d21038.html'},
 budget:{provider:'Konsumentverket',title:'Så gör du en budget',url:'https://www.konsumentverket.se/ekonomi/budgetkalkylen-att-gora-en-budget/'},
 bills:{provider:'Konsumentverket',title:'Regler för fakturor och påminnelser',url:'https://www.konsumentverket.se/ekonomi/regler-fakturor'},
 credit:{provider:'Konsumentverket',title:'Låna pengar – ränta och kostnader',url:'https://www.konsumentverket.se/ekonomi/lana-pengar/'},
 consumer:{provider:'Konsumentverket',title:'Öppet köp och bytesrätt',url:'https://www.konsumentverket.se/konsumentratt/oppet-kop-och-bytesratt/'},
 returns:{provider:'EU – Your Europe',title:'Ångra köp och returnera varor',url:'https://europa.eu/youreurope/citizens/consumers/shopping/returns/index_sv.htm'},
 insurance:{provider:'Konsumenternas Försäkringsbyrå',title:'Vad ingår i hemförsäkringen?',url:'https://www.konsumenternas.se/forsakringar/boendeforsakringar/hemforsakringar/vad-ingar/'},
 work:{provider:'Arbetsförmedlingen',title:'Rättigheter och skyldigheter i arbetslivet',url:'https://arbetsformedlingen.se/for-arbetssokande/arbeta-i-sverige/rattigheter-och-skyldigheter.html'},
 pension:{provider:'Pensionsmyndigheten',title:'Pension och eget sparande',url:'https://www.pensionsmyndigheten.se/forsta-din-pension/sa-fungerar-pensionen/eget-sparande-till-din-pension'},
 shares:{provider:'Finansinspektionen',title:'Investera i aktier',url:'https://www.fi.se/sv/for-konsumenter/spara/investera-i-aktier/'},
 funds:{provider:'Finansinspektionen',title:'Fakta om fonder – med video',url:'https://www.fi.se/sv/for-konsumenter/spara/fakta-om-fonder/'},
 risk:{provider:'Finansinspektionen',title:'Fem tips för ditt sparande',url:'https://www.fi.se/sv/for-konsumenter/spara/fem-tips-for-ditt-sparande/'},
 fees:{provider:'Finansinspektionen',title:'Jämför fondavgifter',url:'https://www.fi.se/sv/for-konsumenter/spara/jamforelsetal-for-fondavgifter/'},
 isk:{provider:'Skatteverket',title:'Skatt på investeringssparkonto',url:'https://www.skatteverket.se/investeringssparkonto'},
 guarantee:{provider:'Riksgälden',title:'Frågor och svar om insättningsgarantin',url:'https://www.riksgalden.se/om-riksgalden/fragor-och-svar/'},
 fraud:{provider:'Finansinspektionen',title:'Bedragare påstår sig arbeta för FI',url:'https://www.fi.se/sv/publicerat/nyheter/2025/bedragare-pastar-sig-arbeta-for-finansinspektionen/'},
 bankid:{provider:'BankID',title:'Skydda dig mot identitetsbedrägeri',url:'https://www.bankid.com/privat/tank-pa-sakerheten/id-kapning'}
};
export const ADULT_LESSONS=[],ADULT_QUESTIONS=[];
function adultChapter(id,group,topic,title,intro,paragraphs,example,mistake,terms,steps,sources,question,correct,wrong){
 const lessonId='adult-'+id;
 ADULT_LESSONS.push({id:lessonId,subject:'Vuxenkunskap',group,topics:[topic],title,intro,paragraphs,example,mistake,terms,steps,sources,checked:ADULT_CHECKED,recall:question,answer:correct,activity:steps.join(' ')});
 const options=[correct,...wrong],c=ADULT_QUESTIONS.length%3;[options[0],options[c]]=[options[c],options[0]];
 ADULT_QUESTIONS.push({id:'adult-case-'+id,s:'Vuxenkunskap',t:topic,lessonId,l:2,q:question,a:options,c,e:`${correct} ${mistake}`});
}
adultChapter('insurance','Vardagsekonomi','Försäkring och boende','Flytta hemifrån: hemförsäkring och villkor',
 'Att ordna ett boende innebär fler kostnader och ansvar än bara hyran.',[
 'Gör en lista över sådant som behöver undersökas: boendeavtal, el, internet, försäkring och vad som ingår i kostnaden. Kontrollera avtal och betalningsmottagare innan du betalar något. Regler kan skilja mellan olika boendeformer.',
 'En hemförsäkring kan omfatta mer än dina saker, till exempel ansvarsskydd, rättsskydd och reseskydd enligt villkoren. Den täcker inte varje tänkbar skada. Läs vem som omfattas, undantag, beloppsgränser och självrisk.',
 'Självrisk är den del av en ersättningsbar skadekostnad som du själv får stå för enligt försäkringen. Premie är priset för försäkringen. Jämför både innehåll och pris; en låg premie kan innebära andra villkor.'],
 'Om en ersättningsbar skada värderas till 5 000 kr och självrisken är 1 500 kr blir ersättningen i ett förenklat fall 3 500 kr, om inga andra avdrag gäller.',
 'Hemförsäkring betyder inte att allt ersätts till nypris eller utan undantag.',
 [['Premie','Priset för en försäkring.'],['Självrisk','Den del av en skadekostnad som den försäkrade själv står för enligt villkoren.'],['Försäkringsvillkor','Reglerna för vad en försäkring omfattar och hur ersättning beräknas.']],
 ['Gör en påhittad flytta-hemifrån-lista.','Räkna på självrisken i exemplet.','Leta efter ett undantag i en offentlig försäkringsbeskrivning utan att köpa något.'],['insurance','budget'],
 'Vad behöver du jämföra utöver försäkringens pris?','Vilka personer och risker som omfattas, självrisk och undantag.',['Bara färgen på företagets logotyp.','Om priset ser litet ut per dag.']);
adultChapter('pension','Skatt och jobb','Pension','Pension är mer än ett eget sparkonto',
 'Pension kan komma från flera håll och påverkas av ditt arbetsliv.',[
 'Den allmänna pensionen är ett offentligt pensionssystem. Tjänstepension är pension som arbetsgivare kan betala till enligt avtal. Därutöver kan en person ha ett eget sparande. Delarna fungerar inte likadant och tjänstepension finns inte automatiskt i varje anställning.',
 'Arbetsinkomster genom livet, tjänstepension och när pension tas ut har betydelse för framtida pension. En pensionsprognos är en beräkning med antaganden, inte ett löfte om ett exakt framtida belopp.',
 'När du jämför jobb kan du därför fråga om tjänstepension, inte bara om lön. För privat pensionssparande behöver avgifter, risk och villkor bedömas. Här räcker det att förstå vilka frågor som behöver ställas.'],
 'Två jobb med samma bruttolön kan ge olika samlad ersättning om pensionsvillkoren skiljer sig.',
 'Eget sparande är inte den enda delen av pensionen, och en prognos är inte garanterad.',
 [['Allmän pension','Pension från det offentliga pensionssystemet.'],['Tjänstepension','Pension som arbetsgivaren betalar till enligt avtal.'],['Prognos','En beräkning av en möjlig framtida utveckling med vissa antaganden.']],
 ['Rita tre möjliga pensionsdelar.','Skriv en fråga om tjänstepension inför ett låtsasjobb.','Läs Pensionsmyndighetens förklaring utan att lämna personuppgifter.'],['pension','work'],
 'Varför fråga om tjänstepension när du jämför jobb?','Den kan vara en viktig del av ersättningen utöver lönen.',['Alla arbetsgivare ger alltid identiska pensionsvillkor.','Den ersätter all skatt på lön.']);
adultChapter('shares','Aktieskolan','Aktier','Aktie = en liten ägarandel',
 'En aktie är en ägarandel i ett aktiebolag, inte ett sparkonto med utlovad ränta.',[
 'När du äger en aktie påverkas värdet av vad andra vill betala för den. Priset kan ändras av företagets resultat, framtidsförväntningar och omvärlden. Du kan förlora pengar och i värsta fall hela beloppet du investerat i en aktie.',
 'Ett företag kan besluta om utdelning till aktieägarna, men utdelning är inte garanterad. Avkastning behöver bedömas som helhet: prisförändring och utdelningar, med hänsyn till kostnader och skatt.',
 'Lågt pris per aktie betyder inte automatiskt att ett företag är billigt värderat. Antalet aktier och bolagets ekonomi spelar också roll. I skolan använder vi påhittade bolag och gör inga köp.'],
 'Tio aktier som köpts för 100 kr styck kostar 1 000 kr före avgifter. Vid priset 80 kr är innehavet värt 800 kr. Förlusten är 200 kr före andra poster.',
 'Ett känt företagsnamn eller en populär produkt garanterar inte en bra investering.',
 [['Aktie','En ägarandel i ett aktiebolag.'],['Utdelning','Pengar eller andra värden som ett bolag beslutar att dela ut till aktieägare.'],['Avkastning','Värdeförändring och inkomster från en placering under en period.']],
 ['Räkna värdet på tio påhittade aktier vid tre priser.','Skilj prisförändring från utdelning.','Förklara vad du kan förlora utan att köpa något.'],['shares'],
 'En aktie har sjunkit 20 %. Vad kan du säkert säga?','Värdet har minskat; det finns ingen garanti att det kommer tillbaka.',['Den måste stiga lika mycket nästa dag.','Staten ersätter alltid kursfallet.']);
adultChapter('funds','Aktieskolan','Fonder och index','Fond och indexfond – vad är skillnaden?',
 'En fond samlar investeringar enligt en viss inriktning. Du äger fondandelar.',[
 'En aktiefond placerar i aktier, medan andra fonder kan ha exempelvis räntebärande värdepapper. Vilken risk du tar beror på innehållet. Alla fonder ger inte samma spridning eller samma risk.',
 'En indexfond försöker följa ett valt index, alltså ett mått för en bestämd marknad eller grupp tillgångar. Ett smalt index kan ge en smal placering. Ordet index betyder därför inte automatiskt bred eller riskfri.',
 'Läs fondens faktablad: inriktning, risk, kostnader och förutsättningar. En aktiefond kan falla mycket i värde. Historisk avkastning är ingen garanti för framtida resultat.'],
 'En fond som bara placerar inom en bransch kan vara koncentrerad även om den äger flera olika bolag.',
 'Fler fondnamn betyder inte säkert bättre riskspridning; innehaven kan överlappa.',
 [['Fondandel','En andel i en fonds samlade tillgångar.'],['Index','Ett mått som följer utvecklingen för en bestämd grupp tillgångar.'],['Indexfond','En fond som försöker följa ett valt index.']],
 ['Jämför två påhittade fonder med olika inriktning.','Skriv vad du behöver veta om innehav och avgifter.','Se FI:s film om fonder och återge en sak du lärde dig.'],['funds'],
 'Är en fond automatiskt riskfri för att den följer ett index?','Nej, risken beror bland annat på vilka tillgångar indexet följer.',['Ja, alla index skyddas mot kursfall.','Ja, fondens namn räcker som bevis.']);
adultChapter('risk','Aktieskolan','Risk och tid','Risk, tid och riskspridning',
 'Fråga först vad pengarna ska användas till och när de behövs.',[
 'Pengar till en nära förestående utgift behöver vara tillgängliga när betalningen ska ske. Börsvärden kan falla just då. Lång tid kan ge större möjlighet att hantera svängningar, men eliminerar inte risken för förlust.',
 'Riskspridning betyder att inte vara beroende av bara ett bolag, en bransch eller en marknad. Den kan minska vissa risker men tar inte bort breda marknadsfall. Att låna till placeringar gör att skulden finns kvar även om värdet faller.',
 'Ett sparkonto och en investering har olika risker och villkor. För konton som omfattas av svensk insättningsgaranti är ordinarie maxskydd från 1 januari 2026 1 150 000 kr per person och institut. Kontrollera hos Riksgälden vilka konton och institut som omfattas. Garantin täcker inte börsfall i aktier eller fonder.'],
 'Två olika varumärken kan tillhöra samma institut. Garantin räknas inte automatiskt som ett nytt maxbelopp för varje kontonamn.',
 'Riskspridning är riskminskning, inte en garanti för vinst.',
 [['Riskspridning','Att fördela placeringar så att man inte är beroende av en enda källa till risk.'],['Tidshorisont','Tiden tills pengar behöver kunna användas.'],['Insättningsgaranti','Ett skydd för insättningar på omfattade konton enligt särskilda villkor.']],
 ['Sortera låtsaspengar efter när de behövs.','Förklara varför en hyra snart och ett långsiktigt mål är olika.','Kontrollera garantins villkor hos Riksgälden.'],['risk','guarantee'],
 'Skyddar insättningsgarantin mot att din aktiefond faller på börsen?','Nej, garantin gäller omfattade insättningar och är inte ett skydd mot kursfall.',['Ja, alla investeringar garanteras.','Ja, om fonden har ett välkänt namn.']);
adultChapter('fees','Aktieskolan','Avgifter','Avgifter som märks över tid',
 'Små årliga avgifter kan påverka hur mycket av ett sparande som blir kvar.',[
 'En fondavgift belastar fonden enligt villkoren och påverkar andelsvärdet. Jämför liknande fonder och granska samtliga relevanta kostnader. En högre avgift garanterar inte bättre resultat.',
 'Vid aktiehandel kan courtage, en handelsavgift, tillkomma. Även skillnaden mellan köp- och säljkurs och eventuell valutaväxling kan spela roll. Ett pris som marknadsförs som gratis behöver läsas tillsammans med villkoren.',
 'Räkneexempel med antagen konstant avkastning visar en mekanism, inte vad marknaden kommer ge. Skatter och andra kostnader kan också påverka. Använd FI:s jämförelsetal som bakgrund, inte som en personlig köprekommendation.'],
 'Förenklat ett år med oförändrat underlag: 1 % av 10 000 kr är 100 kr och 0,2 % är 20 kr. Verklig debitering och värdeutveckling kan skilja sig från detta enkla exempel.',
 'Låg avgift är en viktig kostnadsfråga, men säger inte ensam vilken risk en fond har.',
 [['Courtage','En avgift som kan tas ut vid köp eller försäljning av värdepapper.'],['Fondavgift','Kostnad för fondsparandet enligt fondens villkor.'],['Spread','Skillnaden mellan köp- och säljkurs.']],
 ['Räkna två avgifter på samma låtsasbelopp.','Jämför bara placeringar med liknande inriktning.','Skriv vilka andra villkor du behöver kontrollera.'],['fees','shares'],
 'Varför jämföra fondavgifter?','Avgifter påverkar vad som blir kvar och högre avgift garanterar inte bättre avkastning.',['Den dyraste fonden måste alltid ge mest.','Avgifter saknar betydelse när spartiden är lång.']);
adultChapter('accounts','Aktieskolan','ISK och depå','Kontotyp och innehåll är två olika val',
 'ISK och vanlig depå beskriver hur ett sparande hålls och beskattas, inte hur säkert innehållet är.',[
 'På ett investeringssparkonto, ISK, bygger den svenska beskattningen på en schablon som beräknas från kapitalunderlag, i stället för att varje enskild vinst beskattas separat. Skatt kan uppkomma även ett år med värdeminskning, med hänsyn till årets regler och eventuella grundnivåer.',
 'I en vanlig depå behöver försäljningar och resultat hanteras enligt reglerna för det aktuella värdepappret. Kontrolluppgifter, deklarationsbehov och förlustregler varierar. För överföringar mellan sparformer kan särskilda skatteeffekter uppstå.',
 'Skatteverket har regler per inkomstår. Här anges ingen fast ISK-skattesats eller universell kontorekommendation. Kapitalförsäkring har en annan konstruktion och andra villkor; jämför inte bara kontonas namn.'],
 'Samma aktiefond kan fortfarande falla i värde även om den ligger på ett ISK. Kontotypen tar inte bort fondens marknadsrisk.',
 '”Ingen skatt på varje vinstaffär” betyder inte att ett ISK alltid saknar skatt eller avgifter.',
 [['ISK','Investeringssparkonto, en sparform med schablonbaserad beskattning enligt årets regler.'],['Depå','Ett konto eller förvar där värdepapper kan hållas.'],['Kapitalunderlag','Ett beräkningsunderlag för viss beskattning, som inte bara är årets vinst.']],
 ['Rita två rutor: kontotyp och innehåll.','Placera ISK i ena och aktiefond i den andra.','Läs om rätt inkomstår hos Skatteverket.'],['isk'],
 'Blir en aktie riskfri för att den ligger på ett ISK?','Nej, kontotypen ändrar inte aktiens marknadsrisk.',['Ja, ISK garanterar alltid kapitalet.','Ja, schablon betyder garanterad avkastning.']);
adultChapter('compound','Aktieskolan','Ränta på ränta','Ränta på ränta – en modell, inget löfte',
 'När en avkastning stannar kvar kan även den påverka nästa periods resultat.',[
 'I en förenklad modell börjar du med ett belopp och multiplicerar med en förändringsfaktor varje år. Med exakt 5 % per år är faktorn 1,05. Två år blir startbeloppet gånger 1,05 gånger 1,05.',
 'Marknadsavkastning är inte jämn och kan vara negativ. Efter en nedgång krävs en annan procentuell uppgång för att komma tillbaka eftersom procenten räknas på ett nytt underlag.',
 'Inflation betyder en ökning av den allmänna prisnivån och minskar pengars köpkraft. Ett högre kontobelopp behöver därför inte betyda att du kan köpa mer. I modeller behöver antaganden om avkastning, avgifter, skatt och inflation redovisas.'],
 'Utan skatt och avgifter: 1 000 kr × 1,05 × 1,05 = 1 102,50 kr. Men 1 000 kr som först faller 20 % till 800 och sedan stiger 20 % blir bara 960 kr.',
 'Ett antaget procenttal i en kalkyl är inte en prognos eller garanterad börsavkastning.',
 [['Förändringsfaktor','Talet man multiplicerar med för att beräkna en procentuell förändring.'],['Ränta på ränta','När tidigare ränta eller avkastning ingår i underlaget för kommande avkastning.'],['Inflation','En ökning av den allmänna prisnivån.']],
 ['Räkna två år med ett påhittat procenttal.','Pröva ett negativt år.','Skriv vilka kostnader och antaganden din modell utelämnar.'],['risk','fees'],
 'Efter minus 20 % och sedan plus 20 %, är du tillbaka på startvärdet?','Nej, uppgången räknas på ett lägre underlag; 1 000 kr blir 960 kr.',['Ja, plus och minus tar alltid ut varandra.','Ja, om modellen kallas ränta på ränta.']);
adultChapter('fraud','Vardagsekonomi','Digital trygghet','BankID, bluffar och investeringsbedrägerier',
 'Stress, brådska och löften om säker hög vinst är varningssignaler.',[
 'En bedragare kan låtsas vara bank, myndighet eller någon du känner. Starta inte BankID och lämna inte koder på uppmaning av någon som oväntat kontaktar dig. Läs alltid vilken tjänst och handling en identifiering eller underskrift avser.',
 'Avbryt en misstänkt kontakt och sök själv upp organisationens officiella kontaktväg. En logotyp, en känd persons bild eller en professionell webbplats räcker inte som bevis. Kontrollera finansiella företag via FI:s register och varningar; utebliven varning är inte ett godkännande.',
 'Om pengar eller uppgifter kan ha kommit fel, kontakta banken skyndsamt via en självständigt kontrollerad kanal och polisanmäl misstänkt brott. Var också vaksam på personer som vill ha betalt för att ”rädda tillbaka” en tidigare förlust.'],
 '”Din bank är hotad, signera genast” kan vara själva bedrägeriet. Brådskan är inget bevis för att du ska följa instruktionen.',
 'Hög garanterad vinst utan risk är inte en trovärdig beskrivning av aktieinvesteringar.',
 [['Nätfiske','Försök att lura någon att lämna uppgifter eller utföra handlingar genom falska meddelanden eller sidor.'],['E-legitimation','Ett digitalt sätt att legitimera sig och ibland skriva under.'],['Investeringsbedrägeri','Bedrägeri där en påstådd investering används för att lura till sig pengar.']],
 ['Granska ett helt påhittat bluffmeddelande.','Peka ut brådska, löfte och begärd handling.','Beskriv hur du hittar en kontaktväg själv utan att följa meddelandets länk.'],['fraud','bankid'],
 'Någon ringer oväntat och vill att du startar BankID för att rädda dina pengar. Vad gör du?','Avbryter kontakten och kontrollerar själv med banken via en officiell kontaktväg.',['Signerar först och läser sedan.','Lämnar koden om personen kan mitt namn.']);
adultChapter('salary','Skatt och jobb','Lön och skatt','Lön före och efter skatt',
 'Bruttolön är lönen före skatteavdrag. Nettolön är det som återstår efter avdrag på lönen.',[
 'Arbetsgivaren gör normalt ett preliminärt skatteavdrag och betalar in det till Skatteverket. Avdraget är inte samma sak som den slutliga skatten för hela året. Hur mycket skatt som ska betalas påverkas av flera uppgifter, inte bara av ett enda procenttal.',
 'Lönespecifikationen visar bland annat bruttolön, skatteavdrag och belopp att betala ut. Jämför den med arbetad tid och anställningsvillkor. Skilj lön från ersättningar och andra avdrag.',
 'Räkneexempel här är påhittade. Använd Skatteverkets aktuella beräkningar för verklig skatt. En kommunal skattesats kan inte ensam användas som en exakt kalkyl för vad en viss person får kvar.'],
 'I ett förenklat exempel: 20 000 kr i bruttolön minus 4 000 kr i skatteavdrag ger 16 000 kr utbetalt, om inga andra avdrag eller tillägg finns. Det är inte en skattetabell.',
 'Skatt är inte alltid en fast procent av hela bruttolönen.',
 [['Bruttolön','Lön före skatteavdrag.'],['Nettolön','Lön efter skatteavdrag och eventuella andra löneavdrag.'],['Preliminär skatt','Skatt som betalas in under året före den slutliga beräkningen.']],
 ['Rita en påhittad lönespecifikation.','Markera brutto, skatt och utbetalt.','Kontrollera differensen med miniräknare.'],['tax','work'],
 'Varför kan årets slutliga skatt skilja sig från löneavdragen?','Avdragen är preliminära och den slutliga skatten beräknas utifrån årets samlade uppgifter.',['Lönespecifikationer visar aldrig någon skatt.','Alla har alltid samma skattebelopp.']);
adultChapter('declaration','Skatt och jobb','Deklaration','Vad är en deklaration?',
 'Deklarationen är ett underlag för att beräkna rätt skatt för ett inkomstår.',[
 'Många uppgifter är förifyllda, till exempel sådant arbetsgivare och banker har rapporterat. Du behöver ändå kontrollera uppgifterna och lämna nödvändiga ändringar eller tillägg när du ska deklarera.',
 'Skilj mellan inkomstår och deklarationsår. En deklaration som lämnas våren efter ett år gäller normalt inkomster från året före. Ett datum i en gammal guide behöver därför inte gälla nästa gång.',
 'Kontrollera hos Skatteverket om du ska deklarera, vilket år uppgifterna gäller och vilket datum som gäller för dig. Övningen här innebär inte att du loggar in eller skickar in något.'],
 'Inkomster under 2026 hör normalt till deklarationen 2027. Detta säger inget om den enskilda personens skyldighet eller sista datum.',
 'Förifyllt betyder inte automatiskt att allt är korrekt eller fullständigt.',
 [['Deklaration','Uppgifter som lämnas till grund för beräkning av skatt.'],['Inkomstår','Året som inkomsterna eller andra skatteuppgifter avser.'],['Deklarationsår','Året när deklarationen lämnas.']],
 ['Skriv skillnaden mellan inkomstår och deklarationsår.','Gör en checklista: jämför inkomster, kontrollera tillägg, välj rätt år.','Hitta årets information hos Skatteverket utan att logga in.'],['declaration'],
 'Deklarationen är förifylld. Vad behöver du ändå göra?','Kontrollera att uppgifterna stämmer och om något ska ändras eller läggas till.',['Godkänna utan att läsa.','Använda ett gammalt års datum oavsett vilket år det gäller.']);
adultChapter('final-tax','Skatt och jobb','Slutlig skatt','Återbäring, kvarskatt och avdrag',
 'Efter skatteberäkningen jämförs slutlig skatt med det som redan betalats in.',[
 'Om för mycket skatt betalats in kan du få återbäring. Om för lite betalats kan du behöva betala kvarskatt. Beskedet om slutlig skatt visar resultatet och vad som gäller för betalning.',
 'Ett avdrag och en skattereduktion fungerar inte på samma sätt. Ett avdrag kan minska underlaget som beskattas; en skattereduktion minskar skatten enligt särskilda regler. Du får inte automatiskt tillbaka lika många kronor som ett avdrag avser.',
 'Villkor, belopp och betalningsdatum kan ändras och kan bero på din situation. Spara underlag och använd Skatteverkets vägledning för rätt inkomstår. Gissa inte fram ett avdrag för att någon annan säger att det fungerade.'],
 'Påhittat fall: slutlig skatt 18 000 kr och redan betalt 20 000 kr ger ett överskott på 2 000 kr, innan hänsyn till annat på skattekontot.',
 'Återbäring är normalt en avstämning av tidigare inbetald skatt, inte gratis extra lön.',
 [['Kvarskatt','Skatt som återstår att betala efter den slutliga beräkningen.'],['Återbäring','Återbetalning när för mycket skatt betalats in.'],['Skattereduktion','En minskning av skatten enligt särskilda regler.']],
 ['Räkna på det påhittade fallet.','Byt slutlig skatt till 22 000 kr.','Förklara skillnaden mellan avdrag och återbäring.'],['declaration','tax'],
 'Du har betalat in mindre skatt än den slutliga skatten. Vad kan resultatet bli?','Kvarskatt som behöver betalas enligt beskedet.',['Att skillnaden automatiskt försvinner.','Att ett avdrag alltid ger lika mycket kontanter tillbaka.']);
adultChapter('work','Skatt och jobb','Anställning','Första jobbet: avtal och villkor',
 'Läs vad du tackar ja till, inte bara vilken timlön som nämns.',[
 'Anställningsvillkor kan handla om arbetsuppgifter, arbetstid, anställningsform, lön, semester och uppsägning. Be om tydlig skriftlig information så att du kan kontrollera vad ni kommit överens om.',
 'Lagar och eventuella kollektivavtal påverkar villkoren. Kollektivavtal är avtal mellan arbetsgivar- och arbetstagarparter och kan reglera exempelvis ersättningar och pension. Samma villkor gäller inte automatiskt på alla arbetsplatser.',
 'För unga finns särskilda regler om arbete. Fråga skolan, arbetsgivaren eller en kunnig vuxen när du ska börja. Använd inte en allmän lästext som enda underlag för ett riktigt avtal.'],
 '”120 kr per timme” räcker inte för att veta antal timmar, hur semesterersättning hanteras eller vilken anställningsform det är.',
 'Att två jobb har samma timlön betyder inte att alla villkor är lika.',
 [['Anställningsavtal','Överenskommelsen om en anställning och dess villkor.'],['Kollektivavtal','Avtal mellan arbetsgivar- och arbetstagarparter om arbetsvillkor.'],['Lönespecifikation','Redovisning av lön, avdrag och utbetalning.']],
 ['Gör en lista med fem frågor inför ett påhittat jobb.','Ta med arbetstid, lön och anställningsform.','Jämför med Arbetsförmedlingens information.'],['work'],
 'Vad behöver du veta utöver timlönen?','Bland annat arbetstid, anställningsform och hur semester och ersättningar hanteras.',['Bara företagets logotyp.','Att alla arbetsplatser måste ha exakt samma villkor.']);
adultChapter('budget','Vardagsekonomi','Budget','Budget och buffert – pengar som ska räcka',
 'En budget är en plan för inkomster och utgifter under en period.',[
 'Börja med pengar som faktiskt finns att använda efter skatt. Ta med både återkommande räkningar och sådant som varierar. En årsutgift kan delas upp till en månadspost i planen.',
 'Buffert är pengar för oväntade utgifter. Hur stor den behöver vara beror på situationen. Pengar som snart behövs till nödvändiga utgifter ska inte blandas ihop med riskfyllt långsiktigt sparande.',
 'Följ upp planen mot vad som verkligen hände och justera. Konsumentverkets beräknade kostnader är ett stöd för planering, inte ett bevis för vad just du måste spendera.'],
 'Påhittat: 12 000 kr in och 10 500 kr i planerade utgifter lämnar 1 500 kr. En årsavgift på 1 200 kr motsvarar 100 kr per månad i budgeten.',
 'Ett kreditutrymme är inte samma sak som en inkomst eller en buffert du äger.',
 [['Budget','En plan för inkomster och utgifter.'],['Buffert','Tillgängliga pengar avsatta för oväntade utgifter.'],['Fast utgift','En återkommande kostnad som ofta är liknande från månad till månad.']],
 ['Gör en budget med bara påhittade belopp.','Dela en årsutgift med tolv.','Pröva vad som händer om en oväntad utgift tillkommer.'],['budget','risk'],
 'Varför ta med en årsavgift i månadsbudgeten?','För att förbereda kostnaden även under månader när fakturan inte kommer.',['För att den annars inte behöver betalas.','För att kredit alltid räknas som lön.']);
adultChapter('bills','Vardagsekonomi','Räkningar','Läs en faktura och reagera på fel',
 'En faktura är ett betalningskrav. Kontrollera vad den gäller innan du betalar.',[
 'Leta efter avsändare, belopp, vad du köpt, förfallodag och rätt betalningsuppgifter. OCR är en referens som hjälper mottagaren koppla betalningen till rätt faktura. E-faktura och autogiro fungerar på olika sätt; kontrollera vad du har godkänt.',
 'Ett krav kan vara felaktigt. Då är det viktigt att meddela varför du invänder, vanligtvis skriftligt, och spara underlag. Att ignorera ett krav är inte samma sak som att bestrida det.',
 'Om kravet är riktigt men pengarna inte räcker är det en annan situation än att fakturan är fel. Kontakta betalningsmottagaren tidigt och sök vid behov kommunens budget- och skuldrådgivning. Ett problem blir sällan lättare av att brev lämnas oöppnade.'],
 'På en påhittad faktura är ”förfallodag 30 november” sista betalningsdag enligt kravet, inte ett datum att börja undersöka räkningen först då.',
 'Att du inte har råd betyder inte i sig att betalningskravet är felaktigt.',
 [['Förfallodag','Dagen då betalningen senast ska vara gjord enligt kravet.'],['OCR','En betalningsreferens som identifierar rätt faktura eller betalning.'],['Bestrida','Att invända mot ett krav och ange varför det är fel.']],
 ['Rita en låtsasfaktura utan riktiga betalningsuppgifter.','Markera belopp, förfallodag och referens.','Beskriv skillnaden mellan felaktigt krav och brist på pengar.'],['bills','credit'],
 'En faktura avser något du inte beställt. Vad är bättre än att ignorera den?','Kontrollera kravet, invänd skriftligt med skäl om det är fel och spara underlag.',['Anta att tystnad automatiskt tar bort kravet.','Lämna ut BankID-koder till avsändaren.']);
adultChapter('credit','Vardagsekonomi','Lån och ränta','Lån, amortering och effektiv ränta',
 'Ett lån ger pengar nu men innebär en skyldighet att betala tillbaka.',[
 'Amortering är återbetalning av själva skulden. Ränta och avgifter är kostnader för krediten. Ett lågt månadsbelopp kan bero på att återbetalningen sträcks ut under lång tid och säger inte ensamt vad lånet kostar totalt.',
 'Effektiv ränta är ett jämförelsemått uttryckt som årsränta där ränta och relevanta kreditavgifter räknas med. Titta också på totalbelopp, löptid och villkor. Jämförelser blir tydligare när belopp och återbetalningstid är likvärdiga.',
 'I undervisningen används bara påhittade exempel. Delbetalning och köp nu–betala senare är också krediter. Villkor och regler måste kontrolleras för ett verkligt avtal.'],
 'Förenklat ettårsexempel: låna 1 000 kr och betala tillbaka 1 000 kr i skuld plus 100 kr ränta och 50 kr avgift. Kostnaden är 150 kr, men det är inte en full beräkning av effektiv ränta.',
 'Räntefritt betyder inte automatiskt avgiftsfritt eller kostnadsfritt.',
 [['Amortering','Återbetalning av det lånade beloppet.'],['Ränta','Ersättning för att få använda lånade pengar.'],['Effektiv ränta','Ett årligt jämförelsemått som räknar med ränta och relevanta kreditavgifter.']],
 ['Dela upp ett låtsaslån i skuld och kostnader.','Jämför ett kort och ett längre avtal utan att teckna något.','Läs Konsumentverkets förklaring av effektiv ränta.'],['credit'],
 'Vad skiljer amortering från ränta?','Amortering minskar skulden medan ränta är en kostnad för lånet.',['Båda betyder att skulden alltid ökar.','Amortering är ett annat namn för fondavgift.']);
adultChapter('consumer','Vardagsekonomi','Avtal och köp','Ångerrätt, reklamation och abonnemang',
 'Olika rättigheter gäller olika problem: ånger, fel på varan eller ett frivilligt returlöfte.',[
 'Vid många distansköp från företag har konsumenter i regel 14 dagars ångerrätt. Startpunkt och undantag beror på köpet; vissa varor och tjänster omfattas inte på vanligt sätt. Privatköp följer andra regler.',
 'Reklamation handlar om fel och är inte samma sak som att ångra sig. Öppet köp och bytesrätt är normalt butikens frivilliga villkor. En garanti är ytterligare ett åtagande och ersätter inte rättigheter enligt tillämplig lag.',
 'Läs totalpris, bindningstid, förlängning och uppsägning innan du tecknar ett abonnemang. Spara avtalet och en bekräftelse på uppsägning. Använd aktuell konsumentvägledning för ett konkret problem.'],
 'Att en jacka inte passar och att dragkedjan är felaktig är två olika frågor. Den ena kan gälla ånger eller öppet köp; den andra kan vara en reklamation.',
 'Det finns ingen allmän regel att alla butiksköp alltid kan ångras inom 14 dagar.',
 [['Ångerrätt','En lagstadgad möjlighet att frånträda vissa avtal inom en viss tid.'],['Reklamation','Att meddela säljaren ett fel och begära åtgärd.'],['Bindningstid','En period som avtalet binder dig till enligt dess villkor.']],
 ['Sortera tre låtsasfall: ånger, fel och uppsägning.','Skriv vilka villkor du skulle leta efter.','Kontrollera undantag i den officiella guiden.'],['consumer','returns'],
 'Vad är skillnaden mellan att ångra ett köp och att reklamera?','Ånger handlar om att frånträda köpet, medan reklamation handlar om ett fel.',['Orden betyder alltid exakt samma sak.','Garanti gör att inga lagliga rättigheter finns kvar.']);

// Läsgång: inkomster och ansvar före sparformer och modeller.
const adultReadingOrder=['salary','declaration','final-tax','work','pension','budget','bills','credit','consumer','insurance','fraud','shares','funds','risk','fees','accounts','compound'];
ADULT_LESSONS.sort((a,b)=>adultReadingOrder.indexOf(a.id.slice(6))-adultReadingOrder.indexOf(b.id.slice(6)));
