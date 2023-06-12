<template>
    <div class="box" v-show="list.length > 0">
        <div class="tabs is-medium ">
            <ul>
                <li v-for="item in list" :key="item" :class="{ 'is-active': item == tab }" @click="handleSelfTabs(item)">
                    <a>{{
                        item }}</a>
                </li>
            </ul>

        </div>
        <div class="table-container">
            <table class="table is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th v-for="(item, idx) in keyList" :key="idx">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, idx) in TASK[tab]" :key="idx">
                        <th v-for="t in keyList" :key="t">
                            <span v-if="t == 'responseStatus'" class="tag"
                                :class="[item['responseStatus'] == 200 ? 'is-success' : 'is-danger']">{{ item[t]
                                }}</span>
                            <span style="font-weight: 100;" v-else>{{ item[t] }}</span>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "TASK",
    data() {
        return {
            list: [],
            tab: "",
            keyList: ['name', 'startTime', 'duration', 'initiatorType', 'nextHopProtocol', 'renderBlockingStatus', 'workerStart', 'redirectStart', 'redirectEnd', 'fetchStart', 'domainLookupStart', 'domainLookupEnd', 'connectStart', 'secureConnectionStart', 'connectEnd', 'requestStart', 'responseStart', 'responseEnd', 'transferSize', 'encodedBodySize', 'decodedBodySize', 'responseStatus']
            // 'entryType'
            // 'serverTiming'

        }
    },
    props: {
        TASK: { type: Object }
    },

    methods: {
        handleSelfTabs(tab) {
            this.tab = tab
        }
    },
    watch: {
        TASK(val) {
            this.list = Object.keys(val)
            this.tab = this.list[0]
        },
        deep: true,
        immediate: true,
        flush: 'post'
    }
}
</script>

<style scoped>
a {
    text-decoration: none !important;
}
</style>