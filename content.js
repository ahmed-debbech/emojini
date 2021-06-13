function analyze(text, elem){
    chrome.storage.local.get(["general", "emoji_sym", "emoji_key"], function(items){
        setNewText(items,text,elem);
    }); 
}
function setNewText(items,text,elem){
    for(var i=0; i<=items.emoji_key.length-1; i++){
        let bind = items.general + items.emoji_key[i];
        let r = RegExp(bind);
        var str = elem.value;
        if(str.match(r) != null){
            for(var k = 0; k<=str.match(r).length-1; k++){
                var st = str.replace(bind, items.emoji_sym[i]);
                elem.value = st;
            }
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
    //if(inputs[i].type.toLowerCase() == 'text' || inputs[i].type.toLowerCase() == 'search') {
        let elem = inputs[i];
        inputs[i].addEventListener('keyup', (e) => {
            if(e.key === " "){
                let tt = elem.value;
                updateValue(tt, elem);
            }
        });
    //}
}