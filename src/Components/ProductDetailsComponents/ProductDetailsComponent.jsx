import React from  'react'
import {Col, Image, InputNumber, Row} from 'antd'
import image from '../../assets/images/avata-neem.jpg'
import imageproductsmall  from '../../assets/images/hima_small.jpg'
import {
    WrapperBtnQualityProduct,
    WrapperInputNumber,
    WrapperQualityProduct,
    WrapperStyleAddress,
    WrapperStyleColImage,
    WrapperStyledImageSmall,
    WrapperStyleNameProduct,
    WrapperStylePrice, WrapperStyleTextPrice,
    WrapperStyleTextSell
} from "./style";
import {StarFilled, PlusOutlined, MinusOutlined, SearchOutlined} from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const  colorButton = "#fff"
const ProductDetailsComponent = () => {
    const onChange = ()=>{}
    return (
        <Row style={{padding: '16px', background: '#fff',borderRadiu:'4px'}}>
            <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight:'8px'}}>
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
            <Col span={14}  style={{paddingLeft:'10px'}}>
            <WrapperStyleNameProduct>Mặt nạ himalaya</WrapperStyleNameProduct>
            <div>
                <StarFilled style={{fontsize:'10px', color: 'yellow'}}/>
                <StarFilled style={{fontsize:'10px', color: 'yellow'}}/>
                <StarFilled style={{fontsize:'10px', color: 'yellow'}}/>
                <StarFilled style={{fontsize:'10px', color: 'yellow'}}/>
                <StarFilled style={{fontsize:'10px', color: 'yellow'}}/>
                <WrapperStyleTextSell>|đã bán 100</WrapperStyleTextSell>
            </div>
                < WrapperStylePrice>
                    <WrapperStyleTextPrice>250.000</WrapperStyleTextPrice>
                </WrapperStylePrice>
                <WrapperStyleAddress>
                    <span>Giao đến</span>
                    <span className='address'>Q.Thủ Đức, Hồ Chí Minh</span>
                    <span className='change-address'>-Thay đổi địa chỉ</span>
                </WrapperStyleAddress>
                <div style={{margin: '10px 0 20px',padding: '10px 0',borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5'}}>
                    <div style={{marginBottom: '8px'}}>Số lượng</div>
                    <WrapperQualityProduct>
                        <button style={{border:'none',background:'transparent'}}>
                        <MinusOutlined style={{ color: '#000' , fontSize: '20px'}}/>
                        </button>
                        <WrapperInputNumber  defaultValue={1} onChange={onChange} size="small"/>
                        <button>
                        <PlusOutlined style={{ color: '#000' , fontSize: '20px'}}/>
                        </button>
                    </WrapperQualityProduct>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: 'rgb(255,57,69)',
                        height: '48px',
                        width: '220px',
                        border:'none',
                        borderRadius: '4px'
                    }}
                        textButton={'Chọn mua'}
                        styleTextButton={{ color: '#fff',fontSize:'15px',fontWeight: '700' }}
                    ></ButtonComponent>
                    <ButtonComponent
                        size={40}
                        styleButton={{
                            background: '#fff',
                            height: '48px',
                            width: '220px',
                            border:'1px solid rgb(13,92,182)',
                            borderRadius: '4px'
                        }}
                        textButton={'Mua trả sau'}
                        styleTextButton={{ color: 'rgb(13,92,182)',fontSize: '15px' }}
                    ></ButtonComponent>
                </div>
            </Col>
        </Row>

    )
}
export default ProductDetailsComponent