var timer = 60;
var score = 0;
var hitval =0;
function incscore(){
    score += 10;
    document.querySelector("#incScore").innerHTML = score;
}

function getNewHit(){
     hitval = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitval;
}

function makebubble(){
    var clutter = "";
for(let i =1;i<=154;i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".cbtm").innerHTML = clutter;
}

function runtimer(){
var timerint = setInterval(function(){
    
if(timer>0){

    timer--;
document.querySelector("#timeval").textContent = timer;
}
else{
    document.querySelector(".cbtm").innerHTML=`<h1> Game Over <h1>`
    clearInterval(timerint)
}
},1000)
}

document.querySelector(".cbtm")
.addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitval){
        incscore();
        makebubble();
        getNewHit();
    }
})
runtimer();
makebubble();
getNewHit();
