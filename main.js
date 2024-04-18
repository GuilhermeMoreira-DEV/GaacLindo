var degree = 1800;
var clicks = 0;

$(document).ready(function(){
    $('#spin').click(function(){
        clicks++;

        var newDegree = degree * clicks;
        totalDegree = newDegree;

        $('#roleta .sec').each(function(){
            var t = $(this);
            var noY = 0;

            var c = 0;
            var n = 0;
            var interval = setInterval(function(){
                c++;
                if(c === n){
                    clearInterval(interval);
                }
                var aoY = to.offset().top;
                $('#txt').html(aoY);

                if(aoY < 23.83){
                    $('#spin').addClass('spin');
                    setTimeout(function(){
                        $('#spin').removeClass('spin');

                    }, 100);
                }
            }, 10);

            $('#interno-roleta').css({
                'transform': 'rotate(' + totalDegree + 'deg)',
                'transition-duration': '8s' // Ajuste o tempo de duração da animação para 8 segundos
            });
            noY = t.offset().top;
        });

        // Exibir pop-up após 8 segundos
        setTimeout(function() {
            $('#popup').fadeIn();
        }, 8000); // 8000 milissegundos = 8 segundos
    });

    // Fechar o pop-up quando clicar no botão de fechar
    $('#close').click(function(){
        $('#popup').fadeOut();
    });
});
