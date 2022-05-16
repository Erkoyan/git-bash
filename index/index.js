var caunt = 2;
function myFunction(){
    if (caunt == 2) {   
    document.getElementById("topimg").style.backgroundImage = "url('imgs/Screenshot_2.png')"
    caunt = 3;
    }
    else if (caunt == 3){
        document.getElementById("topimg").style.backgroundImage = "url('imgs/Screenshot_3.png')"
        caunt = 1;
    }
    else{
        document.getElementById("topimg").style.backgroundImage = "url('imgs/Screenshot_1.png')"
        caunt = 2;
    }
}