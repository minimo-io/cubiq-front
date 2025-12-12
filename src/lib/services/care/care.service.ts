import { ClientsCareService } from './contacts.care.service';
// import { CompaniesService } from './companies.service'; // add when needed

export class CareService {
	readonly clients = new ClientsCareService();
	// readonly companies = new CompaniesService(); // uncomment when ready
}

export const careService = new CareService();

// OLD CODE ------------------------------------------------------------
// import { ClientsCareService } from './clients.care.service';

// export class CareService {
// 	private _clients: ClientsCareService | null = null;

// 	get clients() {
// 		if (!this._clients) this._clients = new ClientsCareService();
// 		return this._clients;
// 	}
// }

// export const careService = new CareService();
