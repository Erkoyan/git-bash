function createDiv()
{
    const btn = document.createElement("span");
    const menu = document.querySelector('#asus');
    btn.id = 'two';
    btn.style.backgroundColor="red"
    btn.style.padding = "25px";
    btn.innerHTML = "sasaa"
    menu.appendChild(btn);

}