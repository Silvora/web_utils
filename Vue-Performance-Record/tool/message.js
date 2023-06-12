

import data from "./data"

const Message = {
    comm: null,
    init(Vue, host) {

        this.comm = new BroadcastChannel("Performance")
        Vue.prototype.$Comm = this.comm
        this.host = host
    },
    send() {

        if (data.URL != "" && data != undefined) {
            this.comm.postMessage(data)

        }

    }

}

export default Message



