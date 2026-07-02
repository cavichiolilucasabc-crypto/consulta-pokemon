function buscarCarta() {
  const campo = document.getElementById("campoCarta");
  const resultado = document.getElementById("resultado");

  const termo = campo.value.trim();

  if (termo === "") {
    alert("Digite o nome ou código da carta.");
    return;
  }

  const termoFormatado = encodeURIComponent(termo);

  const urlLiga = `https://www.ligapokemon.com.br/?card=${termoFormatado}&view=cards/search`;

  resultado.style.display = "block";

  resultado.innerHTML = `
    <p>Buscando por: <strong>${termo}</strong></p>
    <p>
      <a href="${urlLiga}" target="_blank">
        Abrir resultado na Liga Pokémon
      </a>
    </p>
  `;
}

document.addEventListener("DOMContentLoaded", function() {
  const campo = document.getElementById("campoCarta");

  campo.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      buscarCarta();
    }
  });
});
