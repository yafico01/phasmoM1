// ==========================================
// 1. PRUEBAS OFICIALES
// ==========================================
const EVIDENCE_TYPES = [
    { id: "emf", name: "Medidor EMF 5", icon: "📊" },
    { id: "dots", name: "Proyector D.O.T.S.", icon: "🟢" },
    { id: "escritura", name: "Escritura Fantasma", icon: "📖" },
    { id: "huellas", name: "Ultravioleta", icon: "✋" },
    { id: "orbes", name: "Orbes espectrales", icon: "⭐" },
    { id: "box", name: "Caja Espectral", icon: "🔊" },
    { id: "temperatura", name: "Temperaturas Heladas", icon: "🌡️" }
];

// ==========================================
// 2. BASE DE DATOS (30 FANTASMAS EN ORDEN)
// ==========================================
const GHOSTS_DATA = [
    // --- FILA 1 ---
    {
        name: "Asuang",
        isNew: true,
        evidences: ["temperatura", "escritura", "dots"],
        strength: "Cuando detecta a su objetivo, se mueve mas rapido para perseguirlo.",
        weakness: "Prefiere perseguir que buscar.",
        interestingData: [
            "Si te escondes en un escondite oficial aunque tengas las puerta abiertas o sea descubierto, no podrá matarte y acabara el ataca en ese mismo momento."
        ]
    },
    {
        name: "Banshee",
        evidences: ["huellas", "orbes", "dots"],
        strength: "Debilita a su objetivo antes de atacarlo.",
        weakness: "Puede emitir un grito fantasmal a través del Micrófono Parabólico.",
        interestingData: [
            "Siempre sera una mujer de nombre y de skin.",
            "Marca a un solo jugador como objetivo.",
            "Puede iniciar una cacería si la cordura del jugador objetivo cae por debajo del 40%. Si el objetivo está fuera de la casa, actuará como un fantasma normal."
        ]
    },
    {
        name: "Dayan",
        isNew: true,
        evidences: ["emf", "orbes", "box"],
        strength: 'Obtiene fuerza si los jugadores "Bailan" cerca de ella (10m aprox).',
        weakness: "Pierde fuerza si los jugadores cercanos estan inmoviles.",
        interestingData: [
            "Ataca a una cordura del 65% si un jugador se mueve cerca de el en su habitación.",
            "Si los jugadores permanecen quietos, no ataca hasta el 50%."
        ]
    },

    // --- FILA 2 ---
    {
        name: "Deildegast",
        isNew: true,
        evidences: ["emf", "escritura", "dots"],
        strength: "Al inicio de la investigación, suele ser más agresivo y activo de lo normal.",
        weakness: "Se vuelve más lento a medida que se mueven objetos o elementos en su entorno.",
        interestingData: [
            "Su comportamiento está ligado a objetos fuera de lugar; para ralentizarlo durante la partida, puedes mover los elementos o interactuar con ellos."
        ]
    },
    {
        name: "Demonio",
        evidences: ["huellas", "escritura", "temperatura"],
        strength: "Iniciara ataques mas a menudo que otros fantasmas.",
        weakness: "Sera menos agresivo si un crucifico se encuentra creca de el.",
        interestingData: [
            "Ataques constante. 20 seg entre cada cacería en lugar de 25 seg.",
            "Usar incienso en caceria detiene sus ataques por 60 seg, en lugar de los 90 seg.",
            "Obtener respuesta en la Ouija no quita cordura."
        ]
    },
    {
        name: "Deogen",
        evidences: ["box", "escritura", "dots"],
        strength: "Siempre sabe exactamente dónde te escondes, haciendo inútiles los escondites.",
        weakness: "Se desplaza muy despacio cuando se acerca a un jugador.",
        interestingData: [
            "En dificultad pesadilla o superior(1 o 2 pruebas), siempre tendra Caja Espetral como prueba.",
            "Estando lejos de un jugador, su velocidad es extrema, al acercase, desacelera.",
            "Ataque en 40% promedio de cordura."
        ]
    },

    // --- FILA 3 ---
    {
        name: "Gallu",
        isNew: true,
        evidences: ["emf", "huellas", "box"],
        strength: "El uso de equipamiento de protección (crucifijos, incienso, sal) lo enfurece y debilita temporalmente el efecto de estos objetos.",
        weakness: "Entrar en su estado de furia lo termina agotando por completo, volviéndolo mucho más débil tras terminar una cacería.",
        interestingData: [
            "Tiene tres estados: Normal, Enfurecido y Agotado.",
            "En estado normal los ataques inician al 50% promedio de cordura, Enojado al 60% y en Agotado al 40%.",
            "Mientras está enfurecido, es inmune a la sal (no la pisará)."
        ]
    },
    {
        name: "Goryo",
        evidences: ["emf", "huellas", "dots"],
        strength: "Solo mostrará su silueta en el proyector D.O.T.S. a través de la lente de una cámara de video.",
        weakness: "Rara vez se le ve lejos de su lugar de deceso original.",
        interestingData: [
            "En dificultad pesadilla o superior(1 o 2 pruebas), siempre tedra proyector D.O.T.S. como prueba.",
            "No puede cambiar de habitación favorita bajo ninguna circunstancia.",
            "Ataca a partir del 50 % de cordura promedia."
        ]
    },
    {
        name: "Hantu",
        evidences: ["huellas", "orbes", "temperatura"],
        strength: "Las temperaturas bajas le permiten moverse a velocidades muy rápidas.",
        weakness: "Se mueve extremadamente lento en zonas cálidas o templadas.",
        interestingData: [
            "Nunca enciende el cuadro electrico.",
            "Si el cuadro electrico esta apagado, exhalará un vaho o aliento frío visible por la boca durante las cacerías.",
            "Le gusta mucho apagar las luces, el cuadro electrico o hacer explotar los focos para bajar la temperatura.",
            "Ataca al 50% de cordura promedia.",
            "En dificultad pesadilla o superior(1 o 2 pruebas), siempre tendra temperaturas heladas."
        ]
    },

    // --- FILA 4 ---
    {
        name: "Jinn",
        evidences: ["emf", "huellas", "temperatura"],
        strength: "Viajará a una velocidad significativamente mayor si estás lejos y la caja de fusibles está encendida.",
        weakness: "Apagar el cuadro electrico evitará que use sus habilidades.",
        interestingData: [
            "Nunca apagará el cuadro electrico.",
            "Si el cuadro electrico está encendido, y ve un jugador desde lejos en una cacería, aunmentara su velocidad, pero frenará en seco al acercarse a menos de 3 metros del jugador.",
            "Si interactua con el cuadro electrico(sin apagarlo) activara el EMF y drenara la cordura de todos los jugadores en su habitación o cerca de el un 25%."
        ]
    },
    {
        name: "Kormos",
        isNew: true,
        evidences: ["orbes", "box", "huellas"],
        strength: "Su audición es increíblemente aguda; detecta tus pasos desde lejos durante las cacerías y ataca antes si corres cerca de él.",
        weakness: "Es un fantasma prácticamente ciego.",
        interestingData: [
            "Es un fantasma ciego pero tiene buen oído. Si te quedas quieto no es capaz de verte y matarte.",
            "Ataca en promedio de cordura del 50%, pero si corres en su habitacion, puede atacar al 70%.",
            "Detecta a los jugadores a una distancia de 10m si van agachados, 15m si caminan normal y 30m si corren."
        ]
    },
    {
        name: "Pesadilla",
        evidences: ["box", "orbes", "escritura"],
        strength: "Las habitaciones a oscuras aumentan notablemente sus probabilidades de atacar.",
        weakness: "Encender las luces de su entorno reducirá su agresividad de forma drástica.",
        interestingData: [
            "Ataca en promedio de cordura del 40% si las luces estan encendidan, sino, atacara al 60%.",
            "No puede encender luces con el interruptor, pero si la Tv y el PC.",
            "Al encender un jugador las luces de un cuarto, podra apagarla al instante que el jugador accione el interruptor."
        ]
    },

    // --- FILA 5 ---
    {
        name: "Moroi",
        evidences: ["box", "escritura", "temperatura"],
        strength: "Cuanto menor sea la cordura de las víctimas, más fuerte y rápido se volverá el Moroi.",
        weakness: "Padecen de hiperosmia extrema, haciendo que el incienso los ciegue por mucho más tiempo durante las cacerías.",
        interestingData: [
            "Su umbral base para iniciar una cacería es a partir del 50 % de cordura media del equipo.",
            "El incienso lo ciega durante 7,5 segundos en lugar de los 5 habituales.",
            "La Caja Espectral y parabolico \"maldice\" al jugador, duplicando su pérdida de cordura pasiva.",
            "La maldición se elimina por completo consumiendo pastillas de cordura."
        ]
    },
    {
        name: "Myling",
        evidences: ["emf", "huellas", "escritura"],
        strength: "Es conocido por ser un cazador extremadamente silencioso.",
        weakness: "Es un fantasma muy ruidoso en el plano paranormal, produciendo sonidos y susurros constantes.",
        interestingData: [
            "Durante las cacerías, solo escucharás sus pasos cuando ya esté a menos de 12 metros de ti.",
            "Produce ruidos vocales, golpes y suspiros a través del micrófono parabólico con una frecuencia muchísimo mayor que el resto de los fantasmas.",
            "Ataca a partir del 50 % de cordura media."
        ]
    },
    {
        name: "Obake",
        evidences: ["emf", "huellas", "orbes"],
        strength: "Al interactuar con el entorno, tiene la capacidad única de ocultar sus rastros.",
        weakness: "A veces cambiarán de forma, revelando asi pruebas indispensables.",
        interestingData: [
            "Tiene un 25 % de probabilidad de no dejar huella tras tocar una puerta, interruptor o ventana.",
            "Cuenta con un 16.7 % de probabilidad de dejar una huella única de 6 dedos en las puertas, o una huella doble en interruptores.",
            "En caceria puede cambiar de skin mientras se mueve.",
            "Ataca a partir del 50 % de cordura media."
        ]
    },

    // --- FILA 6 ---
    {
        name: "Obambo",
        isNew: true,
        evidences: ["escritura", "huellas", "dots"],
        strength: "En su estado agresivo, iniciara cacerías de forma muy rápida.",
        weakness: "Cuando esta calmado, tarda más en comenzar una cacería y su de movimiento se vuelve más lento y fáciles de rastrear.",
        interestingData: [
            "Ataca a una cordura promedio de 65%.",
            "Puede cambiar su velocidad en mitad de la cacerias.",
            "El cambio de velocidad es fijo, de lento a rapido y viceversa cada 2 minutos aprox."
        ]
    },
    {
        name: "Oni",
        evidences: ["emf", "temperatura", "dots"],
        strength: "Son mas activos con varias personas cerca y drenaran mas cordura al manifestarse.",
        weakness: "En caceria, desaparecen con menor frecuencia.",
        interestingData: [
            "Son completamente incapaces de generar el evento de \"bola\".",
            "En las Manifestaciones, son mas fisicas y drenan el 20% en lugar del 10% de cordura.",
            "En caceria son bastantes visibles."
        ]
    },
    {
        name: "Onryo",
        evidences: ["box", "orbes", "temperatura"],
        strength: "Apagar una llama puede provocar que este fantasma ataque inmediatamente.",
        weakness: "Cuando se siente amenazado por el fuego, el fantasma es menos propenso a cazar.",
        interestingData: [
            "Su umbral de cacería normal es del 60 % de cordura media.",
            "Cada vela apagada tiene un 50% de probabilidad de iniciar un ataque.",
            "Al apagar la tercera vela, iniciará una cacería garantizada si no hay más fuego cerca.",
            "Prioriza apagar una llama antes de consumir un crucifijo real."
        ]
    },

    // --- FILA 7 ---
    {
        name: "Ente",
        evidences: ["box", "huellas", "dots"],
        strength: "Mirar a un Ente reducirá drásticamente tu cordura.",
        weakness: "Sacarle una foto al Ente hará que desaparezca temporalmente.",
        interestingData: [
            "Mirarlo directamente drena la cordura de forma acelerada.",
            "Tomarle una foto lo hace invisible temporalmente durante los eventos fantasmas."
        ]
    },
    {
        name: "Poltergeist",
        evidences: ["box", "huellas", "escritura"],
        strength: "Puede lanzar múltiples objetos a la vez con gran fuerza.",
        weakness: "Se vuelve ineficaz en habitaciones vacías sin objetos para lanzar.",
        interestingData: [
            "Lanza varios objetos reduciendo la cordura de los jugadores cercanos."
        ]
    },
    {
        name: "Raiju",
        evidences: ["emf", "orbes", "dots"],
        strength: "Saca energía de la electrónica cercana, aumentando su velocidad.",
        weakness: "Interfiere constantemente con el equipamiento electrónico, haciendo fácil detectarlo.",
        interestingData: [
            "Puede atacar al 65% de cordura si hay equipos electrónicos encendidos cerca."
        ]
    },

    // --- FILA 8 ---
    {
        name: "Revenant",
        evidences: ["orbes", "escritura", "temperatura"],
        strength: "Se mueve a velocidad significativamente alta cuando persigue a una víctima.",
        weakness: "Esconderse del Aparecido hará que se mueva muy lentamente.",
        interestingData: [
            "Velocidad extrema cuando ve a un jugador, súper lento cuando pierde la visión."
        ]
    },
    {
        name: "Sombra (Shade)",
        evidences: ["emf", "escritura", "temperatura"],
        strength: "Es muy difícil de encontrar debido a su timidez.",
        weakness: "No iniciará una cacería si hay varias personas cerca.",
        interestingData: [
            "Rara vez realiza eventos de fantasma si hay más de 1 persona en la habitación."
        ]
    },
    {
        name: "Espíritu (Spirit)",
        evidences: ["emf", "box", "escritura"],
        strength: "No tiene fortalezas particulares.",
        weakness: "Usar incienso cerca de él lo detendrá e impedirá que ataque durante un largo tiempo (180s).",
        interestingData: [
            "El incienso evita cacerías por 180 segundos (en vez de 90s)."
        ]
    },

    // --- FILA 9 ---
    {
        name: "Thaye",
        evidences: ["orbes", "escritura", "dots"],
        strength: "Al entrar en la zona, el Thaye se vuelve muy activo, rápido y agresivo.",
        weakness: "Envejece con el tiempo cuando los jugadores están cerca, volviéndose más lento y pasivo.",
        interestingData: [
            "No sufre aceleración en cacería por visión directa (no hace ramp-up de velocidad)."
        ]
    },
    {
        name: "Mímico",
        evidences: ["box", "huellas", "temperatura"],
        fakeEvidence: "orbes",
        strength: "Pueden imitar la conducta de cualquier otro fantasma.",
        weakness: "Aparecen orbes espectrales en la habitación del fantasma como cuarta prueba falsa.",
        interestingData: [
            "Presenta siempre Caja Espectral, Ultravioleta, Temperaturas Heladas + Orbes Espectrales permanentes."
        ]
    },
    {
        name: "Los Gemelos (The Twins)",
        evidences: ["emf", "box", "temperatura"],
        strength: "Cualquiera de los dos gemelos puede enfadarse e iniciar un ataque.",
        weakness: "Interactúan con el entorno al mismo tiempo.",
        interestingData: [
            "Un gemelo es más lento pero está en la sala principal; el otro es más rápido y ataca desde lejos."
        ]
    },

    // --- FILA 10 ---
    {
        name: "Espectro (Wraith)",
        evidences: ["emf", "box", "dots"],
        strength: "Casi nunca toca el suelo y no deja huellas al pisar sal.",
        weakness: "Tiene una reacción tóxica a la sal.",
        interestingData: [
            "Puede teletransportarse al lado de un jugador aleatorio fuera de cacería generando lectura EMF 2/5."
        ]
    },
    {
        name: "Yokai",
        evidences: ["box", "orbes", "dots"],
        strength: "Hablar cerca del Yokai lo enfurece y aumenta la probabilidad de ataque.",
        weakness: "Durante una cacería solo puede escuchar voces a corta distancia (~2.5m).",
        interestingData: [
            "Puede atacar al 80% de cordura si se habla cerca de él."
        ]
    },
    {
        name: "Yurei",
        evidences: ["orbes", "temperatura", "dots"],
        strength: "Suele tener una gran influencia sobre la cordura de las personas.",
        weakness: "Usar incienso en su habitación lo atrapa en ella por 90 segundos.",
        interestingData: [
            "Puede cerrar puertas de golpe quitando un 15% de cordura instantáneamente."
        ]
    }
];

