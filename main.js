var degree = 1800;
var clicks = 0;

$(document).ready(function(){

    $('#spin').click(function(){
        clicks++;

        var newDegree = degree * clicks;
        // Remove a geração aleatória de graus extras
        // var extraDegree = Math.floor(Math.random()* (360 - 1 + 1)) +1;
        totalDegree = newDegree; // Apenas usa o novo grau, sem o aleatório

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
                console.log(aoY);

                if(aoY < 23.83){
                    console.log('<<<');
                    $('#spin').addClass('spin');
                    setTimeout(function(){
                        $('#spin').removeClass('spin');

                    },100);
                }
            },10);

            $('#interno-roleta').css({
                'transform': 'rotate(' + totalDegree + 'deg)'
            });
            noY = t.offset().top;
        });
    });
    $(document).ready(function(){
        $('#spin').click(function(){
            // Seu código existente para girar a roleta aqui...
    
            // Simulando o término do giro após algum tempo (você pode substituir isso pelo seu código real)
            setTimeout(function() {
                // Exibir pop-up após 2 segundos
                $('#popup').fadeIn();
            }, 7000); // 2000 milissegundos = 2 segundos
        });
    
        // Fechar o pop-up quando clicar no botão de fechar
        $('#close').click(function(){
            $('#popup').fadeOut();
        });
    });
    
});
