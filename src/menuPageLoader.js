import Dishes from './dishes.json'

export default function loadMenuPage() {
    const contentDiv = document.querySelector("#content");

    const menuTitleDiv = document.createElement('div');
    menuTitleDiv.classList.add("menu-title-div");
    
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Menu";
    menuTitle.classList.add("menu-title");
    
    const menuText = document.createElement('p');
    menuText.textContent = "This is our menu that is out of this world!";
    menuText.classList.add("menu-text");

    menuTitleDiv.append(menuTitle, menuText);
    contentDiv.append(menuTitleDiv);

    const dishesDiv = document.createElement('div');
    dishesDiv.classList.add("dishes-div");

    for (let i = 1; i < 11; i++) {
        const dish = document.createElement('div');
        dish.classList.add("dish-div");
        
        const title = document.createElement('h1');
        title.classList.add("dish-title");
        title.textContent = Dishes[`dish${i}`]["title"];
        
        const text = document.createElement('p');
        text.classList.add("dish-text");
        text.textContent = Dishes[`dish${i}`]["description"];

        const img = document.createElement('img');
        img.setAttribute('src', Dishes[`dish${i}`]["imgUrl"]);

        dish.append(img, title, text);
        dishesDiv.append(dish);
    }

    contentDiv.append(dishesDiv);
}