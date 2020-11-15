import vars from "../_vars";

if (vars.$marketing) {
  let counter = 0;
  let delay = 5000;

  const data = [
    {
      title: "Title of product 1",
      where: "Moscow, Russia",
    },
    {
      title: "Title of product 2",
      where: "London, Britain",
    },
    {
      title: "Title of product 3",
      where: "Praha, Czhechia",
    },
  ];

  vars.$marketing.addEventListener("click", (e) => {
    if (e.target.classList.contains("marketing__btn")) {
      closeMarketing();
    }
  });

  const changeMarketingData = () => {
    vars.$marketing.classList.remove("marketing--visible");

    setTimeout(() => {
      vars.$marketing.classList.add("marketing--visible");
    }, delay - 3000);

    const stringTitle = `${data[counter].title}`;
    const stringWhere = `15 minutes ago ${data[counter].where}`;

    vars.$marketing.querySelector(
      ".marketing__title"
    ).textContent = stringTitle;
    vars.$marketing.querySelector(
      ".marketing__when-from"
    ).textContent = stringWhere;

    counter++;

    if (counter === data.length) {
      counter = 0;
    }
  };

  changeMarketingData();

  setInterval(changeMarketingData, delay);

  const closeMarketing = () => {
    vars.$marketing.classList.remove("marketing--visible");
  };
}
