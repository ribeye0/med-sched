'use strict';
(() => {
  const grid = document.getElementById('medication-grid');
  const search = document.getElementById('search');
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  let filter = 'all';
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const groups = window.MEDICATION_GROUPS;
  const photoViewer = document.getElementById('photo-viewer');
  const photoFull = document.getElementById('photo-full');
  grid.addEventListener('click', event => {
    const button = event.target.closest('[data-photo]');
    if (!button) return;
    const med = window.MEDICATIONS.find(item => item.id === button.dataset.photo);
    if (!med) return;
    const label = `${med.chinese} · ${med.english} ${med.dose}`;
    document.getElementById('photo-title').textContent = label;
    photoFull.alt = `${label} 的照片`;
    photoFull.src = `${med.photo}-large.webp`;
    photoViewer.showModal();
    document.body.classList.add('photo-open');
  });
  document.getElementById('close-photo').addEventListener('click', () => photoViewer.close());
  photoViewer.addEventListener('click', event => {
    if (event.target !== photoViewer) return;
    const bounds = photoViewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) photoViewer.close();
  });
  photoViewer.addEventListener('close', () => document.body.classList.remove('photo-open'));
  const renderCard = med => `<article class="med-card" aria-labelledby="${escape(med.id)}-title"><button class="photo-button" type="button" data-photo="${escape(med.id)}" aria-haspopup="dialog" aria-label="放大查看 ${escape(med.chinese)} ${escape(med.dose)} 的照片"><img src="${escape(med.photo)}-thumb.webp" alt="${escape(med.english)} ${escape(med.dose)} 的照片" width="480" height="640" loading="lazy" decoding="async"><span class="photo-hint" aria-hidden="true">⤢</span></button><div class="med-info"><div class="med-title"><h3 id="${escape(med.id)}-title">${escape(med.chinese)}</h3><span class="dose">${escape(med.dose)}</span></div><p class="english-name">${escape(med.english)}</p><p class="purpose">${escape(med.purpose)}</p><details class="drug-details"><summary>成分／來源</summary><p>${escape(med.ingredient)}</p><a href="${escape(med.source)}" target="_blank" rel="noopener noreferrer">${escape(med.sourceName)} ↗</a></details></div></article>`;
  const render = () => {
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    grid.innerHTML = groups.map(group => {
      const members = window.MEDICATIONS.filter(med => med.group === group.id);
      const matches = members.filter(med => (filter === 'all' || filter === group.id) && (!query || [med.english, med.chinese, med.ingredient, med.purpose, med.dose, group.label].join(' ').toLocaleLowerCase().includes(query)));
      count += matches.length;
      return `<section class="medication-group${matches.length ? '' : ' filtered-out'}" aria-labelledby="group-${escape(group.id)}"><div class="group-heading"><h2 id="group-${escape(group.id)}">${escape(group.label)}</h2><span class="group-count">${members.length} 項</span></div><div class="medication-grid">${members.map(med => `<div class="card-wrapper${matches.includes(med) ? '' : ' filtered-out'}">${renderCard(med)}</div>`).join('')}</div></section>`;
    }).join('');
    document.getElementById('empty-state').hidden = count > 0;
    document.getElementById('result-count').textContent = `顯示 ${count} 項，共 ${window.MEDICATIONS.length} 項藥品規格`;
  };
  filterButtons.forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    filterButtons.forEach(item => { item.classList.toggle('selected', item === button); item.setAttribute('aria-pressed', String(item === button)); });
    render();
  }));
  search.addEventListener('input', render);
  document.getElementById('clear-search').addEventListener('click', () => { search.value = ''; filterButtons[0].click(); search.focus(); });
  document.getElementById('font-button').addEventListener('click', event => {
    const enlarged = document.documentElement.classList.toggle('large-text');
    event.currentTarget.setAttribute('aria-pressed', String(enlarged));
    event.currentTarget.textContent = enlarged ? '縮小文字' : '放大文字';
  });
  document.getElementById('print-button').addEventListener('click', () => window.print());
  let printDetails = [];
  window.addEventListener('beforeprint', () => {
    printDetails = [...document.querySelectorAll('details')].map(element => ({ element, open: element.open }));
    printDetails.forEach(({ element }) => { element.open = true; });
  });
  window.addEventListener('afterprint', () => {
    printDetails.forEach(({ element, open }) => { element.open = open; });
    printDetails = [];
  });
  render();
})();
