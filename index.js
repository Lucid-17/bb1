let homeEl = document.getElementById("homeScore")
let awayEl = document.getElementById("awayScore")
let homeCount = 0
let awayCount = 0

function addOneHome() {
    homeCount += 1
    homeEl.textContent = homeCount
}
function addTwoHome() {
    homeCount += 2
    homeEl.textContent = homeCount
}
function addThreeHome() {
    homeCount += 3
    homeEl.textContent = homeCount
}

function addOneAway() {
    awayCount += 1
    awayEl.textContent = awayCount
}
function addTwoAway() {
    awayCount += 2
    awayEl.textContent = awayCount
}
function addThreeAway() {
    awayCount += 3
    awayEl.textContent = awayCount
}

function removeOneHome() {
    homeCount -= 1
    homeEl.textContent = homeCount
}
function removeOneAway() {
    awayCount -= 1
    awayEl.textContent = awayCount
}