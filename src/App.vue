<template>
<div class="main">
<div class="my-chart">
<trading-vue 
        :width="this.width" :height="this.height"
        :data="chart"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText">
</trading-vue>
</div>

<div class="my-chart">
<trading-vue 
        :width="this.width"  :height="this.height"
        :data="chart" 
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText">
</trading-vue>
</div>
</div>
</template>

<script>
import TradingVue from './TradingVue.vue'
import Data from '../data/data.json'
import DataCube from '../src/helpers/datacube.js'

export default {
    name: 'app',
    components: {
        TradingVue
    },
    methods: {
        onResize() {
            this.width = Math.round(window.innerWidth/2)
            this.height = Math.round(window.innerHeight/2)
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        window.dc = this.chart
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    data() {
        return {
            chart: new DataCube(Data),
            width: Math.round(window.innerWidth*1/2),
            height: Math.round(window.innerHeight*1/2),
            colors: {
                colorBack: '#fff',
                colorGrid: '#eee',
                colorText: '#333',
            }
        };
    }
};
</script>

<style>
html,
body {
    background-color: #fff;
    margin: 0;
    padding: 0 0vw;
    /* overflow: scroll; */
}
.my-chart{
    width:60;
}
.main{
    display: flex;
    flex-direction: column;   
    margin:0 auto;
}
</style>
