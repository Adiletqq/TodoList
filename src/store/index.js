import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
function saveToLocalStorage(todoList){
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
export default new Vuex.Store({
    state: {
        todoList: JSON.parse(localStorage.getItem('todoList')) || [
            {
                id: 1,
                title: 'Todo item example 1',
                description: 'description of todo',
                isDone: false
            },
            {
                id: 2,
                title: 'Todo item example 2',
                description: 'description of todo2',
                isDone: true
            }
        ]
    },
    getters: {
        getTodoList: (state) => {
            return state.todoList.sort((prev, next) => prev.isDone - next.isDone);
        }
    },
    mutations: {
        addTodo(state, payload){
            state.todoList.push(payload);
            saveToLocalStorage(state.todoList);
        },
        updateTodoList(state, payload){
            state.todoList = payload;
            saveToLocalStorage(state.todoList);
        },
        removeTodo(state, id){
            state.todoList = state.todoList.filter(item => item.id !== id);
            saveToLocalStorage(state.todoList);
        },
        updateTodo(state, todo){
            const todoIndex = state.todoList.findIndex(item => item.id === todo.id);
            if (todoIndex !== -1) {
                state.todoList.splice(todoIndex, 1, todo);
                saveToLocalStorage(state.todoList);
            }
        }
    },
    actions: {
        addTodo({commit},todo){
            commit('addTodo', todo);
        },
        removeTodo({commit}, id){
            commit('removeTodo', id);
        },
        updateTodo({commit}, todo){
            commit('updateTodo', todo);
        }
    },
    modules: {
    }
});
