import React from "react";
import {Col, Row} from "antd";
import {WrapperHeader, WrapperTextHeader} from "./style";
import Search from "antd/es/input/Search";

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader>
                <Col span={6}>
                    <WrapperTextHeader>NTT</WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <Search
                        placeholder="input search text"
                        enterButton="Tìm kiếm"
                        size="large"
                    />
                </Col>
                <Col span={6}>
                    col-8
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent