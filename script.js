const list = document.querySelector("#item-list");
const btn = document.querySelector("#add-btn");

btn.addEventListener("click", function () {
  const newLi = document.createElement("li");
  newLi.textContent = "New Item";

  list.appendChild(newLi);

  const position = list.children.length; // 1‑based index of li

  if (position % 2 === 1) {
    // odd
    newLi.style.fontWeight = "bold";
    newLi.style.color = "blue";
  } else {
    // even
    newLi.style.fontStyle = "italic";
    newLi.style.color = "red";
  }
});
