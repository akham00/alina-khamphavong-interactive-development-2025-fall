document.querySelectorAll(".story-line").forEach((el, i) => {
  setTimeout(() => {
    el.classList.add("charge-up");
  }, i * 200);
});
