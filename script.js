const table = document.getElementById('arrayRow');
const arrow = document.getElementById('arrow');

table.addEventListener('mouseover', (event) => {
  if (event.target.tagName === 'tr' || event.target.tagName === 'td') {
    const cellRect = event.target.getBoundingClientRect();
    const tableRect = table.getBoundingClientRect();

    const left = cellRect.left - tableRect.left + cellRect.width / 2;
    const top = cellRect.bottom - tableRect.top;

    arrow.style.left = left + 'px';
    arrow.style.top = top + 'px';
  }
});

table.addEventListener('mouseleave', () => {
  arrow.style.left = '-100px'; // Move the arrow off-screen when not hovering over the table.
});