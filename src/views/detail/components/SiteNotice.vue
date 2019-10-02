<template>
<div class="notice-wrap">
    <img src="../../../assets/images/notice.png" alt="" class="image">
    <div>
        <span class="text">{{notice}}</span>
    </div>
</div>
</template>

<script>
export default {
    props: {
        notice: {
            type: String,
            default: '2019年9月24日至10月1日,将暂停售票。'
        }
    }
}
</script>

<style scoped>
 .notice-wrap{
     margin-top: 5px;
     display: flex;
     flex-flow: row nowrap;
     justify-content: flex-start;
     align-items: center;
     background:#fff5e5;
     padding:15px 0px;
     color:#ff8300;
     padding-left: 10px;

 }
 .image{
     width: 18px;
 }
 .text{
     margin-left: 10px;
 }
</style>
