import axios from 'axios';


const Api = axios.create({
  baseURL: 'https://digimon-api.herokuapp.com/api/digimon/',
});

export default Api;