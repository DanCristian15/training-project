<template>
    <div>
            <button 
            :style="{ 'height': btnHeight + 'px', 'width': btnWidth + 'px' }"
            class="btn"
            :class= '!dark ? "light" : "dark" '
            @click="onClickHandler">
            <slot name="left-inside"></slot><p> {{text}} </p><slot name="right-inside"></slot>
            </button>
    </div>
</template>

<script>
    export default { 
        props: {
            text: {
                type: String,
                required: true,
                default: 'clcik'
            },
            btnHeight: {
                type: Number,
                default: 20
            },
            btnWidth: {
                type: Number,
                default: 100
            },
            dark: {
                type: Boolean,
                default: true
            },
            darkblue: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            onClickHandler( ) {
                this.$emit( 'click' );
            }
        }
    }
</script>

<style scoped>

    .btn {
        background-color: rgb(255, 255, 255);
        color: black;
    }

    .btn.dark {
        background-color: black;
        color: white;
    }

    /* .light {
        background-color: rgb(255, 255, 255);
        color: black;
    } */

    p {
        display: inline-block;
        margin: 5px;
    }
</style>