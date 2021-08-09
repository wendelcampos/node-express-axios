const axios = require('axios');

class Pagarme{
    static compra(params){
       return axios.post(
            'https://api.pagar.me/1/transactions', 
            params,
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        );
    }

    static captura(paymentId, amount){
        return axios.post(
            'https://api.pagar.me/1/transactions/' + paymentId + '/capture', 
            {
                amount: amount,
                api_key: 'ak_test_xjORSBHvp7PP57asZ4pV7QXote6R7X'
            },
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        );
    }

    static consulta(paymentId){
      return axios.get(
          'https://api.pagar.me/1/transactions/' + paymentId,
          {
            params: {
                "api_key": 'ak_test_xjORSBHvp7PP57asZ4pV7QXote6R7X'
            },
            headers: {
                'content-type': 'application/json'
                
            }
          }
        );
    }
}

module.exports = Pagarme;