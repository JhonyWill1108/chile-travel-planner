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
    { id: "day-to-decide", dateLabel: "A Decidir", activities: [] }
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
    const cardMultiplier = 1 + (config.cardTax / 100);

    // 1. Custos de Agência
    const agencyCost = Number(activity.agencyCost) || 0;
    const agencyInstallments = Math.max(1, Number(activity.agencyInstallments) || 1);
    const agencyTotalWithInterest = activity.agencyCardInterest ? (agencyCost * cardMultiplier) : agencyCost;
    const agencyParcelValue = agencyTotalWithInterest / agencyInstallments;

    // 2. Custos de Ingresso
    const ticketCost = Number(activity.ticketCost) || 0;
    const ticketInstallments = Math.max(1, Number(activity.ticketInstallments) || 1);
    const ticketTotalWithInterest = activity.ticketCardInterest ? (ticketCost * cardMultiplier) : ticketCost;
    const ticketParcelValue = ticketTotalWithInterest / ticketInstallments;

    // 3. Totais Acumulados da Atividade em R$
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
    localStorage.setItem('chile_planner_active_day_id', activeDayId);
}

function loadState() {
    // Força atualização da base de dados para o novo template limpo de 7 dias
    const DB_VERSION_KEY = 'chile_planner_db_version';
    const CURRENT_VERSION = 'v5_clean'; // Incrementado para forçar migração imediata

    if (localStorage.getItem(DB_VERSION_KEY) !== CURRENT_VERSION) {
        localStorage.clear();
        localStorage.setItem(DB_VERSION_KEY, CURRENT_VERSION);
        days = JSON.parse(JSON.stringify(defaultDays));
        config = { clpRate: 175, cardTax: 6.38 };
        activeDayId = "day-1";
        saveState();
        return;
    }

    const storedConfig = localStorage.getItem('chile_planner_config');
    const storedDays = localStorage.getItem('chile_planner_days');
    const storedActiveDay = localStorage.getItem('chile_planner_active_day_id');

    if (storedConfig) {
        config = JSON.parse(storedConfig);
    }
    
    if (storedDays) {
        days = JSON.parse(storedDays);
        if (!days.some(d => d.id === 'day-to-decide')) {
            days.push({
                id: "day-to-decide",
                dateLabel: "A Decidir",
                activities: []
            });
        }
    } else {
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

    document.getElementById('total-general').innerText = formatBRL(grandTotalBrl);
    document.getElementById('total-general-clp').innerText = `${formatCLP(grandTotalClp)} CLP`;
    document.getElementById('total-agency').innerText = formatBRL(totalAgencyBrl);
    document.getElementById('total-tickets').innerText = formatBRL(totalTicketsBrl);
    document.getElementById('total-paid').innerText = formatBRL(totalPaidBrl);
    document.getElementById('total-pending').innerText = formatBRL(totalPendingBrl);
    document.getElementById('total-decide').innerText = formatBRL(decideTotalBrl);

    document.getElementById('rate-input').value = config.clpRate;
    document.getElementById('tax-input').value = config.cardTax;
}

function renderDaysTabs() {
    const container = document.getElementById('days-tabs-container');
    container.innerHTML = "";

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

    normalDays.forEach(day => renderTab(day, false));

    if (decideDay) {
        renderTab(decideDay, true);
    }

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

    document.getElementById('day-total-brl').innerText = formatBRL(dayTotalBrl);
    document.getElementById('day-total-clp').innerText = `${formatCLP(dayTotalClp)} CLP`;
    document.getElementById('day-agency-total').innerText = formatBRL(dayAgencyBrl);
    document.getElementById('day-ticket-total').innerText = formatBRL(dayTicketBrl);

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

        // --- LINKS DE ATALHOS RÁPIDOS NO HEADER DO CARD ---
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
   MODAL INTERACTIVE CONTROLS
   ========================================================================== */

const activityModal = document.getElementById('activity-modal');
const dayModal = document.getElementById('day-modal');

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

function updateFormCalculations() {
    const clpRate = config.clpRate;
    const cardTax = config.cardTax;
    const cardMultiplier = 1 + (cardTax / 100);

    // 1. Agência
    const agencyCostUnit = parseFloat(document.getElementById('form-agency-cost-unit').value) || 0;
    const agencyCurrency = document.getElementById('form-agency-currency').value;
    const agencyPeople = parseInt(document.getElementById('form-agency-people').value) || 1;
    const agencyCostInput = document.getElementById('form-agency-cost');

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

    // 2. Ingresso
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

    // 3. Totais do Rodapé
    const grandTotalWithInterest = agencyTotalWithInterest + ticketTotalWithInterest;
    const grandTotalWithoutInterest = agencyCostBase + ticketCostBase;

    document.getElementById('form-preview-total-with-interest').innerText = formatBRL(grandTotalWithInterest);
    document.getElementById('form-preview-total-without-interest').innerText = formatBRL(grandTotalWithoutInterest);
}

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

document.getElementById('day-form').addEventListener('submit', (e) => {
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
    }

    saveState();
    closeDynamicModal(dayModal);
    renderDaysTabs();
    renderActiveDay();
});

document.getElementById('btn-delete-day').addEventListener('click', () => {
    if (!activeDayId || activeDayId === 'day-to-decide') return;

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

document.getElementById('btn-export-backup').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ config, days }));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `chile_itinerary_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
});

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

document.getElementById('btn-print').addEventListener('click', () => {
    window.print();
});

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

    document.getElementById('btn-add-activity').addEventListener('click', openAddActivityModal);
    document.getElementById('btn-add-day').addEventListener('click', openAddDayModal);
    document.getElementById('btn-edit-day').addEventListener('click', openEditDayModal);
});
