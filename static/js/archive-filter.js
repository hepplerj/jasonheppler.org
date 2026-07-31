(function () {
  const chips = document.querySelectorAll('#archiveChips .bs-chip');
  const search = document.getElementById('archiveSearch');
  const rows = document.querySelectorAll('.bs-archive-row');
  const resultCount = document.getElementById('archiveResultCount');
  const emptyState = document.getElementById('archiveEmpty');

  let filter = 'all';
  let query = '';

  function update() {
    let visible = 0;
    const q = query.toLowerCase();
    rows.forEach(row => {
      const matchType = filter === 'all' || row.dataset.type === filter;
      const matchQuery = !q || row.dataset.title.includes(q);
      const show = matchType && matchQuery;
      row.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    resultCount.textContent = visible + ' post' + (visible !== 1 ? 's' : '');
    emptyState.style.display = visible === 0 ? '' : 'none';
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('on'));
      chip.classList.add('on');
      filter = chip.dataset.filter;
      update();
    });
  });

  search.addEventListener('input', () => {
    query = search.value;
    update();
  });

  update();
})();
