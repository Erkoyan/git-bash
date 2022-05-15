var caunt = 2
function myFunction(){
    var img = document.getElementById('topimg');

    document.img.style.backgroundImage = "url('imgs/Screenshot_1.png')";
img.src = "imgs/Screenshot_"+caunt+".png";
    caunt++;
    if(caunt == 4){
        caunt = 1;
    }
    // img.src = "imgs/Screenshot_"+caunt+".png";
}