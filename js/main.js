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

var map = L.map("map").setView([47.174449, 8.516427], 13);

var marker = L.marker([47.174449, 8.516427]).addTo(map);

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
  const navLink = document.querySelectorAll(".main-nav-link");
  console.log(navLink);
  if (lastItem === "services") {
    // navLink.children.forEach((children) => children.classList.remove("active"));
    navLink[1].classList.add("active");

    const servicesContainer = document.querySelector(".services-items");

    const svgArray = [
      `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />`,
      `<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />`,
      `<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />`,
      `<path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />`,
      `<path stroke-linecap="round" stroke-linejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />`,
      `<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />`,
      `<path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />`,
    ];
    services.forEach((service, i) => {
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
        ${svgArray[i]}
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

    const imgTargets = document.querySelectorAll("img[data-src]");

    const loadImg = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.src = entry.target.dataset.src;

      entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
      });

      observer.unobserve(entry.target);
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0,
    });

    imgTargets.forEach((img) => imgObserver.observe(img));
  } else if (lastItem === "about-us") {
    navLink[2].classList.add("active");

    const imgTargets = document.querySelectorAll("img[data-src]");

    const loadImg = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.src = entry.target.dataset.src;

      entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
      });

      observer.unobserve(entry.target);
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0,
    });

    imgTargets.forEach((img) => imgObserver.observe(img));
  } else {
    navLink[0].classList.add("active");
  }
});

// const header = document.querySelector(".header");
// const nav = document.querySelector(".header-row");

// const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });

// headerObserver.observe(header);

const allSection = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach((img) => imgObserver.observe(img));
