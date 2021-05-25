var character = document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    if(character.classList != "animate"){
         character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var buttonn = document.getElementById("btn");

var text = document.getElementById("text").innerHTML = "Go!!";  
var score = document.getElementById("score").innerHTML = "Score: ";

var checkded = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockleft < 70 && blockleft >0 && characterTop>=160){
        block.style.animation = "none";
        block.style.display = "none";

        buttonn.style.visibility = "visible"

        clearInterval(tut);
        clearInterval(tut2);
     
document.getElementById("text").innerHTML = "you have died";
var score = document.getElementById("score").innerHTML = 'Score: ' + time1 * time2;
    }
},10);

//timer function
var time1 = 0;
var timemult = 1;
 function time(){
    time1 += timemult;
    var timeArea = document.getElementById("timedisplay");
timeArea.innerHTML = time1 ;
}
var tut = setInterval(time, 10)

var time2 = 0;
var timemult2 = 1;
 function timeA(){
    time2 += timemult2;
    var timeArea2 = document.getElementById("timedisplay2");
timeArea2.innerHTML = time2 ;
}
var tut2 = setInterval(timeA, 1000)




// refresh button
function refreshPage(){
    window.location.reload();
} 



//custom cursor
var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

});

