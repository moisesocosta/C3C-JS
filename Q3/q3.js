function arredondarNota(nota) {
    let status = "";
    let notaFormatada = "";
    nota = parseInt(nota);
    if (nota >= 38) {
        if (nota % 5 >= 3) {
            notaFormatada = nota + 5 - (nota % 5);
            alert(notaFormatada);
        }
        if (nota >= 40) {
            status = "Aprovado";
            alert(status);
        }
    }else{
        status = "Reprovado";
    }
}