from flask import Flask, request, jsonify
from flask_cors import CORS
import validators


app = Flask(__name__)
# Enable Access-Control-Allow-Origin for all domains on all routes
CORS(app)

packetOfTabs = []

# Essa função serve para evitar a duplicidade do onUpdated. 
# O evento onUpdated é acionado para cada iFrame que tem na página, 
# Por causa disso é enviado vários requests para o servidor. 
# Porém isso só acontece quando o usuário atualiza a guia atual.
# Quando a guia é mudado utilizando o ctrl+tab, ctrl+shift+tab ou
# Clicando com o mouse mesmo, então o evendo onActivated é acionado. 
# E a parte que verifica duplicidade não é acionada. 
def verifyMultipleInserts(data):
    lastIndex = len(packetOfTabs) - 1
    if(packetOfTabs):
        print(packetOfTabs)
        if(data == packetOfTabs[lastIndex]):
            return

    packetOfTabs.append(data)
    return

@app.route("/tabs", methods=['POST'])
def tabs_route():
    data = request.json
    print(data)
    url = validators.url(data)
    
    # If not be a url
    if(not url):
        verifyMultipleInserts(data)
    
    print(packetOfTabs)
    return jsonify({'sucess': ''}), 200