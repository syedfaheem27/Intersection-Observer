const header = document.querySelector("header");
const hero = document.getElementById("hero");

const options = {
  root: null,
  rootMargin: "-100px 0px 0px 0px",
};
const observer = new IntersectionObserver(callback, options);

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) header.classList.remove("invert");
    else header.classList.add("invert");
  });
}

observer.observe(hero);

//---------------------------
const faders = document.querySelectorAll(".fade-in");

const onScrollOps = {
  threshold: 0.25,
  rootMargin: "0px 0px -160px 0px",
};
const onScrollObserver = new IntersectionObserver(
  onScrollCallback,
  onScrollOps
);
function onScrollCallback(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");

    observer.unobserve(entry.target);
  });
}

faders.forEach((fader) => {
  onScrollObserver.observe(fader);
});

const sliders = document.querySelectorAll(".slide-in");
sliders.forEach((slider) => {
  onScrollObserver.observe(slider);
});
