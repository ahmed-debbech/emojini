function analyze(text, elem){
    chrome.storage.local.get(["general", "emoji_sym", "emoji_key"], function(items){
        setNewText(items,text,elem);
    }); 
}
function setNewText(items,text,elem){
    alert(items.emoji_key);
    alert(items.emoji_sym);
    alert(items.emoji_key.length);
    for(var i=0; i<=items.emoji_key.length-1; i++){
        alert(i);
        let bind = items.general + items.emoji_key[i];
        let r = RegExp(bind);
        alert(bind);
        var str = elem.value;
        alert("val " + elem.value);
        if(str.match(r) != null){
            for(var k = 0; k<=str.match(r).length-1; k++){
                alert("dd " + items.emoji_sym[i]);
                var st = str.replace(bind, items.emoji_sym[i]);
                elem.value = st;
            }
        }else{
            alert("no have ");
        }
    }
}
const focuselem = document.activeElement;

var inputs = document.getElementsByTagName('input');

function updateValue(input, elem) {
    ne = analyze(input, elem);
    input = ne;
    return input;
}
for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'text') {
        let elem = inputs[i];
        inputs[i].addEventListener('keyup', (e) => {
            if(e.key === " "){
                let tt = elem.value;
                updateValue(tt, elem);
            }
        });
    }
}