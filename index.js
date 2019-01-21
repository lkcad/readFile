const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const { fileExists,readFilePromise,writeFilePromise,readdirPromise } = require('./script/util');

const fileOutputPath = path.join(__dirname, './file/');
const fileConfigFolderPath = path.join(__dirname, './config/');


console.log(chalk.red('text is blue'));

const fileContent = 'var a=0;\nconsole.log(123)';



const getFileList= async (fileConfigFolderPath)=>{
  const fileList = await  readdirPromise(fileConfigFolderPath,{});
  console.error(2222222222111111111111,fileList)
  return fileList.map((fileName) => (path.join(fileConfigFolderPath, fileName)));
};

const getContentList = async (filePathList) => {
  const promiseArray = filePathList.map(path => readFilePromise(filePathList[0], { encoding: 'utf-8' }));
  return await Promise.all(promiseArray);
};


const init = async () => {
  const filePathList = await getFileList(fileConfigFolderPath);
  const contentList = await getContentList(filePathList);
  console.error('contentList', contentList);
};

init();

const a = writeFilePromise(`${fileOutputPath + Math.random()}.js`, fileContent, {}).then(()=>{
console.error('yiWanCheng')
}).catch((err)=>{
  console.log(err)
});
