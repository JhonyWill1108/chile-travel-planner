# 🇨🇱 Chile Travel Planner

Um planejador de viagem moderno, elegante e responsivo, desenvolvido para ajudar você a organizar seu roteiro diário de passeios no Chile, calcular despesas e acompanhar o câmbio de forma simples e intuitiva. 

Este projeto foi projetado para substituir planilhas complexas, oferecendo uma experiência premium focada no uso móvel durante a sua viagem.

---

## ✨ Funcionalidades Principais

- 📅 **Organização por Dias**: Visualize seu roteiro diário em uma linha do tempo (timeline) cronológica e limpa.
- 💵 **Calculadora de Câmbio Dinâmica**: Converta valores instantaneamente de Peso Chileno (CLP) para Real (BRL) usando uma cotação configurável.
- 💳 **Taxas de Cartão/IOF**: Opção de aplicar automaticamente as taxas de transação internacional/juros (como IOF de 6.38% ou taxas de parcelamento) nos subtotais das atividades.
- 📊 **Painel Financeiro Geral**: Acompanhe os gastos totais estimativos, valores de agência separados de ingressos, e acompanhe o que já foi **pago** vs. o que está **pendente**.
- 📱 **Mobile-First & Responsivo**: Uma interface fluida que se adapta perfeitamente a smartphones para consulta ágil no meio da rua ou durante passeios.
- 📥 **Sistema de Backup (JSON)**: Exporte e importe o seu roteiro completo em formato JSON para evitar a perda de dados e permitir o planejamento em múltiplos dispositivos.
- 🖨️ **Modo Impressão / Salvar PDF**: Estilização otimizada para gerar uma versão limpa para impressão física ou salvar como PDF no celular antes do embarque.
- 💾 **Persistência Local**: Todos os dados são salvos de forma automática e segura no `LocalStorage` do seu próprio navegador.

---

## 🛠️ Tecnologias Utilizadas

- **Estrutura**: HTML5 Semântico
- **Estilização**: Vanilla CSS3 (com design system baseado em variáveis, efeito de Glassmorphism e responsividade)
- **Lógica e Cálculos**: JavaScript puro (ES6)
- **Tipografia**: Google Fonts (Outfit & Inter)
- **Ícones**: FontAwesome v6.4.0

---

## 🚀 Como Executar Localmente

Como a aplicação foi construída inteiramente utilizando tecnologia client-side padrão (HTML, CSS e JavaScript puros), você **não precisa instalar nenhuma dependência** (como Node.js, npm, etc.).

1. Clone o repositório ou baixe os arquivos para o seu computador.
2. Dê dois cliques no arquivo `index.html` para abrir diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

---

## 🌐 Como Publicar no GitHub Pages (Hospedagem Grátis)

Você pode hospedar essa ferramenta de graça no seu próprio GitHub para acessá-la de qualquer lugar pelo celular. Siga o passo a passo abaixo:

1. Crie um novo repositório no seu GitHub (ex: `chile-travel-planner`).
2. Envie (commit/push) todos os arquivos da pasta do projeto para esse repositório.
3. No GitHub, acesse a aba **Settings** (Configurações) do seu repositório.
4. No menu lateral esquerdo, sob a seção "Code and automation", clique em **Pages**.
5. Em **Build and deployment**, selecione a branch `main` (ou `master`) na opção **Branch** e a pasta `/ (root)`. Clique em **Save**.
6. Aguarde cerca de 1 a 2 minutos. O GitHub gerará um link público seguro (ex: `https://seu-usuario.github.io/chile-travel-planner/`) onde seu planejador estará totalmente funcional!

---

## 📂 Dados Pré-Carregados

Para que você veja o aplicativo em ação imediatamente, ele já vem pré-carregado com um roteiro sugerido de **5 dias** baseado nos passeios clássicos do Chile (como Embalse el Yeso, Portillo, Valle Nevado, Parque Farellones e City Tour por Santiago), com estimativa de custos e observações práticas de viagem.

Sinta-se à vontade para clicar em **"Limpar Tudo"** no painel utilitário lateral para começar seu planejamento do zero!
