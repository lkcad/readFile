const fs = require('fs');

const fileExists=(pth,mode)=>{
    try {
        console.error(1111111111,pth);
        fs.accessSync(pth,mode);
        return true;
    }catch (e) {
        console.error(2222222222222,e)
        return false
    }
};

const readFilePromise = (path, options) => (
    new Promise(((resolve, reject) => {
        fs.readFile(path, options, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }))
);

const writeFilePromise = (path,data, options) => (
    new Promise(((resolve, reject) => {
        fs.writeFile(path,data,options,(err)=>{
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    }))
);
const readdirPromise = (path, options) => (
    new Promise(((resolve, reject) => {
        fs.readdir(path,options,(err,data)=>{
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }))
);
module.exports={fileExists,readFilePromise,writeFilePromise,readdirPromise};
