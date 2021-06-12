function analyze(text){
    let r = RegExp('_&lg');
    alert(text.match(r));
    var matches = text.match(r);
    var str = text;
    //for(var i=0; i<= matches.length; i++){
        var st = str.replace('_&lg', "😂");
        alert(st);
    //}
    return st;
}
const focuselem = document.activeElement;

var inputs = document.getElementsByTagName('input');

for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'text') {
        inputs[i].addEventListener('keyup', 
        function updateValue(e,inputs, i) {
            if(e.keyCode == 32){
                ne = analyze(inputs[i].value);
                inputs[i].value = ne;
            }
        });
    }
}