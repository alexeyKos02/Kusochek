import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/storeHooks";
import {fetchUser, selectError, selectLoading, selectUser} from "../store/slices/user"

const HomePage = () => {
    const user = useAppSelector(selectUser)
    const loading = useAppSelector(selectLoading)
    const error = useAppSelector(selectError)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUser(2))
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