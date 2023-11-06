const initialState = {
    users: [],
}

const userReducer = ( state = initialState, action ) => {
    if( action.type === 'GET_USERS' ) {
        return {
            ...state,
            users: action.payload,
        }
    }

    if( action.type === 'ADD_USER' ) {
        return {
            ...state,
            users: [ ...state.users, action.payload ],
        }
    }

    return state;
}

export default userReducer;