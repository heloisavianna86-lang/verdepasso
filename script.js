// Menu para telas pequenas: abre e fecha ao tocar no botão.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

// Fecha o menu depois de escolher uma seção da página.
navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
  });
});

// Mantém o ano do rodapé atualizado automaticamente.
document.querySelector('#year').textContent = new Date().getFullYear();

// Mostra a mensagem de boas-vindas dentro da página.
const welcomeButton = document.querySelector('.welcome-button');
const welcomeMessage = document.querySelector('#welcome-message');

welcomeButton.addEventListener('click', () => {
  welcomeMessage.hidden = false;
  welcomeButton.setAttribute('aria-expanded', 'true');
});

// Alterna a exibição do texto complementar.
const moreButton = document.querySelector('.more-button');
const welcomeExtra = document.querySelector('#welcome-extra');

moreButton.addEventListener('click', () => {
  const isExpanded = moreButton.getAttribute('aria-expanded') === 'true';
  welcomeExtra.hidden = isExpanded;
  moreButton.setAttribute('aria-expanded', String(!isExpanded));
  moreButton.textContent = isExpanded ? 'Mostrar mais' : 'Mostrar menos';
});

// Valida o formulário localmente; nenhum dado é enviado a um servidor.
const contactForm = document.querySelector('#contact-form');
const formFeedback = document.querySelector('#form-feedback');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactFields = [
  {
    input: document.querySelector('#visitor-name'),
    error: document.querySelector('#visitor-name-error'),
    isValid: (value) => value.length >= 3,
    errorMessage: 'Digite seu nome com pelo menos 3 caracteres.'
  },
  {
    input: document.querySelector('#visitor-email'),
    error: document.querySelector('#visitor-email-error'),
    isValid: (value) => emailPattern.test(value),
    errorMessage: 'Digite um e-mail válido, como voce@exemplo.com.'
  },
  {
    input: document.querySelector('#visitor-message'),
    error: document.querySelector('#visitor-message-error'),
    isValid: (value) => value.length >= 10,
    errorMessage: 'Escreva uma mensagem com pelo menos 10 caracteres.'
  }
];

function validateContactField(field) {
  const value = field.input.value.trim();
  const isValid = field.isValid(value);

  field.input.setAttribute('aria-invalid', String(!isValid));
  field.error.textContent = isValid ? '' : field.errorMessage;
  field.error.hidden = isValid;

  return isValid;
}

contactFields.forEach((field) => {
  field.input.addEventListener('input', () => {
    formFeedback.hidden = true;

    if (field.input.getAttribute('aria-invalid') === 'true') {
      validateContactField(field);
    }
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const isFormValid = contactFields.map(validateContactField).every(Boolean);

  if (!isFormValid) {
    formFeedback.hidden = true;
    contactFields.find((field) => field.input.getAttribute('aria-invalid') === 'true').input.focus();
    return;
  }

  const name = contactFields[0].input.value.trim();
  formFeedback.textContent = `Obrigado, ${name}! O formulário foi validado com sucesso. Nenhuma mensagem foi enviada.`;
  formFeedback.className = 'form-feedback form-field-full is-success';
  formFeedback.hidden = false;
});

// Revela elementos suavemente quando entram na área visível da página.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  document.body.classList.add('motion-ready');
  document.querySelectorAll('[data-reveal]').forEach((element) => {
    revealObserver.observe(element);
  });
}
