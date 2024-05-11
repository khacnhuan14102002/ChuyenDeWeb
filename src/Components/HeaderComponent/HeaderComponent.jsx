import React from "react";
import {Col, Row} from "antd";
import {WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall} from "./style";
import Search from "antd/es/input/Search";
import { UserOutlined,CaretDownOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import {ButtonInputSearch} from "../ButtonInputSearch/ButtonInputSearch";

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader gutter ={16}>
                <Col span={6}>
                    <WrapperTextHeader>NTT</WrapperTextHeader>
                </Col>
                <Col span={12}>
                <ButtonInputSearch
                        size="large"
                        placeholder="Nhập từ khóa tìm kiếm"
                        bordered={ false}
                        textButton="Tìm kiếm"
                       
                        // allowClear
                        // enterButton="Tìm kiếm"
                        // onSearch={onSearch}
                />
                </Col>
                <Col span={6} style={{ display:'flex', gap:'20px' }}>
                <WrapperHeaderAccount>
                    <UserOutlined style={{fontSize: '30px'}}/>
                    <div>
                        <WrapperTextHeaderSmall>Đăng nhập/ Đăng ký</WrapperTextHeaderSmall>
                        <div>
                            <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                            <CaretDownOutlined/>
                        </div>
                    </div>
                </WrapperHeaderAccount>
                <div>
                    <ShoppingCartOutlined style={{fontSize: '30px', color:'#fff'}}/>
                    <WrapperTextHeaderSmall> Giỏ hàng </WrapperTextHeaderSmall>
                </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent