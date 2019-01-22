export const acGetList = ({
    scheduleTime,title,pageNum,offset
}={}) => ({
    API: {
        type: ActionTypes.PS_GET_PUSH_MESSAGE_LIST,
        endpoint: '/aaaa/sadsad/sadasd',
        params: {
            schedule_time:scheduleTime,
            title:title,
            page_num:pageNum,
            offset:offset
        },
        normalizeFunc: json => ({
            ...normalize($dataNormalize$, $schemaNormal$),
            total: json.data.total,
        }),
    },
    queryCondition: {
         scheduleTime,title,pageNum,offset
    }
});
