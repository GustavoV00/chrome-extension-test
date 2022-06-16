# request-to-server

Pega todas as guias abertas que o usuário está utilizando e envia para um servidor local.

## Como usar
É necessário carregar a extensão em chrome://extensions/ e rodar um servidor local na máquina, 
nesse mesmo diretório em simpleServer/ tem um servidor básico utilizando o express. Toda vez que a extensão pega as guias dos usuários, ela envia para o ip definido no extension/background.js e envia para o ip definido em simpleServer/index.js na porta 8080. Para rodar o servidor basta rodar um npm install para instalar as dependências ("cors e express"). 

Cada requisição que chegar no lado do servidor, será deixado em logs/tabs.txt e caso tenha algum erro, o erro fica em logs/erro.txt
