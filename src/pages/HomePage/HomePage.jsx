import React from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import NavBarComponent from "../../Components/NavbarComponent/NavBarComponent";
import TypeProduct from "../../Components/TypeProduct/TypeProduct";
import {WrapperButtonMore, WrapperProducts, WrapperTypeProduct} from "./style";
import SilderComponent from "../../Components/SliderComponent/SilderComponent";
import slider1 from "../../assets/images/slider.webp"
import slider2 from "../../assets/images/slider_1.webp"
import slider3 from "../../assets/images/slider_2.webp"
import img1 from "../../assets/images/anessa.jpg"
import img2 from "../../assets/images/avene.png"
import img3 from "../../assets/images/cetaphil.jpg"
import img4 from "../../assets/images/simple.jpg"
import img5 from "../../assets/images/cosrx.jpg"
import img6 from "../../assets/images/cocoon.jpg"
import img7 from "../../assets/images/mat-na-dat-set-skintific.jpg"
import img8 from "../../assets/images/hadalabo.jpg"
import img9 from "../../assets/images/B5_La Roche_Possay.jpg"
import img10 from "../../assets/images/Cosrx4.jpg"
import logo from "../../assets/images/logo.png"
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";

const HomePage = () => {
    const arr = ['Kem chống nắng', 'Mặt nạ', 'Serum', 'Sữa rửa mặt', 'Toner', 'Tẩy trang']
    const cardData = [
        {
            imageSrc: img1,
            logoSrc: logo,
            productName: 'Kem chống nắng Anessa',
            rating: '4.96',
            sold: '1000+',
            price: '450.000đ',
            discount: '-10%'
        },
        {
            imageSrc: img2,
            logoSrc: logo,
            productName: 'Kem chống nắng Avene',
            rating: '4.85',
            sold: '500+',
            price: '250.000đ',
            discount: '-5%'
        },
        {
            imageSrc: img3,
            logoSrc: logo,
            productName: 'Sữa rửa mặt Cetaphil',
            rating: '4.9',
            sold: '300+',
            price: '350.000đ',
            discount: '-15%'
        },
        {
            imageSrc: img4,
            logoSrc: logo,
            productName: 'Nước tẩy trang Simple',
            rating: '4.8',
            sold: '200+',
            price: '250.000đ',
            discount: '-10%'
        },
        {
            imageSrc: img5,
            logoSrc: logo,
            productName: 'Sữa rửa mặt CosrX',
            rating: '4.9',
            sold: '500+',
            price: '150.000đ',
            discount: '-5%'
        },
        {
            imageSrc: img6,
            logoSrc: logo,
            productName: 'Nước tẩy trang Cocoon',
            rating: '4.86',
            sold: '600+',
            price: '250.000đ',
            discount: '-10%'
        },
        {
            imageSrc: img7,
            logoSrc: logo,
            productName: 'Mặt nạ đất sét Skintific',
            rating: '4.97',
            sold: '1000+',
            price: '350.000đ',
            discount: '-10%'
        },
        {
            imageSrc: img8,
            logoSrc: logo,
            productName: 'Nước tẩy trang Hadalabo',
            rating: '4.80',
            sold: '600+',
            price: '350.000đ',
            discount: '-5%'
        },
        {
            imageSrc: img9,
            logoSrc: logo,
            productName: 'Serum B5_La Roche_Possay',
            rating: '4.95',
            sold: '800+',
            price: '450.000đ',
            discount: '-15%'
        },
        {
            imageSrc: img10,
            logoSrc: logo,
            productName: 'Serum CosrX4',
            rating: '4.98',
            sold: '1500+',
            price: '450.000đ',
            discount: '-5%'
        },
    ];
    return (
        <>
            <div style={{padding: '0 100px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer'}}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <TypeProduct name={item} key={item}/>
                        )
                    })}
                </WrapperTypeProduct>
            </div>
            <div className='body' style={{width:'100%',backgroundColor:'#efefef',}}>
            <div id="container" style={{height: '1050px', width: '1270px',margin: '0 auto'}}>
                <SilderComponent arrImages={[slider1, slider2, slider3]}/>
                <WrapperProducts>
                    {cardData.map((data, index) => (
                        <CardComponent
                            key={index}
                            imageSrc={data.imageSrc}
                            logoSrc={data.logoSrc}
                            productName={data.productName}
                            rating={data.rating}
                            sold={data.sold}
                            price={data.price}
                            discount={data.discount}
                        />
                    ))}
                </WrapperProducts>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                    <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
                        border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)',
                        width: '240px', height: '38px', borderRadius: '4px'
                    }}
                                      styleTextButton={{fontWeight: 500}}/>
                </div>
                </div>
            </div>
        </>
    )
}

export default HomePage