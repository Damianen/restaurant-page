export default function loadContactPage() {
    const contentDiv = document.querySelector("#content");

    const title = document.createElement('h1');
    title.classList.add("contact-title");
    title.textContent = "Our Staff"
    contentDiv.append(title);

    const personsDiv = document.createElement('div');
    personsDiv.classList.add("persons-div");

    for(let i = 0; i < 4; i++) {
        const personDiv = document.createElement('div');
        personDiv.classList.add("person-div");

        const personTitle = document.createElement('h1');
        personTitle.classList.add("person-title");
        personTitle.textContent = 0 === i ? "Zara Redstone: The Martian Gastronomist" : 1 === i ? "Milo Solaris: The Space Farmer's Chef" : 2 === i ? "Manager: Serena Nova" : "Server: Orion Starlight";

        const personText = document.createElement('p');
        personText.classList.add("person-text");
        personText.textContent = 0 === i ? "Zara Redstone is a seasoned chef with a passion for exploring the culinary possibilities of Mars. With a background in molecular gastronomy and a keen understanding of the limited resources available on the Red Planet, Zara specializes in creating innovative dishes that maximize flavor and nutrition from locally sourced ingredients. Her ability to transform Mars-grown produce and unique minerals into gastronomic delights has earned her acclaim among the Martian community. Zara is known for her adventurous spirit, constantly experimenting with new cooking techniques that adapt to the challenges of Martian living." 
        : 1 === i ? "Milo Solaris is not just a chef; he's a pioneer in the field of sustainable Martian agriculture and gastronomy. With a background in agronomy and a passion for promoting self-sufficiency on Mars, Milo works closely with local space farmers to develop menus that showcase the best of Martian-grown produce. His cooking style emphasizes simplicity and freshness, letting the unique flavors of Mars' harvest shine through. Milo's commitment to building a sustainable food ecosystem on Mars has made him a respected figure in the culinary community, and his farm-to-table approach has become a model for future Martian colonies." 
        : 2 === i ? "Serena Nova is the astute and visionary manager of the Mars Haven Bistro, the premier restaurant on the Red Planet. With a background in hospitality management and a passion for creating a warm and inviting atmosphere, Serena ensures that the restaurant runs seamlessly. Her leadership style is a blend of efficiency and creativity, always looking for ways to enhance the dining experience for Martian residents and Earth visitors alike. Serena is known for her ability to navigate the challenges of operating a restaurant in a unique environment, from supply chain logistics to creating a sense of community among the diverse patrons of Mars Haven Bistro." 
        : "Orion Starlight is the charismatic and knowledgeable server at Mars Haven Bistro. With a background in interplanetary hospitality and a flair for customer service, Orion is the face of the restaurant, providing a friendly and informative dining experience. Whether recommending the chef's specials or sharing insights about the unique Martian ingredients featured in each dish, Orion's enthusiasm for the culinary offerings of the Red Planet is infectious. With a keen eye for detail and a commitment to ensuring guests have a memorable time, Orion plays a crucial role in creating a hospitable and enjoyable atmosphere at Mars Haven Bistro.";
        

        const personImg = document.createElement('img');
        personImg.src = 0 === i ? "https://wepik.com/api/image/ai/9ad4aa9a-0934-4659-a021-84cefaa18f8e" 
        : 1 === i ? "https://wepik.com/api/image/ai/9ad4aa9b-bed1-45ad-bb68-31e97566d101" 
        : 2 === i ? "https://wepik.com/api/image/ai/9ad4ae10-fb25-41ec-b840-ce17f1460900" 
        : "https://wepik.com/api/image/ai/9ad4af24-06ee-439d-a387-8a74f73fdf2c";

        personDiv.append(personImg, personTitle, personText);
        personsDiv.append(personDiv);
    }

    contentDiv.append(personsDiv);
}