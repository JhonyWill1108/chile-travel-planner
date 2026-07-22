/* ==========================================================================
   STATE & PRE-POPULATED DATA (CHILE 2026 - CLEAN 7 DAYS TEMPLATE)
   ========================================================================== */

// Configuração padrão
let config = {
    clpRate: 175, // 1 BRL = 175 CLP
    cardTax: 6.38, // IOF + Taxas operacionais
    autoUpdateRate: true, // Atualizar cotação ao iniciar o app
    supabaseUrl: "https://wyabiudjqocwwcgrtsex.supabase.co", // URL do projeto Supabase
    supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5YWJpdWRqcW9jd3djZ3J0c2V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5NjA5NjUsImV4cCI6MjA3MjUzNjk2NX0.m1xc9qrArNyFIgRHEevuF1VU6kyuHTVogjDq3E4K26A", // Public anon key do Supabase
    supabaseTripId: "chile-viagem-2026" // ID único da viagem para sincronizar
};

// Roteiro padrão limpo com exatamente os 7 dias solicitados
const defaultDays = [
    { 
        id: "day-1", 
        dateLabel: "DIA 1 — 16/08/2026 (Domingo)", 
        activities: [
            {
                id: "act-flight-departure",
                title: "Embarque avião",
                city: "São Paulo",
                address: "Aeroporto de Guarulhos",
                startTime: "03:25",
                endTime: "06:55",
                agencyCost: 0, agencyInstallments: 1, agencyCardInterest: false, hasGuide: false,
                ticketCost: 0, ticketInstallments: 1, ticketCardInterest: false,
                linkMaps: "", linkInstagram: "", link: "", contact: "", paymentStatus: "pending",
                notes: "Voo de ida rumo a Santiago, Chile."
            },
            {
                id: "act-hotel-checkin",
                title: "Check-in Hotel",
                city: "Santiago",
                address: "Santiago, Chile",
                startTime: "15:00",
                endTime: "",
                agencyCost: 0, agencyInstallments: 1, agencyCardInterest: false, hasGuide: false,
                ticketCost: 0, ticketInstallments: 1, ticketCardInterest: false,
                linkMaps: "https://maps.app.goo.gl/pf9QeSmvkZavWqNr7", linkInstagram: "", link: "", contact: "", paymentStatus: "pending",
                notes: "Entrada liberada no hotel."
            }
        ] 
    },
    { id: "day-2", dateLabel: "DIA 2 — 17/08/2026 (Segunda-feira)", activities: [] },
    { id: "day-3", dateLabel: "DIA 3 — 18/08/2026 (Terça-feira)", activities: [] },
    { id: "day-4", dateLabel: "DIA 4 — 19/08/2026 (Quarta-feira)", activities: [] },
    { id: "day-5", dateLabel: "DIA 5 — 20/08/2026 (Quinta-feira)", activities: [] },
    { id: "day-6", dateLabel: "DIA 6 — 21/08/2026 (Sexta-feira)", activities: [] },
    { 
        id: "day-7", 
        dateLabel: "DIA 7 — 22/08/2026 (Sábado)", 
        activities: [
            {
                id: "act-hotel-checkout",
                title: "Check-out Hotel",
                city: "Santiago",
                address: "Santiago, Chile",
                startTime: "12:00",
                endTime: "",
                agencyCost: 0, agencyInstallments: 1, agencyCardInterest: false, hasGuide: false,
                ticketCost: 0, ticketInstallments: 1, ticketCardInterest: false,
                linkMaps: "https://maps.app.goo.gl/pf9QeSmvkZavWqNr7", linkInstagram: "", link: "", contact: "", paymentStatus: "pending",
                notes: "Saída do hotel e deslocamento para o aeroporto."
            },
            {
                id: "act-flight-return",
                title: "Embarque Chile",
                city: "Santiago",
                address: "Aeroporto de Santiago",
                startTime: "13:21",
                endTime: "18:20",
                agencyCost: 0, agencyInstallments: 1, agencyCardInterest: false, hasGuide: false,
                ticketCost: 0, ticketInstallments: 1, ticketCardInterest: false,
                linkMaps: "", linkInstagram: "", link: "", contact: "", paymentStatus: "pending",
                notes: "Voo de retorno para o Brasil."
            }
        ] 
    },
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
        address: "José Victorino Lastarria 160, 8320156 Santiago, Región Metropolitana, Chile",
        linkMaps: "https://maps.app.goo.gl/2qmEKjrQd2SuqtH58",
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
        address: "Av. Andrés Bello 2425, Mall Costanera Center, 750000 Providencia, Región Metropolitana, Chile",
        linkMaps: "https://maps.app.goo.gl/CCgZTsytvjJ2wsD69",
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
        address: "Isidora Goyenechea 3275, 7550129 Las Condes, Región Metropolitana, Chile",
        linkMaps: "https://maps.app.goo.gl/qta9wdKqhKixuD9u5",
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
        address: "José Victorino Lastarria 71, 8320165 Santiago, Región Metropolitana, Chile",
        linkMaps: "https://maps.app.goo.gl/PF6HZMoZ5eog4SNp6",
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
        address: "Av. Apoquindo 2730, 7550179 Santiago, Las Condes, Región Metropolitana, Chile",
        linkMaps: "https://maps.app.goo.gl/jXgMhd8JkF1twCNh6",
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
        address: "Holanda 067, Providencia, Región Metropolitana, Chile",
        linkMaps: "https://maps.app.goo.gl/R8LwgJ61RysfNcW8",
        linkInstagram: "",
        openTime: "",
        closeTime: "",
        photo: "",
        cuisine: "Almoço completo",
        notes: "Ponto de referência: Ao lado do Costanera - Santiago."
    }
];

