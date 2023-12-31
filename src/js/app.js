// TODO: write code here
const button = document.querySelector('.btn');
const popover = document.querySelector('.popover');
const {
  top, left,
} = button.getBoundingClientRect();

button.addEventListener('click', () => {
  popover.style.display = 'block';
  popover.style.top = `${top - button.offsetHeight - popover.offsetHeight - 15}px`;
  popover.style.left = `${left + (button.offsetWidth / 2) - (popover.offsetWidth / 2) - 7}px`;

  button.style.marginTop = `${popover.offsetHeight}px`;
});

document.addEventListener('click', (e) => {
  if (e.target !== button && e.target !== popover) {
    popover.style.display = 'none';
    button.style.marginTop = '';
  }
});
