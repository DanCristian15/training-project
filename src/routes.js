import ItemsList from './ItemsList.vue'
import Item from './Item.vue'

export const routes = [
    { path: '/itemsList', component: ItemsList },
    { path: '/item/:itemId' ,name:'Item', props: true, component: Item },
    { path: '*', component: { template: '<h1>Page not found</h1>' }}
]