function calcularSalario(){
    const ganhoMes = document.getElementById("horas-trabalhadas").value;
    const horasDias = document.getElementById("salario-hora").value;
    const diasMes = document.getElementById("DiasTrabalhados").value;
    const salarioTotal = ganhoMes /(horasDias *diasMes);

    const resultado = document.getElementById("Resultado");
    resultado.innerHTML = `Seu valor por hora: R$ ${salarioTotal.toFixed(2)}`;
}
