const fs=require('fs');
const path=require('path');
const { fileExists,readFilePromise,writeFilePromise,readdirPromise } = require('./util');

const targetPath=path.join(__dirname,'../config');

module.exports=fs
    .readdirSync(targetPath)
    .filter(fileName=>fileName.endsWith('.js'))
    .reduce((pre,cur)=>({
        ...pre,
        [cur.replace(/\.js/,'')]:require('../config/'+cur)
    }),{});
