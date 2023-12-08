import pageLoad from "./loader.js"
import loadHomePage from "./homePageLoader.js";
import loadMenuPage from "./menuPageLoader.js";
import loadContactPage from "./contactPageLoader.js";
import './style.css'

pageLoad();
loadHomePage();

const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetContentDiv();
        if (btn.className === "Home") {
            loadHomePage();
        } else if (btn.className === "Menu") {
            loadMenuPage();
        } else {
            loadContactPage();
        }
    });
});

function resetContentDiv() {
    const content = document.getElementById("content");
    let child = content.lastElementChild;
    while (child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }
}