import React from 'react';
import {
    StyleNameProduct,
    WrapperCardStyle,
    WrapperDiscountText,
    WrapperPrice,
    WrapperReportText
} from "./style";
import {StarFilled} from '@ant-design/icons'
import {Image} from "antd";
import {WrapperStyleTextSell} from "../ProductDetailsComponents/style";

const CardComponent = ({ imageSrc, logoSrc, productName, rating, sold, price, discount }) => {
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{width: '200px', height: '200px'}}
            style={{width: 200}}
            bodyStyle={{padding: '10px'}}
            cover={<img alt="example" src={imageSrc}/>}
        >
            <img
                src={logoSrc}
                style={{
                    width: '68px',
                    height: '14px',
                    position: 'absolute',
                    top: -1,
                    left: -1,
                    borderTopLeftRadius: '3px',
                }}
            />
            <StyleNameProduct>{productName}</StyleNameProduct>
            <WrapperReportText>
                <span style={{marginRight: '4px'}}>
                    <span>{rating} </span><StarFilled style={{fontSize: '12px', color: 'yellow'}}/>
                </span>
                <WrapperStyleTextSell> | Đã bán {sold} </WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPrice>
                {price}
                <WrapperDiscountText>
                    {discount}
                </WrapperDiscountText>
            </WrapperPrice>
        </WrapperCardStyle>
    )
}

export default CardComponent;