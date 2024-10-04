let btns = document.querySelectorAll('.btn');
let reset = document.getElementById('reset');

let turnO = true;

const win = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]];

btns.forEach((btns) => {
    btns.addEventListener("click", () => {
        if (turnO) {
            btns.innerText = "O";
            turnO = false;
        } else {
            btns.innerText = "X";
            turnO = true;
        }
        btns.disabled = true;
        checkWin();
    })
});

const checkWin = () =>{
    for (let pattern of win){
        if (btns[pattern[0]].innerText === btns[pattern[1]].innerText && btns[pattern[1]].innerText === btns[pattern[2]].innerText && btns[pattern[0]].innerText!== "") {
            let winner = btns[pattern[0]].innerText;
            declare(winner);
        }
    }
};

const desable = () => {
    for(let btn of btns){
        btn.disabled = true;
    }
}

const declare = (winner) => {
    desable();
    result = document.querySelector("#result");
    result.innerText = `${winner} wins!`;
    result.classList.add('result');
};

reset.addEventListener("click", () => {
    location.reload();
});