const nomesPokemon = [
  "Bulbasaur", "Ivysaur", "Venusaur",
  "Charmander", "Charmeleon", "Charizard",
  "Squirtle", "Wartortle", "Blastoise",
  "Caterpie", "Metapod", "Butterfree",
  "Weedle", "Kakuna", "Beedrill",
  "Pidgey", "Pidgeotto", "Pidgeot",
  "Rattata", "Raticate",
  "Spearow", "Fearow",
  "Ekans", "Arbok",
  "Pikachu", "Raichu",
  "Sandshrew", "Sandslash",
  "Nidoran", "Nidorina", "Nidoqueen", "Nidorino", "Nidoking",
  "Clefairy", "Clefable",
  "Vulpix", "Ninetales",
  "Jigglypuff", "Wigglytuff",
  "Zubat", "Golbat",
  "Oddish", "Gloom", "Vileplume",
  "Paras", "Parasect",
  "Venonat", "Venomoth",
  "Diglett", "Dugtrio",
  "Meowth", "Persian",
  "Psyduck", "Golduck",
  "Mankey", "Primeape",
  "Growlithe", "Arcanine",
  "Poliwag", "Poliwhirl", "Poliwrath",
  "Abra", "Kadabra", "Alakazam",
  "Machop", "Machoke", "Machamp",
  "Bellsprout", "Weepinbell", "Victreebel",
  "Tentacool", "Tentacruel",
  "Geodude", "Graveler", "Golem",
  "Ponyta", "Rapidash",
  "Slowpoke", "Slowbro",
  "Magnemite", "Magneton",
  "Farfetch'd",
  "Doduo", "Dodrio",
  "Seel", "Dewgong",
  "Grimer", "Muk",
  "Shellder", "Cloyster",
  "Gastly", "Haunter", "Gengar",
  "Onix",
  "Drowzee", "Hypno",
  "Krabby", "Kingler",
  "Voltorb", "Electrode",
  "Exeggcute", "Exeggutor",
  "Cubone", "Marowak",
  "Hitmonlee", "Hitmonchan",
  "Lickitung",
  "Koffing", "Weezing",
  "Rhyhorn", "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea", "Seadra",
  "Goldeen", "Seaking",
  "Staryu", "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp", "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee", "Vaporeon", "Jolteon", "Flareon",
  "Porygon",
  "Omanyte", "Omastar",
  "Kabuto", "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno", "Zapdos", "Moltres",
  "Dratini", "Dragonair", "Dragonite",
  "Mewtwo", "Mew",

  "Chikorita", "Bayleef", "Meganium",
  "Cyndaquil", "Quilava", "Typhlosion",
  "Totodile", "Croconaw", "Feraligatr",
  "Pichu", "Cleffa", "Igglybuff",
  "Togepi", "Togetic",
  "Mareep", "Flaaffy", "Ampharos",
  "Bellossom",
  "Marill", "Azumarill",
  "Sudowoodo",
  "Politoed",
  "Espeon", "Umbreon",
  "Murkrow",
  "Slowking",
  "Misdreavus",
  "Wobbuffet",
  "Girafarig",
  "Pineco", "Forretress",
  "Dunsparce",
  "Gligar",
  "Steelix",
  "Snubbull", "Granbull",
  "Scizor",
  "Shuckle",
  "Heracross",
  "Sneasel",
  "Teddiursa", "Ursaring",
  "Swinub", "Piloswine",
  "Corsola",
  "Remoraid", "Octillery",
  "Delibird",
  "Mantine",
  "Skarmory",
  "Houndour", "Houndoom",
  "Kingdra",
  "Phanpy", "Donphan",
  "Porygon2",
  "Stantler",
  "Smeargle",
  "Tyrogue", "Hitmontop",
  "Elekid", "Magby",
  "Miltank",
  "Blissey",
  "Raikou", "Entei", "Suicune",
  "Larvitar", "Pupitar", "Tyranitar",
  "Lugia", "Ho-Oh", "Celebi",

  "Treecko", "Grovyle", "Sceptile",
  "Torchic", "Combusken", "Blaziken",
  "Mudkip", "Marshtomp", "Swampert",
  "Poochyena", "Mightyena",
  "Zigzagoon", "Linoone",
  "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox",
  "Lotad", "Lombre", "Ludicolo",
  "Seedot", "Nuzleaf", "Shiftry",
  "Ralts", "Kirlia", "Gardevoir",
  "Slakoth", "Vigoroth", "Slaking",
  "Nincada", "Ninjask", "Shedinja",
  "Whismur", "Loudred", "Exploud",
  "Makuhita", "Hariyama",
  "Azurill",
  "Nosepass",
  "Skitty", "Delcatty",
  "Sableye", "Mawile",
  "Aron", "Lairon", "Aggron",
  "Meditite", "Medicham",
  "Electrike", "Manectric",
  "Plusle", "Minun",
  "Roselia",
  "Carvanha", "Sharpedo",
  "Wailmer", "Wailord",
  "Numel", "Camerupt",
  "Torkoal",
  "Spoink", "Grumpig",
  "Spinda",
  "Trapinch", "Vibrava", "Flygon",
  "Cacnea", "Cacturne",
  "Swablu", "Altaria",
  "Zangoose", "Seviper",
  "Lunatone", "Solrock",
  "Barboach", "Whiscash",
  "Corphish", "Crawdaunt",
  "Baltoy", "Claydol",
  "Lileep", "Cradily",
  "Anorith", "Armaldo",
  "Feebas", "Milotic",
  "Castform",
  "Kecleon",
  "Shuppet", "Banette",
  "Duskull", "Dusclops",
  "Tropius",
  "Chimecho",
  "Absol",
  "Wynaut",
  "Snorunt", "Glalie",
  "Spheal", "Sealeo", "Walrein",
  "Clamperl", "Huntail", "Gorebyss",
  "Relicanth",
  "Luvdisc",
  "Bagon", "Shelgon", "Salamence",
  "Beldum", "Metang", "Metagross",
  "Regirock", "Regice", "Registeel",
  "Latias", "Latios",
  "Kyogre", "Groudon", "Rayquaza",
  "Jirachi", "Deoxys",

  "Turtwig", "Grotle", "Torterra",
  "Chimchar", "Monferno", "Infernape",
  "Piplup", "Prinplup", "Empoleon",
  "Starly", "Staravia", "Staraptor",
  "Bidoof", "Bibarel",
  "Shinx", "Luxio", "Luxray",
  "Budew", "Roserade",
  "Cranidos", "Rampardos",
  "Shieldon", "Bastiodon",
  "Burmy", "Wormadam", "Mothim",
  "Combee", "Vespiquen",
  "Pachirisu",
  "Buizel", "Floatzel",
  "Cherubi", "Cherrim",
  "Shellos", "Gastrodon",
  "Ambipom",
  "Drifloon", "Drifblim",
  "Buneary", "Lopunny",
  "Mismagius",
  "Honchkrow",
  "Glameow", "Purugly",
  "Chingling",
  "Stunky", "Skuntank",
  "Bronzor", "Bronzong",
  "Bonsly", "Mime Jr.",
  "Happiny",
  "Chatot",
  "Spiritomb",
  "Gible", "Gabite", "Garchomp",
  "Munchlax",
  "Riolu", "Lucario",
  "Hippopotas", "Hippowdon",
  "Skorupi", "Drapion",
  "Croagunk", "Toxicroak",
  "Carnivine",
  "Finneon", "Lumineon",
  "Mantyke",
  "Snover", "Abomasnow",
  "Weavile",
  "Magnezone",
  "Lickilicky",
  "Rhyperior",
  "Tangrowth",
  "Electivire",
  "Magmortar",
  "Togekiss",
  "Yanmega",
  "Leafeon", "Glaceon",
  "Gliscor",
  "Mamoswine",
  "Porygon-Z",
  "Gallade",
  "Probopass",
  "Dusknoir",
  "Froslass",
  "Rotom",
  "Uxie", "Mesprit", "Azelf",
  "Dialga", "Palkia",
  "Heatran",
  "Regigigas",
  "Giratina",
  "Cresselia",
  "Darkrai",
  "Shaymin",
  "Arceus",

  "Snivy", "Servine", "Serperior",
  "Tepig", "Pignite", "Emboar",
  "Oshawott", "Dewott", "Samurott",
  "Victini",
  "Zorua", "Zoroark",
  "Minccino", "Cinccino",
  "Gothita", "Gothorita", "Gothitelle",
  "Solosis", "Duosion", "Reuniclus",
  "Deerling", "Sawsbuck",
  "Karrablast", "Escavalier",
  "Foongus", "Amoonguss",
  "Joltik", "Galvantula",
  "Ferroseed", "Ferrothorn",
  "Litwick", "Lampent", "Chandelure",
  "Axew", "Fraxure", "Haxorus",
  "Cubchoo", "Beartic",
  "Shelmet", "Accelgor",
  "Pawniard", "Bisharp",
  "Rufflet", "Braviary",
  "Vullaby", "Mandibuzz",
  "Deino", "Zweilous", "Hydreigon",
  "Larvesta", "Volcarona",
  "Cobalion", "Terrakion", "Virizion",
  "Tornadus", "Thundurus", "Reshiram", "Zekrom",
  "Landorus", "Kyurem", "Keldeo", "Meloetta", "Genesect",

  "Chespin", "Quilladin", "Chesnaught",
  "Fennekin", "Braixen", "Delphox",
  "Froakie", "Frogadier", "Greninja",
  "Fletchling", "Fletchinder", "Talonflame",
  "Scatterbug", "Spewpa", "Vivillon",
  "Litleo", "Pyroar",
  "Flabébé", "Floette", "Florges",
  "Skiddo", "Gogoat",
  "Pancham", "Pangoro",
  "Furfrou",
  "Espurr", "Meowstic",
  "Honedge", "Doublade", "Aegislash",
  "Spritzee", "Aromatisse",
  "Swirlix", "Slurpuff",
  "Inkay", "Malamar",
  "Binacle", "Barbaracle",
  "Skrelp", "Dragalge",
  "Clauncher", "Clawitzer",
  "Helioptile", "Heliolisk",
  "Tyrunt", "Tyrantrum",
  "Amaura", "Aurorus",
  "Sylveon",
  "Hawlucha",
  "Dedenne",
  "Carbink",
  "Goomy", "Sliggoo", "Goodra",
  "Klefki",
  "Phantump", "Trevenant",
  "Pumpkaboo", "Gourgeist",
  "Bergmite", "Avalugg",
  "Noibat", "Noivern",
  "Xerneas", "Yveltal", "Zygarde",
  "Diancie", "Hoopa", "Volcanion",

  "Rowlet", "Dartrix", "Decidueye",
  "Litten", "Torracat", "Incineroar",
  "Popplio", "Brionne", "Primarina",
  "Rockruff", "Lycanroc",
  "Mareanie", "Toxapex",
  "Mudbray", "Mudsdale",
  "Dewpider", "Araquanid",
  "Fomantis", "Lurantis",
  "Morelull", "Shiinotic",
  "Salandit", "Salazzle",
  "Stufful", "Bewear",
  "Bounsweet", "Steenee", "Tsareena",
  "Comfey",
  "Oranguru", "Passimian",
  "Wimpod", "Golisopod",
  "Sandygast", "Palossand",
  "Pyukumuku",
  "Type: Null", "Silvally",
  "Minior",
  "Komala",
  "Turtonator",
  "Togedemaru",
  "Mimikyu",
  "Bruxish",
  "Drampa",
  "Dhelmise",
  "Jangmo-o", "Hakamo-o", "Kommo-o",
  "Tapu Koko", "Tapu Lele", "Tapu Bulu", "Tapu Fini",
  "Cosmog", "Cosmoem", "Solgaleo", "Lunala",
  "Nihilego", "Buzzwole", "Pheromosa", "Xurkitree", "Celesteela", "Kartana", "Guzzlord",
  "Necrozma", "Magearna", "Marshadow",

  "Grookey", "Thwackey", "Rillaboom",
  "Scorbunny", "Raboot", "Cinderace",
  "Sobble", "Drizzile", "Inteleon",
  "Skwovet", "Greedent",
  "Rookidee", "Corvisquire", "Corviknight",
  "Blipbug", "Dottler", "Orbeetle",
  "Nickit", "Thievul",
  "Gossifleur", "Eldegoss",
  "Wooloo", "Dubwool",
  "Chewtle", "Drednaw",
  "Yamper", "Boltund",
  "Rolycoly", "Carkol", "Coalossal",
  "Applin", "Flapple", "Appletun",
  "Silicobra", "Sandaconda",
  "Cramorant",
  "Arrokuda", "Barraskewda",
  "Toxel", "Toxtricity",
  "Sizzlipede", "Centiskorch",
  "Clobbopus", "Grapploct",
  "Sinistea", "Polteageist",
  "Hatenna", "Hattrem", "Hatterene",
  "Impidimp", "Morgrem", "Grimmsnarl",
  "Obstagoon",
  "Perrserker",
  "Cursola",
  "Sirfetch'd",
  "Mr. Rime",
  "Runerigus",
  "Milcery", "Alcremie",
  "Falinks",
  "Pincurchin",
  "Snom", "Frosmoth",
  "Stonjourner",
  "Eiscue",
  "Indeedee",
  "Morpeko",
  "Cufant", "Copperajah",
  "Dracozolt", "Arctozolt", "Dracovish", "Arctovish",
  "Duraludon",
  "Dreepy", "Drakloak", "Dragapult",
  "Zacian", "Zamazenta", "Eternatus",
  "Kubfu", "Urshifu", "Zarude",
  "Regieleki", "Regidrago",
  "Glastrier", "Spectrier", "Calyrex",

  "Sprigatito", "Floragato", "Meowscarada",
  "Fuecoco", "Crocalor", "Skeledirge",
  "Quaxly", "Quaxwell", "Quaquaval",
  "Lechonk", "Oinkologne",
  "Tarountula", "Spidops",
  "Nymble", "Lokix",
  "Pawmi", "Pawmo", "Pawmot",
  "Tandemaus", "Maushold",
  "Fidough", "Dachsbun",
  "Smoliv", "Dolliv", "Arboliva",
  "Squawkabilly",
  "Nacli", "Naclstack", "Garganacl",
  "Charcadet", "Armarouge", "Ceruledge",
  "Tadbulb", "Bellibolt",
  "Wattrel", "Kilowattrel",
  "Maschiff", "Mabosstiff",
  "Shroodle", "Grafaiai",
  "Bramblin", "Brambleghast",
  "Toedscool", "Toedscruel",
  "Klawf",
  "Capsakid", "Scovillain",
  "Rellor", "Rabsca",
  "Flittle", "Espathra",
  "Tinkatink", "Tinkatuff", "Tinkaton",
  "Wiglett", "Wugtrio",
  "Bombirdier",
  "Finizen", "Palafin",
  "Varoom", "Revavroom",
  "Cyclizar",
  "Orthworm",
  "Glimmet", "Glimmora",
  "Greavard", "Houndstone",
  "Flamigo",
  "Cetoddle", "Cetitan",
  "Veluza",
  "Dondozo",
  "Tatsugiri",
  "Annihilape",
  "Clodsire",
  "Farigiraf",
  "Dudunsparce",
  "Kingambit",
  "Great Tusk", "Scream Tail", "Brute Bonnet", "Flutter Mane", "Slither Wing", "Sandy Shocks",
  "Iron Treads", "Iron Bundle", "Iron Hands", "Iron Jugulis", "Iron Moth", "Iron Thorns",
  "Frigibax", "Arctibax", "Baxcalibur",
  "Gimmighoul", "Gholdengo",
  "Wo-Chien", "Chien-Pao", "Ting-Lu", "Chi-Yu",
  "Roaring Moon", "Iron Valiant",
  "Koraidon", "Miraidon",
  "Walking Wake", "Iron Leaves",
  "Dipplin", "Poltchageist", "Sinistcha",
  "Okidogi", "Munkidori", "Fezandipiti",
  "Ogerpon",
  "Archaludon", "Hydrapple",
  "Gouging Fire", "Raging Bolt", "Iron Boulder", "Iron Crown",
  "Terapagos", "Pecharunt"
];

