$(document).ready(function () {
    $("#inicio").load("paginas/html/informacion_inicial.html");

    $('#nav-inicio').click(function (event) {
        event.preventDefault();
        $("#inicio").load("paginas/html/informacion_inicial.html");
    });

    $('#nav-definiciones-html').click(function (event) {
        event.preventDefault();
        $("#inicio").load("paginas/html/definiciones_html.html");
    });

    $('#nav-elementos-html').click(function (event) {
        event.preventDefault();
        $("#inicio").load("paginas/html/elementos_html.html");
    });

    $('#nav-definiciones-css').click(function (event) {
        event.preventDefault();
        $("#inicio").load("paginas/css/definiciones_css.html");
    });

    $('#nav-propiedades-css').click(function (event) {
        event.preventDefault();
        $("#inicio").load("paginas/css/propiedades_css.html");
    });
});