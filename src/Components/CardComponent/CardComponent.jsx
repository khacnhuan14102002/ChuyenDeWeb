import React from 'react';
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPrice, WrapperReportText } from "./style";
import { StarFilled } from '@ant-design/icons';
import logo from '../../assets/images/logo.png';
import { WrapperStyleTextSell } from "../ProductDetailsComponents/style";

const CardComponent = (props) => {
    const { countInStock, description, image, name, price, rating, type, discount, selled } = props;

    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src={image} />} // Sử dụng đường dẫn từ props
        >
            <img
                src={logo}
                style={{
                    width: '68px',
                    height: '14px',
                    position: 'absolute',
                    top: -1,
                    left: -1,
                    borderTopLeftRadius: '3px',
                }}
            />
            <StyleNameProduct>{name}</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span>{rating} </span><StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                </span>
                <WrapperStyleTextSell> | Đã bán {selled}  </WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPrice>
                {price}
                <WrapperDiscountText>
                   -  {discount || 5} %
                </WrapperDiscountText>
            </WrapperPrice>
        </WrapperCardStyle>
    );
}

export default CardComponent;