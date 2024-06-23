import React, {useState} from 'react';
import {Divider, Image} from 'antd'
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons'
import {WrapperContainerLeft, WrapperContainerRight, WrapperTextLight} from "./style";
import InputForm from "../../Components/InputForm/InputForm";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import imagelogo  from '../../assets/images/sing.jpg'
import {useNavigate,Navigate} from "react-router-dom";
import {useMutation} from "react-query";
import axios from "axios";
import * as UserService from '../../Services/UserService'
import {loginUser} from "../../Services/UserService";
import {useMutationHooks} from "../../hook/useDebounce";


const  SignInPage = ()  =>{
    const [isShowPassword,setIsShowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const  mutation =useMutationHooks(
         data => UserService.loginUser(data)
    )
console.log('mutation', mutation)

    const handlerNavigateSignUp = () => {
        navigate('/sign-up');
    }
    const handleOnChangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnChangePassword = (value) => {
        setPassword(value)
    }

    const handleSignIn = () => {
        mutation.mutate(
            email,
            password
        )
        console.log('sign-in', email, password)
    }
    return  (
        <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.53)', height:'100vh'}}>
        <div style={{width:'800px', height:'445px', borderRadius: '6px', background: '#fff',display: 'flex'}}>
            <WrapperContainerLeft>
                <h1>Xin chào</h1>
                <p>Đăng nhập vào tạo tài khoản</p>
                <InputForm style={{marginBottom: '10px'}} placeholder={"abc@gmail.com"} value={email} onChange={handleOnChangeEmail}/>

                <div style={{position: 'relative'}}>
                    <span
                        onClick={() => setIsShowPassword(!isShowPassword)}
                        style={{
                            zIndex : 10,
                            position: 'absolute',
                            top: '4px',
                        right: '8px'
                    }}
                        >{
                        isShowPassword ? (
                            <EyeFilled/>
                        ):(
                            <EyeInvisibleFilled/>
                        )
                    }
                    </span>
                    <InputForm placeholder="password" type={isShowPassword ? "text" : "password"}
                               value={password} onChange={handleOnChangePassword}/>
                </div>
                <ButtonComponent
                    disabled ={ !email.length || !password.length }
                    onClick={handleSignIn}
                    size={40}
                    styleButton={{
                        background: 'rgb(255,57,69)',
                        height: '48px',
                        width: '100%',
                        border:'none',
                        borderRadius: '4px',
                        margin: '26px 0 10px'
                    }}
                    textButton={'Đăng nhập'}
                    styleTextButton={{ color: '#fff',fontSize:'15px',fontWeight: '700' }}
                ></ButtonComponent>
                <p><WrapperTextLight>Quên mật khẩu</WrapperTextLight></p>
                <p>Chưa có tài khoản?<WrapperTextLight onClick={handlerNavigateSignUp}>Tạo tài khoản</WrapperTextLight></p>
            </WrapperContainerLeft>
            <WrapperContainerRight>
               <Image src={imagelogo} preview={false} alt="image-logo" height="203px" width="203px"/>
                <h4>Mua sắm mỹ phẩm tại NTT Shop</h4>
            </WrapperContainerRight>
        </div>
        </div>
    )
}
export default SignInPage