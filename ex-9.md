### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

Beskriv vad generics är i TypeScript och varför de är användbara.
Hur skiljer sig generics från att använda "any" i TypeScript?



Generics används när det finns osäkerhet kring vilket värde som kommer tas in i t.ex en funktion.
istället för att sätta argumentet till any eller unknown kan man använda en generic som "placeholder", 
vanligtvis <T>.
När man senare vill använda värdet så behöver man klargöra vilket typ som värdet då är, t.ex om man försöker subtrahera 
argumentet så krävs det att det då är av typen number. 
Generics gör även att funktionen kan återanvändas till olika värden och därefter efter med hjälp av narrowing göra olika
val för hur datat ska hanteras. 

Skillnaden mellan any och generics är att any i sig själv är en typ. Generics kan ses som en placeholder.