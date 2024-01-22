export interface RootObject {
	data: RootObjectData[];
}
export interface RootObjectData {
	id: number;
	login: string;
	password: string;
	firstname: string;
	lastname: string;
}