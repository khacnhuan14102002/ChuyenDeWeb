import React, {useState} from 'react';
import {Col, Image, InputNumber, Rate, Row} from 'antd';
import imageproductsmall from '../../assets/images/hima_small.jpg';
import * as ProductServices from '../../Services/ProductServices';
import {useSelector}   from "react-redux";
import {
    WrapperBtnQualityProduct,
    WrapperInputNumber,
    WrapperQualityProduct,
    WrapperStyleAddress,
    WrapperStyleColImage,
    WrapperStyledImageSmall,
    WrapperStyleNameProduct,
    WrapperStylePrice,
    WrapperStyleTextPrice,
    WrapperStyleTextSell
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useQuery } from "react-query";

const ProductDetailsComponent = ({ idProduct }) => {
    const [numProduct, setNumProduct] = useState(1)
    const user = useSelector((state) => state.user)

    const onChange = (value) => {
        setNumProduct(Number(value))
    };

    const fetchGetDetailsProduct = async (context) => {
        const id = context?.queryKey[1]; // Access id properly from queryKey

        console.log('id', id);

        const res = await ProductServices.getDetailsProduct(id);
        return res.data;
    };
    const handleChangeCount = (type) =>{
        if(type === 'increase'){
            setNumProduct(numProduct +1)
        }else{
            setNumProduct(numProduct - 1)
        }
    }
    const { isLoading, data: productDetails } = useQuery(['product-details', idProduct], fetchGetDetailsProduct, {
        enabled: !!idProduct
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!productDetails) {
        return <div>Product details not found</div>;
    }

    return (
        <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px' }}>
            <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
                <Image src={productDetails.image} alt="image product" preview={false} />

            </Col>
            <Col span={14} style={{ paddingLeft: '10px' }}>
                <WrapperStyleNameProduct>{productDetails.name}</WrapperStyleNameProduct>
                <div>
                    <Rate allowHalf defaultValue={productDetails.rating } value={productDetails?.rating} />
                    <WrapperStyleTextSell>| đã bán 100</WrapperStyleTextSell>
                </div>
                <WrapperStylePrice>
                    <WrapperStyleTextPrice>{productDetails.price}</WrapperStyleTextPrice>
                </WrapperStylePrice>
                <WrapperStylePrice>
                    <span>Mô tả <br/>{productDetails.descriptions}</span>

                </WrapperStylePrice>
                <WrapperStyleAddress>
                    <span>Giao đến</span>
                    <span className='address'>{user?.address}</span>
                    <span className='change-address'>- Thay đổi địa chỉ</span>
                </WrapperStyleAddress>
                <div style={{ margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
                    <div style={{ marginBottom: '8px' }}>Số lượng</div>
                    <WrapperQualityProduct>
                        <button style={{ border: 'none', background: 'transparent',cursor:'pointer' }} onClick={()=>handleChangeCount('decrease')} >
                            <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                        </button>
                        <WrapperInputNumber  defaultValue={1} onChange={onChange} value={numProduct} size="small" />
                        <button style={{ border: 'none', background: 'transparent',cursor:'pointer' }} onClick={()=>handleChangeCount('increase')} >
                            <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                        </button>
                    </WrapperQualityProduct>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: 'rgb(255,57,69)',
                            height: '48px',
                            width: '220px',
                            border: 'none',
                            borderRadius: '4px'
                        }}
                        textButton={'Chọn mua'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                    />
                    <ButtonComponent
                        size={40}
                        styleButton={{
                            background: '#fff',
                            height: '48px',
                            width: '220px',
                            border: '1px solid rgb(13,92,182)',
                            borderRadius: '4px'
                        }}
                        textButton={'Mua trả sau'}
                        styleTextButton={{ color: 'rgb(13,92,182)', fontSize: '15px' }}
                    />
                </div>
            </Col>
        </Row>
    );
};

export default ProductDetailsComponent;
