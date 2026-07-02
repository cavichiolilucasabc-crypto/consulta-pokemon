function buscarCarta() {
  const campo = document.getElementById("campoCarta");
  const termo = campo.value.trim();

  if (termo === "") {
    alert("Digite o nome ou código da carta.");
    return;
  }

  abrirNovaAba(termo);
  salvarHistorico(termo);

  campo.value = "";
}

function gerarUrlLiga(termo) {
  const termoFormatado = encodeURIComponent(termo);
  return `https://www.ligapokemon.com.br/?card=${termoFormatado}&view=cards/search`;
}

function abrirNovaAba(termo) {
  const resultado = document.getElementById("resultado");
  const urlLiga = gerarUrlLiga(termo);

  resultado.style.display = "block";

  resultado.innerHTML = `
    <p>Buscando por: <strong>${termo}</strong></p>
    <p>
      <a href="${urlLiga}" target="_blank">
        Abrir resultado na Liga Pokémon
      </a>
    </p>
  `;

  window.open(urlLiga, "_blank");
}

function salvarHistorico(termo) {
  let historico = JSON.parse(localStorage.getItem("historicoCartas")) || [];

  historico = historico.filter(item => item.toLowerCase() !== termo.toLowerCase());

  historico.unshift(termo);

  historico = historico.slice(0, 10);

  localStorage.setItem("historicoCartas", JSON.stringify(historico));

  mostrarHistorico();
}

function mostrarHistorico() {
  const historicoDiv = document.getElementById("historico");
  const historico = JSON.parse(localStorage.getItem("historicoCartas")) || [];

  if (historico.length === 0) {
    historicoDiv.innerHTML = "";
    return;
  }

  historicoDiv.innerHTML = `
    <h2>Últimas buscas</h2>
    <div class="lista-historico">
      ${historico.map(item => `
        <button class="item-historico" onclick="abrirNovaAba('${item.replace(/'/g, "\\'")}')">
          ${item}
        </button>
      `).join("")}
    </div>
    <button class="limpar" onclick="limparHistorico()">Limpar histórico</button>
  `;
}

function limparHistorico() {
  localStorage.removeItem("historicoCartas");
  mostrarHistorico();
}

document.addEventListener("DOMContentLoaded", function() {
  const campo = document.getElementById("campoCarta");

  campo.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      buscarCarta();
    }
  });

  mostrarHistorico();
});
