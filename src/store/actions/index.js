import * as actionTypes from './actions'


export const moveup = (index) => {
    return  {
        type: actionTypes.MOVE_UP,
        id: index
    }
}