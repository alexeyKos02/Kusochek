import {Dispatch} from "@reduxjs/toolkit";
import {UserAction, UserActionTypes} from "../types/user";
import axios from "axios"

export function fetchUser() {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USER})
            const response = await axios.get("https://jsonplaceholder.typicode.com/users/1")
            console.log(response.data)
            dispatch({
                type: UserActionTypes.FETCH_USER_SUCCESS,
                payload: {id: response.data.id, email: response.data.email, userName: response.data.username}
            })
        } catch (e) {
            console.log(typeof e)
            dispatch({type: UserActionTypes.FETCH_USER_ERROR, payload: "Ошибка при загрузке пользователей"})
        }
    }
}