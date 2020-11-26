function openMenu() {
    document.getElementById("menu").style.width="320px";
    if(window.innerWidth < 700) { 
        document.getElementById("menu").style.width="260px";
        if(window.innerHeight < 700) {
            document.getElementById("menu").style.width="220px";
        }
    }
    document.getElementById("background-haze").style.background="rgba(0,0,0,0.6)";
    document.getElementById("background-haze").style.zIndex="4";
}

function closeMenu(){
    document.getElementById("menu").style.width="0%";
    document.getElementById("background-haze").style.background="rgba(0,0,0,0.0)";
    setTimeout(function(){ 
        document.getElementById("background-haze").style.zIndex="0";
    }, 1000);
}