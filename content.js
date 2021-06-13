function analyze(text){
    alert("inside " + text);
    let r = RegExp('_&lg');
    alert(text.match(r));
    var matches = text.match(r);
    var str = text;
    //for(var i=0; i<= matches.length; i++){
        var st = str.replace('_&lg', "😂");
        alert("changedd " + st);
    //}
    return st;
}
const focuselem = document.activeElement;

var inputs = document.getElementsByTagName('input');

function updateValue(input) {
    ne = analyze(input);
    input = ne;
    return input;
}
for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'text') {
        //alert("main " + tt);
        let elem = inputs[i];
        inputs[i].addEventListener('keyup', (e) => {
            if(e.key === " "){
                let tt = elem.value;
                let hh = updateValue(tt);
                elem.value = hh;
            }
        });
    }
}