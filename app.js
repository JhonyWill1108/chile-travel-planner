/* ==========================================================================
   STATE & PRE-POPULATED DATA (CHILE 2026)
   ========================================================================== */

// Configuração padrão
let config = {
    clpRate: 175, // 1 BRL = 175 CLP
    cardTax: 6.38 // IOF + Taxas operacionais
};

// Roteiro padrão pré-populado com a estrutura de parcelas, juros e contato
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
                agencyCost: 514.28, // (45000 * 2) / 175 = R$ 514.28
                agencyInstallments: 3,
                agencyCardInterest: true,
                hasGuide: true,
                ticketCostUnit: 0,
                ticketCostCurrency: "CLP",
                ticketPeople: 2,
                ticketCost: 0,
                ticketInstallments: 1,
                ticketCardInterest: false,
                paymentStatus: "paid",
                contact: "Agência Andes Tour (+56 9 8273 1192)",
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
                agencyCost: 0,
                agencyInstallments: 1,
                agencyCardInterest: false,
                hasGuide: false,
                ticketCostUnit: 35000,
                ticketCostCurrency: "CLP",
                ticketPeople: 2,
                ticketCost: 400.00, // (35000 * 2) / 175 = R$ 400.00
                ticketInstallments: 1,
                ticketCardInterest: true,
                paymentStatus: "pending",
                contact: "Restaurante - Reserva Online",
                notes: "Restaurante muito charmoso e romântico no bairro Bellavista. Especializado em frutos do mar. Prato recomendado: Congrio Celeste.",
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
                agencyCost: 171.43, // (15000 * 2) / 175 = R$ 171.43
                agencyInstallments: 1,
                agencyCardInterest: false,
                hasGuide: true,
                ticketCostUnit: 0,
                ticketCostCurrency: "CLP",
                ticketPeople: 2,
                ticketCost: 0,
                ticketInstallments: 1,
                ticketCardInterest: false,
                paymentStatus: "paid",
                contact: "Guia Local Carlos (+56 9 9918 2234)",
                notes: "Visitar a Plaza de Armas, a Catedral Metropolitana e subir o Cerro Santa Lucía.",
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
                agencyCost: 0,
                agencyInstallments: 1,
                agencyCardInterest: false,
                hasGuide: false,
                ticketCostUnit: 15000,
                ticketCostCurrency: "CLP",
                ticketPeople: 2,
                ticketCost: 171.43, // (15000 * 2) / 175 = R$ 171.43
                ticketInstallments: 1,
                ticketCardInterest: true,
                paymentStatus: "pending",
                contact: "Loja Rent-a-Ski Centro",
                notes: "Alugar casaco impermeável, calça, botas e luvas para os passeios de montanha.",
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
                agencyCost: 594.28, // (52000 * 2) / 175 = R$ 594.28
                agencyInstallments: 3,
                agencyCardInterest: true,
                hasGuide: true,
                ticketCostUnit: 0,
                ticketCostCurrency: "CLP",
                ticketPeople: 2,
                ticketCost: 0,
                ticketInstallments: 1,
                ticketCardInterest: false,
                paymentStatus: "pending",
                contact: "Agência Andes Tour (+56 9 8273 1192)",
                notes: "Viagem em direção à fronteira com a Argentina. Parada na famosa estrada dos Caracóis e Laguna del Inca.",
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
                agencyCost: 457.14, // (40000 * 2) / 175 = R$ 457.14
                agencyInstallments: 2,
                agencyCardInterest: true,
                hasGuide: true,
                ticketCostUnit: 0,
                ticketCostCurrency: "CLP",
                ticketPeople: 2,
                ticketCost: 0,
                ticketInstallments: 1,
                ticketCardInterest: false,
                paymentStatus: "pending",
                contact: "Agência Andes Tour (+56 9 8273 1192)",
                notes: "Subida da montanha até o resort Valle Nevado. Roupas de neve completas são obrigatórias.",
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
                agencyCost: 400.00, // (35000 * 2) / 175 = R$ 400.00
                agencyInstallments: 3,
                agencyCardInterest: true,
                hasGuide: false,
                ticketCostUnit: 36000,
                ticketCostCurrency: "CLP",
                ticketPeople: 2,
                ticketCost: 411.43, // (36000 * 2) / 175 = R$ 411.43
                ticketInstallments: 1,
                ticketCardInterest: true,
                paymentStatus: "pending",
                contact: "Agência Andes Tour (+56 9 8273 1192)",
                notes: "Parque de atividades na neve (tubing, tirolesa, teleférico, trenó).",
                link: "https://maps.google.com/?q=Parque+Farellones"
            }
        ]
    },
    {
        id: "day-to-decide",
        dateLabel: "A Decidir",
        activities: [
            {
                id: "act-decide-1",
                title: "Vinícola Undurraga (Opção Alternativa)",
                city: "Talagante / Vale do Maipo",
                address: "Camino a Melipilla 34, Talagante",
                startTime: "10:00",
                endTime: "13:00",
                agencyCostUnit: 25000,
                agencyCostCurrency: "CLP",
                agencyPeople: 2,
                agencyCost: 285.71, // (25000 * 2) / 175 = R$ 285.71
                agencyInstallments: 1,
                agencyCardInterest: false,
                hasGuide: true,
                ticketCostUnit: 0,
                ticketCostCurrency: "CLP",
                ticketPeople: 2,
                ticketCost: 0,
                ticketInstallments: 1,
                ticketCardInterest: false,
                paymentStatus: "pending",
                contact: "Vinícola (+56 2 2372 2900)",
                notes: "Fazer o Tour Sibaris clássico. Caso decidamos não ir ao Valle Nevado ou Farellones em algum dia.",
                link: "https://maps.google.com/?q=Vina+Undurraga"
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
 * Calcula os custos consolidados de uma atividade baseando-se no modelo solicitado
 */
function getActivityFinancials(activity) {
    const cardMultiplier = 1 + (config.cardTax / 100);

    // 1. Custos de Agência
    const agencyCost = Number(activity.agencyCost) || 0;
    const agencyInstallments = Math.max(1, Number(activity.agencyInstallments) || 1);
    
    // Total Agência COM Juros
    const agencyTotalWithInterest = activity.agencyCardInterest ? (agencyCost * cardMultiplier) : agencyCost;
    // Valor Parcela Agência
    const agencyParcelValue = agencyTotalWithInterest / agencyInstallments;

    // 2. Custos de Ingresso
    const ticketCost = Number(activity.ticketCost) || 0;
    const ticketInstallments = Math.max(1, Number(activity.ticketInstallments) || 1);

    // Total Ingresso COM Juros
    const ticketTotalWithInterest = activity.ticketCardInterest ? (ticketCost * cardMultiplier) : ticketCost;
    // Valor Parcela Ingresso
    const ticketParcelValue = ticketTotalWithInterest / ticketInstallments;

    // 3. Totais Acumulados da Atividade em R$
    const totalWithInterest = agencyTotalWithInterest + ticketTotalWithInterest;
    const totalWithoutInterest = agencyCost + ticketCost;

    // Equivalente aproximado em CLP para visualização rápida (baseado na cotação)
    const totalWithInterestClp = totalWithInterest * config.clpRate;

    return {
        agencyCost, // SEM juros
        agencyInstallments,
        agencyTotalWithInterest,
        agencyParcelValue,
        
        ticketCost, // SEM juros
        ticketInstallments,
        ticketTotalWithInterest,
        ticketParcelValue,

        totalWithInterest,
        totalWithoutInterest,
        totalWithInterestClp
    };
}

/**
 * Formatadores de Moeda
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
        // Garante que a aba "A Decidir" exista no array se vier de um backup antigo
        if (!days.some(d => d.id === 'day-to-decide')) {
            days.push({
                id: "day-to-decide",
                dateLabel: "A Decidir",
                activities: []
            });
        }
    } else {
        // Carrega dados padrão
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
 * Atualiza o Resumo Geral no Painel Lateral (excluindo "A Decidir")
 */
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
                // Soma separada para os passeios a decidir
                decideTotalBrl += fin.totalWithInterest;
            } else {
                // Soma do roteiro oficial
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

    document.getElementById('total-general').innerText = formatBRL(grandTotalBrl);
    document.getElementById('total-general-clp').innerText = `${formatCLP(grandTotalClp)} CLP`;
    document.getElementById('total-agency').innerText = formatBRL(totalAgencyBrl);
    document.getElementById('total-tickets').innerText = formatBRL(totalTicketsBrl);
    document.getElementById('total-paid').innerText = formatBRL(totalPaidBrl);
    document.getElementById('total-pending').innerText = formatBRL(totalPendingBrl);
    document.getElementById('total-decide').innerText = formatBRL(decideTotalBrl);

    // Atualiza cotação atual nos inputs
    document.getElementById('rate-input').value = config.clpRate;
    document.getElementById('tax-input').value = config.cardTax;
}

/**
 * Renderiza as abas dos dias, deixando a aba "A Decidir" fixa com estilo especial
 */
function renderDaysTabs() {
    const container = document.getElementById('days-tabs-container');
    container.innerHTML = "";

    // Filtra dias normais e o dia especial "A Decidir"
    const normalDays = days.filter(d => d.id !== 'day-to-decide');
    const decideDay = days.find(d => d.id === 'day-to-decide');

    const renderTab = (day, isSpecial = false) => {
        const actCount = day.activities.length;
        
        const tabEl = document.createElement('div');
        tabEl.className = `day-tab ${day.id === activeDayId ? 'active' : ''} ${isSpecial ? 'decide-tab' : ''}`;
        tabEl.setAttribute('data-id', day.id);
        
        tabEl.innerHTML = `
            <i class="fa-solid ${isSpecial ? 'fa-circle-question' : 'fa-calendar-day'} day-tab-icon"></i>
            <span class="day-tab-label">${day.dateLabel}</span>
            ${actCount > 0 ? `<span class="day-tab-count">${actCount}</span>` : ''}
        `;
        
        tabEl.addEventListener('click', () => {
            activeDayId = day.id;
            saveState();
            renderActiveDay();
            renderDaysTabs();
        });

        container.appendChild(tabEl);
    };

    // 1. Renderiza dias normais
    normalDays.forEach(day => renderTab(day, false));

    // 2. Renderiza aba especial "A Decidir" no final antes de Adicionar Dia
    if (decideDay) {
        renderTab(decideDay, true);
    }

    // 3. Botão Adicionar Dia
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
    
    const activeDayTitle = document.getElementById('active-day-title');
    const activeDaySubtitle = document.getElementById('active-day-subtitle');
    const btnDeleteDay = document.getElementById('btn-delete-day');
    const btnEditDay = document.getElementById('btn-edit-day');

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

    // Controle de botões de exclusão/edição para aba especial "A Decidir"
    const isToDecide = activeDay.id === 'day-to-decide';
    if (isToDecide) {
        btnDeleteDay.style.display = "none";
        btnEditDay.style.display = "none";
        activeDayTitle.innerText = "💡 Passeios a Decidir";
        activeDaySubtitle.innerText = "Ideias de atividades ou opções de backup ainda não confirmadas";
    } else {
        btnDeleteDay.style.display = "inline-flex";
        btnEditDay.style.display = "inline-flex";
        activeDayTitle.innerText = activeDay.dateLabel;
        activeDaySubtitle.innerText = `${activeDay.activities.length} atividade(s) planejada(s)`;
    }

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
        dayTotalBrl += fin.totalWithInterest;
        dayTotalClp += fin.totalWithInterestClp;
        dayAgencyBrl += fin.agencyTotalWithInterest;
        dayTicketBrl += fin.ticketTotalWithInterest;
    });

    document.getElementById('day-total-brl').innerText = formatBRL(dayTotalBrl);
    document.getElementById('day-total-clp').innerText = `${formatCLP(dayTotalClp)} CLP`;
    document.getElementById('day-agency-total').innerText = formatBRL(dayAgencyBrl);
    document.getElementById('day-ticket-total').innerText = formatBRL(dayTicketBrl);

    // Ajusta legenda do subtotal caso seja a aba a decidir
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

        // Criar link do Google Maps para o Endereço se estiver preenchido
        const mapsLinkQuery = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(act.address + ' ' + (act.city || 'Chile'))}`;
        const addressHTML = act.address ? `
            <div class="meta-item address-link" onclick="window.open('${mapsLinkQuery}', '_blank')" title="Buscar endereço no Google Maps">
                <i class="fa-solid fa-map-pin"></i> ${act.address} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.65rem; margin-left: 2px;"></i>
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
                        ${act.link ? `
                            <div class="meta-item address-link" onclick="window.open('${act.link}', '_blank')">
                                <i class="fa-solid fa-link"></i> Link Útil
                            </div>
                        ` : ''}
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

