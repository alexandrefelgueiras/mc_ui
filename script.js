/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
APRESENTAÇAO DE CAMPOS CALCULADOS NOS FORMULARIOS
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/


let margemAbs = document.getElementById('margem_abs');
let margemRel = document.getElementById('margem_rel');
let preco = document.getElementById('preco');
let custo = document.getElementById('custo');

preco.addEventListener('input', calcularMargens);
custo.addEventListener('input', calcularMargens);

function calcularMargens() {
    const precoValor = preco.valueAsNumber || 0;
    const custoValor = custo.valueAsNumber || 0;

    const margemAbsValor = precoValor - custoValor;
    const margemRelValor = (margemAbsValor / precoValor) * 100;

    margemAbs.value = margemAbsValor.toFixed(2);
    margemRel.value = margemRelValor.toFixed(2);
}

/*
=========================================================================
TRATAMENTO DOS DADOS ENVIADOS PELO FORMULARIO NOVO ITEM
=========================================================================
*/

const form = document.getElementById('form-novo');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Define dados de entrada que serão utilizados como entrada no banco de dados
    const dados_entrada = ['cliente', 'descricao', 'proposta', 'item', 'preco', 'custo'];

    const formData = new FormData(form);
    const formObject = {};



    // Preencher o objeto apenas com os dados de entrada
    formData.forEach((value, key) => {
        if (dados_entrada.includes(key)) {
            if (['proposta', 'item'].includes(key)) { formObject[key] = parseInt(value); } else if (['preco', 'custo'].includes(key)) { formObject[key] = parseFloat(value).toFixed(2); } else { formObject[key] = value; }
        }
    });

    const url = 'http://127.0.0.1:5000/margemcerta';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formObject),
        });

        if (response.ok) {
            //Lê o atributo data-redirect e redireciona para a url especificada
            const redirectUrl = form.getAttribute('data-redirect');
            window.location = redirectUrl;
        }

    } catch (error) {
        console.error('Erro:', error);
    }
});

/*
=========================================================================
TRATAMENTO DA REQUISIÇAO DELETE
=========================================================================
*/
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-deletar');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const formObject = {};

        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        const url = `http://127.0.0.1:5000/margemcerta/${formObject.id}`;

        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject),
            });
            const responseData = await response.json();
            if (responseData.Sucesso) {
                //Lê o atributo data-redirect e redireciona para a url especificada
                const redirectUrl = form.getAttribute('data-redirect');
                window.location = redirectUrl;
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    });
});