// ==========================================
// 3. ESTADO Y CONTROL
// ==========================================
const evidenceState = {};
EVIDENCE_TYPES.forEach(e => evidenceState[e.id] = 0);

const manuallyClosedGhosts = new Set();

function isGhostPossible(ghost) {
    const activeEvidences = Object.keys(evidenceState).filter(k => evidenceState[k] === 1);
    const excludedEvidences = Object.keys(evidenceState).filter(k => evidenceState[k] === 2);

    if (ghost.name === "Mímico") {
        const mimicAllEvidences = ["box", "huellas", "temperatura", "orbes"];

        for (let exc of excludedEvidences) {
            if (mimicAllEvidences.includes(exc)) return false;
        }

        for (let act of activeEvidences) {
            if (!mimicAllEvidences.includes(act)) return false;
        }

        return true;
    }

    for (let act of activeEvidences) {
        if (!ghost.evidences.includes(act)) return false;
    }

    for (let exc of excludedEvidences) {
        if (ghost.evidences.includes(exc)) return false;
    }

    return true;
}

function countGhostsWithEvidence(evId) {
    return GHOSTS_DATA.filter(ghost => {
        if (manuallyClosedGhosts.has(ghost.name)) return false;
        if (!isGhostPossible(ghost)) return false;

        return ghost.evidences.includes(evId) || (ghost.name === "Mímico" && evId === "orbes");
    }).length;
}

