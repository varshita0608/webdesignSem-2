// function calculateResult(){
//     let n=document.getElementById("subjects").value;
//     let total=0;

//     for(let i=1;i<=n;i++){
//         let marks=parseFloat(prompt("Enter marks for subject"+i));
//         total=total+marks;
//     }

//     let average=total/n;
//     let grade;
//     let result;
//     if(average>=90){
//         grade="A+";
//     }
//     else if(average>=75){
//         grade="A";
//     }
//     else if(average>=60){
//         grade="B+";
//     }
//     else if(average>=50){
//         grade="C";
//     }
//     else if(average>=40){
//         grade="C-";
//     }
//     else{
//         grade="F"
//     }

//     // if(marks>=35){
//     //     result="pass";
//     // }
//     // else{
//     //     result="Fail";
//     // }
//     if(fail){
//         result = "Fail";
//     }
//     else{
//         result = "Pass";
//     }

//     document.getElementById("result").innerHTML =
// "Total Marks: " + total + "<br>" +
// "Average: " + average.toFixed(2) + "<br>" +
// "Grade: " + grade + "<br>" +
// "Result: " + result;
// }
function calculateResult(){

let n = document.getElementById("subjects").value;

let total = 0;
let fail = false;

for(let i=1;i<=n;i++){

let marks = parseFloat(prompt("Enter marks for subject " + i));

total = total + marks;

if(marks < 35){
fail = true;
}

}

let average = total/n;

let grade;

if(average>=90){
grade="A+";
}
else if(average>=75){
grade="A";
}
else if(average>=60){
grade="B+";
}
else if(average>=50){
grade="C";
}
else if(average>=40){
grade="C-";
}
else{
grade="F";
}

let result;

if(fail){
result="Fail";
}
else{
result="Pass";
}

document.getElementById("result").innerHTML =
"Total Marks: "+total+"<br>"+
"Average: "+average.toFixed(2)+"<br>"+
"Grade: "+grade+"<br>"+
"Result: "+result;

}