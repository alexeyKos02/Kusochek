import React, {useEffect} from 'react';
import {useTypedDispatch, useTypedSelector} from "../store/reducers";
import {fetchUser} from "../store/action-creators/user";

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