import axios from "axios";

export default class Api {
  constructor() {
    //Api.API_URL = 'http://revive-api.hbpz.pw';
    Api.API_URL = 'http://revive-laravel-server.xyz';
  }

  async test() {
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
      crossdomain: true
    };
    let response = await axios.get(Api.API_URL + '/test', config)
        .then(function (response) {
          // handle success
          console.log("response", response);
          return response;
        });
    return response;
  }
}