function pricist31Minut() {
  const casInput = document.getElementById("cas").value;
  if (!casInput) {
    alert("Zadej prosím čas.");
    return;
  }

  const [hodiny, minuty] = casInput.split(":").map(Number);
  const datum = new Date();
  datum.setHours(hodiny);
  datum.setMinutes(minuty + 31);

  const noveHodiny = String(datum.getHours()).padStart(2, "0");
  const noveMinuty = String(datum.getMinutes()).padStart(2, "0");

  document.getElementById("vysledek").innerText =
    `Nový čas: ${noveHodiny}:${noveMinuty}`;
}
dopněn javascript
