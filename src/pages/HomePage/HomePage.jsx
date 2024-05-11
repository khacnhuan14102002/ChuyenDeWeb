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
    )
}

export default HomePage