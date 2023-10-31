const overlay = document.getElementById("overlay");
const paragraphs = document.querySelectorAll("#paragraphs p");

const options = {
  root: null,
  rootMargin: "-40% 0% -30% 0%",
  threshold: 0.25,
};

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove("slide-in");
    } else {
      entry.target.classList.add("slide-in");
    }
  });
}
const slideObserver = new IntersectionObserver(callback, options);

paragraphs.forEach((para) => {
  slideObserver.observe(para);
});
