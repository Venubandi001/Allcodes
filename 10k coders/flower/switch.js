// Selecting the months
// var month = prompt("Enter Select Month");
// month = Number(month);
// switch (month) {
//   case 1:
//     alert("January");
//     break;
//   case 2:
//     alert("February");
//     break;
//   case 3:
//     alert("March");
//     break;
//   case 4:
//     alert("April");
//     break;
//   case 5:
//     alert("May");
//     break;
//   case 6:
//     alert("June");
//     break;
//   case 7:
//     alert("July");
//     break;
//   case 8:
//     alert("August");
//     break;
//   case 9:
//     alert("September");
//     break;
//   case 10:
//     alert("October");
//     break;
//   case 11:
//     alert("November");
//     break;
//   case 12:
//     alert("December");
//     break;
//   default:
//     alert("They are only 12 months in a year select According");

// }
// Pic hero name get the his movies------------------------------------------------------------------.................
// var x=prompt("Select hero name get the his movies Surya,NTR,Vikram,Rajinikath,Nani,Balayya");
// switch(x){
//     case "Surya":
//         alert("Ghajini"+ " " +"ET"+" " + "Jai Bhim"+" "+"Singam 3" + " "+"Udaan"+" "+"24"+ " "+"Surya s/o Krishnan");
//         break;
//     case "NTR":
//         alert("RRR,Aravinda Sametha,Janatha Garage,Nannaku prematho,NTR 30,Jai Lava Kusa,Simhadri");
//         break;
//     case "Vikram":
//         alert("Kasi,Saamy,I,Ponniyin Sevan:1,Sethu,Sketch,Gemini,Raavan,Bheemaa");
//         break;
//     case "Rajinikath":
//         alert("Jailer,Darbar,Robo 2.0,Robo,Sivaji,Kabali,Petta,Chandramukhi,Kaala,Baba,Lingaa");
//         break;
//     case "Nani":
//         alert("Shyam singha Roy, Ante Sundaraniki,V,Dasara,Eega,Jersey,Bheemli Kabaddi Jattu,Tuck Jagadish,Gang Leader,HIT,MCA");
//         break;
//     case "Balayya":
//         alert("Akhanda,Veera Simha Reedy,Legend,Simha,Jai Simha,Chennakesava Reddy,Samarasimha Reddy,Paisa Vasool,Ruler,Dictator,Lion");
//         break;
//     default:
//         alert("Select the hero names according to the List");

// }
//addition Subtraction Multiplication----------------------------------------------------------------
// var a=prompt("Enter the first number");
// var b=prompt("Enter the Second number");
// var c=prompt("what operation want to perform");
// if(c == "add"){
//     a=Number(a);
//     b=Number(b);
//     d=a+b;
//     alert(d);   
// }
// else if(c == "sub"){
//     d=a-b;
//     alert(d);
// }
// else if(c == "mul"){
//     d=a*b;
//     alert(d);
// }
// else if(c == "div"){
//     d=a/b;
//     alert(d);
// }
// else{
//     alert("their is no arthematic operation");
// }
//counting array length ---------------------------------------------------------------------
// var a=[1,2,3,4,5,6,7,8,9,10];
// var count=0;
// for(var i=0; i<=a.length; i++){
//     count++;
// }
// console.log(count);
//-------------------------------------------------------------------------------------------------
//Printing the P****** and *********d
// var a=prompt("Enter password");
// console.log(alert(a=a[0].padStart(a.length,"*")));
// console.log(alert(a=a[a.length-1].padStart(a.length,"*")));

// example chaitanya=4 kiran=2 rakesh=2 ok=1 
// var a=prompt("Enter password");
// for(var i=0; i<a.length; i++){
//     if(a.length == 2){
//         console.log(alert(Math.trunc([a.length]/2)));
//         break;
//     }
//     else{
//         console.log(alert(Math.trunc([a.length-1]/2)));
//         break; 
//     }
    