const defaultPackingItems = [
    { id: "pack-1", name: "Passaporte ou RG", description: "Verifique se a data de emissão tem menos de 10 anos", category: "Documentos", packedBy: [], assignedTo: ["t-1", "t-2"] },
    { id: "pack-2", name: "Seguro Viagem", description: "Impresso ou em PDF no celular para emergências", category: "Documentos", packedBy: [], assignedTo: ["t-1", "t-2"] },
    { id: "pack-3", name: "Cartão de Débito Internacional", description: "Nomad, Wise ou similar com saldo carregado", category: "Documentos", packedBy: [], assignedTo: ["t-1", "t-2"] },
    { id: "pack-4", name: "Dinheiro em Espécie", description: "Pesos chilenos ou Reais para táxi e emergências rápidas", category: "Documentos", packedBy: [], assignedTo: ["t-1", "t-2"] },
    
    { id: "pack-5", name: "Casaco Corta-vento (Windbreaker)", description: "Essencial para passeios na Cordilheira devido ao vento forte", category: "Vestuário", packedBy: [], assignedTo: ["t-1", "t-2"] },
    { id: "pack-6", name: "Segunda pele térmica", description: "Blusa e calça térmicas para usar por baixo da roupa de frio", category: "Vestuário", packedBy: [], assignedTo: ["t-1", "t-2"] },
    { id: "pack-7", name: "Casaco pesado de frio", description: "Casaco grosso de plumas ou apropriado para neve na Cordilheira", category: "Vestuário", packedBy: [], assignedTo: ["t-1", "t-2"] },
    { id: "pack-8", name: "Óculos de sol", description: "Com proteção UV, o reflexo do sol na neve é muito forte", category: "Vestuário", packedBy: [], assignedTo: ["t-1", "t-2"] },
    { id: "pack-9", name: "Luvas, cachecol e touca", description: "Itens básicos para os passeios de altitude", category: "Vestuário", packedBy: [], assignedTo: ["t-1", "t-2"] },
    { id: "pack-10", name: "Tênis confortável", description: "Ideal para longas caminhadas nos parques e mirantes", category: "Vestuário", packedBy: [], assignedTo: ["t-1", "t-2"] },

    { id: "pack-11", name: "Protetor Labial", description: "O clima no Chile é extremamente seco, os lábios racham rápido", category: "Higiene / Saúde", packedBy: [], assignedTo: ["t-1", "t-2"] },
    { id: "pack-12", name: "Protetor Solar", description: "Filtro solar de rosto e corpo para os passeios de dia", category: "Higiene / Saúde", packedBy: [], assignedTo: ["t-1", "t-2"] },
    { id: "pack-13", name: "Sorine / Hidratante nasal", description: "Ajuda a respirar melhor devido ao ar seco de Santiago e montanha", category: "Higiene / Saúde", packedBy: [], assignedTo: ["t-1", "t-2"] },
    { id: "pack-14", name: "Medicamentos pessoais", description: "Remédios de uso contínuo, dor de cabeça, enjoo ou estômago", category: "Higiene / Saúde", packedBy: [], assignedTo: ["t-1", "t-2"] },
    
    { id: "pack-15", name: "Adaptador de tomada chileno", description: "Padrão de 3 pinos redondos em linha reta (padrão L chileno)", category: "Eletrônicos", packedBy: [], assignedTo: ["t-1", "t-2"] },
    { id: "pack-16", name: "Carregador Portátil (Powerbank)", description: "Garante bateria extra durante os passeios de dia inteiro", category: "Eletrônicos", packedBy: [], assignedTo: ["t-1", "t-2"] }
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

async function fetchExchangeRate(showFeedback = false) {
    const btnApi = document.getElementById('btn-fetch-rate-api');
    let originalHTML = "";
    if (btnApi) {
        originalHTML = btnApi.innerHTML;
        btnApi.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Buscando...';
        btnApi.disabled = true;
    }

    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/BRL-CLP');
        if (!response.ok) throw new Error('Erro na resposta do servidor');
        const data = await response.json();
        
        if (data && data.BRLCLP && data.BRLCLP.bid) {
            const rate = parseFloat(parseFloat(data.BRLCLP.bid).toFixed(2));
            if (!isNaN(rate) && rate > 0) {
                config.clpRate = rate;
                
                const rateInput = document.getElementById('rate-input');
                if (rateInput) rateInput.value = rate;

                saveState();
                updateSidebarSummary();
                renderActiveDay();
                
                if (showFeedback) {
                    alert(`Cotação comercial atualizada com sucesso: 1 BRL = ${rate} CLP!`);
                }
            }
        }
    } catch (error) {
        console.error("Erro ao obter cotação da API:", error);
        if (showFeedback) {
            alert("Não foi possível conectar à API de Câmbio. Verifique sua conexão de internet.");
        }
    } finally {
        if (btnApi) {
            btnApi.innerHTML = originalHTML;
            btnApi.disabled = false;
        }
    }
}

/* ==========================================================================
   SUPABASE CLOUD SYNC FUNCTIONS
   ========================================================================== */

function updateSyncIndicator(status, message) {
    const indicator = document.getElementById('cloud-sync-header-indicator');
    const dbStatusEl = document.getElementById('db-sync-status');
    
    if (indicator) {
        if (status === 'saving') {
            indicator.style.background = 'rgba(249, 115, 22, 0.12)';
            indicator.style.color = '#f97316';
            indicator.style.borderColor = 'rgba(249, 115, 22, 0.25)';
            indicator.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${message}`;
        } else if (status === 'success') {
            indicator.style.background = 'rgba(34, 197, 94, 0.12)';
            indicator.style.color = '#4ade80';
            indicator.style.borderColor = 'rgba(34, 197, 94, 0.25)';
            indicator.innerHTML = `<i class="fa-solid fa-cloud"></i> ${message}`;
        } else if (status === 'error') {
            indicator.style.background = 'rgba(239, 68, 68, 0.12)';
            indicator.style.color = '#f87171';
            indicator.style.borderColor = 'rgba(239, 68, 68, 0.25)';
            indicator.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i> ${message}`;
        }
    }
    
    if (dbStatusEl) {
        if (status === 'saving') {
            dbStatusEl.innerHTML = `<i class="fa-solid fa-arrows-rotate fa-spin" style="color: var(--warning);"></i> <span>${message}...</span>`;
        } else if (status === 'success') {
            dbStatusEl.innerHTML = `<i class="fa-solid fa-cloud" style="color: var(--success);"></i> <span>${message}</span>`;
        } else if (status === 'error') {
            dbStatusEl.innerHTML = `<i class="fa-solid fa-cloud-bolt" style="color: var(--danger);"></i> <span>${message}</span>`;
        }
    }
}

