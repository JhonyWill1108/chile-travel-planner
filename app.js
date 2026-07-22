/* ==========================================================================
   STATE & PRE-POPULATED DATA (CHILE 2026)
   ========================================================================== */

// Configuração padrão
let config = {
    clpRate: 175, // 1 BRL = 175 CLP
    cardTax: 6.38 // IOF + Taxas operacionais
};

// Roteiro padrão pré-populado
const defaultDays = [
    {
        id: "day-1",
        dateLabel: "Dia 1 - 18/08 (Domingo)",
        activities: [
            {
                id: "act-1-1",
                title: "Embalse el Yeso + Piquenique",
                city: "Cajón del Maipo",
                address: "Buscar no Hotel (Santiago)",
                startTime: "06:00",
                endTime: "14:30",
                agencyCostUnit: 45000,
                agencyCostCurrency: "CLP",
                agencyPeople: 2,
                agencyCardInterest: true,
                hasGuide: true,
                ticketCostUnit: 0,
                ticketCostCurrency: "CLP",
                ticketPeople: 2,
                ticketCardInterest: false,
                paymentStatus: "paid",
                notes: "Passeio clássico de montanha. Levar corta-vento forte, óculos escuros, luvas e protetor solar. O passeio já inclui um piquenique com vinhos, queijos e frios à beira do lago.",
                link: "https://maps.google.com/?q=Embalse+el+Yeso"
            },
            {
                id: "act-1-2",
                title: "Jantar no Como Agua para Chocolate",
                city: "Santiago",
                address: "Constitución 88, Providencia",
                startTime: "20:30",
                endTime: "22:30",
                agencyCostUnit: 0,
                agencyCostCurrency: "BRL",
                agencyPeople: 2,
                agencyCardInterest: false,
                hasGuide: false,
                ticketCostUnit: 35000,
                ticketCostCurrency: "CLP",
                ticketPeople: 2,
                ticketCardInterest: true,
                paymentStatus: "pending",
                notes: "Restaurante muito charmoso e romântico no bairro Bellavista. Especializado em frutos do mar. Necessário reservar com antecedência. Prato recomendado: Congrio Celeste.",
                link: "https://maps.google.com/?q=Como+Agua+para+Chocolate"
            }
        ]
    },
    {
        id: "day-2",
        dateLabel: "Dia 2 - 19/08 (Segunda-feira)",
        activities: [
            {
                id: "act-2-1",
                title: "City Tour Histórico & Cerro Santa Lucía",
                city: "Santiago",
                address: "Plaza de Armas",
                startTime: "09:30",
                endTime: "13:00",
                agencyCostUnit: 15000,
                agencyCostCurrency: "CLP",
                agencyPeople: 2,
                agencyCardInterest: false,
                hasGuide: true,
                ticketCostUnit: 0,
                ticketCostCurrency: "CLP",
                ticketPeople: 2,
                ticketCardInterest: false,
                paymentStatus: "paid",
                notes: "Visitar a Plaza de Armas, a Catedral Metropolitana e subir o Cerro Santa Lucía para ter uma vista panorâmica incrível do centro de Santiago com a Cordilheira ao fundo.",
                link: "https://maps.google.com/?q=Cerro+Santa+Lucia"
            },
            {
                id: "act-2-2",
                title: "Aluguel de Roupas de Neve",
                city: "Santiago",
                address: "Loja Rent-a-Ski, Santiago Centro",
                startTime: "17:00",
                endTime: "18:00",
                agencyCostUnit: 0,
                agencyCostCurrency: "BRL",
                agencyPeople: 2,
                agencyCardInterest: false,
                hasGuide: false,
                ticketCostUnit: 15000,
                ticketCostCurrency: "CLP",
                ticketPeople: 2,
                ticketCardInterest: true,
                paymentStatus: "pending",
                notes: "Alugar casaco impermeável, calça, botas e luvas para os passeios de montanha dos próximos dias (Portillo e Farellones). Deixar alugado hoje economiza tempo na subida amanhã.",
                link: ""
            }
        ]
    },
    {
        id: "day-3",
        dateLabel: "Dia 3 - 20/08 (Terça-feira)",
        activities: [
            {
                id: "act-3-1",
                title: "Portillo & Laguna del Inca",
                city: "Andes / Fronteira",
                address: "Estrada Los Libertadores",
                startTime: "06:30",
                endTime: "17:30",
                agencyCostUnit: 52000,
                agencyCostCurrency: "CLP",
                agencyPeople: 2,
                agencyCardInterest: true,
                hasGuide: true,
                ticketCostUnit: 0,
                ticketCostCurrency: "CLP",
                ticketPeople: 2,
                ticketCardInterest: false,
                paymentStatus: "pending",
                notes: "Viagem em direção à fronteira com a Argentina. Passagem pela incrível estrada dos Caracóis (curvas sinuosas icônicas). Visita à belíssima lagoa turquesa Laguna del Inca aos pés da estação de esqui.",
                link: "https://maps.google.com/?q=Laguna+del+Inca"
            }
        ]
    },
    {
        id: "day-4",
        dateLabel: "Dia 4 - 21/08 (Quarta-feira)",
        activities: [
            {
                id: "act-4-1",
                title: "Valle Nevado",
                city: "Cordilheira dos Andes",
                address: "Valle Nevado Ski Resort",
                startTime: "07:00",
                endTime: "16:30",
                agencyCostUnit: 40000,
                agencyCostCurrency: "CLP",
                agencyPeople: 2,
                agencyCardInterest: true,
                hasGuide: true,
                ticketCostUnit: 0,
                ticketCostCurrency: "CLP",
                ticketPeople: 2,
                ticketCardInterest: false,
                paymentStatus: "pending",
                notes: "Subida da montanha até o resort mais famoso do hemisfério sul. Levar lanches rápidos, pois a alimentação na montanha é bastante cara. Roupas de neve completas são obrigatórias.",
                link: "https://maps.google.com/?q=Valle+Nevado"
            }
        ]
    },
    {
        id: "day-5",
        dateLabel: "Dia 5 - 22/08 (Quinta-feira)",
        activities: [
            {
                id: "act-5-1",
                title: "Parque Farellones",
                city: "Farellones",
                address: "Parque de Neve Farellones",
                startTime: "07:30",
                endTime: "17:00",
                agencyCostUnit: 35000,
                agencyCostCurrency: "CLP",
                agencyPeople: 2,
                agencyCardInterest: true,
                hasGuide: false,
                ticketCostUnit: 36000,
                ticketCostCurrency: "CLP",
                ticketPeople: 2,
                ticketCardInterest: true,
                paymentStatus: "pending",
                notes: "Parque de atividades na neve. Muito divertido! O ingresso dá direito ilimitado a atividades como Tubing (boias gigantes deslizando na neve), Canopy (tirolesa), Teleférico e Trenó.",
                link: "https://maps.google.com/?q=Parque+Farellones"
            }
        ]
    }
];

