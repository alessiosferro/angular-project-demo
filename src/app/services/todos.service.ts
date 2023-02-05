import {Injectable} from "@angular/core";
import {Todo} from "../model/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = [];
}
