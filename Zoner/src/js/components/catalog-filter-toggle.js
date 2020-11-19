import vars from "../_vars";

if (document.querySelector(".catalog")) {
  vars.$catalogFiltersTop.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.currentTarget
        .closest(".catalog-filter")
        .classList.toggle("catalog-filter--open");
    });
  });

  vars.$hideFilters.addEventListener("click", (e) => {
    vars.$catalogFiltersTop.forEach((el) => {
      el.closest(".catalog-filter").classList.remove("catalog-filter--open");
    });
  });

  const createChoiseItem = (text) => {
    return `
        <button class="btn-reset catalog-choise__item" data-choise-text=${text}>
           ${text}
            <svg aria-hidden="true">
              <use xlink:href="img/sprite.svg#close"></use>
            </svg>
          </button>
      `;
  };

  vars.$catalogFilterItems.forEach((el) => {
    el.querySelector("input").addEventListener("change", (e) => {
      let checked = el.querySelector("input").checked;

      if (checked) {
        el.querySelector(".custom-checkbox").classList.add(
          "custom-checkbox--active"
        );
        let text = el.querySelector(".custom-checkbox__text").textContent;

        vars.$catalogChoise.insertAdjacentHTML(
          "afterbegin",
          createChoiseItem(text)
        );
      } else {
        el.querySelector(".custom-checkbox").classList.remove(
          "custom-checkbox--active"
        );

        let text = el.querySelector(".custom-checkbox").dataset.text;

        document.querySelector(`[data-choise-text=${text}]`).remove();
      }

      let activeCheckboxes = document.querySelectorAll(
        ".custom-checkbox--active"
      );

      if (activeCheckboxes.length > 0) {
        vars.$catalogChoise.style.display = "block";
      } else {
        vars.$catalogChoise.style.display = "none";
      }
    });
  });

  vars.$catalogChoise.addEventListener("click", (e) => {
    if (e.target.classList.contains("catalog-choise__item")) {
      e.target.remove();

      let text = e.target.textContent.trimLeft().trimRight();

      document
        .querySelector(`[data-text=${text}]`)
        .querySelector("input").checked = false;
      document
        .querySelector(`[data-text=${text}]`)
        .classList.remove("custom-checkbox--active");
    }

    if (e.target.classList.contains("catalog-choise__clear")) {
      Array.from(e.currentTarget.children).forEach((el) => {
        if (!el.classList.contains("catalog-choise__clear")) {
          el.remove();
        }

        vars.$catalogFilterItems.forEach((el) => {
          el.querySelector("input").checked = false;
          el.querySelector(".custom-checkbox").classList.remove(
            ".custom-checkbox--active"
          );
        });
      });

      e.currentTarget.style.display = "none";
    }

    if (e.currentTarget.children === 1) {
      e.currentTarget.style.display = "none";
    }
  });
}
