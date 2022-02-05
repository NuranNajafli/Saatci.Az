
let list =document.getElementsByClassName("list");

[...list].map((index)=>{
    index.addEventListener("click", ()=>{
        document.getElementsByClassName("active")[0].classList.remove("active");
       index.classList.add("active");
    })

})