let days = [];
let activeDayId = "";

/* ==========================================================================
   FINANCIAL CALCULATIONS
   ========================================================================== */

/**
 * Calcula os custos consolidados de uma atividade
 */
function getActivityFinancials(activity) {
    const rate = config.clpRate;
    const cardMultiplier = 1 + (config.cardTax / 100);

    // 1. Custos de Agência
    let agencyUnitClp = 0;
    let agencyUnitBrl = 0;

    if (activity.agencyCostCurrency === 'CLP') {
        agencyUnitClp = Number(activity.agencyCostUnit) || 0;
        agencyUnitBrl = agencyUnitClp / rate;
    } else {
        agencyUnitBrl = Number(activity.agencyCostUnit) || 0;
        agencyUnitClp = agencyUnitBrl * rate;
    }

    // Aplica juros de cartão na agência se ativado
    if (activity.agencyCardInterest) {
        agencyUnitBrl *= cardMultiplier;
        agencyUnitClp *= cardMultiplier;
    }

    const agencyTotalBrl = agencyUnitBrl * (Number(activity.agencyPeople) || 0);
    const agencyTotalClp = agencyUnitClp * (Number(activity.agencyPeople) || 0);

    // 2. Custos de Ingresso
    let ticketUnitClp = 0;
    let ticketUnitBrl = 0;

    if (activity.ticketCostCurrency === 'CLP') {
        ticketUnitClp = Number(activity.ticketCostUnit) || 0;
        ticketUnitBrl = ticketUnitClp / rate;
    } else {
        ticketUnitBrl = Number(activity.ticketCostUnit) || 0;
        ticketUnitClp = ticketUnitBrl * rate;
    }

    // Aplica juros de cartão no ingresso se ativado
    if (activity.ticketCardInterest) {
        ticketUnitBrl *= cardMultiplier;
        ticketUnitClp *= cardMultiplier;
    }

    const ticketTotalBrl = ticketUnitBrl * (Number(activity.ticketPeople) || 0);
    const ticketTotalClp = ticketUnitClp * (Number(activity.ticketPeople) || 0);

    // 3. Totais Acumulados da Atividade
    const totalBrl = agencyTotalBrl + ticketTotalBrl;
    const totalClp = agencyTotalClp + ticketTotalClp;

    return {
        agencyTotalBrl,
        agencyTotalClp,
        ticketTotalBrl,
        ticketTotalClp,
        totalBrl,
        totalClp
    };
}

