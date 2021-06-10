//alert("passa");
const focuselem = document.activeElement;
//alert("33 " + focuselem.innerHTML);

var inputs = document.getElementsByTagName('input');
var divs = document.getElementsByTagName('span');
alert(divs.length);

for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'text') {
        function updateValue(input) {
            input.value = "||||e||";
        }
        inputs[i].addEventListener('change', updateValue(inputs[i]));
    }
}

for(var i = 0; i < divs.length; i++){
        function updateValue(input) {
            input.textContent ="||||||||";
        }
        divs[i].addEventListener('click', updateValue(divs[i]));
}
