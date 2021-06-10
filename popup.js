const chseck = document.getElementById("appl");
const focuselem = document.activeElement;
chseck.addEventListener("click", (e) => {
    alert(focuselem.id);
});