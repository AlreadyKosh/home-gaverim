$(".slider").slick({
    prevArrow: $("#arrowEsquerda"),
    nextArrow: $("#arrowDireita"),
});

$(".slider-dots").slick({
    arrows: false,
    dots: true,
    appendDots: $(".slick-slider-dots"),
    customPaging: function (slider, i) {
        return '<div class="dots" id=' + i + "><div class=ativo></div></div>";
    },
});
