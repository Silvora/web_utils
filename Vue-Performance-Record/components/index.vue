<template>
    <div class="container is-fluid" style="padding: 0;">
        <div class="notification" v-if="DOM">
            <DomTime :DOM="DOM"></DomTime>
            <Tabs :TASK="TASK"></Tabs>
            <Record :MARK="MARK"></Record>
        </div>
        <div class="notification" v-else>
            当前无页面刷新
        </div>
    </div>
</template>

<script>
import DomTime from './domTime.vue';
import Tabs from './tabs.vue';
import Record from './record.vue';

export default {

    data() {
        return {
            DOM: null,
            TASK: null,
            MARK: null,
        }
    },

    components: {
        DomTime,
        Tabs,
        Record
    },
    created() {

        this.$Comm.addEventListener("message", this.message)
    },


    mounted() {


    },
    methods: {
        message(event) {
            if (event.data.URL) {
                let data = event.data
                this.DOM = data.DOM
                this.TASK = { ...data.TASK }
                this.MARK = data.MARK
            }
        }
    },

}

</script>

<style scoped>
@import url("../assets/bulma.css");
</style>
