import axios from 'axios';


const networkProvider = axios.create({
	baseURL: 'https://api.darksky.net',
	timeout:100000
});

networkProvider.all = axios.all;

export default networkProvider;