/* --- FORM CALCULATIONS TRIGGER (REAL-TIME PREVIEW) --- */

/**
 * Atualiza os valores calculados de parcelas, juros e totais na interface do formulário
 */
function updateFormCalculations() {
    const clpRate = config.clpRate;
    const cardTax = config.cardTax;
    const cardMultiplier = 1 + (cardTax / 100);

    // 1. Lógica do Custo de Agência
    const agencyCostUnit = parseFloat(document.getElementById('form-agency-cost-unit').value) || 0;
    const agencyCurrency = document.getElementById('form-agency-currency').value;
    const agencyPeople = parseInt(document.getElementById('form-agency-people').value) || 1;
    const agencyCostInput = document.getElementById('form-agency-cost');

    // Se o usuário mexer no conversor unitário, calcula o Valor Agência base
    if (agencyCostUnit > 0) {
        let calculatedBase = agencyCostUnit * agencyPeople;
        if (agencyCurrency === 'CLP') {
            calculatedBase = calculatedBase / clpRate;
        }
        agencyCostInput.value = calculatedBase.toFixed(2);
    }

    const agencyCostBase = parseFloat(agencyCostInput.value) || 0;
    const agencyInstallments = Math.max(1, parseInt(document.getElementById('form-agency-installments').value) || 1);
    const agencyHasInterest = document.getElementById('form-agency-interest').checked;

    const agencyTotalWithInterest = agencyHasInterest ? (agencyCostBase * cardMultiplier) : agencyCostBase;
    const agencyParcelValue = agencyTotalWithInterest / agencyInstallments;

    document.getElementById('form-agency-parcel-val').value = formatBRL(agencyParcelValue);
    document.getElementById('form-agency-total-val').value = formatBRL(agencyTotalWithInterest);

    // 2. Lógica do Custo de Ingresso
    const ticketCostUnit = parseFloat(document.getElementById('form-ticket-cost-unit').value) || 0;
    const ticketCurrency = document.getElementById('form-ticket-currency').value;
    const ticketPeople = parseInt(document.getElementById('form-ticket-people').value) || 1;
    const ticketCostInput = document.getElementById('form-ticket-cost');

    if (ticketCostUnit > 0) {
        let calculatedBase = ticketCostUnit * ticketPeople;
        if (ticketCurrency === 'CLP') {
            calculatedBase = calculatedBase / clpRate;
        }
        ticketCostInput.value = calculatedBase.toFixed(2);
    }

    const ticketCostBase = parseFloat(ticketCostInput.value) || 0;
    const ticketInstallments = Math.max(1, parseInt(document.getElementById('form-ticket-installments').value) || 1);
    const ticketHasInterest = document.getElementById('form-ticket-interest').checked;

    const ticketTotalWithInterest = ticketHasInterest ? (ticketCostBase * cardMultiplier) : ticketCostBase;
    const ticketParcelValue = ticketTotalWithInterest / ticketInstallments;

    document.getElementById('form-ticket-parcel-val').value = formatBRL(ticketParcelValue);
    document.getElementById('form-ticket-total-val').value = formatBRL(ticketTotalWithInterest);

    // 3. Totais do Rodapé do Formulário
    const grandTotalWithInterest = agencyTotalWithInterest + ticketTotalWithInterest;
    const grandTotalWithoutInterest = agencyCostBase + ticketCostBase;

    document.getElementById('form-preview-total-with-interest').innerText = formatBRL(grandTotalWithInterest);
    document.getElementById('form-preview-total-without-interest').innerText = formatBRL(grandTotalWithoutInterest);
}

