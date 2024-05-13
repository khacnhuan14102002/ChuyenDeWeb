import React from "react";
import {Badge, Col, Row} from "antd";
import {WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall} from "./style";
import Search from "antd/es/input/Search";
import { UserOutlined,CaretDownOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import {ButtonInputSearch} from "../ButtonInputSearch/ButtonInputSearch";

const HeaderComponent = () => {
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