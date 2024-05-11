import React from "react";

import CardComponent from "../../Components/CardComponent/CardComponent";
import NavBarComponent from "../../Components/NavbarComponent/NavBarComponent";

const HomePage = () => {
    return (
        <>
            <div id="container" style={{backgroundColor: '#efefef', padding: '0 120px', height: '1000px'}}>
                <div style={{marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px'}}>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                </div>
                {/*<ButtonComponent textButton ="Xem thêm" type="outline" styleButton={{*/}
                {/*    border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)',*/}
                {/*    width: '240px', height: '38px', borderRadius: '4px'*/}
                {/*}}/>*/}
            </div>
        </>

import TypeProduct from "../../Components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SilderComponent from "../../Components/SliderComponent/SilderComponent";
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.jpg'

const HomePage = () => {
     const arr= ['tv','tu lanh','laptop']
return (
    <div style={{padding: '0 120px'}}>
        <WrapperTypeProduct>
        {arr.map((item)=>{
            return(
                <TypeProduct name={item} key={item}/>
            )
        })}  
        </WrapperTypeProduct>
        <SilderComponent arrImages={[slider1, slider2, slider3]}/>
    </div>
    )
}

export default HomePage