async function pushStateToSupabase() {
    if (!config.supabaseUrl || !config.supabaseKey || !config.supabaseTripId) return;
    if (!window.supabase) {
        console.warn("Supabase SDK não está carregado.");
        return;
    }
    
    try {
        const { createClient } = window.supabase;
        const supabase = createClient(config.supabaseUrl, config.supabaseKey);
        
        updateSyncIndicator('saving', 'Salvando');

        const payload = {
            config,
            days,
            restaurants
        };

        const { error } = await supabase
            .from('trip_planners')
            .upsert({ 
                id: config.supabaseTripId, 
                state: payload,
                updated_at: new Date().toISOString()
            });

        if (error) throw error;

        updateSyncIndicator('success', 'Sincronizado');
    } catch (err) {
        console.error("Erro ao sincronizar com Supabase:", err);
        updateSyncIndicator('error', 'Erro de Conexão');
    }
}

async function fetchStateFromSupabase(autoLoad = false) {
    if (!config.supabaseUrl || !config.supabaseKey || !config.supabaseTripId) return;
    if (!window.supabase) {
        console.warn("Supabase SDK não está carregado.");
        return;
    }

    try {
        const { createClient } = window.supabase;
        const supabase = createClient(config.supabaseUrl, config.supabaseKey);

        updateSyncIndicator('saving', 'Buscando');

        const { data, error } = await supabase
            .from('trip_planners')
            .select('state')
            .eq('id', config.supabaseTripId)
            .maybeSingle();

        if (error) throw error;

        if (data && data.state) {
            if (autoLoad) {
                const cloud = data.state;
                if (cloud.days && cloud.restaurants) {
                    days = cloud.days;
                    restaurants = cloud.restaurants;
                    if (cloud.config) {
                        config = {
                            ...config,
                            ...cloud.config,
                            supabaseUrl: config.supabaseUrl,
                            supabaseKey: config.supabaseKey,
                            supabaseTripId: config.supabaseTripId
                        };
                    }
                    
                    renderDaysTabs();
                    renderActiveDay();
                    updateSidebarSummary();
                }
            }
        } else {
            // Se a nuvem estiver vazia, inicializa ela com os dados locais atuais automaticamente
            await pushStateToSupabase();
        }

        updateSyncIndicator('success', 'Sincronizado');
    } catch (err) {
        console.error("Erro ao carregar dados do Supabase:", err);
        updateSyncIndicator('error', 'Erro de Conexão');
        throw err; // Propaga o erro para o inicializador
    }
}

/* ==========================================================================
   STORAGE & MIGRATION FUNCTIONS
   ========================================================================== */

function saveState() {
    // Sincronização exclusiva na nuvem (Supabase)
    pushStateToSupabase();
}

