class Observer {
    //Retorna visualmente toda vez que há um update no nosso array de contatos.
    upt(ctc){
        console.log("Mudança nos contatos:", ctc);
    }
}

module.exports = Observer;