<template>
    <div>
        <h1> name: {{ record.name }} </h1>
        <h2> number: {{record.number}} </h2>
        <h2> date: {{record.date}} </h2>
        <h2> height: {{record.height}} </h2>
        <img :src=" record.image " alt="image">
    </div>
</template>

<script>
    import { records } from './records'

    export default {
       data( ) {
           return {
               records: records,
               record: null
           }
       },
       created( ) {
           let recordId = this.$route.params.itemId
           this.record = this.getRecord(recordId);
       },
       methods: {
           getRecord( recordId ) {
               let match = null;

               records.forEach((record) => {
                   if( record.id == recordId ) {
                       match = record
                   }
               })
               return match;
           }
       }

    }
</script>
