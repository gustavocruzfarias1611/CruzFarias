(() => {
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  // Ano do rodapé
  const currentYear = $('#currentYear');
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  // Menu mobile
  const menuToggle = $('#menuToggle');
  const mobileMenu = $('#mobileMenu');

  const closeMenu = ({ restoreFocus = false } = {}) => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.hidden = true;
    document.body.classList.remove('nav-open');
    if (restoreFocus) menuToggle.focus();
  };

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.hidden = isOpen;
      document.body.classList.toggle('nav-open', !isOpen);
    });

    $$('a', mobileMenu).forEach(link => link.addEventListener('click', () => closeMenu()));

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu({ restoreFocus: true });
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1180) closeMenu();
    });
  }

  // Barra de progresso e botão de voltar ao topo
  const progress = $('#scrollProgress');
  const backTop = $('#backTop');
  const siteHeader = $('.site-header');

  const updateScrollUI = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const ratio = scrollable > 0 ? (doc.scrollTop / scrollable) : 0;
    if (progress) progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
    if (backTop) backTop.classList.toggle('is-visible', doc.scrollTop > 700);
    if (siteHeader) siteHeader.classList.toggle('is-scrolled', doc.scrollTop > 24);
  };

  updateScrollUI();
  window.addEventListener('scroll', updateScrollUI, { passive: true });

  // Animação de entrada respeitando prefers-reduced-motion
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = $$('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach(el => observer.observe(el));
  }

  // WhatsApp: preserva o número e injeta a mensagem contextual.
  $$('[data-whatsapp]').forEach(link => {
    const message = link.dataset.message;
    if (!message) return;
    const base = 'https://wa.me/5516991940396';
    link.href = `${base}?text=${encodeURIComponent(message)}`;
  });

  // Diagnóstico: adiciona origem do CTA para medir quais pontos da página convertem melhor.
  $$('[data-diagnostic]').forEach(link => {
    try {
      const url = new URL(link.href, window.location.href);
      url.searchParams.set('utm_source', 'cruzfarias.com.br');
      url.searchParams.set('utm_medium', 'site');
      url.searchParams.set('utm_campaign', 'diagnostico_conecta');
      url.searchParams.set('utm_content', link.dataset.placement || 'site');
      link.href = url.toString();
    } catch (_) {
      // Mantém o href original se o navegador não conseguir construir a URL.
    }
  });

  // Cases com foto + contexto. O foco é comunicar tipo de atuação, sem sugerir contratação direta.
  const cases = [
    {
      id: 'construcao',
      tab: 'Construção',
      kicker: 'CONSTRUÇÃO & INCORPORAÇÃO',
      title: 'Tecnologia conectada à rotina da obra.',
      image: 'assets/portfolio/gustavo-obra-equipe.webp',
      imageAlt: 'Gustavo Farias alinhando informações de obra com equipe de campo, tablet e equipamentos de segurança',
      imagePosition: 'center 34%',
      badge: 'Leitura de campo + processo + sistema',
      challenge: 'Conectar planejamento, suprimentos, execução, medições e informações gerenciais sem transformar o ERP em apenas um repositório de lançamentos.',
      action: 'Mapeamento de fluxo, governança de sistemas, integração entre áreas, estruturação de indicadores e acompanhamento da aderência operacional.',
      value: 'Mais rastreabilidade, menor dependência de controles paralelos e maior capacidade de gestão sobre custos, prazo e execução.',
      tech: ['Sienge', 'Prevision', 'Mobuss', 'Power BI', 'SQL']
    },
    {
      id: 'processos',
      tab: 'Processos',
      kicker: 'PROCESSOS & GOVERNANÇA',
      title: 'Antes de automatizar, entender o que realmente acontece.',
      image: 'assets/portfolio/gustavo-processos-workshop.webp',
      imageAlt: 'Gustavo Farias conduzindo workshop colaborativo de transformação de processos com equipe',
      imagePosition: '58% center',
      badge: 'AS IS → TO BE → governança',
      challenge: 'Processos informais, aprovações dispersas, retrabalho, tarefas fora do sistema e conhecimento concentrado em poucas pessoas.',
      action: 'Levantamento AS IS, desenho TO BE, definição de papéis, regras, critérios de aceite, fluxos e matriz de responsabilidades.',
      value: 'Processos mais claros, decisões mais rápidas e tecnologia aplicada sobre uma rotina previamente organizada.',
      tech: ['BPMN', 'RACI', 'Lean', 'SOP', 'Governança']
    },
    {
      id: 'erp',
      tab: 'ERP / WMS',
      kicker: 'SISTEMAS CORPORATIVOS',
      title: 'Do sistema contratado ao sistema utilizado.',
      image: 'assets/portfolio/gustavo-logistica-equipe.webp',
      imageAlt: 'Gustavo Farias em alinhamento com equipe operacional dentro de centro logístico',
      imagePosition: 'center center',
      badge: 'Implantação + homologação + adoção',
      challenge: 'Sistemas com baixa aderência, funcionalidades subutilizadas, parametrizações desconectadas da operação e fornecedores sem uma governança única.',
      action: 'Requisitos, priorização, testes, homologação, gestão de fornecedores, implantação, treinamento e acompanhamento pós-go-live.',
      value: 'Maior utilização do ERP/WMS, redução de retrabalho e melhor conexão entre o processo real e a solução tecnológica.',
      tech: ['Sankhya', 'Sienge', 'WMS Senior', 'Integrações', 'PMO']
    },
    {
      id: 'dados',
      tab: 'Dados & BI',
      kicker: 'DADOS PARA DECISÃO',
      title: 'Indicadores que explicam a operação, não apenas a decoram.',
      image: 'assets/portfolio/gustavo-reuniao-executiva.webp',
      imageAlt: 'Gustavo Farias conduzindo reunião executiva com processos, indicadores e tomada de decisão',
      imagePosition: '52% center',
      badge: 'Dado confiável → decisão executiva',
      challenge: 'Relatórios divergentes, indicadores sem regra única, conferências manuais e baixa confiança da liderança na informação disponível.',
      action: 'Estruturação de regras de cálculo, dicionário de KPIs, consultas SQL, automações e dashboards conectados às decisões de negócio.',
      value: 'Mais previsibilidade, menor tempo de consolidação e uma fonte de informação mais confiável para a gestão.',
      tech: ['Power BI', 'DAX', 'SQL', 'Python', 'APIs']
    },
    {
      id: 'adocao',
      tab: 'Adoção',
      kicker: 'PESSOAS & GESTÃO DA MUDANÇA',
      title: 'Tecnologia só gera valor quando a rotina muda.',
      image: 'assets/portfolio/gustavo-processos-workshop.webp',
      imageAlt: 'Gustavo Farias conduzindo workshop com equipe em ambiente corporativo para apoiar adoção e mudança',
      imagePosition: 'center center',
      badge: 'Treinamento + material + suporte',
      challenge: 'Usuários inseguros, processos executados de formas diferentes e conhecimento operacional dependente de treinamento informal.',
      action: 'Trilhas, manuais, universidade corporativa, workshops, treinamento por processo e acompanhamento da adoção.',
      value: 'Padronização, menor curva de aprendizagem e maior sustentabilidade das mudanças implantadas.',
      tech: ['Universidade Corporativa', 'Treinamentos', 'SOP', 'Gestão da Mudança']
    },
    {
      id: 'pmo',
      tab: 'PMO',
      kicker: 'GESTÃO & EXECUÇÃO',
      title: 'Prioridade, fornecedor e resultado sob a mesma governança.',
      image: 'assets/portfolio/gustavo-reuniao-executiva.webp',
      imageAlt: 'Gustavo Farias conduzindo reunião executiva para discussão de prioridades, indicadores e decisões',
      imagePosition: 'center center',
      badge: 'Portfólio + prioridades + execução',
      challenge: 'Demandas concorrentes, custos pouco visíveis, projetos sem critério uniforme e dependência de diferentes fornecedores de tecnologia.',
      action: 'Portfólio, priorização, rituais executivos, cronogramas, riscos, critérios de aceite, custos e acompanhamento de fornecedores.',
      value: 'Mais clareza sobre o que deve ser feito, por quem, em qual ordem e com qual resultado esperado.',
      tech: ['PMO', 'Roadmap', 'Riscos', 'Fornecedores', 'Governança']
    }
  ];

  const caseTabs = $('#caseTabs');
  const casePanel = $('#casePanel');

  const renderCase = (index, focusPanel = false) => {
    if (!caseTabs || !casePanel) return;
    const item = cases[index];

    $$('.case-tab', caseTabs).forEach((tab, tabIndex) => {
      tab.setAttribute('aria-selected', String(tabIndex === index));
      tab.tabIndex = tabIndex === index ? 0 : -1;
    });

    casePanel.setAttribute('aria-labelledby', `case-tab-${item.id}`);
    casePanel.innerHTML = `
      <div class="case-panel-inner">
        <div class="case-visual">
          <img src="${item.image}" alt="${item.imageAlt}" loading="lazy" decoding="async" style="object-position:${item.imagePosition}">
          <span class="case-visual-badge">${item.badge}</span>
        </div>
        <div class="case-content">
          <span class="case-kicker">${item.kicker}</span>
          <h3>${item.title}</h3>
          <div class="case-facts">
            <div class="case-fact"><small>DESAFIO</small><p>${item.challenge}</p></div>
            <div class="case-fact"><small>ATUAÇÃO</small><p>${item.action}</p></div>
            <div class="case-fact"><small>IMPACTO OPERACIONAL</small><p>${item.value}</p></div>
          </div>
          <div class="case-tech">${item.tech.map(tech => `<span>${tech}</span>`).join('')}</div>
        </div>
      </div>`;

    if (focusPanel) casePanel.focus({ preventScroll: true });
  };

  if (caseTabs && casePanel) {
    cases.forEach((item, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'case-tab';
      button.id = `case-tab-${item.id}`;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-controls', 'casePanel');
      button.setAttribute('aria-selected', String(index === 0));
      button.tabIndex = index === 0 ? 0 : -1;
      button.textContent = item.tab;
      button.addEventListener('click', () => renderCase(index));
      button.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const tabs = $$('.case-tab', caseTabs);
        const current = tabs.indexOf(event.currentTarget);
        let next = current;
        if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        tabs[next].focus();
        renderCase(next);
      });
      caseTabs.appendChild(button);
    });
    renderCase(0);
  }

  // Navegação ativa: ajuda o visitante a entender em que parte da narrativa está.
  const navLinks = $$('.desktop-nav a[href^="#"]');
  const navTargets = navLinks
    .map(link => ({ link, target: $(link.getAttribute('href')) }))
    .filter(item => item.target);

  if ('IntersectionObserver' in window && navTargets.length) {
    const navObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navTargets.forEach(item => item.link.classList.toggle('is-active', item.target === visible.target));
    }, { rootMargin: '-25% 0px -62% 0px', threshold: [0, .1, .35, .6] });

    navTargets.forEach(item => navObserver.observe(item.target));
  }

  // FAQ: mantém a leitura limpa abrindo uma resposta por vez.
  const faqDetails = $$('.faq-list details');
  faqDetails.forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (!detail.open) return;
      faqDetails.forEach(other => {
        if (other !== detail) other.open = false;
      });
    });
  });

  // Links internos: compensa header sticky em navegadores onde scroll-margin não basta.
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = $(id);
      if (!target) return;
      event.preventDefault();
      const headerHeight = $('.site-header')?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 10;
      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
      history.replaceState(null, '', id);
    });
  });
})();
