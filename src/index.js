import "./style.css";
import { homePage } from "./home-page.js";
import { menuPage } from "./menu-page.js";
import { contactPage } from "./contact-page.js";

const nav = document.getElementsByTagName("button");
for (const btn of nav) {
  btn.classList.add("nav-btn-hover");
}

const home = document.getElementById("home");
home.addEventListener("click", () => {
  homePage();
});

const menu = document.getElementById("menu");
menu.addEventListener("click", () => {
  menuPage();
});

const contact = document.getElementById("contact");
contact.addEventListener("click", () => {
  contactPage();
});

window.onload(homePage());
