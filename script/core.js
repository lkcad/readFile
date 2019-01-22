const {type} = require('../const/const');
const {hump} = require('./util');

const getActionContent = (config, content) => {
    const {ajax} = config;
    const {params} = ajax;
    const ajax_params = Object.keys(params);
    const ajaxParams = ajax_params.map(x => hump(x));
    parmasArray = ajax_params.map((cur, index) => {
        return cur + ' : ' + ajaxParams[index]
    });
    console.error(222222222, parmasArray);
    let content2 = content.replace(/\$endPoint\$/, `'${ajax.api}'`)
        .replace(/\$AcActionName\$/, config.actionName)
        .replace(/\$ActionType\$/, config.actionType)
        .replace(/\$ActionParams\$/, () => (`{\n    ${ajaxParams.join(',')}\n}={}`))
        .replace(/\$params\$/, () => (`{
            ${parmasArray.join(',\n            ')}
        }`))
        .replace(/\$queryCondition\$/, () => (`{\n         ${ajaxParams.join(',')}\n    }`))
    if (config.returnVal && config.returnVal.normalize && config.returnVal.normalize.length > 0) {
        // 进行扁平化
        content2 = content2.replace(/\$normalizeFunc\$/, () => {
            const contentArray = config.returnVal.normalize.map(item => {
                if (item.name) {
                    return item.name + ': json.' + item.path.join('.')
                } else {
                    return '...normalize(json.' + item.path.join('.') + ',' + item.schema + ')'
                }
            });
            return (`normalizeFunc: json => ({\n            ${contentArray.join(',\n            ')}\n        })`)
        })
    }
    return {
        content: content2,
        fileName: 'action'
    }
};


module.exports = function ({rule: config, content} = {}) {
    console.error(33333333333333);
    let keyWord = 'AuthItemHeader';
    let fileName = '';
    let content2 = content;
    switch (config.type) {
        case type.COMPONENT:
            content2 = content.replace(new RegExp(keyWord, 'ig'), config.rule.componentName);
            fileName = config.rule.componentName;
            break;
        case type.AJAX:
            content2 = getActionContent(config, content).content;
            fileName = getActionContent(config, content).fileName;

    }
    return {content: content2, fileName}
};
