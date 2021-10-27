<template>
<div>
<button 
:style="{ 'height': btnHeight + 'px', 'width': btnWidth + 'px' }"
:class='!dark ? "lightmode" : "darkmode" '
@click="eventEmit"
>
  <slot></slot><p> {{text}} </p><slot></slot>
</button>
</div>

</template>

<script>



export default { 
    props: {
        text: {
            type: String,
            require: true
        },
        btnHeight: {
            default: 20
        },
        btnWidth: {
            default: 100
        },
        dark: {
            type: Boolean
        }
    },
    methods: {
       eventEmit( ) {
           this.$emit( 'eventEmited' , {
               alertmessage: 'mesaj'
           })
       }
    }
}
</script>
<style scoped>

.darkmode {
    background-color: black;
    color: white;
}

.lightmode {
    background-color: rgb(255, 255, 255);
    color: black;
}

p {
    display: inline-block;
    margin: 5px;
}


</style>