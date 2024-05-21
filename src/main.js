const rpsHover = document.getElementById("rps");

rpsHover.addEventListener("mouseover", () => hoverShowImage());
rpsHover.addEventListener("mouseout", () => hoverHideImage())

function hoverShowImage() {
  const rpsImage = document.querySelector(".rps__img");
  rpsImage.classList.add("active");

  document.addEventListener("mousemove", onMouseMove);

  function onMouseMove(e) {
    requestAnimationFrame(() => {
      rpsImage.style.left = `${e.clientX}px`;
      rpsImage.style.top = `${e.clientY}px`;
    });
  }

  hoverShowImage.onMouseMove = onMouseMove;
}

function hoverHideImage() {
  const rpsImage = document.querySelector(".rps__img");
  rpsImage.classList.remove("active");

  document.removeEventListener("mousemove", hoverShowImage.onMouseMove);
}
