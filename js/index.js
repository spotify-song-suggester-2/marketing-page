function navMenu(){
    let links = document.getElementsByClassName("links")[0];
    if(links.style.display === "flex"){
        links.style.display = "none";
    }else{
        links.style.display = "flex";
    }
}