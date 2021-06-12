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
        function updateValue(input) {
            ne = analyze(input.value);
            input.value = ne;
        }
        inputs[i].addEventListener('change', updateValue(inputs[i]));
    }
}