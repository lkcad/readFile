const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const configs=require('./script/requireFile');
const templateMap=require('./script/readTemplate');
const getContent=require('./script/core');
const moment =require('moment')
const { fileExists,readFilePromise,writeFilePromise,readdirPromise } = require('./script/util');

const fileOutputPath = path.join(__dirname, './output/');
const fileConfigFolderPath = path.join(__dirname, './config/');

const config=configs['ajax'];
const template=templateMap[config.templateName];


const {content:fileContent,fileName} = getContent({
  rule:config,
  content:template.content
});

const fileNameL=fileName||moment().format('YYYYMMDD_HHmmss')
console.log(config,33333333,);

writeFilePromise(`${fileOutputPath + fileNameL}.js`, fileContent, {}).then(()=>{
console.error('yiWanCheng')
}).catch((err)=>{
  console.log(err)
});
