import React, {useState} from "react";
import {Badge, Col, Row} from "antd";
import {WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall} from "./style";
import Search from "antd/es/input/Search";
import { UserOutlined,CaretDownOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import {ButtonInputSearch} from "../ButtonInputSearch/ButtonInputSearch";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {searchProduct} from "../../redux/slides/productSlide";


const HeaderComponent = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const[search,setSearch] = useState('')
    const handleNavigateLogin =() =>{
        navigate('/sign-in')

    }
    const onSearch  = (e) => {
        setSearch(
            e.target.value
        )
        dispatch(searchProduct( e.target.value))
        console.log('e', e.target.value)
    }
    return (
        <div>
            <WrapperHeader>
                <Col span={5}>
                    <WrapperTextHeader>NTT</WrapperTextHeader>
                </Col>
                <Col span={13}>
                    <ButtonInputSearch
                        size="large"
                        placeholder="Nhập từ khóa tìm kiếm"
                        bordered={ false}
                        textButton="Tìm kiếm"

                        // allowClear
                        // enterButton="Tìm kiếm"
                        onChange={onSearch}
                    />
                </Col>
                <Col span={6} style={{ display:'flex', gap:'20px' }}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{fontSize: '30px'}}/>
                        <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>
                            <WrapperTextHeaderSmall>Đăng nhập/ Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined/>
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <Badge count={4} size="small">
                            <ShoppingCartOutlined style={{fontSize: '30px', color:'#fff'}}/>
                        </Badge>
                        <WrapperTextHeaderSmall> Giỏ hàng </WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent