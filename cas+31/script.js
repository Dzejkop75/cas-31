function pricist31Minut() {
  const input = document.getElementById('cas').value;
  if (!input) {
    document.getElementById('vysledek').textContent = 'Zadejte čas!';
    return;
  }
  const [h, m] = input.split(':').map(Number);
  let date = new Date();
  date.setHours(h, m + 31, 0, 0);
  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');
  document.getElementById('vysledek').textContent = `Výsledek: ${hh}:${mm}`;
}
dopněn javascript
