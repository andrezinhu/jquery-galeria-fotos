$(document).ready(function(){

    // Adição de eventos no jQuery

    // evento do botão Nova Imagem
    $("header button").click(function(){
        $("form").slideDown();
    })

    // evento do botão Cancelar
    $("#botao-cancelar").click(function(){
        $("form").slideUp();
    })

    // evento do botão Adiconar(submit) do formulario
    $("form").on("submit", function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>`
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000)
        $('#endereco-imagem-nova').val('');
    })
})