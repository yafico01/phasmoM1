// Pruebas Oficiales
const EVIDENCE_TYPES = [
    { id: "emf", name: "Medidor EMF 5", icon: "📊" },
    { id: "dots", name: "Proyector D.O.T.S.", icon: "🟢" },
    { id: "escritura", name: "Escritura Fantasma", icon: "📖" },
    { id: "huellas", name: "Ultravioleta", icon: "✋" },
    { id: "orbes", name: "Orbes espectrales", icon: "⭐" },
    { id: "box", name: "Caja Espectral", icon: "🔊" },
    { id: "temperatura", name: "Temperaturas Heladas", icon: "🌡️" }
];

// Base de Datos de Fantasmas
const GHOSTS_DATA = [
    {
        name: "Asuang",
        isNew: true,
        evidences: ["temperatura", "escritura", "dots"],
        strength: "Cuando detecta a su objetivo, se mueve más rápido para perseguirlo.",
        weakness: "Prefiere perseguir que buscar.",
        notes: "Si te escondes en un escondite oficial aunque tengas la puerta abierta o seas descubierto, no podrá matarte y acabará el ataque inmediatamente."
    },
    {
        name: "Banshee",
        evidences: ["huellas", "orbes", "dots"],
        strength: "Debilita a su objetivo antes de atacarlo.",
        weakness: "Puede emitir un grito fantasmal a través del Micrófono Parabólico.",
        notes: "Siempre será mujer. Marca a un solo jugador como objetivo. Puede iniciar cacería si la cordura del objetivo cae por debajo del 40%."
    },
    {
        name: "Dayan",
        isNew: true,
        evidences: ["emf", "orbes", "box"],
        strength: "Obtiene fuerza si los jugadores 'bailan' o se mueven cerca de ella (~10m).",
        weakness: "Pierde fuerza si los jugadores cercanos están inmóviles.",
        notes: "Ataca al 65% de cordura si un jugador se mueve cerca de ella en su habitación. Si se quedan quietos, no ataca hasta el 50%."
    },
    {
        name: "Deildegast",
        isNew: true,
        evidences: ["emf", "escritura", "dots"],
        strength: "Al inicio de la investigación, suele ser más agresivo y activo de lo normal.",
        weakness: "Se vuelve más lento a medida que se mueven objetos o elementos en su entorno.",
        notes: "Su comportamiento está ligado a objetos fuera de lugar; mueve objetos o interactúa con ellos para ralentizarlo."
    },
    {
        name: "Demonio",
        evidences: ["huellas", "escritura", "temperatura"],
        strength: "Iniciará ataques más a menudo que otros fantasmas.",
        weakness: "Será menos agresivo si un crucifijo se encuentra cerca de él.",
        notes: "Ataques constantes (20s entre cacerías). Incienso en cacería lo detiene por 60s. Usar Ouija no quita cordura."
    },
    {
        name: "Deogen",
        evidences: ["box", "escritura", "dots"],
        strength: "Siempre sabe exactamente dónde te escondes, haciendo inútiles los escondites.",
        weakness: "Se desplaza muy despacio cuando se acerca a un jugador.",
        notes: "En Pesadilla/Demencial siempre tiene Caja Espectral. A gran distancia es extremada velocidad, de cerca desacelera muchísimo."
    },
    {
        name: "Gallu",
        isNew: true,
        evidences: ["emf", "huellas", "box"],
        strength: "El uso de equipamiento de protección (crucifijos, incienso, sal) lo enfurece y debilita temporalmente el efecto de estos.",
        weakness: "Entrar en su estado de furia lo termina agotando por completo, volviéndolo muy débil tras terminar una cacería.",
        notes: "3 Estados: Normal (caza al 50%), Enfurecido (caza al 60% e inmune a sal) y Agotado (caza al 40%)."
    },
    {
        name: "Goryo",
        evidences: ["emf", "huellas", "dots"],
        strength: "Solo mostrará su silueta en el proyector D.O.T.S. a través de la lente de una cámara de video.",
        weakness: "Rara vez se le ve lejos de su lugar de deceso original.",
        notes: "En Pesadilla/Demencial siempre tiene D.O.T.S. No puede cambiar de habitación favorita. Ataca al 50% de cordura."
    },
    {
        name: "Hantu",
        evidences: ["huellas", "orbes", "temperatura"],
        strength: "Las temperaturas bajas le permiten moverse a velocidades muy rápidas.",
        weakness: "Se mueve extremadamente lento en zonas cálidas o templadas.",
        notes: "Nunca enciende el cuadro eléctrico. Exhala vaho frío durante cacerías con breaker apagado. Siempre tiene Temperaturas Heladas."
    },
    {
        name: "Jinn",
        evidences: ["emf", "huellas", "temperatura"],
        strength: "Viajará a una velocidad significativamente mayor si estás lejos y la caja de fusibles está encendida.",
        weakness: "Apagar el cuadro eléctrico evitará que use sus habilidades.",
        notes: "Nunca apagará el cuadro eléctrico. Frena en seco a menos de 3m del jugador. Drena 25% de cordura con habilidad de cuadro."
    },
    {
        name: "Kormos",
        isNew: true,
        evidences: ["orbes", "box", "huellas"],
        strength: "Audición increíblemente aguda; detecta tus pasos desde lejos durante las cacerías y ataca antes si corres cerca.",
        weakness: "Es un fantasma prácticamente ciego.",
        notes: "Fantasma ciego. Si te quedas totalmente quieto no puede verte. Ataca al 50% normalmente, o al 70% si corres cerca de él."
    },
    {
        name: "Mímico",
        evidences: ["box", "huellas", "temperatura"],
        fakeEvidence: "orbes",
        strength: "Pueden imitar la conducta de cualquier otro fantasma.",
        weakness: "Aparecen orbes espectrales en la habitación del fantasma como cuarta prueba falsa.",
        notes: "Presenta siempre Caja Espectral, Ultravioleta, Temperaturas Heladas + Orbes Espectrales permanentes."
    },
    {
        name: "Pesadilla (Mare)",
        evidences: ["box", "orbes", "escritura"],
        strength: "Las habitaciones a oscuras aumentan notablemente sus probabilidades de atacar.",
        weakness: "Encender las luces de su entorno reducirá su agresividad de forma drástica.",
        notes: "Ataca al 60% en la oscuridad / 40% con luces encendidas. No puede encender luces, pero sí apagar de inmediato los interruptores."
    },
    {
        name: "Aparecido (Revenant)",
        evidences: ["orbes", "escritura", "temperatura"],
        strength: "Se mueve a velocidad significativamente alta cuando persigue a una víctima.",
        weakness: "Esconderse del Aparecido hará que se mueva muy lentamente.",
        notes: "Velocidad extrema cuando ve a un jugador, súper lento cuando pierde la visión."
    },
    {
        name: "Espectro (Wraith)",
        evidences: ["emf", "box", "dots"],
        strength: "Casi nunca toca el suelo y no deja huellas al pisar sal.",
        weakness: "Tiene una reacción tóxica a la sal.",
        notes: "Puede teletransportarse al lado de un jugador aleatorio fuera de cacería generando lectura EMF 2/5."
    },
    {
        name: "Espíritu (Spirit)",
        evidences: ["emf", "box", "escritura"],
        strength: "No tiene fortalezas particulares.",
        weakness: "Usar incienso cerca de él lo detendrá e impedirá que ataque durante un largo tiempo (180s).",
        notes: "El incienso evita cacerías por 180 segundos (en vez de 90s)."
    },
    {
        name: "Poltergeist",
        evidences: ["box", "huellas", "escritura"],
        strength: "Puede lanzar múltiples objetos a la vez con gran fuerza.",
        weakness: "Se vuelve ineficaz en habitaciones vacías sin objetos para lanzar.",
        notes: "Lanza varios objetos reduciendo la cordura de los jugadores cercanos."
    },
    {
        name: "Sombra (Shade)",
        evidences: ["emf", "escritura", "temperatura"],
        strength: "Es muy difícil de encontrar debido a su timidez.",
        weakness: "No iniciará una cacería si hay varias personas cerca.",
        notes: "Rara vez realiza eventos de fantasma si hay más de 1 persona en la habitación."
    },
    {
        name: "Oni",
        evidences: ["emf", "temperatura", "dots"],
        strength: "Es más activo cuando hay gente cerca y se desplaza rápidamente.",
        weakness: "Son muy activos, lo que facilita su identificación.",
        notes: "Parpadea menos tiempo (más visible) durante las cacerías. No realiza eventos de vaho de humo."
    },
    {
        name: "Yurei",
        evidences: ["orbes", "temperatura", "dots"],
        strength: "Suele tener una gran influencia sobre la cordura de las personas.",
        weakness: "Usar incienso en su habitación lo atrapa en ella por 90 segundos.",
        notes: "Puede cerrar puertas de golpe quitando un 15% de cordura instantáneamente."
    },
    {
        name: "Yokai",
        evidences: ["box", "orbes", "dots"],
        strength: "Hablar cerca del Yokai lo enfurece y aumenta la probabilidad de ataque.",
        weakness: "Durante una cacería solo puede escuchar voces a corta distancia (~2.5m).",
        notes: "Puede atacar al 80% de cordura si se habla cerca de él."
    },
    {
        name: "Myling",
        evidences: ["emf", "huellas", "escritura"],
        strength: "Es muy silencioso cuando caza.",
        weakness: "Emite sonidos paranormales más frecuentemente en el Micrófono Parabólico.",
        notes: "Sus pasos en cacería solo se escuchan a corta distancia."
    },
    {
        name: "Onryo",
        evidences: ["box", "orbes", "temperatura"],
        strength: "Apagar una llama puede hacer que ataque inmediatamente.",
        weakness: "Cualquier fuente de fuego cercana actúa como un crucifijo.",
        notes: "Al apagar la 3ª vela/fuego, lanzará una cacería sin importar la cordura."
    },
    {
        name: "Los Gemelos (The Twins)",
        evidences: ["emf", "box", "temperatura"],
        strength: "Cualquiera de los dos gemelos puede enfadarse e iniciar un ataque.",
        weakness: "Interactúan con el entorno al mismo tiempo.",
        notes: "Un gemelo es más lento pero está en la sala principal; el otro es más rápido y ataca desde lejos."
    },
    {
        name: "Raiju",
        evidences: ["emf", "orbes", "dots"],
        strength: "Saca energía de la electrónica cercana, aumentando su velocidad.",
        weakness: "Interfiere constantemente con el equipamiento electrónico, haciendo fácil detectarlo.",
        notes: "Puede atacar al 65% de cordura si hay equipos electrónicos encendidos cerca."
    },
    {
        name: "Obake",
        evidences: ["emf", "huellas", "orbes"],
        strength: "Rara vez deja huellas dactilares y estas desaparecen muy rápido.",
        weakness: "A veces deja huellas únicas con 6 dedos.",
        notes: "En cacería tiene un 6.6% de probabilidad de cambiar de modelo de fantasma por un instante."
    },
    {
        name: "Moroi",
        evidences: ["box", "escritura", "temperatura"],
        strength: "Se vuelve más rápido a medida que baja la cordura promedio de los investigadores.",
        weakness: "El incienso lo ciega el doble de tiempo durante las cacerías (12s).",
        notes: "Maldice a los jugadores a través de la Caja Espectral o Micrófono Parabólico reduciendo la cordura al doble."
    },
    {
        name: "Thaye",
        evidences: ["orbes", "escritura", "dots"],
        strength: "Al entrar en la zona, el Thaye se vuelve muy activo, rápido y agresivo.",
        weakness: "Envejece con el tiempo cuando los jugadores están cerca, volviéndose más lento y pasivo.",
        notes: "No sufre aceleración en cacería por visión directa (no hace ramp-up de velocidad)."
    }
];

