<template>
    <div class="list">
        <div>
            <input class="list__search-input" type="text" placeholder="Search..." v-model="search">
        </div>
        <div class="list__item" v-for="record in filteredRecordsByName" :key="record.id">
            <router-link
                :to= " { name: 'Item', params: { itemId: record.id }} ">
                <img  class="list__item__image" :src="record.image" alt="image">
            </router-link>
            <div class="list__item__record">
                <div class="list__item__name">
                    <router-link
                        :to= "{ name: 'Item', params: { itemId: record.id } } "
                        tag="p"
                    >
                        <a> {{ record.name }}  </a>
                    </router-link>
                </div>
                <div class="list__item__content">
                    <p class="list__item__description"> {{ record.description }} </p>
                    <div class="list__item__attributes">
                        <p> Number: {{ record.number }}</p>
                        <p> Height: {{ record.height | formatHeight( record.height ) }} </p>
                        <p> Date: {{ record.date | formatDate( record.date ) }}</p>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default { 
        data( ) {
            return {
                search: ''
            }
        },
        filters: {
            formatDate( value ) {
                let fullDate = value;
                let year = new Intl.DateTimeFormat( 'en', { year: 'numeric' } ).format( fullDate );
                let month = new Intl.DateTimeFormat( 'en', { month: 'short' } ).format( fullDate ).toUpperCase( );
                let date = new Intl.DateTimeFormat( 'en', { day: '2-digit' } ).format( fullDate );
                return ( `${ date } / ${ month } / ${ year }` )
            },
            formatHeight ( value ) {
                let height = value;
                let fomrmattedHeight = new Intl.NumberFormat( 'de', { fomrmattedHeight: 'numeric' } ).format( height ) ;
                return fomrmattedHeight;
            }
        },
        computed: {
            ...mapState( {
                recordsarray: state => state.recordsArray
            }),
            filteredRecordsByName( ) {
                return this.recordsarray.filter( record => {
                    return record.name.toLowerCase( ).includes( this.search.toLowerCase( ) )
                })
            }
        }
        
    }
</script>

<style  scoped>

     .list__search-input {
        margin-top: 60px; 
        margin-left: 20px;
        width: 40%;
        height: 30px;
        font-size: 26px;
    }

    .list__item {
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
    
    .list__item:hover {
        box-shadow: gray 2px 2px 2px 2px;
    }

    .list__item a {
        text-decoration: none;
        font-size: 26px;
        color: rgb(36, 36, 36);
        letter-spacing: 2px;
    }

    .list__item a:hover{
        font-size: 27px;
        color: rgb(105, 23, 9); 
    }

    .list__item__record {
        display: flex;
        flex-direction: column;
    }

    .list__item__name {
        padding-left: 10px;
        width: 23rem;
        font-size: 20px;
        font-family: 'Playfair Display';
        margin: 0;
    }

    .list__item__attributes {
        background-color: #a7b0b4;
        height: 7.01rem;
        padding: 7px 0px 0px 10px;
    }

    .list__item__attributes p {
        font-size: 16px;
        color: #373737;
    }

    .list__item__description {
        width: 20rem;
        word-wrap: break-word;
        text-align: justify;
        font-size: 16px;
        text-indent: 20px;
        color: #8d8d8d;
        margin: 10px 2px 10px 5px;
    }

    .list__item__content {
        background-color: #e9e9e9;
        height: 228px;
    }
</style>
