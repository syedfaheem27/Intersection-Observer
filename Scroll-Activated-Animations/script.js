const animateEls = document.querySelectorAll(".anim");

const options = {
  root: null,
  rootMargin: "0px 0px -100px 0px",
  threshold: 0.5,
};
function callback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay;
      entry.target.style.animation = ` 3s ease-in ${delay} alternate slide`;
    } else {
      entry.target.style.animation = "none";
    }
  });
}

const animationObserver = new IntersectionObserver(callback, options);
animateEls.forEach((el) => {
  animationObserver.observe(el);
});
/*
animation: 3s ease-in 0s alternate slide
*/
