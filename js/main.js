$(document).ready(function () {
    // Inicializa o carousel
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });
    
    // Aplica as máscaras
    $('#telefone').mask('(00)00000-0000');
    $('#cpf').mask('000.000.000-00', { reverse: true });
    $('#cep').mask('00000-000');
    
    // Inicializa a validação do formulário
    $('#form').validate({
        rules: {
            nome: { required: true },
            email: { required: true, email: true },
            telefone: { required: true },
            cpf: { required: true },
            endereco: { required: true },
            cep: { required: true }
        },
        messages: {
            nome: "Por favor, insira seu nome completo.",
            email: "Por favor, insira um e-mail válido.",
            telefone: "Por favor, insira seu telefone.",
            cpf: "Por favor, insira seu CPF.",
            endereco: "Por favor, insira seu endereço completo.",
            cep: "Por favor, insira seu CEP."
        },
        submitHandler: function (form) {
            alert('Sua requisição foi enviada para análise, parabéns pela aquisição!');
            form.reset();
        },
        invalidHandler: function(event, validator) {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });
    
    // Código para dropdown (ativa via clique)
    $('.dropbtn').on('click', function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });
});