###  DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel. 


type skrivs med ett lika med tecken =

type Person = {
    name:string,
    age:number
}
interface AlsoPerson{
    name:string,
    age:number
}

Interface kan använda "extends" för att skapa en ny utökad interface med den tidigare som mall.

interface PersonWithNewProperty extends AlsoPerson{
    running:boolean
}

Med type kan man skapa union types och intersection types vilket inte är möjligt med interface 

type TypeThatCanBeStringOrNumber = {
    value = string | number
}