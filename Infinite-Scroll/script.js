const URL =
  "https://gist.githubusercontent.com/prof3ssorSt3v3/1944e7ba7ffb62fe771c51764f7977a4/raw/c58a342ab149fbbb9bb19c94e278d64702833270/infinite.json";

const footer = document.querySelector("footer");
const main = document.querySelector("main");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8,
};

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    getData().then(({ items }) => {
      items.forEach((item) => populateDOM(item));
    });
  });
}
const infiniteObserver = new IntersectionObserver(callback, options);
infiniteObserver.observe(footer);
/*
<section>
    <img src="https://picsum.photos/200/300" alt="" />
    <span>Name</span>
</section>
        */

async function getData() {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
}

function populateDOM(data) {
  const { name, img: imgPath } = data;
  const section = document.createElement("section");
  const img = document.createElement("img");
  const span = document.createElement("span");
  img.src = imgPath;
  img.alt = name;
  span.textContent = name;
  section.appendChild(img);
  section.appendChild(span);
  main.appendChild(section);
}
