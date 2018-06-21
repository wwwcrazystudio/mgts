/*----------------------------------------------------*/
/*  Open Search Input
/*----------------------------------------------------*/
(function() {
  new UISearch( document.getElementById( 'sb-search' ) );
})();


/*----------------------------------------------------*/
/*  Menu
/*----------------------------------------------------*/
$(document).ready(function() {
  var menuIcon = $(".site-header__menu-icon");
  var nav = $(".nav--primary");
  var link = $('.nav--primary a');

  menuIcon.click(function() {
    menuIcon.toggleClass("site-header__menu-icon--close-x");
    nav.slideToggle(300, function() {
      if($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    }).toggleClass("nav--primary--is-visible");
  });

  link.click(function() {
    if(nav.hasClass('nav--primary--is-visible')) {
      menuIcon.toggleClass("site-header__menu-icon--close-x");
      nav.removeClass('nav--primary--is-visible').slideToggle(300);
    }
  });
});