import vars from "../_vars";

if (vars.$mobileFiltersOpen) {
  let openFIlters = false;
  vars.$mobileFiltersOpen.addEventListener("click", (e) => {
    if (!openFIlters) {
      vars.$mobileFiltersOpen.querySelector("span").textContent = "Close";
      vars.$catalogFilters.classList.add("catalog-filters--open");
      openFIlters = true;
    } else {
      vars.$mobileFiltersOpen.querySelector("span").textContent = "Filters";
      vars.$catalogFilters.classList.remove("catalog-filters--open");
      openFIlters = false;
    }
  });
}
