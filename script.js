// this is for the main page
window.onload=function(){
    protanopes()

    chrome.storage.sync.get(['mode'], function(result) {
        console.log('Value currently is ' + result.mode);
      });
    console.log("here")
}


function protanopes() {
    var elements = $('*');

    for(var i = 0; i < elements.length; i++) {
       var current = elements[i];

       if (current && current.style) {
           current.style.color = 'black'
        }


        // if(
        //     (current.children.length === 0 && current.textContent.replace(/ |\n/g,'') !== '') 
        //     ) {
        //         current.style.backgroundColor = 'blue'
        // }
    }
}