// Vincula ouvintes em todos os inputs relevantes no formulário de atividade
const formInputs = [
    'form-agency-cost-unit', 'form-agency-currency', 'form-agency-people', 'form-agency-cost',
    'form-agency-installments', 'form-agency-interest',
    'form-ticket-cost-unit', 'form-ticket-currency', 'form-ticket-people', 'form-ticket-cost',
    'form-ticket-installments', 'form-ticket-interest'
];

formInputs.forEach(id => {
    document.getElementById(id).addEventListener('input', updateFormCalculations);
    document.getElementById(id).addEventListener('change', updateFormCalculations);
});

/* --- ACTIVITY FORM ACTIONS --- */

function openAddActivityModal() {
    const activeDay = days.find(d => d.id === activeDayId);
    if (!activeDay) return alert("Por favor, crie um dia de viagem primeiro!");

    document.getElementById('modal-activity-title').innerText = "Adicionar Passeio";
    document.getElementById('form-activity-id').value = "";
    document.getElementById('activity-form').reset();
    
    // Valores padrão
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
    
    // Configura conversor unitário com valores vazios ou base
    document.getElementById('form-agency-cost-unit').value = act.agencyCostUnit || "";
    document.getElementById('form-agency-currency').value = act.agencyCostCurrency || "BRL";
    document.getElementById('form-agency-people').value = act.agencyPeople || 2;

    // Campo oficial e parcelamento
    document.getElementById('form-agency-cost').value = act.agencyCost || 0;
    document.getElementById('form-agency-installments').value = act.agencyInstallments || 1;
    document.getElementById('form-agency-interest').checked = !!act.agencyCardInterest;
    document.getElementById('form-agency-guide').checked = !!act.hasGuide;

    // Configura conversor unitário ingressos com valores vazios ou base
    document.getElementById('form-ticket-cost-unit').value = act.ticketCostUnit || "";
    document.getElementById('form-ticket-currency').value = act.ticketCostCurrency || "BRL";
    document.getElementById('form-ticket-people').value = act.ticketPeople || 2;

    // Campo oficial e parcelamento ingressos
    document.getElementById('form-ticket-cost').value = act.ticketCost || 0;
    document.getElementById('form-ticket-installments').value = act.ticketInstallments || 1;
    document.getElementById('form-ticket-interest').checked = !!act.ticketCardInterest;

    document.getElementById('form-link').value = act.link || "";
    document.getElementById('form-contact').value = act.contact || "";
    document.getElementById('form-payment-status').value = act.paymentStatus || "pending";
    document.getElementById('form-notes').value = act.notes || "";

    updateFormCalculations();
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
        
        // Conversor temporário de referência
        agencyCostUnit: parseFloat(document.getElementById('form-agency-cost-unit').value) || 0,
        agencyCostCurrency: document.getElementById('form-agency-currency').value,
        agencyPeople: parseInt(document.getElementById('form-agency-people').value) || 2,

        // Campos reais salvos em R$
        agencyCost: parseFloat(document.getElementById('form-agency-cost').value) || 0,
        agencyInstallments: parseInt(document.getElementById('form-agency-installments').value) || 1,
        agencyCardInterest: document.getElementById('form-agency-interest').checked,
        hasGuide: document.getElementById('form-agency-guide').checked,

        // Conversor temporário de referência ingressos
        ticketCostUnit: parseFloat(document.getElementById('form-ticket-cost-unit').value) || 0,
        ticketCostCurrency: document.getElementById('form-ticket-currency').value,
        ticketPeople: parseInt(document.getElementById('form-ticket-people').value) || 2,

        // Campos reais salvos em R$ ingressos
        ticketCost: parseFloat(document.getElementById('form-ticket-cost').value) || 0,
        ticketInstallments: parseInt(document.getElementById('form-ticket-installments').value) || 1,
        ticketCardInterest: document.getElementById('form-ticket-interest').checked,

        link: document.getElementById('form-link').value,
        contact: document.getElementById('form-contact').value,
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
    
    // Calcula o próximo dia considerando que a aba "A Decidir" especial não conta
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
        // Insere o novo dia antes do dia especial "A Decidir" para manter a aba a decidir sempre por último
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
    }

    saveState();
    closeDynamicModal(dayModal);
    renderDaysTabs();
    renderActiveDay();
});

// Excluir dia
document.getElementById('btn-delete-day').addEventListener('click', () => {
    if (!activeDayId || activeDayId === 'day-to-decide') return;

    if (confirm("ATENÇÃO: Isso excluirá permanentemente este dia de viagem e TODOS os passeios cadastrados nele. Deseja prosseguir?")) {
        days = days.filter(d => d.id !== activeDayId);
        // Seleciona o primeiro dia disponível, que pode ser o "A Decidir" se todos os outros forem apagados
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
                
                // Valida aba a decidir
                if (!days.some(d => d.id === 'day-to-decide')) {
                    days.push({
                        id: "day-to-decide",
                        dateLabel: "A Decidir",
                        activities: []
                    });
                }

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

    // Vincula botões principais do header da página
    document.getElementById('btn-add-activity').addEventListener('click', openAddActivityModal);
    document.getElementById('btn-add-day').addEventListener('click', openAddDayModal);
    document.getElementById('btn-edit-day').addEventListener('click', openEditDayModal);
});
