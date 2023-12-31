export default class Popover {
  constructor() {
    this.popover = [];
  }

  showPopover(message) {
    const popoverElement = document.querySelector('.btn');

    popoverElement.classList.add('form');
    popoverElement.textContent = message;

    const id = performance.now();

    this.popover.push({
      id,
      element: popoverElement,
    });

    document.body.appendChild(popoverElement);

    return id;
  }

  removePopover(id) {
    const popover = this.popover.find((t) => t.id === id);

    popover.element.remove();

    this.popover = this.popover.filter((t) => t.id !== id);
  }
}
