var p = document.querySelector("#button");

p.innerHTML = "submit";
p.style.background
p.style.color = "red";
p.style.textAlign = "center";

function changeBackground()
{
    this.style.background = "green";
    if(p.style.background = "green"){
       p.innerHTML = "congrats"
       p.style.color = "white"
    }
}

p.onclick = changeBackground;
