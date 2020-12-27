import "./vendor/focus-visible.min.js";
import "./components/main-slider";
import "./components/catalog-slider";
import "./components/marketing";
import "./components/catalog-filter-toggle";
import "./components/catalog-props";
import "./components/card-select";
import "./components/stepper";
import "./components/card-slider";
import "./components/card-slider";
import "./components/card-bottom-tabs";
import "./components/products";
import "./components/burger";
import "./components/mobile-filters";
import "./../resources/products.json";

import Simplebar from "simplebar";

import {
  resizeContent
} from "./functions/resize";
import {
  scrollTo
} from "./functions/smooth-scroll";
import {
  disableScroll,
  enableScroll
} from "./functions/stop-scroll";
import vars from "../js/_vars";

//disableScroll(fix) // fix -> class of element with position: fixed

if (document.querySelector(".to-top")) {
  document.querySelector(".to-top").addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo(document.querySelector(".site-container"));
  });
}
