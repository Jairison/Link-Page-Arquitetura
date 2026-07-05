document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

card.animate([

{
transform:"scale(1)"
},

{
transform:"scale(.96)"
},

{
transform:"scale(1)"
}

],{

duration:250

});

});

});

const lightbox = document.getElementById("lightbox");

const imagemGrande = document.getElementById("imagemGrande");

const fechar = document.getElementById("fechar");

// clique em qualquer imagem
document.querySelectorAll(".card img").forEach(img=>{

    img.addEventListener("click",(e)=>{

        e.stopPropagation();

        imagemGrande.src = img.src;

        lightbox.classList.add("active");

        document.body.style.overflow="hidden";

    });

});

// botão X
fechar.addEventListener("click",()=>{

    lightbox.classList.remove("active");

    document.body.style.overflow="auto";

});

// clicar fora da imagem
lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

        document.body.style.overflow="auto";

    }

});

// tecla ESC
document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

        document.body.style.overflow="auto";

    }

});