// this is for the main page
window.onload=function(){
    protanopes()
}


function protanopes() {
    var elements = $('*');

    for(var i = 0; i < elements.length; i++) {
       var current = elements[i];

       if (current && current.style) {
           current.style.color = 'green'
        }


        if(
            (current.children.length === 0 && current.textContent.replace(/ |\n/g,'') !== '') 
                || 
            checkIfTextTag(current.nodeName)
            ) {
                current.style.backgroundColor = 'blue'
        }
    }
}
