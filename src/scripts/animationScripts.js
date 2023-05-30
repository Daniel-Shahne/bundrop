export function handleResize() {
  const elements = document.querySelectorAll(".linkToPage");
  elements.forEach((element) => {
    element.classList.toggle("underlineAnimW", window.innerWidth > 768);
  });
}
