let ans = document.getElementById("Answer");
let ques = document.getElementById("questiontext");
let button = document.getElementById("button1");
button.onclick = function(){
let random =  Math.floor(Math.random()*101);
let n;
let i=1;

ques.innerHTML = "Guess the number &rarr";
  do{
  if(n<random){
    alert("Go higher! , You can do it");
    i++;
  }
  else if(n>random){
    alert("Go Lower , You can do it");
    i++;
  }
}while(n!=random);
alert("Congratulation! You Guessed it correctly , Your score is " + (100-i));  
console.log("Congratulation! You Guessed it correctly in " + i + " times.");  
}