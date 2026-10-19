let theme =document.querySelector("#lightbtn");
let style =document.querySelector("#stylefile");
theme.addEventListener("click",function(){
    let stylefile = style.getAttribute("href");
    console.log(stylefile)

    if(style.getAttribute("href")== "./css/style.css"){
        style.setAttribute("href", "./css/dark.css");
        theme.innerHTML ="☀️ Light"
    }else{
        style.setAttribute("href", "./css/style.css");
        theme.innerHTML ="🌙 Dark"
    }
})
