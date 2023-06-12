
export default function Record(Vue) {

    Vue.prototype.$Mark = (type) => {
        performance.mark(type)
    };

    Vue.prototype.$Measure = (type, start, end) => {
        performance.measure(type, start, end)
    };
}

