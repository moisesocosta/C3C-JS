const identificador = (a, b, c) => {
    a = parseInt(document.formulario.ladoa.value);
    b = parseInt(document.formulario.ladob.value);
    c = parseInt(document.formulario.ladoc.value);
    var res;

    if((a == b) && (b == c)){
        res = "Equilátero";
    }else if((a != b) && (a != c) && (b != c)){
        res = "Escaleno";
    }else{
        res = "Isósceles";
    }

    document.formulario.saida.value = res;
}