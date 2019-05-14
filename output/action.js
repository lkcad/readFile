export const acGetList88 = ({
    scheduleTime,title,pageNum,offset
}={}) => ({
    API: {
        type: ActionTypes.PS_GET_PUSH_MESSAGE_LIST,
        endpoint: '/lorem',
        params: {
            schedule_time : scheduleTime,
            title : title,
            page_num : pageNum,
            offset : offset
        },
        normalizeFunc: json => ({
            ...normalize(json.data.push_plans,Schemas.PC_MESSAGE_LIST),
            ...normalize(json.data.push_plans.asdsadsa,Schemas.PC_MESSAGE_LIST2),
            total: json.data.total
        }),
    },
    queryCondition: {
         scheduleTime,title,pageNum,offset
    }
});
