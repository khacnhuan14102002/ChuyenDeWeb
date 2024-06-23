import React from 'react';
import ProductDetailsComponent from "../../Components/ProductDetailsComponents/ProductDetailsComponent";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div style={{ padding: '0 120px', background: '#efefef', height: '1000px' }}>
            <h5 style={{ fontSize: '15px' }}>
                <span
                    style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' }}
                    onClick={() => { navigate('/'); }}
                >
                    Trang chủ
                </span>
                {' '}Chi tiết sản phẩm
            </h5>
            <ProductDetailsComponent idProduct={id} />
        </div>
    );
};

export default ProductDetailPage;
