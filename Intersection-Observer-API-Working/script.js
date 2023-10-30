const section1 = document.getElementById("section-1");

const options = {
  /*
    The element used as a viewport for checking the
    visibility of the target. Must be ancestor of the element
    default - browser's viewport, null-browser's viewport
    */
  root: null,
  // margin around the root
  //+ve - makes the root to expand
  //-ve - makes the root to shrink
  rootMargin: "-16px",

  /*
    Either a single number or an array of numbers
    which indicate at what percentage of target visibility 
    observer calllback sshould be invoked
  */
  threshold: 0.25,
};
/*
Options allow us to control under which circumstances
the observer callback is invoked. It has 3 fields.
*/

const observer = new IntersectionObserver(callback, options);

/*
Whenever a target meets a threshold specified for the intersection
observer, the callback is invoked
*/
function callback(entries, observer) {
  //   console.log(entries);
  //An array containing a list of entries with all the data about the observed element

  entries.forEach((entry) => {
    console.log(entry);
    // console.log(entry.target); //Observed element
  });
  //   console.log(observer);
}

// observer.observe(section1);

//Toggling the inverse class on all sections using the Intersection Observer

const sections = document.querySelectorAll("section");
const obsOptions = {
  root: null,
  rootMargin: "-16px",
  threshold: 0.5,
};
const observerII = new IntersectionObserver(obsCallback, obsOptions);

function obsCallback(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.toggle("invert");

    observer.unobserve(entry.target); //It removes the observer from the target element
  });
}

sections.forEach((section) => {
  observerII.observe(section);
});
