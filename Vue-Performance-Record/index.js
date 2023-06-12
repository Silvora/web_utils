import RenderContext from "./tool/render"
import Record from "./tool/record"
import initPerformance from "./tool/option"
import Message from "./tool/message";

// 重定向次数：performance.navigation.redirectCount
// 重定向耗时: redirectEnd - redirectStart
// DNS 解析耗时: domainLookupEnd - domainLookupStart
// TCP 连接耗时: connectEnd - connectStart
// SSL 安全连接耗时: connectEnd - secureConnectionStart
// 网络请求耗时 (TTFB): responseStart - requestStart
// 数据传输耗时: responseEnd - responseStart
// DOM 解析耗时: domInteractive - responseEnd
// 资源加载耗时: loadEventStart - domContentLoadedEventEnd
// 首包时间: responseStart - domainLookupStart
// 白屏时间: responseEnd - fetchStart
// 首次可交互时间: domInteractive - fetchStart
// DOM Ready 时间: domContentLoadEventEnd - fetchStart
// 页面完全加载时间: loadEventStart - fetchStart
// http 头部大小：transferSize - encodedBodySize

// 重定向次数：performance.navigation.redirectCount

// JS 资源数量: p.filter(ele => ele.initiatorType === "script").length

// CSS 资源数量：p.filter(ele => ele.initiatorType === "css").length

// AJAX 请求数量：p.filter(ele => ele.initiatorType === "xmlhttprequest").length

// IMG 资源数量：p.filter(ele => ele.initiatorType === "img").length

// 总资源数量: window.performance.getEntriesByType("resource").length

// 白屏时间: domLoading - fetchStart
// 粗略首屏时间: loadEventEnd - fetchStart 或者 domInteractive - fetchStart
// DOM Ready 时间: domContentLoadEventEnd - fetchStart
// 页面完全加载时间: loadEventStart - fetchStart



export default function Performance(Vue) {

    //判断路由
    let location = window.location

    //postMessage 页面通信
    Message.init(Vue, location.href)

    if (location.hash == "#/Performance" || location.pathname == "/Performance") {

        RenderContext(Vue)
    }

    //Performance
    initPerformance()

    //new Vue
    Record(Vue)

}



