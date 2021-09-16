<template>
    <div id="app">
        <div class="container">
            <Header/>
            <TodoList/>
        </div>

    </div>
</template>

<script>
import Header from './components/layout/Header';
import TodoList from "./components/TodoList";

export default {
    name: 'App',
    components: {
        TodoList,
        Header
    },
};
</script>

<style>
.container {
    max-width: 800px;
    margin: 0 auto
}
</style>