/**
 * Formatadores úteis de Moeda
 */
function formatBRL(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function formatCLP(value) {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(value).replace("CLP", "$");
}

/* ==========================================================================
   STORAGE FUNCTIONS
   ========================================================================== */

function saveState() {
    localStorage.setItem('chile_planner_config', JSON.stringify(config));
    localStorage.setItem('chile_planner_days', JSON.stringify(days));
    localStorage.setItem('chile_planner_active_day_id', activeDayId);
}

function loadState() {
    const storedConfig = localStorage.getItem('chile_planner_config');
    const storedDays = localStorage.getItem('chile_planner_days');
    const storedActiveDay = localStorage.getItem('chile_planner_active_day_id');

    if (storedConfig) {
        config = JSON.parse(storedConfig);
    }
    
    if (storedDays) {
        days = JSON.parse(storedDays);
    } else {
        // Carrega dados padrão se não houver salvamentos anteriores
        days = JSON.parse(JSON.stringify(defaultDays));
    }

    if (storedActiveDay && days.some(d => d.id === storedActiveDay)) {
        activeDayId = storedActiveDay;
    } else if (days.length > 0) {
        activeDayId = days[0].id;
    } else {
        activeDayId = "";
    }
}

/* ==========================================================================
   UI RENDERING FUNCTIONS
   ========================================================================== */

/**
 * Atualiza o Resumo Geral no Painel Lateral
 */
function updateSidebarSummary() {
    let grandTotalBrl = 0;
    let grandTotalClp = 0;
    let totalAgencyBrl = 0;
    let totalTicketsBrl = 0;
    let totalPaidBrl = 0;
    let totalPendingBrl = 0;

    days.forEach(day => {
        day.activities.forEach(act => {
            const fin = getActivityFinancials(act);
            
            grandTotalBrl += fin.totalBrl;
            grandTotalClp += fin.totalClp;
            totalAgencyBrl += fin.agencyTotalBrl;
            totalTicketsBrl += fin.ticketTotalBrl;

            if (act.paymentStatus === 'paid') {
                totalPaidBrl += fin.totalBrl;
            } else {
                totalPendingBrl += fin.totalBrl;
            }
        });
    });

    document.getElementById('total-general').innerText = formatBRL(grandTotalBrl);
    document.getElementById('total-general-clp').innerText = `${formatCLP(grandTotalClp)} CLP`;
    document.getElementById('total-agency').innerText = formatBRL(totalAgencyBrl);
    document.getElementById('total-tickets').innerText = formatBRL(totalTicketsBrl);
    document.getElementById('total-paid').innerText = formatBRL(totalPaidBrl);
    document.getElementById('total-pending').innerText = formatBRL(totalPendingBrl);

    // Atualiza cotação atual nos inputs
    document.getElementById('rate-input').value = config.clpRate;
    document.getElementById('tax-input').value = config.cardTax;
}

/**
 * Renderiza as abas dos dias (carousel)
 */
function renderDaysTabs() {
    const container = document.getElementById('days-tabs-container');
    container.innerHTML = "";

    days.forEach((day, index) => {
        const actCount = day.activities.length;
        
        const tabEl = document.createElement('div');
        tabEl.className = `day-tab ${day.id === activeDayId ? 'active' : ''}`;
        tabEl.setAttribute('data-id', day.id);
        
        tabEl.innerHTML = `
            <i class="fa-solid fa-calendar-day day-tab-icon"></i>
            <span class="day-tab-label">${day.dateLabel}</span>
            ${actCount > 0 ? `<span class="day-tab-count">${actCount}</span>` : ''}
        `;
        
        tabEl.addEventListener('click', () => {
            activeDayId = day.id;
            saveState();
            renderActiveDay();
            renderDaysTabs(); // Atualiza aba ativa
        });

        container.appendChild(tabEl);
    });

    // Botão Adicionar Dia
    const addTabEl = document.createElement('div');
    addTabEl.className = "day-tab add-day-tab";
    addTabEl.id = "tab-add-day-trigger";
    addTabEl.innerHTML = `
        <i class="fa-solid fa-plus"></i>
        <span class="day-tab-label">Adicionar Dia</span>
    `;
    addTabEl.addEventListener('click', openAddDayModal);
    container.appendChild(addTabEl);
}

/**
 * Renderiza a linha do tempo do dia ativo
 */
function renderActiveDay() {
    const activeDay = days.find(d => d.id === activeDayId);
    const container = document.getElementById('timeline-container');
    const daySummaryBar = document.getElementById('day-summary-bar');
    
    // Elementos de cabeçalho
    const activeDayTitle = document.getElementById('active-day-title');
    const activeDaySubtitle = document.getElementById('active-day-subtitle');

    if (!activeDay) {
        activeDayTitle.innerText = "Selecione ou Crie um Dia";
        activeDaySubtitle.innerText = "Crie dias de viagem usando o botão '+ Adicionar Dia'";
        daySummaryBar.style.display = "none";
        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-mountain-sun"></i>
                <p>Nenhum dia de viagem configurado. Adicione seu primeiro dia para começar!</p>
                <button class="btn btn-primary" onclick="openAddDayModal()">
                    <i class="fa-solid fa-calendar-plus"></i> Criar Dia
                </button>
            </div>
        `;
        return;
    }

    // Exibe cabeçalho do dia
    activeDayTitle.innerText = activeDay.dateLabel;
    activeDaySubtitle.innerText = `${activeDay.activities.length} atividade(s) planejada(s)`;
    daySummaryBar.style.display = "flex";

    // Ordenar atividades por horário de início
    const sortedActivities = [...activeDay.activities].sort((a, b) => {
        if (!a.startTime) return 1;
        if (!b.startTime) return -1;
        return a.startTime.localeCompare(b.startTime);
    });

    // Calcular Subtotal do Dia
    let dayTotalBrl = 0;
    let dayTotalClp = 0;
    let dayAgencyBrl = 0;
    let dayTicketBrl = 0;

    sortedActivities.forEach(act => {
        const fin = getActivityFinancials(act);
        dayTotalBrl += fin.totalBrl;
        dayTotalClp += fin.totalClp;
        dayAgencyBrl += fin.agencyTotalBrl;
        dayTicketBrl += fin.ticketTotalBrl;
    });

    document.getElementById('day-total-brl').innerText = formatBRL(dayTotalBrl);
    document.getElementById('day-total-clp').innerText = `${formatCLP(dayTotalClp)} CLP`;
    document.getElementById('day-agency-total').innerText = formatBRL(dayAgencyBrl);
    document.getElementById('day-ticket-total').innerText = formatBRL(dayTicketBrl);

    // Renderizar Linha do Tempo
    if (sortedActivities.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-route"></i>
                <p>Nenhuma atividade cadastrada para este dia.</p>
                <button class="btn btn-primary btn-sm" id="btn-empty-add-activity">
                    <i class="fa-solid fa-plus"></i> Adicionar Passeio
                </button>
            </div>
        `;
        document.getElementById('btn-empty-add-activity').addEventListener('click', openAddActivityModal);
        return;
    }

    container.innerHTML = "";

    sortedActivities.forEach(act => {
        const fin = getActivityFinancials(act);
        
        const itemEl = document.createElement('div');
        itemEl.className = "timeline-item";
        
        // Formatar horários para exibição
        const start = act.startTime || "--:--";
        const end = act.endTime ? `às ${act.endTime}` : "";

        // Formatar custos de agência e ingresso para o card
        const hasAgencyCost = act.agencyCostUnit > 0;
        const hasTicketCost = act.ticketCostUnit > 0;

        let agencyDetailsHTML = "";
        if (hasAgencyCost) {
            const rawCost = act.agencyCostCurrency === 'CLP' ? formatCLP(act.agencyCostUnit) : formatBRL(act.agencyCostUnit);
            agencyDetailsHTML = `
                <div class="finance-box">
                    <span class="fin-label">Agência (${act.agencyPeople}x)</span>
                    <span class="fin-value">${formatBRL(fin.agencyTotalBrl)}</span>
                    <span class="fin-sub">${rawCost} unit. ${act.agencyCardInterest ? '+ Juros' : ''}</span>
                </div>
            `;
        }

        let ticketDetailsHTML = "";
        if (hasTicketCost) {
            const rawCost = act.ticketCostCurrency === 'CLP' ? formatCLP(act.ticketCostUnit) : formatBRL(act.ticketCostUnit);
            ticketDetailsHTML = `
                <div class="finance-box">
                    <span class="fin-label">Ingressos (${act.ticketPeople}x)</span>
                    <span class="fin-value">${formatBRL(fin.ticketTotalBrl)}</span>
                    <span class="fin-sub">${rawCost} unit. ${act.ticketCardInterest ? '+ Juros' : ''}</span>
                </div>
            `;
        }

        const mapsQuery = act.link ? act.link : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(act.title + ' ' + (act.city || 'Chile'))}`;
        const hasLinkClass = act.link ? "address-link" : "";

        itemEl.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="activity-card">
                <!-- Time Column -->
                <div class="activity-time-col">
                    <span class="time-start">${start}</span>
                    <span class="time-end">${end}</span>
                </div>

                <!-- Info Column -->
                <div class="activity-info-col">
                    <div class="activity-title-row">
                        <h3>${act.title}</h3>
                        ${act.city ? `<span class="badge badge-location"><i class="fa-solid fa-location-dot"></i> ${act.city}</span>` : ''}
                        ${act.hasGuide ? `<span class="badge badge-guide"><i class="fa-solid fa-user-tie"></i> Guia Incluso</span>` : ''}
                        <span class="badge badge-status-${act.paymentStatus}" style="cursor: pointer;" title="Clique para alternar status" onclick="togglePaymentStatus('${act.id}')">
                            <i class="fa-solid ${act.paymentStatus === 'paid' ? 'fa-circle-check' : 'fa-circle-question'}"></i>
                            ${act.paymentStatus === 'paid' ? 'Pago' : 'Pendente'}
                        </span>
                    </div>

                    <!-- Metadata List -->
                    <div class="activity-meta-list">
                        ${act.address ? `
                            <div class="meta-item ${hasLinkClass}" onclick="${act.link ? `window.open('${act.link}', '_blank')` : `window.open('${mapsQuery}', '_blank')`}">
                                <i class="fa-solid fa-map-pin"></i> ${act.address}
                            </div>
                        ` : ''}
                        ${act.link ? `
                            <div class="meta-item address-link" onclick="window.open('${act.link}', '_blank')">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> Link Útil
                            </div>
                        ` : ''}
                    </div>

                    <!-- Notes Section -->
                    ${act.notes ? `<div class="activity-notes">${act.notes}</div>` : ''}

                    <!-- Finances Summary Section inside Card -->
                    ${(hasAgencyCost || hasTicketCost) ? `
                        <div class="activity-finances">
                            ${agencyDetailsHTML}
                            ${ticketDetailsHTML}
                            <div class="finance-box">
                                <span class="fin-label">Total do Passeio</span>
                                <span class="fin-value" style="color: var(--primary);">${formatBRL(fin.totalBrl)}</span>
                                <span class="fin-sub">${formatCLP(fin.totalClp)} CLP</span>
                            </div>
                        </div>
                    ` : ''}
                </div>

                <!-- Actions Column -->
                <div class="activity-actions-col">
                    <button class="action-icon-btn" onclick="openEditActivityModal('${act.id}')" title="Editar Passeio">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="action-icon-btn delete" onclick="deleteActivity('${act.id}')" title="Excluir Passeio">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;

        container.appendChild(itemEl);
    });
}

/* ==========================================================================
   MODAL INTERACTIVE CONTROLS
   ========================================================================== */

const activityModal = document.getElementById('activity-modal');
const dayModal = document.getElementById('day-modal');

// Close triggers
document.getElementById('close-activity-modal-btn').addEventListener('click', () => closeDynamicModal(activityModal));
document.getElementById('btn-cancel-activity').addEventListener('click', () => closeDynamicModal(activityModal));
document.getElementById('close-day-modal-btn').addEventListener('click', () => closeDynamicModal(dayModal));
document.getElementById('btn-cancel-day').addEventListener('click', () => closeDynamicModal(dayModal));

function openDynamicModal(modalEl) {
    modalEl.classList.add('open');
}

function closeDynamicModal(modalEl) {
    modalEl.classList.remove('open');
}

/* --- ACTIVITY FORM ACTIONS --- */

function openAddActivityModal() {
    const activeDay = days.find(d => d.id === activeDayId);
    if (!activeDay) return alert("Por favor, crie um dia de viagem primeiro!");

    document.getElementById('modal-activity-title').innerText = "Adicionar Passeio";
    document.getElementById('form-activity-id').value = "";
    document.getElementById('activity-form').reset();
    
    // Valores padrão sugeridos
    document.getElementById('form-agency-people').value = 2;
    document.getElementById('form-ticket-people').value = 2;
    document.getElementById('form-agency-currency').value = "CLP";
    document.getElementById('form-ticket-currency').value = "CLP";
    document.getElementById('form-payment-status').value = "pending";
    document.getElementById('form-agency-interest').checked = true;
    document.getElementById('form-ticket-interest').checked = false;
    document.getElementById('form-agency-guide').checked = false;

    openDynamicModal(activityModal);
}

function openEditActivityModal(activityId) {
    const activeDay = days.find(d => d.id === activeDayId);
    if (!activeDay) return;

    const act = activeDay.activities.find(a => a.id === activityId);
    if (!act) return;

    document.getElementById('modal-activity-title').innerText = "Editar Passeio";
    document.getElementById('form-activity-id').value = act.id;
    document.getElementById('form-title').value = act.title || "";
    document.getElementById('form-city').value = act.city || "";
    document.getElementById('form-address').value = act.address || "";
    document.getElementById('form-start-time').value = act.startTime || "";
    document.getElementById('form-end-time').value = act.endTime || "";
    
    document.getElementById('form-agency-cost').value = act.agencyCostUnit || "";
    document.getElementById('form-agency-currency').value = act.agencyCostCurrency || "CLP";
    document.getElementById('form-agency-people').value = act.agencyPeople || 2;
    document.getElementById('form-agency-interest').checked = act.agencyCardInterest !== false;
    document.getElementById('form-agency-guide').checked = !!act.hasGuide;

    document.getElementById('form-ticket-cost').value = act.ticketCostUnit || "";
    document.getElementById('form-ticket-currency').value = act.ticketCostCurrency || "CLP";
    document.getElementById('form-ticket-people').value = act.ticketPeople || 2;
    document.getElementById('form-ticket-interest').checked = !!act.ticketCardInterest;

    document.getElementById('form-link').value = act.link || "";
    document.getElementById('form-payment-status').value = act.paymentStatus || "pending";
    document.getElementById('form-notes').value = act.notes || "";

    openDynamicModal(activityModal);
}

// Submissão do Formulário de Passeios
document.getElementById('activity-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const activeDay = days.find(d => d.id === activeDayId);
    if (!activeDay) return;

    const activityId = document.getElementById('form-activity-id').value;
    
    const activityData = {
        id: activityId || `act-${Date.now()}`,
        title: document.getElementById('form-title').value,
        city: document.getElementById('form-city').value,
        address: document.getElementById('form-address').value,
        startTime: document.getElementById('form-start-time').value,
        endTime: document.getElementById('form-end-time').value,
        
        agencyCostUnit: parseFloat(document.getElementById('form-agency-cost').value) || 0,
        agencyCostCurrency: document.getElementById('form-agency-currency').value,
        agencyPeople: parseInt(document.getElementById('form-agency-people').value) || 0,
        agencyCardInterest: document.getElementById('form-agency-interest').checked,
        hasGuide: document.getElementById('form-agency-guide').checked,

        ticketCostUnit: parseFloat(document.getElementById('form-ticket-cost').value) || 0,
        ticketCostCurrency: document.getElementById('form-ticket-currency').value,
        ticketPeople: parseInt(document.getElementById('form-ticket-people').value) || 0,
        ticketCardInterest: document.getElementById('form-ticket-interest').checked,

        link: document.getElementById('form-link').value,
        paymentStatus: document.getElementById('form-payment-status').value,
        notes: document.getElementById('form-notes').value
    };

    if (activityId) {
        // Modo edição
        const index = activeDay.activities.findIndex(a => a.id === activityId);
        if (index !== -1) {
            activeDay.activities[index] = activityData;
        }
    } else {
        // Novo cadastro
        activeDay.activities.push(activityData);
    }

    saveState();
    closeDynamicModal(activityModal);
    renderActiveDay();
    renderDaysTabs();
    updateSidebarSummary();
});

function deleteActivity(activityId) {
    const activeDay = days.find(d => d.id === activeDayId);
    if (!activeDay) return;

    if (confirm("Tem certeza que deseja remover este passeio do seu roteiro?")) {
        activeDay.activities = activeDay.activities.filter(a => a.id !== activityId);
        saveState();
        renderActiveDay();
        renderDaysTabs();
        updateSidebarSummary();
    }
}

function togglePaymentStatus(activityId) {
    const activeDay = days.find(d => d.id === activeDayId);
    if (!activeDay) return;

    const act = activeDay.activities.find(a => a.id === activityId);
    if (!act) return;

    act.paymentStatus = act.paymentStatus === 'paid' ? 'pending' : 'paid';
    saveState();
    renderActiveDay();
    updateSidebarSummary();
}

/* --- DAY FORM ACTIONS --- */

function openAddDayModal() {
    document.getElementById('modal-day-title').innerText = "Adicionar Novo Dia";
    document.getElementById('form-day-id').value = "";
    
    // Sugere o próximo número de dia
    const nextDayNum = days.length + 1;
    document.getElementById('form-day-label').value = `Dia ${nextDayNum} - DD/MM (Dia da Semana)`;

    openDynamicModal(dayModal);
}

function openEditDayModal() {
    const activeDay = days.find(d => d.id === activeDayId);
    if (!activeDay) return;

    document.getElementById('modal-day-title').innerText = "Renomear Dia";
    document.getElementById('form-day-id').value = activeDay.id;
    document.getElementById('form-day-label').value = activeDay.dateLabel;

    openDynamicModal(dayModal);
}

// Submissão do Formulário de Dias
document.getElementById('day-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const dayId = document.getElementById('form-day-id').value;
    const label = document.getElementById('form-day-label').value;

    if (dayId) {
        // Editando dia
        const day = days.find(d => d.id === dayId);
        if (day) {
            day.dateLabel = label;
        }
    } else {
        // Criando novo dia
        const newId = `day-${Date.now()}`;
        days.push({
            id: newId,
            dateLabel: label,
            activities: []
        });
        activeDayId = newId;
    }

    saveState();
    closeDynamicModal(dayModal);
    renderDaysTabs();
    renderActiveDay();
});

// Excluir dia
document.getElementById('btn-delete-day').addEventListener('click', () => {
    if (!activeDayId) return;

    if (confirm("ATENÇÃO: Isso excluirá permanentemente este dia de viagem e TODOS os passeios cadastrados nele. Deseja prosseguir?")) {
        days = days.filter(d => d.id !== activeDayId);
        activeDayId = days.length > 0 ? days[0].id : "";
        saveState();
        renderDaysTabs();
        renderActiveDay();
        updateSidebarSummary();
    }
});

/* ==========================================================================
   GLOBAL CONFIGURATION ACTIONS
   ========================================================================== */

document.getElementById('save-config-btn').addEventListener('click', () => {
    const rate = parseFloat(document.getElementById('rate-input').value);
    const tax = parseFloat(document.getElementById('tax-input').value);

    if (isNaN(rate) || rate <= 0) {
        alert("Cotação inválida! Insira um número maior que zero.");
        return;
    }

    if (isNaN(tax) || tax < 0) {
        alert("Taxa inválida! Insira zero ou um número positivo.");
        return;
    }

    config.clpRate = rate;
    config.cardTax = tax;

    saveState();
    updateSidebarSummary();
    renderActiveDay();
    alert("Taxas e Cotação de Câmbio atualizadas com sucesso!");
});

/* ==========================================================================
   BACKUP & RESET UTILITIES
   ========================================================================== */

// Exportar Backup
document.getElementById('btn-export-backup').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ config, days }));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `chile_itinerary_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
});

// Importar Backup
document.getElementById('btn-import-trigger').addEventListener('click', () => {
    document.getElementById('import-file').click();
});

document.getElementById('import-file').addEventListener('change', (e) => {
    const fileReader = new FileReader();
    if (!e.target.files.length) return;
    
    fileReader.onload = function(event) {
        try {
            const importedData = JSON.parse(event.target.result);
            if (importedData.config && importedData.days) {
                config = importedData.config;
                days = importedData.days;
                activeDayId = days.length > 0 ? days[0].id : "";
                
                saveState();
                renderDaysTabs();
                renderActiveDay();
                updateSidebarSummary();
                alert("Roteiro importado com sucesso!");
            } else {
                alert("Arquivo inválido. Formato de backup incorreto.");
            }
        } catch(err) {
            alert("Erro ao ler o arquivo de backup.");
        }
    };
    fileReader.readAsText(e.target.files[0]);
    // Reseta o input para disparar o evento em importações consecutivas do mesmo arquivo
    e.target.value = "";
});

// Limpar todos os dados
document.getElementById('btn-reset-data').addEventListener('click', () => {
    if (confirm("ATENÇÃO: Esta ação apagará TODOS os dados cadastrados e redefinirá o roteiro para o exemplo inicial. Tem certeza?")) {
        localStorage.clear();
        loadState();
        renderDaysTabs();
        renderActiveDay();
        updateSidebarSummary();
        alert("Dados limpos e redefinidos com sucesso!");
    }
});

/* ==========================================================================
   OTHER GLOBAL ACTIONS
   ========================================================================== */

// Impressão / PDF
document.getElementById('btn-print').addEventListener('click', () => {
    window.print();
});

// Controle de menu (Sidebar Drawer) no mobile
const sidebarPanel = document.getElementById('sidebar-panel');
const menuToggleBtn = document.getElementById('menu-toggle-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');

// Criar overlay transparente se não existir
let overlay = document.querySelector('.sidebar-overlay');
if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
}

function openSidebar() {
    sidebarPanel.classList.add('active');
    overlay.classList.add('active');
}

function closeSidebar() {
    sidebarPanel.classList.remove('active');
    overlay.classList.remove('active');
}

menuToggleBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */

window.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderDaysTabs();
    renderActiveDay();
    updateSidebarSummary();

    // Vincula gatilhos do botão "Adicionar Passeio" e "Adicionar Dia"
    document.getElementById('btn-add-activity').addEventListener('click', openAddActivityModal);
    document.getElementById('btn-add-day').addEventListener('click', openAddDayModal);
    document.getElementById('btn-edit-day').addEventListener('click', openEditDayModal);
});
