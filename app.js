const listItems = [...document.querySelectorAll(".timeline-list__item")];
const timelineList = document.querySelector(".timeline-list");

const loadNewCards = () => {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("li");
    card.classList.add("timeline-list__item");
    card.classList.add("glass");

    card.innerHTML = `
        <h1>96<span>kg</span></h1>
          <h4>April 1st</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
            cum?
          </p>
        `;
    timelineList.appendChild(card);
    observer.observe(card);
  }
};

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 1,
  }
);

const lastCardObserver = new IntersectionObserver(entries => {
  const lastCard = entries[0];
  if (!lastCard.isIntersecting) return;
  loadNewCards();
  observer.unobserve(lastCard);
  observer.observe(listItems[listItems.length - 1]);
}, {});

lastCardObserver.observe(listItems[listItems.length - 1]);

listItems.forEach(listItem => {
  observer.observe(listItem);
});
