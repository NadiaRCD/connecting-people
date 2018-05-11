/* funcion despliegue sidebar */
$('.header-button_burger').click(function() {
    $('.sidebar_background').toggleClass('active');  
})

/* cierra el sidebar cuando se selecciona un item */
$("li[class^='list-button']").click(function() {
    $('.sidebar_background').removeClass('active')
})

/* Acordeon */

$('.accordion').on('click','.accordion-header',function(){
    var t = $(this);
    t.toggleClass('active-header')
      var tp = t.next();
      var p = t.parent().siblings().find('.accordion-body');
      tp.slideToggle();
    p.slideUp();
  });