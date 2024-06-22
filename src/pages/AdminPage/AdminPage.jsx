import React, { useState } from 'react';
import { Menu } from 'antd';
import { UserOutlined, AppstoreOutlined } from '@ant-design/icons';
import { getItem } from '../../utils';
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import AdminUser from "../../Components/AdminUser/AdminUser";
import AdminProduct from "../../Components/AdminProduct/AdminProduct";

const AdminPage = () => {
    const items = [
        getItem('User', 'user', <UserOutlined />),
        getItem('Product', 'product', <AppstoreOutlined />)

    ];
    const [keySelected, setKeySelected] = useState('');
    const  renderPage = (key) => {
        switch (key){
            case 'user':
                return (
                    <AdminUser/>

                )
            case 'product':
                return (
                    <AdminProduct/>
                )
            default:
                return <></>
        }

    }


    const handleOnclick = ({ key }) => {
        setKeySelected(key);
    };
    console.log('keySelected', keySelected);
    return (
        <>
            {/*<HeaderComponent />*/}
            <div style={{ display: 'flex' }}>
                <Menu
                    mode="inline"

                    style={{ width: 256,
                    boxShadow: '1px 1px 2px #ccc',
                    height: '100vh'
                }}
                    items={items}
                    onClick={handleOnclick}
                />
                <div style={{ flex: 1 , padding: '15px'}}>
                    {renderPage(keySelected)}
                </div>
            </div>
        </>
    );
};

export default AdminPage;
