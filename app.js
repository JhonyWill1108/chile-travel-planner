/* ==========================================================================
   STATE & PRE-POPULATED DATA (CHILE 2026 - CLEAN 7 DAYS TEMPLATE)
   ========================================================================== */

// Configuração padrão
let config = {
    clpRate: 175, // 1 BRL = 175 CLP
    cardTax: 6.38 // IOF + Taxas operacionais
};

// Roteiro padrão limpo com exatamente os 7 dias solicitados
const defaultDays = [
    { id: "day-1", dateLabel: "DIA 1 — 16/08/2026 (Domingo)", activities: [] },
    { id: "day-2", dateLabel: "DIA 2 — 17/08/2026 (Segunda-feira)", activities: [] },
    { id: "day-3", dateLabel: "DIA 3 — 18/08/2026 (Terça-feira)", activities: [] },
    { id: "day-4", dateLabel: "DIA 4 — 19/08/2026 (Quarta-feira)", activities: [] },
    { id: "day-5", dateLabel: "DIA 5 — 20/08/2026 (Quinta-feira)", activities: [] },
    { id: "day-6", dateLabel: "DIA 6 — 21/08/2026 (Sexta-feira)", activities: [] },
    { id: "day-7", dateLabel: "DIA 7 — 22/08/2026 (Sábado)", activities: [] },
    { 
        id: "day-to-decide", 
        dateLabel: "A Decidir", 
        activities: [
            {
                id: "act-decide-1",
                title: "Deserto do Atacama",
                city: "Atacama",
                address: "",
                startTime: "",
                endTime: "",
                agencyCost: 0, agencyInstallments: 1, agencyCardInterest: false, hasGuide: false,
                ticketCost: 0, ticketInstallments: 1, ticketCardInterest: false,
                linkMaps: "", linkInstagram: "", link: "", contact: "", paymentStatus: "pending",
                notes: "Avaliar custos de voo de Santiago para Calama se decidirmos esticar a viagem."
            },
            {
                id: "act-decide-2",
                title: "Parque Bicentenário",
                city: "Vitacura",
                address: "Av. Bicentenario 3236, Vitacura",
                startTime: "",
                endTime: "",
                agencyCost: 0, agencyInstallments: 1, agencyCardInterest: false, hasGuide: false,
                ticketCost: 0, ticketInstallments: 1, ticketCardInterest: false,
                linkMaps: "https://maps.google.com/?q=Parque+Bicentenario+Vitacura", linkInstagram: "", link: "", contact: "", paymentStatus: "pending",
                notes: "Perfeito pra caminhar, fazer piquenique e ver flamingos."
            },
            {
                id: "act-decide-3",
                title: "Parque Araucano",
                city: "Las Condes",
                address: "Av. Presidente Riesco 5698, Las Condes",
                startTime: "",
                endTime: "",
                agencyCost: 0, agencyInstallments: 1, agencyCardInterest: false, hasGuide: false,
                ticketCost: 0, ticketInstallments: 1, ticketCardInterest: false,
                linkMaps: "https://maps.google.com/?q=Parque+Araucano", linkInstagram: "", link: "", contact: "", paymentStatus: "pending",
                notes: "Um dos parques mais bonitos da cidade."
            },
            {
                id: "act-decide-4",
                title: "Cerro San Cristóbal",
                city: "Santiago",
                address: "Pio Nono 450, Recoleta",
                startTime: "",
                endTime: "",
                agencyCost: 0, agencyInstallments: 1, agencyCardInterest: false, hasGuide: false,
                ticketCost: 0, ticketInstallments: 1, ticketCardInterest: false,
                linkMaps: "https://maps.google.com/?q=Cerro+San+Cristobal", linkInstagram: "", link: "", contact: "", paymentStatus: "pending",
                notes: "Vista surreal da cidade (subida a pé é grátis se for pegar funicular e teleférico é pago)."
            },
            {
                id: "act-decide-5",
                title: "Cerro Santa Lucía",
                city: "Santiago Centro",
                address: "Av. Libertador Bernardo O'Higgins, Santiago",
                startTime: "",
                endTime: "",
                agencyCost: 0, agencyInstallments: 1, agencyCardInterest: false, hasGuide: false,
                ticketCost: 0, ticketInstallments: 1, ticketCardInterest: false,
                linkMaps: "https://maps.google.com/?q=Cerro+Santa+Lucia", linkInstagram: "", link: "", contact: "", paymentStatus: "pending",
                notes: "Mirantes incríveis bem no centro."
            },
            {
                id: "act-decide-6",
                title: "Plaza de Armas de Santiago",
                city: "Santiago Centro",
                address: "Plaza de Armas, Santiago",
                startTime: "",
                endTime: "",
                agencyCost: 0, agencyInstallments: 1, agencyCardInterest: false, hasGuide: false,
                ticketCost: 0, ticketInstallments: 1, ticketCardInterest: false,
                linkMaps: "https://maps.google.com/?q=Plaza+de+Armas+Santiago", linkInstagram: "", link: "", contact: "", paymentStatus: "pending",
                notes: "Centro histórico + artistas de rua."
            },
            {
                id: "act-decide-7",
                title: "Palácio de La Moneda",
                city: "Santiago Centro",
                address: "Moneda S/N, Santiago Centro",
                startTime: "",
                endTime: "",
                agencyCost: 0, agencyInstallments: 1, agencyCardInterest: false, hasGuide: false,
                ticketCost: 0, ticketInstallments: 1, ticketCardInterest: false,
                linkMaps: "https://maps.google.com/?q=Palacio+de+la+Moneda", linkInstagram: "", link: "", contact: "", paymentStatus: "pending",
                notes: "Troca da guarda (evento gratuito e diferente)."
            },
            {
                id: "act-decide-8",
                title: "Museu Nacional de Belas Artes do Chile",
                city: "Santiago Centro",
                address: "José Miguel de La Barra 650, Santiago",
                startTime: "",
                endTime: "",
                agencyCost: 0, agencyInstallments: 1, agencyCardInterest: false, hasGuide: false,
                ticketCost: 0, ticketInstallments: 1, ticketCardInterest: false,
                linkMaps: "https://maps.google.com/?q=Museo+Nacional+de+Bellas+Artes+Chile", linkInstagram: "", link: "", contact: "", paymentStatus: "pending",
                notes: "Entrada grátis e arquitetura linda."
            },
            {
                id: "act-decide-9",
                title: "Parque Forestal",
                city: "Santiago Centro",
                address: "Parque Forestal, Santiago",
                startTime: "",
                endTime: "",
                agencyCost: 0, agencyInstallments: 1, agencyCardInterest: false, hasGuide: false,
                ticketCost: 0, ticketInstallments: 1, ticketCardInterest: false,
                linkMaps: "https://maps.google.com/?q=Parque+Forestal", linkInstagram: "", link: "", contact: "", paymentStatus: "pending",
                notes: "Clima europeu, perfeito pra relaxar."
            },
            {
                id: "act-decide-10",
                title: "Templo Bahá'í da América do Sul",
                city: "Peñalolén",
                address: "Diagonal Las Torres 2000, Peñalolén",
                startTime: "",
                endTime: "",
                agencyCost: 0, agencyInstallments: 1, agencyCardInterest: false, hasGuide: false,
                ticketCost: 0, ticketInstallments: 1, ticketCardInterest: false,
                linkMaps: "https://maps.google.com/?q=Templo+Bahai+Santiago", linkInstagram: "", link: "", contact: "", paymentStatus: "pending",
                notes: "Um dos lugares mais diferentes de Santiago, com uma vista surreal da cordilheira."
            },
            {
                id: "act-decide-11",
                title: "Sky Costanera",
                city: "Providencia",
                address: "Av. Andrés Bello 2425, Providencia",
                startTime: "",
                endTime: "",
                agencyCost: 0, agencyInstallments: 1, agencyCardInterest: false, hasGuide: false,
                ticketCost: 0, ticketInstallments: 1, ticketCardInterest: false,
                linkMaps: "https://maps.google.com/?q=Sky+Costanera", linkInstagram: "", link: "", contact: "", paymentStatus: "pending",
                notes: "Mirante mais alto da América Latina com vista 360º de Santiago."
            }
        ]
    }
];