// }
//Finding the number of Vowels in String...........................................................
//  var k=prompt("Enter the String");
//  var count =0;
//  for(var j=0;j<k.length;j++){
//     var ch=k.charAt(j);
//     // if(ch == ch.match(/a/i) || ch == ch.match(/e/i) || ch == ch.match(/i/i) || ch == ch.match(/o/i) || ch == ch.match(/u/i)){
//        if( ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u"){
//             count++;
//         }
//  }
//  console.log(alert("Number of Vowels" +" " + count));
//Combing First name first letter and last name last lester......................................
//  var ff=prompt("Enter yor first name and last name");
//  ll=ff.split(" ");
//  console.log(ll);
//  ss=ll[0][0]+ll[1][0];
//  console.log(alert(ss.toUpperCase()));
 
//using function performing action.................................................................................

// function name(add,sub,div,mut) {
//    // var c=toString();
//    a=prompt('enter the first value');
//    b=prompt('enter the second value');
//    c=prompt('what action is to perform');
//    switch(c){
//       case "add":
//          a=Number(a);
//          b=Number(b);
//          return a+b;
//       case "sub":
//          return a-b;
//       case "mul":
//          return a*b;
//       case "div":
//          return a/b;
//       default:
//          console.log("the operation not their");
      
//    }
   
// }
// // a=prompt('enter the first value');
// // b=prompt('enter the second value');
// // c=prompt('what action is to perform');
// // c.toString();
// console.log(name());
//Printing the array double from------------------------------------------------------------------------------------
        // let a = [1,2,3,4,5];
        // for (let i = 0; i < a.length; i++) {
        //     console.log(a[i]*2);   
        // }
        //second methode-------------------------------------------------------------------------
        // let b=[1,2,3,4,5];
        // let c= b.map(n1);
        // function n1(value,index,array) {
        //     return value*2;
        // }
        // console.log(c);
        //thired methode------------------------------------------------------
        // let a =[1,2,3,4,5];
        //  a.forEach(hell);

        // function hell(value,index,array) {
        //     // console.log(value *2);
        //     return value*2;
        // }
        // console.log(a);
        //Printing posetive numbers-----------------------------------------------------------------------------------
        // let b=[-1,-2,-3,-4,-5,0,1,2,3,4,5];
        // // let c= b.map(n1);
        // for (let i = 0; i< b.length; i++) {
        //   if(b[i] >=0){
        //     console.log(b[i]);
        //   }   
        // }
        // let a=[-1,-2,-3,1,2,3,4,5] ;print positive values using filter;---------------------------------
        // let a=[-1,-2,-3,1,2,3,4,5];
        // let b = a.filter(hell);
        // function hell(value,index,array) {
        //   return value >=0;
        // }
        // console.log(b);// OutPut:  [1, 2, 3, 4, 5]
   //separating -ve and +ve values in array using map method ---------------------------------------------------------------------------
   /*let a = [-1,-2,-3,-4,-5,0,1,2,3,4,5];
   let b = a.map(n1);
   function n1(value,index,array) {
          // return value;
          if(value >=0){
            return value;
          }
   }
   console.log(b);*/
   //sum of positive Values using reduces--------------------------------------
  //  var r = [-1,-2,-100,0,1,77];
  //  var k = r.reduce(hell,0);
  //  function hell(total,value,index,array) {
  //   // return value -total ;
  //   // if(value >= 0){
  //   //   return total+value;
  //   // }
    
  //  }
  //  console.log(k);
  //Printing the Even numbers using map--------------------------------------------
  // let g = [1,2,3,4,5];
  // let v =g.map(hell);
  // function hell(value,index,array) {
  //   if( value % 2 ==0){
  //     return value;
  //   }
  // }
  // console.log(v);//output    [undefined, 2, undefined, 4, undefined]
 // keys and entirs -------------------------------------------------
//  let a = [1,2,3,4,5];
//   let b = a.entries();
//   console.log(b);
//   for(aa of b){
//     console.log(aa);
//   }   
//create a programe to print all  indexs values in a string and Create a programe to print above primes indexes values in reverse order

// let v ="venubandiyadv";
// console.log(v);
// let k="";
// for (let i = 2; i < v.length; i++) {
//   // console.log(i);
//    if( i %2 == 0){
//       k=k+v[i];
//    }
// }
// console.log(k);
// let w ="";
// for (let j = 0; j < k.length; j++) {
//   w=k[j]+w;
// } 
// console.log(w);
//otp generation --------------------------------------------
// let b = Math.random();
// console.log(b.toFixed(4));
// let c = b.toFixed(2)*10000;
// console.log(Math.ceil(c));