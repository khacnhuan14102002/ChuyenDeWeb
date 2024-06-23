import React, {useState} from 'react'
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons'

import {WrapperContainerLeft, WrapperContainerRight, WrapperTextLight} from "../SignInPage/style";
import InputForm from "../../Components/InputForm/InputForm";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import {Image} from "antd";
import imagelogo from "../../assets/images/sing.jpg";
import {useNavigate} from "react-router-dom";

const SignUpPage = () => {
    const navigate = useNavigate()

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowComfirmPassword, setIsShowComfirmPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleOnChangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnChangePassword = (value) => {
        setPassword(value)
    }

    const handleOnChangeConfirmPassword = (value) => {
        setConfirmPassword(value)
    }

    const handlerNavigateSignIn = () => {
        navigate('/sign-in');
    }

    const handleSignUp = () => {
        console.log('sign-up', email, password, confirmPassword)
    }

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
                    <InputForm style={{marginBottom: '10px'}} placeholder={"abc@gmail.com"} value={email} onChange={handleOnChangeEmail} />
                    <div style={{position: 'relative'}}>
                        <span
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px'
                            }}
                        >{
                            isShowPassword ? (
                                <EyeFilled />
                            ) : (
                                <EyeInvisibleFilled />
                            )
                        }
                        </span>
                        <InputForm placeholder="mật khẩu" style={{marginBottom: '10px'}} type={isShowPassword ? "text" : "password"}
                                   value={password} onChange={handleOnChangePassword} />
                    </div>
                    <div style={{position: 'relative'}}>
                        <span
                            onClick={() => setIsShowComfirmPassword(!isShowComfirmPassword)}
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px'
                            }}
                        >{
                            isShowComfirmPassword ? (
                                <EyeFilled />
                            ) : (
                                <EyeInvisibleFilled />
                            )
                        }
                        </span>
                        <InputForm placeholder="xác nhận mật khẩu" type={isShowComfirmPassword ? "text" : "password"}
                                   value={confirmPassword} onChange={handleOnChangeConfirmPassword} />
                    </div>

                    <ButtonComponent
                        disabled ={ !email.length || !password.length || !confirmPassword.length}
                        onClick={handleSignUp}
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

                    <p>Bạn đã có tài khoản?<WrapperTextLight onClick={handlerNavigateSignIn}>Đăng nhập</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={imagelogo} preview={false} alt="image-logo" height="203px" width="203px" />
                    <h4>Mua sắm mỹ phẩm tại NTT Shop</h4>
                </WrapperContainerRight>
            </div>
        </div>
    )
}
export default SignUpPage
