<template>
  <div>
      <h1>Project components</h1>
      <btn 
        :text="btnText" 
        :btn-height="100" 
        :btn-width="190"
        :dark="darkmode"
        @click="alertMethod( )">
        <p slot="left-inside"><font-awesome-icon icon="coffee" /></p>
        <p slot="right-inside">right slot</p>
      </btn>
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
    btn: Button
  },
  methods: {
    alertMethod( ) {
      alert( "alert" );
    }
  }
}
</script>

