let gameSeq=[];
let userSeq=[];

let btns = ['yellow', 'red', 'purple', 'green'];
let started = false;
let level = 0;

let h2 = document.querySelector('h2');
document.addEventListener('keydown', function(){
    if(started == false){
        console.log('game is started');
        started = true;

        levelup();

    }
});

function gameflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}

function userflash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randidx = Math.floor(Math.random() *4);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log('randidx');
    // console.log('randcolor');
    // console.log('randbtn');
    gameSeq.push(randcolor);
    // console.log(gameSeq);

    gameflash(randbtn);

}
function checkans(idx){
    // let idx = level-1;
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over ! Your score was <b>${level}</b> <br>  Press any key to start.`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';

        },150);
        reset();
    }


}

function btnpress(){
    // console.log(this);
  let btn = this;
  userflash(btn);

  usercolor = btn.getAttribute('id');
  userSeq.push(usercolor);
  checkans(userSeq.length - 1);
}

let allbtns = document.querySelectorAll('.btn')
for(btn of allbtns){
    btn.addEventListener('click', btnpress)
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}