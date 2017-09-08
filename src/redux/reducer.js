const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'CACHE_REQUEST':
            const now = new Date();
            return {
                ...state,
                [action.payload.tag]: {
                    expires: action.payload.timeout * 1000 + now.getTime(),
                    response: action.payload.response
                }
            };
        default:
            return state;
    }
};

export default reducer;
