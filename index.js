const homeNumber = document.getElementById("pointsHome");
const guestNumber = document.getElementById("pointsGuests");

let counterHome = 0;
let counterGuests = 0;

function resetBtn() {
    homeNumber.textContent = 0;
    guestNumber.textContent = 0;
    counterHome = 0;
    counterGuests = 0; 
}

function addOneHome() {
    homeNumber.textContent = counterHome += 1;
}

function addTwoHome() {
    homeNumber.textContent = counterHome += 2;
}

function addThreeHome() {
    homeNumber.textContent = counterHome += 3;
}

function addOneGuests() {
    guestNumber.textContent = counterGuests += 1;
}

function addTwoGuests() {
    guestNumber.textContent = counterGuests += 2;
}

function addThreeGuests() {
    guestNumber.textContent = counterGuests += 3;
}