function buscarCarta() {
  const campoPokemon = document.getElementById("campoPokemon");
  const campoCodigo = document.getElementById("campoCarta");

  const nomePokemon = campoPokemon ? campoPokemon.value.trim() : "";
  const codigoDigitado = campoCodigo.value.trim();

  if (nomePokemon === "") {
    alert("Digite ou selecione o nome do Pokémon.");
    return;
  }

  if (codigoDigitado === "") {
    alert("Digite o código da carta.");
    return;
  }

  const codigoFormatado = formatarCodigoCarta(codigoDigitado);

  const termoFinal = `${nomePokemon} ${codigoFormatado}`;

  abrirNovaAba(termoFinal);
  salvarHistorico(termoFinal);

  campoCodigo.value = "";
}

function formatarCodigoCarta(termo) {
  let texto = termo.trim();

  // Remove espaços
  texto = texto.replace(/\s+/g, "");

  // Remove tudo que não for número
  const somenteNumeros = texto.replace(/\D/g, "");

  // Exemplo: 886 vira 008/086
  // Exemplo: 186 vira 001/086
  if (somenteNumeros.length === 3) {
    const primeiraParte = somenteNumeros.slice(0, 1).padStart(3, "0");
    const segundaParte = somenteNumeros.slice(1, 3).padStart(3, "0");

    return `${primeiraParte}/${segundaParte}`;
  }

  // Exemplo: 8131 vira 008/131
  // Exemplo: 1091 vira 001/091
  if (somenteNumeros.length === 4) {
    const primeiraParte = somenteNumeros.slice(0, 1).padStart(3, "0");
    const segundaParte = somenteNumeros.slice(1, 4);

    return `${primeiraParte}/${segundaParte}`;
  }

  // Exemplo: 84131 vira 084/131
  // Exemplo: 25198 vira 025/198
  if (somenteNumeros.length === 5) {
    const primeiraParte = somenteNumeros.slice(0, 2).padStart(3, "0");
    const segundaParte = somenteNumeros.slice(2, 5);

    return `${primeiraParte}/${segundaParte}`;
  }

  // Exemplo: 084131 vira 084/131
  // Exemplo: 025198 vira 025/198
  if (somenteNumeros.length === 6) {
    const primeiraParte = somenteNumeros.slice(0, 3);
    const segundaParte = somenteNumeros.slice(3, 6);

    return `${primeiraParte}/${segundaParte}`;
  }

  // Se não for código de 3, 4, 5 ou 6 números, mantém o que foi digitado
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

  campoPokemon.value = nome;
  sugestoesDiv.innerHTML = "";
  sugestoesDiv.style.display = "none";

  campoCodigo.focus();
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
          campoCodigo.focus();
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
