const MODES = [
    'acromatopsia',
    'macular',
    'protanope',
    'deuteranope',
    'tritanope',
]

for (let i = 0; i < MODES.length; ++i) {
    document.getElementById(MODES[i]).addEventListener('click', () => {
        storeMode(MODES[i])
    })
}

function storeMode(mode) {
    chrome.storage.sync.set({
        mode,
      }, () => {
        alert("refresh")
    });
}

var nextPageButton = document.getElementById('nextPage').addEventListener('click', () => {
    document.getElementById('page-0').style.visibility = 'hidden'
    document.getElementById('page-1').style.visibility = 'visible'
})

var returnPageButton = document.getElementById('backPage').addEventListener('click', () => {
    document.getElementById('page-0').style.visibility = 'visible'
    document.getElementById('page-1').style.visibility = 'hidden'
})







