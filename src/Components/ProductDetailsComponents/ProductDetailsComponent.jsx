import React from  'react'
import {Col, Image, Row} from 'antd'
import image from '../../assets/images/avata-neem.jpg'
import imageproductsmall  from '../../assets/images/hima_small.jpg'
import {WrapperStyleColImage, WrapperStyledImageSmall} from "./style";
const ProductDetailsComponent = () => {
    return (
        <Row style={{padding: '16px', background: '#fff'}}>
            <Col span={10}>
                <Image src={image} alt="image product" preview="false"/>
                <Row style={{paddingTop:'10px',justifyContent: `space-between`}}>
                    <WrapperStyleColImage span={8}>
                        <WrapperStyledImageSmall src={imageproductsmall} alt="image small" preview="false"/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={8}>
                        <WrapperStyledImageSmall src={imageproductsmall} alt="image small" preview="false"/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={8}>
                        <WrapperStyledImageSmall src={imageproductsmall} alt="image small" preview="false"/>
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} >col-12</Col>
        </Row>

    )
}
export default ProductDetailsComponent