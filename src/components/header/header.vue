<template>
    <div class="header">
        <Row>
            <img src="../../assets/xboot.png" width="200px">
            <div class="desc">{{ $t('paladin')}}</div>
        </Row>
    </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="less">
    .header {
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;

        .desc {
            font-size: 16px;
            color: black;
            margin-top: 1vh;
        }
    }
</style>
