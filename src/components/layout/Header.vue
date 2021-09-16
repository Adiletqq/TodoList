<template>
    <a-row class="header">
        <a-col :span="21">
            <h1>{{ title }}</h1>
        </a-col>
        <a-col :span="3">
            <a-button type="primary" @click="showModal">
                Add todo
            </a-button>
        </a-col>
        <a-divider />
        <a-modal
            title="Adding todo"
            :visible="visible"
            @ok="addToTodoList"
            @cancel="handleCancel"
            :okText="'Save'"
        >
            <h2>Add new todo</h2>
            <a-input v-model="form.title" placeholder="Title" required/>
            <a-textarea
                :style="{marginTop: '15px'}"
                v-model="form.description"
                placeholder="Description"
                :auto-size="{ minRows: 2, maxRows: 5 }"
                required
            />
        </a-modal>
    </a-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "Header",
    data(){
        return {
            title: 'Todo List',
            visible: false,
            form: {
                id: null,
                title: '',
                description: ''
            }
        };
    },
    methods: {
        ...mapActions(['addTodo']),

        showModal() {
            this.visible = true;
        },

        addToTodoList() {
            this.addTodo({
                id: Date.now(),
                title: this.form.title,
                description: this.form.description,
                isDone: false
            });
            this.handleCancel();
        },
        clearForm(){
            this.form = {
                id: null,
                title: '',
                description: ''
            };
        },
        handleCancel() {
            this.visible = false;
            this.clearForm();
        },
    }
};
</script>

<style scoped>
.header{
    margin-top: 25px
}

</style>