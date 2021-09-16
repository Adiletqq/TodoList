import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { Checkbox, Input, Modal, Space, Card, Divider, Layout, Col, Row, Button, message } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;

Vue.use(Checkbox);
Vue.use(Input);
Vue.use(Modal);
Vue.use(Space);
Vue.use(Card);
Vue.use(Divider);
Vue.use(Layout);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(message);

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
