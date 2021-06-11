const chseck = document.getElementById("appl");
const add = document.getElementById("add_new");
const table = document.getElementById("emojis_table");

const general = document.getElementById("general").value;
//get stored data
chrome.storage.local.get(["general", "emoji_sym", "emoji_key"], function(items){
    document.getElementById("general").value = items.general;
    for(var i=0; i<=items.emoji_sym.length; i++){
        var newRow = table.insertRow();
        var newCell = newRow.insertCell();
        var newCell1 = newRow.insertCell();
        var newText = document.createElement("INPUT");
        newText.setAttribute("class", "entries");
        var newText1 = document.createElement("INPUT");
        newText1.setAttribute("class", "entries1");
        newCell.appendChild(newText);
        newCell1.appendChild(newText1);
    }
}); 
add.addEventListener("click", (e) => {
    var newRow = table.insertRow();
    var newCell = newRow.insertCell();
    var newCell1 = newRow.insertCell();
    var newText = document.createElement("INPUT");
    newText.setAttribute("class", "entries");
    var newText1 = document.createElement("INPUT");
    newText1.setAttribute("class", "entries1");
    newCell.appendChild(newText);
    newCell1.appendChild(newText1);
});
const focuselem = document.activeElement;
chseck.addEventListener("click", (e) => {
    alert("saving...");
    const count = document.getElementById("emojis_table").rows.length;
    alert(count);
    var gen = document.getElementById("general").value;
    chrome.storage.local.set({ 'general': gen }, function(){
        //  Data's been saved boys and girls, go on home
    });
    var arremoji = document.getElementsByClassName("entries");
    var arremoji1 = document.getElementsByClassName("entries1");
    var arr = [];
    for(var i = 0; i<=count-1; i++){
        arr.push({'sym' : arremoji[i].value});
    }
    var arr1 = [];
    for(var i = 0; i<=count-1; i++){
        arr.push({'key' : arremoji1[i].value});
    }
    chrome.storage.local.set({ 'emoji_sym' : arr }, function(){
        //  Data's been saved boys and girls, go on home
    });
    chrome.storage.local.set({ 'emoji_key' : arr1}, function(){
        //  Data's been saved boys and girls, go on home
    });
});