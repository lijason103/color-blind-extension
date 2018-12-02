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
        textColor: 'rgb(255, 166, 51)',
        bgColor: 'rgb(47, 114, 184)',
    },
    deuteranope: {
        textColor: 'blue',
        bgColor: 'rgb(255,0,255)',
    },
    tritanope: {
        textColor: 'rgb(1, 146, 213)',
        bgColor: 'rgb(255, 254, 6)',
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
