// this is for the main page
const MODES = {
    acromatopsia: {
        textColor: 'black',
        bgColor: 'white',
    },
    macular: {
        textColor: 'red',
        bgColor: 'white',
    },
    protanope: {
        textColor: 'green',
        bgColor: 'white',
    },
    deuteranope: {
        textColor: 'yellow',
        bgColor: 'white',
    },
    tritanope: {
        textColor: 'purple',
        bgColor: 'white',
    },
}

window.onload = function(){
    chrome.storage.sync.get(['mode'], function(result) {
        let mode = result.mode
        if (mode) {
            changeColor(MODES[mode].textColor, MODES[mode].bgColor)
        }
    });
}

function changeColor(textColor, bgColor) {
    var elements = $('*');

    for(var i = 0; i < elements.length; i++) {
       var current = elements[i];

       if (current && current.style) {
           current.style.color = textColor
        }

        if (current.children.length > 0) {
            let children = current.children
            for (let i = 0; i < children.length; ++i) {
                let child = children[i]
                if (child.children.length === 1 && child.children[0].innerText !== '') {
                    child.style.backgroundColor = bgColor
                }
            }
        }

    }
}