// Estado de Pruebas: { [id]: 0 (neutral), 1 (incluida/verde), 2 (excluida/roja) }
const evidenceState = {};
EVIDENCE_TYPES.forEach(e => evidenceState[e.id] = 0);

// Fantasmas cerrados manualmente por el usuario
const manuallyClosedGhosts = new Set();
const ghostNotes = {};

// Verificar si un fantasma es posible según las pruebas seleccionadas
function isGhostPossible(ghost) {
    const activeEvidences = Object.keys(evidenceState).filter(k => evidenceState[k] === 1);
    const excludedEvidences = Object.keys(evidenceState).filter(k => evidenceState[k] === 2);

    // Regla especial del Mímico (Nativa / Siempre Activa)
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

    // Reglas normales
    for (let act of activeEvidences) {
        if (!ghost.evidences.includes(act)) return false;
    }

    for (let exc of excludedEvidences) {
        if (ghost.evidences.includes(exc)) return false;
    }

    return true;
}

// Cuenta cuántos de los fantasmas actualmente posibles poseen esta prueba
function countGhostsWithEvidence(evId) {
    return GHOSTS_DATA.filter(ghost => {
        if (manuallyClosedGhosts.has(ghost.name)) return false;
        if (!isGhostPossible(ghost)) return false;

        return ghost.evidences.includes(evId) || (ghost.name === "Mímico" && evId === "orbes");
    }).length;
}

