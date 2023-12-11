export default function loadHomePage() {
    const contentDiv = document.querySelector("#content");

    const restaurantImg = document.createElement("img");
    restaurantImg.classList.add("restaurant-img");
    restaurantImg.src = "https://wepik.com/api/image/ai/9abe7624-fda1-414a-93d6-e83276a27b69";
    restaurantImg.alt = "restaurant";

    const title = document.createElement("h1");
    title.textContent = "Welcome to the cosmic cuisine corner on Mars!";
    title.classList.add("homepage-title");

    const text1 = document.createElement("p");
    text1.textContent = "Embark on a gastronomic journey that's truly out of this world at the most celestial dining destination in the Martian galaxy. Nestled in the heart of the Red Planet's thriving colony, our restaurant beckons Earthlings, Martians, and intergalactic travelers alike to experience a culinary odyssey like never before.";
    text1.classList.add("homepage-text");

    const text2 = document.createElement("p");
    text2.textContent = "As you step into our sleek and futuristic space, you'll be greeted by the ambient hum of cosmic melodies and the warm glow of bioluminescent Martian flora, creating an atmosphere that transcends the ordinary. The ethereal ambiance sets the stage for an extraordinary dining experience that combines earthly delights with extraterrestrial flavors.";
    text2.classList.add("homepage-text");

    const text3 = document.createElement("p");
    text3.textContent = "Our menu, curated by culinary visionaries from across the galaxies, showcases the finest ingredients sourced from distant planets and moons. Indulge in dishes that defy gravity and challenge your taste buds to new frontiers. From Nebula Noodles to Galactic Grilled Quasar, each creation is a masterpiece that fuses innovation with tradition.";
    text3.classList.add("homepage-text");

    const text4 = document.createElement("p");
    text4.textContent = "At the Cosmic Cuisine Corner, we pride ourselves on offering a dining experience that extends beyond the plate. Our expert mixologists concoct otherworldly cocktails that capture the essence of the cosmos, and our panoramic windows provide breathtaking views of the Martian landscape, creating a surreal backdrop for your meal.";
    text4.classList.add("homepage-text");

    const text5 = document.createElement("p");
    text5.textContent = "Whether you're a space explorer seeking respite from your interstellar adventures or a connoisseur of cosmic delights, the Cosmic Cuisine Corner invites you to savor the extraordinary. Join us as we redefine the boundaries of culinary exploration on Mars—where every bite is a journey to the stars, and every moment is a celestial celebration.";
    text5.classList.add("homepage-text");

    contentDiv.append(restaurantImg, title, text1, text2, text3, text4, text5);
}