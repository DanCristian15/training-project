<template>
    <div class="item">
        <p><strong> Name: {{ record.name  }} </strong></p>
        <p> Number: {{ record.number }} </p>
        <p> Date: {{ record.date | formatDate( record.date ) }} </p>
        <p> Height: {{ record.height | formatHeight( record.height) }} </p>
        <div class="item-image__div">
            <p>Image: </p>
            <img :src=" record.image " alt="image">
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
       data() {
           return {
               record: null
           }
       },
       created() {
           
           this.record = this.findRecordById( this.itemId );
           if( !this.record ) {
               this.$router.push( { name: 'ItemsList' } ).catch( ( ) => { } );
           }
       },
       computed: {
           ...mapGetters({
               findRecordById: 'findRecordById'
           } ),
           itemId() {
               return parseInt( this.$route.params.itemId );
           }
       },

       filters: {
            formatDate(value) {
                let fullDate = value;
                let year = new Intl.DateTimeFormat( 'en', { year: 'numeric' } ).format( fullDate );
                let month = new Intl.DateTimeFormat( 'en', { month: 'short' } ).format( fullDate ).toUpperCase( );
                let date = new Intl.DateTimeFormat( 'en', { day: '2-digit' } ).format( fullDate );
                return ( `${ date } / ${ month } / ${ year }` )
            },
            formatHeight(value) {
                let height = value;
                let fomrmattedHeight = new Intl.NumberFormat( 'de', { fomrmattedHeight: 'numeric'} ).format( height ) ;
                return fomrmattedHeight;
            }
        }
    }
</script>

<style>
.item {
    margin-top: 60px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
}

.item p {
    font-size: 18px;
}

.item-image__div  {
    display: flex;
}

.item-image__div img {
    margin-left: 10px;
    margin-top: 10px;
}


</style>