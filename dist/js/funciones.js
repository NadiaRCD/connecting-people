/* funcion despliegue sidebar */
$('.header-button_burger').click(function() {
    $('.sidebar_background').toggleClass('active');  
})

/* cierra el sidebar cuando se selecciona un item */
$("li[class^='list-button']").click(function() {
    $('.sidebar_background').removeClass('active')
})

