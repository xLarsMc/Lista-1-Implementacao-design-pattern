const Contato = require("./Contato");

class GerenciadorContato{
    constructor(){
        this.contatos = [];
        this.observers = [];
    }
    //Adiociona um novo contato ao nosso array de contatos.
    add(name, cel, email) {
        let newCtc = new Contato(name, cel, email);
        this.contatos.push(newCtc);
        this.showObs();
    }
    //Encontra um contato em específico através do email.
    findCtc(email){
        return this.contatos.find(contato => contato.email == email);
    }
    //Remove um contato através de um index.
    remove(index){
        if (this.contatos.length == 0) {
            console.log("Contato não encontrado!");
            return;
          }
          else if (index > -1){
            this.contatos.splice(this.contatos.indexOf(index), 1);
            this.notifyObservers();
          }
    }
    //Retorna a lista de todos os contatos existentes até então.
    list(){
        return this.contatos;
    }
    //Adiciona um observador.
    adcObs(observer){
        this.observers.push(observer);
    }
    //Dá um update nos observadores.
    showObs(){
        this.observers.forEach(ob => {
            ob.upt(this.contatos);
        })
    }
}

module.exports = GerenciadorContato;