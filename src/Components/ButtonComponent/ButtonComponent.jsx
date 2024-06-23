import React from "react";
import {Button, Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";

const ButtonComponent = ({size,styleButton, styleTextButton,textButton, disabled,...rests}) => {
    return (
        <Button
                style ={{
                    ...styleButton,
                    background: disabled ? '#ccc' : styleButton.background
                }}
                size={size}
                {...rests}
                // style={{ backgroundColor: backgroundColorButton, border: !bordered && 'none' }}
                // icon={<SearchOutlined color={colorButton} style={{ color: '#fff' }} />}
        >
            <span style={styleTextButton}>{textButton}</span>
        </Button>
    )
}

export default ButtonComponent