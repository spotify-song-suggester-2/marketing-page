function navMenu(){
    let links = document.getElementsByClassName("mobile")[0];
    if(links.style.display === "flex"){
        links.style.display = "none";
    }else{
        links.style.display = "flex";
    }
}