// ==========================================
// 4. RENDERIZADO
// ==========================================
function renderEvidences() {
    const listEl = document.getElementById("evidenceList");
    if (!listEl) return;
    listEl.innerHTML = "";

    EVIDENCE_TYPES.forEach(ev => {
        const state = evidenceState[ev.id];
        const possibleGhostsCount = countGhostsWithEvidence(ev.id);

        if (possibleGhostsCount === 0 && state === 0) {
            return;
        }

        const btn = document.createElement("div");
        btn.className = `evidence-btn state-${state}`;

        let statusIcon = "";
        if (state === 1) statusIcon = "✓";
        if (state === 2) statusIcon = "✕";

        btn.innerHTML = `
            <div class="evidence-icon">${ev.icon}</div>
            <div class="evidence-info">
                <span class="evidence-name">${ev.name}</span>
                <span class="evidence-count">${possibleGhostsCount} fantasmas</span>
            </div>
            <div class="evidence-status-icon">${statusIcon}</div>
        `;

        btn.onclick = () => {
            evidenceState[ev.id] = (evidenceState[ev.id] + 1) % 3;
            renderApp();
        };

        listEl.appendChild(btn);
    });
}

function renderGhosts() {
    const gridEl = document.getElementById("ghostGrid");
    if (!gridEl) return;
    gridEl.innerHTML = "";

    GHOSTS_DATA.forEach(ghost => {
        const isPossible = isGhostPossible(ghost) && !manuallyClosedGhosts.has(ghost.name);

        if (!isPossible) return;

        const card = document.createElement("div");
        card.className = "ghost-card possible";

        const header = document.createElement("div");
        header.className = "ghost-header";
        
        const nameSpan = document.createElement("span");
        nameSpan.className = "ghost-name";
        nameSpan.innerHTML = `${ghost.name} ${ghost.isNew ? '<span class="badge-new">NUEVO</span>' : ''}`;

        const closeBtn = document.createElement("span");
        closeBtn.className = "close-btn";
        closeBtn.innerText = "✕";
        closeBtn.title = "Descartar fantasma";
        closeBtn.onclick = (e) => {
            e.stopPropagation();
            manuallyClosedGhosts.add(ghost.name);
            renderApp();
        };

        header.appendChild(nameSpan);
        header.appendChild(closeBtn);

        const pillsDiv = document.createElement("div");
        pillsDiv.className = "evidence-pills";

        let ghostEvList = [...ghost.evidences];
        if (ghost.name === "Mímico") {
            ghostEvList.push("orbes");
        }

        ghostEvList.forEach(evId => {
            const evObj = EVIDENCE_TYPES.find(e => e.id === evId);
            if (!evObj) return;

            const pill = document.createElement("span");
            const state = evidenceState[evId];

            let pillClass = "pill inactive";
            if (state === 1) pillClass = "pill active";
            if (state === 2) pillClass = "pill excluded";

            pill.className = pillClass;
            pill.innerText = evObj.name;
            pillsDiv.appendChild(pill);
        });

        const infoDiv = document.createElement("div");
        infoDiv.className = "ghost-info";

        let interestingDataHtml = "";
        if (ghost.interestingData && ghost.interestingData.length > 0) {
            const listItems = ghost.interestingData.map(item => `<li>${item}</li>`).join("");
            interestingDataHtml = `
                <div class="info-row-data">
                    <span class="data-title">💡 <b>Datos de interés:</b></span>
                    <ul class="data-list">${listItems}</ul>
                </div>
            `;
        }

        infoDiv.innerHTML = `
            <div class="info-row"><span class="info-icon">⚠️</span><span><b>Fortaleza:</b> ${ghost.strength}</span></div>
            <div class="info-row"><span class="info-icon">✅</span><span><b>Debilidad:</b> ${ghost.weakness}</span></div>
            ${interestingDataHtml}
        `;

        card.appendChild(header);
        card.appendChild(pillsDiv);
        card.appendChild(infoDiv);

        gridEl.appendChild(card);
    });
}

function renderApp() {
    renderGhosts();
    renderEvidences();
}

function resetAll() {
    EVIDENCE_TYPES.forEach(e => evidenceState[e.id] = 0);
    manuallyClosedGhosts.clear();
    renderApp();
}

// Configurar botón Reiniciar si existe en el HTML
document.addEventListener("DOMContentLoaded", () => {
    const resetBtn = document.querySelector(".btn-reset") || document.getElementById("resetBtn");
    if (resetBtn) {
        resetBtn.onclick = resetAll;
    }
    renderApp();
});

// Llamada inicial por respaldo
renderApp();