function loadState() {
    // Inicialização padrão em memória (será substituída pelos dados carregados do Supabase)
    days = JSON.parse(JSON.stringify(defaultDays));
    restaurants = JSON.parse(JSON.stringify(defaultRestaurants));
    config = { 
        clpRate: 175, 
        cardTax: 6.38, 
        autoUpdateRate: true, 
        supabaseUrl: "https://wyabiudjqocwwcgrtsex.supabase.co", 
        supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5YWJpdWRqcW9jd3djZ3J0c2V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5NjA5NjUsImV4cCI6MjA3MjUzNjk2NX0.m1xc9qrArNyFIgRHEevuF1VU6kyuHTVogjDq3E4K26A", 
        supabaseTripId: "chile-viagem-2026",
        travelers: [
            { id: "t-1", name: "Jhony" },
            { id: "t-2", name: "Larissa" }
        ],
        packingCategories: [
            "Documentos",
            "Vestuário",
            "Higiene / Saúde",
            "Eletrônicos",
            "Outros"
        ],
        packingItems: JSON.parse(JSON.stringify(defaultPackingItems))
    };
    activeDayId = "day-1";
    lastActiveNormalDayId = "day-1";
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
        
        const compactLabel = day.dateLabel.replace(/^DIA \d+ — /, '').replace(/\/2026/, '');
        
        tabEl.innerHTML = `
            <i class="fa-solid fa-calendar-day day-tab-icon"></i>
            <span class="day-tab-label">${compactLabel}</span>
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
    const btnPack = document.getElementById('btn-view-packing');

    if (btnDecide) {
        if (activeDayId === 'day-to-decide') {
            btnDecide.classList.add('btn-primary');
            btnDecide.classList.remove('btn-secondary');
        } else {
            btnDecide.classList.remove('btn-primary');
            btnDecide.classList.add('btn-secondary');
        }
    }

    if (btnRest) {
        if (activeDayId === 'restaurants') {
            btnRest.classList.add('btn-primary');
            btnRest.classList.remove('btn-secondary');
        } else {
            btnRest.classList.remove('btn-primary');
            btnRest.classList.add('btn-secondary');
        }
    }

    if (btnPack) {
        if (activeDayId === 'packing') {
            btnPack.classList.add('btn-primary');
            btnPack.classList.remove('btn-secondary');
        } else {
            btnPack.classList.remove('btn-primary');
            btnPack.classList.add('btn-secondary');
        }
    }
}

function renderActiveDay() {
    const daySection = document.querySelector('.day-details-section:not(#restaurants-section):not(#packing-section)');
    const restSection = document.getElementById('restaurants-section');
    const packingSection = document.getElementById('packing-section');

    if (!daySection || !restSection || !packingSection) return;

    if (activeDayId === 'restaurants') {
        daySection.style.display = "none";
        restSection.style.display = "flex";
        packingSection.style.display = "none";
        renderRestaurants();
        updateTopNavigationButtonsState();
        return;
    }

    if (activeDayId === 'packing') {
        daySection.style.display = "none";
        restSection.style.display = "none";
        packingSection.style.display = "flex";
        renderPackingList();
        updateTopNavigationButtonsState();
        return;
    }

    daySection.style.display = "flex";
    restSection.style.display = "none";
    packingSection.style.display = "none";
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

function populateFormActivityDaySelector(selectedDayId) {
    const select = document.getElementById('form-activity-day');
    if (!select) return;
    
    let options = "";
    days.forEach(day => {
        const isToDecide = day.id === 'day-to-decide';
        const displayLabel = isToDecide 
            ? "A Decidir (Passeio Pendente)" 
            : day.dateLabel.replace(/^DIA \d+ — /, '').replace(/\/2026/, '');
        options += `<option value="${day.id}" ${day.id === selectedDayId ? 'selected' : ''}>${displayLabel}</option>`;
    });
    
    select.innerHTML = options;
}

function openAddActivityModal() {
    const activeDay = days.find(d => d.id === activeDayId);
    if (!activeDay) return alert("Por favor, crie um dia de viagem primeiro!");

    document.getElementById('modal-activity-title').innerText = "Adicionar Passeio";
    document.getElementById('form-activity-id').value = "";
    
    const form = document.getElementById('activity-form');
    if (form) form.reset();
    
    populateFormActivityDaySelector(activeDayId);

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
    // Procura o passeio em todos os dias, pois a pessoa pode estar reallocando
    let activeDay = null;
    let act = null;
    for (const d of days) {
        act = d.activities.find(a => a.id === activityId);
        if (act) {
            activeDay = d;
            break;
        }
    }
    if (!activeDay || !act) return;

    document.getElementById('modal-activity-title').innerText = "Editar Passeio";
    document.getElementById('form-activity-id').value = act.id;
    populateFormActivityDaySelector(activeDay.id);
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

    // Set auto checkbox check status
    const autoCheckbox = document.getElementById('auto-rate-checkbox');
    if (autoCheckbox) {
        autoCheckbox.checked = !!config.autoUpdateRate;
        autoCheckbox.addEventListener('change', (e) => {
            config.autoUpdateRate = e.target.checked;
            saveState();
        });
    }

    // 3. Busca Dados da Nuvem antes de carregar o app (Supabase Online-First)
    if (config.supabaseUrl && config.supabaseKey && config.supabaseTripId) {
        showLoadingOverlay("Carregando roteiro da nuvem...");
        fetchStateFromSupabase(true).then(() => {
            hideLoadingOverlay();
            renderDaysTabs();
            renderActiveDay();
            updateSidebarSummary();
            updateTopNavigationButtonsState();

            // Atualiza taxa de câmbio após carregar config da nuvem
            if (config.autoUpdateRate) {
                fetchExchangeRate(false);
            }
        }).catch(err => {
            hideLoadingOverlay();
            console.error("Erro na carga inicial do Supabase:", err);
            renderDaysTabs();
            renderActiveDay();
            updateSidebarSummary();
            updateTopNavigationButtonsState();
        });
    } else {
        renderDaysTabs();
        renderActiveDay();
        updateSidebarSummary();
        updateTopNavigationButtonsState();
        if (config.autoUpdateRate) {
            fetchExchangeRate(false);
        }
    }

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
        
        const targetDayId = document.getElementById('form-activity-day').value;
        const targetDay = days.find(d => d.id === targetDayId);
        if (!targetDay) return;

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
            // Encontra e remove de qualquer dia antigo
            days.forEach(d => {
                d.activities = d.activities.filter(a => a.id !== activityId);
            });
            targetDay.activities.push(activityData);
        } else {
            targetDay.activities.push(activityData);
        }

        activeDayId = targetDayId; // Redireciona o usuário para o dia onde o passeio foi alocado
        if (activeDayId !== "day-to-decide") {
            lastActiveNormalDayId = activeDayId;
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
    document.getElementById('btn-fetch-rate-api')?.addEventListener('click', () => {
        fetchExchangeRate(true);
    });

    document.getElementById('save-config-btn')?.addEventListener('click', () => {
        const rate = parseFloat(document.getElementById('rate-input').value);
        const tax = parseFloat(document.getElementById('tax-input').value);
        const autoUpdate = document.getElementById('auto-rate-checkbox')?.checked;

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
        config.autoUpdateRate = !!autoUpdate;

        saveState();
        updateSidebarSummary();
        renderActiveDay();
        alert("Configurações de Câmbio salvas com sucesso!");
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
        if (confirm("ATENÇÃO: Esta ação apagará TODOS os dados cadastrados e redefinirá o roteiro online para o exemplo inicial. Tem certeza?")) {
            showLoadingOverlay("Limpando e redefinindo roteiro...");
            loadState();
            saveState();
            setTimeout(() => {
                hideLoadingOverlay();
                renderDaysTabs();
                renderActiveDay();
                updateSidebarSummary();
                updateTopNavigationButtonsState();
                alert("Dados limpos e redefinidos com sucesso!");
            }, 800);
        }
    });

    document.getElementById('btn-print')?.addEventListener('click', () => {
        let printContainer = document.getElementById('print-all-itinerary-container');
        if (!printContainer) {
            printContainer = document.createElement('div');
            printContainer.id = 'print-all-itinerary-container';
            document.body.appendChild(printContainer);
        }
        
        let html = `
            <div class="print-header">
                <h1>Chile Travel Planner</h1>
                <p class="print-subtitle">Roteiro Completo de Viagem (16 a 22 de Agosto de 2026)</p>
            </div>
        `;
        
        days.forEach(day => {
            if (day.id === 'day-to-decide') return;
            
            html += `
                <div class="print-day-block">
                    <div class="print-day-header">${day.dateLabel}</div>
            `;
            
            if (day.activities.length === 0) {
                html += `<p class="print-no-activities">Nenhuma atividade cadastrada para este dia.</p>`;
            } else {
                day.activities.forEach(act => {
                    const fin = getActivityFinancials(act);
                    let timeStr = act.startTime || "--:--";
                    if (act.endTime) timeStr += ` - ${act.endTime}`;
                    
                    let details = [];
                    if (act.address) details.push(`<strong>Endereço:</strong> ${act.address}`);
                    if (act.contact) details.push(`<strong>Contato:</strong> ${act.contact}`);
                    
                    let financeStr = "";
                    if (fin.totalWithoutInterest > 0) {
                        financeStr = `
                            <div class="print-act-fin">
                                <span>Total Agência: ${formatBRL(fin.agencyTotalWithInterest)} | </span>
                                <span>Total Ingresso: ${formatBRL(fin.ticketTotalWithInterest)} | </span>
                                <span>Total Geral: ${formatBRL(fin.totalWithInterest)}</span>
                            </div>
                        `;
                    }

                    html += `
                        <div class="print-activity-card">
                            <div class="print-act-time">${timeStr}</div>
                            <div class="print-act-main">
                                <div class="print-act-title">${act.title}</div>
                                ${details.length > 0 ? `<p class="print-act-meta">${details.join(' | ')}</p>` : ''}
                                ${act.notes ? `<p class="print-act-notes">${act.notes}</p>` : ''}
                                ${financeStr}
                            </div>
                        </div>
                    `;
                });
            }
            
            html += `</div>`;
        });
        
        if (restaurants.length > 0) {
            html += `
                <div class="print-day-block">
                    <div class="print-day-header">Guia de Restaurantes</div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 10px;">
            `;
            restaurants.forEach(rest => {
                html += `
                    <div class="print-rest-card" style="border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px; page-break-inside: avoid; background: #fff;">
                        <strong style="font-size: 1rem; color: #0f172a; display: block; margin-bottom: 2px;">${rest.name}</strong>
                        ${rest.cuisine ? `<div style="font-size: 0.8rem; color: #475569; margin-bottom: 4px;"><strong>Tipo:</strong> ${rest.cuisine}</div>` : ''}
                        ${rest.address ? `<div style="font-size: 0.8rem; color: #334155; margin-bottom: 4px;"><strong>Endereço:</strong> ${rest.address}</div>` : ''}
                        ${rest.notes ? `<div style="font-size: 0.78rem; color: #64748b; font-style: italic;"><strong>Obs:</strong> ${rest.notes}</div>` : ''}
                    </div>
                `;
            });
            html += `
                    </div>
                </div>
            `;
        }
        
        printContainer.innerHTML = html;
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

    document.getElementById('btn-view-packing')?.addEventListener('click', () => {
        activeDayId = "packing";
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

    document.getElementById('btn-back-from-packing')?.addEventListener('click', () => {
        activeDayId = lastActiveNormalDayId;
        saveState();
        renderActiveDay();
        renderDaysTabs();
    });

    // 8.1 Mala de Viagem Sub-abas de Navegação
    let activePackingTab = "general";

    const switchPackingTab = (tabName) => {
        activePackingTab = tabName;
        const btnGen = document.getElementById('btn-packing-tab-general');
        const btnInd = document.getElementById('btn-packing-tab-individual');
        const btnSet = document.getElementById('btn-packing-tab-settings');

        const panGen = document.getElementById('panel-packing-general');
        const panInd = document.getElementById('panel-packing-individual');
        const panSet = document.getElementById('panel-packing-settings');

        if (btnGen) btnGen.className = `btn btn-sm ${tabName === 'general' ? 'btn-primary' : 'btn-secondary'}`;
        if (btnInd) btnInd.className = `btn btn-sm ${tabName === 'individual' ? 'btn-primary' : 'btn-secondary'}`;
        if (btnSet) btnSet.className = `btn btn-sm ${tabName === 'settings' ? 'btn-primary' : 'btn-secondary'}`;

        if (panGen) panGen.style.display = tabName === 'general' ? 'flex' : 'none';
        if (panInd) panInd.style.display = tabName === 'individual' ? 'flex' : 'none';
        if (panSet) panSet.style.display = tabName === 'settings' ? 'grid' : 'none';

        renderPackingList();
    };

    document.getElementById('btn-packing-tab-general')?.addEventListener('click', () => switchPackingTab('general'));
    document.getElementById('btn-packing-tab-individual')?.addEventListener('click', () => switchPackingTab('individual'));
    document.getElementById('btn-packing-tab-settings')?.addEventListener('click', () => switchPackingTab('settings'));

    document.getElementById('packing-individual-user-select')?.addEventListener('change', () => {
        renderPackingList();
    });

    document.getElementById('btn-submit-new-pack-item')?.addEventListener('click', () => {
        const nameInput = document.getElementById('new-pack-item-name');
        const catSelect = document.getElementById('new-pack-item-category');
        const descInput = document.getElementById('new-pack-item-description');
        if (!nameInput || !catSelect || !descInput) return;

        const name = nameInput.value.trim();
        const category = catSelect.value;
        const description = descInput.value.trim();

        if (!name) {
            alert("Por favor, informe o nome do item!");
            return;
        }

        const assignedTo = [];
        document.querySelectorAll('.new-item-assign-cb').forEach(cb => {
            if (cb.checked) {
                assignedTo.push(cb.value);
            }
        });

        if (!config.packingItems) config.packingItems = [];

        config.packingItems.push({
            id: `pack-${Date.now()}`,
            name,
            description,
            category,
            packedBy: [],
            assignedTo: assignedTo.length > 0 ? assignedTo : config.travelers.map(t => t.id)
        });

        saveState();
        nameInput.value = "";
        descInput.value = "";
        renderPackingList();
    });

    document.getElementById('btn-add-traveler')?.addEventListener('click', () => {
        const nameInput = document.getElementById('new-traveler-name');
        if (!nameInput) return;

        const name = nameInput.value.trim();
        if (!name) return alert("Por favor, digite o nome do viajante!");

        if (!config.travelers) config.travelers = [];
        const newId = `t-${Date.now()}`;
        config.travelers.push({
            id: newId,
            name
        });

        if (config.packingItems) {
            config.packingItems.forEach(item => {
                if (item.assignedTo && !item.assignedTo.includes(newId)) {
                    item.assignedTo.push(newId);
                }
            });
        }

        saveState();
        nameInput.value = "";
        renderPackingList();
    });

    document.getElementById('btn-add-category')?.addEventListener('click', () => {
        const nameInput = document.getElementById('new-category-name');
        if (!nameInput) return;

        const name = nameInput.value.trim();
        if (!name) return alert("Por favor, digite o nome da categoria!");

        if (!config.packingCategories) config.packingCategories = [];
        if (config.packingCategories.includes(name)) return alert("Esta categoria já existe!");

        config.packingCategories.push(name);
        saveState();
        nameInput.value = "";
        renderPackingList();
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

    // 10. Sincronização Supabase
    // O painel está oculto por segurança para evitar modificações, mas a sincronização em segundo plano continua funcionando ativamente.
});

function renderPackingList() {
    // Inicialização segura de propriedades nas configurações locais
    if (!config.travelers) {
        config.travelers = [
            { id: "t-1", name: "Jhony" },
            { id: "t-2", name: "Larissa" }
        ];
    }
    if (!config.packingCategories) {
        config.packingCategories = ["Documentos", "Vestuário", "Higiene / Saúde", "Eletrônicos", "Outros"];
    }
    if (!config.packingItems) {
        config.packingItems = JSON.parse(JSON.stringify(defaultPackingItems));
    }

    // A. Detecta a aba ativa baseando-se na visibilidade dos painéis
    const panGen = document.getElementById('panel-packing-general');
    const panInd = document.getElementById('panel-packing-individual');
    const panSet = document.getElementById('panel-packing-settings');

    let activeTab = "general";
    if (panInd && panInd.style.display === "flex") {
        activeTab = "individual";
    } else if (panSet && panSet.style.display === "grid") {
        activeTab = "settings";
    }

    // B. RENDERIZAÇÃO DA ABA 1: MALA GERAL
    if (activeTab === "general") {
        // 1. Popular Categoria Select no formulário de inclusão
        const catSelect = document.getElementById('new-pack-item-category');
        if (catSelect) {
            catSelect.innerHTML = config.packingCategories.map(cat => `
                <option value="${cat}">${cat}</option>
            `).join('');
        }

        // 2. Popular atribuições checkboxes
        const assignBox = document.getElementById('new-pack-item-assignments');
        if (assignBox) {
            assignBox.innerHTML = config.travelers.map(t => `
                <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer; margin-right: 12px;">
                    <input type="checkbox" class="new-item-assign-cb" value="${t.id}" checked style="cursor: pointer; width: 15px; height: 15px;">
                    ${t.name}
                </label>
            `).join('');
        }

        // 3. Renderizar listagem geral agrupada por categoria
        const listContainer = document.getElementById('packing-general-container');
        if (listContainer) {
            let html = "";
            config.packingCategories.forEach(cat => {
                const items = config.packingItems.filter(item => (item.category || "Outros") === cat);
                if (items.length === 0 && cat === "Outros") return; // Ocultar outros se vazio

                html += `
                    <div class="summary-card" style="padding: 20px;">
                        <h3 style="font-size: 1.1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid ${getCategoryIcon(cat)}" style="color: var(--primary);"></i> ${cat}
                        </h3>
                        <div style="overflow-x: auto;">
                            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem;">
                                <thead>
                                    <tr style="border-bottom: 1px solid var(--border-color); color: var(--text-muted); font-size: 0.78rem; text-transform: uppercase;">
                                        <th style="padding: 8px 10px; width: 50%;">Item</th>
                                        <th style="padding: 8px 10px; width: 30%;">Atribuído A</th>
                                        <th style="padding: 8px 10px; text-align: right; width: 20%;">Ordenação / Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                `;

                if (items.length === 0) {
                    html += `
                        <tr>
                            <td colspan="3" style="padding: 15px 10px; text-align: center; color: var(--text-muted); font-style: italic;">
                                Nenhum item cadastrado nesta categoria.
                            </td>
                        </tr>
                    `;
                } else {
                    items.forEach((item, itemIdx) => {
                        // Resgata nomes das pessoas atribuídas
                        const assignedNames = (item.assignedTo || [])
                            .map(id => config.travelers.find(t => t.id === id)?.name)
                            .filter(Boolean);

                        const isFirst = config.packingItems.indexOf(item) === 0;
                        const isLast = config.packingItems.indexOf(item) === config.packingItems.length - 1;

                        html += `
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.03);">
                                <td style="padding: 12px 10px;">
                                    <strong style="color: var(--text-main); display: block; font-size: 0.92rem;">${item.name}</strong>
                                    ${item.description ? `<span style="font-size: 0.78rem; color: var(--text-muted); display: block; margin-top: 2px;">${item.description}</span>` : ''}
                                </td>
                                <td style="padding: 12px 10px;">
                                    <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                                        ${assignedNames.length === config.travelers.length ? `
                                            <span class="badge" style="background: rgba(249, 115, 22, 0.15); color: #fb923c; border: 1px solid rgba(249, 115, 22, 0.3);">Todos</span>
                                        ` : assignedNames.map(name => `
                                            <span class="badge" style="background: rgba(255,255,255,0.05); color: var(--text-main); border: 1px solid var(--border-color);">${name}</span>
                                        `).join('')}
                                    </div>
                                </td>
                                <td style="padding: 12px 10px; text-align: right;">
                                    <div style="display: inline-flex; gap: 4px;">
                                        <button class="btn btn-outline btn-sm btn-move-item" data-item-id="${item.id}" data-dir="-1" ${isFirst ? 'disabled' : ''} style="padding: 4px 6px; font-size: 0.75rem;" title="Mover para Cima">
                                            <i class="fa-solid fa-arrow-up"></i>
                                        </button>
                                        <button class="btn btn-outline btn-sm btn-move-item" data-item-id="${item.id}" data-dir="1" ${isLast ? 'disabled' : ''} style="padding: 4px 6px; font-size: 0.75rem;" title="Mover para Baixo">
                                            <i class="fa-solid fa-arrow-down"></i>
                                        </button>
                                        <button class="btn btn-outline-danger btn-sm btn-delete-item" data-item-id="${item.id}" style="padding: 4px 8px; font-size: 0.75rem; margin-left: 6px;" title="Excluir Item">
                                            <i class="fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        `;
                    });
                }

                html += `
                                </tbody>
                            </table>
                        </div>
                    </div>
                `;
            });
            listContainer.innerHTML = html;

            // Vincular ações da listagem geral
            listContainer.querySelectorAll('.btn-move-item').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const itemId = e.currentTarget.getAttribute('data-item-id');
                    const dir = parseInt(e.currentTarget.getAttribute('data-dir'));
                    movePackingItem(itemId, dir);
                });
            });

            listContainer.querySelectorAll('.btn-delete-item').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const itemId = e.currentTarget.getAttribute('data-item-id');
                    if (confirm("Deseja realmente remover este item de sua mala?")) {
                        config.packingItems = config.packingItems.filter(i => i.id !== itemId);
                        saveState();
                        renderPackingList();
                    }
                });
            });
        }
    }

    // C. RENDERIZAÇÃO DA ABA 2: CHECKLIST INDIVIDUAL
    if (activeTab === "individual") {
        const userSelect = document.getElementById('packing-individual-user-select');
        if (userSelect) {
            // 1. Popular select de viajante se estiver vazio
            const selectedUserId = userSelect.value || (config.travelers[0] ? config.travelers[0].id : "");
            userSelect.innerHTML = config.travelers.map(t => `
                <option value="${t.id}" ${t.id === selectedUserId ? 'selected' : ''}>${t.name}</option>
            `).join('');

            const currentTravelerId = userSelect.value;
            const currentTraveler = config.travelers.find(t => t.id === currentTravelerId);

            if (currentTraveler) {
                // 2. Filtrar itens pertencentes ao viajante
                const personalItems = config.packingItems.filter(item => 
                    (item.assignedTo || []).includes(currentTravelerId)
                );

                const packedItemsCount = personalItems.filter(item => 
                    (item.packedBy || []).includes(currentTravelerId)
                ).length;

                const totalItemsCount = personalItems.length;
                const percent = totalItemsCount > 0 ? Math.round((packedItemsCount / totalItemsCount) * 100) : 0;

                // 3. Renderizar barra de progresso
                const progressBox = document.getElementById('packing-individual-progress-bar-container');
                if (progressBox) {
                    progressBox.innerHTML = `
                        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 600; color: var(--text-main);">
                            <span>Mala de ${currentTraveler.name}: ${packedItemsCount} de ${totalItemsCount} itens na mala</span>
                            <span>${percent}%</span>
                        </div>
                        <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden; border: 1px solid var(--border-color);">
                            <div style="width: ${percent}%; height: 100%; background: linear-gradient(90deg, var(--primary), var(--secondary)); border-radius: 4px; transition: width 0.3s ease;"></div>
                        </div>
                    `;
                }

                // 4. Renderizar listagem checklist individual
                const checklistContainer = document.getElementById('packing-individual-container');
                if (checklistContainer) {
                    let html = "";
                    config.packingCategories.forEach(cat => {
                        const items = personalItems.filter(item => (item.category || "Outros") === cat);
                        if (items.length === 0) return; // Ocultar categorias vazias no checklist

                        html += `
                            <div class="summary-card" style="padding: 20px;">
                                <h3 style="font-size: 1.1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                                    <i class="fa-solid ${getCategoryIcon(cat)}" style="color: var(--primary);"></i> ${cat}
                                </h3>
                                <div style="display: flex; flex-direction: column; gap: 12px;">
                        `;

                        items.forEach(item => {
                            const isPacked = (item.packedBy || []).includes(currentTravelerId);

                            html += `
                                <div style="display: flex; align-items: flex-start; gap: 12px; padding: 10px; border-radius: 6px; background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.02); transition: var(--transition-fast);">
                                    <label class="checkbox-container" style="display: inline-block; padding-left: 0; margin-bottom: 18px; width: 18px; height: 18px; flex-shrink: 0; margin-top: 2px;">
                                        <input type="checkbox" class="ind-pack-checkbox" data-item-id="${item.id}" data-traveler-id="${currentTravelerId}" ${isPacked ? 'checked' : ''}>
                                        <span class="checkmark" style="position: relative; display: block; margin: 0 auto;"></span>
                                    </label>
                                    <div style="flex: 1;">
                                        <span style="font-size: 0.95rem; font-weight: 500; display: block; color: ${isPacked ? 'var(--text-muted)' : 'var(--text-main)'}; text-decoration: ${isPacked ? 'line-through' : 'none'}; transition: var(--transition-fast);">${item.name}</span>
                                        ${item.description ? `<span style="font-size: 0.78rem; color: var(--text-muted); display: block; margin-top: 2px;">${item.description}</span>` : ''}
                                    </div>
                                </div>
                            `;
                        });

                        html += `
                                </div>
                            </div>
                        `;
                    });

                    if (personalItems.length === 0) {
                        html = `
                            <div class="summary-card" style="padding: 30px; text-align: center; color: var(--text-muted);">
                                <i class="fa-solid fa-suitcase" style="font-size: 2.5rem; color: var(--border-color); margin-bottom: 12px; display: block;"></i>
                                <p>Nenhum item atribuído a você nesta mala. Acesse a aba <strong>Mala Geral</strong> para criar ou atribuir itens!</p>
                            </div>
                        `;
                    }
                    checklistContainer.innerHTML = html;

                    // Ouvinte para checkbox marcar mala pronta (individual)
                    checklistContainer.querySelectorAll('.ind-pack-checkbox').forEach(cb => {
                        cb.addEventListener('change', (e) => {
                            const itemId = e.target.getAttribute('data-item-id');
                            const travelerId = e.target.getAttribute('data-traveler-id');
                            
                            const item = config.packingItems.find(i => i.id === itemId);
                            if (item) {
                                if (!item.packedBy) item.packedBy = [];
                                if (e.target.checked) {
                                    if (!item.packedBy.includes(travelerId)) {
                                        item.packedBy.push(travelerId);
                                    }
                                } else {
                                    item.packedBy = item.packedBy.filter(id => id !== travelerId);
                                }
                                saveState();
                                renderPackingList(); // Recarrega barra de progresso e estilos taxados
                            }
                        });
                    });
                }
            }
        }
    }

    // D. RENDERIZAÇÃO DA ABA 3: CONFIGURAÇÕES E GERENCIAMENTO
    if (activeTab === "settings") {
        // 1. Renderizar lista de Viajantes
        const travContainer = document.getElementById('travelers-settings-list');
        if (travContainer) {
            travContainer.innerHTML = config.travelers.map(t => `
                <div style="display: flex; gap: 8px; align-items: center; background: rgba(255,255,255,0.01); border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); padding: 8px 12px; width: 100%;">
                    <i class="fa-solid fa-user-pen" style="color: var(--primary); font-size: 0.95rem;" title="Editar nome"></i>
                    <input type="text" class="traveler-rename-input" data-id="${t.id}" value="${t.name}" style="flex: 1; background: var(--bg-input); border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); padding: 6px 10px; color: var(--text-main); font-size: 0.9rem; outline: none; transition: var(--transition-fast);">
                    <button class="btn btn-outline-danger btn-sm btn-delete-traveler" data-id="${t.id}" style="padding: 4px 8px; font-size: 0.75rem;" title="Excluir Viajante">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `).join('');

            // Vincular renames (ao mudar de foco ou pressionar enter)
            travContainer.querySelectorAll('.traveler-rename-input').forEach(inp => {
                const saveRename = (e) => {
                    const travelerId = e.target.getAttribute('data-id');
                    const newName = e.target.value.trim();
                    if (newName) {
                        renameTraveler(travelerId, newName);
                    }
                };
                inp.addEventListener('change', saveRename);
                inp.addEventListener('blur', saveRename);
            });

            // Vincular deletes
            travContainer.querySelectorAll('.btn-delete-traveler').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.currentTarget.getAttribute('data-id');
                    deleteTraveler(id);
                });
            });
        }

        // 2. Renderizar lista de Categorias
        const catContainer = document.getElementById('categories-settings-list');
        if (catContainer) {
            catContainer.innerHTML = config.packingCategories.map(cat => {
                const isOutros = cat === "Outros";
                return `
                    <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.01); border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); padding: 8px 12px;">
                        <span style="font-size: 0.9rem; font-weight: 500; color: var(--text-main);"><i class="fa-solid ${getCategoryIcon(cat)}" style="color: var(--text-muted); margin-right: 6px;"></i> ${cat}</span>
                        ${!isOutros ? `
                            <button class="btn btn-outline-danger btn-sm btn-delete-category" data-cat="${cat}" style="padding: 4px 8px; font-size: 0.75rem;" title="Excluir Categoria">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        ` : '<span style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">Padrão</span>'}
                    </div>
                `;
            }).join('');

            // Vincular deletes de categorias
            catContainer.querySelectorAll('.btn-delete-category').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const catName = e.currentTarget.getAttribute('data-cat');
                    deleteCategory(catName);
                });
            });
        }
    }
}

