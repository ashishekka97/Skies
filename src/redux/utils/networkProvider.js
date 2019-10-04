import axios from 'axios';


const networkProvider = axios.create({
	baseURL: 'https://api.openweathermap.org',
	timeout:100000
});

networkProvider.all = axios.all;

export default networkProvider;