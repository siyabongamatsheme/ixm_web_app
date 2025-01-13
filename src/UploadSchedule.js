
const log = document.querySelector(".event-log-contents");

document.addEventListener("DOMContentloaded", () => {

    console.log("DOM fully loaded and parsed");
    const allswitch = document.querySelectorAll(".ixm-tabitem");
    const allswitchList = document.querySelectorAll(".ixm-tabitem-content");


})

document.addEventListener("click", myFunction1);

function myFunction1() {
console.log("First function was executed! ");
log.textContent += "Function was executed!\n";


alert("Hello");
const allswitch = document.querySelectorAll(".ixm-tabitem");
const allswitchList = document.querySelectorAll(".ixm-tabitem-content");    

allswitch.forEach((sw) => {
    sw.addEventListener('click', () => {
        allswitch.forEach((t) => t.classList.remove("ixm-tabitem-selected"))
        sw.classList.add("ixm-tabitem-selected");    

        allswitchList.forEach((tl) => {
        tl.style.display = tl.id == sw.getAttribute("data-tab") ? "block" : "none";
        })

    })

})
}