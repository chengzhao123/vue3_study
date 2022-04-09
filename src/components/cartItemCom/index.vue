<template>
<div class="cartItem">
    <p class="cartTitle">{{ cartTitle}}</p>
    <div class="cartContent">
        <span>{{ cartTips }}</span>
        <span>数量：{{ cartCount}}</span>
    </div>
</div>
</template>

<script>

export default {
    name: 'CartItemCom',
    props: {
        cartTitle: {
            type: String,
            default: ''
        },
        cartTips: {
            type: String,
            default: ''
        },
        cartCount: {
            type: String,
            default: ''
        }
    }

}
</script>
<style lang="scss" scoped>
.cartItem {
    padding: 4px 6px;
    .cartTitle {
        color: black;
        font-size: 16px;
    }
    .cartContent {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>