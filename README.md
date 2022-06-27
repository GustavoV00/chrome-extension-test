# request-to-server

Pega uma guia por vez, conforme o usuário vai mudando de guia ou clicando em novos links.

## Como usar

É necessário instalar a extensão em chrome://extensions.
E rodar um servidor local. No diretório server/ possui um servidor feito em python e flask que roda no localhost:5000. Todas as tabs que o usuário acessa, são enviadas para http://localhost:5000/tabs e então são salvas em uma lista, que será enviado para um servidor remoto mais tarde.

É necessário instalar as dependencias do projeto, `pip install flask`, `pip install validators`, `pip install flask-cors`.

É necessário ter uma váriavel de ambiente chamada FLASK_APP. export FLASK_APP=index.py

`flask run`

para rodar o server.
