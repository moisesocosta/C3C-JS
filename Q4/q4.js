let num = [];
function luidyMoura(entrada) {
    entrada = parseInt(entrada);
    while (num.length > 0) {
        num.shift();
    }
    let sequencia;
    for (let i = 1; i <= entrada; i++, num.push(sequencia)) {
        sequencia = "";
        if (i % 5 == 0){
            sequencia += "Luidy";
        }
        if (i % 9 == 0){
            sequencia += "Moura";
        }
        if (i % 5 != 0 && i % 9 != 0){
            sequencia = i;
        } 
    }
    document.getElementById("entrada").innerHTML = num;
}