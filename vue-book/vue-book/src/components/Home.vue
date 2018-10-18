<template>
    <div>
      <MHeader>首页</MHeader>
      <div class="content">
        <Swiper :swiperSlides="sliders"></Swiper>
      </div>
    </div>
</template>

<script>
  import MHeader from '../base/MHeader'
  import Swiper from '../base/Swiper'
  import {getSliders} from '../api'
    export default {
        async created(){
         let {data:sliders} = await getSliders()
          console.log(sliders);
          this.sliders = sliders
        },
        data() {
            return {sliders:[]}
        },
        methods: {},
        computed: {},
        components: {
          MHeader,
          Swiper
        }
    }
</script>

<style scoped>


</style>
