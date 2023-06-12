<template>
    <div class="box" v-show="MARK.length > 0">
        <div class="columns is-mobile is-multiline">
            <div v-for="item in MARK" :key="item.name" class="column is-3">
                <article class="message" :class="[item.duration != 0 ? 'is-success' : '']">
                    <div class="message-body">
                        <div class="tags has-addons">
                            <span class="tag is-dark ">名称:</span>
                            <span class="tag is-info " :class="[item.duration != 0 ? 'is-success' : '']">{{
                                item.name
                            }}</span>


                        </div>
                        <p>开始: {{ item.startTime }}</p>
                        <p>消耗: {{ item.duration }}</p>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "RECORD",
    data() {
        return {}
    },
    props: { MARK: { type: Array } },
}
</script>

<style scoped></style>