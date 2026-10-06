let count = 0;

let countDisplay = document.getElementById("count");

document.getElementById("increase").onclick = function() {
    count++;
    countDisplay.textContent = count;
};

document.getElementById("decrease").onclick = function() {
    count--;
    countDisplay.textContent = count;
};

document.getElementById("reset").onclick = function() {
    count = 0;
    countDisplay.textContent = count;
};