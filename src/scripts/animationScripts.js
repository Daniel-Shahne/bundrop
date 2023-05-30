export function toggleClass768px(selector, class_) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.classList.toggle(class_, window.innerWidth > 768);
  });
}
