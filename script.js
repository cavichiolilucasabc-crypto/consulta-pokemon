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

  mostrarAnimacaoBusca(termoFinal);

  setTimeout(function() {
    abrirNovaAba(termoFinal);
    salvarHistorico(termoFinal);
  }, 450);

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

function mostrarAnimacaoBusca(termo) {
  const resultado = document.getElementById("resultado");

  if (!resultado) {
    return;
  }

  resultado.style.display = "block";

  resultado.innerHTML = `
    <div class="buscando-box">
      <div class="pokebola-loader"></div>
      <p>Preparando busca...</p>
      <strong>${termo}</strong>
    </div>
  `;
}

function abrirNovaAba(termo) {
  const resultado = document.getElementById("resultado");
  const urlLiga = gerarUrlLiga(termo);

  if (resultado) {
    resultado.style.display = "none";
    resultado.innerHTML = "";
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

function removerDoHistorico(termo) {
  let historico = JSON.parse(localStorage.getItem("historicoCartas")) || [];

  historico = historico.filter(item => item.toLowerCase() !== termo.toLowerCase());

  localStorage.setItem("historicoCartas", JSON.stringify(historico));

  mostrarHistorico();
}

function alternarFavorito(termo) {
  let favoritos = JSON.parse(localStorage.getItem("favoritosCartas")) || [];

  const jaExiste = favoritos.some(item => item.toLowerCase() === termo.toLowerCase());

  if (jaExiste) {
    favoritos = favoritos.filter(item => item.toLowerCase() !== termo.toLowerCase());
  } else {
    favoritos.unshift(termo);
  }

  localStorage.setItem("favoritosCartas", JSON.stringify(favoritos));

  mostrarHistorico();
  mostrarFavoritos();
}

function verificarFavorito(termo) {
  const favoritos = JSON.parse(localStorage.getItem("favoritosCartas")) || [];

  return favoritos.some(item => item.toLowerCase() === termo.toLowerCase());
}

function copiarPesquisa(termo) {
  navigator.clipboard.writeText(termo).then(function() {
    mostrarMensagemCopiado(termo);
  }).catch(function() {
    alert("Não foi possível copiar. Copie manualmente: " + termo);
  });
}

function mostrarMensagemCopiado(termo) {
  const resultado = document.getElementById("resultado");

  if (!resultado) {
    return;
  }

  resultado.style.display = "block";

  resultado.innerHTML = `
    <p><strong>Pesquisa copiada:</strong></p>
    <p>${termo}</p>
  `;
}

function escaparTexto(texto) {
  return texto.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
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
      ${historico.map(item => {
        const favorito = verificarFavorito(item);
        const itemSeguro = escaparTexto(item);

        return `
          <div class="linha-historico">
            <button class="texto-historico" onclick="abrirNovaAba('${itemSeguro}')">
              ${item}
            </button>

            <div class="acoes-historico">
              <button class="acao-btn favorito-btn ${favorito ? "ativo" : ""}" onclick="alternarFavorito('${itemSeguro}')">
                ${favorito ? "★" : "☆"}
              </button>

              <button class="acao-btn copiar-btn" onclick="copiarPesquisa('${itemSeguro}')">
                📋
              </button>

              <button class="acao-btn remover-btn" onclick="removerDoHistorico('${itemSeguro}')">
                🗑
              </button>
            </div>
          </div>
        `;
      }).join("")}
    </div>

    <button class="limpar" onclick="limparHistorico()">Limpar histórico</button>
  `;
}

function mostrarFavoritos() {
  const favoritosDiv = document.getElementById("favoritos");

  if (!favoritosDiv) {
    return;
  }

  const favoritos = JSON.parse(localStorage.getItem("favoritosCartas")) || [];

  if (favoritos.length === 0) {
    favoritosDiv.innerHTML = "";
    return;
  }

  favoritosDiv.innerHTML = `
    <h2>Favoritos</h2>

    <div class="lista-historico">
      ${favoritos.map(item => {
        const itemSeguro = escaparTexto(item);

        return `
          <div class="linha-historico favorito-linha">
            <button class="texto-historico" onclick="abrirNovaAba('${itemSeguro}')">
              ⭐ ${item}
            </button>

            <div class="acoes-historico">
              <button class="acao-btn copiar-btn" onclick="copiarPesquisa('${itemSeguro}')">
                📋
              </button>

              <button class="acao-btn remover-btn" onclick="alternarFavorito('${itemSeguro}')">
                🗑
              </button>
            </div>
          </div>
        `;
      }).join("")}
    </div>
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
  mostrarFavoritos();
});
const temasDisponiveis = ["tema-pokedex", "tema-escuro", "tema-claro"];

function aplicarTemaSalvo() {
  const temaSalvo = localStorage.getItem("temaAppPokemon") || "tema-pokedex";

  document.body.classList.remove("tema-pokedex", "tema-escuro", "tema-claro");
  document.body.classList.add(temaSalvo);

  atualizarTextoBotaoTema(temaSalvo);
}

function alternarTema() {
  const temaAtual = localStorage.getItem("temaAppPokemon") || "tema-pokedex";

  const indiceAtual = temasDisponiveis.indexOf(temaAtual);
  const proximoIndice = (indiceAtual + 1) % temasDisponiveis.length;
  const proximoTema = temasDisponiveis[proximoIndice];

  localStorage.setItem("temaAppPokemon", proximoTema);

  document.body.classList.remove("tema-pokedex", "tema-escuro", "tema-claro");
  document.body.classList.add(proximoTema);

  atualizarTextoBotaoTema(proximoTema);
}

function atualizarTextoBotaoTema(tema) {
  const botao = document.querySelector(".tema-btn");

  if (!botao) {
    return;
  }

  if (tema === "tema-pokedex") {
    botao.innerHTML = "🎨 Tema: Pokédex";
  }

  if (tema === "tema-escuro") {
    botao.innerHTML = "🌙 Tema: Escuro";
  }

  if (tema === "tema-claro") {
    botao.innerHTML = "☀️ Tema: Claro";
  }
}

document.addEventListener("DOMContentLoaded", aplicarTemaSalvo);
