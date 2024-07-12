"use strict";

const icons = document.querySelectorAll(".icons");

icons.forEach(function (icon) {
  icon.addEventListener("click", function (e) {
    console.log("click");
    e.preventDefault();
    const items = icon.closest(".item");
    items.classList.toggle("open");
  });
});

const items = document.querySelectorAll(".item");

items.forEach(function (item) {
  item.addEventListener("keydown", function (e) {
    switch (e.key) {
      case "ArrowDown":
        const next = item.nextElementSibling;
        if (next && next.classList.contains("item")) {
          next.focus();
        }
        break;
      case "ArrowUp":
        const prev = item.previousElementSibling;
        if (prev && prev.classList.contains("item")) {
          prev.focus();
        }
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        item.classList.toggle("open");
        break;
      default:
        break;
    }
  });
});
