import {UserAction, UserActionTypes, UserState} from "../types/user";

const defaultState: UserState = {
    loading: false,
    error: null,
    user: {id: 0, userName: null, email: null}
}

export function userReducer(state = defaultState, action: UserAction): UserState {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return {loading: true, error: null, user: null}
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {loading: false, error: null, user: action.payload}
        case UserActionTypes.FETCH_USER_ERROR:
            return {loading: false, error: action.payload, user: null}
        default:
            return state
    }
}