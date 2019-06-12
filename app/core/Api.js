import axios from "axios";

const API_URL = 'http://revive-api.hbpz.pw/api';

async function signIn(user_id, password) {
  console.log("user_id", user_id);
  let login = await axios.post(API_URL + '/sign-in', {
    'user_id': user_id,
    'password': password
  });

  return login;
}

export {signIn};