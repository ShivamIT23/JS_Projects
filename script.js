let ans = document.getElementById("Answer");
let ques = document.getElementById("questiontext");
let button = document.getElementById("button1");
let form = document.getElementById("Guess");
let check = document.getElementById("button2");
let i=1;
let random =  Math.floor(Math.random()*101);
function gamers(){
    form.hidden =false;
    check.hidden = false;
    ques.innerHTML = `Guess the number ---->`;

 
    }
        
function checkTheNumber(n){
    if(n<random){
        ques.innerHTML =`${n} is Wrong. \n Go higher! , You can do it.`;
    }
    else if(n>random){
        ques.innerHTML =`${n} is Wrong. \n Go Lower , You can do it.`;
    }
    else {
        form.hidden = true;
        check.hidden = true;
        ques.innerHTML = `${n} is Right. Congratulation! You Guessed it correctly , Your score is  + ${100-i}`
        ans.innerHTML = `Congratulation! You Guessed it correctly in ${i} times.`
    }
}
button.addEventListener("click",gamers);