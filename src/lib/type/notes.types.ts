export type Note = {
	id: string;
	title: string;
	content: string;
	lastUpdated: number;
	encrypted?: boolean; // Add this
};
