# What is BunDrop?

It's my two week project for our web development class. It's proof of two things. One is that I know
how to program web apps, and the second is that I'm awful at designing UI's. The app itself is for
an imaginary restaurant called BunDrop whose identity is delivering food via drones.

## Starting the app

Three powershell commands needed, all run in the project directory.

### `npm run users-db`

Runs the json-server containing users and their order history. Will run on
localhost/2001 and contains the two endpoints /orders and /users

### `npm run menu-db`

Runs the json-server containing the restaurants menu of food. Will run on
localhost/2000 and only contains a single endpoint /foodsMenu

### `npm run start`

The default React bootstrap start command. Will run the app in development
mode on localhost/3000

# Analys av val

Själv är jag väldigt glad över att ha lärt mig React för faktumet att saker går att
dela upp så mycket i mindre bitar gör det mycket enklare att ha en bra översikt av
projektet. Vue hade också varit en möjlig lösning men jag personligen anser syntaxen
i React's JSX vara mycket tydligare, och jag behöver inte ha koll på vilka variabler
som är eller kommer vara computed eller ej.

Men på grund av tidsbrist och stress känns det ändå inte som att jag fullt
har utnyttjat moduläriteten i React. Om jag hade tid att refaktorera hade jag velat
flytta så mycket av den gemensamma koden som möjligt in i sina egna komponenter (men även större delar av vissa sidor som inte är gemensam, ex de tre panelerna i HomePage ifall de skulle
behövas förbättras i framtiden), samt flyttat all CSS som är delad (ex input rutor) in i delade CSS filer, likt vad jag gjort med färgerna då alla dessa finns i ett och samma CSS dokument som alla filer importerar. Detta hade också krävt mer struktur och planering angående mina UI element så jag vet vilka klasser som förväntas tillämpas på vilka element. Resultaten av hur jag gjort det nu är lite spaghetti-fierad kod då jag ibland fick ha en "temporär" lösning där !important slängdes hit
och dit i slutet. Såklart hade en riktig sådan app blivit svår att ändra på i framtiden, speciellt
nu när jag inte heller haft tid med att ordäntligt dokumentera/kommentera hela koden.

Ett bra val jag gjort dock är att ha en useContext för de variabler som används överallt i hela
appen, varav den inloggade användaren och dess cart de två viktigaste. På grund av detta slapp jag
mycket "prop drilling" vilket är bad practice och kunde istället nå dem enkelt när jag behövde
vart som helst i appen då hela appens Router är wrappad i detta contexts provider.
