(() => {
  "use strict";

  const CONFIG = {
    diagnosticBase: "https://diagnostico-pi-one.vercel.app/",
    whatsappNumber: "5516991940396"
  };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  /* Links de conversão centralizados */
  $$('[data-diagnostic]').forEach((link) => {
    const placement = link.dataset.placement || "site";
    const url = new URL(CONFIG.diagnosticBase);
    url.searchParams.set("utm_source", "site_cruz_farias");
    url.searchParams.set("utm_medium", placement);
    url.searchParams.set("utm_campaign", "operacao_conectada");
    link.href = url.toString();
  });

  $$('[data-whatsapp]').forEach((link) => {
    const message = link.dataset.message || "Olá, Gustavo. Conheci o site da Cruz & Farias e gostaria de conversar.";
    link.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  /* Menu móvel */
  const menuToggle = $('#menuToggle');
  const mobileMenu = $('#mobileMenu');

  function setMenu(open) {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    mobileMenu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  }

  menuToggle?.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  $$('#mobileMenu a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  /* Header, progresso e voltar ao topo */
  const header = $('.site-header');
  const progress = $('#scrollProgress');
  const backTop = $('#backTop');

  function updateScrollUI() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const percent = Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100));

    if (progress) progress.style.width = `${percent}%`;
    header?.classList.toggle('scrolled', scrollTop > 20);
    backTop?.classList.toggle('visible', scrollTop > 700);
  }

  updateScrollUI();
  window.addEventListener('scroll', updateScrollUI, { passive: true });

  /* Reveal acessível e leve */
  const revealItems = $$('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        instance.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    revealItems.forEach((item) => observer.observe(item));
  }

  /* Experiências aplicadas */
  const casesRoot = $('[data-cases]');

  if (casesRoot) {
    const cases = [
      {
        id: 'mngt',
        name: 'Grupo MNGT',
        tab: 'Grupo MNGT',
        monogram: 'MNGT',
        category: 'Ecossistema corporativo',
        evidence: 'Experiência profissional',
        accent: '#d5aa55',
        headline: 'Governança integrada para construção, logística e áreas corporativas.',
        summary: 'Atuação transversal na evolução de processos, sistemas, dados, custos, fornecedores e prioridades do grupo.',
        challenge: 'Demandas, sistemas e rotinas distribuídos entre empresas e áreas, com necessidade de padronização e visibilidade executiva.',
        action: 'Portfólio corporativo, critérios de priorização, governança, acessos, aprovações, treinamento e acompanhamento de fornecedores.',
        result: 'Maior clareza sobre prioridades, responsabilidades, riscos e evolução das iniciativas de sistemas.',
        highlights: [['3 empresas', 'governança corporativa'], ['Multissistema', 'ERP, WMS e BI'], ['PMO', 'prioridades e evolução']],
        skills: ['Governança', 'PMO de Sistemas', 'Gestão de fornecedores', 'Acessos', 'Indicadores', 'Treinamento']
      },
      {
        id: 'area-incrivel',
        name: 'Área Incrível',
        tab: 'Área Incrível',
        monogram: 'AI',
        category: 'Construção e incorporação',
        evidence: 'Experiência profissional',
        accent: '#ef5b5b',
        headline: 'Governança de ERP conectando obra, planejamento, suprimentos, contratos e gestão.',
        summary: 'Padronização de processos e melhor aproveitamento dos sistemas corporativos na rotina da construção civil.',
        challenge: 'Aprovações descentralizadas, controles paralelos e baixa integração entre planejamento, execução, qualidade e gestão.',
        action: 'Fluxos AS IS/TO BE, matrizes de aprovação, acessos, integração entre plataformas, procedimentos e treinamentos.',
        result: 'Processos mais claros, responsabilidades definidas e maior rastreabilidade das operações no ERP.',
        highlights: [['6 processos', 'jornadas críticas'], ['5 fluxos', 'aprovações'], ['+100%', 'capacidade no Prevision']],
        skills: ['Sienge', 'Prevision', 'Mobuss', 'Power BI', 'ERP', 'Governança de obra']
      },
      {
        id: 'mais-armazem',
        name: 'Mais Armazém',
        tab: 'Mais Armazém',
        monogram: 'MA',
        category: 'Logística e armazenagem',
        evidence: 'Case aplicado',
        accent: '#45d1d8',
        headline: 'Estruturação da jornada WMS para transformar implantação em operação controlada.',
        summary: 'Preparação, validação e governança do WMS, conectando requisitos, depositantes, integrações, testes e usuários.',
        challenge: 'Escopo pouco detalhado, regras distintas por operação e integrações que exigiam validação antes do Go-Live.',
        action: 'Mapeamento ponta a ponta, roteiros de teste, critérios de aceite, pendências, KPIs e capacitação.',
        result: 'Maior segurança para homologação, tomada de decisão e sustentação da operação logística.',
        highlights: [['8 etapas', 'portaria à expedição'], ['4 ambientes', 'integração sistêmica'], ['6 grupos', 'indicadores logísticos']],
        skills: ['WMS Senior', 'Sankhya', 'SAP', 'Homologação', 'Inventário', 'Go-Live']
      },
      {
        id: 'centro-logistico',
        name: 'Centro Logístico Rio Claro',
        tab: 'Centro Logístico',
        monogram: 'CL',
        category: 'Operação logística',
        evidence: 'Experiência profissional',
        accent: '#86a9e8',
        headline: 'Mais visibilidade para uma operação que depende de cadastro, fluxo e execução sincronizados.',
        summary: 'Aplicação de práticas de governança e integração para fortalecer a rotina logística e administrativa.',
        challenge: 'Informações dispersas, cadastros sem padrão e baixa visibilidade sobre o andamento das rotinas.',
        action: 'Organização de fluxos, responsabilidades, cadastros, indicadores e pontos de integração.',
        result: 'Base mais organizada para acompanhamento, confiabilidade das informações e evolução dos controles.',
        highlights: [['Operação', 'rotina integrada'], ['Cadastros', 'base confiável'], ['Indicadores', 'visão gerencial']],
        skills: ['Processos logísticos', 'Cadastros', 'ERP', 'WMS', 'Power BI', 'Planos de ação']
      },
      {
        id: 'vilaurbe',
        name: 'Vilaurbe',
        tab: 'Vilaurbe',
        monogram: 'V',
        category: 'Construção e incorporação',
        evidence: 'Experiência profissional',
        accent: '#f04444',
        headline: 'Dados e automações transformando informação dispersa em gestão mais acessível.',
        summary: 'Analytics, integrações, automações e indicadores aplicados a diferentes áreas da construtora e incorporadora.',
        challenge: 'Relatórios manuais, bases descentralizadas e baixa velocidade na consolidação gerencial.',
        action: 'Integração de fontes, modelagem, dashboards, automações e regras de indicadores.',
        result: 'Maior confiabilidade, velocidade e disponibilidade das informações para a gestão.',
        highlights: [['40%', 'menos processamento'], ['até 65%', 'menos tempo operacional'], ['8 áreas', 'soluções aplicadas']],
        skills: ['Power BI', 'SQL', 'Python', 'APIs', 'ERP', 'CRM']
      },
      {
        id: 'saffi',
        name: 'Saffi Consultoria',
        tab: 'Saffi',
        monogram: 'S',
        category: 'Consultoria e dados',
        evidence: 'Experiência aplicada',
        accent: '#68c77a',
        headline: 'Tecnologia traduzida em entrega organizada, prática e orientada ao negócio.',
        summary: 'Soluções em ambiente consultivo, aproximando necessidade empresarial, organização de informação e execução técnica.',
        challenge: 'Demandas com diferentes níveis de clareza, dados dispersos e necessidade de estruturar soluções utilizáveis.',
        action: 'Leitura do problema, organização de requisitos, pipelines, dashboards, automações e apoio técnico.',
        result: 'Entregas mais claras, aplicáveis e alinhadas à necessidade real da operação e dos clientes.',
        highlights: [['Consultoria', 'visão de negócio'], ['Dados', 'integração aplicada'], ['Clareza', 'entrega utilizável']],
        skills: ['Engenharia de dados', 'Dashboards', 'Integrações', 'Automação', 'Documentação', 'Processos']
      }
    ];

    const tabs = $('#caseTabs', casesRoot);
    const panel = $('#casePanel', casesRoot);
    let activeIndex = 0;

    function renderTabs() {
      tabs.innerHTML = cases.map((item, index) => `
        <button
          class="case-tab"
          id="case-tab-${escapeHtml(item.id)}"
          type="button"
          role="tab"
          data-index="${index}"
          aria-selected="${index === activeIndex}"
          aria-controls="casePanel"
          tabindex="${index === activeIndex ? 0 : -1}"
          style="--case-accent:${escapeHtml(item.accent)}"
        >
          <strong>${escapeHtml(item.tab)}</strong>
          <small>${escapeHtml(item.category)}</small>
        </button>
      `).join('');
    }

    function renderPanel() {
      const item = cases[activeIndex];
      panel.style.setProperty('--case-accent', item.accent);
      panel.setAttribute('aria-labelledby', `case-tab-${item.id}`);
      panel.innerHTML = `
        <div class="case-panel-side">
          <div class="company-monogram" aria-hidden="true">${escapeHtml(item.monogram)}</div>
          <div class="company-context">
            <small>${escapeHtml(item.evidence)}</small>
            <h3>${escapeHtml(item.name)}</h3>
            <p>${escapeHtml(item.summary)}</p>
          </div>
        </div>
        <div class="case-panel-content">
          <header>
            <h4>${escapeHtml(item.headline)}</h4>
            <span class="case-index">${String(activeIndex + 1).padStart(2, '0')}</span>
          </header>
          <div class="case-story">
            <article><span>Desafio</span><p>${escapeHtml(item.challenge)}</p></article>
            <article><span>Atuação</span><p>${escapeHtml(item.action)}</p></article>
            <article><span>Valor aplicado</span><p>${escapeHtml(item.result)}</p></article>
          </div>
          <div class="case-highlights">
            ${item.highlights.map(([value, label]) => `<div><strong>${escapeHtml(value)}</strong><small>${escapeHtml(label)}</small></div>`).join('')}
          </div>
          <div class="case-skills">
            <strong>Capacidades e tecnologias aplicadas</strong>
            <div class="case-skill-list">${item.skills.map((skill) => `<span>${escapeHtml(skill)}</span>`).join('')}</div>
          </div>
        </div>
      `;
    }

    function selectCase(index, focus = false) {
      if (!Number.isInteger(index) || index < 0 || index >= cases.length) return;
      activeIndex = index;
      renderPanel();

      $$('.case-tab', tabs).forEach((tab, tabIndex) => {
        const selected = tabIndex === activeIndex;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });

      if (focus) $$('.case-tab', tabs)[activeIndex]?.focus();
    }

    tabs.addEventListener('click', (event) => {
      const tab = event.target.closest('[data-index]');
      if (!tab) return;
      selectCase(Number(tab.dataset.index));
    });

    tabs.addEventListener('keydown', (event) => {
      const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
      if (!keys.includes(event.key)) return;
      event.preventDefault();

      if (event.key === 'Home') return selectCase(0, true);
      if (event.key === 'End') return selectCase(cases.length - 1, true);
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const next = (activeIndex + direction + cases.length) % cases.length;
      selectCase(next, true);
    });

    renderTabs();
    renderPanel();
  }

  /* Ano */
  const year = $('#currentYear');
  if (year) year.textContent = String(new Date().getFullYear());
})();
