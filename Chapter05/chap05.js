// Q # 01
function ques01(){
     // Take two numbers
    let num1 = 10;
    let num2 = 20;

    // Add them and store in a new variable
    let result = num1 + num2;

    // Show the result in the browser
    alert("Question 01 \nThe sum 10 and 20 is : " + result);
}

// Q # 02
function ques02(){
    // Take two numbers
    let num1 = 20;
    let num2 = 6;

    // Perform operations
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;
    let modulus = num1 % num2;

    // Display results in browser
    document.write("Question 02" + "<br>")
    document.write("Subtraction: " + subtraction + "<br>");
    document.write("Multiplication: " + multiplication + "<br>");
    document.write("Division: " + division + "<br>");
    document.write("Modulus: " + modulus);
}

function ques03(){
let a;
document.write("Value after variable declaration is: " + a + "<br>");

a = 5;
document.write("Initial value: " + a + "<br>");

a++;
document.write("Value after increment is: " + a + "<br>");

a = a + 7;
document.write("Value after addition is: " + a + "<br>");

a--;
document.write("Value after decrement is: " + a + "<br>");

let remainder = a % 3;

document.write("The remainder is: " + remainder + "<br><br>");
}

function ques04(){
let ticketprice = 600;
let totaltickets = 5;
let totalcost = ticketprice * totaltickets ;

document.write("Cost of one movie ticket is " + ticketprice + "PKR" +"<br>");
document.write("Costumer buying " + totaltickets + " tikets" +"<br>");
document.write("Total cost to buy " + totaltickets + " tickets to a movie is " + totalcost + "PKR");
}

function ques05(){

let Tableprint = prompt("Which table do you want to print?");
let Limit = prompt("Up to which number do you want to print it?");
alert("Your table has been printed on your browser!")

document.write("Table of " + Tableprint + "<br>")
for(let i = 1; i <= Limit; i++){
    document.write(Tableprint + " x " + i + " = " + i * Tableprint + "<br>");
    
}

}