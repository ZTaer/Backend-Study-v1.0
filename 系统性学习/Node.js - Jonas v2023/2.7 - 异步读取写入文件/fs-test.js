const fs = require('fs');

// fs异步读写文件，防止程序阻塞
// 注意: 异步读写文件地狱回调写法 ( 不推荐的写法演示 )
fs.readFile(
    "./file-1.txt",
    "utf-8",
    ( error, file1 ) => {
        if( error ){
            console.log('error', error)
            return; 
        }
        fs.readFile("./file-2.txt", "utf-8", ( error, file2 ) => {
            if( error ){
                console.log('error', error)
                return; 
            }
            fs.readFile("./file-3.txt", "utf-8", (error, file3) => {
                if( error ){
                    console.log('error', error)
                    return; 
                }
                const content = `${file1} \n ${file2} \n ${file3}`;
                // 异步书写文件 fs.writeFile( "文件路径", "书写内容", "编码", 回调函数 )
                fs.writeFile("./write.txt", content, "utf-8", error => {
                    if( error ){
                        console.log('写入失败')
                    }
                    console.log('写入成功')
                } );
            })
        })
    }
)