import Todo from "@/models/todo";

type TodoState = {
	todos: Todo[];
	loading: boolean;
	error?: Error;
	message?: string;
};

export enum TodoActionType {
	FETCH_START,
	FETCH_SUCCESS,
	FETCH_FAILURE,
	CREATE_START,
	CREATE_SUCCESS,
	CREATE_FAILURE,
	DELETE_START,
	DELETE_SUCCESS,
	DELETE_FAILURE,
	UPDATE_START,
	UPDATE_SUCCESS,
	UPDATE_FAILURE,
}

type FetchPayloads =
	| {
			type: TodoActionType.FETCH_START;
	  }
	| {
			type: TodoActionType.FETCH_SUCCESS;
			payload: Todo[];
	  }
	| {
			type: TodoActionType.FETCH_FAILURE;
			error: Error;
	  };

type CreatePayloads =
	| {
			type: TodoActionType.CREATE_START;
	  }
	| {
			type: TodoActionType.CREATE_SUCCESS;
			payload: Todo;
	  }
	| {
			type: TodoActionType.CREATE_FAILURE;
			error: Error;
	  };

type UpdatePayloads =
	| {
			type: TodoActionType.UPDATE_START;
	  }
	| {
			type: TodoActionType.UPDATE_SUCCESS;
			payload: Todo;
	  }
	| {
			type: TodoActionType.UPDATE_FAILURE;
			error: Error;
	  };

type DeletePayloads =
	| {
			type: TodoActionType.DELETE_START;
	  }
	| {
			type: TodoActionType.DELETE_SUCCESS;
			payload: string;
	  }
	| {
			type: TodoActionType.DELETE_FAILURE;
			error: Error;
	  };

type TodoAction =
	| CreatePayloads
	| UpdatePayloads
	| DeletePayloads
	| FetchPayloads;

export type { TodoState, TodoAction };
