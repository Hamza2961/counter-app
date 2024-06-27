let count = 0;
let countplease = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("rst-btn")
let dtpeEL = document.getElementById("dtpe-btn")
function increment() {
    count = count + 1
    countplease.innerText = count
}
function save() {
    console.log(count)
    let countStr = count + " - " + " "
    saveEl.innerText += countStr
    count = 0
    countplease.innerText = 0
}
function DTPE() {
    saveEl.innerText = "Previous Entries: "
    console.log(saveEl)

}