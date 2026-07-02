const nomesPokemon = [
  "Bulbasaur", "Ivysaur", "Venusaur",
  "Charmander", "Charmeleon", "Charizard",
  "Squirtle", "Wartortle", "Blastoise",
  "Pikachu", "Raichu",
  "Eevee", "Vaporeon", "Jolteon", "Flareon",
  "Snorlax",
  "Mewtwo", "Mew",
  "Chikorita", "Cyndaquil", "Totodile",
  "Pichu", "Togepi",
  "Espeon", "Umbreon",
  "Lugia", "Ho-Oh", "Celebi",
  "Treecko", "Torchic", "Mudkip",
  "Gardevoir", "Absol",
  "Bagon", "Shelgon", "Salamence",
  "Beldum", "Metang", "Metagross",
  "Kyogre", "Groudon", "Rayquaza",
  "Jirachi", "Deoxys",
  "Turtwig", "Chimchar", "Piplup",
  "Lucario",
  "Gible", "Gabite", "Garchomp",
  "Dialga", "Palkia", "Giratina",
  "Darkrai", "Shaymin", "Arceus",
  "Snivy", "Tepig", "Oshawott",
  "Zorua", "Zoroark",
  "Reshiram", "Zekrom", "Kyurem",
  "Chespin", "Fennekin", "Froakie",
  "Greninja",
  "Sylveon",
  "Xerneas", "Yveltal", "Zygarde",
  "Rowlet", "Litten", "Popplio",
  "Mimikyu",
  "Solgaleo", "Lunala",
  "Necrozma",
  "Grookey", "Scorbunny", "Sobble",
  "Charizard",
  "Dragapult",
  "Zacian", "Zamazenta", "Eternatus",
  "Sprigatito", "Fuecoco", "Quaxly",
  "Meowscarada", "Skeledirge", "Quaquaval",
  "Pawmi", "Pawmo", "Pawmot",
  "Tinkaton",
  "Annihilape",
  "Clodsire",
  "Koraidon", "Miraidon",
  "Ogerpon", "Terapagos"
];

function buscarCarta() {
  const campoPokemon = document.getElementById("campoPokemon");
  const campoCodigo = document.getElementById("campoCarta");

  const nomePokemon = campoPokemon ? campoPokemon.value.trim() : "";
  const codigoDigitado = campoCodigo ? campoCodigo.value.trim() : "";

  if (nomePokemon === "" && codigoDigitado === "") {
    alert("Digite o nome do Pokémon, o código da carta ou os dois.");
    return;
  }

  let termoFinal = "";

  if (nomePokemon !== "" && codigoDigitado !== "") {
    const codigoFormatado = formatarCodigoCarta(codigoDigitado);
    termoFinal = `${nomePokemon} ${codigoFormatado}`;
  }

  if (nomePokemon !== "" && codigoDigitado === "") {
    termoFinal = nomePokemon;
  }

  if (nomePokemon === "" && codigoDigitado !== "") {
    termoFinal = formatarCodigoCarta(codigoDigitado);
  }

  abrirNovaAba(termoFinal);
  salvarHistorico(termoFinal);

  if (campoCodigo) {
    campoCodigo.value = "";
  }
}

function formatarCodigoCarta(termo) {
  let texto = termo.trim();

  texto = texto.replace(/\s+/g, "");

  const somenteNumeros = texto.replace(/\D/g, "");

  if (somenteNumeros.length === 3) {
    const primeiraParte = somenteNumeros.slice(0, 1).padStart(3, "0");
    const segundaParte = somenteNumeros.slice(1, 3).padStart(3, "0");

    return `${primeiraParte}/${segundaParte}`;
  }

  if (somenteNumeros.length === 4) {
    const primeiraParte = somenteNumeros.slice(0, 1).padStart(3, "0");
    const segundaParte = somenteNumeros.slice(1, 4);

    return `${primeiraParte}/${segundaParte}`;
  }

  if (somenteNumeros.length === 5) {
    const primeiraParte = somenteNumeros.slice(0, 2).padStart(3, "0");
    const segundaParte = somenteNumeros.slice(2, 5);

    return `${primeiraParte}/${segundaParte}`;
  }

  if (somenteNumeros.length === 6) {
    const primeiraParte = somenteNumeros.slice(0, 3);
    const segundaParte = somenteNumeros.slice(3, 6);

    return `${primeiraParte}/${segundaParte}`;
  }

  return termo.trim();
}

function gerarUrlLiga(termo) {
  const termoFormatado = encodeURIComponent(termo);
  return `https://www.ligapokemon.com.br/?card=${termoFormatado}&view=cards/search`;
}

function abrirNovaAba(termo) {
  const resultado = document.getElementById("resultado");
  const urlLiga = gerarUrlLiga(termo);

  if (resultado) {
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

function mostrarSugestoesPokemon() {
  const campoPokemon = document.getElementById("campoPokemon");
  const sugestoesDiv = document.getElementById("sugestoesPokemon");

  if (!campoPokemon || !sugestoesDiv) {
    return;
  }

  const texto = campoPokemon.value.trim().toLowerCase();

  if (texto.length < 2) {
    sugestoesDiv.innerHTML = "";
    sugestoesDiv.style.display = "none";
    return;
  }

  const resultados = nomesPokemon
    .filter(nome => nome.toLowerCase().includes(texto))
    .slice(0, 8);

  if (resultados.length === 0) {
    sugestoesDiv.innerHTML = "";
    sugestoesDiv.style.display = "none";
    return;
  }

  sugestoesDiv.innerHTML = resultados.map(nome => `
    <button type="button" class="sugestao-item" onclick="selecionarPokemon('${escaparTexto(nome)}')">
      ${nome}
    </button>
  `).join("");

  sugestoesDiv.style.display = "block";
}

function selecionarPokemon(nome) {
  const campoPokemon = document.getElementById("campoPokemon");
  const campoCodigo = document.getElementById("campoCarta");
  const sugestoesDiv = document.getElementById("sugestoesPokemon");

  if (campoPokemon) {
    campoPokemon.value = nome;
  }

  if (sugestoesDiv) {
    sugestoesDiv.innerHTML = "";
    sugestoesDiv.style.display = "none";
  }

  if (campoCodigo) {
    campoCodigo.focus();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const campoPokemon = document.getElementById("campoPokemon");
  const campoCodigo = document.getElementById("campoCarta");

  if (campoPokemon) {
    campoPokemon.addEventListener("input", mostrarSugestoesPokemon);

    campoPokemon.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        const primeiraSugestao = document.querySelector(".sugestao-item");

        if (primeiraSugestao) {
          primeiraSugestao.click();
        } else {
          buscarCarta();
        }
      }
    });
  }

  if (campoCodigo) {
    campoCodigo.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        buscarCarta();
      }
    });
  }

  document.addEventListener("click", function(event) {
    const sugestoesDiv = document.getElementById("sugestoesPokemon");
    const campoPokemon = document.getElementById("campoPokemon");

    if (
      sugestoesDiv &&
      campoPokemon &&
      !sugestoesDiv.contains(event.target) &&
      event.target !== campoPokemon
    ) {
      sugestoesDiv.style.display = "none";
    }
  });

  mostrarHistorico();
});
