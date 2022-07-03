const myArray = [
    "Rock",
    "Paper",
    "Scissors"
]

window.onload = () => {
    let score = document.querySelector('.score_num');
    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
    const button = document.querySelector(".info_button");
    const player1 = document.querySelector(".player1_img");
    const player2 = document.querySelector(".player2_img");
    const info = document.querySelector(".info_header")
    const pick = document.querySelector('.pick');
    const rock = document.querySelector('.rock-pick');
    const paper = document.querySelector('.paper-pick');
    const scissors = document.querySelector('.scissors-pick');

        // score = Number(score);

let player;

player = prompt("Enter your name");
firstChar = player.slice(0,1);
firstChar = firstChar.toUpperCase();
player = firstChar + player.slice(1,30) || "Player";



button.onclick = function rps() {

    button.style.transform = 'scale(1.02)';

    var target;
    pick.onclick = (e) => {
        target = e.target.alt;

        const p1 = myArray[Math.floor(Math.random() * 3)]; 
        const p2 = target;


        console.log(p1, p2)


        if(p1 === "Rock") {
            img1.src = 'images/icon-rock.svg';
            player1.style.borderColor = 'hsl(349, 71%, 52%)';
        } else if(p1 === "Paper") {
            img1.src = 'images/icon-paper.svg';
            player1.style.borderColor = 'hsl(230, 89%, 62%)';
        } else if(p1 === "Scissors") {
            img1.src = 'images/icon-scissors.svg';
            player1.style.borderColor = 'hsl(39, 89%, 49%)';
        }

        if(p2 === "Rock") {
            img2.src = 'images/icon-rock.svg';
            player2.style.borderColor = 'hsl(349, 71%, 52%)';
        } else if(p2 === "Paper") {
            img2.src = 'images/icon-paper.svg';
            player2.style.borderColor = 'hsl(230, 89%, 62%)';
        } else if(p2 === "Scissors") {
            img2.src = 'images/icon-scissors.svg';
            player2.style.borderColor = 'hsl(39, 89%, 49%)';
        }
    
        if(p1 === p2) {
            info.innerHTML = "IT'S A DRAW";
        } else if(p1 === "Rock" && p2 === "Paper") {
            info.innerHTML = `${player} win`;
            score.innerHTML++;
        } else if(p1 === "Paper" && p2 === "Rock") {
            info.innerHTML = "BOT wins";
        } else if(p1 === "Scissors" && p2 === "Rock") {
            info.innerHTML = `${player} win`;
            score.innerHTML++;
        } else if(p1 === "Rock" && p2 === "Scissors") {
            info.innerHTML = "BOT wins";
        } else if(p1 === "Paper" && p2 === "Scissors") {
            info.innerHTML = `${player} win`; 
            score.innerHTML++;
        } else if(p1 === "Scissors" && p2 === "Paper") {
            info.innerHTML = "BOT wins";
        }
    }
}

}

