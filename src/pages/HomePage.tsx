import React, {useEffect} from 'react';
import {useTypedDispatch, useTypedSelector} from "../hooks/storeHooks";
import {fetchUser} from "../store/reducers/userReducer"

const HomePage = () => {
    const {user, loading, error} = useTypedSelector(state => state.user)
    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    if (error) {
        return <div>{error}</div>
    }
    if (loading) {
        return <div>Идет загрузка</div>
    }
    return (
        <div>
            <div>
                {user?.id}
            </div>
            Домашняя страница
        </div>
    );
};

export default HomePage;