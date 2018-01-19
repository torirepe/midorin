$(document).ready(function(){
  $('[data-f="c"]').fullpage({
    scrollOverflow: true,
    sectionSelector: '[data-f="s"]',
    anchors: ['index','message', 'profile', 'agenda'],
    menu: '#header'
  });
});
