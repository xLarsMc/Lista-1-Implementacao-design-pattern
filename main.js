const GerenciadorContato = require("./Classes/GerenciadorContato");
const Observer = require("./Classes/Observer")
const readLine = require('readline');

const read = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const observer = new Observer();
const gerenci = new GerenciadorContato();
gerenci.adcObs(observer);

function main() {
    console.log("\nEscolha uma opção:");
    console.log("1 - Adicionar Contato");
    console.log("2 - Remover Contato");
    console.log("3 - Buscar Contato");
    console.log("4 - Listar Contatos");
    console.log("5 - Exit");


    //Organização para a entrada do usuário.
    read.question("Opção: ", function(op) {
        switch(op){
            //Caso 1: Usuário deseja adicionar um contato.
            case '1':
                read.question("Name: ", function(name) {
                    read.question("Cel: ", function(cel) {
                        read.question("Email: ", function(email){
                            gerenci.add(name, cel, email);
                            console.log("Adicionado um novo contato!");
                            main();
                        })
                    })
                })
                break;
            //Caso 2: Usuário deseja remover um contato.
            case '2':
                read.question("Digite o índice do contato que deseja excluir: ", function (index){
                    gerenci.remove(index);
                    main();
                })
                break;
            //Caso 1: Usuário deseja buscar um contato em específico.
            case '3':
                read.question("Email do contato que deseja buscar: ", function(email){
                    const contato = gerenci.findCtc(email);
                    if(contato){
                        console.log(`${contato.name} - ${contato.cel} - ${contato.email}.`)
                    }
                    else{
                        console.log("Este email não está associado a nenhum contato.")
                    }
                    main();
                })
                break;
            //Caso 1: Usuário deseja listar todos os contatos.
            case '4':
                const contatos = gerenci.list();
                contatos.forEach(contato => {
                    console.log(`${contato.name} - ${contato.cel} - ${contato.email}.`)
                })
                main();
                break;
            //Caso 1: Usuário deseja sair da aplicação.
            case '5':
                console.log("Tchauu!");
                read.close()
                break;
            //Caso default: Usuário deigitou um número diferente de 1 a 5.
            default:
                console.log("Digite uma opção existente!")
                main();
        }
    })
}
main();