function movePackingItem(itemId, direction) {
    const idx = config.packingItems.findIndex(i => i.id === itemId);
    if (idx === -1) return;
    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= config.packingItems.length) return;
    
    // Troca os elementos de posição
    const temp = config.packingItems[idx];
    config.packingItems[idx] = config.packingItems[newIdx];
    config.packingItems[newIdx] = temp;
    
    saveState();
    renderPackingList();
}

function renameTraveler(travelerId, newName) {
    newName = newName.trim();
    if (!newName) return;
    const traveler = config.travelers.find(t => t.id === travelerId);
    if (traveler) {
        traveler.name = newName;
        saveState();
        renderPackingList();
    }
}

function deleteTraveler(travelerId) {
    if (config.travelers.length <= 1) {
        alert("A viagem precisa ter pelo menos 1 viajante!");
        return;
    }
    if (confirm("Deseja realmente remover este viajante? Suas marcações individuais serão perdidas.")) {
        config.travelers = config.travelers.filter(t => t.id !== travelerId);
        if (config.packingItems) {
            config.packingItems.forEach(item => {
                if (item.assignedTo) {
                    item.assignedTo = item.assignedTo.filter(id => id !== travelerId);
                }
                if (item.packedBy) {
                    item.packedBy = item.packedBy.filter(id => id !== travelerId);
                }
            });
        }
        saveState();
        renderPackingList();
    }
}

