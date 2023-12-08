export default function pageLoad() {    
    const navBar = document.createElement("nav");
    navBar.classList.add("nav-bar");
    for (let i = 0; i < 3; i++) {
        const btn = document.createElement("button");
        let textContext = "";
        if (i === 0) {
            textContext = "Home";
        } else if (i === 1) {
            textContext = "Menu";
        } else {
            textContext = "Contact";
        }
        btn.textContent = textContext;
        navBar.append(btn);
    }

    const contentDiv = document.createElement("div");
    contentDiv.setAttribute('id', 'content');

    const footer = document.createElement("footer");
    footer.textContent = "Copyright © Damian Buskens 2023"

    document.body.append(navBar, contentDiv, footer);
}