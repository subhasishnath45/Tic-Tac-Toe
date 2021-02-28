let x = "x";
let o = "o";
let turns = 0;

var spot1 = document.getElementById('spot1');
var spot2 = document.getElementById('spot2');
var spot3 = document.getElementById('spot3');
var spot4 = document.getElementById('spot4');
var spot5 = document.getElementById('spot5');
var spot6 = document.getElementById('spot6');
var spot7 = document.getElementById('spot7');
var spot8 = document.getElementById('spot8');
var spot9 = document.getElementById('spot9');

var player1Score = 0;
var player2Score = 0;

var p1scoreElem = document.getElementById('p1score');
var p2scoreElem = document.getElementById('p2score');

var boardliAll = document.querySelectorAll('#board li');


for(var i = 0;i < boardliAll.length; i++){
    boardliAll[i].addEventListener('click', function(){
        // alert('li clicked');
        if((turns == 9)){
            alert('Tie Game');
            this.innerHTML = '+';
            this.classList.remove("disable");
            this.classList.remove(o);
            this.classList.remove(x);
            turns = 0;
        }else if(this.classList.contains('disable')){
            alert('This spot is already filled.');
        }else if(turns % 2 == 0){ //even turns
            // Turn for player o.
            turns++;
            this.innerHTML = o;
            this.classList.add("disable","o");
            this.style.cursor = "not-allowed";
            this.style.userSelect = "none";

            // winning conditions for o player.
            if(spot1.classList.contains(o) && spot2.classList.contains(o) && spot3.classList.contains(o) ||
               spot4.classList.contains(o) && spot5.classList.contains(o) && spot6.classList.contains(o) ||
               spot7.classList.contains(o) && spot8.classList.contains(o) && spot9.classList.contains(o) ||
               spot1.classList.contains(o) && spot4.classList.contains(o) && spot7.classList.contains(o) ||
               spot2.classList.contains(o) && spot5.classList.contains(o) && spot8.classList.contains(o) ||
               spot3.classList.contains(o) && spot6.classList.contains(o) && spot9.classList.contains(o) ||
               spot1.classList.contains(o) && spot5.classList.contains(o) && spot9.classList.contains(o) ||
               spot3.classList.contains(o) && spot5.classList.contains(o) && spot7.classList.contains(o)){
                   this.innerHTML = o;
                   setTimeout(function () {
                    alert('Winner is o');
                    player1Score++;
                    p1scoreElem.innerHTML = player1Score;
                    // console.log(this);
                    for(var i = 0;i < boardliAll.length; i++){
                        boardliAll[i].innerHTML = '+';
                        boardliAll[i].classList.remove('disable',o,x);
                    }
                    turns = 0;
                }, 300);
            }
        }else{ // odd turns
            // Turn for player x.
            turns++;
            this.innerHTML = x;
            this.classList.add("disable","x");
            this.style.cursor = "not-allowed";
            this.style.userSelect = "none";

            // winning conditions for x player.
            if(spot1.classList.contains(x) && spot2.classList.contains(x) && spot3.classList.contains(x) ||
               spot4.classList.contains(x) && spot5.classList.contains(x) && spot6.classList.contains(x) ||
               spot7.classList.contains(x) && spot8.classList.contains(x) && spot9.classList.contains(x) ||
               spot1.classList.contains(x) && spot4.classList.contains(x) && spot7.classList.contains(x) ||
               spot2.classList.contains(x) && spot5.classList.contains(x) && spot8.classList.contains(x) ||
               spot3.classList.contains(x) && spot6.classList.contains(x) && spot9.classList.contains(x) ||
               spot1.classList.contains(x) && spot5.classList.contains(x) && spot9.classList.contains(x) ||
               spot3.classList.contains(x) && spot5.classList.contains(x) && spot7.classList.contains(x)){
                   this.innerHTML = x;
                   setTimeout(function () {
                        alert('Winner is x');
                        player2Score++;
                        p2scoreElem.innerHTML = player2Score;
                        for(var i = 0;i < boardliAll.length; i++){
                            boardliAll[i].innerHTML = '+';
                            boardliAll[i].classList.remove('disable',o,x);
                        }
                        turns = 0;
                }, 300);
            }

        }
    });
}

document.getElementById('reset').addEventListener('click', function(){

    for(var i = 0;i < boardliAll.length; i++){
        boardliAll[i].innerHTML = '+';
        boardliAll[i].classList.remove('disable',o,x);
        turns = 0;
        boardliAll[i].style.cursor = "pointer";
        boardliAll[i].style.userSelect = "auto";
    }

});


