<template>
    <div class="site-picture" ref="wrap">  
        <div class="desc"> 
            <div class="one">
                <img src="../../../assets/images/image.png" width="12" height="10" alt="" class="icon"> 
                <span class="sub-text">{{count}}</span>
            </div>
           <span class="text">{{name+'('+level+'景区)'}}</span>
        </div>  
    </div>
</template>

<script>
export default {
    props: {
        url: String,
        name: String,
        count: Number,
        level: String
    },

    mounted() {

        //动态更换背景
        let node = this.$refs.wrap;
        node.style.backgroundImage = `url(${this.url})`;
        node.style.backgroundPosition = "top center";
        node.style.backgroundSize = "100% 100%";

    }

}
</script>

<style scoped>
.site-picture {
    position: relative;
    height: 200px;
    width: 100%;

}

.desc {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #fff;
}

.one {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 4px 5px;
    width: 50px;
    border-radius: 10px;
    margin-bottom: 5px;
    font-size: 12px;
    background: rgba(18, 19, 24, 0.6);
}

.sub-text {
    margin-left:3px;
    font-family: '微软雅黑';  
    font-size: 12px;
}
.text{
    font-size: 16px;
    letter-spacing: 1px;
}
</style>