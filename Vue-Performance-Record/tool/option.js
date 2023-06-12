import data from "./data";
import Message from "./message";

function renderDomTim(type, time, end = 0) {
    data.DOM.forEach(item => {
        if (item.info == type) {
            item.start = time
            item.end = end
        }
    })
}


function perfObserver(list) {
    list.getEntries().forEach((entry) => {
        //console.log(entry);
        //TTFB：Time To First Byte，首字节时间

        // FP：First Paint，首次绘制，绘制Body

        // FCP：First Contentful Paint，首次有内容的绘制，第一个dom元素绘制完成

        // FMP：First Meaningful Paint，首次有意义的绘制

        // TTI：Time To Interactive，可交互时间，整个内容渲染完成

        //FP
        if (entry.name === 'first-paint') {
            //log.DOM.FP.start = entry.startTime
            renderDomTim("FP", entry.startTime)
        }

        //FCP
        if (entry.name === 'first-contentful-paint') {
            //log.DOM.FCP.start = entry.startTime
            renderDomTim("FCP", entry.startTime)
        }

        //LCP
        if (entry.name === 'largest-content-paint') {
            //log.DOM.FCP.start = entry.startTime
            renderDomTim("LCP", entry.startTime)
        }

        //FID
        if (entry.name === 'first-input') {
            //log.DOM.FP.start = entry.startTime
            renderDomTim("FID", entry.startTime)
        }

        if (entry.entryType === 'navigation') {

            // data.TASK = {}


            data.URL = entry.name

            //log.RESOURCE.push(entry)

            renderDomTim("FMP", entry.domContentLoadedEventStart
                , entry.domContentLoadedEventEnd)

            renderDomTim("DOM", entry.responseEnd
                , entry.domInteractive)

            renderDomTim("LOAD", entry.domContentLoadedEventEnd
                , entry.loadEventEnd)

            renderDomTim("DNS", entry.domainLookupStart
                , entry.domainLookupEnd)

            renderDomTim("TCP", entry.connectStart
                , entry.connectEnd)
            renderDomTim("SSL", entry.secureConnectionStart
                , entry.connectEnd)

            renderDomTim("TTFB", entry.requestStart
                , entry.responseStart)

            renderDomTim("AJAX", entry.responseStart
                , entry.responseEnd)


            renderDomTim("BODY", entry.domainLookupStart
                , entry.responseStart)

            renderDomTim("LOADING", entry.fetchStart
                , entry.responseEnd)
            renderDomTim("TTI", entry.fetchStart
                , entry.domInteractive)
            renderDomTim("DOM Ready", entry.fetchStart
                , entry.domContentLoadedEventEnd)

            renderDomTim("ALL", entry.fetchStart
                , entry.loadEventStart)
            renderDomTim("HTTP", entry.decodedBodySize
                , entry.transferSize)




        }
        if (entry.initiatorType != "navigation" && entry.initiatorType) {
            if (!data.TASK[entry.initiatorType]) {
                data.TASK[entry.initiatorType] = []
            }
            let str = JSON.stringify(entry)

            data.TASK[entry.initiatorType].push(JSON.parse(str))
        }



        if (entry.entryType === 'mark' || entry.entryType === 'measure') {

            let str = JSON.stringify(entry)

            data.MARK.push(JSON.parse(str))
        }

    });

    Message.send()

}


function initPerformance() {


    let Performance = new PerformanceObserver(perfObserver)

    Performance.observe({ entryTypes: ['paint', 'resource', 'mark', 'longtask', 'navigation', 'measure', 'element'] });




}



export default initPerformance