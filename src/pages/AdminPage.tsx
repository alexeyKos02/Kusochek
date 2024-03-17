import React, {useState, ChangeEvent} from 'react';
import {Tab, Tabs, Form, Button, Container} from 'react-bootstrap';
import {ToastContainer, toast, Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Notification from "../components/Notification";


type Story = {
    previewImage: File | null;
    videoFiles: File[];
};

type Product = {
    name: string;
    image: File | null;
    price: string;
    id: number;
};

const AdminPage: React.FC = () => {
    const [key, setKey] = useState<string>('story');
    const [story, setStory] = useState<Story>({previewImage: null, videoFiles: []});
    const [product, setProduct] = useState<Product>({
        name: '',
        image: null,
        price: '',
        id: Math.floor(Math.random() * 10000)
    });

    const isVideoFile = (file: any) => {
        // MIME типы для видео файлов начинаются с "video/"
        return file && file.type.startsWith('video/');
    };
    const isImageFile = (file: any) => {
        // MIME типы для изображений начинаются с "image/"
        return file && file.type.startsWith('image/');
    };
    // Обработчики изменения состояний
    const handleStoryChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            if (e.target.name === 'previewImage') {
                if (isImageFile(files[0])) {
                    setStory({...story, previewImage: files[0]});
                } else {
                    notifyError()
                }
            } else {
                for (let video of files) {
                    if (!isVideoFile(video)) {
                        notifyError()
                        return
                    }
                }
                setStory({...story, videoFiles: files});
            }
        }
    };

    const handleProductChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value, files} = e.target;
        if (files) {
            for (let picture of  Array.from(files)){
                if (!isImageFile(picture)){
                    notifyError()
                    return
                }
            }
            setProduct({...product, [name]: files});
        } else {
            setProduct({...product, [name]: value});
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (key === 'story') {
            console.log('Story submitted:', story);
        } else if (key === 'product') {
            console.log('Product submitted:', product);
        }
    };
    const notifyError = () => toast.error('Неправильный тип файла');
    const notifySuccess = () => toast.success("Отправлено");
    return (
        <Container>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => k && setKey(k)}
                className="mb-3">
                <Tab eventKey="story" title="Создание истории">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Превью изображение</Form.Label>
                            <Form.Control type="file" name="previewImage" onChange={handleStoryChange}/>
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Видео файлы</Form.Label>
                            <Form.Control type="file" multiple name="videoFiles" onChange={handleStoryChange}/>
                        </Form.Group>
                        <Button variant="primary" style={{background:"black", borderColor:"black"}}>
                            Отправить историю
                        </Button>
                    </Form>
                </Tab>
                <Tab eventKey="product" title="Создание продукта">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="productName">
                            <Form.Label>Название</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите название"
                                name="name"
                                value={product.name}
                                onChange={handleProductChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="productImage">
                            <Form.Label>Изображения</Form.Label>
                            <Form.Control
                                type="file"
                                name="image"
                                multiple
                                onChange={handleProductChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="productPrice">
                            <Form.Label>Цена</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите цену"
                                name="price"
                                value={product.price}
                                onChange={handleProductChange}
                            />
                        </Form.Group>
                        <Button variant="primary" style={{background:"black", borderColor:"black"}}>
                            Добавить продукт
                        </Button>
                    </Form>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default AdminPage;