function calcularImc(){
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)

    let imc = peso / altura ** 2

    if (imc < 18.5){
        alert (`Seu IMC é: ${imc}. Você está abaixo do peso`)
    }else if(imc >= 18.5 &&  imc <= 24.9 ){
        alert (`Seu IMC é: ${imc}. Você está com o peso normal`)
    }else if(imc >= 25 &&  imc <= 29.9 ){
        alert (`Seu IMC é: ${imc}. Você está sobrepeso`)
    }else if(imc >= 30 ){
        alert (`Seu IMC é: ${imc}. Você está com obesidade`)
    }
}