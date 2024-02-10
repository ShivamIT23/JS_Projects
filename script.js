let ans = document.getElementById("Answer");
let ques = document.getElementById("questiontext");
let button = document.getElementById("button1");
let form = document.getElementById("Guess");
let check = document.getElementById("button2");
let papa = document.getElementById("answer2");
let i=1;
let n=0;
let random =  Math.floor(Math.random()*101);
function gamers(){
    form.hidden =false;
    form.value="0";
    check.hidden = false;
    papa.hidden = true;
    ques.innerHTML = `Guess the number ---->`;
    
    }
function fn1(){
    n=form.value;
    n=Number.parseInt(n);
        if(n<random){
        ques.innerHTML =`${n} is Wrong. \n Go higher! , You can do it.`;
        i++;
    }
    else if(n>random){
        ques.innerHTML =`${n} is Wrong. \n Go Lower , You can do it.`;
        i++;
    }
    else if(n==random){
        form.hidden = true;
        check.hidden = true;
        papa.hidden = false;
        ques.innerHTML = `<b>${n}</b> is Right. Congratulation! You Guessed it correctly , Your score is  + ${100-i}`
        papa.innerHTML = `Congratulation! You Guessed it correctly in <b>${i}</b> times.`
    }
    else {
        ques.innerHTML = `${n} You entered non-number value.`
    }
}

button.addEventListener("click",gamers);
check.addEventListener("click",fn1);
form.keyup((e)=>{
    if(e.keyCode === 13){
        fn1();
    }
})