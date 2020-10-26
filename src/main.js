import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store';
import {Plugin} from 'vue-fragment'
import VueSweetalert2 from 'vue-sweetalert2';
import { CarouselPlugin } from 'bootstrap-vue'
import { LayoutPlugin } from 'bootstrap-vue'
import {brandFilter} from "./filters/brandFilter";
import {formatMoney} from "./filters/priceFormatter";
import {paginationPipe} from "./filters/paginationFilter";
import {shortenTitle} from "./filters/shortenTitle";
import router from "@/routes/router.js";
import 'sweetalert2/dist/sweetalert2.min.css';
import '../custom.scss'
 
Vue.config.productionTip = false;

Vue.use(VueSweetalert2);
Vue.use(Plugin);
Vue.use(VueRouter);
Vue.use(CarouselPlugin)
Vue.use(LayoutPlugin)

Vue.filter('brandFilter', brandFilter);
Vue.filter('shortenTitle', shortenTitle)
Vue.filter('priceFormatter', formatMoney);
Vue.filter('pagination', paginationPipe);

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app');


