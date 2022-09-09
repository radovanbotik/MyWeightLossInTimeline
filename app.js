const listItems = [...document.querySelectorAll(".timeline-list__item")];

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      console.log(entry.target);
      entry.target.classList.toggle("visible", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 1,
  }
);
listItems.forEach(listItem => {
  observer.observe(listItem);
});
