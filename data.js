const log = [
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
  { day: "", month: "", weight: "" },
];

const date = new Date();
const datearray = [];
for (let i = 1; i <= 30; i++) {
  const newday = date.setDate(i);
  datearray.push(new Date(newday));
}

// console.log(datearray);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
datearray.forEach((entry, index) => {
  log[index].day = entry.getUTCDate();
  log[index].month = months[entry.getUTCMonth()];
  log[index].weight = `${Math.floor(96 - index / 2)}`;
});

export { log };
