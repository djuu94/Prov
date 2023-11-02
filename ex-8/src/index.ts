// DIN UPPGIFT: Använda enums för att skapa olika användarroller som ska vara "Admin", "Member" eller "Guest". 
// Du ska även implementera funktionen assignBadgeColor som ska returnera en färg baserat på rollen. 
// Admin ska returnera "Red", Member ska returnera "Blue" och Guest ska returnera "Green". / 3 poäng


// 1. Definerier enums för UserRoles Adming, Member och Guest
enum UserRole {
    UserRoles, 
    Admin,
    Member,
    Guest
   }
   
   interface User {
     name: string;
     role: UserRole;
   }
   
   // 2. Implementera assignBadgeColor-funktionen som ska returnera en färg baserat på användarens roll.
   function assignBadgeColor(user: User): any {
    let color: string = ""
    switch(user.role) {
        case 0:
            color = "Blue";
            return color
          break;
          case 1:
            color = "Red";
            return color

          break;
          case 2:
            color = "Yellow";
            return color

          break;
          case 3:
            color = "Purple";
            return color
          break;
          case 0:
            color = "blue";
            return color
          break;
      }
   }
   
   // Testa funktionen
   const user1: User = { name: "Alice", role: UserRole.Admin };
   console.log(assignBadgeColor(user1)); // Ska skriva ut "Red".
   