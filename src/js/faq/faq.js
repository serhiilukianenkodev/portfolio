import Accordion from 'accordion-js';

const accordeon = new Accordion('.accordion-container', {
  //   duration: 500,
  showMultiple: true,
  elementClass: 'faq-item',
  triggerClass: 'faq-question',
  panelClass: 'faq-description',
  activeClass: 'is-active',
});
