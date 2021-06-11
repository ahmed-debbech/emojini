//alert("passa");
const focuselem = document.activeElement;
//alert("33 " + focuselem.innerHTML);

var inputs = document.getElementsByTagName('input');
//alert(divs.length);

for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'text') {
        function updateValue(input) {
            input.value="changed!";
        }
        inputs[i].addEventListener('change', updateValue(inputs[i]));
    }
}