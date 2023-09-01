# Code Hunt 🎬🎥🏹🎯

## Beskrivning
Ni ska skapa ett gränssnitt mot The Movie DB (TMDB) där man ska kunna se vilka som är de senaste bioaktuella filmerna, de populäraste filmerna, och de topplistade filmerna i Sverige (eller USA, välj själv). Man ska även kunna bläddra efter filmer baserat på genre.

Man ska också (varhelst en film visas) kunna klicka in på den och se information om filmen samt vilka skådespelare som medverkat. Det ska även gå att klicka in på en skådespelare och se vilka filmer hen har medverkat i.

## Skapa API-nyckel
Skapa ett konto på https://www.themoviedb.org/. Klicka därefter in på ditt konto (profilbilden i övre högra hörnet när ni är inloggade), gå in under Settings och i menyn till vänster klicka på API (näst längst ner). Där kommer ni se er API Key (v3 auth).

Ni kan också klicka på följande länk för att komma direkt till sidan med API-nyckeln: https://www.themoviedb.org/settings/api.

### API-dokumentation
All dokumentation kring API:et (som vilka endpoints som finns, hur man ska använda sin API-nyckel osv.) finns på https://developers.themoviedb.org/3/getting-started.

Tänk på att man kan kombinera frågor när man hämtar ut en film, så man kan få t.ex. credits samtidigt som man får detaljer om filmen genom att lägga till t.ex. append_to_response=credits i förfrågan. Se https://developers.themoviedb.org/3/getting-started/append-to-response för mer information.

## Hygienkrav
Nedan hygienkrav ska vara uppfyllda oavsett betygsnivå.

-Använda React, React Router och React Query

-Responsive (mobile first, så klart)

-Komponentbaserad

-Kommunikationen med API:et ska finnas i ett eget mellanlager (alltså en ”service”, där själva Fetch/axios-kommunikationen sker)

-Ha loading & felhantering

-Skriven i TypeScript, korrekt indenterad och städad och versionshanterad

-Deploy:ad till Netlify

All kod ska vara skriven av dig själv, och oanvänd kod ska vara bortstädad (du ska alltså skapa en helt ny, tom app och koda upp den från grunden, och inte bara modifiera ett av mina exempel!)


## Kravspecifikation
Samtliga frågor efter filmer ska (där API:ets endpoint stödjer detta) innehålla flaggan include_adult=false!

På samtliga ställen som en film eller skådespelare visas ska antingen filmens poster eller skådespelarens profilbild visas (detta finns i svaren ni får från TMDB).

Webbläsarens bakåt/framåt-knappar ska fungera för att navigera på sidan. Det ska även gå att ladda om sidan och då återgå till samma vy som före omladdning!

Som besökare ska jag
-kunna se vilka som är de 10-20 senaste biofilmerna.
-kunna se vilka som är de 10-20 mest populära filmerna.
-kunna se vilka som är de 10-20 mest topplistade filmerna.
-kunna bläddra efter filmer (med paginering) baserat på genre (man ska kunna se genrens titel).

Som besökare ska jag även
-kunna klicka in på en film och få detaljerad information om filmen.
-kunna klicka in på en film och få reda på vilka som var skådespelare i filmen.
-kunna klicka på en skådespelare och få detaljerad information om skådespelaren.
-kunna klicka på en skådespelare och få reda på vilka filmer som hen har medverkat i.

För godkänt krävs paginering bara på bläddringen av filmer baserat på genre. Skulle ni implementera det ändå på senaste/populära/topplistade filmer är det självklart ett plus. 

Pagineringen måste överleva en omladdning av sidan!

## Tips och trix
Jag rekommenderar också att ni gör en skiss över vilka komponenter ni behöver skapa. Detta underlättar enormt när ni väl börjar koda, så väl som ger en tydlig översikt över appen.

När man ska hämta data från ett helt nytt API man inte tidigare använt, så finner jag det lättast att skapa en mapp i Postman för API:et och därefter testa göra frågor mot olika endpoints och se vad för data man får tillbaka och vilken struktur den har.

Därefter kan man börja planera vilken data man behöver i vilken komponent, och då först skriva de olika metoderna man behöver i sin API-wrapper.

Gällande genre: Förslagsvis har ni en sida som hämtar alla genrer, och därefter kan man klicka in på en genre för att se filmer i den genren. För att hitta filmer i en viss genre kan ni använda endpoint:en Discover -> Movie Discover.

Gällande bilder: Man får bara tillbaka relativa sökvägar för bilder från API:et, prefixa sökvägen med https://image.tmdb.org/t/p/w500 så får ni en bild som är 500 pixlar bred. Se https://developers.themoviedb.org/3/getting-started/images för mer information.

Gällande en skådespelares filmer: Precis som med genre så kan ni hämta ut filmer en skådespelare medverkat i med hjälp av endpoint:en Discover -> Movie Discover.

## Kravspecifikation VG
För väl godkänt krävs (förutom kraven för godkänt) att:

Du använder dig av Custom Hooks på lämpliga ställen.

Besökaren ska kunna se relaterade/liknande filmer på en enskild film.

Besökaren ska kunna söka efter filmer och se vilka filmer (med paginering) som matchar sökfrågan, eller om inga filmer matchar min sökfråga. Både sökfråga och paginering ska bibehållas vid omladdning av sidan.

Se de 10 senaste filmerna man visat. Historiken ska överleva mellan sessioner.

Besökaren ska kunna välja om hen vill se populära filmer för dagen eller för veckan (ska bibehållas vid omladdning av sidan).


## Instruktioner
Acceptera inbjudan på GitHub Classroom:


Klona ner ditt repo, gå in i mappen, kör npm create vite@latest . -- --template react-ts (observera “.” för annars får ni en undermapp i ert repo och huvudvärk när ni ska deploya appen!) och installera nödvändiga paket som axios, bootstrap, react-bootstrap, @tanstack/react-query, react-router-dom och sass.

## Deadline
Senast fredag 1 september kl. 23.59.

Skicka in
Länk till ditt GitHub-repo på GitHub Classroom
URL till din deploy:ade app
Ange om du gjort G eller VG-nivå
Ev. kända buggar eller kommentarer du tror jag skulle ha nytta av när jag granskar din inlämning
