import React from "react";
import {Button, Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";

const ButtonComponent = ({size,styleButton, styleTextButton,textButton,...rests}) => {
    return (
        <Button size={size}
                style={styleButton}
                {...rests}
                // style={{ backgroundColor: backgroundColorButton, border: !bordered && 'none' }}
                // icon={<SearchOutlined color={colorButton} style={{ color: '#fff' }} />}
        >
            <span style={styleTextButton}>{textButton}</span>
        </Button>
    )
}

export default ButtonComponent