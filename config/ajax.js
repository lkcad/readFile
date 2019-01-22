const {type} = require('../const/const');

module.exports = {
    templateName:'action.js',
    fileName: 'question',
    type: type.AJAX,
    actionType:'ActionTypes.PS_GET_PUSH_MESSAGE_LIST',
    actionName:'acGetList',
    ajax:{
        api: '/aaaa/sadsad/sadasd',
        params: {
            "schedule_time": 1519214141,
            "title":"圣诞节通知",
            "page_num": 20,
            "offset": 1000
        },
    },
    returnVal:{
        example:{
            "ret": 1,
            "data": {
                push_plans:[
                    {
                        "id" : 1123144,
                        "plat" : 1,  //推送的来源平台  1 TIA 2 小板凳
                        "channel" : 1,   // 推送的通道 1 微信公众号 2 ios 3 android
                        "msg_type" : 1, //该平台下消息类型 （公众号对应 1 文字 2 图片  3 模板)
                        "status" : 1,
                        "content" : "aaaa", //消息内容，微信模板消息不使用此字段，使用 extras 字段
                        "extras":{
                            "lesson_name" : "点按对焦",
                            "url" : "http://www.baidu.com"
                        },
                        "send_time" : 12345125152,  //发送时间
                        "expire_time" : 1231415151, //消息推送的最后期限
                        "level" : 1, //发送优先级
                        "ct": 1251515,
                        "gid" : "sgsgsxx",  //推送组合id
                        "title": "课程通知",
                        "send_count" : 100,//推送总人数
                        "ok_count" : 90, //成功人数
                        "fail_count":10//失败人数
                    }
                ]
            },
            total: 100
        },

        normalize:[{path:['data','push_plans'],schema:'Schemas.PC_MESSAGE_LIST'},{path:['data','total'],name:'total'}]
    },
    normalize:['auth_item_ids']
};
