const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-6px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

document.querySelectorAll(".social a").forEach(icon=>{

icon.addEventListener("click",(e)=>{

e.preventDefault();

alert("Configure o link desta rede social.");

});

});