// Restaurantes sugeridos padrão (atualizados com a lista da foto do usuário)
const defaultRestaurants = [
    {
        id: "rest-1",
        name: "Papachecos",
        address: "",
        linkMaps: "",
        linkInstagram: "",
        openTime: "",
        closeTime: "",
        photo: "",
        cuisine: "Batata",
        notes: ""
    },
    {
        id: "rest-2",
        name: "Underpizza",
        address: "",
        linkMaps: "",
        linkInstagram: "",
        openTime: "",
        closeTime: "",
        photo: "",
        cuisine: "Pizza",
        notes: ""
    },
    {
        id: "rest-3",
        name: "Utopia",
        address: "",
        linkMaps: "",
        linkInstagram: "",
        openTime: "",
        closeTime: "",
        photo: "",
        cuisine: "Bar",
        notes: ""
    },
    {
        id: "rest-4",
        name: "La Cabrera",
        address: "",
        linkMaps: "",
        linkInstagram: "",
        openTime: "",
        closeTime: "",
        photo: "",
        cuisine: "Carne",
        notes: ""
    },
    {
        id: "rest-5",
        name: "Emporio la Rosa",
        address: "",
        linkMaps: "",
        linkInstagram: "",
        openTime: "",
        closeTime: "",
        photo: "",
        cuisine: "Sorveteria",
        notes: ""
    },
    {
        id: "rest-6",
        name: "Tonny Pizzeria",
        address: "Av. Apoquindo 2730, Las Condes - Santiago, Chile",
        linkMaps: "https://maps.google.com/?q=Av.+Apoquindo+2730,+Las+Condes+-+Santiago,+Chile",
        linkInstagram: "",
        openTime: "",
        closeTime: "",
        photo: "",
        cuisine: "Pizza",
        notes: "Ponto de referência: Dentro do MUT (Mercado Urbano Tobalaba)."
    },
    {
        id: "rest-7",
        name: "Toke Casero",
        address: "",
        linkMaps: "",
        linkInstagram: "",
        openTime: "",
        closeTime: "",
        photo: "",
        cuisine: "Almoço completo",
        notes: "Ponto de referência: Ao lado do Costanera - Santiago."
    }
];

let days = [];
let restaurants = [];
let activeDayId = "";
let lastActiveNormalDayId = "day-1";

// Referências de elementos do DOM (inicializados no DOMContentLoaded)
let activityModal, dayModal, restaurantModal, sidebarPanel, menuToggleBtn, closeSidebarBtn, overlay;

/* ==========================================================================
   FINANCIAL CALCULATIONS
   ========================================================================== */

function getActivityFinancials(activity) {
    const cardMultiplier = 1 + (config.cardTax / 100);

    const agencyCost = Number(activity.agencyCost) || 0;
    const agencyInstallments = Math.max(1, Number(activity.agencyInstallments) || 1);
    const agencyTotalWithInterest = activity.agencyCardInterest ? (agencyCost * cardMultiplier) : agencyCost;
    const agencyParcelValue = agencyTotalWithInterest / agencyInstallments;

    const ticketCost = Number(activity.ticketCost) || 0;
    const ticketInstallments = Math.max(1, Number(activity.ticketInstallments) || 1);
    const ticketTotalWithInterest = activity.ticketCardInterest ? (ticketCost * cardMultiplier) : ticketCost;
    const ticketParcelValue = ticketTotalWithInterest / ticketInstallments;

    const totalWithInterest = agencyTotalWithInterest + ticketTotalWithInterest;
    const totalWithoutInterest = agencyCost + ticketCost;
    const totalWithInterestClp = totalWithInterest * config.clpRate;

    return {
        agencyCost,
        agencyInstallments,
        agencyTotalWithInterest,
        agencyParcelValue,
        
        ticketCost,
        ticketInstallments,
        ticketTotalWithInterest,
        ticketParcelValue,

        totalWithInterest,
        totalWithoutInterest,
        totalWithInterestClp
    };
}

