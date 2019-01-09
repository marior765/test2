import * as actionType from './consts';

const initialState = {
    data: [],
    readingPost: {},
    comments: [{body: 'пусто'}]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.GET_ITEMS:
        return {
            ...state,
            data: action.payload
        }
        case actionType.READ_POST:
        return {
            ...state,
            readingPost: action.payload,
            comments: action.payload.comments
        }
        default:
        return {
            ...state
        };
    }
}

export default reducer;