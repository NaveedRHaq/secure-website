function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleStyleSheet(){
    let themelink = document.getElementById("mainStyleSheet")
    console.log("Function called. Current href:", themelink.getAttribute("href"));

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    let currentStyleSheet = themelink.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    if (currentStyleSheet == 'style2.css') {
        themelink.setAttribute('href', 'style.css');
    } else {
        themelink.setAttribute('href', 'style2.css');
    }
    console.log("New href:", themelink.getAttribute("href"));

    localStorage.setItem("href", themelink.getAttribute("href"));
}

window.onload = function(){
    const style = localStorage.getItem("href");
    const element = document.getElementById("mainStyleSheet");
    if (style){
        element.setAttribute("href",style);
    }
}