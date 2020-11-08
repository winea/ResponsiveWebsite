$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });
    /* Add Bootstrap scrollspy para qdo clicar no navbar ele ir para local na pagina */
    $('body').scrollspy({
        target: '.navbar',

        //qdo clicava nos links navbar ele indicava errado o botao que estava devido ao -100 adicionado abaixo
        //como ajuste fazer o seguinte
        offset:160
    });

    /* smooth scrooling, ira usar o jquery.easing.1.3.js importado*/
    /* selecionando classes nav a e seta (links), qdo clicar em um link, vamos animar o html e body
    selecionamos estes elementos e primeiro paramos todas as animações stop()
    em seguida criamos nossa animação, o scrollTop ira determinar onde fica o inicio da pagina
    o href ira indicar o id para saber o destino, ira durar 1500 segundos, o easeInOutExpo e a animação*/
    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100 //esse -100 e o tamanho do menu
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // parallax scrolling with stellar.js
    $(window).stellar();

    //para iniciar o wow
    new WOW().init();

    // initialize NanoGallery
    $(document).ready(function () {
        $("#nanoGallery3").nanoGallery();
    });

});
