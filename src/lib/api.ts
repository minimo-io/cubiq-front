// src/lib/api.ts
import axios from 'axios';
import { AppConfig } from './configs';

const apiClient = axios.create({
	baseURL: AppConfig.apiUrl,
	headers: {
		'Content-Type': 'application/json'
	}
});

export default apiClient;
