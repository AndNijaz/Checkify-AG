const header = document.querySelector(".header");

const btnToggleNav = document.querySelector(".btn-mobile-nav");

btnToggleNav.addEventListener("click", () =>
  header.classList.toggle("nav-open")
);

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href.startsWith("#")) return;
    e.preventDefault();
    console.log(href);
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      header.classList.toggle("nav-open");
    }
  });
});

var map = L.map("map").setView([51.505, -0.09], 13);

const services = [
  "Managment of Swiss Companies",
  "Compliance Checks/Background checks/Due diligence",
  "Services for Board of Directors",
  "Providing consulting Services for start ups",
  "Administration Services",
  "Company Creation Consulting (administration)",
  "Corporate Governance Advising",
];

const statutoryKeepingServices = [
  "maintaining and updating the register of directors and officers",
  "maintaining and updating the register of members/shareholdes",
  "making the necessary statutory filings with the Zug trade registry",
  "making the necessary statutory filings with the Zug trade registry",
  "organising, co-ordinating and minuting of the Company’s annual general meeting",
  "execution of documents",
  "maintaining and updating statutory files including the filing of related correspondence, statements and documents",
  "safekeeping of corporate documents and share certificates",
  "archiving of documents",
  "post collecting services",
];

const accountingServicesList = [
  "Basic to complex accounting for Swiss and international entities",
  "Working with auditors and providing them with the necessary info",
  "Due diligence and AML services",
];
const secretarialServicesList = [
  "Assistance with meeting compliance",
  "Personal assistance services",
  "Helps with organisation of events/ meetings",
];

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

document.addEventListener("DOMContentLoaded", function () {
  const url = window.location.href;
  const urlParts = url.split("/");
  const lastItem = urlParts[urlParts.length - 1].split(".")[0].trim();
  if (lastItem === "services") {
    const servicesContainer = document.querySelector(".services-items");

    services.forEach((service) => {
      const newServiceItem = document.createElement("div");
      newServiceItem.classList.add("service-item");

      newServiceItem.innerHTML = `
    <div class="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </div>
    <span>${service}</span>
  `;

      servicesContainer.appendChild(newServiceItem);
    });

    const statutoryKeepingServicesContainer = document.querySelector(
      ".statutory-keeping-services-list"
    );
    const accountingServicesContainer = document.querySelector(
      ".accounting-services-list"
    );
    const secretarialServicesContainer = document.querySelector(
      ".secretarial-services-list"
    );

    statutoryKeepingServices.forEach((service) => {
      const newServiceItem = document.createElement("li");
      // newServiceItem.classList.add("service-item");

      newServiceItem.innerHTML = `${service}`;

      statutoryKeepingServicesContainer.appendChild(newServiceItem);
    });

    accountingServicesList.forEach((service) => {
      const newServiceItem = document.createElement("li");
      // newServiceItem.classList.add("service-item");

      newServiceItem.innerHTML = `${service}`;

      accountingServicesContainer.appendChild(newServiceItem);
    });

    secretarialServicesList.forEach((service) => {
      const newServiceItem = document.createElement("li");
      // newServiceItem.classList.add("service-item");

      newServiceItem.innerHTML = `${service}`;

      secretarialServicesContainer.appendChild(newServiceItem);
    });
  }
});
