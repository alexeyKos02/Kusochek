import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

interface EditableFieldProps {
    label: string;
    initialValue: string;
    onSave: (value: string) => void;
    onDelete?: () => void; // Опциональный пропс для удаления
}

const EditableField: React.FC<EditableFieldProps> = ({ label, initialValue, onSave, onDelete }) => {
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState(initialValue);

    return (
        <div className="mb-3">
            {editMode ? (
                <InputGroup>
                    <Form.Control
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button variant="outline-success" onClick={() => { onSave(value); setEditMode(false); }}>
                        <ion-icon name="checkmark-outline"></ion-icon>
                    </Button>
                    <Button variant="outline-secondary" onClick={() => setEditMode(false)}>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </Button>
                    {onDelete && (
                        <Button variant="outline-danger" onClick={onDelete}>
                            <ion-icon name="backspace-outline"></ion-icon>
                        </Button>
                    )}
                </InputGroup>
            ) : (
                <>
                    <div>{label}: {value}</div>
                    <Button variant="outline-primary" onClick={() => setEditMode(true)}>Редактировать</Button>
                </>
            )}
        </div>
    );
};

export default EditableField;