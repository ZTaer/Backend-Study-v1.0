const fs = require('fs');
const crypto = require('crypto'); // 加密库

/**
 * 异步顺序验证
 *      a) 常见顺序
 *          同步任务
 *          微任务
 *          setImmediate
 *          timer
 *          I/O
 *      b) 具体底层细节请查看笔记
 */

const startTime = Date.now()
process.env.UV_THREADPOOL_SIZE = 1; // 配置多线程数量, 默认为4最大128

console.log('start-0')

setTimeout( () => console.log('setTimeout-1'),0 );

setImmediate( () => console.log('setImmediate-2') );

fs.readFile( "test.txt", ( error, data ) => {
    console.log('I/O-fs-3')

    setTimeout( () => console.log('setTimeout-4'),0 );
    setTimeout( () => console.log('setTimeout-5'),3000 );
    setImmediate( () => console.log('setImmediate-6') );

    process.nextTick( () => console.log('process.nextTick-7') );
    
    // 加密任务,异步写法 - I/O需多线程处理 
    crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (error, derivedKey) => {
        console.log(`I/O-crypto-${Date.now()-startTime}-8.1: `,derivedKey.toString('hex'));  // 打印导出的密钥
    });
    crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (error, derivedKey) => {
        console.log(`I/O-crypto-${Date.now()-startTime}-8.2: `,derivedKey.toString('hex'));  // 打印导出的密钥
    });
    crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (error, derivedKey) => {
        console.log(`I/O-crypto-${Date.now()-startTime}-8.3: `,derivedKey.toString('hex'));  // 打印导出的密钥
    });
} )

process.nextTick( () => console.log('process.nextTick-9') ); // 微任务