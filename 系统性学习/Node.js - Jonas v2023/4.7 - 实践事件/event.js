const events = require('events');

// 初始化event库
const Events = new events();

// 监听事件 
Events.on("start", (data) => {
    console.log('on-event: start-1',data )
})

Events.on("start", (data) => {
    console.log('on-event: start-2',data )
})

// 促发事件
Events.emit("start", "props-data")