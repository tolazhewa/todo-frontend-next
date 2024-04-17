export default interface Todo {
	id?: string;
	userId?: string;
	title: string;
	completed: boolean;
	creationDatetime?: string;
	latestUpdateDatetime?: string;
}
