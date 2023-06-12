//import data from "./data"
import Template from "../components/index.vue"



export default function RenderContext(Vue) {

    new Vue({

        render: h => h(Template)
    }).$mount('#app')

}

