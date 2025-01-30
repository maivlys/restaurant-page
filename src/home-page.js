import mainBg from "./imgs/main-background.png";
import { contactPage } from "./contact-page.js";

export const homePage = () => {
  const body = document.body;
  body.style.backgroundImage = `url(${mainBg})`;
  body.classList.toggle("menu-bg", false);
  body.classList.toggle("contact-bg", false);
  body.classList.add("main-bg");

  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("home-grid-container");
  contentContainer.appendChild(gridContainer);

  const title = document.createElement("h1");
  const para = document.createElement("p");
  const lastCell = document.createElement("div");

  gridContainer.appendChild(document.createElement("div"));
  gridContainer.appendChild(title);
  title.textContent = "Garden Burgers";
  gridContainer.appendChild(document.createElement("div"));
  gridContainer.appendChild(para);
  para.textContent =
    "Welcome to Garden Burgers, where gourmet flavors meet a serene, nature-inspired ambiance. We pride ourselves on crafting the finest burgers using organic, locally-sourced ingredients. Nestled in a modern, minimalistic space adorned with lush greenery. Our restaurant offers a classy yet cozy retreat for burger enthusiasts. Whether you're here for a quick bite or an intimate dinner, Garden Burgers promises an unforgettable culinary experience in a tranquil setting.";
  gridContainer.appendChild(document.createElement("div"));
  gridContainer.appendChild(lastCell);

  const reservationBtn = document.createElement("button");
  const conactBtn = document.createElement("button");
  lastCell.appendChild(reservationBtn);
  reservationBtn.textContent = "Reservation";
  reservationBtn.classList.add("main-page-btn");
  reservationBtn.classList.add("reservation-btn");
  reservationBtn.addEventListener("click", contactPage);
  lastCell.appendChild(conactBtn);
  conactBtn.textContent = "Contact us";
  conactBtn.classList.add("main-page-btn");
  conactBtn.addEventListener("click", contactPage);
};
