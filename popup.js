const chseck = document.getElementById("appl");
const add = document.getElementById("add_new");
const table = document.getElementById("emojis_table");

const general = document.getElementById("general").value;
//get stored data
chrome.storage.local.get(["general", "emoji_sym", "emoji_key"], function(items){
    document.getElementById("general").value = items.general;
    console.log(items);
    if(items.emoji_sym){
        for(var i=0; i<=items.emoji_sym.length-1; i++){
            var newRow = table.insertRow();
            var newCell = newRow.insertCell();
            var newCell1 = newRow.insertCell();
            var newText = document.createElement("INPUT");
            newText.setAttribute("id", "ent_sym"+i);
            newText.setAttribute("value", items.emoji_sym[i]);
            newText.addEventListener("input", function(evt){
                newText.setAttribute("value", evt.target.value);
            });
            var newText1 = document.createElement("INPUT");
            newText1.setAttribute("id", "ent_key"+i);
            newText1.setAttribute("value", items.emoji_key[i]);
            newText1.addEventListener("input", function(evt){
                newText1.setAttribute("value", evt.target.value);
            });
            newCell.appendChild(newText);
            newCell1.appendChild(newText1);
        }
    }
}); 
add.addEventListener("click", (e) => {
    var size = table.rows.length;
    var newRow = table.insertRow();
    var newCell = newRow.insertCell();
    var newCell1 = newRow.insertCell();
    var newText = document.createElement("INPUT");
    newText.setAttribute("id", "ent_sym"+(size-1));
    var newText1 = document.createElement("INPUT");
    newText1.setAttribute("id", "ent_key"+ (size-1));
    newCell.appendChild(newText);
    newCell1.appendChild(newText1);
});
const focuselem = document.activeElement;
chseck.addEventListener("click", (e) => {
    alert("saving...");
    const count = document.getElementById("emojis_table").rows.length;
    var gen = document.getElementById("general").value;
    chrome.storage.local.set({ 'general': gen }, function(){
        //  Data's been saved boys and girls, go on home
    });
    var arr = [];
    for(var i = 0; i<=count-2; i++){
        var arremoji = document.getElementById("ent_sym"+i).value;
        //console.log("eee" + arremoji);
        arr.push(arremoji);
    }
    var arr1 = [];
    for(var j = 0; j<=count-2; j++){
        var arremoji1 = document.getElementById("ent_key"+j).value;
        arr1.push(arremoji1);
    }
    chrome.storage.local.set({ 'emoji_sym' : arr }, function(){
        //  Data's been saved boys and girls, go on home
    });
    chrome.storage.local.set({ 'emoji_key' : arr1}, function(){
        //  Data's been saved boys and girls, go on home
    });
});