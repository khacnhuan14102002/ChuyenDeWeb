import styled from "styled-components";
import {Card} from "antd";

export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img{
        height: 200px;
        width: 200px;
    }
    position: relative;
`


export const StyleNameProduct = styled.div`
    font-size: 15px;
    line-height: 16px;
    color: rgb(56, 56, 61);
    font-weight: bold;
    text-align: center;
`

export const WrapperReportText = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 6px 0 0px;
`

export const WrapperPrice = styled.div`
    color: rgb(255, 66, 78);
    font-size: 16px;
    font-weight: bold;
    
    
`

export const WrapperDiscountText = styled.span`
    color: rgb(255, 66, 78);
    font-size: 12px;
    font-weight: bold;
`