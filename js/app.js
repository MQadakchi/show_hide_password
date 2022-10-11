const icon = document.querySelector(".icon");
const input = document.querySelector("input");

icon.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("active");
  input.type === "password"
    ? input.setAttribute("type", "text")
    : input.setAttribute("type", "password");
});
