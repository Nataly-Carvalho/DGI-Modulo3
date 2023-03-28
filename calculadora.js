function calcularSalario(){
    const Htrababalhadas = document.getElementById("horas-trabalhadas").value;
    const salarioH = document.getElementById("salario-hora").value;
    const diasT = document.getElementById("DiasTrabalhados").value;
    const salarioTotal = Htrababalhadas * salarioH *diasT;

    const resultado = document.getElementById("Resultado");
    resultado.innerHTML = `Salario total: R$ ${salarioTotal.toFixed(2)}`;
}