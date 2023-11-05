import { useSelector, useDispatch } from "react-redux";
import TodoForm from "./form/TodoForm";
import TodoItems from "./items/TodoItems";
import TodoFooter from "./footer/TodoFooter";
import {
    addTodo, deleteTodo, selectTodos,
    checkTodo, clearCompleted, changeValue,
    clearInput, selectValue, selectEditId, editTodo,
    clearEditId, changeElement, changeEditId
} from "../features/todosSlice";

const TodoList = () => {
    const dispatch = useDispatch()

    const todos = useSelector(selectTodos)
    const value = useSelector(selectValue)
    const editId = useSelector(selectEditId)

    console.log(
        "Todos:", todos, ";",
        "Value:", value, ";",
        "EditId:", editId
    )
    return (
        <section className="bg-white rounded-2xl leading-[3] font-raleway max-w-full">
            <div className="w-[700px]">
                <TodoForm
                    value={value}
                    editId={editId}
                    onAdd={(value) => dispatch(addTodo(value))}
                    onUpdate={(todoId, newText) => dispatch(editTodo(todoId, newText))}
                    onChange={(e) => dispatch(changeValue(e))}
                    onClearValue={() => dispatch(clearInput())}
                    onClearEditId={() => dispatch(clearEditId())}
                />
                <TodoItems
                    todos={todos}
                    onChange={(id) => dispatch(checkTodo(id))}
                    onChangeElement={(element) => dispatch(changeElement(element))}
                    onChangeEditId={(id) => dispatch(changeEditId(id))}
                    onDelete={(todoId) => dispatch(deleteTodo(todoId))}
                />
                <TodoFooter
                    todos={todos}
                    onClearCompleted={() => dispatch(clearCompleted())}
                />
            </div>
        </section>
    );
};

export default TodoList;
