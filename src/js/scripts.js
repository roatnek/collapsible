'use strict';

const hideWidgetsTemporarily = () => {
  const html = document.getElementsByTagName('html')[0];

  html.classList.add('hide-widgets');

  document.addEventListener('DOMContentLoaded', () => {
    html.classList.remove('hide-widgets');
  });
}

const setCollapsible = () => {
  const buttons = document.querySelectorAll('.collapsible-button');

  buttons.forEach((button) => {
    const id    = button.getAttribute('aria-controls');
    const block = document.getElementById(id);

    button.setAttribute('aria-expanded', 'false');
    block.setAttribute('aria-hidden', 'true');

    const label       = button.querySelector('.collapsible-button__label');
    const opened_text = button.getAttribute('data-collapsible-opened-label-text');
    const closed_text = button.getAttribute('data-collapsible-closed-label-text');

    label.textContent = closed_text;

    button.addEventListener('click', () => {
      if (button.getAttribute('aria-expanded') == 'false') {
        label.textContent = opened_text;
        button.setAttribute('aria-expanded', 'true');
        block.setAttribute('aria-hidden', 'false');
        block.setAttribute('tabindex', '-1');
        block.focus();
      } else {
        label.textContent = closed_text;
        button.setAttribute('aria-expanded', 'false');
        block.setAttribute('aria-hidden', 'true');
        block.removeAttribute('tabindex');
      }
    });
  });
}

hideWidgetsTemporarily();

document.addEventListener('DOMContentLoaded', () => {
  setCollapsible();
});
