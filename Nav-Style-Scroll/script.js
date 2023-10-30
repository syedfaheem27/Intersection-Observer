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
