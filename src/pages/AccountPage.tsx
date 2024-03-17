import React, {useState} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import EditableField from '../components/account/EditableFiled';
import AddressList from '../components/account/Addresslist';
import {useAppDispatch, useAppSelector} from "../hooks/storeHooks";
import {selectUser} from "../store/slices/user";

interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

const UserProfile: React.FC = () => {
    const user = useAppSelector(selectUser)
    const [userTempInfo, setUserTempInfo] = useState<User>(user);
    const [addresses, setAddresses] = useState<string[]>(['Адрес 1', 'Адрес 2']);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    // Обновленный метод для полей пользователя
    const updateUser = (field: keyof User, value: string) => {
        setUserTempInfo((prev) => ({...prev, [field]: value}));
    };

    return (
        <Container className="my-5">
            <Row>
                {/* Первая половина экрана */}
                <Col sm={12} md={6}>
                    <h2>Профиль пользователя</h2>
                    <EditableField label="Имя" initialValue={userTempInfo.firstName}
                                   onSave={(value) => updateUser('firstName', value)}/>
                    <EditableField label="Фамилия" initialValue={userTempInfo.lastName}
                                   onSave={(value) => updateUser('lastName', value)}/>
                    <EditableField label="Электронная почта" initialValue={userTempInfo.email}
                                   onSave={(value) => updateUser('email', value)}/>
                    <EditableField label="Телефон" initialValue={userTempInfo.phone}
                                   onSave={(value) => updateUser('phone', value)}/>
                </Col>

                {/* Вторая половина экрана */}
                <Col sm={12} md={6}>
                    <div>
                        <Button onClick={toggleVisibility} variant="primary">
                            {isVisible ? 'Скрыть адреса' : 'Показать адреса'}
                        </Button>
                        {isVisible && (
                            <div className="mt-3">
                                <AddressList initialAddresses={addresses} onUpdate={setAddresses}/>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
            <Button>Сохранить изменения</Button>
            {/*<h2>Профиль пользователя</h2>*/}
            {/*<EditableField label="Имя" initialValue={user.firstName} onSave={(value) => updateUser('firstName', value)} />*/}
            {/*<EditableField label="Фамилия" initialValue={user.lastName} onSave={(value) => updateUser('lastName', value)} />*/}
            {/*<EditableField label="Электронная почта" initialValue={user.email} onSave={(value) => updateUser('email', value)} />*/}
            {/*<EditableField label="Телефон" initialValue={user.phone} onSave={(value) => updateUser('phone', value)} />*/}
            {/*<div>*/}
            {/*    <Button onClick={toggleVisibility} variant="primary">*/}
            {/*        {isVisible ? 'Скрыть' : 'Показать'}*/}
            {/*    </Button>*/}
            {/*    {isVisible && (*/}
            {/*        <div className="mt-3">*/}
            {/*            <AddressList initialAddresses={addresses} onUpdate={setAddresses} />*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}
        </Container>
    );
};

export default UserProfile;