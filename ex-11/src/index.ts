// DIN UPPGIFT: Skapa en ny typ från den befintliga typen Student. Använd olika Utility Types för att lösa uppgifterna. / 3 poäng
{
type Student = {
    id: number;
    firstName: string;
    lastName: string;
    age?: number;
    email: string;
    address?: string;
}
let firstStudent:Partial<Student> = {
    age?: 25,
    email: 'testmail',
    address?: 'Testväg',
}
console.log(firstStudent)
let firstStudent:Required<Student> = {
    age?: number;
    email: string;
    address?: string;

}


}
//1. Skapa en typ PartialStudent som representerar ett objekt där alla fält i Student är valfria.

//2. Skapa en typ RequiredStudent där alla fält i Student ska vara obligatoriska.

//3. Skapa en typ StudentWithoutAddress som är lik Student, men utan address-fältet.

//4. Skapa en typ StudentName som enbart inkluderar fälten firstName och lastName från Student.

// Obs! Om du hellre vill använda interface istället för type går det bra att byta.