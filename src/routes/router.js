import VueRouter from 'vue-router'
import Home from '../Pages/Home'
import ShoppingCartPage from '../Pages/ShoppingCartPage'
import ProductDetailPage from '../Pages/ProductDetailPage'
import ThankYouPage from '../Pages/ThankYouPage'
import HomeCarousel from '../Pages/HomeCarousel'
import ApplePage from '../Pages/ApplePage'
import store from '@/store'
import {CLEAR_BRAND_FILTER, CLEAR_ORDER_BY_PRICE} from "../store/types"

const routes = [
    {path: '/', component: HomeCarousel},
    {path: '/Allphones', component: Home},
    {path: '/products/:id', component: ProductDetailPage},
    {path: '/cart', component: ShoppingCartPage},
    {path: '/thankyou', component: ThankYouPage},
    {path: '/Applephones', component: ApplePage}
];

const router = new VueRouter({routes, mode:'history'});
router.afterEach(() => {
    window.scrollTo(0,0);
    store.commit(CLEAR_BRAND_FILTER);
    store.commit(CLEAR_ORDER_BY_PRICE);
});
export default router;