export default interface Todo {
	id?: number;
	userId?: number;
	text: string;
	completed: boolean;
	creationDatetime?: string;
	latestUpdateDatetime?: string;
}