function deleteCategory(catName) {
    if (confirm(`Deseja realmente excluir a categoria "${catName}"? Todos os itens dela serão movidos para "Outros".`)) {
        config.packingCategories = config.packingCategories.filter(c => c !== catName);
        if (config.packingItems) {
            config.packingItems.forEach(item => {
                if (item.category === catName) {
                    item.category = "Outros";
                }
            });
        }
        saveState();
        renderPackingList();
    }
}

function getCategoryIcon(cat) {
    switch (cat) {
        case "Documentos": return "fa-file-invoice";
        case "Vestuário": return "fa-shirt";
        case "Higiene / Saúde": return "fa-soap";
        case "Eletrônicos": return "fa-plug";
        default: return "fa-suitcase";
    }
}

function showLoadingOverlay(message) {
    let overlay = document.getElementById('app-loading-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'app-loading-overlay';
        overlay.style = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(15, 23, 42, 0.95);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            color: #fff;
            font-family: 'Outfit', sans-serif;
            gap: 16px;
        `;
        overlay.innerHTML = `
            <div class="loading-spinner" style="width: 50px; height: 50px; border: 4px solid rgba(255,255,255,0.1); border-top-color: var(--primary, #f97316); border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <div id="loading-overlay-message" style="font-size: 1.1rem; font-weight: 500; letter-spacing: 0.5px;">${message}</div>
            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        `;
        document.body.appendChild(overlay);
    } else {
        document.getElementById('loading-overlay-message').innerText = message;
        overlay.style.display = 'flex';
    }
}

function hideLoadingOverlay() {
    const overlay = document.getElementById('app-loading-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}
