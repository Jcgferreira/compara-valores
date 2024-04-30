const form = document.getElementById('comp-valores');

form.addEventListener('submit',function(e) {
    e.preventDefault();
    
    const errorM = 'Insira os valores corretamente';
    const successM = 'Campos preenchidos corretamente';


    const menorN = document.getElementById('menor-valor');
    const maiorN = document.getElementById('maior-valor');

    const numA = Number(menorN.value);
    const numB = Number(maiorN.value);

    

    if(numA >= numB || numA == '' || numB == ''){
        const numerFalso = document.querySelector('.error-message');
        numerFalso.innerHTML = errorM;
        numerFalso.style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    }

    else{
        const numerVerdadeiro = document.querySelector('.success-message');
        numerVerdadeiro.innerHTML = successM;
        numerVerdadeiro.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
    }
});
