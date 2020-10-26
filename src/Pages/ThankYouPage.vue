<template>
    <div class="container" style="padding: 6rem 0px;">
        <h1>Thank you for shopping!!</h1>
    </div>
</template>

<script>
    export default {
        name: "ThankYouPage",
        components: {},
        computed: {
        },
        data() {
            return {
            }
        },
        mounted:function () {
                this.$store.state.cart=[];
            }
        
    }
</script>

<style scoped>

</style>
