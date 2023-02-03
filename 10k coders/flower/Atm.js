// Checking the gratest number between two number
var x=30;
var y=40;
if(x > y){
    console.log("X is grater then y");
}
else{
    console.log("Y is grater then x");
}
// Checking the gratest number between three numbers
var a=10;
var b=20;
var c=30;
if(a > b && a > c){
    console.log("A is grater then B and C");
}
else if (b > a && b > c){
    console.log("B is grater then A and C");

}
else{
    console.log("C is grater then A and B");
}
// Checking the odd or Even number
// var b= alert("do you want all this website ")
// var a=prompt("enter the number");
var a=6;
if(a % 2 == 0){
    console.log(a);
    console.log("Even number");

}
else{
    console.log("Odd number");
    console.log(a);
}
//Atm Mechine working
var x = alert("insert Your Card");
var x = prompt("Enter your Pin");
if(x == "97045"){
    console.log(b=(prompt("Check Balance press 1, Changing the Pin press 2,Widthdrawal press 3 ")));
    if(b == 1){
        console.log("Your Balance:5000 ");
    }
    else if(b == 2){
        console.log(c=(prompt("Enter Your Account number")));
        if(c == 62492747211){
            console.log(d=(prompt("Enter your New Pin")));
            if(x == d){
                console.log(g=prompt("Set the different pin other then old one"));
                if(g == x){
                    console.log(alert("Sorry You Exceeded multiple items"))
                }
            }
            else{
                console.log(alert("Succss fully Chenged your pin"));
            }
        }else{
            console.log("You Enter wrong Account number");
        }
    }
    else if(b == 3){
    
        console.log(f=(prompt("Enter the money multiples of 500")));
        if(f > 5000){
            console.log(f=prompt("Insufficient funds"));
            if(f > 5000){
                console.log(alert("Sorry You Exceeded multiple items"))
            }
        }
        else{
            console.log("Collect Your Money");
        }
    }
}else{
    console.log(alert("You Enter the worn pin"));
}
//Swicth stament
var day=9;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    default:
        console.log("Their is no day")


}
