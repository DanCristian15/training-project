import ItemsList from '@/pages/ItemsList.vue'
import Item from '@/pages/Item.vue'
import Home from '@/pages/Home.vue'
export const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/itemsList', name:'ItemsList', component: ItemsList },
    { path: '/item/:itemId' , name:'Item', component: Item },
    { path: '*', component: Home }
]