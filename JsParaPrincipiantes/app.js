// Condicionales

let passwordDB = "pepe123";

let input = "pepe123";

let result5 = input == passwordDB;

if(result5 == true)
{
    console.log("login Correcto");
}else
{
    console.log("contraseña incorrecta")
}

let score = 70;

if(score > 30)
{
    console.log("you need to practice more");
}
else if(score >15)
{
    console.log("Estas mejorando");
}
else{
    console.log("you need to follow this tutorial");
}

let typeCard = "cjvgc";

switch(typeCard)
{
    case "Debid Card":
        console.log("this is a debid card");
        break;
    case "credit Card":
        console.log("This is a credit card");
        break;
    default:
        console.log("No card");    
}