function formatBRL(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function formatCLP(value) {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(value).replace("CLP", "$");
}

/* ==========================================================================
   STORAGE & MIGRATION FUNCTIONS
   ========================================================================== */

function saveState() {
    localStorage.setItem('chile_planner_config', JSON.stringify(config));
    localStorage.setItem('chile_planner_days', JSON.stringify(days));
    localStorage.setItem('chile_planner_restaurants', JSON.stringify(restaurants));
    localStorage.setItem('chile_planner_active_day_id', activeDayId);
    localStorage.setItem('chile_planner_last_active_normal_day_id', lastActiveNormalDayId);
}

function loadState() {
    const DB_VERSION_KEY = 'chile_planner_db_version';
    const CURRENT_VERSION = 'v10_final_rest'; // Força migração de BD para incluir novos restaurantes e tipo de comida

    if (localStorage.getItem(DB_VERSION_KEY) !== CURRENT_VERSION) {
        localStorage.clear();
        localStorage.setItem(DB_VERSION_KEY, CURRENT_VERSION);
        days = JSON.parse(JSON.stringify(defaultDays));
        restaurants = JSON.parse(JSON.stringify(defaultRestaurants));
        config = { clpRate: 175, cardTax: 6.38 };
        activeDayId = "day-1";
        lastActiveNormalDayId = "day-1";
        saveState();
        return;
    }

    const storedConfig = localStorage.getItem('chile_planner_config');
    const storedDays = localStorage.getItem('chile_planner_days');
    const storedRestaurants = localStorage.getItem('chile_planner_restaurants');
    const storedActiveDay = localStorage.getItem('chile_planner_active_day_id');
    const storedLastActiveNormal = localStorage.getItem('chile_planner_last_active_normal_day_id');

    if (storedConfig) {
        try { config = JSON.parse(storedConfig); } catch(e) { console.error(e); }
    }
    
    if (storedDays) {
        try {
            days = JSON.parse(storedDays);
            if (!days.some(d => d.id === 'day-to-decide')) {
                days.push({
                    id: "day-to-decide",
                    dateLabel: "A Decidir",
                    activities: []
                });
            }
        } catch(e) {
            days = JSON.parse(JSON.stringify(defaultDays));
        }
    } else {
        days = JSON.parse(JSON.stringify(defaultDays));
    }

    if (storedRestaurants) {
        try { restaurants = JSON.parse(storedRestaurants); } catch(e) { console.error(e); }
    } else {
        restaurants = JSON.parse(JSON.stringify(defaultRestaurants));
    }

    if (storedActiveDay) {
        activeDayId = storedActiveDay;
    } else if (days.length > 0) {
        activeDayId = days[0].id;
    } else {
        activeDayId = "";
    }

    if (storedLastActiveNormal && days.some(d => d.id === storedLastActiveNormal && d.id !== 'day-to-decide')) {
        lastActiveNormalDayId = storedLastActiveNormal;
    } else {
        const firstNormal = days.find(d => d.id !== 'day-to-decide');
        lastActiveNormalDayId = firstNormal ? firstNormal.id : "day-1";
    }
}

/* ==========================================================================
   UI RENDERING FUNCTIONS
   ========================================================================== */

function updateSidebarSummary() {
    let grandTotalBrl = 0;
    let grandTotalClp = 0;
    let totalAgencyBrl = 0;
    let totalTicketsBrl = 0;
    let totalPaidBrl = 0;
    let totalPendingBrl = 0;
    let decideTotalBrl = 0;

    days.forEach(day => {
        const isToDecide = day.id === 'day-to-decide';

        day.activities.forEach(act => {
            const fin = getActivityFinancials(act);
            
            if (isToDecide) {
                decideTotalBrl += fin.totalWithInterest;
            } else {
                grandTotalBrl += fin.totalWithInterest;
                grandTotalClp += fin.totalWithInterestClp;
                totalAgencyBrl += fin.agencyTotalWithInterest;
                totalTicketsBrl += fin.ticketTotalWithInterest;

                if (act.paymentStatus === 'paid') {
                    totalPaidBrl += fin.totalWithInterest;
                } else {
                    totalPendingBrl += fin.totalWithInterest;
                }
            }
        });
    });

    const elTotalGen = document.getElementById('total-general');
    const elTotalGenClp = document.getElementById('total-general-clp');
    const elTotalAge = document.getElementById('total-agency');
    const elTotalTic = document.getElementById('total-tickets');
    const elTotalPai = document.getElementById('total-paid');
    const elTotalPen = document.getElementById('total-pending');
    const elTotalDec = document.getElementById('total-decide');

    if (elTotalGen) elTotalGen.innerText = formatBRL(grandTotalBrl);
    if (elTotalGenClp) elTotalGenClp.innerText = `${formatCLP(grandTotalClp)} CLP`;
    if (elTotalAge) elTotalAge.innerText = formatBRL(totalAgencyBrl);
    if (elTotalTic) elTotalTic.innerText = formatBRL(totalTicketsBrl);
    if (elTotalPai) elTotalPai.innerText = formatBRL(totalPaidBrl);
    if (elTotalPen) elTotalPen.innerText = formatBRL(totalPendingBrl);
    if (elTotalDec) elTotalDec.innerText = formatBRL(decideTotalBrl);

    const elRateInput = document.getElementById('rate-input');
    const elTaxInput = document.getElementById('tax-input');
    if (elRateInput) elRateInput.value = config.clpRate;
    if (elTaxInput) elTaxInput.value = config.cardTax;
}

function renderDaysTabs() {
    const container = document.getElementById('days-tabs-container');
    if (!container) return;
    container.innerHTML = "";

    const normalDays = days.filter(d => d.id !== 'day-to-decide');

    const renderTab = (day) => {
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
            lastActiveNormalDayId = day.id;
            saveState();
            renderActiveDay();
            renderDaysTabs();
            updateTopNavigationButtonsState();
        });

        container.appendChild(tabEl);
    };

    normalDays.forEach(day => renderTab(day));

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

function updateTopNavigationButtonsState() {
    const btnDecide = document.getElementById('btn-view-decide');
    const btnRest = document.getElementById('btn-view-restaurants');

    if (btnDecide && btnRest) {
        if (activeDayId === 'day-to-decide') {
            btnDecide.classList.add('btn-primary');
            btnDecide.classList.remove('btn-secondary');
            btnRest.classList.remove('btn-primary');
            btnRest.classList.add('btn-secondary');
        } else if (activeDayId === 'restaurants') {
            btnRest.classList.add('btn-primary');
            btnRest.classList.remove('btn-secondary');
            btnDecide.classList.remove('btn-primary');
            btnDecide.classList.add('btn-secondary');
        } else {
            btnDecide.classList.remove('btn-primary');
            btnDecide.classList.add('btn-secondary');
            btnRest.classList.remove('btn-primary');
            btnRest.classList.add('btn-secondary');
        }
    }
}

