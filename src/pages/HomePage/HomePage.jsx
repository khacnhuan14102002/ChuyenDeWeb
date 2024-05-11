import React from "react";
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