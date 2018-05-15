/* funcion despliegue sidebar */
$('.header-button_burger').click(function() {
    $('.sidebar_background').toggleClass('active');  
})

/* cierra el sidebar cuando se selecciona un item */
$("li[class^='buttons-sidebar']").click(function() {
    $('.sidebar_background').removeClass('active')
})

/* Acordeon */

$('.accordion').on('click','.accordion-header-orders',function(){
    var t = $(this);
    $('.accordion-header-orders').removeClass('active-accordion-order')
    t.addClass('active-accordion-order')
      var tp = t.next();
      var p = t.parent().siblings().find('.accordion-body-orders');
      tp.slideToggle();
		p.slideUp();
    $('.open-accordion').addClass('rotate')
  });

  $('.accordion_exam').on('click','.accordion-header-exam',function(){
    var t = $(this);
    $('.accordion-header-exam').removeClass('active-accordion-exam')
    t.addClass('active-accordion-exam')
      var tp = t.next();
      var p = t.parent().siblings().find('.accordion-body-exam');
      tp.slideToggle();
    p.slideUp();
  });


/* Tabs */

$('.tab-button_todo').click(function() {
    $('.container-inner_todo').show()
    $('.container-inner_ready').hide()
    $('.tab-button_todo').addClass('active-tab')
    $('.tab-button_ready').removeClass('active-tab')
})

$('.tab-button_ready').click(function() {
    $('.container-inner_todo').hide()
    $('.container-inner_ready').show()
    $('.tab-button_todo').removeClass('active-tab')
    $('.tab-button_ready').addClass('active-tab')
})

/* Sort table */

$("#table-sort").stupidtable();