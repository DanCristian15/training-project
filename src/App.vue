<template>
  <div>
      <h1>Project components</h1>
      <buton 
      :text="btnText" 
      :btnHeight="100" 
      :btnWidth="190"
      :dark="darkmode"
      @eventEmited="alertMethod( )"
      >
        <p><font-awesome-icon icon="coffee" /></p>
      </buton>
  </div>
</template>


<script>

import Button from './Button.vue'


export default {
  data( ) {
    return {
      btnText: "click me",
      darkmode: true
    }
  },  
  components: {
    buton: Button
  },
  methods: {
    alertMethod( ) {
      alert( "alert" );
    }
  }
}
</script>

<style >
 
</style>
