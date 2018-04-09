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

  Array.prototype.forEach.call(buttons, (button) => {
    const id    = button.getAttribute('aria-controls');
    const block = document.getElementById(id);

    button.setAttribute('aria-expanded', 'false');
    block.setAttribute('aria-hidden', 'true');

    const label       = button.querySelector('.collapsible-button__label');
    const opened_text = button.getAttribute('data-collapsible-opened-label-text');
    const closed_text = button.getAttribute('data-collapsible-closed-label-text');

    if (label && opened_text && closed_text) {
      label.textContent = closed_text;
    }

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') == 'true' ? true : false;

      if (label && opened_text && closed_text) {
        label.textContent = isExpanded ? closed_text : opened_text;
      }

      button.setAttribute('aria-expanded', !isExpanded + '');
      block.setAttribute('aria-hidden', isExpanded + '');

      if (isExpanded) {
        block.removeAttribute('tabindex');
      } else {
        block.setAttribute('tabindex', '-1');
        block.focus();
      }
    });
  });
}

hideWidgetsTemporarily();

document.addEventListener('DOMContentLoaded', () => {
  setCollapsible();
});
