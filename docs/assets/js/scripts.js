'use strict';

var hideWidgetsTemporarily = function hideWidgetsTemporarily() {
  var html = document.getElementsByTagName('html')[0];

  html.classList.add('hide-widgets');

  document.addEventListener('DOMContentLoaded', function () {
    html.classList.remove('hide-widgets');
  });
};

var setCollapsible = function setCollapsible() {
  var buttons = document.querySelectorAll('.collapsible-button');

  Array.prototype.forEach.call(buttons, function (button) {
    var id = button.getAttribute('aria-controls');
    var block = document.getElementById(id);

    button.setAttribute('aria-expanded', 'false');
    block.setAttribute('aria-hidden', 'true');

    var label = button.querySelector('.collapsible-button__label');
    var opened_text = button.getAttribute('data-collapsible-opened-label-text');
    var closed_text = button.getAttribute('data-collapsible-closed-label-text');

    label.textContent = closed_text;

    button.addEventListener('click', function () {
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
};

hideWidgetsTemporarily();

document.addEventListener('DOMContentLoaded', function () {
  setCollapsible();
});
