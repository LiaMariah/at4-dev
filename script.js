
function calcular() {
    //valores
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    
    //verificar os números
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = "Digite números válidos!";
        return;
    }
    
    let resultado;
    
    //o cálculo
    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('resultado').textContent = "Não pode dividir por zero!";
                return;
            }
            resultado = num1 / num2;
            break;
    }
    
    //resultado
    document.getElementById('resultado').textContent = "RESULTADO: " + resultado;
}