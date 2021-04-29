import axios from 'axios';


const Api = axios.create({
  baseURL: 'https://digimon-api.vercel.app/api/digimon',
});

export default Api;