// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно

const pifagorTable = document.querySelector('.pifagor-table');

function createPifagorTable() {
  for (let i = 1; i <= 10; i++) {
    const pifagorRow = document.createElement('div');
    pifagorRow.classList.add('pifagor-row');

    for (let j = 1; j <= 10; j++) {
      const pifagorCell = document.createElement('div');

      pifagorCell.classList.add('pifagor-cell');
      pifagorCell.textContent = `${i * j}`;

      if (i === j) {
        pifagorCell.classList.add('is-crossed');
      }

      pifagorRow.appendChild(pifagorCell);
    }

    pifagorTable.appendChild(pifagorRow);
  }
}

createPifagorTable();