// Renderizar Botones de Pruebas en la columna lateral
function renderEvidences() {
    const listEl = document.getElementById("evidenceList");
    listEl.innerHTML = "";

    EVIDENCE_TYPES.forEach(ev => {
        const state = evidenceState[ev.id];
        const possibleGhostsCount = countGhostsWithEvidence(ev.id);

        // OCULTAR PRUEBA: Si no la tiene ningún fantasma posible y no está marcada (estado neutral 0)
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

        // Cambio de estado al hacer click: Neutral (0) -> Incluido (1) -> Excluido (2) -> Neutral (0)
        btn.onclick = () => {
            evidenceState[ev.id] = (evidenceState[ev.id] + 1) % 3;
            renderApp();
        };

        listEl.appendChild(btn);
    });
}

// Renderizar Tarjetas de Fantasmas
function renderGhosts() {
    const gridEl = document.getElementById("ghostGrid");
    gridEl.innerHTML = "";

    GHOSTS_DATA.forEach(ghost => {
        const isPossible = isGhostPossible(ghost) && !manuallyClosedGhosts.has(ghost.name);

        // OCULTAR FANTASMA: Si ya no es posible según las pruebas o fue descartado manualmente
        if (!isPossible) return;

        const card = document.createElement("div");
        card.className = "ghost-card possible";

        // Cabecera de la tarjeta
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

        // Etiquetas de Pruebas (Pills)
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

        // Información detallada
        const infoDiv = document.createElement("div");
        infoDiv.className = "ghost-info";
        infoDiv.innerHTML = `
            <div class="info-row"><span class="info-icon">⚠️</span><span><b>Fortaleza:</b> ${ghost.strength}</span></div>
            <div class="info-row"><span class="info-icon">✅</span><span><b>Debilidad:</b> ${ghost.weakness}</span></div>
            ${ghost.notes ? `<div class="info-row"><span class="info-icon">💡</span><span><b>Notas:</b> ${ghost.notes}</span></div>` : ''}
        `;

        // Input de Notas
        const notesInput = document.createElement("input");
        notesInput.className = "notes-input";
        notesInput.placeholder = "Escribir notas aquí...";
        notesInput.value = ghostNotes[ghost.name] || "";
        notesInput.oninput = (e) => {
            ghostNotes[ghost.name] = e.target.value;
        };

        card.appendChild(header);
        card.appendChild(pillsDiv);
        card.appendChild(infoDiv);
        card.appendChild(notesInput);

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

// Inicializar Aplicación
renderApp();
