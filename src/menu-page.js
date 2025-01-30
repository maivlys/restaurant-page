import menuBg from "./imgs/menu-background.png";
import havenB from "./imgs/haven.png";
import avocadoB from "./imgs/avocado.png";
import vegeB from "./imgs/vege.png";
import royaleB from "./imgs/royale.png";
import spicyB from "./imgs/spicy.png";

export const menuPage = () => {
  const body = document.body;
  body.style.backgroundImage = `url(${menuBg})`;
  body.classList.toggle("main-bg", false);
  body.classList.toggle("contact-bg", false);
  body.classList.add("menu-bg");

  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("menu-grid-container");
  contentContainer.appendChild(gridContainer);

  const div1 = document.createElement("div");
  div1.id = "div1";
  const div2 = document.createElement("div");
  div2.id = "div2";
  const div3 = document.createElement("div");
  div3.id = "div3";

  gridContainer.appendChild(div1);
  gridContainer.appendChild(div2);
  gridContainer.appendChild(div3);

  // -----------div1
  const havenImg = document.createElement("img");
  havenImg.src = havenB;
  div1.appendChild(havenImg);

  const avocadoImg = document.createElement("img");
  avocadoImg.src = avocadoB;
  div1.appendChild(avocadoImg);

  const vegeImg = document.createElement("img");
  vegeImg.src = vegeB;
  div1.appendChild(vegeImg);

  // -----------div2
  const menuData = [
    {
      title: "The Haven Classic",
      decsription:
        "Grass-fed beef patty, aged cheddar, fresh lettuce, vine-ripened tomato, and our signature herb aioli, served on a brioche bun.",
    },
    {
      title: "Truffle Royale",
      decsription:
        "Premium wagyu beef patty, truffle-infused aioli, Swiss cheese, baby greens, and crispy shallots on a sesame seed bun.",
    },
    {
      title: "Avocado Bliss ",
      decsription:
        "Juicy chicken breast, smashed avocado, crisp spinach, pickled red onions, and a zesty lime mayo.",
    },
    {
      title: "Spicy Bloom",
      decsription:
        "Charred jalapeños, spicy chipotle sauce, pepper jack cheese, roasted garlic, and crunchy slaw on a ciabatta roll.",
    },
    {
      title: "Green Delight",
      decsription:
        "Grilled portobello mushroom, caramelized onions, goat cheese, arugula, and a basil pesto drizzle on a whole-grain bun.",
    },
  ];

  menuData.forEach((section, i) => {
    const div2 = document.getElementById("div2");
    const newSection = document.createElement("section");
    const title = document.createElement("h2");
    title.textContent = section.title;
    newSection.appendChild(title);
    const descr = document.createElement("p");
    descr.textContent = section.decsription;
    newSection.appendChild(descr);

    if (i % 2 !== 0) {
      newSection.classList.add("right");
    }

    div2.appendChild(newSection);
  });

  const sections = document.getElementsByTagName("section");
  for (const section of sections) {
    section.classList.add("menu-item");
  }

  // -----------div3
  const royaleImg = document.createElement("img");
  royaleImg.src = royaleB;
  div3.appendChild(royaleImg);

  const spicyImg = document.createElement("img");
  spicyImg.src = spicyB;
  div3.appendChild(spicyImg);

  const imgs = document.getElementsByTagName("img");
  for (const img of imgs) {
    img.classList.add("menu-img");
  }
};
