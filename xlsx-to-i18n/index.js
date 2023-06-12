
const xlsx = require('node-xlsx');
const fs = require('fs');
const path = require('path');

// 读取的文件 默认i8n.xlsx
let url = "i18n.xlsx";
if (process.argv[2]) {
    url = process.argv[2];
}

const file = path.join(__dirname, url);

const dir = "./languages"

fs.mkdir(dir, (err) => {
    console.log("language folder created");
});

const workbook = xlsx.parse(file)[0].data;

const title = workbook[0];


function writeFileText() {

    //流式写入数据
   
    for (let i = 1; i < title.length; i++) {
        let ws = fs.createWriteStream(`${dir}/${title[i]}.json`);

        ws.on('finish', () => {
            console.log(`🚀 ${title[i]}.json 文件创建成功`);
        })
        const frist = `
{
    "language": "${title[i]}",
`
        ws.write(frist);
        //写入数据
        for (let j = 1; j < workbook.length; j++) {
            //判断数据是否为空
            if (!workbook[j].length) { 
                continue
            }
            
            //key value的值
            let key = `"${workbook[j][0]}"`;
            let value = `"${workbook[j][i]}"`;
           


            let context = `    ${key}: ${value},\n`

            //判断是否是最后一个
            if(j== workbook.length-1){
                context = `    ${key}: ${value}
}`
            }

            
            ws.write(context);
        }

        ws.on('close', () => {
            console.log(`🎉 ${title[i]}.json 数据写入完成`)
        })
        ws.close()
    }
}





writeFileText();


