function buscarCarta() {
  const campo = document.getElementById("campoCarta");
  const termo = campo.value.trim();

  if (termo === "") {
    alert("Digite o nome ou código da carta.");
    return;
  }

  const termoFormatado = encodeURIComponent(termo);

  const urlLiga = `https://www.ligapokemon.com.br/?card=${termoFormatado}&view=cards/search`;

  window.open(urlLiga, "_blank");
}

document.getElementById("campoCarta").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    buscarCarta();
  }
});
