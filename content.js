//alert("passa");
const focuselem = document.activeElement;
//alert("33 " + focuselem.innerHTML);

var inputs = document.getElementsByTagName('input');

for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'text') {
        //alert("ffff");
        //alert(inputs[i].innerHTML);
        function updateValue(e) {
            alert("bogga");
        }
        var inn = inputs[i].addEventListener('change', updateValue);
    }
}

