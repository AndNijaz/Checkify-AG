const header = document.querySelector(".header");

const btnToggleNav = document.querySelector(".btn-mobile-nav");
console.log(btnToggleNav);
btnToggleNav.addEventListener("click", () => {
  console.log("veliki kurac");
  header.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    header.classList.toggle("nav-open");
  });
});

const sectionHeroEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  (ent) => {
    const entry = ent[0];
    if (!entry.isIntersecting) document.body.classList.add("sticky");
    if (entry.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  }
);
obs.observe(sectionHeroEl);

var map = L.map("map").setView([47.3769, 8.5417], 13); // Zurich coordinates: [latitude, longitude], zoom level

// Add the tile layer (you can choose a different provider)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Add a marker at Zurich
L.marker([47.3769, 8.5417])
  .addTo(map)
  .bindPopup("Zurich, Switzerland")
  .openPopup();
