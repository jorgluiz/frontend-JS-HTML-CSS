// FUNÇÃO SUBMIT enviar form para o servidor

let form = document.querySelector('.flex-row-form')

form.addEventListener('submit', async e => {
    e.preventDefault()


    const formValue = {
        name: document.querySelector('.input-name'),
        nascimento: document.querySelector('.input-nasc'),
        mae: document.querySelector('.input-mae'),
        sus: document.querySelector('.input-sus'),
        cep: document.querySelector('.input-cep'),
        bairro: document.querySelector('.input-bairro'),
        endereco: document.querySelector('.input-endereco'),
        sexo: document.querySelector('.input-sexo'),
        dataemissao: document.querySelector('.input-emissao'),
        rg: document.querySelector('.input-rg'),
        cpf: document.querySelector('.input-cpf'),
        cidade: document.querySelector('.input-cidade'),
        uf: document.querySelector('.input-uf'),
        fone: document.querySelector('.input-fone'),
        descricao: document.querySelector('.input-descricao'),
    }

    console.log(formValue.cpf.value)
    //segundo parâmtro do Fetch
    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            'Authorization': 'bearer ' + localStorage.getItem('token')
        },

        body: JSON.stringify({
            name: formValue.name.value,
            nascimento: formValue.nascimento.value,
            mae: formValue.mae.value,
            sus: formValue.sus.value,
            cep: formValue.cep.value,
            bairro: formValue.bairro.value,
            endereco: formValue.endereco.value,
            sexo: formValue.sexo.value,
            dataemissao: formValue.dataemissao.value,
            rg: formValue.rg.value,
            cpf: formValue.cpf.value.trim(),
            cidade: formValue.cidade.value,
            uf: formValue.uf.value,
            fone: formValue.fone.value,
            descricao: formValue.descricao.value,
        })
    }

    const prontuarioUrl = 'http://localhost:3000/prontuarios'

    fetch(prontuarioUrl, options)
        .then(() => {
            alert('prontuario enviado com sucesso')
            // document.querySelector('.reset-form')//.reset()
            // const result = document.getElementById('result')
            location.reload(true)
        })
        .catch(e => {
            console.log(result)
            result.innerHTML = e
        })
})