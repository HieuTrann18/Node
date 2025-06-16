import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FormProduct = () => {

    const [formData, setFormData] = useState({
        title: '',
        price: '',
        idate: '',
        quantity: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:3000/api/product', formData);
             alert('Added successfully');
              setFormData({ title: '', price: '', idate: '', quantity: '' });
        }catch(err){
            console.error('Lỗi gửi sản phẩm:', err);
            alert('Add fail');
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type="text"
                    id='title'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    type="text"
                    id='price'
                     name='price'
                     value={formData.price}
                    onChange={handleChange}
                    placeholder="Price" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    type="date"
                    id='idate'
                    name='idate'
                    value={formData.idate}
                    onChange={handleChange}
                    placeholder="Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    type="text"
                    id='quantity'
                    name='quantity'
                     value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Quantity" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default FormProduct;