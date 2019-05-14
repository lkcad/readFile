import Immutable from 'seamless-immutable';
import * as ActionTypes from '@/const/ActionTypes';

const defaultRoleList = {
    isFetching: false,
    listIds: [],
    entities: {},
};
const roleMap = item => ({
    id: item.id,
    name: item.name,
    authItemIds: item.auth_item_ids || []
});
export default function roleList(
    state = Immutable(defaultRoleList), action
) {
    switch (action.type) {
        case `${ActionTypes.AU_GET_ROLE_LIST}_REQ`: {
            return state.merge({
                isFetching: true
            });
        }
        case `${ActionTypes.AU_GET_ROLE_LIST}_SUC`: {
            return state.merge({
                isFetching: false,
                listIds: action.response.role.result,
                entities: Object.keys(action.response.role.entities.roles || {})
                    .reduce((pre, key) => ({
                        ...pre,
                        [key]: roleMap(action.response.role.entities.roles[key])
                    }), {}),
                authItemEntities: action.response.authItems.entities.authItem
            });
        }
        case `${ActionTypes.AU_GET_ROLE_LIST}_FAI`: {
            return state.merge({
                isFetching: false,
            });
        }
        default: {
            return state;
        }
    }
}
