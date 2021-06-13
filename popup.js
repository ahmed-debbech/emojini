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
            newRow.setAttribute("id" , "row"+ i);
            var newCell = newRow.insertCell();
            var newCell1 = newRow.insertCell();
            var newCell2 = newRow.insertCell();
            var newText = document.createElement("INPUT");
            newText.setAttribute("id", "ent_sym"+i);
            newText.setAttribute("value", items.emoji_sym[i]);
            var newText1 = document.createElement("INPUT");
            newText1.setAttribute("id", "ent_key"+i);
            newText1.setAttribute("value", items.emoji_key[i]);
            var button = document.createElement("BUTTON");
            button.setAttribute("id", "remove"+ i );
            button.innerText = "X";
            newCell.appendChild(newText);
            newCell1.appendChild(newText1);
            var k = i;
            button.addEventListener("click", (e) => {
                document.getElementById("emojis_table").deleteRow(k.toString());
            });
            newCell2.appendChild(button);
        }
    }
}); 
add.addEventListener("click", (e) => {
    var size = table.rows.length;
    var newRow = table.insertRow();
    newRow.setAttribute("id" , "row"+ (size-1));
    var newCell = newRow.insertCell();
    var newCell1 = newRow.insertCell();
    var newCell2 = newRow.insertCell();
    var newText = document.createElement("INPUT");
    newText.setAttribute("id", "ent_sym"+(size-1));
    var newText1 = document.createElement("INPUT");
    newText1.setAttribute("id", "ent_key"+ (size-1));
    var button = document.createElement("BUTTON");
    button.setAttribute("id", "remove"+ (size-1));
    button.innerText = "Remove";
    var k = size;
    button.addEventListener("click", (e) => {
        document.getElementById("emojis_table").deleteRow(k.toString());
    });
    newCell.appendChild(newText);
    newCell1.appendChild(newText1);
    newCell2.appendChild(button);
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
        var arremoji = document.getElementById("ent_sym"+i);
        if(arremoji != null){
            arr.push(arremoji.value);
        }
    }
    var arr1 = [];
    for(var j = 0; j<=count-2; j++){
        var arremoji1 = document.getElementById("ent_key"+j);
        if(arremoji1 != null){
            arr1.push(arremoji1.value);
        }
    }
    chrome.storage.local.set({ 'emoji_sym' : arr }, function(){
        //  Data's been saved boys and girls, go on home
    });
    chrome.storage.local.set({ 'emoji_key' : arr1}, function(){
        //  Data's been saved boys and girls, go on home
    });
});