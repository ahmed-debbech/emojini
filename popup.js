const chseck = document.getElementById("appl");
const add = document.getElementById("add_new");
const table = document.getElementById("emojis_table");

const general = document.getElementById("general").value;
//get stored data
chrome.storage.local.get(["general"], function(items){
    document.getElementById("general").value = items.general;
}); 
add.addEventListener("click", (e) => {
    var newRow = table.insertRow();
    var newCell = newRow.insertCell();
    var newCell1 = newRow.insertCell();
    var newText = document.createElement("INPUT");
    var newText1 = document.createElement("INPUT");
    newCell.appendChild(newText);
    newCell1.appendChild(newText1);
});
const focuselem = document.activeElement;
chseck.addEventListener("click", (e) => {
    alert("saving...");
    var gen = document.getElementById("general").value;
    chrome.storage.local.set({ 'general': gen }, function(){
        //  Data's been saved boys and girls, go on home
    });
});