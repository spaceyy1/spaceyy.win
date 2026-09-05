// this code should be PRAISED with how good it is
function musicmenu() {
    const musicmenu = document.getElementById('musicmenu')
    const arrowthing = document.getElementById('toggleicon')
    if ((musicmenu.style.top) === "150%"){
        musicmenu.style.top = "50%"
        arrowthing.src = "https://frogiee.one/stuff/icons/down.svg"
    }
    else {
        musicmenu.style.top = "150%"
        arrowthing.src = "https://frogiee.one/stuff/icons/up.svg"
    }
}

function safeSetStyle(element, property, value) {
    if (element) {
        element.style[property] = value;
    }
}

function leavethefunctionasnexite() {
    const box = document.getElementById('roddyricchesbox')
    const fade = document.getElementById('evenbiggerfadethanlowtaperfade')
    const musicbar = document.getElementById('musicbar')
    const extrathingonthemusicbar = document.getElementById('thethingabovethemusicbar')
    const canvas = document.getElementById('canvas')
    const title = document.getElementsByClassName('title')[0]
    const reader = document.getElementsByClassName('info')[0]
    const pagestuffs = document.getElementsByClassName('pagestuffs')[0]

    if (box) box.style.left = "150%"
    safeSetStyle(musicbar, 'opacity', '0')
    safeSetStyle(musicbar, 'pointerEvents', 'none')
    safeSetStyle(extrathingonthemusicbar, 'opacity', '0')
    safeSetStyle(extrathingonthemusicbar, 'pointerEvents', 'none')
    safeSetStyle(canvas, 'opacity', '0')
    safeSetStyle(fade, 'opacity', '1')

    setTimeout(function(){
        safeSetStyle(title, 'top', '0')
        safeSetStyle(reader, 'top', '20%')
        safeSetStyle(fade, 'opacity', '0')
        safeSetStyle(pagestuffs, 'opacity', '1')
    }, 1700)
}

function gobacktothefunctionfromnexite() {
    const box = document.getElementById('roddyricchesbox')
    const fade = document.getElementById('evenbiggerfadethanlowtaperfade')
    const musicbar = document.getElementById('musicbar')
    const extrathingonthemusicbar = document.getElementById('thethingabovethemusicbar')
    const canvas = document.getElementById('canvas')
    const title = document.getElementsByClassName('title')[0]
    const reader = document.getElementsByClassName('info')[0]
    const pagestuffs = document.getElementsByClassName('pagestuffs')[0]

    safeSetStyle(title, 'top', '-20%')
    safeSetStyle(reader, 'top', '100%')
    safeSetStyle(fade, 'opacity', '1')

    setTimeout(function(){
        if (box) box.style.left = "50%"
        safeSetStyle(musicbar, 'opacity', '1')
        safeSetStyle(musicbar, 'pointerEvents', '')
        safeSetStyle(extrathingonthemusicbar, 'opacity', '1')
        safeSetStyle(extrathingonthemusicbar, 'pointerEvents', '')
        safeSetStyle(canvas, 'opacity', '1')
        safeSetStyle(fade, 'opacity', '0')
        safeSetStyle(pagestuffs, 'opacity', '0')
    }, 1700)
}
