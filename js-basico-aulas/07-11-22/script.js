function conferir(){
    var valor = document.getElementById("txtValor").value
    //Padrao para telefone:98748-9874 ou 8748-9874
    //var padrao = /^\d{4,5}-\d{4}$/

    //Padrão deve começar com no mínimo dois dígitos
    //var padrao = /^\d\d/

    //Padrão deve terminar com 2 dígitos
    //var padrao = /\d{2}$/

    //Padrão deve ter exatamente 2 dígito
    //var padrao = /^\d{2}$/

    //Padrão para CEP
    //var padrao = /^\d{2}\.\d{3}-\d{3}$/

    //Padrão para telefone fixo ou celular com DDD (34)98748-9874 ou (34)8748-9874 ou (034)98748-9874 ou (034)8748-9874
    //var padrao = /^\(\d{2,3}\)\d{4,5}-\d{4}$/

    //Padrão para validar número de matrícula.Ex: TSPI-1234, onde TSPI poderia ser LCO ou MKT, seguido de um traço + 4 a 5 números
    //var padrao = /^(TSPI|LCO|MKT)-\d{4,5}$/

    //Se só tivesse começo como TSPI
    //var padrao = /^TSPI-\d{4,5}$/

    //Padrão com espaços: IFTM Uberlândia Centro ou IFTM   Uberlândia    Centro
    //var padrao = /^IFTM\s{1,5}Uberlândia\s{1,5}Centro$/

    //Padrão alfanumérico aceitar de 3 a 10 (letras e números)
    //var padrao = /^\w{3,10}$/

    //Padrão para verificar todas as palavras compostas por mais um ou mais das seguintes letras: AEIOUBCDF
    //var padrao = /^[aeioubcdf]{2,15}$/
    //var padrao = /^[aeioubcdf]{2,}$/

    //Letra maiuscula é o oposto da letra minúscula \D (tudo menos dígitos) \W (tudo menos alfanuméricos)

    //se colocar [^aasasa] está pegando todas as letras menos essas especificadas - negação

    //Padrão slide 2
    //Ex: IFTm-12345-TSPI:7L

    var padrao = /^(I|i)(F|f)(T|t)(M|m)-\d{4,6}-(TSPI|LCO|MKT):\d[A-Z]$/

    if(padrao.test(valor))
        alert("Padrão válido")
    else
        alert("Padrão inválido")
}