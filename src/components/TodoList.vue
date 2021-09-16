<template>
    <section>
        <draggable v-model="myList" group="todoList" @start="drag=true" @end="drag=false">
            <TodoItem v-for="todo in myList" :todo="todo" :key="todo.id"/>
        </draggable>
    </section>
</template>

<script>
    
import TodoItem from "./TodoItem";
import draggable from 'vuedraggable';
export default {
    name: "TodoList",
    components: {TodoItem, draggable},
    computed: {
        myList: {
            get() {
                return this.$store.getters.getTodoList;
            },
            set(value) {
                this.$store.commit('updateTodoList', value);
            }
        }
    }
};
</script>

<style scoped>

</style>