function generateNumber() {
    const minInput = document.querySelector(".input-1").value;
    const maxInput = document.querySelector(".input-2").value;
    const resultadoDiv = document.getElementById("resultado");

    const min = parseInt(minInput);
    const max = parseInt(maxInput);

        
    if (isNaN(min) || isNaN(max)) {
        resultadoDiv.innerText = "Por favor, insira valores numéricos válidos.";
        return;
    }

    if (min >= max) {
        resultadoDiv.innerText = "O valor mínimo deve ser menor que o valor máximo.";
        return;
    }

    
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    resultadoDiv.innerText = `Número gerado: ${randomNumber}`;
}