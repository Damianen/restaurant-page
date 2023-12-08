export default function pageLoad() {    
    const navBar = document.createElement("nav");
    navBar.classList.add("nav-bar");
    for (let i = 0; i < 3; i++) {
        const btn = document.createElement("button");
        btn.textContent = 0 === i ? "Home" : 1 === i ? "Menu" : "Contact";
        btn.className = 0 === i ? "Home" : 1 === i ? "Menu" : "Contact";
        navBar.append(btn);
    }

    const contentDiv = document.createElement("div");
    contentDiv.setAttribute('id', 'content');

    const footer = document.createElement("footer");
    footer.textContent = "Copyright © Damian Buskens 2023"

    document.body.append(navBar, contentDiv, footer);
}