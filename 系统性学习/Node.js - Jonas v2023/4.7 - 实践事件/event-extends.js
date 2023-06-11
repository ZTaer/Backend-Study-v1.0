const events = require('events');

// class继承event库: 方便自定义events库
class NewEvents extends events {
    constructor(){
        super();
    }
};

const Events  = new NewEvents();

// 监听事件 
Events.on("start", (data) => {
    console.log('on-event: start-1',data )
})

Events.on("start", (data) => {
    console.log('on-event: start-2',data )
})

// 促发事件
Events.emit("start", "props-data")