import contactBg from "./imgs/contact-background.png";

export const contactPage = () => {
  const body = document.body;
  body.style.backgroundImage = `url(${contactBg})`;
  body.classList.toggle("menu-bg", false);
  body.classList.toggle("main-bg", false);
  body.classList.add("contact-bg");

  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";
  const container = document.createElement("div");
  container.classList.add("contact-container");
  contentContainer.appendChild(container);

  const title = document.createElement("h3");
  title.textContent = "Contact us";
  container.appendChild(title);

  // --------------------------------------------------contact info
  const email = "info@gardenburgers.com";
  const phone = "(555) 876-5432";
  const company = "The Golden Sizzle";
  const street = "1234 Emberwood Lane";
  const city = "Cinnamon Heights";
  const postalCode = "GH 56789";
  const state = "United States";
  // --------------------------------------------------contact info^

  const addressTag = document.createElement("address");
  const contacts = document.createElement("p");
  contacts.id = "contacts";
  contacts.innerHTML = `${email}<br />${phone}`;
  addressTag.appendChild(contacts);

  const fullAddress = document.createElement("p");
  fullAddress.innerHTML = `${company}<br />${street}<br />${city}, ${postalCode}<br />${state}`;
  addressTag.appendChild(fullAddress);

  container.appendChild(addressTag);

  // --------------------------------------------------icons
  const iconIg = `<svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"></path>
  <path fill-rule="evenodd" d="M12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z" clip-rule="evenodd"></path>
  <path fill-rule="evenodd" d="M17.258 2.833a47.721 47.721 0 0 0-10.516 0c-2.012.225-3.637 1.81-3.873 3.832a45.922 45.922 0 0 0 0 10.67c.236 2.022 1.86 3.607 3.873 3.832a47.77 47.77 0 0 0 10.516 0c2.012-.225 3.637-1.81 3.873-3.832a45.914 45.914 0 0 0 0-10.67c-.236-2.022-1.86-3.607-3.873-3.832Zm-10.35 1.49a46.22 46.22 0 0 1 10.184 0c1.33.15 2.395 1.199 2.55 2.517a44.421 44.421 0 0 1 0 10.32 2.89 2.89 0 0 1-2.55 2.516 46.217 46.217 0 0 1-10.184 0 2.89 2.89 0 0 1-2.55-2.516 44.421 44.421 0 0 1 0-10.32 2.89 2.89 0 0 1 2.55-2.516Z" clip-rule="evenodd"></path>
</svg>`;
  const iconFb = `<svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10.488 3.788A5.25 5.25 0 0 1 14.2 2.25h2.7a.75.75 0 0 1 .75.75v3.6a.75.75 0 0 1-.75.75h-2.7a.15.15 0 0 0-.15.15v1.95h2.85a.75.75 0 0 1 .728.932l-.9 3.6a.75.75 0 0 1-.728.568h-1.95V21a.75.75 0 0 1-.75.75H9.7a.75.75 0 0 1-.75-.75v-6.45H7a.75.75 0 0 1-.75-.75v-3.6A.75.75 0 0 1 7 9.45h1.95V7.5a5.25 5.25 0 0 1 1.538-3.712ZM14.2 3.75a3.75 3.75 0 0 0-3.75 3.75v2.7a.75.75 0 0 1-.75.75H7.75v2.1H9.7a.75.75 0 0 1 .75.75v6.45h2.1V13.8a.75.75 0 0 1 .75-.75h2.114l.525-2.1H13.3a.75.75 0 0 1-.75-.75V7.5a1.65 1.65 0 0 1 1.65-1.65h1.95v-2.1H14.2Z" clip-rule="evenodd"></path>
</svg>`;
  // --------------------------------------------------icons^

  const ul = document.createElement("ul");

  const linkIg = document.createElement("li");
  linkIg.innerHTML = `${iconIg}garden_burgers`;
  ul.appendChild(linkIg);

  const linkFb = document.createElement("li");
  linkFb.innerHTML = `${iconFb}Garden Burgers`;
  ul.appendChild(linkFb);

  container.appendChild(ul);
};
