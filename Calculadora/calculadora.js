function calcularSalario(){
    const Htrababalhadas = document.getElementById("horas-trabalhadas").value;
    const salarioH = document.getElementById("salario-hora").value;
    const salarioTotal = Htrababalhadas * salarioH;

    const resultado = document.getElementById("Resultado");
    resultado.innerHTML = `Salario total: R$ ${salarioTotal.toFixed(2)}`;
}