function renderActiveDay() {
    const daySection = document.querySelector('.day-details-section:not(#restaurants-section)');
    const restSection = document.getElementById('restaurants-section');

    if (!daySection || !restSection) return;

    if (activeDayId === 'restaurants') {
        daySection.style.display = "none";
        restSection.style.display = "flex";
        renderRestaurants();
        updateTopNavigationButtonsState();
        return;
    }

    daySection.style.display = "flex";
    restSection.style.display = "none";
    updateTopNavigationButtonsState();

    const activeDay = days.find(d => d.id === activeDayId);
    const container = document.getElementById('timeline-container');
    const daySummaryBar = document.getElementById('day-summary-bar');
    
    const activeDayTitle = document.getElementById('active-day-title');
    const activeDaySubtitle = document.getElementById('active-day-subtitle');
    const btnDeleteDay = document.getElementById('btn-delete-day');
    const btnEditDay = document.getElementById('btn-edit-day');
    const btnBack = document.getElementById('btn-back-to-itinerary');

    if (!activeDay) {
        if (activeDayTitle) activeDayTitle.innerText = "Selecione ou Crie um Dia";
        if (activeDaySubtitle) activeDaySubtitle.innerText = "Crie dias de viagem usando o botão '+ Adicionar Dia'";
        if (daySummaryBar) daySummaryBar.style.display = "none";
        if (container) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-mountain-sun"></i>
                    <p>Nenhum dia de viagem configurado. Adicione seu primeiro dia para começar!</p>
                    <button class="btn btn-primary" onclick="openAddDayModal()">
                        <i class="fa-solid fa-calendar-plus"></i> Criar Dia
                    </button>
                </div>
            `;
        }
        return;
    }

    const isToDecide = activeDay.id === 'day-to-decide';
    if (isToDecide) {
        if (btnDeleteDay) btnDeleteDay.style.display = "none";
        if (btnEditDay) btnEditDay.style.display = "none";
        if (btnBack) btnBack.style.display = "inline-flex";
        if (activeDayTitle) activeDayTitle.innerText = "💡 Passeios a Decidir";
        if (activeDaySubtitle) activeDaySubtitle.innerText = "Ideias de atividades ou opções de backup ainda não confirmadas";
    } else {
        if (btnDeleteDay) btnDeleteDay.style.display = "inline-flex";
        if (btnEditDay) btnEditDay.style.display = "inline-flex";
        if (btnBack) btnBack.style.display = "none";
        if (activeDayTitle) activeDayTitle.innerText = activeDay.dateLabel;
        if (activeDaySubtitle) activeDaySubtitle.innerText = `${activeDay.activities.length} atividade(s) planejada(s)`;
    }

    if (daySummaryBar) daySummaryBar.style.display = "flex";

    const sortedActivities = [...activeDay.activities].sort((a, b) => {
        if (!a.startTime) return 1;
        if (!b.startTime) return -1;
        return a.startTime.localeCompare(b.startTime);
    });

    let dayTotalBrl = 0;
    let dayTotalClp = 0;
    let dayAgencyBrl = 0;
    let dayTicketBrl = 0;

    sortedActivities.forEach(act => {
        const fin = getActivityFinancials(act);
        dayTotalBrl += fin.totalWithInterest;
        dayTotalClp += fin.totalWithInterestClp;
        dayAgencyBrl += fin.agencyTotalWithInterest;
        dayTicketBrl += fin.ticketTotalWithInterest;
    });

    const elDayTotBrl = document.getElementById('day-total-brl');
    const elDayTotClp = document.getElementById('day-total-clp');
    const elDayAgeTot = document.getElementById('day-agency-total');
    const elDayTicTot = document.getElementById('day-ticket-total');

    if (elDayTotBrl) elDayTotBrl.innerText = formatBRL(dayTotalBrl);
    if (elDayTotClp) elDayTotClp.innerText = `${formatCLP(dayTotalClp)} CLP`;
    if (elDayAgeTot) elDayAgeTot.innerText = formatBRL(dayAgencyBrl);
    if (elDayTicTot) elDayTicTot.innerText = formatBRL(dayTicketBrl);

    if (daySummaryBar) {
        if (isToDecide) {
            daySummaryBar.querySelector('.day-metric-label').innerText = "Orçamento em Aberto:";
            daySummaryBar.style.background = "rgba(148, 163, 184, 0.05)";
            daySummaryBar.style.borderColor = "rgba(148, 163, 184, 0.2)";
            daySummaryBar.querySelector('.day-metric-value').style.color = "var(--text-muted)";
        } else {
            daySummaryBar.querySelector('.day-metric-label').innerText = "Subtotal do Dia:";
            daySummaryBar.style.background = "rgba(249, 115, 22, 0.03)";
            daySummaryBar.style.borderColor = "rgba(249, 115, 22, 0.2)";
            daySummaryBar.querySelector('.day-metric-value').style.color = "var(--primary)";
        }
    }

    if (!container) return;

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
        
        const start = act.startTime || "--:--";
        const end = act.endTime ? `às ${act.endTime}` : "";

        const hasAgencyCost = fin.agencyCost > 0;
        const hasTicketCost = fin.ticketCost > 0;

        let agencyDetailsHTML = "";
        if (hasAgencyCost) {
            agencyDetailsHTML = `
                <div class="finance-box">
                    <span class="fin-label">Agência (${fin.agencyInstallments}x${act.agencyCardInterest ? ' Juros' : ''})</span>
                    <span class="fin-value">${formatBRL(fin.agencyTotalWithInterest)}</span>
                    <span class="fin-sub">Base: ${formatBRL(fin.agencyCost)} / Parc: ${formatBRL(fin.agencyParcelValue)}</span>
                </div>
            `;
        }

        let ticketDetailsHTML = "";
        if (hasTicketCost) {
            ticketDetailsHTML = `
                <div class="finance-box">
                    <span class="fin-label">Ingressos (${fin.ticketInstallments}x${act.ticketCardInterest ? ' Juros' : ''})</span>
                    <span class="fin-value">${formatBRL(fin.ticketTotalWithInterest)}</span>
                    <span class="fin-sub">Base: ${formatBRL(fin.ticketCost)} / Parc: ${formatBRL(fin.ticketParcelValue)}</span>
                </div>
            `;
        }

        let mapsLinkHTML = "";
        if (act.linkMaps) {
            mapsLinkHTML = `<a href="${act.linkMaps}" target="_blank" class="activity-link-icon maps-link" title="Ver no Google Maps"><i class="fa-solid fa-map-location-dot"></i></a>`;
        } else if (act.address) {
            const mapsLinkQuery = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(act.address + ' ' + (act.city || 'Chile'))}`;
            mapsLinkHTML = `<a href="${mapsLinkQuery}" target="_blank" class="activity-link-icon maps-link" title="Buscar no Google Maps"><i class="fa-solid fa-map-location-dot"></i></a>`;
        }

        let instagramLinkHTML = "";
        if (act.linkInstagram) {
            instagramLinkHTML = `<a href="${act.linkInstagram}" target="_blank" class="activity-link-icon instagram-link" title="Acessar Instagram"><i class="fa-brands fa-instagram"></i></a>`;
        }

        let siteLinkHTML = "";
        if (act.link) {
            siteLinkHTML = `<a href="${act.link}" target="_blank" class="activity-link-icon site-link" title="Acessar Site/Link Útil"><i class="fa-solid fa-globe"></i></a>`;
        }

        const addressHTML = act.address ? `
            <div class="meta-item">
                <i class="fa-solid fa-map-pin"></i> ${act.address}
            </div>
        ` : '';

        itemEl.innerHTML = `
            <div class="timeline-dot" style="${isToDecide ? 'border-color: var(--text-muted); box-shadow: 0 0 10px rgba(148, 163, 184, 0.4);' : ''}"></div>
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
                        <div class="activity-header-links">
                            ${mapsLinkHTML}
                            ${instagramLinkHTML}
                            ${siteLinkHTML}
                        </div>
                        ${act.city ? `<span class="badge badge-location"><i class="fa-solid fa-location-dot"></i> ${act.city}</span>` : ''}
                        ${act.hasGuide ? `<span class="badge badge-guide"><i class="fa-solid fa-user-tie"></i> Guia Incluso</span>` : ''}
                        ${act.contact ? `<span class="badge badge-contact"><i class="fa-solid fa-address-book"></i> ${act.contact}</span>` : ''}
                        <span class="badge badge-status-${act.paymentStatus}" style="cursor: pointer;" title="Clique para alternar status" onclick="togglePaymentStatus('${act.id}')">
                            <i class="fa-solid ${act.paymentStatus === 'paid' ? 'fa-circle-check' : 'fa-circle-question'}"></i>
                            ${act.paymentStatus === 'paid' ? 'Pago' : 'Pendente'}
                        </span>
                    </div>

                    <!-- Metadata List -->
                    <div class="activity-meta-list">
                        ${addressHTML}
                    </div>

                    <!-- Notes Section -->
                    ${act.notes ? `<div class="activity-notes">${act.notes}</div>` : ''}

                    <!-- Finances Summary Section -->
                    ${(hasAgencyCost || hasTicketCost) ? `
                        <div class="activity-finances">
                            ${agencyDetailsHTML}
                            ${ticketDetailsHTML}
                            <div class="finance-box" style="border-left: 1px solid var(--border-color); padding-left: 14px;">
                                <span class="fin-label">Total do Passeio</span>
                                <span class="fin-value" style="color: ${isToDecide ? 'var(--text-main)' : 'var(--primary)'}; font-size: 0.95rem;">${formatBRL(fin.totalWithInterest)}</span>
                                <span class="fin-sub">Sem Juros: ${formatBRL(fin.totalWithoutInterest)}</span>
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
   RESTAURANT CONTROLS & RENDERING
   ========================================================================== */

function renderRestaurants() {
    const container = document.getElementById('restaurants-grid-container');
    if (!container) return;
    
    if (restaurants.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fa-solid fa-utensils"></i>
                <p>Nenhum restaurante cadastrado no seu guia.</p>
                <button class="btn btn-primary btn-sm" onclick="openAddRestaurantModal()">
                    <i class="fa-solid fa-plus"></i> Adicionar Restaurante
                </button>
            </div>
        `;
        return;
    }

    container.innerHTML = "";

    restaurants.forEach(rest => {
        let mapsLinkHTML = "";
        if (rest.linkMaps) {
            mapsLinkHTML = `<a href="${rest.linkMaps}" target="_blank" class="activity-link-icon maps-link" title="Ver no Google Maps"><i class="fa-solid fa-map-location-dot"></i></a>`;
        } else if (rest.address) {
            const query = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(rest.name + ' ' + rest.address)}`;
            mapsLinkHTML = `<a href="${query}" target="_blank" class="activity-link-icon maps-link" title="Buscar no Google Maps"><i class="fa-solid fa-map-location-dot"></i></a>`;
        }

        let instagramLinkHTML = "";
        if (rest.linkInstagram) {
            instagramLinkHTML = `<a href="${rest.linkInstagram}" target="_blank" class="activity-link-icon instagram-link" title="Instagram"><i class="fa-brands fa-instagram"></i></a>`;
        }

        const addressHTML = rest.address ? `
            <div class="meta-item">
                <i class="fa-solid fa-map-pin"></i> ${rest.address}
            </div>
        ` : '';

        const hoursText = (rest.openTime || rest.closeTime) ? `
            <div class="restaurant-hours">
                <i class="fa-solid fa-clock"></i> ${rest.openTime || '--:--'} às ${rest.closeTime || '--:--'}
            </div>
        ` : '';

        const notesHTML = rest.notes ? `
            <div class="restaurant-notes-box">${rest.notes}</div>
        ` : '';

        const cuisineHTML = rest.cuisine ? `
            <span class="badge badge-cuisine" style="background: rgba(16, 185, 129, 0.1); color: var(--success); border: 1px solid rgba(16, 185, 129, 0.2); font-size: 0.72rem; padding: 2px 8px; border-radius: 12px; display: inline-flex; align-items: center; gap: 4px; width: fit-content; margin-top: 4px;">
                <i class="fa-solid fa-utensils"></i> ${rest.cuisine}
            </span>
        ` : '';

        const cardEl = document.createElement('div');
        cardEl.className = "restaurant-card";
        cardEl.innerHTML = `
            <div class="restaurant-image" style="${rest.photo ? `background-image: url(${rest.photo});` : ''}">
                ${hoursText}
            </div>
            <div class="restaurant-card-body">
                <div class="restaurant-title-row">
                    <h3>${rest.name}</h3>
                    <div class="restaurant-links">
                        ${mapsLinkHTML}
                        ${instagramLinkHTML}
                    </div>
                </div>
                <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 6px;">
                    ${cuisineHTML}
                </div>
                ${addressHTML}
                ${notesHTML}
            </div>
            <div class="restaurant-card-footer">
                <button class="btn btn-outline btn-sm" onclick="openEditRestaurantModal('${rest.id}')" title="Editar"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-outline-danger btn-sm" onclick="deleteRestaurant('${rest.id}')" title="Excluir"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
        container.appendChild(cardEl);
    });
}

function openAddRestaurantModal() {
    document.getElementById('modal-restaurant-title').innerText = "Adicionar Restaurante";
    document.getElementById('form-rest-id').value = "";
    document.getElementById('form-rest-photo-base64').value = "";
    const elCuisine = document.getElementById('form-rest-cuisine');
    if (elCuisine) elCuisine.value = "";

    const form = document.getElementById('restaurant-form');
    if (form) form.reset();
    
    const previewImg = document.getElementById('form-rest-photo-preview');
    if (previewImg) {
        previewImg.src = "";
        previewImg.style.display = "none";
    }

    openDynamicModal(restaurantModal);
}

function openEditRestaurantModal(id) {
    const rest = restaurants.find(r => r.id === id);
    if (!rest) return;

    document.getElementById('modal-restaurant-title').innerText = "Editar Restaurante";
    document.getElementById('form-rest-id').value = rest.id;
    document.getElementById('form-rest-name').value = rest.name || "";
    document.getElementById('form-rest-address').value = rest.address || "";
    document.getElementById('form-rest-link-maps').value = rest.linkMaps || "";
    document.getElementById('form-rest-link-instagram').value = rest.linkInstagram || "";
    document.getElementById('form-rest-open-time').value = rest.openTime || "";
    document.getElementById('form-rest-close-time').value = rest.closeTime || "";
    document.getElementById('form-rest-notes').value = rest.notes || "";
    
    const elCuisine = document.getElementById('form-rest-cuisine');
    if (elCuisine) elCuisine.value = rest.cuisine || "";

    document.getElementById('form-rest-photo-url').value = (rest.photo && !rest.photo.startsWith('data:')) ? rest.photo : "";
    document.getElementById('form-rest-photo-base64').value = rest.photo || "";

    const previewImg = document.getElementById('form-rest-photo-preview');
    if (previewImg) {
        if (rest.photo) {
            previewImg.src = rest.photo;
            previewImg.style.display = "block";
        } else {
            previewImg.src = "";
            previewImg.style.display = "none";
        }
    }

    openDynamicModal(restaurantModal);
}

function deleteRestaurant(id) {
    if (confirm("Tem certeza que deseja excluir este restaurante do seu guia?")) {
        restaurants = restaurants.filter(r => r.id !== id);
        saveState();
        renderRestaurants();
        updateSidebarSummary();
    }
}

/* ==========================================================================
   MODAL AUXILIARY CONTROLS
   ========================================================================== */

function openDynamicModal(modalEl) {
    if (modalEl) modalEl.classList.add('open');
}

function closeDynamicModal(modalEl) {
    if (modalEl) modalEl.classList.remove('open');
}

/* --- FORM CALCULATIONS TRIGGER (REAL-TIME PREVIEW) --- */

function updateFormCalculations() {
    const clpRate = config.clpRate;
    const cardTax = config.cardTax;
    const cardMultiplier = 1 + (cardTax / 100);

    // 1. Agência
    const agencyCostUnitInput = document.getElementById('form-agency-cost-unit');
    const agencyCurrencyInput = document.getElementById('form-agency-currency');
    const agencyPeopleInput = document.getElementById('form-agency-people');
    const agencyCostInput = document.getElementById('form-agency-cost');

    if (agencyCostUnitInput && agencyCurrencyInput && agencyPeopleInput && agencyCostInput) {
        const agencyCostUnit = parseFloat(agencyCostUnitInput.value) || 0;
        const agencyCurrency = agencyCurrencyInput.value;
        const agencyPeople = parseInt(agencyPeopleInput.value) || 1;

        if (agencyCostUnit > 0) {
            let calculatedBase = agencyCostUnit * agencyPeople;
            if (agencyCurrency === 'CLP') {
                calculatedBase = calculatedBase / clpRate;
            }
            agencyCostInput.value = calculatedBase.toFixed(2);
        }
    }

    const agencyCostBase = parseFloat(document.getElementById('form-agency-cost')?.value) || 0;
    const agencyInstallments = Math.max(1, parseInt(document.getElementById('form-agency-installments')?.value) || 1);
    const agencyHasInterest = document.getElementById('form-agency-interest')?.checked;

    const agencyTotalWithInterest = agencyHasInterest ? (agencyCostBase * cardMultiplier) : agencyCostBase;
    const agencyParcelValue = agencyTotalWithInterest / agencyInstallments;

    const elAgeParVal = document.getElementById('form-agency-parcel-val');
    const elAgeTotVal = document.getElementById('form-agency-total-val');
    if (elAgeParVal) elAgeParVal.value = formatBRL(agencyParcelValue);
    if (elAgeTotVal) elAgeTotVal.value = formatBRL(agencyTotalWithInterest);

    // 2. Ingresso
    const ticketCostUnitInput = document.getElementById('form-ticket-cost-unit');
    const ticketCurrencyInput = document.getElementById('form-ticket-currency');
    const ticketPeopleInput = document.getElementById('form-ticket-people');
    const ticketCostInput = document.getElementById('form-ticket-cost');

    if (ticketCostUnitInput && ticketCurrencyInput && ticketPeopleInput && ticketCostInput) {
        const ticketCostUnit = parseFloat(ticketCostUnitInput.value) || 0;
        const ticketCurrency = ticketCurrencyInput.value;
        const ticketPeople = parseInt(ticketPeopleInput.value) || 1;

        if (ticketCostUnit > 0) {
            let calculatedBase = ticketCostUnit * ticketPeople;
            if (ticketCurrency === 'CLP') {
                calculatedBase = calculatedBase / clpRate;
            }
            ticketCostInput.value = calculatedBase.toFixed(2);
        }
    }

    const ticketCostBase = parseFloat(document.getElementById('form-ticket-cost')?.value) || 0;
    const ticketInstallments = Math.max(1, parseInt(document.getElementById('form-ticket-installments')?.value) || 1);
    const ticketHasInterest = document.getElementById('form-ticket-interest')?.checked;

    const ticketTotalWithInterest = ticketHasInterest ? (ticketCostBase * cardMultiplier) : ticketCostBase;
    const ticketParcelValue = ticketTotalWithInterest / ticketInstallments;

    const elTicParVal = document.getElementById('form-ticket-parcel-val');
    const elTicTotVal = document.getElementById('form-ticket-total-val');
    if (elTicParVal) elTicParVal.value = formatBRL(ticketParcelValue);
    if (elTicTotVal) elTicTotVal.value = formatBRL(ticketTotalWithInterest);

    // 3. Totais do Rodapé
    const grandTotalWithInterest = agencyTotalWithInterest + ticketTotalWithInterest;
    const grandTotalWithoutInterest = agencyCostBase + ticketCostBase;

    const elPrevTotInt = document.getElementById('form-preview-total-with-interest');
    const elPrevTotNoInt = document.getElementById('form-preview-total-without-interest');
    if (elPrevTotInt) elPrevTotInt.innerText = formatBRL(grandTotalWithInterest);
    if (elPrevTotNoInt) elPrevTotNoInt.innerText = formatBRL(grandTotalWithoutInterest);
}

/* --- ACTIVITY FORM ACTIONS --- */

function openAddActivityModal() {
    const activeDay = days.find(d => d.id === activeDayId);
    if (!activeDay) return alert("Por favor, crie um dia de viagem primeiro!");

    document.getElementById('modal-activity-title').innerText = "Adicionar Passeio";
    document.getElementById('form-activity-id').value = "";
    
    const form = document.getElementById('activity-form');
    if (form) form.reset();
    
    document.getElementById('form-agency-people').value = 2;
    document.getElementById('form-ticket-people').value = 2;
    document.getElementById('form-agency-currency').value = "CLP";
    document.getElementById('form-ticket-currency').value = "CLP";
    document.getElementById('form-agency-installments').value = 1;
    document.getElementById('form-ticket-installments').value = 1;
    document.getElementById('form-payment-status').value = "pending";
    document.getElementById('form-agency-interest').checked = false;
    document.getElementById('form-ticket-interest').checked = false;
    document.getElementById('form-agency-guide').checked = false;

    updateFormCalculations();
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
    
    document.getElementById('form-agency-cost-unit').value = act.agencyCostUnit || "";
    document.getElementById('form-agency-currency').value = act.agencyCostCurrency || "BRL";
    document.getElementById('form-agency-people').value = act.agencyPeople || 2;

    document.getElementById('form-agency-cost').value = act.agencyCost || 0;
    document.getElementById('form-agency-installments').value = act.agencyInstallments || 1;
    document.getElementById('form-agency-interest').checked = !!act.agencyCardInterest;
    document.getElementById('form-agency-guide').checked = !!act.hasGuide;

    document.getElementById('form-ticket-cost-unit').value = act.ticketCostUnit || "";
    document.getElementById('form-ticket-currency').value = act.ticketCostCurrency || "BRL";
    document.getElementById('form-ticket-people').value = act.ticketPeople || 2;

    document.getElementById('form-ticket-cost').value = act.ticketCost || 0;
    document.getElementById('form-ticket-installments').value = act.ticketInstallments || 1;
    document.getElementById('form-ticket-interest').checked = !!act.ticketCardInterest;

    document.getElementById('form-link-maps').value = act.linkMaps || "";
    document.getElementById('form-link-instagram').value = act.linkInstagram || "";
    document.getElementById('form-link').value = act.link || "";
    document.getElementById('form-contact').value = act.contact || "";
    document.getElementById('form-payment-status').value = act.paymentStatus || "pending";
    document.getElementById('form-notes').value = act.notes || "";

    updateFormCalculations();
    openDynamicModal(activityModal);
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

/* --- DAY FORM ACTIONS --- */

function openAddDayModal() {
    document.getElementById('modal-day-title').innerText = "Adicionar Novo Dia";
    document.getElementById('form-day-id').value = "";
    
    const normalDaysCount = days.filter(d => d.id !== 'day-to-decide').length;
    const nextDayNum = normalDaysCount + 1;
    document.getElementById('form-day-label').value = `Dia ${nextDayNum} - DD/MM (Dia da Semana)`;

    openDynamicModal(dayModal);
}

function openEditDayModal() {
    const activeDay = days.find(d => d.id === activeDayId);
    if (!activeDay || activeDay.id === 'day-to-decide') return;

    document.getElementById('modal-day-title').innerText = "Renomear Dia";
    document.getElementById('form-day-id').value = activeDay.id;
    document.getElementById('form-day-label').value = activeDay.dateLabel;

    openDynamicModal(dayModal);
}

/* ==========================================================================
   INITIALIZATION & DOM EVENT BINDING
   ========================================================================== */

window.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa Estado de Dados
    loadState();

    // 2. Mapeamento de Elementos do DOM
    activityModal = document.getElementById('activity-modal');
    dayModal = document.getElementById('day-modal');
    restaurantModal = document.getElementById('restaurant-modal');
    sidebarPanel = document.getElementById('sidebar-panel');
    menuToggleBtn = document.getElementById('menu-toggle-btn');
    closeSidebarBtn = document.getElementById('close-sidebar-btn');
    overlay = document.querySelector('.sidebar-overlay');

    // 3. Renderiza UI Inicial
    renderDaysTabs();
    renderActiveDay();
    updateSidebarSummary();
    updateTopNavigationButtonsState();

    // 4. Ouvintes de Eventos da Linha do Tempo e Dias
    document.getElementById('btn-add-activity')?.addEventListener('click', openAddActivityModal);
    document.getElementById('btn-add-day')?.addEventListener('click', openAddDayModal);
    document.getElementById('btn-edit-day')?.addEventListener('click', openEditDayModal);

    // 5. Modais de Fechamento (Dias e Passeios)
    document.getElementById('close-activity-modal-btn')?.addEventListener('click', () => closeDynamicModal(activityModal));
    document.getElementById('btn-cancel-activity')?.addEventListener('click', () => closeDynamicModal(activityModal));
    document.getElementById('close-day-modal-btn')?.addEventListener('click', () => closeDynamicModal(dayModal));
    document.getElementById('btn-cancel-day')?.addEventListener('click', () => closeDynamicModal(dayModal));

    // Ouvinte do formulário de passeios
    document.getElementById('activity-form')?.addEventListener('submit', (e) => {
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
            
            agencyCostUnit: parseFloat(document.getElementById('form-agency-cost-unit').value) || 0,
            agencyCostCurrency: document.getElementById('form-agency-currency').value,
            agencyPeople: parseInt(document.getElementById('form-agency-people').value) || 2,
            agencyCost: parseFloat(document.getElementById('form-agency-cost').value) || 0,
            agencyInstallments: parseInt(document.getElementById('form-agency-installments').value) || 1,
            agencyCardInterest: document.getElementById('form-agency-interest').checked,
            hasGuide: document.getElementById('form-agency-guide').checked,

            ticketCostUnit: parseFloat(document.getElementById('form-ticket-cost-unit').value) || 0,
            ticketCostCurrency: document.getElementById('form-ticket-currency').value,
            ticketPeople: parseInt(document.getElementById('form-ticket-people').value) || 2,
            ticketCost: parseFloat(document.getElementById('form-ticket-cost').value) || 0,
            ticketInstallments: parseInt(document.getElementById('form-ticket-installments').value) || 1,
            ticketCardInterest: document.getElementById('form-ticket-interest').checked,

            linkMaps: document.getElementById('form-link-maps').value,
            linkInstagram: document.getElementById('form-link-instagram').value,
            link: document.getElementById('form-link').value,
            contact: document.getElementById('form-contact').value,
            paymentStatus: document.getElementById('form-payment-status').value,
            notes: document.getElementById('form-notes').value
        };

        if (activityId) {
            const index = activeDay.activities.findIndex(a => a.id === activityId);
            if (index !== -1) {
                activeDay.activities[index] = activityData;
            }
        } else {
            activeDay.activities.push(activityData);
        }

        saveState();
        closeDynamicModal(activityModal);
        renderActiveDay();
        renderDaysTabs();
        updateSidebarSummary();
    });

    // Vincular ouvintes para atualizações de cálculos em tempo real do formulário
    const inputsArray = [
        'form-agency-cost-unit', 'form-agency-currency', 'form-agency-people', 'form-agency-cost',
        'form-agency-installments', 'form-agency-interest',
        'form-ticket-cost-unit', 'form-ticket-currency', 'form-ticket-people', 'form-ticket-cost',
        'form-ticket-installments', 'form-ticket-interest'
    ];

    inputsArray.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', updateFormCalculations);
            el.addEventListener('change', updateFormCalculations);
        }
    });

    // 6. Ouvintes de Eventos de Restaurantes (Botoes e Modais)
    document.getElementById('btn-add-restaurant')?.addEventListener('click', openAddRestaurantModal);
    
    document.getElementById('btn-back-from-restaurants')?.addEventListener('click', () => {
        activeDayId = lastActiveNormalDayId;
        saveState();
        renderActiveDay();
        renderDaysTabs();
    });

    document.getElementById('close-restaurant-modal-btn')?.addEventListener('click', () => closeDynamicModal(restaurantModal));
    document.getElementById('btn-cancel-restaurant')?.addEventListener('click', () => closeDynamicModal(restaurantModal));

    // Upload e link da foto do restaurante
    document.getElementById('form-rest-photo-file')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        document.getElementById('form-rest-photo-url').value = "";

        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 320;
                const MAX_HEIGHT = 200;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                const compressedBase64 = canvas.toDataURL('image/jpeg', 0.65);
                
                document.getElementById('form-rest-photo-base64').value = compressedBase64;
                const preview = document.getElementById('form-rest-photo-preview');
                if (preview) {
                    preview.src = compressedBase64;
                    preview.style.display = "block";
                }
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    });

    document.getElementById('form-rest-photo-url')?.addEventListener('input', (e) => {
        const url = e.target.value.trim();
        const preview = document.getElementById('form-rest-photo-preview');
        const base64Input = document.getElementById('form-rest-photo-base64');
        
        if (preview && base64Input) {
            if (url) {
                base64Input.value = url;
                preview.src = url;
                preview.style.display = "block";
                document.getElementById('form-rest-photo-file').value = "";
            } else {
                base64Input.value = "";
                preview.src = "";
                preview.style.display = "none";
            }
        }
    });

    // Submissão do formulário de restaurante
    document.getElementById('restaurant-form')?.addEventListener('submit', (e) => {
        e.preventDefault();

        const id = document.getElementById('form-rest-id').value;
        const restData = {
            id: id || `rest-${Date.now()}`,
            name: document.getElementById('form-rest-name').value,
            address: document.getElementById('form-rest-address').value,
            linkMaps: document.getElementById('form-rest-link-maps').value,
            linkInstagram: document.getElementById('form-rest-link-instagram').value,
            openTime: document.getElementById('form-rest-open-time').value,
            closeTime: document.getElementById('form-rest-close-time').value,
            photo: document.getElementById('form-rest-photo-base64').value,
            cuisine: document.getElementById('form-rest-cuisine')?.value || "",
            notes: document.getElementById('form-rest-notes').value
        };

        if (id) {
            const index = restaurants.findIndex(r => r.id === id);
            if (index !== -1) {
                restaurants[index] = restData;
            }
        } else {
            restaurants.push(restData);
        }

        saveState();
        closeDynamicModal(restaurantModal);
        renderRestaurants();
        updateSidebarSummary();
    });

    // Ouvinte do formulário de dias
    document.getElementById('day-form')?.addEventListener('submit', (e) => {
        e.preventDefault();

        const dayId = document.getElementById('form-day-id').value;
        const label = document.getElementById('form-day-label').value;

        if (dayId) {
            const day = days.find(d => d.id === dayId);
            if (day) {
                day.dateLabel = label;
            }
        } else {
            const newId = `day-${Date.now()}`;
            const decideIndex = days.findIndex(d => d.id === 'day-to-decide');
            const newDay = {
                id: newId,
                dateLabel: label,
                activities: []
            };
            
            if (decideIndex !== -1) {
                days.splice(decideIndex, 0, newDay);
            } else {
                days.push(newDay);
            }
            
            activeDayId = newId;
            lastActiveNormalDayId = newId;
        }

        saveState();
        closeDynamicModal(dayModal);
        renderDaysTabs();
        renderActiveDay();
    });

    // 7. Botões de Ações Globais e Painel de Configurações
    document.getElementById('save-config-btn')?.addEventListener('click', () => {
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

    document.getElementById('btn-export-backup')?.addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ config, days, restaurants }));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `chile_itinerary_backup_${new Date().toISOString().split('T')[0]}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    });

    document.getElementById('btn-import-trigger')?.addEventListener('click', () => {
        document.getElementById('import-file').click();
    });

    document.getElementById('import-file')?.addEventListener('change', (e) => {
        const fileReader = new FileReader();
        if (!e.target.files.length) return;
        
        fileReader.onload = function(event) {
            try {
                const importedData = JSON.parse(event.target.result);
                if (importedData.config && importedData.days) {
                    config = importedData.config;
                    days = importedData.days;
                    restaurants = importedData.restaurants || [];
                    
                    if (!days.some(d => d.id === 'day-to-decide')) {
                        days.push({
                            id: "day-to-decide",
                            dateLabel: "A Decidir",
                            activities: []
                        });
                    }

                    activeDayId = days.length > 0 ? days[0].id : "day-to-decide";
                    if (activeDayId !== "day-to-decide") {
                        lastActiveNormalDayId = activeDayId;
                    }
                    
                    saveState();
                    renderDaysTabs();
                    renderActiveDay();
                    updateSidebarSummary();
                    updateTopNavigationButtonsState();
                    alert("Roteiro importado com sucesso!");
                } else {
                    alert("Arquivo inválido. Formato de backup incorreto.");
                }
            } catch(err) {
                alert("Erro ao ler o arquivo de backup.");
            }
        };
        fileReader.readAsText(e.target.files[0]);
        e.target.value = "";
    });

    document.getElementById('btn-reset-data')?.addEventListener('click', () => {
        if (confirm("ATENÇÃO: Esta ação apagará TODOS os dados cadastrados e redefinirá o roteiro para o exemplo inicial. Tem certeza?")) {
            localStorage.clear();
            loadState();
            renderDaysTabs();
            renderActiveDay();
            updateSidebarSummary();
            updateTopNavigationButtonsState();
            alert("Dados limpos e redefinidos com sucesso!");
        }
    });

    document.getElementById('btn-print')?.addEventListener('click', () => {
        window.print();
    });

    // 8. Botões de Navegação entre Seções do Menu Superior
    document.getElementById('btn-view-decide')?.addEventListener('click', () => {
        activeDayId = "day-to-decide";
        saveState();
        renderActiveDay();
        renderDaysTabs();
    });

    document.getElementById('btn-view-restaurants')?.addEventListener('click', () => {
        activeDayId = "restaurants";
        saveState();
        renderActiveDay();
        renderDaysTabs();
    });

    document.getElementById('btn-back-to-itinerary')?.addEventListener('click', () => {
        activeDayId = lastActiveNormalDayId;
        saveState();
        renderActiveDay();
        renderDaysTabs();
    });

    // 9. Gaveta de Menu Lateral (Mobile Sidebar)
    if (menuToggleBtn && closeSidebarBtn && overlay) {
        const openSidebar = () => {
            sidebarPanel.classList.add('active');
            overlay.classList.add('active');
        };

        const closeSidebar = () => {
            sidebarPanel.classList.remove('active');
            overlay.classList.remove('active');
        };

        menuToggleBtn.addEventListener('click', openSidebar);
        closeSidebarBtn.addEventListener('click', closeSidebar);
        overlay.addEventListener('click', closeSidebar);
    }
});
