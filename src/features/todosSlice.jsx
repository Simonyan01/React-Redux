export const selectTodos = state => state.todos
export const selectValue = state => state.currentTodo.value
export const selectEditId = state => state.currentTodo.editId

export const todosReducer = (state = [], action) => {
    if (action.type === "ADD_TODO") {
        return [{
            id: Math.random(),
            text: action.payload,
            isCompleted: false,
        }, ...state]
    } else if (action.type === "CHECK_TODO") {
        return state.map((todo) => (
            todo.id === action.payload.id
                ? action.payload
                : todo
        ))
    } else if (action.type === "EDIT_TODO") {
        state.todos.find(val => val.id === action.payload.editId).text = action.payload.value
        return state
    } else if (action.type === "DELETE_TODO") {
        return state.filter(prev => prev.id !== action.payload.id)
    } else if (action.type === "CLEAR_COMPLETED") {
        return state.filter((todo) => !todo.isCompleted)
    }
    return state
}

export const currentTodoReducer = (state = {}, action) => {
    if (action.type === "CHANGE_VALUE") {
        return { ...state, value: action.payload }
    } else if (action.type === "CLEAR_INPUT") {
        return { ...state, value: "" };
    } else if (action.type === "CHANGE_EDIT_ELEMENT") {
        return { ...state, value: action.payload };
    } else if (action.type === "CHANGE_EDIT_ID") {
        return { ...state, editId: action.payload };
    } else if (action.type === "CLEAR_EDIT_ID") {
        return { ...state, editId: action.payload };
    }
    return state
}

export const initialTodos = [
    {
        id: Math.random(),
        text: "Learn React hooks",
        isCompleted: false,
    },
    {
        id: Math.random(),
        text: "Learn CSS framework",
        isCompleted: false,
    },
    {
        id: Math.random(),
        text: "Learn English",
        isCompleted: false,
    },
    {
        id: Math.random(),
        text: "Learn Russian",
        isCompleted: false,
    }
]

export const currentTodoState = {
    value: "",
    editId: null
}

export const addTodo = (newText) => {
    return {
        type: "ADD_TODO",
        payload: newText
    }
}

export const checkTodo = (ckeckId) => {
    return {
        type: "CHECK_TODO",
        payload: ckeckId
    }
}

export const editTodo = (editId, text) => {
    return {
        type: "EDIT_TODO",
        payload: {
            editId: editId,
            value: text
        }
    }
}

export const changeEditId = (id) => {
    return {
        type: "CHANGE_EDIT_ID",
        payload: id
    }
}

export const changeElement = (newText) => {
    return {
        type: "CHANGE_EDIT_ELEMENT",
        payload: newText
    }
}

export const clearEditId = () => {
    return {
        type: "CLEAR_EDIT_ID",
        payload: null
    }
}

export const changeValue = (e) => {
    return {
        type: "CHANGE_VALUE",
        payload: e.target.value
    }
}

export const clearInput = () => {
    return {
        type: "CLEAR_INPUT",
        payload: ""
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: id
    }
}

export const clearCompleted = () => {
    return { type: "CLEAR_COMPLETED" }
}