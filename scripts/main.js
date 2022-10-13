var wasClicked1 = false, wasClicked2 = false;
var firstClicked, secondClicked;
var card2;
var check_One, check_two;
var noFlip = false;
var score = 8;
const img1 = "images/dragonball/0.png";
const img2 = "images/dragonball/1.png";
const img3 = "images/dragonball/2.png";
const img4 = "images/dragonball/3.png";
const img5 = "images/dragonball/4.png";
const img6 = "images/dragonball/5.png";
const img7 = "images/dragonball/6.png";
const img8 = "images/dragonball/7.png";
const Cards = [img1, img2, img3, img4, img5, img6, img7, img8, img1, img2, img3, img4, img5, img6, img7, img8];
const shuffledArray = Cards.sort((a, b) => 0.5 - Math.random());

function scoreboard(){
    if (score == 0) {
        document.getElementById("score").innerText = "U WON";
    }
    else if (score > 0) {
        document.getElementById("score").innerText = "u still need " + score + " pairs";
        document.getElementById("delete")
    }
}

function flipCard(card1) {
    if (noFlip == false) {
        document.getElementById(card1).style.transition = 5;
        document.getElementById(card1).src = shuffledArray[card1];
        CheckCardClicked(card1);
    }
}


function CheckCardClicked(card1) {
    if (wasClicked1 == true && wasClicked2 == false) {
        secondClicked = card1;
        wasClicked2 = true;
        console.log(wasClicked2);
        noFlip = true;
        setTimeout(checkCardSame, 750);


    } else if (wasClicked1 == false) {
        firstClicked = card1;
        wasClicked1 = true;
        console.log(wasClicked1);
        document.getElementById(firstClicked).disabled = true;
    }
    card2 = card1;
}

function checkCardSame() {
    check_One = shuffledArray[firstClicked];
    check_two = shuffledArray[secondClicked];
    if (check_One == check_two) {
        console.log("yes")
        document.getElementById(firstClicked).disabled = true;
        document.getElementById(secondClicked).disabled = true;
        noFlip = false;
        firstClicked = 0;
        secondClicked = 0;
        wasClicked1 = false;
        wasClicked2 = false;
        score --;
        scoreboard();
    }
    else if (check_One != check_two) {
        document.getElementById(firstClicked).disabled = false;
        document.getElementById(firstClicked).src = "/images/dragonball/tile.png";
        document.getElementById(secondClicked).src = "/images/dragonball/tile.png";
        noFlip = false;
        firstClicked = 0;
        secondClicked = 0;
        wasClicked1 = false;
        wasClicked2 = false;
        console.log("no")
    }
}