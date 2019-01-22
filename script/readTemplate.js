const fs=require('fs');
const path=require('path');
const { fileExists,
    readFilePromise,
    writeFilePromise,
    readdirPromise } = require('./util');

const targetPath=path.join(__dirname,'../template');

const fileList=fs.readdirSync(targetPath);

const ContentMap=fileList.reduce((pre,fileName)=>{
    const fileContent = fs.readFileSync(path.join(targetPath,'/'+fileName));
    return {
       ...pre,
        [fileName]:{ name:fileName,
        content:fileContent.toString()}
    }
},{});

module.exports=ContentMap;
