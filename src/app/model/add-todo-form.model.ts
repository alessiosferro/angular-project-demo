import {Todo} from "./todo.model";

export type AddTodoForm = Omit<Todo, 'uuid'>;
