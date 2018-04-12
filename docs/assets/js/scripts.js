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

    if (label && opened_text && closed_text) {
      label.textContent = closed_text;
    }

    button.addEventListener('click', function () {
      var is_expanded = button.getAttribute('aria-expanded') == 'true' ? true : false;

      if (label && opened_text && closed_text) {
        label.textContent = is_expanded ? closed_text : opened_text;
      }

      button.setAttribute('aria-expanded', !is_expanded + '');
      block.setAttribute('aria-hidden', is_expanded + '');

      if (is_expanded) {
        block.removeAttribute('tabindex');
      } else {
        block.setAttribute('tabindex', '-1');
        block.focus();
      }
    });
  });
};

hideWidgetsTemporarily();

document.addEventListener('DOMContentLoaded', function () {
  setCollapsible();
});
