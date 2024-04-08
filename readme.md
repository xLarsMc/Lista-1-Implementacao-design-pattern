Padrões de projeto escolhido:
Observer e Facade. Ambos os padrões foram escolhidos de forma a terem sinergia um com os outros.
O Uso de muitos objetos também influenciou na escolha do Observer. Com isso, quando alguma classe sofre alteração ou qualquer mudança, a classe observadora vê essa mudança e notifica a 
aplicação e, no nosso caso, o usuário por meio da interface utilizada. Já a facade é usada para aglomerar todos esses objetos e facilitar o uso dos mesmos para o usuário final, fazendo com que ele não precise entender todos os objetos que estão por de trás da aplicação.

Documentação:
- Projeto possuí duas pastas: Classes e Mainly
- Projeto possuí arquivos .json utilizado para organização de módulos NODE e pasta read que estão
fora de uma pasta específica.
- Pasta classes: Possuí todas as classes utlizadas para o funcionamento da aplicação, sendo elas:
Contato.js (criação da classe contato), Observer.js (criação da classe observadora) e 
GerenciadorContato.js (classe que gerencia os contatos e os observadores, adicionando, atualizando, removendo, listando e buscando-os).
- Pasta mainly: Possuí o arquivo main.js, onde é gerado a parte interativa do usuário com a 
aplicação através de uma interface simples CLI, com a entrada de dados sendo feitas a partir da
utilização de métodos escolhidos pelo usuário, de 1 a 4, com 5 para sair da aplicação - onde de 1 a 4, há funções de adicionar, remover, listar e buscar, que funcionam através da classe GerenciadorContato.