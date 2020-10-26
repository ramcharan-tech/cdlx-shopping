<template>
    <Fragment>
        <div class="container" style="padding-top: 6rem;">
            <div class="row">
                <!-- <div class="col-lg-3">
                    <BrandFilter></BrandFilter>
                    <PriceFilter></PriceFilter>
                </div> -->
                <div class="col-lg-9">
                    <ProductList></ProductList>
                    <div class="d-flex justify-content-end">
                        <Pagination></Pagination>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
</template>

<script>
    import { Fragment } from 'vue-fragment';
    import ProductList from "../components/products/ProductList";
    import Pagination from "../components/pagination/Pagination";
    import * as Types from "../store/types"
    export default {
        name: "ApplePage",
        components: {Pagination, ProductList, Fragment},
        data() {
            return {
            }
        },
    mounted:function(){
        this.$store.commit(Types.ADD_BRAND_TO_FILTER, "apple");
    }
    }
</script>

<style scoped>

</style>
