var resultado = document.querySelector('div.resultado')
var txt_resultado = document.querySelector('div.txt_resultado')


function Calcular_imc() 
{
    var idade = document.getElementById('idade').value
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value

    var imc = peso / (altura*altura)
    var imc_arredondado = parseFloat(imc.toFixed(2))

    var peso_ideal_min = (altura * altura) * 18.5
    var peso_ideal_max = (altura * altura) * 24.9

    if (altura.length == 0 || peso.length == 0)
    {
        res.innerHTML = '[ERRO] Informações Erradas ou Incompatíveis'
    }
    
    else if (imc < 18.5)
    {
        txt_resultado.innerHTML = `<h4>Abaixo do peso</h4><br><p>De acordo com a OMS, seu IMC está abaixo do recomendado para a sua altura. Para atingir peso ideal, baseado na sua altura, você deve pesar entre <strong>${parseFloat(peso_ideal_min.toFixed(2))} kg</strong> e <strong>${parseFloat(peso_ideal_max.toFixed(2))} kg</strong></p>`
    }

    else if (imc >= 18.5 && imc <= 24.9)
    {
        txt_resultado.innerHTML = `<h4>Peso normal</h4><br><p>De acordo com a OMS, seu IMC está exatamente no recomendado para a sua altura. Você já está no seu peso ideal, que varia entre <strong>${parseFloat(peso_ideal_min.toFixed(2))} kg</strong> e <strong>${parseFloat(peso_ideal_max.toFixed(2))} kg</strong></p>`
    }

    else if (imc >= 25 && imc <= 29.9)
    {
        txt_resultado.innerHTML = `<h4>Sobrepeso</h4><br><p>De acordo com a OMS, seu IMC está acima do recomendado para a sua altura. Para atingir peso ideal, baseado na sua altura, você deve pesar entre <strong>${parseFloat(peso_ideal_min.toFixed(2))} kg</strong> e <strong>${parseFloat(peso_ideal_max.toFixed(2))} kg</strong></p>`
    }

    else if (imc >= 30 && imc <= 34.9)
    {
        txt_resultado.innerHTML = `<h4>Obesidade de Grau 1</h4><br><p>De acordo com a OMS, seu IMC está acima do recomendado para a sua altura. Para atingir peso ideal, baseado na sua altura, você deve pesar entre <strong>${parseFloat(peso_ideal_min.toFixed(2))} kg</strong> e <strong>${parseFloat(peso_ideal_max.toFixed(2))} kg</strong></p>`
    }

    else if (imc >= 35 && imc <= 39.9)
    {
        txt_resultado.innerHTML = `<h4>Obesidade de Grau 2</h4><br><p>De acordo com a OMS, seu IMC está acima do recomendado para a sua altura. Para atingir peso ideal, baseado na sua altura, você deve pesar entre <strong>${parseFloat(peso_ideal_min.toFixed(2))} kg</strong> e <strong>${parseFloat(peso_ideal_max.toFixed(2))} kg</strong></p>`
    }

    else if (imc >= 40)
    {
        txt_resultado.innerHTML = `<h4>Obesidade de Grau 3 ou Mórbida</h4><br><p>De acordo com a OMS, seu IMC está acima do recomendado para a sua altura. Para atingir peso ideal, baseado na sua altura, você deve pesar entre <strong>${parseFloat(peso_ideal_min.toFixed(2))} kg</strong> e <strong>${parseFloat(peso_ideal_max.toFixed(2))} kg</strong></p>'
        `
    }

    resultado.innerHTML = `<strong>${imc_arredondado}</strong>   -   Índice de Massa Corporal`

}