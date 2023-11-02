"use strict";
// DIN UPPGIFT: Använda enums för att skapa olika användarroller som ska vara "Admin", "Member" eller "Guest". 
// Du ska även implementera funktionen assignBadgeColor som ska returnera en färg baserat på rollen. 
// Admin ska returnera "Red", Member ska returnera "Blue" och Guest ska returnera "Green". / 3 poäng
// 1. Definerier enums för UserRoles Adming, Member och Guest
var UserRole;
(function (UserRole) {
    UserRole[UserRole["UserRoles"] = 0] = "UserRoles";
    UserRole[UserRole["Admin"] = 1] = "Admin";
    UserRole[UserRole["Member"] = 2] = "Member";
    UserRole[UserRole["Guest"] = 3] = "Guest";
})(UserRole || (UserRole = {}));
// 2. Implementera assignBadgeColor-funktionen som ska returnera en färg baserat på användarens roll.
function assignBadgeColor(user) {
    let color = "";
    switch (user.role) {
        case 0:
            color = "Blue";
            return color;
            break;
        case 1:
            color = "Red";
            return color;
            break;
        case 2:
            color = "Yellow";
            return color;
            break;
        case 3:
            color = "Purple";
            return color;
            break;
        case 0:
            color = "blue";
            return color;
            break;
    }
}
// Testa funktionen
const user1 = { name: "Alice", role: UserRole.Admin };
console.log(assignBadgeColor(user1)); // Ska skriva ut "Red".
