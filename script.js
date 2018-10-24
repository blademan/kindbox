$(document).ready(function(){
    $('.header-contacts__button').on("click", function(){
        $('.overlay').show();
    });
    $('.popup-close').on("click", function(){
        $('.overlay').hide();
    });
});


$(document).ready(function(){
    $('#my').on("click", function(){
        $('.overlay').show();
    });
    $('.popup-close').on("click", function(){
        $('.overlay').hide();
    });
});

$(document).ready(function(){
    $('.btn-modal').on("click", function(){
        $('.overlay').show();
    });
    $('.popup-close').on("click", function(){
        $('.overlay').hide();
    });
});



//slaider

$("a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
});


