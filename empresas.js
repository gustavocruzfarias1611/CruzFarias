(() => {
  "use strict";

  const root = document.querySelector("[data-companies]");
  if (!root) return;

  const companies = [
    {
      id: "mngt",
      name: "Grupo MNGT",
      tabName: "MNGT",
      category: "Ecossistema corporativo",
      evidence: "Experiência profissional",
      logo: "assets/grupo-mngt.png",
      logoBg: "#262424",
      accent: "#d5aa55",
      headline: "Governança integrada para um ecossistema que conecta construção, logística e áreas corporativas.",
      summary: "Atuação transversal na evolução de processos, sistemas e dados do grupo, criando visão comum entre operações com necessidades diferentes.",
      challenge: "Sistemas e rotinas distribuídos entre empresas, áreas e fornecedores, com necessidade de padronização e visibilidade executiva.",
      action: "Estruturação de governança, fluxos, responsabilidades, critérios de aprovação, indicadores, capacitação e acompanhamento de implantações.",
      result: "Maior clareza sobre prioridades, responsabilidades e evolução das iniciativas de sistemas do grupo.",
      highlights: [
        { value: "Corporativo", label: "visão integrada" },
        { value: "ERP + WMS", label: "ecossistema multissistema" },
        { value: "Contínua", label: "governança e evolução" }
      ],
      capabilities: ["Governança de sistemas", "PMO", "Processos", "Dados e indicadores", "Treinamento e adoção"],
      systems: ["Sienge", "Sankhya", "WMS Senior", "Prevision", "Mobuss", "Power BI"],
      units: [
        { type: "Construção e incorporação", name: "Área Incrível", text: "ERP, processos de obra, aprovações, integrações e capacitação." },
        { type: "Logística e armazenagem", name: "Mais Armazém", text: "WMS, requisitos, homologação, indicadores e Go-Live." },
        { type: "Operação logística", name: "Centro Logístico", text: "Cadastros, integração de processos e confiabilidade operacional." }
      ]
    },
    {
      id: "area-incrivel",
      name: "Área Incrível",
      tabName: "Área Incrível",
      category: "Construção e incorporação",
      evidence: "Experiência profissional",
      logo: "assets/area-incrivel.png",
      logoBg: "#ffffff",
      accent: "#e94b4b",
      headline: "Governança de ERP conectando obra, planejamento, suprimentos, contratos e gestão.",
      summary: "Atuação orientada à padronização dos processos e ao melhor aproveitamento dos sistemas corporativos na rotina da construção civil.",
      challenge: "Aprovações descentralizadas, cadastros sem padrão, controles paralelos e baixa integração entre planejamento, execução e gestão.",
      action: "Mapeamento de fluxos, matriz de aprovações, políticas de acesso, integração entre sistemas, treinamentos e indicadores de acompanhamento.",
      result: "Processos mais claros, responsabilidades melhor definidas e maior confiabilidade para a tomada de decisão.",
      highlights: [
        { value: "ERP", label: "governança aplicada" },
        { value: "Obra", label: "processo ponta a ponta" },
        { value: "Adoção", label: "usuários e treinamento" }
      ],
      capabilities: ["Governança ERP", "Fluxos de aprovação", "Integrações", "Treinamento", "Indicadores"],
      systems: ["Sienge", "Prevision", "Mobuss", "OnSafety", "Sankhya", "Power BI"]
    },
    {
      id: "mais-armazem",
      name: "Mais Armazém",
      tabName: "Mais Armazém",
      category: "Logística e armazenagem",
      evidence: "Case aplicado",
      logo: "assets/mais-armazem.png",
      logoBg: "#f4f7f8",
      accent: "#45c9d4",
      headline: "Estruturação da jornada WMS para transformar implantação em operação controlada.",
      summary: "Atuação na preparação, validação e governança do WMS, conectando requisitos operacionais, sistemas, depositantes, testes e usuários.",
      challenge: "Implantação com escopo pouco detalhado, integrações em validação e regras distintas para diferentes clientes e operações.",
      action: "Levantamento de requisitos, desenho dos fluxos, roteiros de teste, critérios de aceite, gestão de pendências, indicadores e capacitação.",
      result: "Maior segurança para homologação, tomada de decisão sobre o Go-Live e sustentação da operação logística.",
      highlights: [
        { value: "WMS + ERP", label: "integração operacional" },
        { value: "Ponta a ponta", label: "portaria à expedição" },
        { value: "Go-Live", label: "prontidão e aceite" }
      ],
      capabilities: ["WMS", "Homologação", "Roteiros de teste", "Indicadores logísticos", "Operação assistida"],
      systems: ["WMS Senior", "Sankhya", "SAP", "ERP de clientes", "Power BI"]
    },
    {
      id: "centro-logistico",
      name: "Centro Logístico Rio Claro",
      tabName: "Centro Logístico",
      category: "Operação logística",
      evidence: "Experiência profissional",
      logo: "assets/centro-logistico.png",
      logoBg: "#0c1b35",
      accent: "#86a9e8",
      headline: "Mais visibilidade para uma operação que depende de cadastros, fluxo e execução sincronizados.",
      summary: "Aplicação de práticas de governança e integração de informações para fortalecer o controle da rotina logística e administrativa.",
      challenge: "Informações dispersas, necessidade de padronização de cadastros e baixa visibilidade sobre o andamento das rotinas operacionais.",
      action: "Organização de fluxos, responsabilidades, cadastros, indicadores e pontos de integração entre operação e sistemas corporativos.",
      result: "Base mais organizada para acompanhamento, confiabilidade das informações e evolução dos controles operacionais.",
      highlights: [
        { value: "Operação", label: "rotina integrada" },
        { value: "Cadastros", label: "base confiável" },
        { value: "Indicadores", label: "visão gerencial" }
      ],
      capabilities: ["Processos logísticos", "Cadastros", "Integração de dados", "Indicadores", "Governança"],
      systems: ["WMS", "ERP", "Power BI", "Planos de ação"]
    },
    {
      id: "vilaurbe",
      name: "Vilaurbe",
      tabName: "Vilaurbe",
      category: "Construção e incorporação",
      evidence: "Experiência profissional",
      logo: "assets/vilaurbe.png",
      logoBg: "#000000",
      accent: "#f04444",
      headline: "Dados e automações transformando informação dispersa em gestão mais acessível.",
      summary: "Experiência em analytics, integrações, automações e construção de indicadores para diferentes áreas de uma construtora e incorporadora.",
      challenge: "Relatórios manuais, bases descentralizadas e necessidade de consolidar informações de engenharia, comercial e financeiro.",
      action: "Integração de fontes, modelagem de dados, construção de dashboards, automações e definição de regras de indicadores.",
      result: "Informações mais acessíveis, critérios padronizados e maior agilidade para análise e tomada de decisão.",
      highlights: [
        { value: "BI + Dados", label: "inteligência aplicada" },
        { value: "Automação", label: "redução de tarefas manuais" },
        { value: "Executivo", label: "visão para decisão" }
      ],
      capabilities: ["Power BI", "Modelagem de dados", "Integrações", "Automação", "Indicadores executivos"],
      systems: ["Power BI", "SQL", "Python", "APIs", "ERP", "CRM"]
    },
    {
      id: "saffi",
      name: "Saffi Consultoria",
      tabName: "Saffi",
      category: "Consultoria e soluções",
      evidence: "Experiência aplicada",
      logo: "assets/saffi.png",
      logoBg: "#ffffff",
      accent: "#68c77a",
      headline: "Tecnologia traduzida em uma entrega organizada, prática e orientada ao negócio.",
      summary: "Aplicação de soluções em ambiente consultivo, aproximando necessidade empresarial, organização de informações e execução técnica.",
      challenge: "Demandas com diferentes níveis de clareza, dados dispersos e necessidade de estruturar uma solução compreensível e utilizável.",
      action: "Leitura do problema, organização de requisitos, estruturação da solução, apoio técnico e comunicação orientada à gestão.",
      result: "Entregas mais claras, aplicáveis e alinhadas à necessidade real do cliente e da operação.",
      highlights: [
        { value: "Consultoria", label: "visão de negócio" },
        { value: "Solução", label: "estrutura aplicada" },
        { value: "Clareza", label: "entrega utilizável" }
      ],
      capabilities: ["Diagnóstico", "Estruturação de soluções", "Organização de processos", "Apoio técnico", "Visão de negócio"],
      systems: ["Dados", "Processos", "Sistemas corporativos", "Documentação"]
    }
  ];

  const rail = root.querySelector("#companyBrandRail");
  const panel = root.querySelector("#companyPanel");
  const dots = root.querySelector("#companyDots");
  const position = root.querySelector("#companyPosition");
  const count = root.querySelector("#companiesCount");
  const prev = root.querySelector("#companyPrev");
  const next = root.querySelector("#companyNext");
  const autoplayButton = root.querySelector("#companyAutoplay");
  const autoplayIcon = autoplayButton?.querySelector(".company-autoplay-icon");
  const autoplayLabel = autoplayButton?.querySelector(".company-autoplay-label");
  const timerBar = root.querySelector("#companyTimerBar");

  let activeIndex = 0;
  let autoplay = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let intervalId = null;
  let isPointerInside = false;
  let hasFocusInside = false;

  count.textContent = String(companies.length);

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const buildTabs = () => {
    rail.innerHTML = companies.map((company, index) => `
      <button
        class="company-brand-tab"
        id="company-tab-${escapeHtml(company.id)}"
        type="button"
        role="tab"
        aria-selected="${index === activeIndex}"
        aria-controls="companyPanel"
        tabindex="${index === activeIndex ? 0 : -1}"
        data-index="${index}"
        style="--tab-accent:${escapeHtml(company.accent)};--logo-bg:${escapeHtml(company.logoBg)}"
      >
        <img src="${escapeHtml(company.logo)}" alt="Logo ${escapeHtml(company.name)}" loading="lazy" decoding="async">
        <span>${escapeHtml(company.category)}</span>
      </button>
    `).join("");

    dots.innerHTML = companies.map((company, index) => `
      <button
        class="company-dot"
        type="button"
        aria-label="Abrir ${escapeHtml(company.name)}"
        aria-current="${index === activeIndex}"
        data-index="${index}"
      ></button>
    `).join("");
  };

  const renderPanel = (company, index) => {
    const units = company.units?.length ? `
      <div class="company-units-dynamic" aria-label="Operações do grupo">
        ${company.units.map(unit => `
          <article class="company-unit-card">
            <small>${escapeHtml(unit.type)}</small>
            <strong>${escapeHtml(unit.name)}</strong>
            <p>${escapeHtml(unit.text)}</p>
          </article>
        `).join("")}
      </div>
    ` : "";

    panel.style.setProperty("--company-accent", company.accent);
    panel.setAttribute("aria-labelledby", `company-tab-${company.id}`);
    panel.classList.remove("is-changing");
    void panel.offsetWidth;
    panel.classList.add("is-changing");

    panel.innerHTML = `
      <div class="company-stage-visual" style="--logo-bg:${escapeHtml(company.logoBg)}">
        <div class="company-logo-frame">
          <img src="${escapeHtml(company.logo)}" alt="Logo ${escapeHtml(company.name)}" decoding="async">
        </div>

        <div class="company-identity">
          <div class="company-label-row">
            <span class="company-context">${escapeHtml(company.category)}</span>
            <span class="company-evidence-pill">${escapeHtml(company.evidence)}</span>
          </div>
          <h3>${escapeHtml(company.name)}</h3>
          <p>${escapeHtml(company.summary)}</p>
        </div>
      </div>

      <div class="company-stage-content">
        <header>
          <h4>${escapeHtml(company.headline)}</h4>
          <span class="company-stage-index">${String(index + 1).padStart(2, "0")}</span>
        </header>

        <div class="company-story-grid">
          <article class="company-story-card">
            <span>Desafio</span>
            <p>${escapeHtml(company.challenge)}</p>
          </article>
          <article class="company-story-card">
            <span>Atuação</span>
            <p>${escapeHtml(company.action)}</p>
          </article>
          <article class="company-story-card">
            <span>Valor aplicado</span>
            <p>${escapeHtml(company.result)}</p>
          </article>
        </div>

        <div class="company-highlight" aria-label="Resumo da experiência">
          ${company.highlights.map(item => `
            <div class="company-highlight-item">
              <strong>${escapeHtml(item.value)}</strong>
              <span>${escapeHtml(item.label)}</span>
            </div>
          `).join("")}
        </div>

        ${units}

        <div class="company-capability-block">
          <div>
            <strong>Capacidades e tecnologias aplicadas</strong>
            <small>Contexto profissional</small>
          </div>
          <div class="company-capabilities-dynamic">
            ${company.capabilities.map(item => `<span>${escapeHtml(item)}</span>`).join("")}
          </div>
          <div class="company-tech-stack">
            ${company.systems.map(item => `<span>${escapeHtml(item)}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
  };

  const updateControls = () => {
    const tabs = [...rail.querySelectorAll("[role='tab']")];
    const dotButtons = [...dots.querySelectorAll(".company-dot")];

    tabs.forEach((tab, index) => {
      const selected = index === activeIndex;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected) tab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    });

    dotButtons.forEach((dot, index) => dot.setAttribute("aria-current", String(index === activeIndex)));
    position.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(companies.length).padStart(2, "0")}`;
  };

  const selectCompany = (index, options = {}) => {
    activeIndex = (index + companies.length) % companies.length;
    renderPanel(companies[activeIndex], activeIndex);
    updateControls();
    if (options.focusTab) rail.querySelector(`[data-index="${activeIndex}"]`)?.focus();
    restartAutoplay();
  };

  const stopTimerAnimation = () => {
    timerBar.classList.remove("is-running");
    void timerBar.offsetWidth;
  };

  const startTimerAnimation = () => {
    stopTimerAnimation();
    if (autoplay && !isPointerInside && !hasFocusInside) timerBar.classList.add("is-running");
  };

  const stopAutoplayInterval = () => {
    if (intervalId) window.clearInterval(intervalId);
    intervalId = null;
    stopTimerAnimation();
  };

  const restartAutoplay = () => {
    stopAutoplayInterval();
    if (!autoplay || isPointerInside || hasFocusInside) return;
    startTimerAnimation();
    intervalId = window.setInterval(() => {
      activeIndex = (activeIndex + 1) % companies.length;
      renderPanel(companies[activeIndex], activeIndex);
      updateControls();
      startTimerAnimation();
    }, 6000);
  };

  const syncAutoplayButton = () => {
    autoplayButton.setAttribute("aria-pressed", String(autoplay));
    autoplayIcon.textContent = autoplay ? "Ⅱ" : "▶";
    autoplayLabel.textContent = autoplay ? "Pausar rotação" : "Ativar rotação";
  };

  rail.addEventListener("click", (event) => {
    const button = event.target.closest("[data-index]");
    if (!button) return;
    selectCompany(Number(button.dataset.index));
  });

  rail.addEventListener("keydown", (event) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let target = activeIndex;
    if (event.key === "ArrowRight") target += 1;
    if (event.key === "ArrowLeft") target -= 1;
    if (event.key === "Home") target = 0;
    if (event.key === "End") target = companies.length - 1;
    selectCompany(target, { focusTab: true });
  });

  dots.addEventListener("click", (event) => {
    const button = event.target.closest("[data-index]");
    if (!button) return;
    selectCompany(Number(button.dataset.index));
  });

  prev.addEventListener("click", () => selectCompany(activeIndex - 1));
  next.addEventListener("click", () => selectCompany(activeIndex + 1));

  autoplayButton.addEventListener("click", () => {
    autoplay = !autoplay;
    syncAutoplayButton();
    restartAutoplay();
  });

  root.addEventListener("mouseenter", () => {
    isPointerInside = true;
    stopAutoplayInterval();
  });

  root.addEventListener("mouseleave", () => {
    isPointerInside = false;
    restartAutoplay();
  });

  root.addEventListener("focusin", () => {
    hasFocusInside = true;
    stopAutoplayInterval();
  });

  root.addEventListener("focusout", () => {
    window.setTimeout(() => {
      hasFocusInside = root.contains(document.activeElement);
      if (!hasFocusInside) restartAutoplay();
    }, 0);
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAutoplayInterval();
    else restartAutoplay();
  });

  buildTabs();
  syncAutoplayButton();
  renderPanel(companies[activeIndex], activeIndex);
  updateControls();

  const observer = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        const visible = entries[0]?.isIntersecting;
        if (visible) restartAutoplay();
        else stopAutoplayInterval();
      }, { threshold: 0.18 })
    : null;

  if (observer) observer.observe(root);
  else restartAutoplay();
})();
