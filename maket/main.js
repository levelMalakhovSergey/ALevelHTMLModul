$('.scrollto').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 11370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});