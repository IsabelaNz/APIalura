var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json')
    .then(resposta => resposta.json())
    .then(r => {
        if (r.erro) {
            throw Error('esse cep não existe');
        } else {
            console.log(r);
        }
    })
    .catch(erro => console.log(erro))
    .finally(() => console.log('processamento concluído'));

console.log(consultaCEP);
