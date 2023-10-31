const lazyImages = document.querySelectorAll("[data-src]");
const lazyOptions = {
  threshold: 0,
  rootMargin: "0px 0px 1000px 0px",
};
function lazyCallback(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    preloadImage(entry.target);
    observer.unobserve(entry.target);
  });
}

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) return;

  img.src = src;
}

const lazyObserver = new IntersectionObserver(lazyCallback, options);
lazyImages.forEach((img) => {
  lazyObserver.observe(img);
});
