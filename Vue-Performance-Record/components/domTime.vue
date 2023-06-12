<!-- eslint-disable vue/no-parsing-error -->
<template >
    <div class="columns is-mobile is-multiline">
        <div class="column is-3" v-for="item in DOM" :key="item.type">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">{{ item.type }}</p>
                </header>
                <div class="card-content" style="font-size: 14px;">
                    <p>开始: <span>{{ item.start }}</span></p>
                    <p>结束: <span>{{ item.end }}</span></p>
                    <p>消耗: <span>{{ (item.end - item.start) < 0 ? 0 : (item.end - item.start) }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "DOM",
    props: {
        DOM: { type: Array }
    },

}
</script>

<style scoped></style>