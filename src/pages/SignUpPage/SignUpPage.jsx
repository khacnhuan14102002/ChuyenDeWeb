import React, {useState} from 'react'
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons'

import {WrapperContainerLeft, WrapperContainerRight, WrapperTextLight} from "../SignInPage/style";
import InputForm from "../../Components/InputForm/InputForm";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import {Image} from "antd";
import imagelogo from "../../assets/images/sing.jpg";
const  SignUpPage = ()  =>{
    const [isShowPassword,setIsShowPassword] = useState(false);
    const [isShowComfirmPassword,setIsShowComfirmPassword] = useState(false);
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.53)',
            height: '100vh'
        }}>
            <div style={{width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex'}}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập vào tạo tài khoản</p>
                    <InputForm style={{marginBottom: '10px'}} placeholder={"abc@gmail.com"}/>
                    <div style={{position: 'relative'}}>
                    <span
                        style={{
                            zIndex: 10,
                            position: 'absolute',
                            top: '4px',
                            right: '8px'
                        }}
                    >{
                        isShowPassword ? (
                            <EyeFilled/>
                        ) : (
                            <EyeInvisibleFilled/>
                        )
                    }
                    </span>
                        <InputForm placeholder="mật khẩu" style={{marginBottom: '10px'}}/>
                    </div>
                    <div style={{position: 'relative'}}>
                    <span
                        style={{
                            zIndex: 10,
                            position: 'absolute',
                            top: '4px',
                            right: '8px'
                        }}
                    >{
                        isShowPassword ? (
                            <EyeFilled/>
                        ) : (
                            <EyeInvisibleFilled/>
                        )
                    }
                    </span>
                        <InputForm placeholder="xác nhận mật khẩu"/>
                    </div>


                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: 'rgb(255,57,69)',
                            height: '48px',
                            width: '100%',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '26px 0 10px'
                        }}
                        textButton={'Đăng Ký'}
                        styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700'}}
                    ></ButtonComponent>

                    <p>Bạn đã có tài khoản?<WrapperTextLight>Đăng nhập</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={imagelogo} preview={false} alt="image-logo" height="203px" width="203px"/>
                    <h4>Mua sắm mỹ phẩm tại NTT Shop</h4>
                </WrapperContainerRight>
            </div>
        </div>
    )
}
export default SignUpPage