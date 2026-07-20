(() => {
  'use strict';

  const progress = document.getElementById('progress');
  const backTop = document.getElementById('backTop');
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    if (backTop) backTop.classList.toggle('visible', window.scrollY > 650);
  };

  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuBtn.textContent = open ? 'Fechar' : 'Menu';
      menuBtn.setAttribute('aria-expanded', String(open));
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuBtn.textContent = 'Menu';
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach((item) => revealObserver.observe(item));
  } else {
    reveals.forEach((item) => item.classList.add('visible'));
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.nav a[href^="#"], .mobile-menu a[href^="#"]')];

  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: '-42% 0px -50% 0px' });

    sections.forEach((section) => navObserver.observe(section));
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Gerador de link para a página da Rede Conecta.
  const partnerCode = document.getElementById('partnerCode');
  const generateButton = document.getElementById('generatePartnerLink');
  const generatedLink = document.getElementById('generatedLink');
  const copyButton = document.getElementById('copyPartnerLink');
  const shareLink = document.getElementById('sharePartnerLink');
  let currentPartnerLink = '';

  const normalizeCode = (value) => value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .replace(/[^A-Z0-9_-]/g, '')
    .slice(0, 40);

  const showLink = () => {
    if (!partnerCode || !generatedLink || !copyButton || !shareLink) return;

    const code = normalizeCode(partnerCode.value.trim());
    if (!code) {
      generatedLink.textContent = 'Informe um código válido para gerar o link.';
      generatedLink.classList.add('visible');
      copyButton.disabled = true;
      shareLink.setAttribute('aria-disabled', 'true');
      shareLink.href = '#';
      currentPartnerLink = '';
      return;
    }

    partnerCode.value = code;
    const url = new URL('https://diagnostico-pi-one.vercel.app/');
    url.searchParams.set('parceiro', code);
    url.searchParams.set('utm_source', 'rede_conecta');
    url.searchParams.set('utm_medium', 'indicacao');
    url.searchParams.set('utm_campaign', 'diagnostico_conecta');
    currentPartnerLink = url.toString();

    generatedLink.textContent = currentPartnerLink;
    generatedLink.classList.add('visible');
    copyButton.disabled = false;
    shareLink.removeAttribute('aria-disabled');
    shareLink.href = `https://wa.me/?text=${encodeURIComponent(`Conheci um diagnóstico executivo da Cruz & Farias que ajuda empresas a identificar retrabalho, controles paralelos e baixa utilização dos sistemas. Acredito que pode ser útil para sua operação: ${currentPartnerLink}`)}`;
  };

  if (generateButton) generateButton.addEventListener('click', showLink);
  if (partnerCode) {
    partnerCode.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        showLink();
      }
    });
  }

  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      if (!currentPartnerLink) return;
      try {
        await navigator.clipboard.writeText(currentPartnerLink);
        const original = copyButton.textContent;
        copyButton.textContent = 'Link copiado';
        setTimeout(() => { copyButton.textContent = original; }, 1800);
      } catch {
        window.prompt('Copie o link abaixo:', currentPartnerLink);
      }
    });
  }
})();
