function buscarCarta() {
  const campo = document.getElementById("campoCarta");
  const campoExtra = document.getElementById("campoExtra");

  const codigoDigitado = campo.value.trim();
  const extraDigitado = campoExtra ? campoExtra.value.trim() : "";

  if (codigoDigitado === "") {
    alert("Digite o código da carta.");
    return;
  }

  const codigoFormatado = formatarCodigoCarta(codigoDigitado);

  let termoFinal = codigoFormatado;

  if (extraDigitado !== "") {
    termoFinal = `${codigoFormatado} ${extraDigitado}`;
  }

  abrirNovaAba(termoFinal);
  salvarHistorico(termoFinal);

  campo.value = "";

  if (campoExtra) {
    campoExtra.value = "";
  }
}

function formatarCodigoCarta(termo) {
  let texto = termo.trim();

  // Remove espaços
  texto = texto.replace(/\s+/g, "");

  // Remove tudo que não for número
  const somenteNumeros = texto.replace(/\D/g, "");

  // Exemplo: 84131 vira 084/131
  if (somenteNumeros.length === 5) {
    const primeiraParte = somenteNumeros.slice(0, 2).padStart(3, "0");
    const segundaParte = somenteNumeros.slice(2, 5);

    return `${primeiraParte}/${segundaParte}`;
  }

  // Exemplo: 084131 vira 084/131
  if (somenteNumeros.length === 6) {
    const primeiraParte = somenteNumeros.slice(0, 3);
    const segundaParte = somenteNumeros.slice(3, 6);

    return `${primeiraParte}/${segundaParte}`;
  }

  // Se não for código de 5 ou 6 números, mantém o que foi digitado
  return termo.trim();
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

function escaparTexto(texto) {
  return texto.replace(/'/g, "\\'");
}

function mostrarHistorico() {
  const historicoDiv = document.getElementById("historico");

  if (!historicoDiv) {
    return;
  }

  const historico = JSON.parse(localStorage.getItem("historicoCartas")) || [];

  if (historico.length === 0) {
    historicoDiv.innerHTML = "";
    return;
  }

  historicoDiv.innerHTML = `
    <h2>Últimas buscas</h2>
    <div class="lista-historico">
      ${historico.map(item => `
        <button class="item-historico" onclick="abrirNovaAba('${escaparTexto(item)}')">
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
  const campoExtra = document.getElementById("campoExtra");

  if (campo) {
    campo.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        buscarCarta();
      }
    });
  }

  if (campoExtra) {
    campoExtra.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        buscarCarta();
      }
    });
  }

  mostrarHistorico();
});
