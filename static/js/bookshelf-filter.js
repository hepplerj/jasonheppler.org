(function () {
  const chips = document.querySelectorAll('#shelfChips .bs-chip');
  const rows = document.querySelectorAll('.bs-shelf-entry');
  const countEl = document.getElementById('shelfCount');
  const currentYear = new Date().getFullYear().toString();

  let shelf = currentYear;

  function update() {
    let visible = 0;
    rows.forEach(row => {
      const show = shelf === 'all' || row.dataset.year === shelf;
      row.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    countEl.textContent = visible + ' book' + (visible !== 1 ? 's' : '');
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('on'));
      chip.classList.add('on');
      shelf = chip.dataset.shelf;
      update();
    });
  });

  update();
})();
