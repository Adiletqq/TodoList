<template>
    <a-card :style="{ marginTop: '16px' }">
        <template #title>
            <a-checkbox v-model="isDone" @change="update"><span :class="isDone ? 'done' : ''" >{{todo.title}}</span></a-checkbox>
        </template>
        <template #extra>
            <a-space>
                <a-button type="primary" @click="showModal">
                    Edit
                </a-button>
                <a-button type="danger" @click="remove(todo.id)">
                    Delete
                </a-button>
            </a-space>
        </template>
        <p>
            {{ todo.description }}

        </p>
        <a-modal
            title="Adding todo"
            :visible="visible"
            @ok="update"
            @cancel="handleCancel"
            :okText="'Save'"
        >
            <h2>Add new todo</h2>
            <a-input v-model="title" placeholder="Title" required/>
            <a-textarea
                :style="{marginTop: '15px'}"
                v-model="description"
                placeholder="Description"
                :auto-size="{ minRows: 2, maxRows: 5 }"
                required
            />
        </a-modal>
    </a-card>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: "TodoItem",
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            visible: false,
            id: this.todo.id,
            title: this.todo.title,
            description: this.todo.description,
            isDone: this.todo.isDone
        };
    },
    methods: {
        ...mapActions(['removeTodo', 'updateTodo']),

        remove(id){
            this.removeTodo(id);
            
        },
        showModal() {
            this.visible = true;
        },
        update(){
            this.updateTodo({
                id: this.id,
                title: this.title,
                description: this.description,
                isDone: this.isDone
            });
            if(this.visible){
                this.$nextTick(() => {
                    this.handleCancel();
                });
            }

        },
        handleCancel() {
            this.visible = false;
        },
    }
};
</script>

<style scoped>
    .done {
        text-decoration: line-through;
    }
</style>