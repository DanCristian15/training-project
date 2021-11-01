<template>
    <div>
        <div class="record-card__container" v-for="record in records" :key="record.id">
            <router-link
            :to=" '/item/' + record.id"
            >
                <img  class="record-card__image" :src=" record.image " alt="image">
            </router-link>
            
            <div class="record-card__record">
                <div class="record-card__name">
                    <router-link
                    :to=" '/item/' + record.id"
                    tag="p"
                    >
                        <a> {{ record.name }} </a>
                    </router-link>
                </div>
                <div class="record-card__content">
                    <p class="record-card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div class="record-card__attributes">
                        <p class="record-lines"> Number: {{ record.number }}</p>
                        <p class="record-lines">  Height: {{ record.height}} </p>
                        <p class="record-lines"> Date: {{ record.date.getDate() + '/' + record.date.getMonth() + '/' + record.date.getFullYear()}}</p>
                    </div> 
                </div>
                
            </div>
        </div>
        <item></item>
    </div>
</template>

<script>
    import { records } from './records'
    import Item from './Item.vue'

    export default { 
        data( ) {
            return {
                records: records
            }
        },
        components: {
            item: Item
        },
    }
</script>

<style scoped>
    .record-card__container {
        display: inline-flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        background-color: #e0f2f1;
        margin: 10px;
        border: 1px solid rgb(134, 129, 129); 
        align-items: flex-start;
        min-width: 30%;
        max-height: 300px;
    }
    
    .record-card__container:hover {
        box-shadow: gray 2px 2px 2px 2px;
    }

    .record-card__container a {
        text-decoration: none;
        font-size: 26px;
        color: rgb(36, 36, 36);
        letter-spacing: 2px;
    }

    .record-card__container a:hover{
        font-size: 27px;
        color: rgb(105, 23, 9); 
    }

    .record-card__record {
        display: flex;
        flex-direction: column;
    }

    .record-card__name {
        padding-left: 10px;
        width: 23rem;
        font-size: 20px;
        font-family: 'Playfair Display';
        margin: 0;
    }

    .record-card__attributes {
        background-color: #a7b0b4;
        height: 7.01rem;
        padding: 6px 0px 0px 10px;
    }

    .record-card__attributes p {
        font-size: 16px;
        color: #373737;
    }

    .record-card__description {
        width: 20rem;
        word-wrap: break-word;
        text-align: justify;
        font-size: 16px;
        text-indent: 20px;
        color: #8d8d8d;
        margin: 10px 2px 10px 5px;
    }

    .record-card__content {
        background-color: #e9e9e9;
        height: 228px;
    }
</style>
