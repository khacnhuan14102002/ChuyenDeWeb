import React from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import NavBarComponent from "../../Components/NavbarComponent/NavBarComponent";
import TypeProduct from "../../Components/TypeProduct/TypeProduct";
import {WrapperButtonMore, WrapperProducts, WrapperTypeProduct} from "./style";
import SilderComponent from "../../Components/SliderComponent/SilderComponent";
import slider1 from "../../assets/images/sing.jpg"
import slider2 from "../../assets/images/slider2.webp"
import slider3 from "../../assets/images/slider3.jpg"
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";

const HomePage = () => {
    const arr = ['nước tẩy trang', 'sửa rửa mặt', 'kem chống nắng']
    return (
        <>
            <div style={{padding: '0 120px'}}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <TypeProduct name={item} key={item}/>
                        )
                    })}
                </WrapperTypeProduct>
            </div>
            <div className='body' style={{width:'100%',backgroundColor:'#efefef',}}>
            <div id="container" style={{height: '1000px', width: '1270px',margin: '0 auto'}}>
                <SilderComponent arrImages={[slider1, slider2, slider3]}/>
                <WrapperProducts>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
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