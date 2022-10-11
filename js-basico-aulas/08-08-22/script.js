
do{
    nota1 = parseFloat(prompt("Nota 1 (entre 0 e 50)"));
} while(nota1 <0.0 || nota1>50.0 || isNaN(nota1) || nota1 == null);

do{
    nota2 =  parseFloat(prompt("Nota 2 (entre 0 e 50)"));
} while(nota2 <0.0 || nota2>50.0 || isNaN(nota2) || nota2 == null);

    notaFinal = nota1 + nota2;
    document.write(`<p>Nota Final: ${notaFinal.toFixed(2)}</p>`);
    if((nota1 + nota2) >= 60.0){
        document.write(`<p>Situação: <span style="color:blue">APROVADO</span></>`);
        media = notaFinal/2.0;
        document.write(`<p>Nota média entre os bimestres: ${media.toFixed(2)} pontos</p>`);
    } else {
        document.write(`<p>Situação: <span style="color:red">REPROVADO</span></p>`);
        faltam = 60.0 -notaFinal;
        document.write(`<p>Faltaram ${faltam} pontos para ser aprovado</p>`);
        media = notaFinal/2.0;
        document.write(`<p>Nota média entre os bimestres: ${media.toFixed(2)} pontos</p>`);
}