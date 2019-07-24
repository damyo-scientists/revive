import axios from "axios";

const API_URL = 'http://revive-api.hbpz.pw/api';

//const API_URL = 'http://revive-laravel-server.xyz/api';

async function signIn(userId, password) {
  console.log("user_id", userId);
  let login = await axios.post(API_URL + '/sign-in', {
    'user_id': userId,
    'password': password
  });

  return login;
}

async function signUp(userId, password) {
  console.log("user_id", userId);
  let login = await axios.post(API_URL + '/sign-up', {
    'user_id': userId,
    'password': password
  });

  console.log("login", login);

  return login;
}

async function createSlotData(userId, slotNumber) {
  console.log("userId", userId);
  console.log("slotNumber", slotNumber);
  let result = await axios.post(API_URL + '/slots', {
    'userId': userId,
    'slotNumber': slotNumber
  });

  console.log(result);
  return result;
}

async function saveSlotData(userId, slotNumber, slotData) {
  console.log(slotData);
  let result = await axios.put(API_URL + '/slots', {
    'userId': userId,
    'slotNumber': slotNumber,
    'data': slotData
  });

  console.log(result);
  return result;
}

async function loadSlotData(userId, slotNumber) {
  let result;
  try {
    console.log(userId);
    result = await axios.get(API_URL + '/slots', {
      params: {
        'userId': userId,
        'slotNumber': slotNumber
      }
    });
  } catch (e) {
    alert('로드중 에러가 발생했습니다.');
    console.log("error", e);
  }

  console.log(result);
  return result;
}

async function createEnvData(userId) {
  let result = await axios.put(API_URL + '/slots', {})
}

export {signIn, signUp, createSlotData, loadSlotData, saveSlotData};