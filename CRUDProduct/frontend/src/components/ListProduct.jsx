import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

const ListProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/product')
            .then((res) => {
                setProducts(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.error('Lỗi khi gọi API:', err);
            });
    }, []);

    

    return (
        <>
            <Button variant="success">Thêm sản phẩm</Button>
           
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tiêu đề</th>
                        <th>Giá</th>
                        <th>Ngày nhập</th>
                        <th>Số lượng</th>
                        <th>Tùy chỉnh</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr key={product.Id}>
                                <td>{product.Id}</td>
                                <td>{product.Title}</td>
                                <td>{product.Price}</td>
                                <td>{new Date(product.IDate).toLocaleDateString('vi-VN')}</td>
                                <td>{product.Quantity}</td>
                                <td>
                                    <Button variant="primary">Sửa</Button>
                                    <Button variant="danger">Xóa</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>

    );
};

export default ListProduct;