var caunt = 2
function myFunction(){
    var img = document.getElementById('img');

img.src = "imgs/Screenshot_"+caunt+".png";
    caunt++;
    if(caunt == 4){
        caunt = 1;
    }
    // img.src = "imgs/Screenshot_"+caunt+".png";
}