export default function pageLoad() {
    const contentDiv = document.querySelector("#content");

    const restaurantImg = document.createElement("img");
    restaurantImg.src = "https://wepik.com/api/image/ai/9abe7624-fda1-414a-93d6-e83276a27b69";
    restaurantImg.alt = "restaurant";

    const title = document.createElement("h1");
    title.textContent = "Welcome to the cosmic cuisine corner";

    const text = document.createElement("p");
    text.textContent = "We are located on mars in tesla vile on the 2nd street. We are the best restaurant on mars (we are also the only restaurant on mars). We have some fine martian cuisine come over and have a taste.";

    contentDiv.append(restaurantImg, title, text);
}